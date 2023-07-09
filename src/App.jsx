import Hero from "./scenes/Hero";
import Snippets from "./scenes/Snippets";
import AccessClipboard from "./scenes/AccessClipboard";
import Supercharge from "./scenes/Supercharge";
import Logos from "./scenes/Logos";
import Devices from "./scenes/Devices";
import Footer from "./scenes/Footer";

function App() {
  return (
    <>
      {/* CONTENT */}
      <div className="p-[35px]">
        <Hero />
        <Snippets />
        <AccessClipboard />
        <Supercharge />
        <Logos />
        <Devices />
      </div>
      <Footer />
    </>
  );
}

export default App;
