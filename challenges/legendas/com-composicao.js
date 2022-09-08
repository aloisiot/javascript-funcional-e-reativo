const fs = require("fs");
const path = require("path");
const Logger = require("./logger");
const fn = require("./functions");

const subtitleDir = path.join(__dirname, "data");

const SubtitleAnalizer = Object.create(Object);

const symbols = ["<i>", "</i>", "\r", "[", "]", /[!,?#-$%^&*_)}({}]/g];

const writeResultFile = () => {
  Logger.debug("Writing result file.");
  SubtitleAnalizer.writeResultFile();
};

const addWordsToResult = (wordList) => {
  wordList.forEach((word) => {
    SubtitleAnalizer.addWord(word);
  });
};

Object.defineProperty(SubtitleAnalizer, "words", {
  value: {},
  writable: false,
  enumerable: true,
});

SubtitleAnalizer.prototype.addWord = function (word) {
  if (!this.words[word]) {
    this.words[word] = 1;
  } else {
    this.words[word] += 1;
  }
};

SubtitleAnalizer.prototype.writeResultFile = function () {
  const file = path.join(subtitleDir, "result.json");

  const wordList = Object.keys(this.words)
    .sort((key1, key2) => this.words[key2] - this.words[key1])
    .reduce((acc, key) => {
      acc.push({ word: key, repetitions: this.words[key] });
      return acc;
    }, []);

  const result = { total: wordList.length, wordList };
  const fileContent = JSON.stringify(result, null, 2);
  fs.writeFileSync(file, fileContent, { encoding: "utf-8" });
};

SubtitleAnalizer.prototype.analize = function () {
  const analizeChain = fn.compose(
    fn.readDir,
    fn.filterFilesByNameIncludes("legendas_"),
    fn.readAllFiles,
    fn.joinContentFiles,
    fn.removeSymbols(symbols),
    fn.splitBy("\n"),
    fn.removeIfEmpty,
    fn.removeIfIsNumber,
    fn.removeIfIncludes("-->"),
    fn.joinBy(" "),
    fn.extractWordsFromText,
    fn.removeIfEmpty,
    addWordsToResult,
    writeResultFile
  );

  analizeChain(subtitleDir);
};

SubtitleAnalizer.analize();
