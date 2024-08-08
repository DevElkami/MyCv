import { Stack, Typography, LinearProgress, Card, CardContent, Box } from "@mui/material";
function Skills() {
    return (
        <Card style={{ border: "2px solid #9C27B0", boxShadow: "none" }}>
            <CardContent>
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="h5" component="div" align="left">Skills</Typography>                    
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">C#</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={90} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">ASP.NET Core</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={90} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">Dev Ops</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={85} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">SQL</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={80} />
                        </Stack>
                    </Box>                    
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">C++</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={75} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">React</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={60} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">Python</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={40} />
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Skills;