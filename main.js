const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  console.log(text);
  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ block: 'center' });
  input.value = '';
  input.focus();
}
let id = 0; // UUID or object's hash

function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
    <div class="item data-id=${id}>
      <span class="item__name">${text}</span>
      <button class="item__delete">
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;

  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');

  // const name = document.createElement('span');
  // name.setAttribute('class', 'item__name');
  // name.innerText = text;

  // const deleteBtn = document.createElement('button');
  // deleteBtn.setAttribute('class', 'item__delete');
  // deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  // deleteBtn.addEventListener('click', () => {
  //   items.removeChild(itemRow);
  // });

  // const itemDivider = document.createElement('div');
  // itemDivider.setAttribute('class', 'item__divider');

  // item.appendChild(name);
  // item.appendChild(deleteBtn);

  // itemRow.appendChild(item);
  // itemRow.appendChild(itemDivider);
  id++;
  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    onAdd();
  }
});

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id && event.target.tagName === 'I') {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
