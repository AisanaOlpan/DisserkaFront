//import React, { Component } from "react";
import classes from "./Button.module.css";

const Button =  props => {
    const btnType = props.type || 'text'
    const cls = props.type //=="auth"//? [classes.Button] : [classes.ButtonSignInGoogle]

    const htmlFor = `${btnType} - ${Math.random()}`
    return(
   // <div className={cls.join('')}>
        <button className={classes.Button}
        type = {btnType} 
        id = {htmlFor}
        value = {props.value}
        onClick = {props.jnClick}>{props.value}</button>
   // </div>
 )
}

export default Button;


