import {main, AddTodo} from './TodoCreator.js';




//ID
let Todoid = 0;
let ProjectId = 0;

//Darkmode
const modeswitch = document.querySelector(".fa-moon");
const root = document.documentElement;
let darkcheck = localStorage.getItem("key");
localStorage.setItem("key", true);

console.log(darkcheck)

//Standard auf WhiteMode setzen
//root.classList.add("lightmode");

function Lightmode() {
  root.classList.remove("darkmode");
  root.classList.add("lightmode");
  localStorage.setItem("key", "true");
}

function Darkmode(){
  root.classList.remove("lightmode");
  root.classList.add("darkmode");
  localStorage.setItem("key", "false");
}

if(darkcheck === "true"){
  Lightmode();
}else{
  Darkmode();
}

modeswitch.addEventListener("click", () =>{
  darkcheck = localStorage.getItem("key");

if(darkcheck === "true"){
  Darkmode();
}else{
  Lightmode();
}

});


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
const side = document.querySelector(".side-nav");


//Inputs
const title_input = document.querySelector("#title");
const date_input = document.querySelector("#date");
const desc_input = document.querySelector("#desc");
const priority_input = document.querySelector("#priority");
const project_input = document.querySelector("#project");
const proj_name = document.querySelector("#proj-name");





//OBJECTS

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
  
  
  const addTodos = (id, myTodo) =>{
  
      //Index is select value
        AllProjectObjects[id].ProjectArray.push(myTodo)
  
        console.log(AllProjectObjects[id].ProjectArray);
        
       
       
        console.log("EXECUTEEEDDDDD")
      
  }
  
  
  //Display
  const Display = (id) =>  {
  
    let l = AllProjectObjects[id].ProjectArray.length;
  
    for(let i = 0; i < l ; i++){
      AddTodo(AllProjectObjects[id].ProjectArray[i].getTitle(), AllProjectObjects[id].ProjectArray[i].getDesc(), AllProjectObjects[id].ProjectArray[i].getDate(), AllProjectObjects[id].ProjectArray[i].getPriority(), i);
      }
    
  
  }
  
  const Validate = (id) =>{
  
  //Validation
  if(AllProjectObjects[id].ProjectArray.length > 0){
    Display(id);
  }else{
    let h1 = document.createElement("h1");
  h1.textContent = "NO TODOS YET";
  main.appendChild(h1);
  }
  
  }
  
  
    return {ProjectArray, getProjectId, getProjectname, Validate, addTodos};
  }
  
  //Default Object
  const nav_panel = document.querySelector(".nav-panel")
const createdproj2 = myProjects("Inbox", 0);
AllProjectObjects.push(createdproj2);


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


//Show / Close Sidebar

const bars = document.querySelector(".fa-bars-staggered");

bars.addEventListener("click", () =>{

  if(side.style.display == "none"){
    side.style.display = "block";
  
  }else{
    side.style.display = "none";
  
  }
 

});

//SHOW HOME / MAIN
const home = document.querySelector(".fa-house");
home.addEventListener("click", (e) =>{
  PopulateMain(e);
});




//Close Modal2 
modal2_top_close.forEach( (item) =>{

  item.addEventListener("click", () =>{

    modal_2.style.display = "none";
    
    });
});




function PopulateMain(e){
  main.innerHTML = "";

  //BUGGY SECTION HERE
  
  let h1 = document.createElement("h1");
  h1.textContent = "Project Name: " + AllProjectObjects[e.target.id].getProjectname() + " the ID is: " + AllProjectObjects[e.target.id].getProjectId();
  main.appendChild(h1);
  
  console.log(e.target.id);
  //Display and Validate TODOS
  AllProjectObjects[e.target.id].Validate(e.target.id)
}


nav_panel.addEventListener("click", (e) =>{

  PopulateMain(e);
  
  
   });



//Open Modal2
add_project.addEventListener("click", () =>{
  modal_2.style.display = "block";

  });

  //Create a Project -> Das alles vielleicht in ein Controller Object packen, der Content anzeigt (auch mit Modals)
  create_btn_project.addEventListener("click", () =>{
    console.log(proj_name.value);

ProjectId++;

    //Project Creation
    const createdproj = myProjects(proj_name.value, ProjectId);
    AllProjectObjects.push(createdproj);

    console.log(AllProjectObjects[0].getProjectId())

let panel = document.createElement("div");
panel.classList.add("project-panel");
panel.id = ProjectId;
 project_area.appendChild(panel);





//ID VERGABE LEICHT VERBUGT?!?!?!?
 panel.addEventListener("click", (e) =>{
  PopulateMain(e);
 });
  
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



create_btn.addEventListener("click", () =>{

const myTodo = Todos(title_input.value, desc_input.value, date_input.value, priority_input.value);
TodosObjectArray.push(myTodo);


//Add TODOS TO ARRAY ON OBJECT
AllProjectObjects[project_input.value].addTodos(project_input.value, myTodo);
console.log(project_input.value)



});






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




