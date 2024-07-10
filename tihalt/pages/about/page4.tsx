import { Box, Group, Stack, Text, Container } from "@mantine/core";
import classes from "./styles/page4.module.css";
import Counter from "./animation/counter";

export default function Page4() {

    const info = [
        {
            title: 'Satisfied Customers',
            from: 400,
            to: 860,
            plus: true
        },
        {
            title: 'Supported Countries',
            from: 10,
            to: 28,
            plus: true
        },
        {
            title: 'Delivered Projects',
            from: 10,
            to: 600,
            plus: true
        },
        {
            title: 'Software Products',
            from: 10,
            to: 25,
            plus: true
        }
    ]

    return (
        <Box className={classes.body}>
            <Container size='xl' visibleFrom='xs' className={classes.container}>
                <Group wrap='nowrap' justify="space-between" style={{
                    width: '100%',
                    padding: '10vh 0'
                }}>
                    {info.map((item, index) => (
                        <Stack key={index} gap="md" justify="center" align='center'>
                            <Counter from={item.from} to={item.to} plus={item.plus} />
                            <Text c={'rgb(255, 195, 26)'} fw={500} size='lg'>{item.title}</Text>
                        </Stack>
                    ))}
                </Group>
            </Container>
            <Container size='xl' hiddenFrom='xs' className={classes.container}>
                <Stack justify="space-between" style={{
                    width: '100%',
                    padding: '6vh 0'
                }}>
                    {info.map((item, index) => (
                        <Stack key={index} gap="md" justify="center" align='center'>
                            <Counter from={item.from} to={item.to} plus={item.plus} />
                            <Text c={'rgb(255, 195, 26)'} fw={500} size='lg'>{item.title}</Text>
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}