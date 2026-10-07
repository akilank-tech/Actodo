import { useState } from "react";
import TodoItem from "./todoitem";
const TodoList = (props) => {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr
    return (
        <div className="bg-[#BDB4EA] border-0 rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Today's Avtivity</h1>
            {activityArr.length === 0 ? <p>You haven't added anything yet</p> : ""}
            {
                activityArr.map((item, index) => {
                    return <TodoItem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />
                })
            }
        </div>
    )
}
export default TodoList;