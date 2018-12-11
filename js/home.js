//home-page

//Navigation
let menu = document.querySelector('.hamburger');
let navLinks = document.querySelector('.links');
let xMark = document.querySelector('.x-mark')

function expand() {
        menu.classList.toggle('hide');
        navLinks.classList.toggle('hide');
        xMark.classList.toggle('hide');
        TweenMax.to('.links', 2, {opacity: 1})
};

menu.addEventListener('click', () => {expand()});
xMark.addEventListener('click', () => {expand()});

//Button Animations
AOS.init({
  duration: 1200
});

//Button functionality
const buttons = document.querySelectorAll('.btn');
console.log(buttons);

buttons[0].addEventListener('click', () => {
  return document.location.href = "services.html"; 
});

buttons[1].addEventListener('click', () => {
  return window.scrollTo({
    top: 1320,
    behavior: 'smooth'
  })
});

//Carousel
class Carousel {
  constructor(element) {
    this.element = element;

    this.left = document.querySelector('.left-button');
    this.left.addEventListener('click', () => {this.selectLeft()});

    this.right = document.querySelector('.right-button');
    this.right.addEventListener('click', () => {this.selectRight()});

    this.imgs = document.querySelectorAll('.home-jumbotron');
    Array.from(this.imgs);

    this.position = 0;

    this.showing = this.imgs[this.position].classList.add('show');
  } 

  selectLeft() {
    if (this.position === 0) {
    this.position = 2;
    } else {
    this.position = this.position - 1;
    }

    this.imgs.forEach(img => {
      img.classList.remove('show');
    })

    this.showing = this.imgs[this.position].classList.add('show');
  }

  selectRight() {
    if (this.position === 2) {
    this.position = 0;
    } else {
    this.position = this.position + 1;
    }

    this.imgs.forEach(img => {
      img.classList.remove('show');
    })

    this.showing = this.imgs[this.position].classList.add('show');
  }

}

let carousel = document.querySelector('.home-motto');
carousel = new Carousel(carousel);

