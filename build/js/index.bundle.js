!function(){var t={933:function(){document.addEventListener("DOMContentLoaded",(function(){let t=document.querySelectorAll(".items-process__item");function n(){let n=window.innerHeight;t.forEach((t=>{t.getBoundingClientRect().top<n-100&&(t.style.opacity="1",t.style.transform="translateY(0)")}))}n(),window.addEventListener("scroll",(function(){n()}))}))}},n={};function e(o){var r=n[o];if(void 0!==r)return r.exports;var c=n[o]={exports:{}};return t[o](c,c.exports,e),c.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},function(){"use strict";var t=e(933),n=e.n(t);(function(){const t=document.querySelector(".mobile-nav-btn"),n=document.querySelector(".mobile-nav"),e=document.querySelector(".nav-icon");t.onclick=function(){n.classList.toggle("mobile-nav--open"),e.classList.toggle("nav-icon--active"),document.body.classList.toggle("no-scroll")}})(),n()()}()}();