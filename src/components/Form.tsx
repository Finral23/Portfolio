import Heading from "./Heading";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_f0myf3l",
        "template_0pu2syj",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          date: new Date().toLocaleString(),
        },
        "2yoVuO9UIq7-P5Hc4"
      );

      setStatus("Message sent successfully! ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("Something went wrong. ❌");
    }
  };
  return (
    <div className="flex justify-center items-center text-light pt-15">
      <div className="md:grid md:grid-cols-[1fr_1.2fr] items-center md:items-start">
        <div>
          <Heading
            title="contact"
            heading="let's talk"
            subtitle="Let's Create Something Great Together"
          />
          <p className="my-5">
            Do you have a project in mind? Whether it’s a sleek business
            website, an engaging e-commerce platform, or a custom web
            application, we’re here to bring your ideas to life.
          </p>
          <p className="mb-10">
            We specialize in high-performance, fully responsive, and
            SEO-optimized websites that stand out. Let’s talk and craft a
            digital experience tailored to your vision.
          </p>
          <p>
            Email:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anomalyx.agency@gmail.com"
              className="link"
            >
              anomalyx.agency@gmail.com
            </a>
          </p>
          <p>🌍 Location: Available worldwide</p>
          💬 Let’s Connect:{" "}
          <a
            className="link"
            href="https://www.linkedin.com/in/vladyslav-svitelskyi-882a322a5/"
          >
            [LinkedIn]
          </a>
          <a className="link" href="https://t.me/akanenai">
            [Telegram]
          </a>
          <a className="link" href="https://www.fiverr.com/v_svitelskyi/buying">
            [Fiverr]
          </a>
        </div>
        <div className="flex justify-center pt-5 md:pt-12 overflow-hidden">
          <div className="w-full max-w-md bg-cube rounded-2xl overflow-hidden">
            <div className="m-10 rounded-2xl shadow-xl shadow-blue-500  ">
              <p className="text-light opacity-80">
                Feel free to contact with us and we will get back to you as soon
                as we can.
              </p>
              <form className="mt-20 space-y-4" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  maxLength={20}
                  className="w-full bg-transparent border-b border-slate-300 text-white p-2 outline-none autofill:bg-transparent autofill:text-white"
                />

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  maxLength={30}
                  className="w-full bg-transparent border-b border-slate-300 text-light p-2 outline-none"
                />
                <input
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your idea"
                  required
                  maxLength={50}
                  className="w-full bg-transparent border-b border-slate-300 text-light p-2 outline-none"
                />
                <button
                  type="submit"
                  className="w-full bg-slate-200 text-blue-500 font-medium py-5 mt-4 hover:bg-slate-300 transition"
                >
                  Send Form
                </button>
              </form>
              {status && <p className="text-center mt-4 text-sm">{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
