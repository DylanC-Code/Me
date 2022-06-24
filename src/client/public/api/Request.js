"use-strict";

//! Ameliorer
export default class Request {
  /**
   *^ Create new instance for request in asynchronus
   *^ Return the result of the request
   * @param  { STRING } method Write in CAPS
   * @param  { STRING } url Start with "/" and write the road
   * @param  { OBJECT } body The body of the request (facultatif)
   * @param  { OBJECT } content Change content-type of the request (facultatif)
   */
  constructor(
    method,
    url,
    body = null,
    content = "application/json; charset=UTF-8"
  ) {
    this.method = method;
    this.url = `http://127.0.0.1:4000/api${url}`;
    this._body = body;
    this.headers = {
      "Content-Type": content,
      Connection: "keep-alive",
    };
    this.init = {
      method: this.method,
      headers: this.headers,
    };
  }

  get play() {
    return this.fetch();
  }
  get body() {
    return this._body;
  }
  set body(value) {
    this._body = value;
  }

  async fetch() {
    let res;
    if (this.method != "GET" && this.method != "DELETE") {
      this.init.body = JSON.stringify(this._body);
      res = await fetch(`${this.url}`, this.init);
      return res.json();
    } else if (this.method === "GET" && this._body != null) {
      res = await fetch(`${this.url}/${this._body}`, this.init);
      return res.json();
    } else {
      res = await fetch(`${this.url}/`, this.init);
      return res.json();
    }
  }
}
