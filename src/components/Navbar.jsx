import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex items-center justify-between py-6">
        <div className="text-3xl font-bold flex flex-shrink-0 items-center">
          AS
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-xl">
         <a href="#"><FaInstagram /></a> 
         <a href="#"> <FaGithub /></a> 
         <a href="#"> <FaLinkedin /></a> 
         <a href="#"> <FaSquareXTwitter /></a> 
         
          
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
