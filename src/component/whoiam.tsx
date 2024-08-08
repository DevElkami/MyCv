import { useEffect, useRef } from 'react';
import { Stack, Typography, Link, Card, CardContent, Avatar } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';

interface Props {
    action: React.MouseEventHandler<HTMLDivElement> | undefined;
}

function WhoIam({ action }: Props) {
    const cryptName = useRef(null);
    const cryptNameOrg: string = "TWljaGFlbCBSRUlHTklFUg==";

    const cryptEmail = useRef(null);
    const cryptEmailOrg: string = "bS5yZWlnbmllckBlbGthbWkuZnI=";

    const cryptPhone = useRef(null);
    const cryptPhoneOrg: string = "MDYgNjMgMTEgMjggNzk=";

    useGSAP(() => {        
        gsap.to(document.getElementById("myavatar"), {
            duration: 1.5,
            y: -10,
            repeat: -1,
            yoyo: true
        });
        gsap.to(document.getElementById("cryptName"), { opacity: 1, duration: 5 });
        gsap.to(document.getElementById("cryptEmail"), { opacity: 1, duration: 5 });
        gsap.to(document.getElementById("cryptPhone"), { opacity: 1, duration: 5 });
    });

    useEffect(() => {
        if (cryptName.current) {
            const name: HTMLElement = cryptName.current as HTMLElement;
            if (name && (name.innerHTML != cryptNameOrg))
                name.innerHTML = atob(cryptNameOrg);
        }

        if (cryptEmail.current) {
            const email: HTMLElement = cryptEmail.current;
            if (email && (email.innerHTML != cryptEmailOrg))
                email.innerHTML = atob(cryptEmailOrg);
        }

        if (cryptPhone.current) {
            const phone: HTMLElement = cryptPhone.current;
            if (phone && (phone.innerHTML != cryptPhoneOrg))
                phone.innerHTML = atob(cryptPhoneOrg);
        }
    });

    const handleToggle = (email: string) => {
        window.open(`mailto:${email}`);
    };

    return (
        <Card style={{ border: "2px solid #9C27B0" }}>
            <CardContent>
                <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Stack spacing={{ xs: 4 }}>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <Avatar 
                                onClick={action} 
                                id="myavatar" 
                                sx={{ "&:hover": {
                                      cursor: `pointer`,
                                    },
                                    border: '1.5px solid #9C27B0',
                                    width: 64, height: 64 }} 
                                alt="Dev Elkami" 
                                src="https://github.githubassets.com/assets/starstruck-default-b6610abad518.png" />
                            <Typography sx={{ opacity: 0 }} id="cryptName" variant="h5" component="div" ref={cryptName}></Typography>
                        </Stack>
                        <Typography variant="subtitle1" color="text.secondary" align="left">Senior C# developer.</Typography>
                    </Stack>

                    <Stack spacing={{ xs: 1 }}>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <EmailIcon color="secondary" />
                            <Link target="_blank" rel="noreferrer" underline="hover">
                            <Typography  
                                sx={{
                                    "&:hover": {
                                      cursor: `pointer`,
                                    },
                                    opacity: 0 
                                  }}
                                id="cryptEmail" 
                                variant="subtitle1" 
                                component="div" 
                                ref={cryptEmail}  
                                onClick={() => 
                                {
                                    if (cryptEmail.current) 
                                    {
                                        const email: HTMLElement = cryptEmail.current;
                                        handleToggle(email.innerHTML)
                                    }
                                }
                                }>
                            </Typography>
                            </Link>
                        </Stack>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <LocalPhoneIcon color="secondary" />
                            <Typography sx={{ opacity: 0 }} id="cryptPhone" variant="subtitle1" component="div" ref={cryptPhone}></Typography>
                        </Stack>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <GitHubIcon color="secondary" />
                            <Link target="_blank" rel="noreferrer" underline="hover" href="https://github.com/DevElkami">https://github.com/DevElkami</Link>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default WhoIam;