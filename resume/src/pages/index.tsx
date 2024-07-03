import Footer from "./container/footer";
import Header from "./container/header";
import Info from "./container/info";
import Personal from "./container/personal";


export default function Home() {
  return (
    <main className='h-auto w-full absolute top-0 left-0 flex justify-center items-center bg-black py-[6vh] overflow-scroll no-scrollbar'>
      <div className='h-full container bg-white p-[3vw]'>
        <div className="w-full h-full flex flex-col">
          <Header />
          <Info />
          <Personal />
          <Footer />
        </div>
      </div>
    </main>
  );
}
