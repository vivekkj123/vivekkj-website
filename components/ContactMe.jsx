import React from "react";

const ContactMe = () => {
  return (
    <section 
      id="contact" 
      data-aos="zoom-in-down" 
      className="max-w-4xl mx-auto my-20 px-4"
    >
      <div className="backdrop-blur-xl bg-white/5 rounded-3xl border border-white/10 p-8 md:p-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent mb-12 text-center">
          Let&apos;s Connect
        </h2>
        
        <form
          action="https://formsubmit.co/contact@vivekkj.in"
          method="post"
          className="space-y-6 max-w-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="Name"
              type="text"
              className="w-full px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 
                focus:border-primary-fg outline-none transition duration-300 placeholder:text-gray-500"
              placeholder="Your Name"
              required
            />
            <input
              name="Email"
              type="email"
              className="w-full px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 
                focus:border-primary-fg outline-none transition duration-300 placeholder:text-gray-500"
              placeholder="Your Email"
              required
            />
          </div>
          
          <textarea
            name="Message"
            rows="6"
            className="w-full px-6 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 
              focus:border-primary-fg outline-none transition duration-300 placeholder:text-gray-500"
            placeholder="Your Message"
            required
          ></textarea>

          <div className="text-right">
            <button
              type="submit"
              className="px-8 py-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 
                hover:bg-primary-fg hover:text-primary-bg font-medium transition duration-300
                inline-flex items-center gap-2"
            >
              Send Message
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
