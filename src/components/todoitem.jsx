const TodoItem = (props) => {
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    const handledel = (removeid) => {
        var temparr = activityArr.filter((item) => {
            if (item.id === removeid) {
                return false
            }
            else {
                return true
            }
        })
        setActivityArr(temparr);
    }

    return (
        <div className="flex justify-between my-2">
            <p>{props.index + 1}.{props.activity}</p>
            <button className="text-red-500 cursor-pointer" onClick={() => { handledel(props.id) }}><i class="fa-solid fa-trash-can"></i></button>
        </div>
    )
}
export default TodoItem;