import { useNavigate } from "react-router-dom"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Quote } from "../components/Quote"


const Signup = () => {
    const navigate = useNavigate();
  return (
    <div className="w-[100%] h-[100%] flex  flex-col md:flex-row">
    <div className="w-[100%] md:w-[50%] flex justify-center items-center flex-col p-8">
        <div className="border-gray-300 border w-[80%] h-[98%] md:h-[30%] lg:h-[67%] flex justify-center items-center flex-col p-[1rem] rounded-sm md:rounded-md">
        <div className="text-md md:text-2xl lg:text-3xl bold font-bold">Create an account</div>
        <div className="flex justify-center items-center w-full">
            <div>Already have an account?</div>
            <div className="underline cursor-pointer" onClick={() => navigate("/signin")}>login</div>
        </div>
      <Input type={"text"} label={"Username"} placeholder={"Enter your name"}/>
      <Input type={"email"} label={"Email"} placeholder={"example@gmail.com"}/>
      <Input type={"password"} label={"Password"} placeholder={"ggterqbw5346"}/>
    <Button innertext="Signup" onClick={() => navigate("/dashboard")} style="bg-black text-white p-[1rem] md:p-[0.5rem] w-[100%] text-center rounded-md m-2 flex justify-center items-center"/>
    
        </div>
    </div>
    <Quote/>
</div>
  )
}

export default Signup