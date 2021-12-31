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

let kittenArray = [];

function Kitten(name, about, likes, src) {
  this.name = name;
  this.about = about;
  this.likes = likes;
  this.src = src;
  this.listId = `${this.name} Likes`;
  this.render = function () {
    let article = document.createElement('article');
    profileContainer.appendChild(article);

    //h3
    let h3 = document.createElement('h3');
    h3.textContent = this.name;
    article.appendChild(h3)
    //p
    let p = document.createElement('p')
    p.textContent = this.about;
    article.appendChild(p)
    //ul
    let ul = document.createElement('ul')
    ul.id = this.listId
    article.appendChild(ul)
    //img
    let img = document.createElement('img')
    img.src = this.src;
    img.about = this.about;
    article.appendChild(img);

  };
  // render
  this.renderList = function () {
    let kittenLikes = document.getElementById(this.listId);
    console.log("birch face")
    for (let i in this.likes) {
      let li = document.createElement('li');
      li.textContent = `${this.name} likes ${this.likes[i]}`
      kittenLikes.appendChild(li)
    }
  };
  console.log('fuck face')
  kittenArray.push(this)
};


new Kitten(
  'Jumper',
  'Jumper the cat is super sweet!',
  ['cuddling', 'bitch ass', 'cat nap'],
  'images/jumper.jpeg'
);
// 1.) create element
// let article = document.createElement('article');

// // 2. or 3.) give it content
// // 2. or 3.) append it to the DOM


// // h3
// let h3 = document.createElement('h3');
// h3.textContent = 'Jumper';
// article.appendChild(h3);
// // img
// let img = document.createElement('img');
// img.src = 'js/images/jumper.jpeg';
// img.alt = 'Jumper the cat is super sweet!';
// article.appendChild(img);

// // p
// let p = document.createElement('p');
// p.textContent = 'Jumper the cat is super sweet!';
// article.appendChild(p);

// // ul
// let ul = document.createElement('ul');
// article.appendChild(ul);

// jumper.render();


// profileContainer.appendChild(article);





// const profileContainer2 = document.getElementById('kittenProfiles2');

// let frankie = {
//   name: 'Frankie',
//   about: 'frankie rocks',
//   cutenessIndex: 10,
//   like: [
//     'pizza',
//     'tacos',
//     'naps',
//     'cats'
//   ],
//   render: function () {
//     for (let i in this.like) {
//       // li
//       let li = document.createElement('li');
//       li.textContent = `${this.name} likes ${this.like[i]}`;
//       ul2.appendChild(li);
//     }
//   }
// };


// let article2 = document.createElement("article")


// let h32 = document.createElement('h3');
// h32.textContent = 'Frankie';
// article2.appendChild(h32);
// // img
// let img2 = document.createElement('img');
// img2.src = 'js/images/jumper.jpeg';
// img2.alt = 'Jumper the cat is super sweet!';
// article2.appendChild(img2);

// let p2 = document.createElement('p');
// p2.textContent = 'Frankie the cat is super sweet!';

// article2.appendChild(p);

// let ul2 = document.createElement('ul')
// article2.appendChild(ul2)

// frankie.render();

// profileContainer2.appendChild(article2)


// let profileContainer3 = document.getElementById('kittenProfiles3')

// let serena = {
//   name: "Serena",
//   about: 'Good cat',
//   cutenessIndex: 10,
//   like: [
//     'hotdogs',
//     'burgers',
//     'hats',
//     'motorcycles'
//   ],

//   render: function () {
//     for (let i in this.like) {
//       let li = document.createElement('li');
//       li.textContent = `${this.name} like ${this.like[i]}`;
//       ul3.appendChild(li);
//     }
//   }
// }


// let article3 = document.createElement('article')

// let h33 = document.createElement('h3')
// h33.textContent = serena.name
// article3.appendChild(h33)

// let img3 = document.createElement('img');
// img3.src = 'js/images/serena.jpeg';
// img3.alt = 'This cat is named Serena';
// article3.appendChild(img3);


// let p3 = document.createElement('p')
// p3.textContent = serena.about;
// article3.appendChild(p3)

// let rating3 = document.createElement('p');
// rating3.textContent = `Serena's cuteness level is ${serena.cutenessIndex}`;
// article3.appendChild(rating3)

// let ul3 = document.createElement('ul');
// article3.appendChild(ul3)

// serena.render()

// profileContainer3.appendChild(article3)