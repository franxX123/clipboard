import DownloadButton from "../../components/Button";

const Devices = () => {
  return (
    <section>
      <h3 className="font-semibold md:text-5xl text-4xl md:max-w-[700px] max-w-[400px] text-darkGrayishBlue mx-auto text-center mt-[150px]">
        Clipboard for iOS and MacOS
      </h3>
      <p className="text-strongCyan text-xl mt-10 text-center leading-9 md:max-w-[850px] max-w-[450px] mx-auto">
        {`Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start adding to your clipboard.`}
      </p>
      <div className="md:max-w-[500px] flex flex-col md:flex-row gap-5 mt-10 justify-center mx-auto">
        <DownloadButton
          backgroundColor="bg-strongCyan"
          text="Download for iOS"
        />
        <DownloadButton
          backgroundColor="bg-lightBlue"
          text="Download for Mac"
        />
      </div>
    </section>
  );
};

export default Devices;
