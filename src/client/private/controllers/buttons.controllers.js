"use-strict";

export function buttonsControllers(datas) {
  let first = document.querySelector("[data-category]");
  let last = document.querySelectorAll("[data-category]")[3];

  let plus = last ? datas.filter((d) => d.id > last.dataset.category) : [];
  let less = first ? datas.filter((d) => d.id < first.dataset.category) : [];

  if (!first && !last && datas.length > 4)
    return document.getElementById("previous").remove();

  if (!plus[0] && !less[0])
    return document.getElementById("add_previous").remove();
  else if (plus[0] && less[0]) return;
  else if (less[0]) return document.getElementById("next").remove();
  else if (plus[0]) return document.getElementById("previous").remove();
}
