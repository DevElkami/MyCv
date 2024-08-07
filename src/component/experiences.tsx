import { Stack, Typography, Accordion, Avatar, AccordionSummary, AccordionDetails, Card, CardContent, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Experiences() {
    return (
        <Card>
            <CardContent>                
                <Stack direction="column" spacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Typography variant="h5" component="div" align="left">Experiences</Typography>                    
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel1bh-content"
                            sx={{ maxHeight: 16 }}
                            id="panel1bh-header">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: 1,
                                    width: '100%'
                                }}>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Avatar style={{ border: '0px solid' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAk1BMVEVHcExXaHyXnKKoqa2foad1f46Rlp64tbWlpqqOlJ2PlZ5veoqqqq6jpKmAiJWdn6abnqWhoqiSl5+Jj5phcYOHj5qmp6uIj5qXmqJlc4RZaH6pqq6eoKaBiZZicIR8hpKgoKe0srSwrrCpqq5ba39zfo14gY99hpOanaWBiZVteYqMkptpdYZicYSGjpmTmKB8hZPTGO/FAAAAIXRSTlMAgJ3f/hngpP4KbcBIXKkx432W0myImFe5M8j8yfamiKQbmmAqAAAAwElEQVQokcXP2RKCIBSAYXMLcBf31BatKEt9/6fLcEW8bfoG5lz8AwOC8Bu7XrwZk5JKvK3olYMc8lF5j3KFi1B7jTS+es8JX+PrjKuKdpuZqwqP90nbrmv4oLKMDpP9kYXrGqMQ+jXls/e6FUZVZeKq5zNnUYTUgas2TYOY9xquG4qUlTarCiNCxG7bNrEJZSyqI8vyKXCs76TsRdUlAICUOgEYSfp8r1QUh251e7SowYUzV/28wRj+C/dbLOEPPv7OIgruBhluAAAAAElFTkSuQmCC" />
                                    <Typography variant="subtitle1" component="div">Cyberjet</Typography>
                                </Stack>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography variant="body2" color="text.secondary">Now - 2022</Typography>
                                </Stack>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
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
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel1bh-content"
                            sx={{ maxHeight: 16 }}
                            id="panel1bh-header">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: 1,
                                    width: '100%'
                                }}>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Avatar style={{ border: '0px solid' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAh1BMVEX////R2uK9y93o7fPb4evf5u56k7uesc37/f3G0eFqiLOOpcWouNB0jraHnsKwwNcARpLL1uQ+aqQANIoITpUrX6AlXJ9Wfq71+Pi6x9wALogAEoBwjbcAKIYxZKEAIoPw9fkAOo0ASpTLy8vc3Nzv7+/W1tatrKmioZ+4uLbFxcK7ubnn5+WOy3f5AAAAxUlEQVR4AdXJRQLCMBRF0VdX3OoaIWn2vz5cK2M4ky8X/0DTz4yRaJimadmY4Li483wr8C9CeLOL+VtcLFe4Wpub7W632x/eYmTc10OchNYZ3mKYrhw/yzI/wDrJ8zzZ49EcLJJVgTv3bJFruAsQlqt1VJ1FXt2cLfPqFVe2FdhX2vxKwytOsK0zjDDiM4xw+9tL20aEUpcQRqI2YpQQSiL6iJQfBXgrhewoZ0LKTjF5j0oqSdC6pGNUKEpaqVwuMI65+EEnG5URNxd10LEAAAAASUVORK5CYII=" />
                                    <Typography variant="subtitle1" component="div">i2S</Typography>
                                </Stack>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography variant="body2" color="text.secondary">2008 - 2022</Typography>
                                </Stack>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
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
                                </List>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel1bh-content"
                            sx={{ maxHeight: 16 }}
                            id="panel1bh-header">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: 1,
                                    width: '100%'
                                }}>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Avatar style={{ border: '0px solid' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAclBMVEUYNlATM04RMk0KL0sRM08AIEEAHkAAKkgcOVM7UGVPYHEfPFUAI0MvSGBKX3Nreolyf4z6+/zp6+2or7bd3+LLz9SzucC9w8mepq/e4eTT19uTnab09faEjpkACTfEyc9ba3uIk54AEzoAACpGWWx7hpIVwCKRAAAAmUlEQVR4AewRgxEEMTA4O84x7r/Et8ZfwAVrLzjPvwfeLkBPAuEsL350ZQXqMm+qqq27fhgnQvOvbiKMU8Gl0jOR87JuDf7EhITsgFF2GHtYvjNX4Leq7Ba6iU1gtgnrGzqN3cetdYwfZKmDkpvQikhjqrfy5qb0ensupirGqW+sBZ/T9THWZVlihCG6f4x/e0QInpu+DgcAALZ4CaNf+TXvAAAAAElFTkSuQmCC" />
                                    <Typography variant="subtitle1" component="div">Apside</Typography>
                                </Stack>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography variant="body2" color="text.secondary">2006 - 2008</Typography>
                                </Stack>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel1bh-content"
                            sx={{ maxHeight: 16 }}
                            id="panel1bh-header">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: 1,
                                    width: '100%'
                                }}>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Avatar style={{ border: '0px solid' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAxlBMVEX////h7/O41uCixtS0zNna5euq1t8on7YAkK0SjKoZh6cbgKMYeJ4MbZctcZmbsscmrL4pmbIrjKorhaYueJ4OX44xZZLU3OUnpbpOm7Uwa5YASYLI0Nz6/v4jucclssIAmLGnz9unwNENZpMyXo7o6/CD1d3S6O36/P0zWIpfc5uLydVorMFrn7mLpr4QPHrE7O8ApbmIv88MVokrTIKnr8Sj4uZ9ialRp7205+uPuMp+pr5Kx9FfssXW8PPH3OVRkK67wtKCOHIdAAAA8UlEQVR4AcTQQwIDMQAF0F/bto2xef9TNWPuGycvxp9DoVgqlSu5VK3VG81Wu9PtZVf1a7VBfThqjbuT6Sxt/TlZuViQlcvpah23zXbXn+8PTvN4Wk7Pq0sMrwRrN+B+B2aT6fnxjC8k+ALerfYH+E7ODypaShNkCmAbw1G7hwp3fvBCiKKDdzi3bY9xd1BK4gZyIw8VB4u4NZutLBacC81JraoXLY3QHTS8mwMpNHcEa4OSZanj2XqSRIguNpwzT5NpCvFi5sHHLzkuhbj19wPnKd3Tcl1ZpZAwKw9HtrYGMKOk3/AkCkctfElGfKDSKgD+wB9vHYZqwAAAAABJRU5ErkJggg==" />
                                    <Typography variant="subtitle1" component="div">Arpège</Typography>
                                </Stack>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography variant="body2" color="text.secondary">2005 - 2006</Typography>
                                </Stack>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon color="secondary" />}
                            aria-controls="panel1bh-content"
                            sx={{ maxHeight: 16 }}
                            id="panel1bh-header">
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    borderRadius: 1,
                                    width: '100%'
                                }}>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Avatar style={{ border: '0px solid' }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAApVBMVEX///+81eiTu9ilxdwyi7sphbkQfbXg6vMviLjW5O4thrQshbXv9/nT6uvH5efg8PH2+vqq2tyi2NzM3ujn8fRPprxBqLpHr7pMtblxwsJWvb5TvMPB3eQ7oblnwsdmxMpFjrqaydnM6ehlxcTC1+WOz9GV1NhYvLqByMa84eUuorRTs7+BvcqBxM1tv8RBjcAAdbJEncZLqMcgdq8ulMFcj7pvrdH/ADRIAAAA5klEQVR4AbXORaLDMAxF0Rfm2OFELjNzu/+dfYYGZ73TY0vCK5NkpR1VTTda0VQ1qxXtLnRU5wNdz/cZAB6EvIxRnKRZnucFByPBSmhHvf4nEhXAYPj80x7ZEcY9z5tMiTyEQ5TQnOErRjTHovxT/UWXpgWbDlnzz+UynAwGfg1dzt3VktgHrqtj3U2W5USECjqqKSFOt0KIJnRmwG6/P+QkXK+K2u+1gkJv2IIQYj4ZDp9xZGrSHy78MsqadjR+cb0uI9c1/XTSdfV82R5QQUSn60e6c7skbg0xu3/pIwbA9oMYL+wdtP0YxAKBjwsAAAAASUVORK5CYII=" />
                                    <Typography variant="subtitle1" component="div">L3i</Typography>
                                </Stack>
                                <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                                    <Typography variant="body2" color="text.secondary">2004 - 2005</Typography>
                                </Stack>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
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
                        </AccordionDetails>
                    </Accordion>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Experiences;