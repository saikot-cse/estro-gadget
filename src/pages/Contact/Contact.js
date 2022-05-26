import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
export const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact Us | Estro Gadget</title>
      </Helmet>
      <div className="hero h-[40vh] bg-about bg-fixed mt-16 opacity-90">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-7xl font-bold text-primary">Contact Us</h1>
          </div>
        </div>
      </div>

      <section className="w-full max-w-6xl text-white px-20 my-16 py-4 mx-auto bg-gray-400 rounded-md shadow-md ">
        <h2 className="text-4xl font-semibold text-center ">Get in touch</h2>
        <p className="mt-3 text-center text-white ">Creativity is at the heart of every dream. Every idea, every groundbreaking leap that changes our world starts with the vision of talented creators. At Estro Gadget, we give these creators the tools they need to bring their ideas to life.</p>

        <div className="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
          <Link to="#" className="flex flex-col items-center px-4 py-3  transition-colors duration-200 transform rounded-md text-black ">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>

            <span className="mt-2">Rupnagar Residencial, Mirpur-2, Dhaka</span>
          </Link>

          <Link to="#" className="flex flex-col items-center px-4 py-3 transition-colors duration-200 transform rounded-md text-black">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>

            <span className="mt-2">+(880) 1874-545580</span>
          </Link>

          <Link to="#" className="flex flex-col items-center px-4 py-3 transition-colors duration-200 transform rounded-md text-black">
            <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>

            <span className="mt-2">saikot.cse.bubt@gmail.com</span>
          </Link>
        </div>

        <div className="mt-6 ">
          <div className="items-center -mx-2 md:flex">
            <div className="w-full mx-2">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Name</label>

              <input className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" />
            </div>

            <div className="w-full mx-2 mt-4 md:mt-0">
              <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">E-mail</label>

              <input className="block w-full px-4 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" />
            </div>
          </div>

          <div className="w-full mt-4">
            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200">Message</label>

            <textarea className="block w-full h-40 px-4 py-2 text-black bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"></textarea>
          </div>

          <div className="flex justify-center mt-6">
            <button className="px-4 py-2 text-white transition-colors duration-200 transform bg-primary rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Send Message</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
