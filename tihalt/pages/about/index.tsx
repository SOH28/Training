import { Box, rem, Text } from "@mantine/core";
import classes from "./styles/about.module.css";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";

export default function About() {

    return (
        <section >
            <Box className={classes.body}>
                <Box visibleFrom="xs" style={{
                    paddingTop: '10vh'
                }}>
                    <Text c='white' fw={700} style={{
                        fontSize: rem('70px'),
                        textAlign: 'center',
                    }}>About Us</Text>
                    <Text fw={600} style={{
                        letterSpacing: '1px',
                        textAlign: 'center',
                    }}>We provide the solution for business development</Text>
                </Box>
                <Box hiddenFrom="xs" style={{
                    paddingTop: '2vh'
                }}>
                    <Text c='white' fw={700} style={{
                        fontSize: rem('60px'),
                        textAlign: 'center',
                    }}>About Us</Text>
                    <Text fw={600} style={{
                        letterSpacing: '1px',
                        textAlign: 'center',
                        padding: '0 10%'
                    }}>We provide the solution for business development</Text>
                </Box>
            </Box>
            <Box className={classes.container} >
                <Page1 />
                <Page2 />
                <Page3 />
                <Page4 />
                <Page5 />
            </Box>
        </section>
    );
}