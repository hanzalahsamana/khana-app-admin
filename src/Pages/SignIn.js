import PressButton from '../Components/Button'
// import icon from "../../../assets/images/google-icon.png"

import {
    useHistory
} from "react-router-dom";
import InputFeild from '../Components/Inputfeilds';
import { Container } from '@mui/material';
import InputPassword from '../Components/InputPassword';

import { useEffect, useState } from 'react';
import firebase from 'firebase';

function SignIn() {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');


    const register = () => {

        console.log('email', email)
        console.log('password', password)

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // user.uid
                firebase.firestore().collection('user').doc(user.uid).onSnapshot((querySnapshot) => {

                    if (querySnapshot.data()?.role === 'admin') {
                        history.push('/AdminDashboard')
                    }
                })


                // ...

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                console.log('Error', errorCode, errorMessage)

            });

        setEmail('')
        setPassword('')


    }
    let history = useHistory();


    return (
        <Container>
            <div className="Sign-in">
                <div className="Sign-in--heading">
                    <h1 className="Sign-in--Main-heading">Hello!</h1>
                    <p>Sign in to your account</p>
                </div>

                <div className="Sign-in--form">

                    <form>
                        <InputFeild className="Sign-in--form-input" label="E-mail" type="mail"
                            value={email}
                            onChange={(text) => setEmail(text.target.value)}

                        />
                        <InputFeild className="Sign-in--form-input" label="Password" type="password"
                            value={password}
                            onChange={(text) => setPassword(text.target.value)}

                        />

                    </form>

                    <div className="Sign-in--form--details">
                        <p className="Sign-in--form--details-Remember-me"><input type="checkbox" /> Remember me?</p>
                        <p className="Sign-in--form--details-Forget-password">Forget password?</p>
                    </div>
                </div>

                <div className="Sign-in-reg-btn">  <PressButton name="SIGN IN" onClick={register} />   </div>


            </div>
        </Container>

    )
}

export default SignIn;