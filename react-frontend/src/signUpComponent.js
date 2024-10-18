import React, { useState } from 'react';

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // TO DO: SERVER LOGIC FOR SENDING USER DATA TO DB
            const res = await fetch("http://localhost:5501/signup", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
                })
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            console.log(data);
            window.location.href = "onboarding.html";
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    return (
        <>
            <div id="Overlay">
                <form id="signupform" onSubmit={handleSubmit}>
                    <h1>Signup for Cadence</h1>
                    <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} minlength="6" maxlength="20"
                        placeholder="Please enter a username..." required></input>
                    <label for="username">Username: </label>
                    <br></br>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Please enter your email..." required></input>
                    <label for="email">Email: </label>
                    <br></br>
                    <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        minlength="8" maxlength="32" placeholder="Please enter a password..."></input>
                    <label for="password">Password: </label>
                    <p>Valid Characters: "a-z, A-Z, 0-9, @,!, #, _, $"</p>
                    <br></br>
                    <input type="submit" id='submit' value="Sign Up"></input>
                </form>
            </div >
        </ >
    )
}

export default SignUp;