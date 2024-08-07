import { Stack, Typography, Card, CardContent, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

function Qualifications() {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Typography variant="h5" component="div" align="left">Educations and qualifications</Typography>
                    <Box>
                        <Typography component={'span'}>
                            <List disablePadding>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><CheckIcon color="secondary" /></ListItemIcon>
                                        <ListItemText>React (Syncfusion, Zustand)</ListItemText>
                                    </ListItemButton>
                                </ListItem>                                     
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><CheckIcon color="secondary" /></ListItemIcon>
                                        <ListItemText>Api REST / ASP.NET (C#, .net 8.0, Swagger, Entity, Visual Studio 2022)</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><CheckIcon color="secondary" /></ListItemIcon>
                                        <ListItemText>Sql server (SQL Server Management Studio, stored procedure, dacpac)</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><CheckIcon color="secondary" /></ListItemIcon>
                                        <ListItemText>Azure Dev Ops (Pipelines, Artifacts, Releases, Deployment groups)</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><CheckIcon color="secondary" /></ListItemIcon>
                                        <ListItemText>Aviation regulations (EASA ORO.FTL, EU-OPS)</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon><CheckIcon color="secondary" /></ListItemIcon>
                                        <ListItemText>Unit testing (Locust, MSTest)</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Typography>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );    
}

export default Qualifications;