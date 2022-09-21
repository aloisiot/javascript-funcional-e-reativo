import { XMLHttpRequest } from "xmlhttprequest";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs";

const requestConf = {
  createXHR: () => new XMLHttpRequest(),
  url: "https://api.github.com/users/cod3rcursos/repos",
};

ajax(requestConf)
  .pipe(map((resp) => JSON.parse(resp.xhr.responseText)))
  .subscribe();
