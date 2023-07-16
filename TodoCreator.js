//MAIN
export const main = document.querySelector(".main-content");

export function AddTodo(title, description, duedate, priority) {

/*HEADER
let main_header = document.createElement("div");
main_header.classList.add("Main-Header");
main.appendChild(main_header);

let h1 = document.createElement("h1");
h1.textContent = "Project1  you have  12 Todos open"
main_header.appendChild(h1);

*/

/*TODO*/
let todo_container = document.createElement("div");
todo_container.classList.add("todo-container");
main.appendChild(todo_container);

/*LEFT*/
let todo_left = document.createElement("div");
todo_left.classList.add("todo-left");
todo_container.appendChild(todo_left);

let input = document.createElement("input");
input.type = "checkbox";
input.id = "check";
input.name = "check";
todo_left.appendChild(input);

let todo_text = document.createElement("div");
todo_text.classList.add("todo-text");
todo_left.appendChild(todo_text);

let h3 = document.createElement("h3");
h3.textContent = title;
todo_text.appendChild(h3);


let p = document.createElement("p");
p.textContent = description;
todo_text.appendChild(p);


let date = document.createElement("p");
date.textContent = duedate;
todo_text.appendChild(date);


/*RIGHT*/
let todo_right = document.createElement("div");
todo_right.classList.add("todo-right");
todo_container.appendChild(todo_right);

/*ICONS*/
const icons = ['<i class="fa-solid fa-pencil"></i>', '  <i class="fa-solid fa-flag"></i>', '  <i class="fa-solid fa-circle-arrow-right"></i>', '<i class="fa-solid fa-trash"></i>'];

for(let i = 0; i < icons.length; i++){

  let div = document.createElement("i");
  div.innerHTML = icons[i];
  div.addEventListener("click", (e) => {
console.log(e.target);
  });
  todo_right.appendChild(div);

  if(div.innerHTML == icons[1]){

    if(priority == 'High'){
  div.style.color = "red";
  
    }else if(priority == 'Medium'){
      div.style.color = "yellow";
    }else{
      div.style.color = "blue";
    }
  
  }else{
    console.log("Its "+ icons[i] + "not what you are looking for")
  }


  console.log(priority)
}




/*TODO*/



}