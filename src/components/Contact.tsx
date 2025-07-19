import ContactForm from "./ContactForm.tsx";
import ContactOther from "./ContactOther.tsx";

const Contact = () => {
  return (
    <div className={'px-[20rem] py-[6rem] h-lvh'}>
      <h1 className={'mb-[4rem] text-[#333] text-center text-[4rem] ' +
        'underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
        Contact
      </h1>

      <div className={'flex flex-row flex-wrap mb-6 justify-between'}>
        <ContactForm/>
        <ContactOther/>
      </div>

      <div className={'font-clash-display text-[#333] text-center tracking-[1px] font-normal pt-15'}>
        {(new Date()).getFullYear()} &#169; Matija Lovreković
      </div>
    </div>
  );
};

export default Contact;