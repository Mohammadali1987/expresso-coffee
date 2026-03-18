import React from "react";
import img1 from "../images/more/logo1.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#ECEAE3]">
      <div className="flex gap-5 w-10/12 mx-auto py-15 justify-evenly ">
        <div className="space-y-2">
          <img className="h-15" src={img1} alt="" />
          <h1 className="font-bold text-2xl">Espresso Emporium</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
            Earum unde voluptate inventore mollitia numquam quasi?
          </p>
          <div className="flex gap-3 space-y-2">
            <FaFacebook />
            <FaTwitter />
            <CiInstagram />
            <FaLinkedin />
          </div>
          <h1>Get in Touch</h1>
          <div>
            <div className="flex gap-3">
              <IoIosCall />
              <p>+8801719124465</p>
            </div>
            <div className="flex gap-3">
              <FaEnvelope />

              <p>info@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <IoLocationSharp />
              <p>72, west, mohammadpur</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-2xl py-5">Connect with Us</h1>
          <form className="space-y-3">
            <input
              className="bg-white"
              type="text"
              name=""
              id=""
              placeholder="Name"
            />
            <br />
            <input
              className="bg-white"
              type="email"
              name="email"
              placeholder="Email"
              id=""
            />
            <br />
            <textarea
              rows={3}
              cols={23}
              className="bg-white"
              name="textarea"
              id=""
              placeholder="Message"
            ></textarea>
            <br />
            <input
              type="submit"
              value="Send Message"
              className="btn rounded-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
