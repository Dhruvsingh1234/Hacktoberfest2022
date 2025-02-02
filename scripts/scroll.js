window.onscroll = scrollFunc;
var scrollButton = document.getElementById('backToTop')

const scrollFunc = ()=>{
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        scrollButton.style.display = "block"
    } else {
        scrollButton.style.display = "none"
    }
}
scrollButton.onclick = ()=>{
    scrollButton.classList.add('startscrolling')
    scrollTo(document.documentElement, 0, 1250, function() {
        scrollButton.classList.remove('startscrolling')
    });
}
scrollButton.onmousedown = ()=>{
    scrollButton.classList.add("mousedown")
}
scrollButton.onmouseup = ()=>{
    scrollButton.classList.remove("mousedown")
}
const scrollTo = (element, to, duration, callback)=>{
    var start = element.scrollTop,
        change = (to - start),
        currentTime = 0,
        increment = 20
    var animateScroll = ()=>{
        currentTime += increment
        var val = Math.easeInOutQuad(currentTime, start, change, duration)
        element.scrollTop = val
        if (currentTime < duration) {
            setTimeout(animateScroll,increment)
        } else if(callback && typeof callback === 'function'){
            callback()
        }
    }
    animateScroll()
}
Math.easeInOutQuad = (t, b, c, d)=>{
    t /= d/2
    if (t < 1) return (c/2*t*t) + b
    t--
    return -c/2 * (t*(t-2) - 1) + b
}
