import { useEffect, useRef } from 'react';
import { Stack, Typography, Card, CardContent, Avatar } from "@mui/material";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';

function WhoIam() {
    const cryptName = useRef(null);
    const cryptNameOrg: string = "TWljaGFlbCBSRUlHTklFUg==";

    const cryptEmail = useRef(null);
    const cryptEmailOrg: string = "bS5yZWlnbmllckBlbGthbWkuZnI=";

    const cryptPhone = useRef(null);
    const cryptPhoneOrg: string = "MDYgNjMgMTEgMjggNzk=";

    useGSAP(() => {
        gsap.fromTo(document.getElementById("myavatar"), { rotation: "-=40" },  { duration: 3, transformOrigin: "50% 50%", repeat: 0, rotation: "+=40", opacity: 1, ease: "bounce" });
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

    return (
        <Card>
            <CardContent>
                <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Stack spacing={{ xs: 4 }}>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <Avatar id="myavatar" sx={{ width: 64, height: 64 }} alt="Dev Elkami" src="https://github.githubassets.com/assets/starstruck-default-b6610abad518.png" />
                            <Typography sx={{ opacity: 0 }} id="cryptName" variant="h5" component="div" ref={cryptName}></Typography>
                        </Stack>
                        <Typography variant="subtitle1" color="text.secondary" align="left">Senior C# developer.</Typography>
                    </Stack>

                    <Stack spacing={{ xs: 1 }}>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <EmailIcon color="secondary" />
                            <Typography sx={{ opacity: 0 }} id="cryptEmail" variant="subtitle1" component="div" ref={cryptEmail}></Typography>
                        </Stack>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <LocalPhoneIcon color="secondary" />
                            <Typography sx={{ opacity: 0 }} id="cryptPhone" variant="subtitle1" component="div" ref={cryptPhone}></Typography>
                        </Stack>
                        <Stack spacing={{ xs: 1 }} direction="row" alignItems="center">
                            <GitHubIcon color="secondary" />
                            <Typography variant="subtitle1" component="div">https://github.com/DevElkami</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default WhoIam;