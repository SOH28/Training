import { Container, Group, Stack, rem, Box, Text, Button } from "@mantine/core";
import Image from "next/image";
import classes from './styles/page2.module.css';

export default function Page2() {

    interface IInfo {
        avatar: string;
        title: string;
        description: string;
    }

    const info: IInfo[] = [
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/06/WEB-CLOUD.jpg?resize=800%2C511&ssl=1',
            title: 'WEBSITE DESIGN & DEVELOPMENT',
            description: 'We are specialized in professional web design, website redesign, static and dynamic website design and customized web portals for all kind of organizations like non-profit, SME’s and corporate business that who are all looking for perfect professional services.'
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/06/mobile-and-mobility.jpg?resize=800%2C511&ssl=1',
            title: 'MOBILE APPLICATION DEVELOPMENT',
            description: 'Are you looking for a customized mobile app for your business growth? We create your Mobile app in such a way visible to your customer, you can enlarge your business and gain more loyalty from them. Our team turns your extreme imagination into ex-ordinary reality.'
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/06/DIGITAL-MARKETING.jpg?resize=800%2C511&ssl=1',
            title: 'SEO-DIGITAL MARKETING SERVICES',
            description: 'Tihalt will provide you with the best SEO tactics that make you the better one in your business. Tihalt can make good credibility among your clients and capable of bringing a good user experience to your website. We will promote your brand by the way of ads, social media promotions.'
        },
        {
            avatar: 'https://i0.wp.com/tihalt.com/wp-content/uploads/2019/06/ecommerce.jpg?resize=800%2C511&ssl=1',
            title: 'E-COMMERCE SITE DEVELOPMENT',
            description: 'Our team builds interactive, user-friendly, High-performance and profit gaining e-commerce portals. Tihalt Technologies has created niche e-commerce websites in the market. Our specialists provide end to end e-commerce platform that helps you to success the business.'
        }
    ] 

    return (
        <Box className={classes.body}>
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Group justify="space-between" align="stretch" >
                    {info.map((item: IInfo, index: number) => (
                        <Stack align="inherit" gap="lg" key={index} style={{
                            width: rem('280px'),
                            color: '#383838'
                        }}>
                            <Image src={item.avatar} alt={item.title} width={800} height={500} style={{
                                width: rem('280px'),
                                height: rem('178px'),
                                borderRadius: rem('8px')
                            }}
                            />
                            <Text fw={600} className={classes.title}>{item.title}</Text>
                            <Text className={classes.description}>{item.description}</Text>
                            <Button size="lg" radius="xl" variant="outline" color="yellow" style={{
                                color: 'black',
                                fontSize: rem('14px'),
                                width: '45%'
                            }}>Read More</Button>
                        </Stack>
                    ))}
                </Group>
            </Container>
            <Container size="xl" hiddenFrom="xs" className={classes.container}>
                <Stack gap="lg">
                    {info.map((item: IInfo, index: number) => (
                        <Stack align="inherit" key={index} gap="lg" style={{
                            width: '100%',
                            color: '#383838'
                        }}>
                            <Image src={item.avatar} alt={item.title} width={800} height={500} style={{
                                width: '100%',
                                height: rem('178px'),
                                borderRadius: rem('8px')
                            }}
                            />
                            <Text fw={600} className={classes.title}>{item.title}</Text>
                            <Text className={classes.description}>{item.description}</Text>
                            <Button size="lg" radius="xl" variant="outline" color="yellow" style={{
                                color: 'black',
                                fontSize: rem('14px'),
                                width: '45%'
                            }}>Read More</Button>
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}