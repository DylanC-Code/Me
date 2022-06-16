"use-strict";

//^ Remove childs of an element 
// # TODO move to utils class
export function removeChild(element) {
  let range = document.createRange();

  range.selectNodeContents(element);
  range.deleteContents();
}
