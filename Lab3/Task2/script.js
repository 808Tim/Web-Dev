let addButton = document.getElementById('addButton');
let toDoList = document.getElementById('toDoList');
let inputField = document.getElementById('inputField');

addButton.addEventListener('click', function() {
    const text = inputField.value;
    if (text === '') return;
    const li = document.createElement('li');
    li.className = 'listItem';

    const checkbox = document.createElement('input');
    checkbox.className = 'taskCheckbox';
    checkbox.type = 'checkbox';

    const span = document.createElement('span');
    span.className = 'taskText';
    span.textContent = text;

    const deleteButton = document.createElement('input');
    deleteButton.className = 'deleteButton';
    deleteButton.type = 'image';
    deleteButton.src = 'https://cdn-icons-png.flaticon.com/512/6861/6861362.png';
    deleteButton.width = 15;

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            span.style.textDecoration = 'line-through';
            span.style.color = 'gray';
        } else {
            span.style.textDecoration = 'none';
            span.style.color = 'black';
        }
    });

    toDoList.appendChild(li);

    inputField.value = '';

    deleteButton.addEventListener('click', function(){
        toDoList.removeChild(li);
    })
})
