import Logo from "../../assets/images/logo.svg";
import Facebook from "../../assets/images/icon-facebook.svg";
import Instagram from "../../assets/images/icon-instagram.svg";
import Twitter from "../../assets/images/icon-twitter.svg";

const Socials = () => {
  return (
    <div className="flex justify-center gap-6">
      <img className="h-[23px]" src={Facebook} alt="facebook" />
      <img className="h-[23px]" src={Instagram} alt="insta" />
      <img className="h-[23px]" src={Twitter} alt="twitter" />
    </div>
  );
};

const Footer = () => {
  return (
    <section className="mt-[50px] w-full bg-slate-100 pb-5">
      <div className="flex md:flex-row flex-col  text-grayishBlue gap-5 md:max-w-4xl justify-center md:justify-between mx-auto">
        <div className="flex justify-center my-5">
          <img className="w-[75px] h-[75px]" alt="logo" src={Logo} />
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-center md:text-left">FAQs</p>
          <p className="text-center md:text-left">Contact Us</p>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-center md:text-left">Privact Policy</p>
          <p className="text-center md:text-left">Press Kit</p>
        </div>
        <div className="flex flex-col gap-5 justify-center">
          <p className="text-center md:text-left">Install Guide</p>
          <p className="md:display-none">&nbsp;</p>
        </div>
        <div className="flex justify-center items-center">
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Footer;
