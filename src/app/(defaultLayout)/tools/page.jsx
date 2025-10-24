import BreadCumb from '@/app/Components/Common/BreadCumb';
import Services4 from '@/app/Components/Services/Services4';
import Benefits from '@/app/Components/Benefits/Benefits';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Our SEO Tools"
            ></BreadCumb>
            <Services4></Services4>
            <Benefits></Benefits>
            <ContactInfo4></ContactInfo4>               
        </div>
    );
};

export default page;

