let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

form.addEventListener('submit', addItem)

const addItem = (e) => {
    e.preventDefault()
    console.log("items")
}