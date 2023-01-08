import React, {useState, useEffect, useContext} from 'react';
import ItemContext from '../context/ItemContext';
import classes from './Footer.module.scss'

const Footer = (props) => {


    const ctx = useContext(ItemContext)

const [display, setDisplay] = useState(1)
    
const setAllDisplay = () => {
    setDisplay(1);
}

const setActiveDisplay = () => {
    setDisplay(2);
};

const setCompletedDisplay = () => {
    setDisplay(3);
}

const setClearedDisplay = () => {
    ctx.setTodo((prevTodo) => {
            
        const updatedTodoCompleted = prevTodo.filter((obj) => obj.completed === false)
         return updatedTodoCompleted
     } )

}

useEffect(()=> {
    props.changeDisplay(display)

}, [display]);



    return  <div className={`${ctx.themeLight ? classes.footerWhite : classes.todos_footer }`}>
    <p>{ctx.getItemNumber} Items left</p>

    <div className={classes.types}>
    <div className={classes.types}>
        <p className="clear" onClick={setAllDisplay}>
            All
        </p>
        <p className="clear" onClick={setActiveDisplay}>
            Active
        </p>
        <p className="clear" onClick={setCompletedDisplay}>
            Completed
        </p>
        </div>

       
    </div>
    <p className="clear" onClick={setClearedDisplay}>Clear completed</p>
</div>
};


export default Footer;