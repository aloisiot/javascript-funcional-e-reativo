import { Observable } from "rxjs";
import fs from "fs";
import path from "path";

export const readdir = (dir) => {
  return new Observable((subscriber) => {
    try {
      const files = fs.readdirSync(dir, { encoding: "utf-8" });
      while (files.length) {
        subscriber.next(path.join(dir, files.pop()));
      }
      subscriber.complete();
    } catch (e) {
      subscriber.error(err);
    }
  });
};

export const writeFile = (path) => (content) => {
  fs.writeFileSync(path, content, { encoding: "utf-8" });
};

export const readFile = (file) => fs.readFileSync(file).toString();
export const includes = (substring) => (text) => text.includes(substring);
export const joinBy = (separator) => (str0, str1) => str0 + separator + str1;
export const splitBy = (symbol) => (text) => text.split(symbol);
export const isEmpity = (text) => text.trim().length === 0;
export const not = (fn) => (value) => !fn(value);
