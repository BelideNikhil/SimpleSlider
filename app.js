const inputs=document.querySelectorAll("input[name]");

inputs.forEach(input => {
    input.addEventListener("mousemove",handler);
    input.addEventListener("change",handler);
})

function handler(e){
    let targetInput=e.target
    const suffix=targetInput.dataset.size
    document.body.style.setProperty(`--${targetInput.name}`,targetInput.value+suffix)
}

