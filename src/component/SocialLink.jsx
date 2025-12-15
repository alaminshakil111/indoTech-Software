import { FaFacebookF, FaTwitter, FaWhatsapp, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// import from local
import bgShape from "../assets/images/bgsec.png";

const SocialLink = () => {
  const socials = [
    {   
        icon: <FaFacebookF className="text-[#3B5998] " />,
        color: "bg-[#3b599899]",
        link: "https://www.facebook.com/attrabit.net"
    },
    // { icon: <FaTwitter className="text-[#55ACEE] " />, color: "bg-[#55acee99]" },
    
    // { icon: <FaWhatsapp className="text-[#3FC351] " />, 
    //     color: "bg-[#3fc35199]",
    //     link: "https://wa.me/8801705431711",
    // },

    // { icon: <FaYoutube className="text-[#b00] " />, color: "bg-[#bb000099]" },
    // { icon: <FaLinkedinIn className="text-[#007bb5] " />, color: "bg-[#007bb599]" },

    { 
        icon: <FaLinkedinIn className="text-[#007bb5] " />, 
        color: "bg-[#007bb599]",
        link: "https://www.linkedin.com/company/attrabit-ict-solution"
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-left gap-6">
        {socials.map((s, i) => (
        <ul>
            <li>
                <NavLink to={s.link} key={i} target="_blank" className="relative group">
                    <div
                        style={{ "--afterColor": s.color.replace("bg-[", "").replace("]", "") }}
                        className="relative flex justify-center items-center after:left-[50%] after:top-[50%] after:transform after:-translate-[50%] after:h-[35px] after:w-[35px] md:after:h-[35px] md:after:w-[35px] after:content-[''] after:absolute after:inset-0 after:rounded-[5px] lg:after:rounded-[7px] after:bg-[var(--afterColor)] after:rotate-20 group-hover:after:rotate-0 after:transition-all after:duration-300 ">
                        <div className="relative z-[10] bg-white border border-gray-200 rounded-[5px] md:rounded-[7px] h-[30px] w-[30px] md:h-[30px] md:w-[30px] flex justify-center items-center 
                        text-[17px] shadow">
                            <span className="text-current">{s.icon}</span>
                        </div>
                    </div>
                </NavLink>

            </li>
        </ul>
        ))}
    </div>
  );
};

export default SocialLink;
