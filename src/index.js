//import {main, AddTodo, AllProjectObjects, PopulateMain} from './TodoCreator.js';
import _ from 'lodash';

//ID
 let Todoid = 0;
  const main = document.querySelector(".main-content");
  const AllProjectObjects = [];



  const create_btn_project = document.querySelector(".proj-create-btn");
  const proj_name = document.querySelector("#proj-name");
 let ProjectId = 0;
 let panelid = 0;

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


//Modal
const modal_close = document.querySelectorAll("#close-btn");
const modal = document.querySelectorAll(".content-modal");
const add_btn = document.querySelector(".fa-plus");
const create_btn = document.querySelectorAll(".create-btn");
const modal_update_close = document.querySelectorAll("#close-updated-btn");

//Modal2
//const modal_close_2 = document.querySelectorAll("#close-btn");
const modal_2 = document.querySelector(".content-modal-2");
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
const project_updated = document.querySelector("#project-updated");



  //Update 
  const newtitle = document.querySelector("#title-updated");
  const newdate = document.querySelector("#date-updated");
  const newdesc = document.querySelector("#desc-updated");
  const newpriority = document.querySelector("#priority-updated");
  const newprojectorigin = project_updated.value;



//OBJECTS

//Factory Function for Todos
const Todos = (title, description, duedate, priority, origin) =>{

  const getTitle = () => title;
  const getDesc = () => description;
  const getDate = () => duedate;
  const getPriority = () => priority;
  
  //Id beginnt mit 1 
  const IDValuation = () =>{Todoid++;return Todoid;}

const getorigin = () => origin;

  //Update Todos
const Update = (newtitle, newdesc, newdate, newpriority, neworigin, myid) => {
  
  if(newtitle != undefined && newtitle != ""){
    title = newtitle;
  }else{
    console.log("undefined");
  }
  
  if(newdesc != undefined && newdesc != ""){
    description = newdesc;
  }else{
    console.log("undefined");
  }

  if(newdate != undefined && newdate != ""){
    duedate = newdate;
  }else{
    console.log("undefined");
  }

  if(newpriority != undefined && newpriority != ""){
    priority = newpriority;
  }else{
    console.log("undefined");
  }


/*  if(neworigin != undefined && neworigin != "" && neworigin != origin){
    
    origin = neworigin;
  let arrlen = AllProjectObjects[neworigin].ProjectArray.length;
  AllProjectObjects[neworigin].ProjectArray[arrlen] = AllProjectObjects[origin].ProjectArray[myid];
  
  console.log("UPDATZED PROJ:" + neworigin);
    console.log(neworigin);

  }else{
    console.log("undefined");
  }*/



};


  
    return {getTitle, getDesc, getPriority, getDate, IDValuation, Update};
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
      
     // AddTodo(AllProjectObjects[id].ProjectArray[i].getTitle(), AllProjectObjects[id].ProjectArray[i].getDesc(), AllProjectObjects[id].ProjectArray[i].getDate(), AllProjectObjects[id].ProjectArray[i].getPriority(), i);
      
      //Check if in Array a elem was deleted and dont show it again
   if(AllProjectObjects[id].ProjectArray[i] != ''){
      AddTodo(AllProjectObjects[id].ProjectArray[i].getTitle(), AllProjectObjects[id].ProjectArray[i].getDesc(), AllProjectObjects[id].ProjectArray[i].getDate(), AllProjectObjects[id].ProjectArray[i].getPriority(), i);
      }else{
        console.log(i+ " wurde gelöscht");
      }

    
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
  
  //Hier Remove reinpacken???!!
  const Remove = (item) => {

    item = "";

  }

  
    return {ProjectArray, getProjectId, getProjectname, Validate, addTodos, Remove};
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






nav_panel.addEventListener("click", (e) =>{
  PopulateMain(e);
   });



//Open Modal2
add_project.addEventListener("click", () =>{
  modal_2.style.display = "flex";

  });

  
//Add a new Todo
create_btn[1].addEventListener("click", () =>{

const myTodo = Todos(title_input.value, desc_input.value, date_input.value, priority_input.value, project_input.value);
TodosObjectArray.push(myTodo);

//Add TODOS TO ARRAY ON OBJECT
AllProjectObjects[project_input.value].addTodos(project_input.value, myTodo);
console.log(project_input.value)


});


//Show Modal1 
add_btn.addEventListener("click", () =>{

  modal[1].style.display = "flex";
  
  });

//Close Modal1 
  modal_close.forEach( (item) =>{

    item.addEventListener("click", () =>{

      modal[1].style.display = "none";
      
      });
  });

  //Show Update Modal


//Close Modal
modal_update_close.forEach( (item) =>{

    item.addEventListener("click", () =>{

      modal[0].style.display = "none";
      
      });
  });


   function PopulateMain(e){
    main.innerHTML = "";
  
    //BUGGY SECTION HERE
 
   
    let h1 = document.createElement("h1");
    h1.textContent = "Project Name: " + AllProjectObjects[e.target.id].getProjectname() + " the ID is: " + AllProjectObjects[e.target.id].getProjectId();
    main.appendChild(h1);
    
    panelid = e.target.id;
    console.log("PANEL ID UPDATED: " + panelid);
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
  
//Move onto Project Object?!?!



  

function RemoveItem (id) {
   //panelid == id welche grad gedrückt wirde von panel
   console.log(id);
   console.log("PANEL ID " + panelid);
     console.log(AllProjectObjects[panelid].ProjectArray);
     console.log(AllProjectObjects[panelid].ProjectArray[id].getTitle());
      AllProjectObjects[panelid].ProjectArray[id] = '';
     console.log("After deletion ------------")
     console.log(AllProjectObjects[panelid].ProjectArray);
     //REMOVE ELEMENTS FROM ARRAY SO THEY ARE NOT GETTIN DISPLAYED AGAIN
     
     count++;
     console.log("executed " + count + " times");
    
     //Display again
     DisplayAgain(panelid); 
}

let myid = 0;
let mydiv;


function CheckPriority(myid){
  if(AllProjectObjects[panelid].ProjectArray[myid].getPriority() == 'High'){
    mydiv.style.color = "red";
    
      }else if(AllProjectObjects[panelid].ProjectArray[myid].getPriority() == 'Medium'){
        mydiv.style.color = "yellow";
      }else{
        mydiv.style.color = "blue";
        console.log(AllProjectObjects[panelid].ProjectArray[myid].getPriority());
      }
}

//UPDATE AN TODO !"!!§!§§!!§"
create_btn[0].addEventListener("click", () =>{

  console.log(newtitle.value)

  AllProjectObjects[panelid].ProjectArray[myid].Update(newtitle.value, newdesc.value, newdate.value, newpriority.value, project_updated.value, myid);

  console.log("updated value");
  console.log(AllProjectObjects[panelid].ProjectArray[myid].getTitle());
 
  //In Objekt packen in Objekt panelid ziehen
if(project_updated.value != "" && project_updated.value != undefined && project_updated.value != panelid){

let arrlen = AllProjectObjects[project_updated.value].ProjectArray.length;

AllProjectObjects[project_updated.value].ProjectArray[arrlen] = AllProjectObjects[panelid].ProjectArray[myid];

console.log("UPDATZED PROJ:" + project_updated.value);

}else{
  console.log("not executed current id tried");
  console.log("UPDATZED PROJ:" + project_updated.value);
}


  //Display again
  CheckPriority(myid);
  DisplayAgain(panelid);
  
  //Nochmal eine eigene Remove Func schreiben
  if(project_updated.value != "" && project_updated.value != undefined && project_updated.value != panelid){
  AllProjectObjects[panelid].ProjectArray[myid] = ''; 
  DisplayAgain(panelid);
}


});

   function AddTodo(title, description, duedate, priority, id) {
  
  /*TODO*/
  let todo_container = document.createElement("div");
  todo_container.classList.add("todo-container");
  todo_container.id =  id;
  main.appendChild(todo_container);
  
  /*LEFT*/
  let todo_left = document.createElement("div");
  todo_left.classList.add("todo-left");
  todo_container.appendChild(todo_left);
  
  let input = document.createElement("input");
  input.type = "checkbox";
  input.id =  id;
  input.name = "check";
  input.addEventListener("click", (e) =>{
    
   //Remove Item
   RemoveItem(id);
 
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
  const icons = ['<i class="fa-solid fa-pencil"></i>', '<i class="fa-solid fa-flag"></i>',  '<i class="fa-solid fa-trash"></i>'];
  
  for(let i = 0; i < icons.length; i++){
  
   mydiv = document.createElement("div");
    mydiv.innerHTML = icons[i];
    mydiv.id = i;
    mydiv.classList.add("mydiv");
    mydiv.addEventListener("click", (e) => {
  console.log(e.target.id);

  //Target Icons right here | SHOW 

  if(e.target.id == 2){

    //Delete Todo
    RemoveItem(id);

  }else if(e.target.id == 0){
    modal[0].style.display = "flex";
    myid = id;
  }

    });

    console.log(mydiv.childNodes)
    console.log(mydiv.childNodes[1])

    if(mydiv.innerHTML == icons[1]){

      if(priority == 'High'){
        mydiv.style.backgroundColor = "red";
        
          }else if(priority == 'Medium'){
            mydiv.style.backgroundColor = "yellow";
          }else{
            mydiv.style.backgroundColor = "blue";
           
          }
          console.log(priority + "in the div");
    }
    console.log(priority);

    todo_right.appendChild(mydiv);
  
    
  
  
    //console.log(priority)
  }
  
  
  
  
  /*TODO*/


  
  
  
  }
  
  
  
  //Creates a Project -> Das alles vielleicht in ein Controller Object packen, der Content anzeigt (auch mit Modals)
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
    console.log(e.target.id)
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

  //Add Option to select
  project_updated.options[project_updated.options.length] = new Option(proj_name.value, ProjectId);
  console.log("OPTION 2 ADDED");
  
  });
  

