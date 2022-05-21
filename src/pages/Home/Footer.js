import { RiInstagramFill } from "react-icons/ri";
import {  TiSocialFacebook, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";
import { NavLink } from "react-router-dom";
export const Footer = () => {
  return (
    <footer>
      <div class="footer p-10 bg-neutral  text-white">
        <div className="mx-auto">
          <p className="text-5xl">Estro Gadget</p>
          <div className="text-center">
            <p>
              Rupnagar Residencial, Mirpur-2, Dhaka
            </p>
            <p>
              +(880) 1874-545580
            </p>
            <p>
              saikot.cse.bubt@gmail.com
            </p>
          </div>
          <div className="flex">
            <TiSocialFacebook className="text-4xl mr-8 hover:text-secondary" style={{ cursor: "pointer" }} />
            <RiInstagramFill className="text-4xl mr-2 hover:text-error" style={{ cursor: "pointer" }} />
            <TiSocialTwitter className="text-4xl ml-4 hover:text-info" style={{ cursor: "pointer" }} />
            <TiSocialYoutube className="text-4xl ml-8 hover:text-red-700" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="mx-auto">
          <span class="footer-title">Services</span>
          <NavLink to="" class="link link-hover">
            Branding
          </NavLink>
          <NavLink to="" class="link link-hover">
            Design
          </NavLink>
          <NavLink to="" class="link link-hover">
            Marketing
          </NavLink>
          <NavLink to="" class="link link-hover">
            Advertisement
          </NavLink>
        </div>
        <div className="mx-auto">
          <span class="footer-title">Company</span>
          <NavLink to="" class="link link-hover">
            Home
          </NavLink>
          <NavLink to="" class="link link-hover">
            About us
          </NavLink>
          <NavLink to="" class="link link-hover">
            Contact
          </NavLink>
          <NavLink to="" class="link link-hover">
            Blogs
          </NavLink>
        </div>
        <div className="mx-auto">
          <span class="footer-title">Legal</span>
          <NavLink to="" class="link link-hover">
            Terms of use
          </NavLink>
          <NavLink to="" class="link link-hover">
            Privacy policy
          </NavLink>
          <NavLink to="" class="link link-hover">
            Cookie policy
          </NavLink>
        </div>
      </div>
      <div className="row text-center text-white bg-neutral pb-5">
        <p>
          &copy; {new Date().getFullYear()} <span className="text-warning">Estro Gadget</span> All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};
