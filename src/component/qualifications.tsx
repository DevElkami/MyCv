import { Stack, Typography, Card, CardContent } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function Qualifications() {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Typography variant="h5" component="div" align="left">Educations and qualifications</Typography>
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
                                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="div">Cyberjet - Le Teich</Typography>
                                </Stack>
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
                                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="div">i2S - Pessac</Typography>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Dec 2022 - Present</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="div">Cyberjet - Le Teich</Typography>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Dec 2022 - Present</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="div">Cyberjet - Le Teich</Typography>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>       
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Dec 2022 - Present</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="div">Cyberjet - Le Teich</Typography>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />                            
                            </TimelineSeparator>
                            <TimelineContent>       
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">Dec 2022 - Present</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'bold' }} variant="subtitle1" component="div">Cyberjet - Le Teich</Typography>
                                </Stack>
                            </TimelineContent>                          
                        </TimelineItem>
                    </Timeline>
                </Stack>
            </CardContent>
        </Card>
    );    
}

export default Qualifications;