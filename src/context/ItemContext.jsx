import React, {useState} from 'react';


const ItemContext = React.createContext({
    themeLight: false,
    changeTheme: () => {}
});


export const ItemContextProvider = (props) => {

    const [themeLight, setThemeLight] = useState(false);
    const [todo, setTodo] = useState([]);

    const changeTheme = () => {
        setThemeLight(current => !current);
    };


    const getItemNumber = todo.length;
    

    const contextValue = {
        themeLight: themeLight,
        changeTheme: changeTheme,
        todo: todo,
        setTodo: setTodo,
        getItemNumber: getItemNumber
        
    }



    return <ItemContext.Provider value={contextValue}>{props.children}</ItemContext.Provider>
}


export default ItemContext;