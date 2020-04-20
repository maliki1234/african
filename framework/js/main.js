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


import {
    smoothScroll
}
from './smoothScroll.js';

import {
    observ_function
}
from './about.js'

import {
    backTop
}
from './back_to_top.js'

// import {
//     intersect
// }
// from './Intersection.js'

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
    


    // const about = document.querySelector('.navbar-links li')
    // about.addEventListener('click', ()=>{
    //     smoothScroll('#about', 1000)
    //     console.log('maliki')
    // }  )


    // var navbar_li = document.querySelectorAll('.navbar-links li');
    // navbar_li.forEach(link => {
    //     link.addEventListener('click', ()=>{
    //         // console.log('maliki')
    //         let lik = link.querySelector('a').dataset.link;
    //         smoothScroll(lik , 1000);
            
    //     // console.log(lik)
    //     })
    // });
   
}




// INTERSECTION OBSERVER

const about = document.querySelector('#about');



observ_function(about)






// // INTERSECTION MODULE

// const media_inter = document.querySelector('#media');
// let typeOf = 'fromLeftToCenter';
// let contaiens = document.querySelectorAll('#media div');

// intersect(media_inter, typeOf,contaiens);






const all_function = () => {
    gallery_sector();
    testimonial_sector();
    navbar_sector()
    backTop();
    
};


all_function();