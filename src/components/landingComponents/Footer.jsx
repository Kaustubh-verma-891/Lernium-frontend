import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/logoLight.svg";

const socialLinks = [
  { icon: <FaInstagram className="text-xl hover:text-[#FDF8EE]" />, url: "#" },
  { icon: <FaGithub className="text-xl hover:text-[#FDF8EE]" />, url: "#" },
  { icon: <FaXTwitter className="text-xl hover:text-[#FDF8EE]" />, url: "#" },
  { icon: <FaFacebookSquare className="text-xl hover:text-[#FDF8EE]" />, url: "#" },
];

const footerLinks = [
  {
    heading: "LEARNIUM",
    links: ["About", "Blog", "Careers", "Advertise"],
  },
  {
    heading: "Support",
    links: ["Contact", "Report an Issue"],
  },
  {
    heading: "Policy",
    links: ["Terms and Conditions", "Privacy", "Security"],
  },
];

function SocialIcons() {
  return (
    <div className="flex space-x-5 mt-4 justify-center md:justify-start">
      {socialLinks.map(({ icon, url }, index) => (
        <a
          key={index}
          href={url}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4D2C5E] hover:bg-[#FF7426] transition-all duration-300 shadow-md hover:scale-110 text-[#FDF8EE]"
        >
          {icon}
        </a>
      ))}
    </div>
  );
}

function FooterLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 text-center md:text-left">
      {footerLinks.map(({ heading, links }, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold text-[#FDF8EE] mb-3">{heading}</h3>
          <ul className="space-y-2">
            {links.map((link, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="text-[#FDF8EE] hover:text-[#FF7426] transition-colors duration-200 block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-[#4D2C5E] text-[#FDF8EE] py-8 w-screen">
      <div className="container mx-auto px-4 lg:px-12 flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0">
        <div className="text-center md:text-left">
          <Link to="/">
            <img src={logo} alt="LearnUI Logo" className="w-32 md:w-40 mb-4 mx-auto md:mx-0" />
          </Link>
          <SocialIcons />
        </div>
        <FooterLinks />
      </div>
      <div className="border-t border-[#606060] mt-10 pt-5 text-center text-sm text-[#606060]">
        &copy; 2024 Learnium. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
