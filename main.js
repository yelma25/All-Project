// const TypeWriter = function (txtElement, Words, Wait = 3000) {
//   this.txtElement = txtElement;
//   this.Words = Words;
//   this.txt = "";
//   this.WordIndex = 0;
//   this.Wait = parseInt(Wait, 10);
//   this.type();
//   this.isDeleting = false;
// };

//Type Method
// TypeWriter.prototype.type = function () {
//   //Current index of word
//   const current = this.WordIndex % this.Words.length;
//   //Get full text of current word
//   const fullTxt = this.Words[current];

//   //check if deleting
//   if (this.isDeleting) {
//     //Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     //Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }
//   //Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   //Initial type Speed
//   let typeSpeed = 300;

//   if (this.isDeleting) {
//     typeSpeed /= 2;
//   }

//   //if word is complete
//   if (!this.isDeleting && this.txt === fullTxt) {
//     //Make pause at end
//     typeSpeed = this.Wait;
//     //set delete to true
//     this.isDeleting = true;
//   } else if (this.isDeleting && this.txt === "") {
//     this.isDeleting = false;
//     //move to next word
//     this.WordIndex++;
//     //pause before start typing
//     typeSpeed = 500;
//   }

//   setTimeout(() => this.type(), typeSpeed);

//   // Type Speed
// };
// //Init on Dom Laod
// document.addEventListener("DOMContentLoaded", init);

// //Init App
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const Words = JSON.parse(txtElement.getAttribute("data-Words"));
//   const Wait = txtElement.getAttribute("data-wait");
//   //Init TypeWriter
//   new TypeWriter(txtElement, Words, Wait);
// }

// //ES6 CLASS
class TypeWriter {
  constructor(txtElement, Words, Wait = 3000) {
    this.txtElement = txtElement;
    this.Words = Words;
    this.txt = "";
    this.WordIndex = 0;
    this.Wait = parseInt(Wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    //Current index of word
    const current = this.WordIndex % this.Words.length;
    //Get full text of current word
    const fullTxt = this.Words[current];

    //check if deleting
    if (this.isDeleting) {
      //Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //Initial type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      //Make pause at end
      typeSpeed = this.Wait;
      //set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      //move to next word
      this.WordIndex++;
      //pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//Init on Dom Laod
document.addEventListener("DOMContentLoaded", init);

//Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const Words = JSON.parse(txtElement.getAttribute("data-Words"));
  const Wait = txtElement.getAttribute("data-wait");
  //Init TypeWriter
  new TypeWriter(txtElement, Words, Wait);
}
