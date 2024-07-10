import { Box, Group, rem, Stack, Text } from '@mantine/core';
import classes from './styles/page2.module.css';
import Formatter from '../home/common/formatter';

export default function page2() {
    return (
        <>
            <Group wrap='nowrap' visibleFrom='xs' gap={0} style={{
                height: rem('600px')
            }}>
                <Box className={classes.bg1}>
                    <Stack gap='lg' style={{
                        width: '67%'
                    }}>
                        <Text c='white' size={rem('36px')} fw={700} style={{lineHeight: 1.3}}>Digital Web Solutions that deliver! The Right Tools!! The Right Solution!!!</Text>
                        <Text c='white' fw={700} size={rem('28px')} style={{paddingBottom: '4vh'}}>Who we are</Text>
                        <Formatter text={'Tihalt is a full-service digital agency. We provide creative digital solutions to bring your products and services to a wider public. With our branding and user-centered design, customers are engaged and brand awareness grows. Our impressive client list trusts us to deliver creative, interactive experiences for their customers across the whole range of web and mobile applications.'} bold={['Tihalt', 'branding and user-centered design']} style={{
                            textAlign: 'justify',
                            color: '#cccccc',
                            fontWeight: 500,
                            lineHeight: 1.7
                        }} />
                    </Stack>
                </Box>
                <Box className={classes.bg2}></Box>
            </Group>
                <Box hiddenFrom='xs' className={classes.mbg1}>
                    <Stack gap='lg' style={{
                        width: '100%',
                        padding: '10vh 0'
                    }}>
                        <Text c='white' size={rem('36px')} fw={700} style={{lineHeight: 1.3}}>Digital Web Solutions that deliver! The Right Tools!! The Right Solution!!!</Text>
                        <Text c='white' fw={700} size={rem('28px')} style={{paddingBottom: '4vh'}}>Who we are</Text>
                        <Formatter text={'Tihalt is a full-service digital agency. We provide creative digital solutions to bring your products and services to a wider public. With our branding and user-centered design, customers are engaged and brand awareness grows. Our impressive client list trusts us to deliver creative, interactive experiences for their customers across the whole range of web and mobile applications.'} bold={['Tihalt', 'branding and user-centered design']} style={{
                            textAlign: 'justify',
                            color: '#cccccc',
                            fontWeight: 500,
                            lineHeight: 1.7
                        }} />
                    </Stack>
                </Box>
        </>
    );
}