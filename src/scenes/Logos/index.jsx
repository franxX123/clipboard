import GoogleLogo from "../../assets/images/logo-google.png";
import IBMLLogo from "../../assets/images/logo-ibm.png";
import MicrosoftLogo from "../../assets/images/logo-microsoft.png";
import HPLogo from "../../assets/images/logo-hp.png";
import VectorGraphicsLogo from "../../assets/images/logo-vector-graphics.png";

const Logos = () => {
  return (
    <section>
      <div className=" flex md:flex-row flex-col gap-[70px] mt-[200px] justify-center">
        <img className="mx-auto h-[50px]" src={GoogleLogo} alt="Google" />
        <img className="mx-auto h-[50px]" src={IBMLLogo} alt="IBM" />
        <img
          className="mx-auto h-[30px] self-center"
          src={MicrosoftLogo}
          alt="Microsoft"
        />
        <img className="mx-auto h-[50px] self-center" src={HPLogo} alt="HP" />
        <img
          className="mx-auto h-[30px] self-center"
          src={VectorGraphicsLogo}
          alt="Vector Graphics"
        />
      </div>
    </section>
  );
};

export default Logos;
