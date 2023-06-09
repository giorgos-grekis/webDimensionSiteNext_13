import React from 'react'

const Footer = () => {
    return (
        <div>

            <footer className="page_footer corner-footer ds s-pt-30 s-pb-0 s-pb-lg-10 s-pb-xl-50 c-gutter-60 s-parallax">

                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="divider-20 d-none d-xl-block"></div>
                            <div className="col-md-12 mt-4 text-center" data-animation="fadeInUp">
                                {/* <img className="margin-negative" src={this.props.data.drupal.footerlogo.fieldImage.imageFile.publicURL} alt="footlogo" /> */}
                                <img className="margin-negative" src={'https://picsum.photos/322/175'} alt="footlogo" />
                                <div className="widget widget_social_buttons">
                                    <a target="_blank" href="https://www.facebook.com/webdimension.gr/" className="fa fa-facebook color-icon" title="facebook"></a>
                                    <a target="_blank" href="https://twitter.com/web_dimension " className="fa fa-twitter color-icon" title="twitter"></a>
                                    <a target="_blank" href="https://goo.gl/maps/iasMuAYstvyC7fuL9 " className="fa fa-google color-icon" title="google"></a>

                                    <a target="_blank" href="https://www.linkedin.com/company/10468039/admin/" className="fa fa-linkedin color-icon" title="linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <section className="page_copyright light-copy cs s-py-20 s-py-lg-5 s-parallax copyright">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="divider-20 d-none d-lg-block"></div>
                        <div className="col-md-12 text-center">
                            <p className="text-center">Copyright &copy;
                                <span className="copyright_year">{" " + new Date().getFullYear()}</span> WebDimension All Rights Reserved</p>
                        </div>
                        <div className="divider-20 d-none d-lg-block"></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer