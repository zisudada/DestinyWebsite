var a = document.querySelector('.ripple-1')
a.addEventListener('mouseover',(event) => {
    const x = (event.pageX-a.offsetLeft)
    const y = (event.pageX-a.offsetTop)

    a.style.setProperty('--xPos', x + 'px')
    a.style.setProperty('--yPos', y + 'px')
})

const ripple_2_btns = document.querySelectorAll('a')
ripple_2_btns.forEach(btn => {
    btn.addEventListener('click',function(e){
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        
        this.appendChild(ripples);
        setTimeout(() => {
            ripples.remove()
        }, 1000);
    })
})