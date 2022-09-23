import { Observable } from "rxjs";
import fs from "fs";
import path from "path";

export const readdir = (dir) => {
  return new Observable((subscriber) => {
    fs.readdir(dir, (err, data) => {
      if (err) {
        subscriber.error(err);
      } else {
        subscriber.next(data.map((file) => path.join(dir, file)));
        subscriber.complete();
      }
    });
  });
};

export const readFile = (file) => fs.readFileSync(file).toString();
export const includes = (substring) => (text) => text.includes(substring);
export const joinBy = (separator) => (str0, str1) => str0 + separator + str1;
export const splitBy = (symbol) => (text) => text.split(symbol);
export const isEmpity = (text) => text.trim().length === 0;
export const isNumber = (txt) => !isNaN(txt.trim());
export const not = (fn) => (value) => !fn(value);
