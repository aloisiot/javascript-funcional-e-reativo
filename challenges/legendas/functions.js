const fs = require("fs");
const path = require("path");
const Logger = require("./logger");

const readDir = (dir) => {
  Logger.debug("Reading dir.");
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, data) => {
      if (err) {
        reject(err.message);
      } else {
        resolve(data.map((file) => path.join(dir, file)));
      }
    });
  });
};

const readFile = (fileName) => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      err ? reject(err.message) : resolve(data.toString());
    });
  });
};

const readAllFiles = (fileNames) => {
  Logger.debug("Reading files.");
  return Promise.all(fileNames.map(readFile));
};

const joinContentFiles = (fileContents) => {
  Logger.debug("Embedding content file.");
  return fileContents.reduce((acc, text) => acc.concat(text));
};

const extractWordsFromText = (text) => {
  return text
    .split(" ")
    .map((word) => word.trim().replace("[", "").replace("]", ""))
    .filter((word) => word !== "-");
};

const removeIfIsNumber = (textList) => {
  return textList.filter((txt) => isNaN(txt.trim()));
};

const removeIfEmpty = (textList) => {
  return textList.filter((text) => text.trim());
};

const splitBy = (symbol) => (text) => text.split(symbol)

const joinBy = (symbol) => (textList) => textList.join(symbol)

const removeIfIncludes = (substring) => (textList) => {
  return textList.filter((text) => !text.includes(substring));
};

const filterFilesByNameIncludes = (substring) => (fileNames) => {
  Logger.debug("Filtering subtitle files.");
  return fileNames.filter((file) => file.includes(substring));
};

const removeSymbols = (symbols) => (text) => {
  let result = text;
  symbols.forEach((symbol) => {
    result = result.replaceAll(symbol, "");
  });
  return result;
};

function compose(...fns) {
  return (valor) => {
    return fns.reduce(async (ac, fn) => {
      return Promise.resolve(ac) === ac ? fn(await ac) : fn(ac);
    }, valor);
  };
}


module.exports = {
  readDir,
  filterFilesByNameIncludes,
  readAllFiles,
  removeIfEmpty,
  removeIfIsNumber,
  removeIfIncludes,
  joinContentFiles,
  extractWordsFromText,
  removeSymbols,
  splitBy,
  joinBy,
  compose
};
