"use-strict";

import HTMLElement from "../../global/classes/HTMLElement.js";

//* Create And Return The Add And NextPrevious Buttons For The HeaderInterface
export default class Buttons {
  /** Create The Add Button
   * Return HTMLElement
   */

  static get add() {
    let article = new HTMLElement("article", "add").element;
    let h1 = new HTMLElement("h1", null).text("Add one");
    let svg = `
         <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
           <path d="M6.5 0.25C6.7072 0.25 6.90591 0.33231 7.05243 0.478823C7.19894 0.625336 7.28125 0.82405 7.28125 1.03125V5.71875H11.9688C12.176 5.71875 12.3747 5.80106 12.5212 5.94757C12.6677 6.09409 12.75 6.2928 12.75 6.5C12.75 6.7072 12.6677 6.90591 12.5212 7.05243C12.3747 7.19894 12.176 7.28125 11.9688 7.28125H7.28125V11.9688C7.28125 12.176 7.19894 12.3747 7.05243 12.5212C6.90591 12.6677 6.7072 12.75 6.5 12.75C6.2928 12.75 6.09409 12.6677 5.94757 12.5212C5.80106 12.3747 5.71875 12.176 5.71875 11.9688V7.28125H1.03125C0.82405 7.28125 0.625336 7.19894 0.478823 7.05243C0.33231 6.90591 0.25 6.7072 0.25 6.5C0.25 6.2928 0.33231 6.09409 0.478823 5.94757C0.625336 5.80106 0.82405 5.71875 1.03125 5.71875H5.71875V1.03125C5.71875 0.82405 5.80106 0.625336 5.94757 0.478823C6.09409 0.33231 6.2928 0.25 6.5 0.25Z" fill="#FF4B33"/>
         </svg>
       `;
    article.appendChild(h1);
    article.innerHTML += svg;
    return article;
  }

  /** Create The Switch (Next -- Previous) Button
   * Return HTMLElement
   */

  static get switch() {
    let article = new HTMLElement("article", "add_previous").element;
    let previous = `<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" id="previous"><path d="M2.4375 0.25L0.96875 1.71875L5.73959 6.5L0.96875 11.2812L2.4375 12.75L8.6875 6.5L2.4375 0.25Z" fill="#38C7C7"/></svg>`;
    let h1 = new HTMLElement("h1", null).text("Next");
    let next = `<svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" id="next"> <path d="M2.4375 0.25L0.96875 1.71875L5.73959 6.5L0.96875 11.2812L2.4375 12.75L8.6875 6.5L2.4375 0.25Z" fill="#38C7C7"/></svg>`;

    article.innerHTML = previous;
    article.appendChild(h1);
    article.innerHTML += next;

    return article;
  }
}

// //^ Add button component
// //^ Return article
// function addBtn() {
//   let article = new HTMLElement("article", "add").element;
//   let h1 = new HTMLElement("h1", null).text("Add one");
//   let svg = `
//        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
//          <path d="M6.5 0.25C6.7072 0.25 6.90591 0.33231 7.05243 0.478823C7.19894 0.625336 7.28125 0.82405 7.28125 1.03125V5.71875H11.9688C12.176 5.71875 12.3747 5.80106 12.5212 5.94757C12.6677 6.09409 12.75 6.2928 12.75 6.5C12.75 6.7072 12.6677 6.90591 12.5212 7.05243C12.3747 7.19894 12.176 7.28125 11.9688 7.28125H7.28125V11.9688C7.28125 12.176 7.19894 12.3747 7.05243 12.5212C6.90591 12.6677 6.7072 12.75 6.5 12.75C6.2928 12.75 6.09409 12.6677 5.94757 12.5212C5.80106 12.3747 5.71875 12.176 5.71875 11.9688V7.28125H1.03125C0.82405 7.28125 0.625336 7.19894 0.478823 7.05243C0.33231 6.90591 0.25 6.7072 0.25 6.5C0.25 6.2928 0.33231 6.09409 0.478823 5.94757C0.625336 5.80106 0.82405 5.71875 1.03125 5.71875H5.71875V1.03125C5.71875 0.82405 5.80106 0.625336 5.94757 0.478823C6.09409 0.33231 6.2928 0.25 6.5 0.25Z" fill="#FF4B33"/>
//        </svg>
//      `;
//   article.appendChild(h1);
//   article.innerHTML += svg;
//   return article;
// }

// //^ Next or Previous button component
// //^ Return article
// function nextPreviousBtn() {
//   let article = new HTMLElement("article", "add_previous").element;
//   let previous = `
//         <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" id="previous">
//           <path d="M2.4375 0.25L0.96875 1.71875L5.73959 6.5L0.96875 11.2812L2.4375 12.75L8.6875 6.5L2.4375 0.25Z"
//             fill="#38C7C7"/>
//         </svg>
//       `;
//   let h1 = new HTMLElement("h1", null).text("Next");
//   let next = `
//           <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg" id="next">
//             <path d="M2.4375 0.25L0.96875 1.71875L5.73959 6.5L0.96875 11.2812L2.4375 12.75L8.6875 6.5L2.4375 0.25Z"
//               fill="#38C7C7"/>
//           </svg>
//         `;
//   // h1 = new HTMLElement("h1", null).text("Next");
//   article.innerHTML = previous;
//   article.appendChild(h1);
//   article.innerHTML += next;

//   return article;
// }

// export { addBtn, nextPreviousBtn };