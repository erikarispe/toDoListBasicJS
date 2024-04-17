const userInput = document.querySelector('.userInputText')
console.log(userInput)
const enterButton = document.querySelector('.enter')
console.log(enterButton)
const ul = document.querySelector('.list')
console.log(ul)
const completeButton = document.querySelector('.complete')
console.log(completeButton)
const deleteButton = document.querySelector('.delete')
console.log(deleteButton)




enterButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('enter button clicked');
    if (userInput.value === '') {
        alert('Please enter text before adding');
    } else {
        const li = document.createElement('li');
        li.textContent = userInput.value;
        
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        
        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        
        ul.appendChild(li);
        
        userInput.value = '';
    }
});

ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('complete')) {
        const li = e.target.parentElement;
        li.classList.toggle('completed');
    }
});

