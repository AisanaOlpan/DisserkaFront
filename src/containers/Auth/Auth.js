// import React, { Component, useState } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Inputs/Input.js";
//export default class Auth extends Component {
function loginHandler() {}
function registerHandler() {}
function submitHandler(event) {
  event.preventDefault();
}

function onChangeHandler(event) {
  // console.log(formControls)
  const formControls = { formControls };
  const control = { formControls };
  

 }


export function AuthSignIn () {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <div className={classes.Auth}>
      
      <div>
        {/* <h1>Авторизация</h1> */}
        <form onsubmit={() =>{}} className={classes.AuthForm}>
          <Input label="Email" ></Input>
          <Input label="Password" type="Password"></Input>
          <Button type="auth" onClick={() =>{}} value="Sign in"></Button>
          <h5>
            Don't have an account? <a href="#">Sign Up</a>
          </h5>
        </form>
      </div>
    </div>
  );
}




export function AuthSignUp () {

  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  return (
    <div className={classes.Auth}>
      
      <div>
        {/* <h1>Авторизация</h1> */}
        <form onsubmit={() =>{}} className={classes.AuthForm}>
        <Input label="Full Name"></Input>
        <Input label="Age" type = "number" ></Input>
          <Input label="Email" ></Input>
          <Input label="Password" type="Password"></Input>
          <Button type="auth" onClick={() =>{}} value="Sign in"></Button>
          <h5>
          You already have an account? <a href="#">Sign In</a>
          </h5>
        </form>
      </div>
    </div>
  );
}
