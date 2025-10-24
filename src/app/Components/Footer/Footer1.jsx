import Image from "next/image";
import Link from "next/link";

const Footer1 = ({addclass,footerlogo}) => {
    return (
<div className={addclass}>
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="heading1">
            <Link href="/" className="logo">
              <div className="logo-text" style={{fontSize: '20px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap'}}>
                <span style={{fontSize: '24px', color: '#ff6b35'}}>G</span>
                <span style={{color: '#000'}}>GROUP BUY SEO TOOLS</span>
              </div>
            </Link>
            <p>At GROUP BUY SEO TOOLS, we provide access to premium SEO tools at toolstap prices, helping you save thousands while accessing industry-leading tools.</p>
            <div className="form-area">
              <input type="text" placeholder="Email Address" />
              <button type="submit" className="form-btn"><i className="bi bi-arrow-right"></i></button>
            </div>
          </div>
        </div>
        <div className="col-lg col-6">
          <div className="menu-list">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/pricing">Pricing Plan</Link></li>
              <li><Link href="/tools">Our Tools</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-6">
          <div className="menu-list">
            <h3>Popular Tools</h3>
            <ul>
              <li><Link href="/tools">Ahrefs Access</Link></li>
              <li><Link href="/tools">SEMrush Tools</Link></li>
              <li><Link href="/tools">Moz Pro</Link></li>
              <li><Link href="/tools">Screaming Frog</Link></li>
              <li><Link href="/tools">Keyword Tools</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-6">
          <div className="menu-list">
            <h3>Resources</h3>
            <ul>
              <li><Link href="/blog/group-buy-seo-tools">SEO Tools Guide</Link></li>
              <li><Link href="/blog/ahrefs-vs-semrush-vs-moz">Tool Comparisons</Link></li>
              <li><Link href="/blog/maximize-roi-seo-tools">Maximize ROI</Link></li>
              <li><Link href="/testimonial">Testimonials</Link></li>
              <li><Link href="/contact">Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="col-lg col-6">
          <div className="menu-list contact-list">
            <h3>Contact Us</h3>
            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon3.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <a href="mailto:admin@groupbuyseotool.us">admin@groupbuyseotool.us</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon1.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <a href="https://wa.me/15205636362">+1 (520) 563‑6362</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon1.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <a href="skype:seogroupbuy.support?chat">seogroupbuy.support</a>
              </div>
            </div>

            <div className="contact-box">
              <div className="icon">
              <Image src="/assets/img/icons/footer-contact-icon1.svg" alt="img" width={24} height={24}   />
              </div>
              <div className="pera">
                <p>24/7 Support Available</p>
              </div>
            </div>

          </div>
        </div>

      </div>

      <div className="space40"></div>
      <div className="footer-border"></div>
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="coppyright">
            <p>Copyright 2024 GROUP BUY SEO TOOLS Theme By FleexStudio  |  All Right Reserved</p>
          </div>
        </div>
        <div className="col-lg-6">
          <ul className="footer-social">
                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="space20"></div>
   </div>

    );
};

export default Footer1;