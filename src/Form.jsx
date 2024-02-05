import { useState } from "react";
import { FaBeer, FaLock, FaUser } from "react-icons/fa";

const Form = () => {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [canProceed, setCanProceed] = useState(false)

    const updateEmailValue = (event) => {
        const value = event.target.value
        setUserEmail(value)
        // alert(`Your data is: ${value}`)
    }

    const updatePasswordValue = (event) => {
        const value = event.target.value
        setUserPassword(value)
        // alert(`Your data is: ${value}`)
    }

    const handleSubmit = event => {
        event.preventDefault();

        if(userEmail == '' || userPassword == '') {
            alert(`Email or Password cannot be blank`)
            return 
        }
        setCanProceed(true)
        youCanSubmit()
    }

    const youCanSubmit = () => {
        if(canProceed === true)
        {
            alert("Congratulations")
            // window.location = '/profile-details'
        }
    }
    return(
        <center>
            <form action="" className="1/4 border-red-500">
                <fieldset>
                    <label htmlFor=""><FaUser/></label>
                    <input onChange={updateEmailValue} value={userEmail} className="border rounded border-red-700" type="password" name="email"/>
                </fieldset>

                <fieldset>
                    <label htmlFor=""><FaLock/></label>
                    <input onChange={updatePasswordValue} value={userPassword} className="border rounded border-red-700" type="password" name="password"/>
                </fieldset>
                
                    <button onClick={handleSubmit} className="w-fit px-7 bg-blue-600 text-white" type="submit">Next</button>
                
            </form>
            <p>{userEmail}</p>
        </center>
    )
}

export default Form