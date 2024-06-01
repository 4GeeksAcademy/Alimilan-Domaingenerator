/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  let tag = document.querySelector("#the-domain");
  tag.innerHTML = generateDomain();
};


function generateDomain() {
  let pronoun = ["the", "our"];
  let adjective = ["great", "big"];
  let noun = ["jogger", "raccoon"];
  let extension = [".es", ".com"];

  let domain = "";
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < ext.length; l++) {
          domain += `<li class="list-group-item">${pronoun[i]}${adjective[j]}${noun[k]}${extension[l]}</li>`;
        }
      }
    }
  }

  return domain;
}
