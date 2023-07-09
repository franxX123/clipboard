const DownloadButton = ({ backgroundColor, text }) => {
  return (
    <a
      href="#"
      className={`md:w-[225px] hover:opacity-80 transition duration-200 flex justify-center text-xl w-full p-4 ${backgroundColor} rounded-full shadow-lg text-white`}
    >
      {text}
    </a>
  );
};

export default DownloadButton;
