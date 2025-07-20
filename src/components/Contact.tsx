import ContactForm from "./ContactForm.tsx";
import ContactOther from "./ContactOther.tsx";

const Contact = () => {
  return (
    <div className={'2xl:px-[18rem] xl:px-[10-rem] lg:px-[6rem] px-[1.5rem] py-[6rem] h-lvh'}>
      <h1 className={'mb-[4rem] text-[#333] text-center sm:text-[4rem] text-[3rem] ' +
        'underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
        Contact
      </h1>

      <div className={'flex lg:flex-row flex-col-reverse mb-6 justify-between'}>
        <ContactForm/>
        <div className={'sm:mb-[0rem] mb-[0.5rem]'}/>
        <ContactOther/>
      </div>

      <div className={'font-clash-display text-[#333] text-center tracking-[1px] font-normal pt-15'}>
        {(new Date()).getFullYear()} &#169; Matija Lovreković
      </div>
    </div>
  );
};

export default Contact;