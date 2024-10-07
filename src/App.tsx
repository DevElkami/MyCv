import { Grid, Stack, ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import React from "react";

import './App.css'
import WhoIam from './component/whoiam'
import Experiences from './component/experiences'
import Qualifications from './component/qualifications'
import Skills from './component/skills'
import Languages from './component/languages'
import Interests from './component/interests'
import Summary from './component/summary'

const darkTheme = createTheme({ palette: { mode: 'dark' } });
const lightTheme = createTheme({ palette: { mode: 'light' } });
const queryClient = new QueryClient()

function App() {
    const [light, setLight] = React.useState(true);
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={light ? lightTheme : darkTheme}>
                    <CssBaseline>
                        <Grid container rowSpacing={2} columnSpacing={4} columns={6}>
                            <Grid item sm={6} md={2} order={{ xs: 2, sm: 2, md: 1 }}>
                                <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <WhoIam action={() => setLight((prev) => !prev)} />
                                    <Languages />
                                    <Skills />
                                    <Interests />
                                </Stack>
                            </Grid>

                            <Grid item sm={6} md={4} order={{ xs: 1, sm: 1, md: 2 }}>
                                <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Summary />
                                    <Experiences />
                                    <Qualifications />
                                </Stack>
                            </Grid>
                        </Grid>
                    </CssBaseline>
                </ThemeProvider>
            </QueryClientProvider>
        </>
    )
}

export default App