"use-strict";

export function CardCategory(category) {
  return `
    <article class="card_category">
      <div>
        <h1>${category.name}</h1>
        <p>${category.languages} language(s)</p>
      </div>
      <div>
        <button>Update</button>
        <button>Delete</button>
        <button>See languages</button>
      </div>
    </article>
  `;
}
