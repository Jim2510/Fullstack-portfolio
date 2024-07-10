import { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const [alert, setAlert] = useState({ message: "", type: "" });
  const [showAlert, setShowAlert] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_5r2ot1w", "template_50wvn2f", form.current, {
        publicKey: "8qWNyzPGwaYZ8FFwQ",
      })
      .then(
        () => {
          showAlertMessage("SUCCESS! Your message has been sent.", "success");
        },
        (error) => {
          showAlertMessage(`FAILED... ${error.text}`, "error");
        }
      );
  };

  const showAlertMessage = (message, type) => {
    setAlert({ message, type });
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const handleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {showAlert && (
        <div
          className={`fixed top-0 left-0 w-full p-4 text-center z-[200] transition-opacity duration-500 ${
            alert.type === "success" ? "bg-green-500" : "bg-red-500"
          } ${showAlert ? "opacity-100" : "opacity-0"}`}
        >
          <p className="text-white text-lg">{alert.message}</p>
        </div>
      )}
      <div
        className="w-full flex justify-center items-center relative z-10 px-10 sm:px-0"
        id="contact"
      >
        <div className="w-full sm:w-[40%] text-white flex justify-center items-center flex-col py-32 gap-8">
          <div className="flex justify-center items-center w-full flex-wrap mb-10 flex-col gap-4">
            <h3 className="w-fit mr-2 text-2xl sm:text-xl font-bold text-center">
              <span className="text-xl font-tech text-main-red">04.</span>{" "}
              What&apos;s Next?
            </h3>
            <h2 className="text-4xl sm:text-[50px] font-bold text-center sm:py-0 py-4">
              Get In Touch
            </h2>
            <p className="text-justify sm:text-center text-md text-gray-400">
              I&apos;m currently seeking new job opportunities, whether as a
              private freelancer, collaborating on open-source projects, or
              joining leading companies in the industry. My inbox is always
              open, so feel free to reach out with any inquiries or just to say
              hello, I’ll do my best to respond promptly!
            </p>
            <div className="relative mt-10">
              <button
                onClick={handleForm}
                className="hover:bottom-2 bg-custom-green border-[2px] rounded-md border-main-red px-4 py-2 font-tech text-emerald-400"
              >
                Say Hello!
              </button>
            </div>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full backdrop-blur-xl flex z-[200] justify-center items-center ${
            isOpen
              ? "animate__animated animate__fadeIn"
              : "animate__animated animate__fadeOut"
          } ${isOpen ? "flex" : "hidden"}`}
        >
          <div className="relative w-full sm:w-[50%] h-[55%] bg-transparent sm:bg-custom-green/70 sm:p-0">
            <div
              className="absolute sm:top-2 sm:right-2 -top-[11.5rem] right-0 cursor-pointer"
              onClick={handleForm}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fillRule="currentColor"
                className="bi bi-x fill-slate-300 sm:w-[35px] sm:h-[35px] w-[40px] h-[40px]"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
            <form
              action=""
              ref={form}
              onSubmit={sendEmail}
              className="flex justify-center items-center flex-col p-3"
            >
              <label className="p-2 text-lg text-white" htmlFor="name">
                Your Name
              </label>
              <input
                className="px-1 font-bold w-full sm:w-[350px] rounded-md h-[40px] text-md"
                type="text"
                name="user_name"
              />
              <label className="p-2 text-lg text-white" htmlFor="email">
                Your Email
              </label>
              <input
                className="px-1 font-bold w-full sm:w-[350px] rounded-md h-[40px] text-md"
                type="email"
                name="user_email"
              />
              <label className="p-2 text-lg text-white" htmlFor="message">
                Text Me
              </label>
              <textarea
                className="pt-1 rounded-md px-2 font-bold w-full sm:w-[500px] h-[100px]"
                name="message"
                id=""
              ></textarea>
              <input
                className="transition-all ease-in-out hover:bg-main-red hover:text-black cursor-pointer mt-3 hover:bottom-2 bg-custom-green border-[2px] rounded-md border-main-red px-4 py-1 font-tech text-emerald-400"
                type="submit"
                value="Send"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
