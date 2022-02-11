import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
 
import Content from "./Content.js";
import Button from "./Button.js";



const App =()=>
{
    return(
        <>
             <Button>
            <Content  name="lalitha"/>
            </Button>
            
        </>
    )
};


ReactDOM.render(
    
    <>
    <App />
    </>,
document.getElementById("root")

);





