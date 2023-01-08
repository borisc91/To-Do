import React, {useState, useContext} from 'react';
import crossIcon from '../assets/images/icon-cross.svg'
import checkIcon from '../assets/images/icon-check.svg'
import classes from './Item.module.scss'
import ItemContext from '../context/ItemContext';




const Item = (props) => {


    const ctx = useContext(ItemContext)

    const [completed, setCompleted] = useState(false);

    
    const crossItem = () => {
        const foundItem = ctx.todo.findIndex( x => x.id === props.item.id)
        ctx.todo[foundItem].completed = !ctx.todo[foundItem].completed
        setCompleted(!completed)
    }
    

    
    return <div className={classes.todo_container}>
        <div className={`${props.item.completed ? classes.circlea : classes.circle }`}>
            <img src={checkIcon} alt="checked icon" />
        </div>

        
        {props.item.completed ? <li onClick={crossItem} 
        className={`${ctx.themeLight ? classes.todostrikewhite : classes.todostrike }`}>{props.item.text}</li> :
         <li onClick={crossItem} className={`${ctx.themeLight ? classes.todoWhite : classes.todo }`}>{props.item.text}</li>}
            
            

        
       <img src={crossIcon} className={classes.delete_icon} alt="delete icon" />
    </div>
};


export default Item;