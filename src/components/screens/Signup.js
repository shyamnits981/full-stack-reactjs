import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';



const Signup = () => {
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const PostData = async () => {
        console.log(username,email,password)
        let result = await fetch('https://fullstack-nodejs-projects.herokuapp.com/signup', {
            method: 'post',
            body:JSON.stringify({username,email,password}),
            headers: {
                'Content-Type': 'application/json'
            },  
        })
        result = await result.json()
        console.log(result)

    }


    return (
        <div className='bg'>
            
            <div className='mycard'>
                <div className='card auth-card'>
                    <h2>Member Sign up</h2>
                    <input type="text" placeholder="username" value={username} onChange={(e) => setName(e.target.value)} className="input" />
                    <input type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} className="input" />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />

                    <button className="input" onClick={() => PostData()}>Signup</button>
                    <h5>
                        <Link to="/signin">Alredy have an account?</Link>
                    </h5>
                </div>
            </div>
        </div>
    )
}
export default Signup;