"use client";
import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "bi bi-server",
      title: "Superb Uptime",
      description:
        "Enjoy uninterrupted access to all premium SEO tools through our robust, self-developed platform, ensuring maximum productivity with 99.9% uptime.",
    },
    {
      icon: "bi bi-headset",
      title: "24/7 Premium Support",
      description:
        "Our dedicated support team is available around the clock via Skype, Live Chat, and Ticket Support to resolve your queries promptly.",
    },
    {
      icon: "bi bi-currency-dollar",
      title: "Unbeatable Low Prices",
      description:
        "Get high-quality service and access to premium SEO tools at the most affordable monthly rates, with transparent pricing and no hidden fees.",
    },
    {
      icon: "bi bi-tools",
      title: "Diverse Tool Access",
      description:
        "Gain access to a wide range of premium SEO, PPC, and Spy accounts, including industry leaders like Moz, Spyfu, Adplexity, and specialized forums.",
    },
    {
      icon: "bi bi-lightning-charge",
      title: "Instant Access",
      description:
        "Start using your chosen SEO tools immediately after payment. Our streamlined process grants you access within seconds, no waiting required.",
    },
    {
      icon: "bi bi-lock",
      title: "Secure & Safe Platform",
      description:
        "Enjoy peace of mind with our secure, self-developed platform. No risky installations or complex VPS setups – just safe, reliable access to your tools.",
    },
  ];

  return (
    <>
    <section className="why-choose-us-area sp" style={{backgroundColor: '#f8f9fa'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 m-auto text-center">
            <div className="heading5">
              <p className="title">
                <span className="span">
                  <Image
                    src="/assets/img/logo/span5.svg"
                    alt="img"
                    width={20}
                    height={20}
                  />{" "}
                  Why Choose Us
                </span>
              </p>
              <h2 className="text-anime-style-3">
                WHY CHOOSE <a href="https://seotoolsgroupbuy.us/" target="_blank" rel="noopener noreferrer" style={{color: '#ff6b35', textDecoration: 'underline'}}>GROUP BUY SEO TOOLS</a>
              </h2>
            </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row justify-content-center">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className="single-choose-box text-center"
                style={{
                  backgroundColor: "#fff",
                  padding: "40px 30px",
                  borderRadius: "15px",
                  marginBottom: "30px",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease-in-out",
                  minHeight: "320px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  border: "1px solid #e9ecef",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  className="icon"
                  style={{
                    fontSize: "48px",
                    color: "#ff6b35",
                    marginBottom: "25px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <i className={feature.icon}></i>
                </div>
                <h4
                  style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    marginBottom: "20px",
                    color: "#333",
                    lineHeight: "1.3"
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: "1.6",
                    margin: "0"
                  }}
                >
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="group-buy-explanation sp" style={{backgroundColor: '#fff', padding: '80px 0'}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto">
            <div className="heading5 text-center">
              <p className="title">
                <span className="span">
                  <Image
                    src="/assets/img/logo/span5.svg"
                    alt="img"
                    width={20}
                    height={20}
                  />{" "}
                  Understanding toolstap
                </span>
              </p>
              <h2 className="text-anime-style-3">
                What are toolstap SEO Tools?
              </h2>
            </div>
            <div className="space30"></div>
            
            <div className="content-section" style={{
              backgroundColor: '#f8f9fa',
              padding: '50px 40px',
              borderRadius: '15px',
              border: '1px solid #e9ecef'
            }}>
              <div className="row">
                <div className="col-lg-8">
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '25px'
                  }}>
                    <strong>toolstap</strong> is a collective purchase of premium SEO tools by users who pool their resources to share the cost. This innovative approach allows each member to access a comprehensive range of premium SEO tools at an affordable price, making enterprise-level tools accessible to everyone.
                  </p>
                  
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '25px'
                  }}>
                    These powerful tools include keyword research tools, backlink analysis tools, rank tracking tools, site audit tools, competitor analysis platforms, and many others. toolstap SEO tools provide small businesses, freelancers, and individual website owners access to premium SEO tools that would be otherwise expensive for them to purchase individually.
                  </p>
                  
                  <p style={{
                    fontSize: '18px',
                    lineHeight: '1.8',
                    color: '#333',
                    marginBottom: '30px'
                  }}>
                    This enables them to optimize their website effectively, improve their search engine ranking, and increase their online visibility without breaking the bank.
                  </p>
                </div>
                
                <div className="col-lg-4">
                  <div className="benefits-box" style={{
                    backgroundColor: '#fff',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                    height: '100%'
                  }}>
                    <h4 style={{
                      color: '#ff6b35',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      marginBottom: '20px'
                    }}>Key Benefits:</h4>
                    <ul style={{listStyle: 'none', padding: '0'}}>
                      <li style={{
                        padding: '8px 0',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        <i className="bi bi-check-circle" style={{color: '#28a745', marginRight: '10px'}}></i>
                        Affordable Premium Tools
                      </li>
                      <li style={{
                        padding: '8px 0',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        <i className="bi bi-check-circle" style={{color: '#28a745', marginRight: '10px'}}></i>
                        Access to 50+ Tools
                      </li>
                      <li style={{
                        padding: '8px 0',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        <i className="bi bi-check-circle" style={{color: '#28a745', marginRight: '10px'}}></i>
                        No Individual Subscriptions
                      </li>
                      <li style={{
                        padding: '8px 0',
                        borderBottom: '1px solid #f0f0f0',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        <i className="bi bi-check-circle" style={{color: '#28a745', marginRight: '10px'}}></i>
                        Perfect for Small Businesses
                      </li>
                      <li style={{
                        padding: '8px 0',
                        fontSize: '16px',
                        color: '#333'
                      }}>
                        <i className="bi bi-check-circle" style={{color: '#28a745', marginRight: '10px'}}></i>
                        Freelancer Friendly
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="row" style={{marginTop: '40px'}}>
                <div className="col-lg-12">
                  <div className="highlight-box" style={{
                    backgroundColor: '#e3f2fd',
                    padding: '30px',
                    borderRadius: '10px',
                    border: '2px solid #2196f3'
                  }}>
                    <h4 style={{
                      color: '#1976d2',
                      fontSize: '20px',
                      fontWeight: 'bold',
                      marginBottom: '15px'
                    }}>
                      <i className="bi bi-lightbulb" style={{marginRight: '10px'}}></i>
                      Why SEO Tools Matter
                    </h4>
                    <p style={{
                      fontSize: '16px',
                      lineHeight: '1.7',
                      color: '#333',
                      margin: '0'
                    }}>
                      SEO is a vital aspect of digital marketing, and it plays a crucial role in improving your website&apos;s visibility and search engine ranking. To achieve better SEO performance, you need the right set of SEO tools to help you analyze and optimize your website effectively. However, buying SEO tools can be expensive, especially for small businesses or individual website owners, and this is where group-buy SEO tools come into play.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default WhyChooseUs;
