import { BiLeftArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import errorImg from "../assets/Image/404/errorimg.jpg";



const Error = () => {
    return (
        <div>
            
           <div className=" flex justify-center items-center text-center text-2xl font-serif mt-10 underline relative">
                <BiLeftArrowAlt></BiLeftArrowAlt>
                <Link to="/">Back To Home</Link> 
            </div>
            <img className="max-h-[100%] w-full" src={errorImg} alt="" />            
        </div>
    );
};

export default Error;