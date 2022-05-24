import React from "react";
import Helmet from "react-helmet";
import banner from "../../assets/saikot.png";
export const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio | Estro Gadget</title>
      </Helmet>
      <div class="hero h-[40vh] bg-about bg-fixed mt-16 opacity-90">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-7xl font-bold text-primary">My Portfolio</h1>
          </div>
        </div>
      </div>
      <div className="hero lg:h-[80vh]">
        <div className="hero-content flex-col lg:flex-row">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold">Saifullah Mansur</h1>
            <div>
              <p className="py-6 max-w-3xl">Seeking and retaining job that provides professional challenges while leveraging interpersonal skills, great time management, and problem-solving abilities.</p>
              <a href="https://drive.google.com/file/d/1t123MMDKqpEApFH5AjWMmOVFi2bAHMtc/view?usp=sharing" target="_blank" rel="noreferrer" className="btn btn-primary ">
                Download CV
              </a>
            </div>
          </div>
          <div className="h-[60vh] shrink-0">
            <img src={banner} className="h-full" alt="" />
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Personal Information</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mb-16">
          <input type="text" disabled readOnly value="Address: Mirpur-2, Dhaka" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="LinkedIn: https://www.linkedin.com/in/saifullahmansur" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Phone: +880 1874 545580" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="GitHub: https://github.com/saikot-cse" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Email: saifullah.mansur580@gmail.com" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Portfolio: Comming Soon" class="input input-primary w-full max-w-full" />
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Skills</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 mb-16">
          <input type="text" disabled readOnly value="Expertise" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Comfortable" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Interpersonal Skills" class="input input-primary w-full max-w-full" />
          <textarea class="textarea" value="HTML5, Bootstrap5,Tailwind CSS, Firebase(Authentication),React Router" disabled />
          <textarea class="textarea" value="CSS3, JavaScript(ES6), React JS, Context API, PHP, MySQL, MongoDB" disabled />
          <textarea class="textarea" value="Leadership, Communication, Hardworking" disabled />
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Projects</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mb-16">
          <input type="text" disabled readOnly value="Project Name: Pro Tech Gear" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Project Name: Diligent Developer" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Live Website Link: https://pro-tech-gear.web.app/" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="Live Website Link: https://diligate-developer.web.app/" class="input input-primary w-full max-w-full" />
          <textarea
            class="textarea"
            rows="10"
            value="Overview:
➢ This is an online warehouse of a tech company where the client companies can
store products and see the available products stored in it.
➢ The website is secured using firebase authentication, JWT web token.
➢ Clients can login/signup using email, social login (Google, GitHub)
➢ If valid user, they can see all the available products stored and can store their
desired products and can deliver the products.
➢ In the “My Items” section, the clients can see the products they added.
➢ If the client is not logged in, he/she can’t add, update or delete products.
"
            disabled
          />
          <textarea
            class="textarea"
            rows="10"
            value="Overview:
➢ This is an individual service provider website where the users can login and see
the available courses stored in it.
➢ The website is secured using firebase authentication.
➢ Clients can login/signup using email, social login (Google, GitHub)
➢ If valid user, they can see all the available courses stored and can buy their
desired courses."
            disabled
          />
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Education</h2>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-5 px-20 mb-16">
        <input class="textarea text-center" value="2018 - 2022" disabled />
        <input class="textarea" value="Bachelor of Science: Computer Science & Engineering" disabled />
        <input class="textarea" value="Bangladesh University of Business and Technology" disabled />
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Professional Courses</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mb-16">
          <input class="textarea" value="Complete Web Development Course with Jhankar Mahbub: Programming Hero 2022" disabled />
          <input class="textarea" value="Basic Web Development Course (HTML5, CSS3, Bootstrap5): Bohubrihi online course." disabled />
        </div>
      </div>
      <div>
        <h2 className="text-center text-4xl font-semibold mb-16">Language</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 px-20 mb-16">
          <input type="text" disabled readOnly value="Bangla - Native" class="input input-primary w-full max-w-full" />
          <input type="text" disabled readOnly value="English - Comfortable" class="input input-primary w-full max-w-full" />
        </div>
      </div>
    </div>
  );
};
