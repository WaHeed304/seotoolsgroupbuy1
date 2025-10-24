import React from 'react';
import Image from 'next/image';
import HeroBanner5 from '../Components/HeroBanner/HeroBanner5';
import About5 from '../Components/About/About5';
import ContactIno3 from '../Components/ContactInfo/ContactIno3';
import Pricing5 from '../Components/Pricing/Pricing5';
import WhyChooseUs from '../Components/WhyChooseUs/WhyChooseUs';
import Blog5 from '../Components/Blog/Blog5';
import Testimonial7 from '../Components/Testimonial/Testimonial7';

const page = () => {
    return (
        <div>
            <HeroBanner5
                subtitle="toolstap"
                title="Best Group Buy SEO Tools Service"
                content="Our SEO tools group buy offers access to top-rated tools like SEMrush, Ahrefs, Moz, and many more shared SEO tools at cheap prices."
                img1="/assets/img/hero/hero5-img1.png"
                img2="/assets/img/hero/hero5-img2 (1).png"
                shape1="/assets/img/shapes/hero5-shape1.png"
                shape2="/assets/img/shapes/hero5-shape2.png"
                shape3="/assets/img/shapes/hero5-shape2.png"
            ></HeroBanner5>  
            <About5
                shape="/assets/img/shapes/about1-bg-shape.png"
                img1="/assets/img/about/about5-img1.png"
                img2="/assets/img/about/about5-img2.png"
                subtitle="SEO Group Buy Service"
                title="Group Buy SEO Tools Provider"
                content="Welcome to Toolstap.com — your go-to destination for affordable and reliable SEO tools. <br> Our group buy SEO tools service gives you access to premium tools like SEMrush, Ahrefs, Moz, and many more at super competitive prices. <br> With our group buy service, you save money and still get the best SEO tools in the game. <br> We care about customer satisfaction and offer excellent support so you can get the most out of your tools. <br> Our services are perfect for small businesses and independent marketers who want to level up their online presence without breaking the bank."
                FeatureList={[
                    "Tools with highest uptime",
                    "24-Hour Customer Service",
                    "30-Days Money-Back Guarantee",
                    "Affordable pricing for everyone"
                ]}
                btnname="Get 7 Days Trial Now"
                btnurl="/pricing"
            ></About5> 
            <Pricing5></Pricing5>
            
            {/* About Our SEO Tools Section */}
            <section className="about-seo-tools" style={{
                padding: '80px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading5">
                                <p className="title" data-aos="fade-left" data-aos-duration="800">
                                    <span className="span">
                                        <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20} />
                                        About Our SEO Tools
                                    </span>
                                </p>
                                <h2 className="text-anime-style-3">Toolstap provides shared access to top SEO tools</h2>
                                <p style={{fontSize: '18px', color: '#666', marginTop: '20px', lineHeight: '1.6'}}>
                                    Toolstap provides shared access to top SEO tools like Ahrefs, SEMrush, Moz, Grammarly, WordAI, Canva, and more.
                                    These tools help users perform keyword research, backlink analysis, content optimization, and competitor tracking.
                                    By joining our group buy, you can save huge costs while still accessing premium-level SEO data and insights.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-box" style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                marginBottom: '30px'
                            }}>
                                <div className="icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#ff6b35',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="bi bi-currency-dollar" style={{fontSize: '24px', color: 'white'}}></i>
                                </div>
                                <h4 style={{marginBottom: '15px', fontSize: '18px', fontWeight: 'bold'}}>Affordable pricing for everyone</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-box" style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                marginBottom: '30px'
                            }}>
                                <div className="icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#ff6b35',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="bi bi-shield-check" style={{fontSize: '24px', color: 'white'}}></i>
                                </div>
                                <h4 style={{marginBottom: '15px', fontSize: '18px', fontWeight: 'bold'}}>99% uptime on most tools</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-box" style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                marginBottom: '30px'
                            }}>
                                <div className="icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#ff6b35',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="bi bi-tools" style={{fontSize: '24px', color: 'white'}}></i>
                                </div>
                                <h4 style={{marginBottom: '15px', fontSize: '18px', fontWeight: 'bold'}}>Access to multiple premium tools in one plan</h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="feature-box" style={{
                                textAlign: 'center',
                                padding: '30px 20px',
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                                marginBottom: '30px'
                            }}>
                                <div className="icon" style={{
                                    width: '60px',
                                    height: '60px',
                                    backgroundColor: '#ff6b35',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 20px'
                                }}>
                                    <i className="bi bi-headset" style={{fontSize: '24px', color: 'white'}}></i>
                                </div>
                                <h4 style={{marginBottom: '15px', fontSize: '18px', fontWeight: 'bold'}}>Customer support available 24/7</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUs></WhyChooseUs>
            <section className="process-steps" style={{
                padding: '50px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <div className="container">
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        marginBottom: '40px',
                        color: '#333'
                    }}>WELCOME TO <a href="https://seotoolsgroupbuy.us/" target="_blank" rel="noopener noreferrer" style={{color: '#ff6b35', textDecoration: 'underline'}}>toolstap</a> BEST IN THE WORLD</h2>
                    <div className="steps-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '30px'
                    }}>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>1</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Select the package</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>Check The Pricing Table to findout your Needy Seo and Spy Tools Like Moz, Alexa.</p>
                        </div>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>2</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Fill Signup Form</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>Complete Signup Form with your Details including Working mail and password</p>
                        </div>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>3</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Complete Purchase</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>After Filling the Signup Form Select Your Plan and make payment</p>
                        </div>
                        <div className="step" style={{
                            textAlign: 'center',
                            padding: '40px 30px',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            borderRadius: '15px',
                            color: 'white',
                            border: '2px solid #fff',
                            boxShadow: '0 8px 25px rgba(102, 126, 234, 0.3)'
                        }}>
                            <div className="step-icon" style={{
                                width: '80px',
                                height: '80px',
                                background: 'rgba(255,255,255,0.2)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 25px',
                                border: '2px solid rgba(255,255,255,0.5)',
                                backdropFilter: 'blur(10px)'
                            }}>
                                <span style={{fontSize: '32px', color: 'white', fontWeight: 'bold'}}>4</span>
                            </div>
                            <h3 style={{marginBottom: '15px', fontSize: '22px', fontWeight: 'bold', color: 'white'}}>Instant Access</h3>
                            <p style={{marginBottom: '0', fontSize: '16px', lineHeight: '1.6', color: 'white'}}>After Payment you will Have Instant Access in some Seconds.</p>
                        </div>
                    </div>
                </div>
            </section>  
            <Testimonial7></Testimonial7>  
            <Blog5></Blog5>
            
            {/* FAQ Section */}
            <section className="faq-section" style={{
                padding: '80px 0',
                backgroundColor: 'white'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading5">
                                <p className="title" data-aos="fade-left" data-aos-duration="800">
                                    <span className="span">
                                        <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20} />
                                        Frequently Asked Questions
                                    </span>
                                </p>
                                <h2 className="text-anime-style-3">Frequently Asked Questions (FAQ)</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="faq-item" style={{
                                marginBottom: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                padding: '25px',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: '#333'}}>1. What is a group buy SEO tool?</h4>
                                <p style={{marginBottom: '0', color: '#666', lineHeight: '1.6'}}>A group buy SEO tool is a shared access service where multiple users share the cost of premium SEO tools, making them more affordable.</p>
                            </div>
                            <div className="faq-item" style={{
                                marginBottom: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                padding: '25px',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: '#333'}}>2. Are these tools safe to use?</h4>
                                <p style={{marginBottom: '0', color: '#666', lineHeight: '1.6'}}>Yes, Toolstap ensures all tools are accessed safely using secure methods.</p>
                            </div>
                            <div className="faq-item" style={{
                                marginBottom: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                padding: '25px',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: '#333'}}>3. How can I get started?</h4>
                                <p style={{marginBottom: '0', color: '#666', lineHeight: '1.6'}}>Just pick a plan, complete the payment, and get instant access to your selected tools.</p>
                            </div>
                            <div className="faq-item" style={{
                                marginBottom: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                padding: '25px',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: '#333'}}>4. What payment methods do you accept?</h4>
                                <p style={{marginBottom: '0', color: '#666', lineHeight: '1.6'}}>We accept multiple payment methods including PayPal, credit cards, and local payment options.</p>
                            </div>
                            <div className="faq-item" style={{
                                marginBottom: '20px',
                                backgroundColor: '#f8f9fa',
                                borderRadius: '10px',
                                padding: '25px',
                                border: '1px solid #e9ecef'
                            }}>
                                <h4 style={{marginBottom: '10px', fontSize: '18px', fontWeight: 'bold', color: '#333'}}>5. Can I cancel anytime?</h4>
                                <p style={{marginBottom: '0', color: '#666', lineHeight: '1.6'}}>Yes, you can cancel anytime and we also provide a 30-day money-back guarantee.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information Section */}
            <section className="contact-info-section" style={{
                padding: '80px 0',
                backgroundColor: '#f8f9fa'
            }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading5">
                                <h2 className="text-anime-style-3">Contact Information</h2>
                                <p style={{fontSize: '18px', color: '#666', marginTop: '20px', lineHeight: '1.6'}}>
                                    If you have any questions or issues, feel free to contact our support team.
                                    We&apos;re available 24/7 to help you make the most out of your SEO journey.
                                </p>
                                <div style={{marginTop: '30px'}}>
                                    <h4 style={{fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '10px'}}>Website: Toolstap.com</h4>
                                    <p style={{fontSize: '16px', color: '#666'}}>Get instant access to premium SEO tools at affordable prices!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <ContactIno3></ContactIno3>                           
        </div>
    );
};

export default page;