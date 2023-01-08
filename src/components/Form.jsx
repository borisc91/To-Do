import React, {useState, useRef, useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext';
import classes from './Form.module.scss'





const Form = () => {


    const ctx = useContext(ItemContext)

 

    const inputRef = useRef();
    const formRef = useRef();

useEffect(() => {

    inputRef.current.value = "";
    
    
}, [ inputRef, ctx.todo])


    const todoHandler = (e) => {

        e.preventDefault();
        console.log(inputRef.current.value)
        if(inputRef.current.value !== ""){
        ctx.setTodo(prevTodo => {
            const updatedTodo = [...prevTodo];
            updatedTodo.unshift({ text: inputRef.current.value, id: Math.floor(Math.random() * 1000).toString(), completed: false})
            return updatedTodo
        } )
    }
  
    }

    

    return <div className={classes.input_container}>
    <div className={classes.circle}>

    </div>
    <form onSubmit={todoHandler} ref={formRef}>
        <input className={`${ctx.themeLight ? classes.inputwhite :  classes.inputt }`} type="text" ref={inputRef} placeholder="Create a new todo.." />
        <button type='submit' hidden></button>
    </form>
</div>
};


export default Form;