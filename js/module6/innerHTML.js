const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//     .join("");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup = newTechnologies
  .map((technology) => `<li class="list-item new">${technology}</li>`)
  .join("");

list.insertAdjacentHTML("beforeend", markup);
list.insertAdjacentHTML(
  "beforebegin",
  "<h2>Updated stack of technologies</h2>"
);
console.log(markup);

//list.innerHTML = markup;

// ==============

const article = document.querySelector(".article");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
   <a class="link" href="#">Read more...</a>`;

// Replace += with = operator. See the difference?
// Article title is lost because we overwrite element content.
article.innerHTML += htmlString; //correct
// article.innerHTML = htmlString;    //incorrect
