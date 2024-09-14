import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import footImg from "../assets/Image/home decor/7.png";
import footIcon from "../assets/Image/404/ql6mtnaq.png";

const Footer = () => {
  return (
    <div>
      <footer >
        <div className="footer bg-[#dbbd8e] text-base-content rounded">
          <div className=" p-10 pl-16">
            <img src={footIcon} alt="" className="max-h-20 rounded-full shadow-xl" />
            <h2 className="text-3xl text-slate-800 font-bold my-5">Craft Emporium</h2>
            <p className="text-slate-800 mb-5">Always ready to be your friends. Come and contact with us and share your memorable moments!</p>
            <nav>
              <div className="grid grid-flow-col gap-4 text-3xl text-stone-950">
                <a href="https://www.facebook.com/sabiha.tabassum.792?mibextid=ZbWKwL" target="blank" className="link link-hover"><FaFacebook></FaFacebook></a>
                <a href="https://www.instagram.com/subbha_ki_saba?igshid=NGVhN2U2NjQ0Yg==" target="blank" className="link link-hover"><FaInstagram></FaInstagram></a>
                <a href="https://www.linkedin.com/in/sabiha-tabassum-saba-b0a89620b" target="blank" className="link link-hover"><FaLinkedin></FaLinkedin></a>
              </div>
            </nav>
            <h2 className="text-3xl text-slate-800 font-bold my-5">Get In Touch</h2>
            <nav className="grid grid-flow-row text-slate-800">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <tbody>
                    {/* row 1 */}
                    <tr >
                      <th><FaPhoneAlt></FaPhoneAlt> </th>
                      <td><a className="link link-hover">+91 8100 358947</a></td>
                    </tr>
                    {/* row 2 */}
                    <tr className="">
                      <th><FaWhatsapp></FaWhatsapp> </th>
                      <td><a className="link link-hover">+88 01618 225325</a></td>
                    </tr>
                    {/* row 3 */}
                    <tr>
                      <th> <IoMdMail></IoMdMail></th>
                      <td><a className="link link-hover">sabihatabassum0511@gmail.com.</a></td>
                    </tr>
                    {/* row 4 */}
                    <tr>
                      <th><FaLocationDot></FaLocationDot> </th>
                      <td> <a className="link link-hover">Khulna, Bangladesh</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>


            </nav>
          </div>

          <div>
            <div className="hero min-h-screen pt-5">
              <div className="hero-content flex-col ">
                <div className="text-center ">
                  <h1 className="text-5xl  text-slate-800 font-thin font-mono mb-2">Connect With Us!</h1>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form className="card-body">
                    <div className="form-control">
                      <input type="text" name="name" placeholder="Your Name" className="input input-bordered " required />
                    </div>
                    <div className="form-control">
                      <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <textarea type="text" name="massage" placeholder="Massage" className=" textarea textarea-bordered textarea-md w-full max-w-xs" id=""></textarea>
                    </div>
                    <div className="form-control w-2/4 mt-6">
                      <button className="btn btn-outline bg-slate-100 hover: text-slate-800 rounded-3xl">Send Massage</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="relative bg-[#dbbd8e] py-2">
                <img src={footImg} alt="Footer Image" className="absolute inset-0 w-full h-full object-cover bg-opacity-40" />
                <div className="relative flex flex-col items-center justify-center py-2">
                    <p className="text-slate-100">Copyright © 2024 - All rights reserved by Jute And Wood Craft</p>
                </div>
            </div>
      </footer>

    </div>
  );
};

export default Footer;