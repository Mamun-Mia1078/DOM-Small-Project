const labelInputField = document.querySelector('#labelValue');
const form = document.querySelector('#form');
const inputType = document.querySelector('#inputType');


labelInputField.addEventListener('keyup',(event) => {
    const keyPressed = event.key
    if(keyPressed === "Enter"){
        const type = inputType.value
        const label = labelInputField.value
        
        const labelInput = document.createElement("label")
        const div = document.createElement("div")
        // const input = document.createElement("input")
        let input = null;
        if(type === 'textarea')
        input = document.createElement("textarea")
        else 
        input = document.createElement('input')
        
        labelInput.innerHTML = label
        input.type = type
        input.classList.add('form-control')
        
        div.appendChild(labelInput)
        div.appendChild(input)
        form.appendChild(div)

    }
    console.log(type);
})