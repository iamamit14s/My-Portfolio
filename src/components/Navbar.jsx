import { FaGithub, FaLinkedin } from "react-icons/fa";



const Navbar = () => {
  return (
    <>
      <nav className=" mb-15 flex items-center justify-between py-4">
        <div className="text-3xl font-bold flex flex-shrink-0 items-center">
          AS
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-xl">
         {/* <a href="#"><FaInstagram /></a>  */}
         <a href="https://github.com/iamamit14s"> <FaGithub size={30} /></a> 
         <a href="www.linkedin.com/in/amit-kumar-sinha-a26b4ab0"> <FaLinkedin size={30}/></a> 
         
         
          
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
