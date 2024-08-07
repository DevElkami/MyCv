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
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">2024</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">React - Alex MOULINNEUF (Le Teich)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">2023</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">ORO.FTL - Conseil ACB (Le Teich)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">2017</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">ASP.NET Certification - ORSYS (Paris)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">2015</Typography>
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Scrum Master™ Certification - Ayeba (Bordeaux)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">2012</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Scrum - ORSYS (Paris)</Typography>
                                </Stack>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                            <TimelineDot color="secondary" />
                            </TimelineSeparator>
                            <TimelineContent>       
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography sx={{ fontWeight: 'medium', fontStyle: 'italic' }} variant="subtitle1" component="div">2004</Typography>                                    
                                    <HorizontalRuleIcon color="secondary" />
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Master of Science - University of La Rochelle</Typography>
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