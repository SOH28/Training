import { Box, Container, Group, Stack, Text, Button, rem } from '@mantine/core';
import classes from './styles/page4.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Formatter from './common/formatter';

export default function Page4() {

    const services = [
        "Website Designing and Development",
        "Custom Designed Websites",
        "Revamping Existing Websites",
        "Website Maintenance",
        "Content Management System (CMS)",
        "Responsive Web Design",
        "Web Hosting Services",
        "Take Care of Domain Name",
        "eCommerce Websites Development"
    ]

    return (
        <Box className={classes.body}>
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Group >
                    <Box style={{
                        width: '100%'
                    }}> 
                        <Stack gap="xl" style={{
                            width: '49%'
                        }}>
                            <h1 className={classes.title}>ARE YOU LOOKING FOR A BEST WEB DESIGN COMPANY IN BANGALORE?</h1>
                            <Formatter text="Tihalt is one of the best web design company in Bangalore. We are taken web design solutions as an art of our professional web design team and we have a belief which is everything in first impressions so crafted similar websites. We not only develop attractive websites but also we develop them in some of the ways that engage and encourages them to reach out you or your businesses so You develop professional, powerful, attractive and user-friendly websites for all businesses and NGO through web design company in Bangalore. At Tihalt, we build all types of websites, web portals, landing pages, static websites, dynamic websites, eCommerce websites and other website related services." bold={["best", "web design company in Bangalore"]} classes={classes.description} />
                            <Stack gap="sm">
                                {services.map((service, index) => (
                                    <Group key={index} gap="md">
                                        <FontAwesomeIcon icon={faArrowRight} className={classes.icon} color={'#ffc31a'} />
                                        <Text c='white' size='lg'>{service}</Text>
                                    </Group>
                                ))}
                            </Stack>
                            <Button size="lg" radius="xl" variant="outline" color="yellow" style={{
                                color: 'white',
                                fontSize: rem('14px'),
                                width: '25%'
                            }}>Read More</Button>
                        </Stack>
                    </Box>
                    <Box style={{
                        width: '100%'
                    }}>
                        <Stack gap="xl" style={{
                            width: '49%',
                            float: 'right'
                        }}>
                            <h1 className={classes.title}>WE DRIVE YOUR BUSINESS THROUGH OUR RESULT ORIENTED SEO & BEST DIGITAL MARKETING SERVICES</h1>
                            <Formatter text={'Tihalt is providing the full range of digital marketing services in Bangalore. Nowadays the whole world is connected very well through the internet without the internet it does not possible besides internet users is being grown trend and smartphone users also. So our best way of digital marketing services gives you sufficient routes to boost your brand and products. When the business needs to reach all over the world it should be doing digital marketing, without SEO and digital marketing we can’t able to boost the business in Bangalore, India, and global. We are one of the best SEO company in Bangalore which one providing all kinds of solutions for your businesses with the following benefits that are increase leads, generate the best sales and retail customers.'} bold={['SEO and digital marketing']} classes={classes.description} />
                            <Button size="lg" radius="xl" variant="outline" color="yellow" style={{
                                color: 'white',
                                fontSize: rem('14px'),
                                width: '25%'
                            }}>Read More</Button>
                        </Stack>
                    </Box>
                </Group>
            </Container>
            <Container size="xl" hiddenFrom="xs" className={classes.container}>
                <Stack gap="lg">
                    <Stack gap="xl" style={{
                            width: '100%'
                        }}>
                            <h1 className={classes.title}>ARE YOU LOOKING FOR A BEST WEB DESIGN COMPANY IN BANGALORE?</h1>
                            <Formatter text="Tihalt is one of the best web design company in Bangalore. We are taken web design solutions as an art of our professional web design team and we have a belief which is everything in first impressions so crafted similar websites. We not only develop attractive websites but also we develop them in some of the ways that engage and encourages them to reach out you or your businesses so You develop professional, powerful, attractive and user-friendly websites for all businesses and NGO through web design company in Bangalore. At Tihalt, we build all types of websites, web portals, landing pages, static websites, dynamic websites, eCommerce websites and other website related services." bold={["best", "web design company in Bangalore"]} classes={classes.description} />
                            <Stack gap="sm">
                                {services.map((service, index) => (
                                    <Group key={index} gap="md">
                                        <FontAwesomeIcon icon={faArrowRight} className={classes.icon} color={'#ffc31a'} />
                                        <Text c='white' size='lg'>{service}</Text>
                                    </Group>
                                ))}
                            </Stack>
                            <Button size="lg" radius="xl" variant="outline" color="yellow" style={{
                                color: 'white',
                                fontSize: rem('14px'),
                                width: '35%'
                            }}>Read More</Button>
                    </Stack>
                    <Stack gap="xl" style={{
                            width: '100%'
                        }}>
                            <h1 className={classes.title}>WE DRIVE YOUR BUSINESS THROUGH OUR RESULT ORIENTED SEO & BEST DIGITAL MARKETING SERVICES</h1>
                            <Formatter text={'Tihalt is providing the full range of digital marketing services in Bangalore. Nowadays the whole world is connected very well through the internet without the internet it does not possible besides internet users is being grown trend and smartphone users also. So our best way of digital marketing services gives you sufficient routes to boost your brand and products. When the business needs to reach all over the world it should be doing digital marketing, without SEO and digital marketing we can’t able to boost the business in Bangalore, India, and global. We are one of the best SEO company in Bangalore which one providing all kinds of solutions for your businesses with the following benefits that are increase leads, generate the best sales and retail customers.'} bold={['SEO and digital marketing']} classes={classes.description} />
                            <Button size="lg" radius="xl" variant="outline" color="yellow" style={{
                                color: 'white',
                                fontSize: rem('14px'),
                                width: '35%'
                            }}>Read More</Button>
                    </Stack>   
                </Stack>
            </Container>
        </Box>
    )
}