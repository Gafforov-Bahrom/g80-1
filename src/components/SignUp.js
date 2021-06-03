import React, {Component} from 'react';

import camera from '../camera.png'

class SignUp extends Component {
    render() {
        return (
            <div className="container">
                <div className="card">

                    <h3>Welcome</h3>
                    <p>Signup into your account</p>
                    <div className="card-body">
                        <h4>Sign up</h4>
                        <input type="text" placeholder='Full Name' />
                        <input type="email" placeholder='E-mail' />
                        <input type="text" placeholder='password' />
                        <button type="button">SIGN UP</button>

                        <div className="pos">
                            <div className="camera"/>

                            <img src={camera} style={{width: "24px"}} alt=""/>

                        </div>
                    </div>

                    <div className="card-footer">
                        <p>Already have an account</p>
                        <button type="button">Log in</button>
                    </div>


                </div>
            </div>
        );
    }
}

export default SignUp;