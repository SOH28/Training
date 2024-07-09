import { Box, Container, Text, Stack, Button, Group } from "@mantine/core";
import classes from "./styles/home.module.css";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
import Page7 from "./page7";

export default function Home() {
    return (
        <Box style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            top: 0,
            left: 0,
        }}>
            <Box style={{ background: '#203677', position: 'absolute', height: '1415px', width:'100%', top: 0, left: 0, zIndex: 1 }}>
                <Box className={classes.main} visibleFrom="xs"></Box>
            </Box>
            <Container size="xl" className={classes.container} visibleFrom="xs">
                <Stack className={classes.headerContainer}>
                    <h1 className={classes.header}>Tihalt</h1>
                    <Text c="white" size="xl" style={{
                        width: '45%',
                        textWrap: 'wrap',
                        marginBottom: '4vh'
                    }} >Tihalt Technologies is one of Bangalore's most experienced and trusted website design and digital marketing company.</Text>
                    <Group style={{
                        marginBottom: '6vh'
                    }}>
                        <Button size="lg" radius="xl" variant="outline" color="yellow">Learn More</Button>
                        <Button size="lg" radius="xl" variant="filled" color="rgba(255, 255, 255, 1)" style={{
                            color: 'black'
                        }}>Download Brochure</Button>
                    </Group>
                    <h1 className={classes.header} style={{
                        textAlign: 'center',
                        textWrap: 'wrap',
                        fontSize: '3vw',
                        marginBottom: '3vh',
                        lineHeight: '1.2'
                    }}>Welcome to Tihalt – Web Design Company in Bangalore</h1>
                    <Group justify="space-between" wrap="nowrap" >
                        <h1 style={{
                            textWrap: 'wrap',
                            fontSize: '2.5vw',
                            lineHeight: '1.2',
                            color: 'white',
                            width: '45%',
                            alignSelf: 'start',
                            
                        }}>DECENTRALIZED PLATFORM THAT RUNS SMART CONTRACTS!</h1>
                        <Box className={classes.divider}>
                            <Box style={{
                                width: '1.5px',
                                backgroundColor: '#465b8d',
                                height: '65%',
                                position: 'absolute',
                                top: 0
                            }}></Box>
                            <Text c="white" size="sm" fw="bold" style={{
                                rotate: '-90deg',
                                letterSpacing: '4px',
                                width: '30%',
                                position: 'absolute',
                                bottom: '0',
                                textWrap: 'nowrap'
                            }}>ABOUT US</Text>
                        </Box>
                        <h2 style={{
                            textWrap: 'wrap',
                            fontSize: '1.2vw',
                            lineHeight: '1',
                            width: '40%',
                            color: 'white',
                            fontWeight: 'normal',
                            opacity: '0.6'
                        }}><strong>Tihalt</strong> is the <strong>best web design company in Bangalore</strong> besides the <strong>top digital marketing and SEO Agency in Bangalore.</strong> We provide <strong>web development & design services, SEO & digital marketing consultancy services</strong> to bring your products and services to a wider public. Join with our branding and user-centered design, Clients are engaged & brand value grows.</h2>
                    </Group>
                </Stack>
            </Container>
            <Container size="xl" className={classes.container} hiddenFrom="xs">
                <Stack>
                    <h1 className={classes.header}>Tihalt</h1>
                    <Text c="white" size="xl" style={{
                        width: '95%',
                        textWrap: 'wrap',
                        marginBottom: '4vh'
                    }} >Tihalt Technologies is one of Bangalore's most experienced and trusted website design and digital marketing company.</Text>
                    <Group style={{
                        marginBottom: '6vh'
                    }}>
                        <Button size="lg" radius="xl" variant="outline" color="yellow">Learn More</Button>
                        <Button size="lg" radius="xl" variant="filled" color="rgba(255, 255, 255, 1)" style={{
                            color: 'black'
                        }}>Download Brochure</Button>
                    </Group>
                    <h1 className={classes.header} style={{
                        textAlign: 'center',
                        textWrap: 'wrap',
                        fontSize: '8vw',
                        marginBottom: '3vh',
                        lineHeight: '1.2'
                    }}>Welcome to Tihalt – Web Design Company in Bangalore</h1>
                    <Stack >
                        <h1 style={{
                            textWrap: 'wrap',
                            fontSize: '8.5vw',
                            lineHeight: '1.2',
                            color: 'white',
                            width: '100%',
                            alignSelf: 'start',
                            
                        }}>DECENTRALIZED PLATFORM THAT RUNS SMART CONTRACTS!</h1>
                        <h2 style={{
                            textWrap: 'wrap',
                            fontSize: '4.2vw',
                            width: '100%',
                            color: 'white',
                            fontWeight: 'normal',
                            opacity: '0.6',
                        }}><strong>Tihalt</strong> is the <strong>best web design company in Bangalore</strong> besides the <strong>top digital marketing and SEO Agency in Bangalore.</strong> We provide <strong>web development & design services, SEO & digital marketing consultancy services</strong> to bring your products and services to a wider public. Join with our branding and user-centered design, Clients are engaged & brand value grows.</h2>
                    </Stack>
                </Stack>
            </Container>
            <Page2 />
            <Page3 />
            <Page4 />
            <Page5 />
            <Page6 />
            {/* <Page7 /> */}
        </Box>
    )
}