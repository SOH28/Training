import classes from './styles/page6.module.css';
import { Box, Text, Container, Group, Stack, ActionIcon, Overlay } from '@mantine/core'
import { useState } from 'react';
import Formatter from './common/formatter';
import { AnimatePresence, motion } from "framer-motion"

export default function Page6() {
    const [select, setSelect] = useState(-1);

    interface Roadmap {
        title: string;
        description: string;
    }

    const roadmap: Roadmap[] = [
        {
            title: 'INFORMATION GATHERING',
            description: 'Requirements gathering is more than just asking a few questions and then proceeding to the next step. We have some steps to process for gathering requirements that all projects should utilize to some degree. If we are doing a small or big project it takes some time to work through the process.\nInitially analyses and ask the right question and then listen carefully to the answer. There are a lot of techniques used to collect the particular requirement. It contains the following steps interviews, facilitated sessions, prototypes, questionnaires and more.\nAfter that, we just validate the collected requirements and confirm that it will reflect the client’s ideology. It includes consolidate requirements and molding the gaps and creating models that help to visualize the process. Then the documents and reports are created for tracking the life cycle of the development. After gathering all the required details give all this to the particular client for their approval.'
        },
        {
            title: 'PLANNING',
            description: 'The project planning comprises a lot of information such as end date, milestones, activities, and deliverables of the project. And it contains some additional things also that are responsibilities of the project management team and the resource required for the particular projects. It’s also having some more like what are all the software’s and hardware includes to develop this project and list of methods and standards to be used. Those methods and standards having algorithms, tools, design language, programming language, testing techniques and many.\nThe project plan gives the proper idea to the project manager to understand, monitor and control the development of the project. It keeps the understanding between the user and the project management team. These are all having a lot of advantages and some of the given below.\n\n• Project planning ensures that the software or websites are developed according to the user\'s ideas, requirements, and scope of the project.\n• It gives the proper role of each project development team members involves to develop this project.\n• It’s given a good idea to monitor the progress of the project according to the plan of the project.\n• Project planning is confirming the resources and their availability and the activities to be performed during the development of the project.\n• Gives the overview to manage the cost of the software project, just plan this during the time of project planning.'
        },
        {
            title: 'DESIGN',
            description: 'The website design process is transforming user requirements into a suitable form. This one helps the programmer in coding and further implementation.\nThe web designing process has the user requirements documents that help to do the coding and implementation. The requirement documents comprise more details about the projects and its working flow. The output of this process can directly create the implementation in programing languages.\n\nThe design yields three levels of results:\n\nArchitectural Design\nIt is the initial level of design that contains the components which are all integrated. In this particular design helps the designers to get the idea of the project.\n\nHigh-level Design\nIt a high-level design and it breaks the architectural design into different subsystems and modules. And it shows the details view of all integrations with other components. It recognizes the structure of each substructure and its relationship.\n\nDetailed Design\nIn detailed design with the implementation part of what we have seen as a system and its subsystem in the previous two designs. Its a more detailed one among the previous two. It defines the logical structure of each module and their relationship with each other.'
        },
        {
            title: 'DEVELOPMENT',
            description: 'After getting the system design documents, the work is divided into small modules and units and the actual development of coding is started. This is a major part of the project. Initially, the development process started according to the requirements and design discussed in the previous parts.\nThe database created by the backend developer and the front end created by the UI developer. UI part is most important in the websites. After done the back end and front-end work both are integrated.\nDevelopers involved all kinds of development and complete it at the period. Create all kind of acceptable functionality what they finalized in the designed documents.'
        },
        {
            title: 'TESTING',
            description: 'Testing the process is an important part of launching the product to the customer. There we will use some kind of method.\n• Errors - These are the coding mistakes done by the developers. Moreover, the most important thing is the difference between the current output and the desired output. This one is considering an error.\n• Fault - When the errors remain, the code means the fault occurs. The fault also knows as a bug, these bugs can cause a system failure.\n• Failure - Failure is the state of the system unable to do the desired task. Failure happens when some bugs in the system.\n\nWe have two types of testing :\n\nManual - Manual testing is done without the use of automated testing tools. Software tester prepares the case study of all functionalities, codes. They test all UI designs, functions, integrations and many. In testing the major role is manual testing only.\nAutomated - In this testing, we will use automated testing tools. Some limitations in manual testing can be overcome by using automated test tools.'
        },
        {
            title: 'MAINTEANCE',
            description: 'Once the full web application or software has been fully tested and the no more high priority issues remain at anymore. This is the time to deploy the product to the customer.\nAfter delivering the products the future developments and post-production issues handled by the development team. Usually, a maintenance team took this after the post-production.\nIf some issues encountered in the production the development team information to a particular problem and how much priority it has. Based on the priority of the problem to be fixed, some have to fix immediately. some will keep holding till the next version.'
        },
        {
            title: 'PROMOTION',
            description: 'Many promotion techniques exist in the current market to promote our business. These may help us to reach among some of the peoples who all surround us. That not much helpful to enlarge your business all over the world. We some of the commonly known promotion techniques such as mouth marketing, Websites, Social media, Flyers, Newspaper Ads and many.\nIn this some of that giving a large scope to give much business. We can able to the website for our business and choose some digital marketing agency to do the SEO and Digital Marketing for your products or businesses. It is helpful to get many customers'
        }
    ]

    return (
        <Box className={classes.body}>
            <Overlay color="#000" backgroundOpacity={0.4} style={{
                zIndex: 2
            }} />
            <Container size="xl" visibleFrom="xs" className={classes.container}>
                <Text c='white' fw={700} size='md' style={{
                    textAlign: 'center',
                    paddingBottom: '1vh'
                }}>ROADMAP</Text>
                <Text size='xl' style={{
                    color: '#efc441',
                    textAlign: 'center',
                    paddingBottom: '8vh'
                }}>PHASES OF THE WEB SITE DESIGN AND DEVELOPMENT PROCESS</Text>
                <Group align='stretch'>
                    <Stack gap="lg" style={{
                        width: '49%'
                    }}>
                        {roadmap.map((item: Roadmap, index: number) => (
                            <Group gap="lg" justify='flex-end' align='stretch'>
                                <Text fw={700} size='md' style={{
                                    color: select == index ? 'white' : '#a6aafb',
                                    transition: 'all',
                                    transitionDuration: '0.3s',
                                    transitionTimingFunction: 'ease-in-out'
                                }}>{item.title}</Text>
                                <Stack gap="sm">
                                    <ActionIcon variant="filled" size="xl" radius="xl" aria-label="Roadmap"
                                    onClick={() => setSelect(index)}
                                    style={{
                                        color: select != index ? 'white' : '#223077',
                                        backgroundColor: select != index ? '#223077' : 'white',
                                        fontWeight: 700,
                                        transition: 'all',
                                        transitionDuration: '0.3s',
                                        transitionTimingFunction: 'ease-in-out',
                                        filter: 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))'
                                    }}>{index+1}</ActionIcon>
                                    {index != roadmap.length - 1 && (
                                        <Box className={classes.line}>
                                            <Box style={{
                                                height: '100%',
                                                width: '1px',
                                                backgroundColor: 'white'
                                            }}></Box>
                                        </Box>
                                    )}
                                </Stack>
                            </Group>
                        ))}
                    </Stack>
                    <AnimatePresence>
                        {select != -1 && (
                            <motion.div
                                key={select}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0, 0, 0.2, 1] } }}
                                style={{
                                    width: '49%',
                                    padding: '0 1vw',
                                }}
                            >
                                <Stack gap="xl">
                                    <Text c='white' fw={700} size='xl' className='animatedElement'>{roadmap[select].title}</Text>
                                    <Text className='animatedElement'><Formatter text={roadmap[select].description} style={{
                                        color: '#a6aafb',
                                        textAlign: 'justify',
                                        lineHeight: '1.7',
                                        fontWeight: 500,
                                        fontSize: 'var(--text-fz, var(--mantine-font-size-xl))'
                                    }}></Formatter></Text>
                                </Stack>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Group>
            </Container>

            <Container size="xl" hiddenFrom="xs" className={classes.container}>
                <Text c='white' fw={700} size='md' style={{
                    textAlign: 'center',
                    paddingBottom: '1vh'
                }}>ROADMAP</Text>
                <Text size='xl' style={{
                    color: '#efc441',
                    textAlign: 'center',
                    paddingBottom: '8vh'
                }}>PHASES OF THE WEB SITE DESIGN AND DEVELOPMENT PROCESS</Text>
                <Group align='stretch'>
                    <Stack gap="lg" style={{
                        width: '20%'
                    }}>
                        {roadmap.map((item: Roadmap, index: number) => (
                            <Group gap="lg" justify='flex-end' align='stretch'>
                                <Text fw={500} 
                                onClick={() => setSelect(index)}
                                style={{
                                    color: select == index ? 'white' : '#a6aafb',
                                    transition: 'all',
                                    transitionDuration: '0.3s',
                                    transitionTimingFunction: 'ease-in-out',
                                    fontSize: '0.6rem',
                                    textAlign: 'right'
                                }}>{item.title}</Text>
                            </Group>
                        ))}
                    </Stack>
                    <AnimatePresence>
                        {select != -1 && (
                            <motion.div
                                key={select}
                                initial={{ opacity: 0, scale: 1 }}
                                animate={{ opacity: 1, scale: 1, transition: { duration: 0.3, ease: [0, 0, 0.2, 1] } }}
                                style={{
                                    width: '69%',
                                    padding: '0 1vw',
                                }}
                            >
                                <Stack gap="md">
                                    <Text c='white' fw={700} size='sm' className='animatedElement'>{roadmap[select].title}</Text>
                                    <Text className='animatedElement'><Formatter text={roadmap[select].description} style={{
                                        color: '#a6aafb',
                                        textAlign: 'justify',
                                        lineHeight: '1.7',
                                        fontWeight: 500,
                                        fontSize: 'var(--text-fz, var(--mantine-font-size-xs))'
                                    }}></Formatter></Text>
                                </Stack>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Group>
            </Container>
        </Box>
    );
}
