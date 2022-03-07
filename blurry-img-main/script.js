const bg = document.querySelector('.bg')
const loadingText = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 40)

function blurring (){
    load++

    if (load > 99){
        clearInterval(int)
    }
   loadingText.textContent = `${load}%`
   loadingText.style.opacity = scale(load, [0, 100], [1,0])
   bg.style.filter = `blur(${scale(load,[0, 100],[30,0])}px)`
}

const scale = (number, [inMin, inMax], [outMin, outMax]) => {
    // if you need an integer value use Math.floor or Math.ceil here
    return (number - inMin) / (inMax - inMin) * (outMax - outMin) + outMin;
}