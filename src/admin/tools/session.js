"use-strict";

//! waiting session for update
export function sessionCheck() {
  let admin = sessionStorage.getItem("admin");

  return admin;
}
