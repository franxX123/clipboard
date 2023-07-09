import Blacklist from "../../assets/images/icon-blacklist.svg";
import Text from "../../assets/images/icon-text.svg";
import Preview from "../../assets/images/icon-preview.svg";

const Supercharge = () => {
  return (
    <section>
      <div className="mx-auto md:text-5xl text-center text-4xl max-w-6xl text-darkGrayishBlue font-semibold mt-[100px]">
        Supercharge your workflow
      </div>

      <p className="mx-auto leading-9 text-grayishBlue max-w-[350px] md:max-w-[500px] text-xl text-center mt-8">
        {`We've got the tools to boost your productivity.`}
      </p>

      <div className="flex md:flex-row flex-col gap-[70px] md:gap-[50px] mt-[5rem] justify-center">
        <div className="flex flex-col gap-5">
          <div className="mx-auto">
            <img className="w-[40px]" src={Blacklist} alt="Blacklist" />
          </div>
          <h3 className="text-darkGrayishBlue text-2xl text-center font-semibold mt-5">
            Create Blacklists
          </h3>
          <p className="text-grayishBlue text-center max-w-[400px] md:max-w-[325px] mx-auto mt-1">
            Easily search your snippets by content, category, web address,
            application, and more.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="mx-auto">
            <img className="w-[40px]" src={Text} alt="Blacklist" />
          </div>

          <h3 className="text-darkGrayishBlue text-2xl text-center font-semibold mt-5">
            Plain Text Snippets
          </h3>
          <p className="text-grayishBlue text-center md:max-w-[325px] max-w-[400px] mx-auto mt-1">
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="mx-auto">
            <img className="w-[53px]" src={Preview} alt="Blacklist" />
          </div>

          <h3 className="text-darkGrayishBlue text-2xl text-center font-semibold mt-5">
            Sneak Preview
          </h3>
          <p className="text-grayishBlue text-center max-w-[400px] md:max-w-[325px] mx-auto mt-1">
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Supercharge;
