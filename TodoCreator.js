//MAIN
export const main = document.querySelector(".main-content");
export const AllProjectObjects = [];


export function PopulateMain(e){
  main.innerHTML = "";

  //BUGGY SECTION HERE
  
  let h1 = document.createElement("h1");
  h1.textContent = "Project Name: " + AllProjectObjects[e.target.id].getProjectname() + " the ID is: " + AllProjectObjects[e.target.id].getProjectId();
  main.appendChild(h1);
  
  console.log(e.target.id);
  //Display and Validate TODOS

AllProjectObjects[e.target.id].Validate(e.target.id);
}


function DisplayAgain(id){
  main.innerHTML = "";

  //BUGGY SECTION HERE
  
  let h1 = document.createElement("h1");
  h1.textContent = "Project Name: " + AllProjectObjects[id].getProjectname() + " the ID is: " + AllProjectObjects[id].getProjectId();
  main.appendChild(h1);
  
  console.log(id);
  //Display and Validate TODOS

AllProjectObjects[id].Validate(id);
}








let count = 0;

export function AddTodo(title, description, duedate, priority, id) {

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
todo_container.id = "id:" + id;
main.appendChild(todo_container);

/*LEFT*/
let todo_left = document.createElement("div");
todo_left.classList.add("todo-left");
todo_container.appendChild(todo_left);

let input = document.createElement("input");
input.type = "checkbox";
input.id = "id:" + id;
input.name = "check";
input.addEventListener("click", (e) =>{
  
  /*
  let inputid = document.getElementById(e.target.id);
  inputid.remove();*/
 
  //!!!!!!!!!!!!!!! HIER AUFGEHÖRT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//0 noch durch id ersetzten, damit es für alle Projects klappt!!!
  console.log(AllProjectObjects[0].ProjectArray);
  console.log(AllProjectObjects[0].ProjectArray[id].getTitle());
   AllProjectObjects[0].ProjectArray[id] = '';
  console.log("After deletion ------------")
  console.log(AllProjectObjects[0].ProjectArray);
  //REMOVE ELEMENTS FROM ARRAY SO THEY ARE NOT GETTIN DISPLAYED AGAIN
  
  count++;
  console.log("executed " + count + " times");
  
  //Display again
  DisplayAgain(0); //hier auch id rein
});
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
  
  }


  //console.log(priority)
}




/*TODO*/



}