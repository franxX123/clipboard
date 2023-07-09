import ImageDevices from "../../assets/images/image-devices.png";

const AccessClipboard = () => {
  return (
    <section>
      <div className="text-center mx-auto md:text-5xl text-4xl text-darkGrayishBlue font-semibold mt-[200px]">
        Access Clipboard Anywhere
      </div>
      <div className="flex justify-center">
        <p className="md:max-w-[750px] max-w-[400px] text-center text-strongCyan text-xl leading-9 mt-10 ">
          {
            "Whether you're on the go, or at your computer, you can access all your Clipboard snippets in a few simple clicks."
          }
        </p>
      </div>
      <div className="mt-[6rem] flex justify-center">
        <img src={ImageDevices} alt="phone and a computer" />
      </div>
    </section>
  );
};

export default AccessClipboard;
