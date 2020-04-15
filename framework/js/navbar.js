const navbar_nav = (e, d , navbar_li , navbar_icon , navbar_active)=>{

    const navbar_links = d;
    e.addEventListener('click',()=>{
        // console.log(navbar_links)
        navbar_links.classList.toggle('navbar-link-toggle')
        // console.log(d.classList.value)
        navbar_li.forEach((e, index) => {
            // e.style.animation = 'animating 2s ease';
            if (e.style.animation) {
                e.style.animation = '';
            }
            else{
                e.style.animation = 'animating ease'+ index / 7 + 13 +'s';
                console.log(e.style.animation = 'animating 1s ease '+ index / 5 + 1 +'s') 
            }
        });
        // console.log(navbar_li)
        // navbar_li.forEach(element => {
            
        // });
        if (navbar_links.classList.contains('navbar-link-toggle')) {
                navbar_icon[0].style.display = 'none'
                navbar_icon[1].style.display = 'block'
        }else{
                navbar_icon[0].style.display = 'block'
                navbar_icon[1].style.display = 'none'
        }
    })

//     g.forEach((element, index) => {
//         console.log(index);

//     });
}







export {navbar_nav};