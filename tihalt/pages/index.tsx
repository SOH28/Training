import { Box } from "@mantine/core";
import Nav from "./common/nav";
import Home from "./home";
import Helper from "./common/helper";
import Footer from "./common/footer";
import { useState } from "react";
import classes from './global.module.css';
import { useRouter } from "next/router";
import About from "./about";

export default function IndexPage() {

  const router = useRouter();

  

  const [pagetop, setPagetop] = useState(true);
  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    if(e.currentTarget.scrollTop === 0) 
      setPagetop(true);
    else
      setPagetop(false);
  } 


  return (
    <Box>
      <Nav top={pagetop}/>
      <Helper />
      <main className={classes.body} onScroll={handleScroll} >
        { (router.pathname === '/' || router.pathname === '/home') && <Home />}
        { router.pathname === '/about' && <About />}
        <Footer />
      </main>
    </Box>

  );
}
