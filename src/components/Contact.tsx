const Contact = () => {
  return (
    <div className={'px-[14rem] py-[6rem]'}>
      <h1 className={'mb-[4rem] text-[#333] text-center text-[4rem] ' +
        'underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
        Contact
      </h1>

      <div className="max-w-156 mx-auto p-6 bg-white rounded-sm font-archivo text-[#333]">
        <h2 className="text-[2rem] font-semibold mb-6">Reach out to me!</h2>
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
                      placeholder="Write your message here..." required></textarea>
          </div>
          <button type="submit"
                  className="w-full text-[1.1rem] font-semibold bg-[#386641] text-white py-2 px-4 rounded-sm">Send
            Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;