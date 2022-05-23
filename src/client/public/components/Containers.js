"use-strict";

export const Container = {
  Base() {
    let main = document.getElementById("main");
    let container = document.createElement("div");

    container.setAttribute("id", "container");
    main.innerHTML = "";
    main.appendChild(container);
    
    return container;
  },

  SubContainer() {
    let subContainer = document.createElement("div");
    subContainer.setAttribute("id", "subContainer");
    document.getElementById("main").appendChild(subContainer);
    return subContainer;
  },
};
