import {html , viewimage , close} from './media.js';
// maliki();

import {displayTestimonial} from './testimonial.js';



// NAVBAR SECTION

const gallery = document.querySelector('.gallery');
window.onscroll = ()=>{
    let navbar = document.querySelector('#navbar');
    // console.log(scrollY)
    if (scrollY >= 10) {
        navbar.classList.add('navbar-sticky')
    }else{
        navbar.classList.remove('navbar-sticky')
    }
}



const navbars = document.querySelector('#about');

const options = {
    root: null,
    threshold: 0 ,
    rootMargin: "0px"
}
const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(Entry =>{
            // console.log(Entry)
            if (Entry.isIntersecting) {
                document.querySelector('.about-container').classList.add('p-transform');
            }
            else{
                document.querySelector('.about-container').classList.remove('p-transform')
            }
        })
},options)

observer.observe(navbars);



// THE MEDIA SECTION

gallery.innerHTML = html;

const item_overlay = document.querySelectorAll('.item');
item_overlay.forEach(x =>{
    x.addEventListener('click', viewimage)
})


const closer = document.querySelector('.over-overlay span')


closer.onclick = ()=>{
    close();
    // console.log('maliki')
}
console.log(item_overlay)

 const testimonial_card = document.querySelectorAll('.testimonial-card')


// var interval = setInterval(displayTestimonial(testimonial_card), 100);


// clearInterval(interval);


// const displayTestimonial = ()=>{
//     console.log('maliki');
// }



const interval = setInterval(function 
    () {
        displayTestimonial(testimonial_card)
},7000)