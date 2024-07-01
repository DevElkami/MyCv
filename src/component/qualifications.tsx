import { Stack, Typography, Card, CardContent, Box, Divider } from "@mui/material";

function Qualifications() {
    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={{ xs: 1, sm: 1, md: 1 }}>
                    <Typography variant="h5" component="div" align="left">Qualifications</Typography>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">C#</Typography>
                                <Typography variant="body2" color="text.secondary">20 Years</Typography>
                            </Stack>
                            <Divider sx={{ background: '#9C27B0' }} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">C++</Typography>
                                <Typography variant="body2" color="text.secondary">10 Years</Typography>
                            </Stack>
                            <Divider sx={{ background: '#9C27B0' }} />
                        </Stack>
                    </Box>
                    <Box>
                        <Stack spacing={{ xs: 1 }}>
                            <Stack direction="row" justifyContent="space-between" alignItems="center">
                                <Typography variant="subtitle1" color="text.secondary">Asp .NET Core</Typography>
                                <Typography variant="body2" color="text.secondary">2 Years</Typography>
                            </Stack>
                            <Divider sx={{ background: '#9C27B0' }} />
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>
    );    
}

export default Qualifications;