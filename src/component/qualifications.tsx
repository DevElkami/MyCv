import { Stack, Typography, Card, CardContent, Link } from "@mui/material";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';

function Qualifications() {
    return (
        <Card style={{ border: "2px solid #9C27B0", boxShadow: "none" }}>
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
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">React - <Link target="_blank" rel="noreferrer" underline="hover" href="https://www.alex-moulinneuf.fr">Alex MOULINNEUF</Link> (Le Teich)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">ASP.NET Certification - <Link target="_blank" rel="noreferrer" underline="hover" href="https://www.orsys.fr">ORSYS</Link> (Paris)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Scrum - <Link target="_blank" rel="noreferrer" underline="hover" href="https://www.orsys.fr">ORSYS</Link> (Paris)</Typography>
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
                                    <Typography sx={{ fontWeight: 'medium' }} variant="subtitle1" component="div">Master of Science - <Link target="_blank" rel="noreferrer" underline="hover" href="https://www.univ-larochelle.fr">University of La Rochelle</Link></Typography>
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