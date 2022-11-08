const textareaEl = document.getElementById("textarea")
const totalEl = document.getElementById("total")
const remaining = document.getElementById("remaining")
textareaEl.addEventListener("keyup", () => {
    updateText()
})

const updateText = () => {
    totalEl.innerText = textareaEl.value.length
    console.log(textareaEl.value.length)
    remaining.innerText = textareaEl.getAttribute("maxLength") - textareaEl.value.length
}