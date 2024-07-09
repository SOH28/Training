import { Avatar, Box, HoverCard, Text } from "@mantine/core";
import classes from "./helper.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {  faMessage } from "@fortawesome/free-regular-svg-icons";

export default function Helper() {
    return (
        <Box>
            <HoverCard shadow="md" withArrow position="right">
                <HoverCard.Target>
                    <Avatar variant="filled" color="green" radius="xl" className={classes.helper1}>
                        <FontAwesomeIcon icon={faWhatsapp} style={{
                            width: '3vh',
                            height: '3vh',
                        }} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                }}>
                    <Text c="black" size="sm">
                        Message Us
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
            
            <HoverCard shadow="md" withArrow position="right">
                <HoverCard.Target>
                    <Avatar variant="filled" color="yellow" radius="xl" className={classes.helper2}>
                        <FontAwesomeIcon icon={faMessage} style={{
                            width: '3vh',
                            height: '3vh',
                        }} />
                    </Avatar>
                </HoverCard.Target>
                <HoverCard.Dropdown style={{
                    backgroundColor: 'rgb(255, 255, 255)',
                }}>
                    <Text c="black" size="sm">
                        We're Online!<br />How may I help you today?
                    </Text>
                </HoverCard.Dropdown>
            </HoverCard>
        </Box>
    );
}