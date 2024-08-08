import { UseFeedsStore } from "../store"
import { useEffect } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Link } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LoopIcon from '@mui/icons-material/Loop';

gsap.registerPlugin(useGSAP);

function Interests() {

    const { getFeeds, initFeedsBlog, initFeedsClimb, feedsBlog, feedsClimb } = UseFeedsStore();

    useGSAP(() => {
        gsap.to(document.getElementById("feedsBlogLoading"), { duration: 2, transformOrigin: "50% 50%", repeat: -1, rotation: "-=360", opacity: 1, ease: "none" });
        gsap.to(document.getElementById("feedsClimbLoading"), { duration: 2, transformOrigin: "50% 50%", repeat: -1, rotation: "-=360", opacity: 1, ease: "none" });
    });

    useEffect(() => {
        getFeeds();   
    });

    return (
        <Card style={{ border: "2px solid #9C27B0", boxShadow: "none" }}>
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Typography variant="h5" component="div" align="left">Interests</Typography>
                    <Accordion disableGutters sx={{'&:before':{height:'0px'}, border: "2px solid #9C27B0", borderRadius: '5px', boxShadow: "none"}}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                        <Typography>Trekking</Typography>
                        </AccordionSummary>
                        <AccordionDetails>                            
                            <Typography component={'span'}>
                                <div style={{ visibility: initFeedsBlog != undefined ? 'visible' : 'hidden' }}>
                                    <List>
                                    {
                                        feedsBlog?.map(entry => (
                                            <ListItem key={entry.id} disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon><HikingIcon /></ListItemIcon>
                                                    <ListItemText><Link target="_blank" rel="noreferrer" href={entry.link}>{entry.title}</Link></ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                            ))
                                    }
                                    </List>
                                </div>
                                <div style={{ visibility: ((initFeedsBlog == undefined) || (initFeedsBlog == false)) ? 'visible' : 'hidden' }}>
                                    <LoopIcon id="feedsBlogLoading" />
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion disableGutters sx={{'&:before':{height:'0px'}, border: "2px solid #9C27B0", borderRadius: '5px', boxShadow: "none"}}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography>Climbing</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography component={'span'}>
                                <div style={{ visibility: initFeedsClimb != undefined ? 'visible' : 'hidden' }}>
                                    <List>
                                    {
                                        feedsClimb?.map(entry => (
                                            <ListItem key={entry.id} disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon><LandscapeIcon /></ListItemIcon>
                                                    <ListItemText><Link target="_blank" rel="noreferrer" href={entry.link}>{entry.title}</Link></ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        ))
                                    }
                                    </List>
                                </div>
                                <div style={{ visibility: ((initFeedsClimb == undefined) || (initFeedsClimb == false)) ? 'visible' : 'hidden' }}>
                                    <LoopIcon id="feedsClimbLoading" />
                                </div>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </CardContent>
        </Card>        
    );
}

export default Interests;