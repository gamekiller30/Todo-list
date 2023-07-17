import {main, AddTodo} from './TodoCreator.js';




//ID
let Todoid = 0;
let ProjectId = 0;

//Arrays
const TodosObjectArray = [];
const AllProjectObjects = [];


//Modal
const modal_close = document.querySelectorAll("#close-btn");
const modal = document.querySelector(".content-modal");
const add_btn = document.querySelector(".fa-plus");
const create_btn = document.querySelector(".create-btn");


//Modal2
//const modal_close_2 = document.querySelectorAll("#close-btn");
const modal_2 = document.querySelector(".content-modal-2");
const create_btn_project = document.querySelector(".proj-create-btn");
const project_area = document.querySelector(".Project-area");
const add_project = document.querySelector(".add-project-panel");
const modal2_top_close = document.querySelectorAll("#proj-close-btn");



//Sidebar
const n_panel = document.querySelector("#project-show");
const arrow = document.querySelector(".arrow");


//Inputs
const title_input = document.querySelector("#title");
const date_input = document.querySelector("#date");
const desc_input = document.querySelector("#desc");
const priority_input = document.querySelector("#priority");
const project_input = document.querySelector("#project");
const proj_name = document.querySelector("#proj-name");





//EVENT LISTENERS


//Show/Close Projects
n_panel.addEventListener("click", () =>{

  if(project_area.style.display == "none"){
    project_area.style.display = "block";
    arrow.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
  }else{
    project_area.style.display = "none";
    arrow.innerHTML = '<i class="fa-solid fa-chevron-down"></i>';
  }
  
  

});


//Close Modal2 
modal2_top_close.forEach( (item) =>{

  item.addEventListener("click", () =>{

    modal_2.style.display = "none";
    
    });
});




//Open Modal2
add_project.addEventListener("click", () =>{
  modal_2.style.display = "block";

  });

  //Create a Project -> Das alles vielleicht in ein Controller Object packen, der Content anzeigt (auch mit Modals)
  create_btn_project.addEventListener("click", () =>{
    console.log(proj_name.value);


//Id Starts with 1 again -> wichtig für ARRAYS später
ProjectId++;

const createdproj = myProjects(proj_name.value, ProjectId);
    AllProjectObjects.push(createdproj);

    console.log(AllProjectObjects[0].getProjectId())

let panel = document.createElement("div");
panel.classList.add("project-panel");
panel.id = ProjectId;
 project_area.appendChild(panel);



/* --  -- ---------- DISPLAY  --  -- ---------- */

/* --  -- ----------  --  -- ----------*/

/* --  -- ----------SPEZIFIC OBJECTS --  -- ---------- */



//ID VERGABE LEICHT VERBUGT?!?!?!?
 panel.addEventListener("click", (e) =>{
main.innerHTML = "";

//BUGGY SECTION HE>RE

let h1 = document.createElement("h1");
h1.textContent = "Project Name: " + AllProjectObjects[e.target.id - 1].getProjectname() + " the ID is: " + AllProjectObjects[e.target.id - 1].getProjectId();
main.appendChild(h1);


if(Array.isArray(AllProjectObjects[e.target.id - 1].ProjectArray[e.target.id - 1])){
  ShowTodos(e.target.id);
}else{
  let h1 = document.createElement("h1");
h1.textContent = "NO TODOS YET";
main.appendChild(h1);
}


  console.log(e.target.id);
 })


/* --  -- ---------- DISPLAY  --  -- ---------- */

/* --  -- ----------  --  -- ----------*/

/* --  -- ----------SPEZIFIC OBJECTS --  -- ---------- */




  
 let project = document.createElement("div");
 project.classList.add("project");
 panel.appendChild(project);
  
 let icon = document.createElement("div");
icon.innerHTML = '<i class="fa-solid fa-file"></i>'
 project.appendChild(icon);

 let p = document.createElement("p");
 p.textContent = proj_name.value;
 project.appendChild(p);

 
//Add Option to select
 project_input.options[project_input.options.length] = new Option(proj_name.value, ProjectId);
 console.log("OPTION ADDED");

  });


//USE OF EXPORTED FUNC
//!!!Displays the Actual Todo (Write logic onto Project Object to output when clicked on it)!!!

function ShowTodos(id){

  let l = AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1].length;

  for(let i = 0; i < l ; i++){
    AddTodo(AllProjectObjects[id - 1].ProjectArray[id - 1][i].getTitle(), AllProjectObjects[id - 1].ProjectArray[id - 1][i].getDesc(), AllProjectObjects[id - 1].ProjectArray[id - 1][i].getDate(), AllProjectObjects[id - 1].ProjectArray[id - 1][i].getPriority(), id);
    }
  

}




/* --  -- ---------- DISPLAY AND --  -- ---------- */

/* --  -- ---------- ADDING TODOS TO --  -- ----------*/

/* --  -- ----------SPEZIFIC OBJECTS --  -- ---------- */

create_btn.addEventListener("click", () =>{

const myTodo = Todos(title_input.value, desc_input.value, date_input.value, priority_input.value);
TodosObjectArray.push(myTodo);



//!!!!Move this Logic onto Project Object later on!!!!
if(AllProjectObjects != "" && Array.isArray(AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1])){
 

  //Index is select value
 AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1].push(myTodo)

 //console.log(AllProjectObjects[project_input.value - 1].ProjectArray[0].getTitle());

 console.log(AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1]);
 console.log(AllProjectObjects[project_input.value - 1].ProjectArray);


 console.log("EXECUTEEEDDDDD")

}else if(AllProjectObjects != "" && !Array.isArray(AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1])){
 
  AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1] = [myTodo];

  console.log(AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1])

  console.log(AllProjectObjects[project_input.value - 1].ProjectArray[project_input.value - 1][0].getTitle())
  console.log("EXECUTED")
}else{
  console.log("Object Array empty");
}







console.log(project_input.value)



});


/* --  -- ---------- DISPLAY AND --  -- ---------- */

/* --  -- ---------- ADDING TODOS TO --  -- ----------*/

/* --  -- ----------SPEZIFIC OBJECTS --  -- ---------- */




//Show Modal1 
add_btn.addEventListener("click", () =>{

  modal.style.display = "block";
  
  });

//Close Modal1 
  modal_close.forEach( (item) =>{

    item.addEventListener("click", () =>{

      modal.style.display = "none";
      
      });
  });





//Factory Function for Todos
const Todos = (title, description, duedate, priority) =>{

const getTitle = () => title;
const getDesc = () => description;
const getDate = () => duedate;
const getPriority = () => priority;

//Id beginnt mit 1 
const IDValuation = () =>{Todoid++;return Todoid;}

  return {getTitle, getDesc, getPriority, getDate, IDValuation};
}


//Factory Function for Projects
const myProjects = (name, id) =>{

  const ProjectArray = [];

const getProjectId = () => id;
const getProjectname = () => name;


  return {ProjectArray, getProjectId, getProjectname};
}


