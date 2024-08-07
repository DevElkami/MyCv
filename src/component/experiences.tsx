import { Stack, Typography, Card, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function Experiences() {
    return (
        <Card>
            <CardContent>                
                <Stack direction="column" spacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Typography variant="h5" component="div" align="left">Work experience</Typography>                    
                    <Timeline sx={{ [`& .${timelineItemClasses.root}:before`]: { flex: 0, padding: 0 }}}>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>                                                                
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Dec 2022 - Present</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Cyberjet (Le Teich)</Typography>
                                </Stack>                                    
                                <Typography component={'span'}>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                                <ListItemText>React (Syncfusion, Zustand)</ListItemText>
                                            </ListItemButton>
                                        </ListItem>                                     
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                                <ListItemText>Api REST / ASP.NET (C#, .net 8.0, Swagger, Entity, Visual Studio 2022)</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                                <ListItemText>Sql server (SQL Server Management Studio, stored procedure, dacpac)</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                                <ListItemText>Azure Dev Ops (Pipelines, Artifacts, Releases, Deployment groups)</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                                <ListItemText>Aviation regulations (EASA ORO.FTL, EU-OPS)</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                                <ListItemText>Unit testing (Locust, MSTest)</ListItemText>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </Typography>                                            
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Feb 2008 - Dec 2022</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">i2S (Pessac)</Typography>
                                </Stack>
                                <Typography component={'span'}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>WPF / Winform (C#, .net 5.0, Visual studio 2019)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>                                                                         
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>Sql (SQL Server, MySQL, SQLite, Dapper)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>Image analysis (OpenCV, Pylon API, C++)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>Unit testing (Google Test, MSTest)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Nov 2006 - Fev 2008</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Apside (Bordeaux)</Typography>
                                </Stack>
                                <Typography component={'span'}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>WPF / Winform (C#, C++, Marshaling , .net 2.0, Visual studio 2005)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>                                                                                                                                            
                                </List>
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Jul 2005 - Nov 2006</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Arpège (Nantes)</Typography>
                                </Stack>
                                <Typography component={'span'}>
                                <List>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>MFC (C++, Visual C++ 6.0)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>                                                                                                                                            
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>Sql (ODBC, Oracle, Toad)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Oct 2004 - Apr 2005</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">L3i (La Rochelle)</Typography>
                                </Stack>
                                <Typography component={'span'}>
                                <List>         
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>MFC (C++, Visual C++ 6.0)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>                           
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon><ArrowRightIcon color="secondary" /></ListItemIcon>
                                            <ListItemText>Image analysis (OpenCV, IPL, DirectShow Filters)</ListItemText>
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            </TimelineSeparator>
                        </TimelineItem>
                    </Timeline>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Experiences;