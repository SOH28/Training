import { Box, Container, Group, rem, Stack, Text } from '@mantine/core';
import Formatter from '../home/common/formatter';

export default function page3() {
    return (
        <Box style={{
            backgroundColor: 'white',
        }}>
            <Container size='xl' visibleFrom='xs' style={{
                backgroundColor: 'white',
                padding: '6vh 0'
            }}>
                <Group wrap='nowrap' gap="xl">
                    <Stack gap='lg' style={{
                        width: '67%',
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
                        width: '67%',
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