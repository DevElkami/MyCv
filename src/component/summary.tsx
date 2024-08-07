import { Stack, Typography, Card, CardContent } from "@mui/material";

function Summary() {
    return (
        <Card style={{ border: "2px solid #9C27B0" }}>
            <CardContent>
                <Stack direction="column" spacing={1}>
                    <Typography variant="subtitle1" color="text.primary" align="left">I follow principles of good practices code's efficient like SOLID, DRY and KISS.</Typography>
                    <Typography sx={{ fontStyle: 'italic' }} variant="subtitle1" color="text.secondary" align="right">Because a complex solution to a problem creates another problem</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default Summary;