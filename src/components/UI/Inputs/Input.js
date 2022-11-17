// import React, { Component } from "react";
import classes from "./Input.module.css";
function isInvalid({valid, touched, shoulValidate}){
    return !valid && shoulValidate && touched
}

const Input =  props => {
    const inputType = props.type || 'text'
    const cls = [classes.Input]
    const htmlFor = `${inputType} - ${Math.random()}`

    if(isInvalid(props)){
        cls.push(classes.inValid)
    }
    return(
    <div className={classes.Input}>
        {console.log(props)}
        <label htmlFor={htmlFor}>{props.label}</label>
        {console.log(props.label)}
        <input 
        type = {inputType} 
        id = {htmlFor}
        value = {props.value}
        onChange = {props.onChange} />
        {
            isInvalid(props)?  <span>{props.errorMessage || "Please enter a valid value"}</span> : null
        }
       
    </div>
 )
}

export default Input;
