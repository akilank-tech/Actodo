import { useLocation } from "react-router-dom";
import Header from '../components/header'
import Card from '../components/card'
import TodoContainer from '../components/todocontainer'

const Landing = () => {
    const data = useLocation()
    return (
        
        <div className='bg-black p-16'>
      <div className='bg-[#EFEFEF] p-10 border rounded-md'>
        <Header name={data.state.user} />
        <div className="flex justify-between my-5 flex-wrap gap-10">
          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"December"} subtitle={"14:25:09"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
        <TodoContainer/>
      </div>
    </div>
    )
}
export default Landing;