import React from 'react'

function Footer() {
  return (
    <>
      

      <footer className="cs_footer background-filled text-white" data-src="/assets/img/footer_bg.jpeg" style={{ backgroundImage: `url(assets/img/footer_bg.jpeg)`}}>
        <div className="container">
          <div className="cs_footer_top d-flex justify-content-between align-items-start align-items-md-center cs_pt_46 cs_pb_46 cs_column_gap_15 cs_row_gap_15 flex-md-row  flex-column">
            <div className="cs_footer_contact_info">
              <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">Have Any Question?</h3>
              <h2 className="text-white fw-medium m-0 cs_fs_22">+ 070 4531 9507 </h2>
            </div>
            <div className="cs_footer_logo wow zoomIn" data-wow-duration="0.8s" data-wow-delay="0.2s"><img src="assets/img/logo.svg" alt="Logo" /></div>
            <div className="cs_footer_contact_info">
              <h3 className="text-accent fw-normal cs_mb_4 cs_fs_16 cs_lh_lg">Send Email</h3>
              <h2 className="text-white fw-medium m-0 cs_fs_22"><a href="mailto:bizmax@laralink.com">bizmax@laralink.com</a></h2>
            </div>
          </div>
          <div className="cs_footer_main cs_pt_30 cs_pb_30">
            <div className="row">
              <div className="col-lg-4">
                <div className="cs_footer_item cs_pt_20 cs_pb_20">
                  <div className="cs_text_widget">
                    <p>I've been using [business name] for the past year and I'm so glad I did. Their products and services are top-notch and their customer service is amazing. I would highly recommend them to anyone</p>
                  </div>
                  <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5">
                    <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"><i className="fa-brands fa-facebook-f" /></a>
                    <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"><i className="fa-brands fa-twitter" /></a>
                    <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"><i className="fa-brands fa-linkedin-in" /></a>
                    <a href="#" className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"><i className="fa-brands fa-dribbble" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="cs_footer_item cs_pt_20 cs_pb_20">
                  <h2 className="cs_widget_title text-white cs_fs_22 cs_mb_22">Explore</h2>
                  <ul className="cs_menu_widget text-uppercase">
                    <li><a href="about.html">About</a></li>
                    <li><a href="portfolio.html">Portfolio</a></li>
                    <li><a href="service.html">Services</a></li>
                    <li><a href="#">Support </a></li>
                    <li><a href="pricing.html">Pricing Page</a></li>
                    <li><a href="portfolio.html">New Projects</a></li>
                    <li><a href="blog-list-with-sidebar.html">Blog</a></li>
                    <li><a href>Privacy Policy</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="cs_footer_item cs_pt_20 cs_pb_20">
                  <div className="cs_newsletter cs_style_1">
                    <h2 className="cs_newsletter_title text-white cs_fs_22 cs_mb_9">Newsletter</h2>
                    <p className="cs_newsletter_subtitle cs_mb_26"> At vero eos et accusamus et iusto odio as part dignissimos ducimus qui blandit. </p>
                    <form action="#" className="cs_newsletter_form position-relative">
                      <input type="email" className="cs_newsletter_input text-white cs_fs_14 cs_rounded_5 border-0 w-100 cs_pt_10" placeholder="Enter your mail" />
                      <button className="cs_newsletter_btn cs_fs_14 cs_rounded_5 cs_transition_4 bg-accent position-absolute text-uppercase">
                        <span>Go</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cs_copyright text-center cs_fs_124 cs_lh_lg cs_pt_36 cs_pb_36">
          <div className="container">
            <p className="m-0">Copyright © 2023 <a href="index.html">bizmax</a>. All rights reserved.</p>
          </div>
        </div>
      </footer>
   
    </>
  )
}

export default Footer
