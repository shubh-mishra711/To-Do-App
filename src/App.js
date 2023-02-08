import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import { useEffect, useState } from 'react';
import AddTodos from './MyComponents/AddTodos';



function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];

  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  // let myvar=472;
    const onDelete = (todo)=>{
      console.log("I am on Delete", todo);

      setTodos(todos.filter((e)=>{
          return e!==todo;
      }));

      localStorage.setItem("todos",JSON.stringify(todos));
    }

    const addTodos =(title,desc)=>{
      console.log("i am adding this todo", title , desc)
      let sno;
      if(todos.length==0){
        sno=0;
      }
      else{
        sno=todos[todos.length-1].sno+1;
      }
      const myToDo ={
        sno:sno,
        title: title,
        desc:desc,

      }
      setTodos([...todos,myToDo]);
      console.log(myToDo);

      

      // localStorage.setItem("todos",JSON.stringify(todos));
    }

    const [todos, setTodos] = useState([initTodo]);
    useEffect(()=>{
      localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])

  return (
    <>
    <Header title="My To Do List" searchBar={false}/>
    <AddTodos addTodos={addTodos}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
