// fetch('http://localhost:8083/api/users')
//   .then(response => response.json())
//   .then(data => {
//     // data is the array of JSON objects
//     const dropdown = document.getElementById('dropdown');
//     data.forEach(item => {
//         const option = document.createElement('option');
//         option.value = item.id;
//         option.text = item.name;
//         dropdown.add(option);
//       });
//   });

function getUserData ()
{
  fetch('http://localhost:8083/api/users')
  .then(response => response.json())
  .then(data => {
    // data is the array of JSON objects
    const dropdown = document.getElementById('dropdown');
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        dropdown.add(option);
      })
    }
  );

 }
getUserData();

    // Add an event listener to the dropdown to retrieve the ToDo tasks when a user is selected

 dropdown.addEventListener('change', function() 
 {
    var userId = this.value;
  
    fetch('http://localhost:8083/api/todos/byuser/' + userId) 
      .then(response => response.json())
      .then(tasks => {
        // Clear the current ToDo list
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        // Add each task to the ToDo list
        tasks.forEach(task => {
          const li = document.createElement('li');
          li.textContent = task.description;
          todoList.appendChild(li);
        })
      })
  })

  fetch('http://localhost:8083/api/categories')
  .then(response => response.json())
  .then(data => {
    // data is the array of JSON objects
    const dropdown = document.getElementById('categories');
    data.forEach(item => {
        const option = document.createElement('option');
        option.value = item.id;
        option.text = item.name;
        dropdown.add(option);
      });
  });

let userId = document.getElementById('users').value;
let categoryId = document.getElementById('categories').value;
let urgency = document.getElementById('urgency').value;
let description = document.getElementById('description').value;
let deadline = document.getElementById('deadline').value;

function sendToDoInfo() {
  //Capture form data
  const userIDvalue = document.getElementById("usersDropdown").value;
  // const userIDvalue = = this.value;
  const deadlineValue = document.getElementById("deadline").value;
  const descriptionValue = document.getElementById("description").value;
  const categoryValue = document.getElementById("category").value;
  const priority = document.getElementById("priority").value;

  //Create POST Header request elements
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  // let userId = this.value;

  let raw = JSON.stringify({
    userid: userIDvalue,
    category: categoryValue,
    description: descriptionValue,
    deadline: deadlineValue,
    priority: priority,
  });
}


