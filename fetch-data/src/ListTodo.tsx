import { useEffect, useState } from "react";
import style from "./Loader.module.css";

function ListTodo() {
    const [todos,setTodos] = useState([])
    const [reset,setReset] = useState(false)
    const [isLoading,setIsLoading] = useState(true)

    const fetchTodos = ()=>{
        fetch("https://jsonplaceholder.typicode.com/todos",{
            method:"GET",
        })
        .then(res=>{
            return res.json()
        })
        .then(data=>{
            setTodos(data)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log("error",error)
        });
        
    }
    
    useEffect(()=>{
        console.log("initial render")
        console.log("isloading",isLoading)
        setTimeout(fetchTodos,6000)
    },[])

    useEffect(()=>{
        if (reset === true){
            console.log("reset clicked")
            fetchTodos()
            setReset(false)
        }
    },[reset])

    const deleteTodo = (id:number)=>{
        setTodos(todos.filter(todo=>todo["id"] !== id))
    }

    const resetTodos = ()=>{
        fetchTodos()
    }

    const renderList=()=>{
        if (isLoading){

            return (
            <div className={style.loaderContainer}>
                <div className={style.loader}></div>
            </div>
            )
        }else{
            return <ol>
                {todos.map((item:any,index:number) => (
                    <li key={index}>{item.title}<button onClick={()=>deleteTodo(item.id)}>Delete</button></li>
                ))}
            </ol>
        }
    }
    return (
                <div>
                    <h1>Todo</h1>
                    <button onClick={()=>setReset(true)}>Reset</button>
                    <button onClick={()=>console.log("clicked")}>Clicked</button>
                    {renderList()}
                </div>
            )
}

export default ListTodo