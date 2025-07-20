import {BiEnvelopeOpen} from "react-icons/bi";

const ContactForm = () => {
  return (
    <div className="lg:w-156 w-full p-6 bg-white rounded-sm font-archivo text-[#333]">
      <h2 className="sm:text-[2rem] text-[1.75rem] font-semibold mb-6 flex items-center">
        <BiEnvelopeOpen size={35} className={'mr-4'} />
        Reach out to me!
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input type="text" id="name"
                 className="w-full py-3 px-5 border-2 border-solid border-[#555] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#777]"
                 placeholder="Your name" required/>
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input type="email" id="email"
                 className="w-full py-3 px-5 border-2 border-solid border-[#555] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#777]"
                 placeholder="you@example.com" required/>
        </div>
        <div className="mb-8">
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" rows={4}
                    className="w-full py-4 px-5 border-2 border-solid border-[#555] rounded-sm focus:outline-none focus:ring-2 focus:ring-[#777]"
                    placeholder="Write your message here... (This isn't implemented at the moment, connect with me instead.)" required></textarea>
        </div>
        <button type="submit" disabled
                className="w-full text-[1.1rem] font-semibold bg-[#386641] text-white py-2 px-4 rounded-sm">Send
          Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;