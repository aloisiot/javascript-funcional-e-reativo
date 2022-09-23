import path from "path";
import { fileURLToPath } from "url";
import {
  readdir,
  includes,
  readFile,
  isEmpity,
  not,
  writeFile,
} from "./functions";
import { concatAll, filter, reduce, map } from "rxjs";
import { removeSymbols, splitBy } from "../legendas/functions";

const dir = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(dir, "..", "legendas", "data");
const file = path.join(dir, "result.json");

const symbols = ["<i>", "</i>", "\r", "[", "]", /[!,-?#-$%"^&*_♪)}({}]/g];

const addWordToResult = (result, word) => {
  !result[word] ? (result[word] = 1) : (result[word] += 1);
  return result;
};

const sortResult = (result) => {
  return Object.keys(result)
    .sort((w1, w2) => -(result[w1] - result[w2]))
    .reduce((acc, word) => {
      acc[word] = result[word];
      return acc;
    }, {});
};

const handlerFileContent = (content) => {
  return JSON.stringify(
    {
      total: Object.keys(content).length,
      worldList: content,
    },
    null,
    2
  );
};

readdir(dataDir)
  .pipe(
    filter(includes("legendas_")),
    map(readFile),
    map(removeSymbols(symbols)),
    map(splitBy("\n")),
    concatAll(),
    filter(isNaN),
    filter(not(includes("-->"))),
    map(splitBy(" ")),
    concatAll(),
    filter(not(isEmpity)),
    reduce(addWordToResult, {}),
    map(sortResult),
    map(handlerFileContent)
  )
  .subscribe(writeFile(file));
