let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

const addItem = (e) => {
    e.preventDefault()
    
    //getting input value
    let input = document.getElementById("item").value
    //creating li node
    let li = document.createElement('li')
    li.className = "list-group-item"
    let inputValue = document.createTextNode(input)
    li.appendChild(inputValue)
    console.log(li)
    //appending li node to item list
    itemList.appendChild(li)
}

form.addEventListener('submit', addItem)
