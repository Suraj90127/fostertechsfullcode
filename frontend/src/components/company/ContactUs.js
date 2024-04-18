import React, { useEffect } from "react";
import contactimg from "../../assets/image/Contact img.jpg";
import "./contact.css";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <div>
          <div>
            <div className=" bottom-0 w-full mt-20 bg-no-repeat careers">
              <img
                className="lg:h-96 sm:h-[15rem] w-full opacity-100"
                src={contactimg}
                alt=""
              />
            </div>
            <div className="absolute lg:top-52 lg:left-32 sm:top-40 sm:left-10 text-black text-2xl tracking-wide">
              <p className="mt-10 text-4xl font-bold ">Contact Details</p>
              {/* <hr className="mt-10 " /> */}
            </div>
          </div>
        </div>

        {/* contact form  */}

        <div className="contact-section">
          <section className="lg:pt-10 lg:pb-20 sm:pt-0 sm:pb-0 contactForm w-[100%]">
            <div className="container1 sm:w-full">
              <div className="contactinfo">
                <div className="my-10">
                  <h2>Contact Us</h2>
                  <ul className="info">
                    <li>
                      <span>
                        <img src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png" />
                      </span>
                      <span>
                        1, Brijpuri Extension,
                        <br />
                        Parwana Road,
                        <br />
                        New Delhi - 110051
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg" />
                      </span>
                      <span>
                        info@fostertechs.com, <br />
                        fostertechs@gmail.com
                      </span>
                    </li>
                    <li>
                      <span>
                        <img src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png" />
                      </span>
                      <span>
                        +91 98104 54656, <br />
                        +99992 68782
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="contactusform ">
                <h2>Get In Touch With Us</h2>
                <div className="formBox pt-32">
                  <div className="inputBox w50">
                    <input type="text" name required />
                    <span>First Name</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name required />
                    <span>Last Name</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="text" name required />
                    <span>Email Address</span>
                  </div>
                  <div className="inputBox w100">
                    <textarea name required defaultValue={""} />
                    <span>Please enter a message</span>
                  </div>
                  <div className="inputBox w50">
                    <input type="submit" defaultValue="Send" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div>
          <div className="w-full bg-white">
            <div className="">
              <div>
                <div className=" lg:mt-20 lg:py-20 shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9757282425244!2d77.37142209350563!3d28.63048953765404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5573efeccff%3A0xb30b6f7c52c36b95!2sFostertechs%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1579032668393!5m2!1sen!2sin"
                    className="w-full h-[30rem]"
                    frameBorder={0}
                    style={{ border: 0, pointerEvents: "none" }}
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
