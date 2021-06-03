import "./sass/main.scss"

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

import React, {Component} from 'react';

class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            isRegistered : true
        }
}
    render() {
        const onClick = () =>{
            this.setState({
                isRegistered: !this.state.isRegistered
            })
        }
        return (
            <div className="body">
                <h1>Hello everybody!!!</h1>
                <button type="button" onClick={onClick}>Change</button>
                {
                    this.state.isRegistered ? <SignUp/> : <LogIn/>
                }

            </div>
        );
    }
}

export default App;
