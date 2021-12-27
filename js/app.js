'use strict';

console.log('hi');

const profileContainer = document.getElementById('kittenProfiles');

let jumper = {
  name: 'Jumper',
  about: 'Jumper the cat is super sweet!',
  cutenessIndex: 10,
  like: [
    'cuddling',
    'lazer pointer',
    'catnap',
    'catnip'
  ],
  render: function () {
    for (let i in this.like) {
      // li
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}`;
      ul.appendChild(li);
    }
  }
};

// 1.) create element
let article = document.createElement('article');

// 2. or 3.) give it content
// 2. or 3.) append it to the DOM


// h3
let h3 = document.createElement('h3');
h3.textContent = 'Jumper';
article.appendChild(h3);

// p
let p = document.createElement('p');
p.textContent = 'Jumper the cat is super sweet!';
article.appendChild(p);

// ul
let ul = document.createElement('ul');
article.appendChild(ul);

jumper.render();

// img
let img = document.createElement('img');
img.src = 'js/images/jumper.jpeg';
img.alt = 'Jumper the cat is super sweet!';
article.appendChild(img);

profileContainer.appendChild(article);





const profileContainer2 = document.getElementById('kittenProfiles2');

let frankie = {
  name: 'Frankie',
  about: 'frankie rocks',
  cutenessIndex: 10,
  like: [
    'pizza',
    'tacos',
    'naps',
    'cats'
  ],
  render: function () {
    for (let i in this.like) {
      // li
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.like[i]}`;
      ul2.appendChild(li);
    }
  }
};


let article2 = document.createElement("article")


let h32 = document.createElement('h3');
h32.textContent = 'Frankie';
article2.appendChild(h32);

let p2 = document.createElement('p');
p2.textContent = 'Frankie the cat is super sweet!';
article2.appendChild(p);

let ul2 = document.createElement('ul')
article2.appendChild(ul2)

frankie.render();

// img
let img2 = document.createElement('img');
img2.src = 'js/images/jumper.jpeg';
img2.alt = 'Jumper the cat is super sweet!';
article2.appendChild(img2);


profileContainer2.appendChild(article2)