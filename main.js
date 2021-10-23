const add = document.getElementById('add');
const task = document.getElementById('task');
const list = document.getElementById('list');
const check = document.querySelectorAll('h4');

// Counter for the id number
let i = 1;

// Add task to the list
add.onclick = () => {

    if (task.value) {

        let newTask = document.createElement('h4');
        let newText = document.createTextNode(task.value);
        newTask.appendChild(newText);
        newTask.setAttribute('id', i);
        newTask.setAttribute('onclick', 'done(' + i + ')');

        // Create delete button and appande it to h4 element
        let newDeleteBtn = document.createElement('button');
        newDeleteBtn.setAttribute('onclick', 'remove(' + i + ')');
        let newTrushIcon = document.createElement('i');
        newTrushIcon.setAttribute('class', 'far fa-trash-alt fa-sm') // class name of trush icon in fontawesome library
        newDeleteBtn.appendChild(newTrushIcon);

        newTask.appendChild(newDeleteBtn);
        list.appendChild(newTask);

        // Clear input field for a new task
        task.value = '';

        // Increment id number 
        i++;
    }

};

// Remove task from the list
function remove(id) {
    document.getElementById(id).remove();
}

// Write-off the task from the list
function done(id) {
    document.getElementById(id).classList.toggle('done');

}