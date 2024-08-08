import { Stack, Typography, LinearProgress, Box, Card, CardContent } from "@mui/material";

function Languages() {
    return (
        <Card style={{ border: "2px solid #9C27B0", boxShadow: "none" }}>
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Typography variant="h5" component="div" align="left">Languages</Typography>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">French</Typography>
                                <Typography variant="body2" color="text.secondary">Native</Typography>
                            </Stack>
                            <LinearProgress color="secondary" variant="determinate" value={100} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">English</Typography>
                                <Typography variant="body2" color="text.secondary">A2</Typography>
                            </Stack>
                            <LinearProgress color="secondary" variant="determinate" value={34} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">Spanish</Typography>
                                <Typography variant="body2" color="text.secondary">Notion</Typography>
                            </Stack>
                            <LinearProgress color="secondary" variant="determinate" value={10} />
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Languages;