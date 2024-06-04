let shoppingListArray = [];

function getItem(event) {
  event.preventDefault();
    const item = document.getElementById('item').value.trim();
    try {
      if (!item) {
        throw new Error('Item cannot be empty');
      }
      if (item && !shoppingListArray.includes(item)) {
        shoppingListArray.push(item);
        shoppingListArray.sort();
        removeList(); // limpa a lista antiga
        addItemToList(); // adiciona a nova lista ordenada
        document.getElementById('myForm').reset(); // limpa o input
      }  
    } catch (error) {
      console.error(error); // trata o erro conforme o necessário
    }
  console.log(shoppingListArray);
}

function removeList() {
  const ul = document.getElementById('shoppingList');
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
}

function addItemToList() {
  const ul = document.getElementById('shoppingList');
  shoppingListArray.forEach(item => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));
    li.addEventListener('click', removeItem); // adiciona EventListener para remover o item
    ul.appendChild(li);
  });
}

function removeItem(event) {
  const item = event.currentTarget.textContent;
  try {
    const index =shoppingListArray.indexOf(item);
  if (index > -1) {
    throw new Error('Item not found in the list');
    }
    shoppingListArray.splice(index, 1);
    removeList(); //limpa a lista antiga
    addItemToList(); //adiciona nova lista
  } catch (error) {
    console.error(error); // trata o erro conforme necessário
  }
}

document.getElementById('shoppingList').addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('checked');
  }
});