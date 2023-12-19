'use strict';

// ヒーロー画像のスライドショー
const img = ['images/hero-001.jpg', 'images/hero-002.jpg', 'images/hero-003.jpg', 'images/hero-004.jpg'];
let num = -1;

function slide() {
  if (num === 3) {
    num = 0;
  } else {
    num += 1;
  }
  document.getElementById('slide_img').src = img[num];
}

setInterval(slide, 4000);


// バーガーメニュー
$(function () {
  $('.js-navbtn').on('click', function () {
    $('.menu-nav, .btn-line').toggleClass('open')
  });
});


// document.addEventListener('DOMContentLoaded', function () {
//   let openNav = document.gemagestElementById('open_nav');
//   let wrapper = document.getElementById('wrapper');
//   let nav = document.getElementById('nav');

//   openNav.addEventListener('click', function () {
//     wrapper.classList.toggle('show');
//     nav.classList.toggle('show');
//   });
// });



// スクロール
const objects = document.querySelectorAll('.move-on');

const roll = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('move');
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",  //当たり判定
  threshold: 0   //交差
}
// IntersectionObserver指定した範囲にる対象の要素が入ってきたら処理を実行するAPI
const ioApi = new IntersectionObserver(roll, options);
objects.forEach(object => {
  ioApi.observe(object);
});



// モーダルウィンドウ レスポンシブ対応

if (window.matchMedia("(max-width: 768px)").matches) {

  const imageItems = document.querySelectorAll('.item');
  const modalItems = document.querySelectorAll('.modalItem');

  imageItems.forEach((imageItem, index) => {
    imageItem.addEventListener('click', () => {
      modalItems[index].classList.add('open');
    });
  });

  modalItems.forEach((modalItem) => {
    modalItem.addEventListener('click', () => {
      modalItem.classList.remove('open');
    });
  });

}



// const imageItem = document.querySelector('.item');
// const modalItem = document.querySelector('.modalItem');

// imageItem.addEventListener('click', () => {
//   modalItem.classList.add('open');
// });

// modalItem.addEventListener('click', () => {
//   modalItem.classList.remove('open');
// });


// 開閉アコーディオン
const menu = document.querySelectorAll('.open-close');

function toggle() {
  const content = this.nextElementSibling;
  this.classList.toggle('act');
  content.classList.toggle('open');
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener('click', toggle);
}


// トップページボタン
const gotop = document.getElementById('pagetop');
gotop.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  });
});



