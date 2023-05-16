async function getResponse() {
    const response = await fetch('https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f')
    const content = await response.json()
    let list = document.querySelector('.assort')

    let key;
    for(key in content) {
        list.innerHTML += `<div id = "assort-1">
            <img src = "${content[key].image}">
            <p class = "assort-name">${content[key].name}: ${content[key].flovers}</p>
            <p class = "assort-price">${content[key].price}</p>
        </div>`
    }
}
getResponse()