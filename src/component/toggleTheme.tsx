import { useEffect } from 'react';
import { CssBaseline, SpeedDialIcon, SpeedDial, SpeedDialAction } from "@mui/material";

import BedtimeIcon from '@mui/icons-material/Bedtime';
import EmailIcon from '@mui/icons-material/Email';

interface Props {
    action: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function ToggleTheme({ action }: Props) {
    let cryptUrl = "bWFpbHRvOm0ucmVpZ25pZXJAZWxrYW1pLmZyP3N1YmplY3Q9RnJvbU15Q3Y=";
    useEffect(() => {
        if (cryptUrl == "bWFpbHRvOm0ucmVpZ25pZXJAZWxrYW1pLmZyP3N1YmplY3Q9RnJvbU15Q3Y=")
            cryptUrl = atob(cryptUrl);
    });

    return (
        <CssBaseline>
            
                <SpeedDial
                    ariaLabel="UI options"
                    direction="left"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                    FabProps={{
                        sx: {
                            bgcolor: 'secondary.main',
                            '&:hover': {
                                bgcolor: 'primary.main',
                            }
                        }
                    }}
                >

                    <SpeedDialAction
                        key={'Toogle theme'}
                        icon={<BedtimeIcon />}
                        tooltipTitle={'Toogle theme'}
                        onClick={action}
                    />

                    <SpeedDialAction
                        key={'Share'}
                        icon={<EmailIcon />}
                        tooltipTitle={'Contact-me'}
                        onClick={() => window.open(cryptUrl)}
                    />

                </SpeedDial>
            
        </CssBaseline>
    );
}

export default ToggleTheme;