import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers
    const [eusername, seteusername] = useState('')
    const [epassword, setepassword] = useState('')

     const handleUInput=(evt)=>{
        seteusername(evt.target.value)
    }
    const handleUPassword=(evt)=>{
        setepassword(evt.target.value)
    }
    const handleAdd=()=>{
        setusers([...users,{username:eusername,password:epassword}])
        navigate('/')
    }
    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" placeholder="username" onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md" />
                    <input type="text" placeholder="password" onChange={handleUPassword} className="w-52 border-black p-1 bg-transparent border rounded-md" />
                    <input type="text" placeholder="confirm password" className="w-52 border-black p-1 bg-transparent border rounded-md" />
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={handleAdd}>Signup</button>
                    <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Signup; 