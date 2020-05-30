const listContainer = document.querySelector('.list-container')
const searchBox = document.querySelector('.search-box')
const addTodoBtn = document.querySelector('.add-todo')
const deleteTodoBtn = document.querySelector('.delete-todo')

addTodoBtn.addEventListener('click', function() {
    const item = searchBox.value
    if(item === '') {
        alert('Please Enter the value')
        return;
    }
    createItem(item)
})

function createItem(item) {
    //creating element
    const itemContainer = document.createElement('div')
    const checkArea = document.createElement('div')
    const itemName = document.createElement('div')
    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkBox')
    //setting values and classes
    itemContainer.classList.add('item')
    itemName.innerHTML = item
    //appending them to DOM
    listContainer.append(itemContainer)
    itemContainer.append(checkArea)
    itemContainer.append(itemName)
    checkArea.append(checkBox)
}

deleteTodoBtn.addEventListener('click', function() {
    const checkedItems = listContainer.querySelectorAll('input:checked')
    checkedItems.forEach(item => {
        const deletedItem = item.parentElement.parentElement
        deletedItem.remove()
    })
})
