import BreadCumb from '@/app/Components/Common/BreadCumb';
import ContactInfo4 from '@/app/Components/ContactInfo/ContactInfo4';
import PricingCard3 from '@/app/Components/Card/PricingCard3';
import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
        <div>
            <BreadCumb
                bgimg="/assets/img/bg/comon-hero-bg.jpg"
                Title="Pricing Plan"
            ></BreadCumb>         
            
            <div className="pricing5 sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading5">
                                <p className="title" data-aos="fade-left" data-aos-duration="800">
                                    <span className="span">
                                        <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20} />
                                        Full Tools List
                                    </span>
                                </p>
                                <h2 className="text-anime-style-3">toolstap Complete Pricing Plans</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30"></div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <PricingCard3
                                addclass="pricing-box"
                                title="Lite Plan"
                                content=""
                                FeatureList={[
                                    "SEMrush",
                                    "Canva",
                                    "Grammarly",
                                    "Woorank",
                                    "Spin Rewriter",
                                    "Ubersuggest",
                                    "Ispionage",
                                    "StockUnlimited",
                                    "CBEngine",
                                    "Buzzstream",
                                    "Unbounce",
                                    "Quillbot AI"
                                ]}
                                price="$10"
                                pricename="Month"
                                btnurl="https://members.seotoolsgroupbuy.us/signup"
                                btnname="Buy Now"
                            ></PricingCard3>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <PricingCard3
                                addclass="pricing-box active"
                                title="Small Plan"
                                content=""
                                FeatureList={[
                                    "SEMrush",
                                    "Moz Pro",
                                    "Majestic",
                                    "Ubersuggest",
                                    "Spyfu",
                                    "Ispionage",
                                    "KwFinder",
                                    "Pexda",
                                    "SaleHoo",
                                    "StockUnlimited",
                                    "Spin Rewriter",
                                    "Grammarly",
                                    "Buzzsumo",
                                    "Indexifications",
                                    "Lynda",
                                    "Woorank",
                                    "Envato Elements",
                                    "Skills Share",
                                    "Spamzilla",
                                    "Cognitive SEO",
                                    "Canva Pro",
                                    "Crello",
                                    "CBEngine",
                                    "Buzzstream",
                                    "Vyond",
                                    "LongTailPro",
                                    "Article Builder",
                                    "WordAi",
                                    "Seo Profiler",
                                    "SE Ranking",
                                    "Themes/Plugin WordPress",
                                    "Spinner Português",
                                    "Fotojet",
                                    "Audioblocks",
                                    "Storyblocks",
                                    "Videoblocks",
                                    "Unbounce",
                                    "Quillbot",
                                    "Chat GPT"
                                ]}
                                price="$15"
                                pricename="Month"
                                btnurl="https://members.seotoolsgroupbuy.us/signup"
                                btnname="Buy Now"
                            ></PricingCard3>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <PricingCard3
                                addclass="pricing-box"
                                title="Ahref$ Combo"
                                content=""
                                FeatureList={[
                                    "AHREF$",
                                    "SEMR$H guru",
                                    "M0Z PR0",
                                    "Majestic",
                                    "Kwfinder",
                                    "Keywordtool i0",
                                    "Grammarly",
                                    "Helium 10",
                                    "Jungle Scout",
                                    "Chat GPT",
                                    "Spyfu",
                                    "EcomHunt",
                                    "Ispionage",
                                    "Pexda",
                                    "SaleHoo",
                                    "StockUnlimited",
                                    "Spin Rewriter",
                                    "Buzzsumo",
                                    "Netflix",
                                    "Indexifications",
                                    "Lynda",
                                    "Woorank",
                                    "Envato Elements",
                                    "Skills Share",
                                    "Freepik",
                                    "Spamzilla",
                                    "Cognitive SEO",
                                    "Canva Pro",
                                    "Crello",
                                    "CBEngine",
                                    "Buzzstream",
                                    "Sellthetrend",
                                    "Vyond",
                                    "LongTailPro",
                                    "Article Builder",
                                    "WordAi",
                                    "Seo Profiler",
                                    "SE Ranking",
                                    "Themes/Plugin WordPress",
                                    "Spinner Português",
                                    "Fotojet",
                                    "Audioblocks",
                                    "Storyblocks",
                                    "Videoblocks",
                                    "Unbounce",
                                    "Jasper Ai",
                                    "Quillbot",
                                    "Chat GPT"
                                ]}
                                price="$25"
                                pricename="Month"
                                btnurl="https://members.seotoolsgroupbuy.us/signup"
                                btnname="Buy Now"
                            ></PricingCard3>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <PricingCard3
                                addclass="pricing-box"
                                title="Mega Plan"
                                content=""
                                FeatureList={[
                                    "Ahrefs",
                                    "SEMrush",
                                    "Moz Pro",
                                    "Ubersuggest",
                                    "Majestic",
                                    "keywordtool.io",
                                    "KwFinder",
                                    "Grammarly",
                                    "Helium 10",
                                    "Jungle Scout",
                                    "Chat GPT",
                                    "Spyfu",
                                    "EcomHunt",
                                    "Ispionage",
                                    "Pexda",
                                    "SaleHoo",
                                    "StockUnlimited",
                                    "Spin Rewriter",
                                    "Buzzsumo",
                                    "Netflix",
                                    "Indexifications",
                                    "Lynda",
                                    "Woorank",
                                    "Envato Elements",
                                    "Skills Share",
                                    "Freepik",
                                    "Spamzilla",
                                    "Cognitive SEO",
                                    "Canva Pro",
                                    "Crello",
                                    "CBEngine",
                                    "Buzzstream",
                                    "Sellthetrend",
                                    "Vyond",
                                    "LongTailPro",
                                    "Article Builder",
                                    "WordAi",
                                    "Seo Profiler",
                                    "SE Ranking",
                                    "Themes/Plugin WordPress",
                                    "Spinner Português",
                                    "Fotojet",
                                    "Audioblocks",
                                    "Storyblocks",
                                    "Videoblocks",
                                    "Unbounce",
                                    "Jasper Ai",
                                    "Quillbot",
                                    "Chat GPT"
                                ]}
                                price="$50"
                                pricename="Month"
                                btnurl="https://members.seotoolsgroupbuy.us/signup"
                                btnname="Buy Now"
                            ></PricingCard3>
                        </div>
                    </div>
                </div>
            </div>

            <ContactInfo4></ContactInfo4>               
        </div>
    );
};

export default page;