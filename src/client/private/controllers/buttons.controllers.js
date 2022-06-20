"use-strict";

//^ Controllers for the button with next and previous options
export function buttonsControllers(datas) {
  //~ Get first and last cards elements on the main
  let first = document.querySelector("[data-category]") ? document.querySelector("[data-category]") : document.querySelector("[data-project]")
  let last = document.querySelectorAll("[data-category]")[3] ? document.querySelectorAll("[data-category]")[3] : document.querySelectorAll("[data-project]")[3]

  let plus = [];
  let less = [];

  // //~ Control if datas have more or less elements to display
  if (last) {
    last = datas.findIndex((d) => d.id == last.dataset.category || d.id == last.dataset.project);
    plus = datas.filter((d) => datas.indexOf(d) > last);
  }
  if (first) {
    first = datas.findIndex((d) => d.id == first.dataset.category || d.id == first.dataset.project);
    less = datas.filter((d) => datas.indexOf(d) < first);
  }

  //~ Check the good situation for display the good button
  if (!first && !last && datas.length > 4)
    return document.getElementById("previous").remove();
  if (!plus[0] && !less[0])
    return document.getElementById("add_previous").remove();
  else if (plus[0] && less[0]) return;
  else if (less[0]) return document.getElementById("next").remove();
  else if (plus[0]) return document.getElementById("previous").remove();
}
