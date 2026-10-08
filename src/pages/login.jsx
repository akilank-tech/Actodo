import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login=(props)=>{
    const navigate = useNavigate()
    const[eusername,seteusername]=useState('')
    const[epassword,setepassword]=useState('')
    const[ruser,setruser]=useState(true)

    const[showPassword,setShowPassword] = useState(true)

    const handleUInput=(evt)=>{
        seteusername(evt.target.value)
    }
    const handleUPassword=(evt)=>{
        setepassword(evt.target.value)
    }
    const users = props.users
    
    const checkUser=()=>{
        if(eusername.trim()==="" && epassword.trim()===""){
            return
        }
        var userfound = false

        users.forEach((item)=>{
            if(item.username === eusername && item.password === epassword){
                console.log("login successfull")
                userfound=true
                navigate("/landing",{state:{user:eusername}})
            }
        })
        if(userfound===false){
                console.log("login Failed")
                setruser(false)   
            }   
    }
    return(
       <div className="bg-black p-10 w-full h-screen">
            <div className="bg-[#EFEFEF] p-10  border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi 👋</h1>
               { ruser?<p>I help your manage your activities after you login :)</p>:<p className="text-red-500">Please Sign Up Before you Login.</p>}
                <div className="flex flex-col gap-2 my-2 ">
                <input onChange={handleUInput} type="text" required placeholder="username" className="w-52 border-black p-1 bg-transparent border rounded-md"/>
               <div className="relative w-52">
                 <input onChange={handleUPassword} type={showPassword?"password":"text"} required placeholder="password" className=" w-52 border-black p-1 bg-transparent border rounded-md"/>
                <button className=" text-gray-400 absolute inset-y-0 right-2 flex items-center" onClick={()=>setShowPassword(!showPassword)}><i className={showPassword?"fa-solid fa-eye-slash":"fa-regular fa-eye"}></i></button>
               </div>
                <button className="bg-[#8272DA] w-24 p-1 rounded-md"onClick={checkUser}>Login</button>
                <p>Don't have an account? <Link to={'/signin'}className="underline">Signup</Link></p>
            </div>
            </div>
            
        </div>
    )
}
export default Login;