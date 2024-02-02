
import {useContext, useRef, useState} from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';


function MainPage () {

    const userCtx = useContext(UserContext);
    const {setUser} = userCtx;
    
    const emailInputref = useRef(null);
    const passwordInputRef = useRef(null);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleSignIn = async (e)=>{
        e.preventDefault();
        // console.log(emailInputref.current.value);
        // console.log(passwordInputRef.current.value);

        if (emailInputref.current.value === ""){
            emailInputref.current.focus();
            return;
        }
        if (passwordInputRef.current.value === ""){
            passwordInputRef.current.focus();
            return;
        }

        //* POST request to backend
        const res = await axios.post('http://localhost:4000/api/users/signin', {
            email: emailInputref.current.value,
            password: passwordInputRef.current.value
        });
        console.log(res.data);
    }

    const handleSignUp = async(e)=>{
        e.preventDefault();
        // console.log(emailInputref.current.value);
        // console.log(passwordInputRef.current.value);

        if (emailInputref.current.value === ""){
            emailInputref.current.focus();
            return;
        }
        if (passwordInputRef.current.value === ""){
            passwordInputRef.current.focus();
            return;
        }

        //* POST request to backend
        const res = await axios.post('http://localhost:4000/api/users/signup', {
            email: emailInputref.current.value,
            password: passwordInputRef.current.value
        });
        console.log(res.data);
    }

    return (
        <main>
            <h1> Main Page</h1>

        { showSignUp ? (

            <div>
                <form 
                onSubmit={handleSignIn}
                style = {{
                    display:'flex', 
                    flexDirection:'column', 
                    padding: '10px',
                }}>

                    <h3> Sign in </h3>

                    <label htmlFor="email"> Email</label>
                    <input
                     ref={emailInputref}
                     name ="email" 
                     id="email"
                     type="text" 
                     placeholder="email or phone"
                    />

                    <label htmlFor="email"> Password </label>
                    <input
                     ref={passwordInputRef}
                     name ="password" 
                     id="password"
                     type="text" 
                     placeholder="password"
                    />
                    <br/>
                    <button type="submit"> Sign In </button>

                </form>

                <span> Don't have an account? {''}
                    <button onClick={()=> setShowSignUp (!showSignUp)}> Sign Up 
                    </button>
                </span>

            </div>
            ) :(

            <div>
                <form 
                onSubmit={handleSignUp}
                style = {{
                    display:'flex', 
                    flexDirection:'column', 
                    padding: '10px',
                }}>

                 
                    <h3> Sign Up </h3>

                    <label htmlFor="email"> Email</label>
                    <input
                     ref={emailInputref}
                     name ="email" 
                     id="email"
                     type="text" 
                     placeholder="email or phone"
                    />

                    <label htmlFor="email"> Password </label>
                    <input
                     ref={passwordInputRef}
                     name ="password" 
                     id="password"
                     type="text" 
                     placeholder="password"
                    />
                    <br/>
                    <button type="submit"> Sign Up </button>

                </form>

                <span> Already have an account? {''}
                    <button onClick={()=> setShowSignUp (!showSignUp)}> Sign in 
                    </button>
                </span>

            </div>
            )}

        </main>

    )
}
export default MainPage;