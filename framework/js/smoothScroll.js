const smoothScroll =(target, duration)=>{
 var target = document.querySelector(target)
 var targetPosition = target.getBoundingClientRect().top;
//   console.log(targetPosition)
var startPosition = window.pageYOffset;
var distance = targetPosition - startPosition;
var startTime = null;

const animation =(currentTime)=>{
    if(startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);

};
function easeInOutQuad(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
};


requestAnimationFrame(animation)


console.log('maliki')

}




export { smoothScroll}