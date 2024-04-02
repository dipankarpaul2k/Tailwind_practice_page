import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <div className="max-w-[1536px] mx-auto bg-orange-50 min-h-screen px-6 py-3 flex flex-col gap-12 md:px-10 md:py-5 md:justify-between lg:px-24">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}
