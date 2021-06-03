import React, {Component} from 'react';
import boy from '../boy.png'



class LogIn extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
}
    render() {

        const Click = () => {
            // this.setState({
            //     isRegistered: !this.state.isRegistered
            //
            // })
            // console.log("Hello world");
        }



        return (
            <div className="container">
                <div className="card">

                    <h3>Welcome Back</h3>
                    <p>Login back into your account</p>
                    <div className="card-body">
                        <h4>Sign up</h4>
                        <input type="email" placeholder='E-mail' />
                        <input type="text" placeholder='password' />
                        <a href="#">Forgot Password?</a>
                        <button type="button" style={{display: "block"}} >Login</button>

                        <div className="boy">
                                <img src={boy}  alt=""/>
                        </div>
                    </div>

                    <div className="card-footer">
                        <p>Don't have an account yet?</p>
                        <button type="button" onClick={Click}>Join Now</button>
                    </div>


                </div>
            </div>
        );
    }
}

export default LogIn;