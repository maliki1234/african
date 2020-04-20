var backToTop = ()=>{
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }
    let n = document.querySelector('#home');
    let m = document.querySelector('#back-top')
    console.log(m)
    let observer  = new IntersectionObserver((entries , observer)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting) {
                m.style.display = 'none';
            }
            else{
                m.style.display = 'block';
            }
        })
    }, options);
    observer.observe(n);
}



const clickToTop = ()=>{
    var backToTop = document.querySelector('.block');
    // console.log(backToTop)

    backToTop.onclick = ()=>{
        // console.log('maliki')
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}


const backTop = ()=>{
    backToTop();
    clickToTop()


}

export { backTop}