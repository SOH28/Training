import { Box, Container, Group, rem, Stack, Text } from '@mantine/core';
import Formatter from '../home/common/formatter';
import Image from 'next/image';
import MailIcon from '../../public/mail.webp'

export default function page1() {
    return (
        <Box style={{
            backgroundColor: 'white',
        }}>
            <Container size='xl' visibleFrom='xs' style={{
                backgroundColor: 'white',
                padding: '6vh 0'
            }}>
                <Group wrap='nowrap' gap="xl" justify='space-around' align='stretch'>
                    <Stack gap='lg'>
                        <Group gap='lg' align='center'>
                            <Image src='https://i0.wp.com/tihalt.com/wp-content/uploads/2020/02/230643_preview-e1580738879355.png' alt='phone' width={26} height={27} />
                            <Text c='black' size={rem('41px')} fw={700} style={{lineHeight: 1.3}}>Phone</Text>
                        </Group>
                        <Formatter text={'Phone: +91 96 1122 3984'} 
                            bold={['+91 96 1122 3984']} 
                            style={{
                                textAlign: 'justify',
                                color: '#333333',
                                fontWeight: 500,
                                lineHeight: 1.7,

                            }}
                            anchor={['+91 96 1122 3984']}
                        />
                    </Stack>
                    <Stack gap='lg' align='center'>
                        <Group gap='lg'>
                            <Image src={MailIcon} alt='mail' width={42} height={27} />
                            <Text c='black' size={rem('41px')} fw={700} style={{lineHeight: 1.3}}>Email</Text>
                        </Group>
                        <Stack gap='xs' justify='flex-start'>
                            <Formatter text={'info@tihalt.com'} 
                            bold={['info@tihalt.com']} 
                            anchor={['info@tihalt.com']}
                            style={{
                                textAlign: 'justify',
                                color: '#333333',
                                fontWeight: 500,
                                lineHeight: 1.3
                            }} />
                            <Formatter text={'support@tihalt.com'} 
                            bold={['support@tihalt.com']} 
                            anchor={['support@tihalt.com']}
                            style={{
                                textAlign: 'justify',
                                color: '#666666',
                                fontWeight: 500,
                                lineHeight: 1.3
                            }} />
                        </Stack>
                    </Stack>
                </Group>
            </Container>
            <Container size='xl' hiddenFrom='xs' style={{
                backgroundColor: 'white',
                padding: '6vh 6vw'
            }}>
                <Stack gap="xl">
                    <Stack gap='lg' style={{
                        width: '100%',
                        padding: '0 1vw'
                    }}>
                        <Text c={'rgb(30, 51, 117)'} size={rem('41px')} fw={800} style={{lineHeight: 1.3}}>OUR VISION</Text>
                        <Formatter text={'Our vision to bring our clients into the modern era through innovation technologies. Tihalt Technosoft Pvt. Ltd., based in Bangalore, India, we deliver web solutions and digital marketing services. We will engage in sustainable practices and anticipate the needs of our clients. We help clients enjoy life, by offering an affordable solution. Our team serves clients from UK, Europe, USA…'} 
                        bold={['Tihalt Technosoft Pvt. Ltd.', 'Bangalore, India', 'UK, Europe, USA…']} 
                        style={{
                            textAlign: 'justify',
                            color: '#666666',
                            fontWeight: 500,
                            lineHeight: 1.7
                        }} />
                    </Stack>
                    <Stack gap='lg' style={{
                        width: '100%',
                        padding: '0 1vw'
                    }}>
                        <Text c={'rgb(30, 51, 117)'} size={rem('41px')} fw={800} style={{lineHeight: 1.3}}>OUR VISION</Text>
                        <Formatter text={'Our vision to bring our clients into the modern era through innovation technologies. Tihalt Technosoft Pvt. Ltd., based in Bangalore, India, we deliver web solutions and digital marketing services. We will engage in sustainable practices and anticipate the needs of our clients. We help clients enjoy life, by offering an affordable solution. Our team serves clients from UK, Europe, USA…'} 
                        bold={['Tihalt Technosoft Pvt. Ltd.', 'Bangalore, India', 'UK, Europe, USA…']} 
                        style={{
                            textAlign: 'justify',
                            color: '#666666',
                            fontWeight: 500,
                            lineHeight: 1.7
                        }} />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}