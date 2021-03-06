import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = async event => {
        event.preventDefault(); // preventDefault ayuda a tomar control absoluto sobre los eventos, como dice su nombre, previene que suceda el default

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }

        this.setState({ email:'', password:'' })
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value }) // con esta función de handle Change, puedo manejar los cambios para múltiples inputs, ya que lo hace de forma dinámica basodo en los parámetros que recibe del input independientemente de cual sea
    };

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} label="email" onChange={this.handleChange} required />
                    <FormInput name="password" type="password" value={this.state.password} label="password" onChange={this.handleChange} required />

                    <div className='buttons'>
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
 
                </form>
            </div>
        )
    }

}

export default SignIn;