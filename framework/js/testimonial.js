var a = 0





function displayTestimonial(e){
    // let card = document.querySelectorAll('testimonia-card')
    e.forEach(e=>{
        e.style.display = 'none';
    })
    e[generateRandomNumber(e.length)-1].style.display = 'block'
    e[generateRandomNumber(e.length)-1].classList.add('testimonial-animate')
    // console.log(generateRandomNumber(e.length)-1)
 
}



// function add(e) {
//     // a++;
//     if (a <= e) {
//         a++;
//     }else{
//         a = 0;
//     }

//     return a
// }



   
const generateRandomNumber = (limit) =>{
    const randomNumber = Math.floor(Math.random() * limit ) + 1;
    while (generateRandomNumber > randomNumber) {
        Math.floor(Math.random() * limit) + 1;
    }
    return randomNumber

}





export { displayTestimonial}