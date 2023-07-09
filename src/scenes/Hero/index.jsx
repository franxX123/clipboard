import Logo from "../../assets/images/logo.svg";
import DownloadButton from "../../components/Button";

const Hero = () => {
  return (
    <section>
      <div className="flex justify-center">
        <img className="w-[125px] h-[125px] mt-[100px]" alt="logo" src={Logo} />
      </div>
      <div className="flex justify-center">
        <h2 className="md:max-w-[800px] md:text-5xl max-w-[350px] text-darkGrayishBlue text-4xl font-semibold text-center mt-[75px]">
          A history of everything you copy
        </h2>
      </div>

      <div className="flex justify-center">
        <p className="md:max-w-[750px] max-w-[350px] text-grayishBlue text-2xl mt-[30px] text-center">
          Clipboard allows you to track and organize everthing you copy.
          Instantly acces your clipboard on all your devices.
        </p>
      </div>

      <div className="md:flex md:justify-center mt-10">
        <div className="flex md:justify-center md:max-w-[600px] md:flex-row sm:flex-col sm:gap-5 ">
          <DownloadButton
            backgroundColor="bg-strongCyan"
            text="Download for iOS"
          />
          <DownloadButton
            backgroundColor="bg-lightBlue"
            text="Download for Mac"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
