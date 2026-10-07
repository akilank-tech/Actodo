const Card = (props) => {
    return (
        <div style={{ backgroundColor:props.bgcolor }} className="px-10 py-5 border-0 rounded-md text-center flex-grow">
            <h1 className="text-3xl font-medium">{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}
export default Card;