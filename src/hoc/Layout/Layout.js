// import React, {Component} from "react";
import {AuthSignIn, AuthSignUp} from "../../containers/Auth/Auth";
import classes from './Layout.module.css'
//class Layout extends Component {
    function Layout(){
    // render(){
        return(

            <div className={classes.Layout}>

                <main>
                    {<AuthSignUp/>}
                    {/* {this.props.children} */}
                </main>
            </div>
        )
    }

// }

export default Layout