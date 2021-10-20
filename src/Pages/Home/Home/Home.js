import React from 'react';
import LabTechnicians from '../../LabTechnicians/LabTechnicians';
import OurTeam from '../../OurTeam/OurTeam';

import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <OurTeam></OurTeam>
            <LabTechnicians></LabTechnicians>
        </div>
    );
};

export default Home;