import * as message from "./responseHelper";
import * as tokenManage from "./tokenHelper";

export const apiFetch = (url: string, options: any): any => {
  const headers: Headers = new Headers();
  // if content type is not defined
  if (!options["Content-Type"] && !(options["body"] instanceof FormData)) {
    headers.append("accept","application/json" );
    headers.append("Content-Type","application/json" );
    };
    if(tokenManage._hasToken()) headers.append("Authorization", tokenManage._getToken()!);

    // stringfy for server
    options.body = JSON.stringify(options.body);
  
  
  return fetch(url, {
    ...options,
    headers
  }).then(message._checkStatus);
  // parse para json deve ser feita aqui
  // .then((response:any) => response ? response.json():null)
};
