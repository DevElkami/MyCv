import { Unstable_Grid2 as Grid, Stack, ThemeProvider, createTheme } from "@mui/material";

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

function App() {
    const [light, setLight] = React.useState(true);
    return (
        <>
            <ThemeProvider theme={light ? lightTheme : darkTheme}>
                <Grid container rowSpacing={2} columnSpacing={4}>
                    <Grid xs={4} >
                        <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 3 }}>
                            <WhoIam action={() => setLight((prev) => !prev)} />
                            <Languages />
                            <Skills />
                            <Interests />
                        </Stack>
                    </Grid>

                    <Grid xs>
                        <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Summary />
                            <Experiences />
                            <Qualifications />
                        </Stack>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    )
}

export default App