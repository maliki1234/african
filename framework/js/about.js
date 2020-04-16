var observ_function = (about)=>{
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      }
      let n = document.querySelector('.about-container');
      let observer = new IntersectionObserver((entries, observer)=>{
          entries.forEach(entry=>{
              if(entry.isIntersecting){
                  n.style.transform = 'translateX(0%)'
              }
              else{
                  n.style.transform = 'translateX(100%)';
              }
          })
      }, options);
      observer.observe(about);
}



export { observ_function }