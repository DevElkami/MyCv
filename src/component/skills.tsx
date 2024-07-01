import { Stack, Typography, LinearProgress, Box, Card, CardContent } from "@mui/material";
function Skills() {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={ 1 }>
                    <Typography variant="h5" component="div" align="left">Skills</Typography>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">C#</Typography>
                                <Typography variant="body2" color="text.secondary">20 Years</Typography>
                            </Stack>
                            <LinearProgress color="secondary" variant="determinate" value={100} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">C++</Typography>
                                <Typography variant="body2" color="text.secondary">10 Years</Typography>
                            </Stack>
                            <LinearProgress color="secondary" variant="determinate" value={50} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">Asp .NET Core</Typography>
                                <Typography variant="body2" color="text.secondary">2 Years</Typography>
                            </Stack>
                            <LinearProgress color="secondary" variant="determinate" value={10} />
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Skills;