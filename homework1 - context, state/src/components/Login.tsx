import { useState } from "react"

const Login = () => {
    const [firstName, setFirstName] = useState<string>("")
    const [lastName, setLastName] = useState<string>("")

    const submitForm = () =>{
        console.log(`firstname: ${firstName}`)
        console.log(`lastname: ${lastName}`)
        alert("Successfully logged in")
    }

    return (
        <div>
            <h3>Login Form</h3>
            <form onSubmit={submitForm}>
                <input 
                    type="text" 
                    value={firstName} 
                    placeholder="First Name"
                    required
                    onChange={(e)=>{setFirstName(e.target.value)}}
                />
                <input 
                    type="text" 
                    value={lastName} 
                    placeholder="Last Name"
                    required
                    onChange={(e)=>{setLastName(e.target.value)}}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Login