// import { Component, OnInit } from '@angular/core';

// interface List {
//   task:string;
//   completed:boolean;
//   editing:boolean;
// }


// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }


//   title = 'TODO List';
//   addInput:string;
  
//   filterText:string;
//   completed:boolean=true;
  
//   items: List []=[
//     {task: 'Walk the dog.',completed:false,editing:false},
//     {task: 'Go to the store.',completed:true,editing:false},
//     {task: 'Walk the cat',completed:false,editing:false},
//     {task: 'Walk the car',completed:false,editing:false},
//   ]
//   filteredTodo=[...this.items];
//   addTask =() => {
//     const newTask = {
//       task:this.addInput,
//       completed:false,
//       editing:false
//     }
//     this.items.push(newTask);
//     this.filteredTodo= [...this.items];
//     this.addInput=null;
//   }
  

//   completeTask=(i)=>{
//     this.items[i].completed=true;
    
//   }


//   removeTask = (i) => {
//     this.items.splice(i, 1);
//     this.filteredTodo= [...this.items];
//   }
  
  
//   filterTodos = ()=> {
//     console.log(this.filteredTodo);
//     this.filteredTodo=this.items.filter(item=>item.task.includes(this.filterText));
    
//   }

// editTodo(item:List):void {
//   item.editing = true;
// }

// doneEdit(item:List):void {
//   item.editing=false;
//   }

// }

import { Component, OnInit } from '@angular/core';

interface List {
  task:string;
  completed:boolean;
  editing:boolean;
}


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  title = 'TODO List';
  addInput:string;
  
  filterText:string;
  completed:boolean=true;
  
  items: List []=[
    {task: 'Walk the dog.',completed:false,editing:false},
    {task: ' walk the line.',completed:true,editing:false},
    {task: 'Walk it out',completed:false,editing:false},
    {task: 'Walk hard',completed:false,editing:false},
  ]
  filteredTodo=[...this.items];
  addTask =() => {
    const newTask = {
      task:this.addInput,
      completed:false,
      editing:false
    }
    this.items.push(newTask);
    this.filteredTodo= [...this.items];
    this.addInput=null;
  }
  

  completeTask=(i)=>{
    this.items[i].completed=true;
    
  }


  removeTask = (i) => {
    this.items.splice(i, 1);
    this.filteredTodo= [...this.items];
  }
  
  
  filterTodos = ()=> {
    console.log(this.filteredTodo);
    this.filteredTodo=this.items.filter(item=>item.task.includes(this.filterText));
    
  }

editTodo(item:List):void {
  item.editing = true;
}

doneEdit(item:List):void {
  item.editing=false;
  }

}