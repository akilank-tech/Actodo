import { Activity, useState } from "react";
const AddTodoform=(props)=>{
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr 

    const [newarr,setnewarr]=useState("")
    const handleChange=(evt)=>{
        setnewarr(evt.target.value)
    }
    const handleadd=()=>{
        setActivityArr([...activityArr,{
            id:activityArr.length+1,activity:newarr
        }])
        setnewarr("")
    }
    return(
         <div className="flex flex-col gap-3">
                <h1 className="text-2xl font-medium">Manage Activities</h1>
                <div>
                    <input value={newarr} onChange={handleChange} type="text" placeholder="Next Activity?" className="border border-black p-1 bg-transparent" />
                <button onClick={handleadd} className="bg-black text-white p-1 border border-black cursor-pointer">Add</button>
                </div>
            </div>
    )
}
export default AddTodoform;