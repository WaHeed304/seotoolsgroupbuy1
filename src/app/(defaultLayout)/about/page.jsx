import About1 from '@/app/Components/About/About1';
import About4 from '@/app/Components/About/About4';
import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import Skill from '@/app/Components/Skill/Skill';
import Testimonial1 from '@/app/Components/Testimonial/Testimonial1';
import MissionVision from '@/app/Components/MissionVision/MissionVision';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="About toolstap"
            ></BreadCumb> 
            <About1
                img1="/assets/img/about/about1-main-img.png"
                img2="/assets/img/about/about1-shape1.png"
                img3="/assets/img/about/about1-shape2.png"
                subtitle="ABOUT toolstap"
                title="Your Reliable Partner for Affordable and High-Quality SEO Tools"
                content="We are the best provider of toolstap SEO tools that help small businesses, enterprises, and bloggers to rank at the top. With our premium SEO tools, you can analyze your websites and remove problems/bugs. Choose your pricing plan and start ranking your business effectively."
                FeatureList={[
                    "Access to 50+ Premium SEO Tools",
                    "99.9% Platform Uptime Guarantee",
                    "24/7 Customer Support",
                    "Affordable toolstap Pricing"
                ]}
                btnurl="/pricing"
                btnname="View Pricing Plans"
            ></About1>  
            <About4
                subtitle="Our Mission & Vision"
                title="Democratizing Access to Premium SEO Tools for Everyone"
                content="We offer services to UK, US, Canada, Europe, and Asia. Our aim is to help businesses that are unable to afford SEO tools—that's why we offer SEO tools group buy at affordable rates. Our group buy SEO tools help you improve website rankings and find top-selling items in the market."
                list1="Global Service Coverage"
                list2="Affordable Premium Tools"
                img1="/assets/img/about/about2-main-img.png"
                img2="/assets/img/about/about1-shape1.png"
                img3="/assets/img/about/about1-shape2.png"
            ></About4>
             <Skill></Skill>
             <MissionVision></MissionVision>
            <Testimonial1></Testimonial1>  
            <ContactInfo4></ContactInfo4>                                                
        </div>
    );
};

export default page;