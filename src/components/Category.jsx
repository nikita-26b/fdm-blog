import React from "react";
import Categories from "./Categories";

function Category() {
  //   const [src, alt, title] = Categories;
  return (
    <div>
      <h1>CATEGORIES</h1>
      {Categories.map((elem) => {
        return (
          <div class="category-sec" key={elem.alt}>
            <img
              src={elem.src}
              width="160"
              height="160"
              alt={elem.alt}
              class="jetpack-lazy-image jetpack-lazy-image--handled"
            />
            <span class="mt-2 clo_222">{elem.title}</span>
          </div>
        );
      })}
    </div>
  );
}
export default Category;
