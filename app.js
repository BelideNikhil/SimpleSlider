console.warn("I'm running")
const inputs=document.querySelectorAll("input[name]");

function handler(){
    console.log(this)
    // or '' is so that if no data-attribute then it is ''
    // here we are basically taking the data-size attribute value and passing it to suffix so that we can append it to inpue value
    const suffix=this.dataset.size || ''
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix)
}

inputs.forEach(input => {
    input.addEventListener("mousemove",handler);
    input.addEventListener("change",handler);
});
