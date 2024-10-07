import { useQuery } from '@tanstack/react-query'
import { extractFromXml, FeedEntry } from '@extractus/feed-extractor'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails, Card, CardContent, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Link } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HikingIcon from '@mui/icons-material/Hiking';
import LandscapeIcon from '@mui/icons-material/Landscape';
import LoopIcon from '@mui/icons-material/Loop';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

gsap.registerPlugin(useGSAP);

function Interests() {
    const fetchRss = async (dest: string): Promise<FeedEntry[]> =>
        {
            try
            {
                const response = await fetch(dest);
                if (!response.ok)
                    throw new Error("Can't find server");

                const xml = await response.text();
                const feed = extractFromXml(xml);
                if (feed.entries)
                    return feed.entries.slice(0, 5);
            }
            catch(error)
            {
                console.log(error)
                throw new Error("Can't fetch rss:" + dest + error)
            };

            throw new Error("Can't find server:" + dest)
        }        
    
    const blogQuery = useQuery({
        queryKey: ['blog'],
        queryFn: async () => fetchRss('/blog/'),
      })

    const climbQuery = useQuery({
        queryKey: ['climb'],
        queryFn: async () => fetchRss('/climb/'),
      })

    useGSAP(() => {
        gsap.to(document.getElementById("feedsBlogLoading"), { duration: 2, transformOrigin: "50% 50%", repeat: -1, rotation: "-=360", opacity: 1, ease: "none" });
        gsap.to(document.getElementById("feedsClimbLoading"), { duration: 2, transformOrigin: "50% 50%", repeat: -1, rotation: "-=360", opacity: 1, ease: "none" });
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
                                <div style={{ visibility: (!blogQuery.isPending && !blogQuery.error) ? 'visible' : 'hidden' }}>
                                    <List>
                                    {
                                        blogQuery.data?.map(entry => (
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
                                <div style={{ visibility: (blogQuery.isPending) ? 'visible' : 'hidden' }}>
                                    <LoopIcon id="feedsBlogLoading" />
                                </div>
                                <div style={{ visibility: (blogQuery.error) ? 'visible' : 'hidden' }}>
                                    <Typography>Can't load this rss feed</Typography>
                                    <ErrorOutlineIcon id="feedsBlogError" />
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
                                <div style={{ visibility: (!climbQuery.isPending && !climbQuery.error) ? 'visible' : 'hidden' }}>
                                    <List>
                                    {
                                        climbQuery.data?.map(entry => (
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
                                <div style={{ visibility: (climbQuery.isPending) ? 'visible' : 'hidden' }}>
                                    <LoopIcon id="feedsClimbLoading" />
                                </div>
                                <div style={{ visibility: (climbQuery.error) ? 'visible' : 'hidden' }}>
                                    <Typography>Can't load this rss feed</Typography>
                                    <ErrorOutlineIcon id="feedsClimbError" />
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