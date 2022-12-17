import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import './dropdown.css'


// get all dropdowns form the document
const dropdowns = document.querySelectorAll('.dropdown');

// loop through all dropdown elements
dropdowns.forEach(dropdown => {
    // get inner elements form each dropdown
    const select = dropdown.querySelector(".select") as HTMLInputElement;
    const caret = dropdown.querySelector(".caret")as HTMLInputElement;
    const menu = dropdown.querySelector(".menu")as HTMLInputElement;
    const options = dropdown.querySelectorAll(".menu li");
    const selected = dropdown.querySelector(".selected")as HTMLElement;

    /*
    We are using this method in order to have multiple dropdown menus on the page work
     */

    // Add a click event to the select element
    select.addEventListener("click", () => {
        //Add the clicked select styles to the select element
        select.classList.toggle("select-clicked");
        //Add to rotate styles to the caret element
        caret.classList.toggle("caret-rotate");
        //Add the open styles to the menu element
        menu.classList.toggle("menu-open");
    });

    //loop through all option elements
    options.forEach(option => {
        option.addEventListener("click", () => {
            //Change selected inner text to clicked option inner text
            selected.innerHTML = option.innerHTML;
            //Add the clicked select styles to the select element
            select.classList.remove("select-clicked");
            //Add to rotate styles to the caret element
            caret.classList.remove("caret-rotate");
            //Remove active class from all option elements
            options.forEach(option => {option.classList.remove("active")});
            option.classList.add("active");
        });
    });
});



function App() {


    return (
        <div>
            <div className="body">
                <div className="dropdown">
                    <div className="select">
                        <span className="selected">!!!</span>
                        <div className="caret"></div>
                    </div>
                    <ul className="menu" >
                        <li className="active">Status</li>
                        <li>Todo</li>
                        <li>InProgress</li>
                        <li>Done</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
export default App;
