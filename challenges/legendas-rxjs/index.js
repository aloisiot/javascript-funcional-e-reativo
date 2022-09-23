import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import {
  readdir,
  includes,
  readFile,
  isEmpity,
  isNumber,
  joinBy,
  not,
} from "./functions";
import { concatAll, filter, reduce, map } from "rxjs";
import { removeSymbols, splitBy } from "../legendas/functions";

const dir = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(dir, "..", "legendas", "data");
const resultFile = path.join(dir, "result.json");

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

const writeResultFile = (path) => (content) => {
  const data = {
    total: Object.keys(content).length,
    worldList: content,
  };
  const fileContent = JSON.stringify(data, null, 2);
  fs.writeFileSync(path, fileContent, { encoding: "utf-8" });
};

readdir(dataDir)
  .pipe(
    concatAll(),
    filter(includes("legendas_")),
    map(readFile),
    reduce(joinBy("")),
    map(removeSymbols(symbols)),
    map(splitBy("\n")),
    concatAll(),
    filter(not(isEmpity)),
    filter(not(isNumber)),
    filter(not(includes("-->"))),
    reduce(joinBy(" ")),
    map(splitBy(" ")),
    concatAll(),
    filter(not(isEmpity)),
    reduce(addWordToResult, {}),
    map(sortResult)
  )
  .subscribe(writeResultFile(resultFile));
