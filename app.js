let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

const addItem = (e) => {
    e.preventDefault()
    
    //getting input value
    let input = document.getElementById('item').value
    //creating li node
    let li = document.createElement('li')
    li.className = 'list-group-item'
    let inputValue = document.createTextNode(input)
    li.appendChild(inputValue)
    console.log(li)
    //creating delete button
    let delButton = document.createElement('button')
    delButton.className = 'btn btn-danger btn-sm float-right delete'
    delButton.appendChild(document.createTextNode('X')) 
    //appending delete button to li node
    li.appendChild(delButton)
    //appending li node to item list
    itemList.appendChild(li)
}

const deleteItem = (e) => {
    if(e.target.classList.contains('delete'))
    {
        li = e.target.parentElement
        itemList.removeChild(li)
    }
}

form.addEventListener('submit', addItem)
itemList.addEventListener('click' , deleteItem)
