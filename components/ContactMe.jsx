import React from "react";

const ContactMe = () => {
  return (
    <section id="contact" data-aos="zoom-in-down" className="lg:px-32">
      <h1 className="text-center text-4xl lg:mx-24 md:text-5xl font-bold mb-6">
        Contact Me 📥
      </h1>
      <form
        action="https://formsubmit.co/contact@vivekkj.in"
        method="post"
        className=" flex flex-col px-8 md:px-32"
      >
        <input
          name="Name"
          type="text"
          className="rounded-xl my-3 text-white p-4 bg-transparent border-primary-fg border-2"
          placeholder="Name"
        />
        <input
          name="Email"
          type="email"
          className="rounded-xl my-6 text-white p-4 bg-transparent border-primary-fg border-2"
          placeholder="Email"
          required
        />
        <textarea
          name="Message"
          className="rounded-xl text-white p-4 bg-transparent border-primary-fg border-2"
          required
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          className="p-5 my-10 ml-auto text-primary-bg bg-primary-fg md:w-60 w-36 h-30 rounded-md font-extrabold cursor-pointer"
          value="Send 📨"
        />
      </form>
    </section>
  );
};

export default ContactMe;
