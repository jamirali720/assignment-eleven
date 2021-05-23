import React from "react";
import FooterCol from "./FooterCol";
import { FaFacebook } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  const company = [
    { name: "Our story", link: "/ourStory" },
    { name: "About", link: "/about" },
    { name: "Affiliates", link: "/affiliates" },
    { name: "Careers", link: "/careers" },
    { name: "News", link: "/news" },
    { name: "Sitemap", link: "/sitemap" },
  ];
  const courses = [
    { name: "HTML/Css", link: "/html" },
    { name: "Javascript", link: "/javascript" },
    { name: "Bootstrap", link: "/bootstrap" },
    { name: "Python", link: "/python" },
    { name: "React.js", link: "/react" },
    { name: "Node.js", link: "/node" },
    { name: "Mongodb", link: "/mongodb" },
  ];
  const community = [
    { name: "Forums", link: "/forums" },
    { name: "Teams", link: "/teams" },
    { name: "Chapters", link: "/chapters" },
    { name: "Events", link: "/events" },
    { name: "Help Center", link: "/help" },
    { name: "Supports", link: "/supports" },
  ];
  const address = [{ name: "Comilla, Bangladesh", link: "/comilla" }];
  return (
    <footer className=" py-3 bg-dark">
      <div className="container mx-4 row">
        <FooterCol key={1} menuTitle="Company" menuItems={company} />

        <FooterCol key={2} menuTitle="Courses" menuItems={courses} />

        <FooterCol key={3} menuTitle="Community" menuItems={community} />

        <FooterCol key={4} menuTitle="Address" menuItems={address}>
          <div>
            <h3 className="text-warning text-center"> Follow Us </h3>
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <a className="fs-3 text-primary" href="https://www.facebook.com/jamir.ali.73">
                  <FaFacebook />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a className="fs-3 text-danger" href="https://www.youtube.com/channel/UC5NCSBf2DjZvpvKM560KaBQ">
                  <ImYoutube />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a className="fs-3 text-success" href="https://github.com/jamirali720">
                  <AiFillGithub />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a className="fs-3 text-primary" href="https://www.linkedin.com/in/jamir-ali-36755b1b7/">
                  <FaLinkedin />
                </a>
              </li>
              <li className="list-inline-item mx-2">
                <a className="fs-3 text-primary" href="https://twitter.com/home?lang=en">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className="text-primary text-center">
            <h3>Call Now </h3>
            <p>+8801814245427</p>
          </div>
        </FooterCol>

        <div className="text-center">
          <small className="text-secondary">
            copyright {new Date().getFullYear()}
            All Rights Reserved
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
