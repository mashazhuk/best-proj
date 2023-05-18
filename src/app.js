import "./styles.css"
import {Review} from "./review.js"
import "./galery.js"

const form = document.getElementById('form')
const inpName = form.querySelector('#rev-inp-name')
const inpText = form.querySelector('#rev-inp-review')
const submitBtn = form.querySelector('#submit')


// Работа с отзывами
window.addEventListener('load', Review.renderList)
form.addEventListener('submit', submitFormHandler)

function submitFormHandler(event) {
    event.preventDefault()
    const text = {
        name: inpName.value.trim(),
        text: inpText.value.trim(),
        date: new Date().toJSON()
    }

    submitBtn.disabled = true

    Review.create(text).then(()=> {
        inpName.value = ''
        inpText.value = ''
        location.reload();
    })
}

// Работа с картинками

