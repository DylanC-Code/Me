"use-strict";

//^ Remove childs of an element 
export function removeChild(element) {
  let range = document.createRange();

  range.selectNodeContents(element);
  range.deleteContents();
}
