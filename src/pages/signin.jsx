import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {

    const navigate = useNavigate()

    const users = props.users
    const setusers = props.setusers
    const [eusername, seteusername] = useState('')
    const [epassword, setepassword] = useState('')

    const[showPassword,setShowPassword] = useState(true)
    const[showCPassword,setShowCPassword]=useState(true)

     const handleUInput=(evt)=>{
        seteusername(evt.target.value)
    }
    const handleUPassword=(evt)=>{
        setepassword(evt.target.value)
    }
    const handleAdd=()=>{
         if(eusername.trim()==="" && epassword.trim()===""){
            return
        }
        setusers([...users,{username:eusername,password:epassword}])
        navigate('/')
    }
    return (
        <div className="bg-black p-10 w-full h-screen">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
                <p>Sign up here :)</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" required placeholder="username" onChange={handleUInput} className="w-52 border-black p-1 bg-transparent border rounded-md" />
                    <div className="relative w-52">
                        <input type={showPassword?"password":"text"} required placeholder="password" onChange={handleUPassword} className="w-52 border-black p-1 bg-transparent border rounded-md" />
                    <button className=" text-gray-400 absolute inset-y-0 right-2 flex items-center" onClick={()=>setShowPassword(!showPassword)}><i className={showPassword?"fa-solid fa-eye-slash":"fa-regular fa-eye"}></i></button>
                    </div>
                    <div className="relative w-52">
                        <input type={showCPassword?"password":"text"} required placeholder="confirm password" className="w-52 border-black p-1 bg-transparent border rounded-md" />
                    <button className=" text-gray-400 absolute inset-y-0 right-2 flex items-center" onClick={()=>setShowCPassword(!showCPassword)}><i className={showCPassword?"fa-solid fa-eye-slash":"fa-regular fa-eye"}></i></button>
                    </div>
                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={handleAdd}>Signup</button>
                    <p>Already have an account? <Link to={'/'} className="underline">Login</Link></p>
                </div>
            </div>

        </div>
    )
}
export default Signup; 