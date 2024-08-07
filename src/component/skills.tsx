import { Stack, Typography, LinearProgress, Box, Card, CardContent, Grid } from "@mui/material";
function Skills() {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="h5" component="div" align="left">Skills</Typography>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">C#</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={90} />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">ASP.NET Core</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={90} />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">Dev Ops</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={85} />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">SQL</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={80} />
                        </Stack>
                    </Grid>                    
                    <Grid item xs={6}>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">C++</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={75} />
                        </Stack>
                    </Grid>
                    <Grid item xs={6}>
                        <Stack spacing={{ xs: 1 }}>
                            <Typography align="left" variant="subtitle1" color="text.secondary">React</Typography>
                            <LinearProgress color="secondary" variant="determinate" value={60} />
                        </Stack>
                    </Grid>
                    </Grid>      
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Skills;