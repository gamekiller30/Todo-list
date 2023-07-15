let id = 0;
const modal_close = document.querySelectorAll("#close-btn");
const modal = document.querySelector(".content-modal");
const add_btn = document.querySelector(".fa-plus");


add_btn.addEventListener("click", () =>{

  modal.style.display = "block";
  
  })


  modal_close.forEach( (item) =>{

    item.addEventListener("click", () =>{

      modal.style.display = "none";
      
      })
  });





//Factory Function for Todos
const Todos = (title, description, duedate, priority) =>{

const getTitle = () => title;
const getDesc = () => description;
const getDate = () => duedate;
const getPriority = () => priority;

//Id beginnt mit 1 
const IDValuation = () =>{id++;return id;}

  return {getTitle, getDesc, getPriority, getDate, IDValuation};
}


const TodosArray = [];

const Shopping = Todos("Shoppinglist", "Tomatoes, Cabbage, Carrots, Choclate", "15.07.2023", "high");
TodosArray.push(Shopping);

const Cleaning = Todos("Cleaning", "Clean the room!!!", "23.07.2025", "low");
TodosArray.push(Cleaning);

console.log("My title " + Shopping.getTitle());
console.log("My desc " + Shopping.getDesc());
console.log("My date " + Shopping.getDate());
console.log("My priority " + Shopping.getPriority());
console.log("My id " + Shopping.IDValuation());

console.log("----------------------------------------");


console.log("My title " + Cleaning.getTitle());
console.log("My desc " + Cleaning.getDesc());
console.log("My date " + Cleaning.getDate());
console.log("My priority " + Cleaning.getPriority());
console.log("My id " + Cleaning.IDValuation());





console.log(TodosArray[0].getTitle())
console.log(TodosArray[1].getTitle())