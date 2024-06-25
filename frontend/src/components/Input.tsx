interface Inputprops{
    type:string;label:string; placeholder:string;
}
export const Input = ({type,label, placeholder}:Inputprops ) => {
    return <div className="w-[100%]  text-black flex flex-col m-1 ">
     <label htmlFor={label} className="font-bold">{label}</label>
     <input type={type} placeholder={placeholder} id={label}  name={label} className="input p-[1rem] md:p-[0.5rem] border border-gray-200 rounded-sm md:rounded-md" />
    </div>
}