import React, {useState, useEffect, useContext, useRef} from 'react';
import Footer from './Footer';
import Form from './Form';
import Header from './Header';
import Item from './Item';
import classes from './Todos.module.scss'
import ItemContext from '../context/ItemContext';

const Todos = () => {


    
    const [displaySetting, setDisplaySetting] = useState(1)

    const ctx = useContext(ItemContext)

    const changeDisplay = (footerSetting) => {

        setDisplaySetting(footerSetting)
    }


    //save reference for dragItem and dragOverItem

    const dragItem=useRef(null)
    const dragOverItem=useRef(null)


    //handle sorting

    const handleSort = () => {
        let _todoItems = [...ctx.todo]

        const draggedItemContent = _todoItems.splice(dragItem.current, 1)[0]

//switch position
        _todoItems.splice(dragOverItem.current, 0, draggedItemContent)


        //reset
dragItem.current = null
dragOverItem.current = null

ctx.setTodo(_todoItems)

    }



    return <div className={classes.todos}>
    <Header />
    <Form/>

    <div className={classes.todos_container} >

       {displaySetting === 1  && ctx.todo.map((item, index) => (
           <div key={item.id} draggable
           onDragStart={(e) => dragItem.current=index}
           onDragEnter={(e) => dragOverItem.current=index}
           onDragEnd={handleSort}
           onDragOver={(e) => e.preventDefault}>
            <Item item = {item} key={item.id} />
            </div>
   ))}

{displaySetting === 2 && ctx.todo.filter((filtereditem) => ( filtereditem.completed === false)).map((item) => (
            <Item item = {item} key={item.id} />
        ))}

{displaySetting === 3 && ctx.todo.filter((filtereditem) => ( filtereditem.completed === true)).map((item) => (
            <Item item = {item} key={item.id} />
))}
           
       
        
        <Footer changeDisplay={changeDisplay} />
    </div>

</div>
};


export default Todos;