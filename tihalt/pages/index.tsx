import { Box, Button, Group } from "@mantine/core";
import Nav from "./common/nav";
import Home from "./home";
import Helper from "./common/helper";
import { useState } from "react";
import classes from './global.module.css';

export default function IndexPage() {
  const [pagetop, setPagetop] = useState(true);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    console.log('scrolling')
    if(e.currentTarget.scrollTop === 0) 
      setPagetop(true);
    else
      setPagetop(false);

    console.log(pagetop)
  } 


  return (
    <Box>
      <Nav top={pagetop}/>
      <section className={classes.body} onScroll={handleScroll} >
        <Home />
        <Helper />
      </section>
    </Box>

  );
}
