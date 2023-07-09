import ComputerImage from "../../assets/images/image-computer.png";

const Snippets = () => {
  return (
    <section>
      <div className="md:text-5xl max-w-6xl mx-auto text-center text-darkGrayishBlue text-4xl font-semibold mt-[150px]">
        Keep track of your snippets
      </div>
      <p className="md:max-w-3xl md:mx-auto text-center text-grayishBlue text-xl mt-10 leading-9">
        Clipboard instantly stores any item you copy in the cloud, meaning you
        can access your snippets immediately on all your devices. Our Mac and
        iOS apps will help you organize everything.
      </p>

      <div className="flex md:flex-row sm:flex-col items-start justify-center gap-[3rem] md:gap-[6rem] mt-[7rem]">
        <img className="md:min-w-[700px]" src={ComputerImage} alt="computer" />

        <div className="flex flex-col gap-12 mt-[25px] md:max-w-[400px] md:min-w-[400px]">
          <div className="md:text-left text-center">
            <h3 className="mb-2 text-darkGrayishBlue text-2xl font-semibold">
              Quick Search
            </h3>
            <p className="text-grayishBlue text-xl">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>

          <div className="md:text-left text-center">
            <h3 className="mb-2 text-darkGrayishBlue text-2xl font-semibold">
              iCloud Sync
            </h3>
            <p className="text-grayishBlue text-xl">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>

          <div className="md:text-left text-center">
            <h3 className="mb-2 text-darkGrayishBlue text-2xl font-semibold">
              Completely History
            </h3>
            <p className="text-grayishBlue text-xl">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Snippets;
