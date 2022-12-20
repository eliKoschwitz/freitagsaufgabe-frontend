import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom";

const OpenTodos = () => {
    const[message, setMessage] = useState("");
    const {number} = useParams();

    useEffect(() => {
        setMessage( "das ist die nummer "+number);
    }, [])

    return(
        <div>
            <p>{message}</p>
        </div>
    )
}

export default OpenTodos;