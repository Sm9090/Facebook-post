import React from "react";
import './style.css'

function Comment ({thumbnail}){

    return(
        <>
        <div className="commentSection">
            <div className="userImage">
                <img src={thumbnail}></img>
            </div>
            <div className="userInput">
                <input type="text" placeholder="Write Comment"/>
            </div>

        </div>
        </>
    )
}


export default Comment