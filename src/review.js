export class Review {
    static create(review) {
        return fetch('https://project-js-d3ec0-default-rtdb.firebaseio.com/reviews.json', {
            method: 'POST',
            body: JSON.stringify(review),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                review.id = response.name
                return review
            })
            .then(addToLocalStorage)
            .then(Review.renderList)
    }

    static renderList() {
        const questions = getReviewsFromLocalStorage()

        const html = questions.length
            ? questions.map(toCard).join('')
            : ''

        const list = document.getElementById('rev-n')

        list.innerHTML = html
    }

}

function addToLocalStorage(review) {
    let all = getReviewsFromLocalStorage()
    if (!Array.isArray(all)) {
        // Если all не является массивом, преобразуем его в пустой массив
        all = []
    }
    all.push(review)
    localStorage.setItem('reviews', JSON.stringify(all))
}

function getReviewsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('reviews') || '[]')
}

function toCard(review) {
    return `
        <div class = "card">
            <div class="rev-name">${review.name}</div>
            <div class="rev-text">${review.text}</div>
        </div>
        `

}
