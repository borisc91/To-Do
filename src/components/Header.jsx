import React, { useState, useEffect, useContext } from 'react';
import moonIcom from '../assets/images/icon-moon.svg'
import classes from './Header.module.scss'
import sunIcom from '../assets/images/icon-sun.svg'
import ItemContext from '../context/ItemContext';


const Header = (props) => {


    const ctx = useContext(ItemContext);

    
    
    


  

    return <div className={classes.todosHeader}>
    <h1>TODOS</h1>
    {ctx.themeLight ? <img onClick={ctx.changeTheme} src={sunIcom} alt="sun icon" />  : 
    <img onClick={ctx.changeTheme} src={moonIcom} alt="moon icon" />}
</div>
};


export default Header;