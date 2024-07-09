import { Container, Group, Stack, Text, Box, rem } from "@mantine/core";
import classes from "./styles/page7.module.css";

export default function Page7() {
    return (
        <Box className={classes.body} >
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Group gap='xl' justify="space-between">
                    <Stack gap='md'>
                        <Text style={{
                            fontSize: rem('39px'),
                            color: '#383838',
                            fontWeight: 600,
                            textAlign: 'center',
                        }}>Leave us your info</Text>
                        <Text size='md' style={{
                            textAlign: 'center',
                            fontSize: rem('19px'),
                            color: '#747474',
                            fontWeight: 500
                        }}>and we will get back to you.</Text>
                    </Stack>
                </Group>
            </Container>
        </Box>
    );
}