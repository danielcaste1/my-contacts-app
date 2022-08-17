import React, {useState, useEffect} from "react";

function useLocalStorage(itemName){
    
    const [item, setItem] = useState([]);

    useEffect(() => {
        try {
            const storagedItem = localStorage.getItem(itemName);
            let parsedItem;
            if(!storagedItem){
                parsedItem = [];
                localStorage.setItem(itemName, JSON.stringify(parsedItem))
            }else{
                parsedItem = JSON.parse(storagedItem);
            }
            setItem(parsedItem);
        } catch (error) {
            localStorage.removeItem(itemName)
        }
    }, []);


    const updateItem = (newItem)=>{
        try {
            const stringifiedItem = JSON.stringify(newItem);
            localStorage.setItem(itemName, stringifiedItem);
            setItem(newItem);
        } catch(error) {
            console.log(error)
        }
    };

    return [item, updateItem]
}

export { useLocalStorage }