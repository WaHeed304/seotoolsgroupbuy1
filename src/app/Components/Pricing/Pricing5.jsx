import Image from "next/image";
import PricingCard3 from "../Card/PricingCard3";

const Pricing5 = () => {
    return (
<div className="pricing5 sp">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 m-auto text-center">
          <div className="heading5">
          <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
          <Image src="/assets/img/logo/span5.svg" alt="img" width={20} height={20}   />
            Pricing plan</span></p>
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
                    "+more"
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
                    "+more"
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
                    "+more"
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
                    "+more"
                ]}
                price="$50"
                pricename="Month"
                btnurl="https://members.seotoolsgroupbuy.us/signup"
                btnname="Buy Now"
            ></PricingCard3>
        </div>

      </div>
      <div className="space30"></div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <a href="https://seotoolsgroupbuy.us/pricing-plans/" className="theme-btn3" style={{display: 'inline-block', padding: '15px 30px'}} target="_blank" rel="noopener noreferrer">
            View Full Tools List <span><i className="bi bi-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>
   </div>
    );
};

export default Pricing5;