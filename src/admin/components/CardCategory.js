"use-strict";

export function CardCategory(category) {
  return `
    <article class="card_category">
      <div>
        <h1>${category.name}</h1>
        <p>${category.languages} language(s)</p>
      </div>
      <div data-category="${category.id_category}">
        <button class="update">Update</button>
        <button class="delete">Delete</button>
        <button class="languages">See languages</button>
      </div>
    </article>
  `;
}
