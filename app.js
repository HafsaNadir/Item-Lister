let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
let filter = document.getElementById('filter')

const addItems = (e) => {
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

const deleteItems = (e) => {
    if(e.target.classList.contains('delete'))
    {
        li = e.target.parentElement
        //removing li node i.e. item
        itemList.removeChild(li)
    }
}
const filterItems = (e) => {
    let input = e.target.value.toLowerCase()
    let items = itemList.getElementsByTagName('li')
    console.log(items)

} 

form.addEventListener('submit', addItems)
itemList.addEventListener('click' , deleteItems)
filter.addEventListener('keyup', filterItems)