import {
    html,
    viewimage,
    close
} from './media.js';
// maliki();

import {
    displayTestimonial
} from './testimonial.js';


import {
    navbar_nav
}
from './navbar.js';



// start gallery

const gallery_sector = () => {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = html;
    const item_overlay = document.querySelectorAll('.item');
    item_overlay.forEach(x => {
        x.addEventListener('click', viewimage)
    });
    // viewimage();
    const closer = document.querySelector('.over-overlay span');
    closer.onclick = () => {
        close();
    }
};

// start testimonial

const testimonial_sector = () => {


    const testimonial_card = document.querySelectorAll('.testimonial-card')

    const interval = setInterval(function () {
        displayTestimonial(testimonial_card)
    }, 7000)

};

// NAVBAR

const navbar_sector = ()=>{
    const navbar_bar = document.querySelector('.navbar-icons')
    // console.log(navbar_bar)
    const navbar_links = document.querySelector('.navbar-links');
    const navabr_li = document.querySelectorAll('.navbar-links li')
    const navbar_icons = document.querySelectorAll('.navbar-icon');
    const navbar_active = document.querySelector('.navbar-link-toggle')
    navbar_nav(navbar_bar, navbar_links, navabr_li, navbar_icons, navbar_active)
    
   
}




// INTERSECTION OBSERVER

const about = document.querySelector('#about');

let options = {
    // root: null,
    // rootMargin: '0px',
    // threshold: 1.0
  }
  let n = document.querySelector('.about-container');
  let observer = new IntersectionObserver((entries, observer)=>{
      entries.forEach(entry=>{
          console.log(entry)
          if(entry.isIntersecting){
              
              n.style.transform = 'translateX(0%)'
          }
          else{
              n.style.transform = 'translateX(100%)';
          }
      })
  }, options);



  observer.observe(about);





const all_function = () => {
    gallery_sector();
    testimonial_sector();
    navbar_sector()
};


all_function();