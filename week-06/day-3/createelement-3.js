'use strict';

const kids = [
  { "pet_name": "Wattled crane", "owner": "Bryant" },
  { "pet_name": "Devil, tasmanian", "owner": "Alejandro" },
  { "pet_name": "Mynah, common", "owner": "Nelie" },
  { "pet_name": "Dolphin, common", "owner": "Mariele" },
  { "pet_name": "Gray duiker", "owner": "Maddalena" },
  { "pet_name": "Crab (unidentified)", "owner": "Lucine" },
  { "pet_name": "Ant (unidentified)", "owner": "Lorianna" },
  { "pet_name": "Bison, american", "owner": "Tommie" },
  { "pet_name": "Yellow mongoose", "owner": "Vivyan" },
  { "pet_name": "Carpet snake", "owner": "Veda" },
  { "pet_name": "Lesser mouse lemur", "owner": "Isidor" }
];

const pets = document.querySelector('#pets');


for (let i = 0; i < kids.length; i++) {
  const article = document.createElement('article');
  const h3 = document.createElement('h3');
  const p = document.createElement('p');
  pets.appendChild(article).appendChild(h3);
  pets.appendChild(article).appendChild(p);
  h3.textContent = kids[i].owner;
  p.textContent = kids[i].pet_name;
}