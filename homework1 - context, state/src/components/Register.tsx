import { useState, useEffect, FormEvent } from "react"

const Register = () => {

    const [registerform, setRegisterForm] = useState({})

    const saveRegisterFields = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setRegisterForm((previous)=>({
            ...previous,
            [event.target.name]:event.target.value
        }))
    }

    useEffect(()=>{
        console.log(registerform)
    }, [registerform])

    const submitForm = (event:FormEvent) =>{
        event.preventDefault()
        console.log({registerform})
    }

    return (
        <div>
            <h3>Register Form</h3>
            <form onSubmit={submitForm}>
                <input 
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={saveRegisterFields}
                 />
                <input 
                    type="text"  
                    name="firstname"
                    placeholder="First Name"
                    required
                    onChange={saveRegisterFields}
                />
                <input 
                    type="text" 
                    name="lastname"
                    placeholder="Last Name"
                    required
                    onChange={saveRegisterFields}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register