import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';
import './Footer.css'


const Footer = () => {

    return (
        <div className='footer'>
            <div>
                <h2>Join Us</h2>
                <div>
                    <FacebookIcon style={{ marginRight: '50px' }}></FacebookIcon>
                    <InstagramIcon style={{ marginRight: '50px' }}></InstagramIcon>
                    <TwitterIcon style={{ marginRight: '50px' }}></TwitterIcon>
                    <LinkedInIcon style={{ marginRight: '50px' }}></LinkedInIcon>
                </div>
            </div>
            <div>
                <p><CopyrightIcon style={{ fontSize: '16px' }}></CopyrightIcon> 2021 Sheba, All Rights Reserved. Design By Md Mozammel Hossain</p>
            </div>
        </div >
    );
};

export default Footer;