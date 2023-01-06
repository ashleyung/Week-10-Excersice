// Add a submit event listener to the form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  GetData.preventDefault();

  // Get the form element

  // Get the form data
  const formData = new FormData(form);

  // Create a Todo object from the form data
  const todo = {
    category: formData.get("category"),
    description: formData.get("description"),
    deadline: formData.get("deadline"),
    priority: formData.get("priority"),
  };

  // Store the Todo object in session storage
  sessionStorage.setItem("todo", JSON.stringify(todo));
});
