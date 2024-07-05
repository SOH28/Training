import Home from "./home/home";
import SContainer from "./page2/page";
import Page3 from "./page3/page";
import Nav from "./home/nav";
import { useEffect, useState } from "react";
import Page4 from "./page4/page";
import Page5 from "./page5/page";
import Page6 from "./page6/page";
import Footer from "./footer/page";

export default function Container() {

  const [pagetop, setPagetop] = useState(true);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    if(e.currentTarget.scrollTop === 0) 
      setPagetop(true);
    else
      setPagetop(false);
} 

  return (
    <>
      <Nav pageTop={pagetop} />
      <div className="w-full absolute top-0 left-0 h-full overflow-y-scroll overflow-x-hidden no-scroll pt-[16vh] bg-primary-theme" onScroll={handleScroll}>
        <Home />
        <SContainer />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Footer />
      </div>
    </>
  );
}
