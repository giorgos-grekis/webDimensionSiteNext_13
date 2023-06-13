import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home(props) {
  return (
    <main className={styles.main}>

      {/* homepage */}
      <section className="page_slider main_slider">
        <div className="flexslider" data-nav="true" data-dots="false">
          <ul className="slides">
            {props?.data?.drupal?.nodeslider?.entities?.map((item, i) => {
              var pos = String(i + 1)
              var videoid = ""
              if (item.fieldBackground.entity.fieldMediaOembedVideo) {
                var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = item.fieldBackground.entity.fieldMediaOembedVideo.match(regExp);
                if (match && match[2].length == 11) {
                  videoid = match[2]
                  console.log(videoid)
                } else {
                  console.log("REGEX YOUTUBE failed")
                }
              }
              return (

                <li style={{ backgroundImage: `url(${item.fieldBackground.entity.thumbnail.imageFile.publicURL})`, backgroundSize: 'cover' }} key={i} className={`ds  text-center  slide${pos}`} >
                  <span className="flexslider-overlay"></span>

                  {item.fieldBackground.entity.thumbnail ? <img className="slideimage" style={{ maxHeight: '900px' }} src={item.fieldBackground.entity.thumbnail.imageFile.publicURL} alt={item.fieldBackground.entity.thumbnail.alt} />
                    : <span className="embed-responsive embed-responsive-16by9 embed-custom"> <iframe style={{ maxHeight: '900px' }} src={`https://www.youtube.com/embed/${videoid}?feature=oembed&;showinfo=0&;autoplay=1&;controls=0&;mute=1&;loop=1&playlist=UBufeh1yv2c;`} allowFullScreen={undefined}></iframe></span>
                  }

                  <div className="container">
                    <div className="row">
                      <div className="col-12 itro_slider">
                        <div className="intro_layers_wrapper">
                          <div className="intro_layers">

                            {/* <div dangerouslySetInnerHTML={{ __html: item.body.processed }} /> */}




                            <div className="intro_layer page-bottom" data-animation="expandUp" style={{ visibility: 'hidden' }}>
                              <Link href={item.fieldButton[0].url.path + '/'} className="btn btn-maincolor" >{item.fieldButton[0].title}</Link>
                            </div>
                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </li>
              )
            })}


          </ul>

        </div>

        <div className="flexslider-bottom d-none d-xl-block">

          <a href="#about" className="mouse-button animated floating"></a>
        </div>
      </section>

      <div className="divider-10 d-block d-sm-none"></div>

      <section className="s-pt-30 s-pt-lg-50 s-pt-xl-25 ls about-home" id="about">
        <div className="divider-5 d-none d-xl-block"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">


              <div className="main-content text-center">
                <div className="img-wrap text-center">
                  <img src="/vertical_line.png" alt="" />
                  <div className="divider-35"></div>
                </div>
                <h5>
                  {props.data?.drupal.nodeintro.title}
                </h5>

                {/* <div dangerouslySetInnerHTML={{ __html: props.data?.drupal.nodeintro.body.processed }} /> */}

                
                <div className="divider-30"></div>
                <div className="img-wrap text-center">
                  <img src="/vertical_line.png" alt="" />
                </div>
                <div>
                  <div className="divider-40"></div>
                  <Link href={props.data?.drupal.nodeintro.fieldButton[0].url.path + '/'}><button type="button" className="btn btn-outline-maincolor">{props.data?.drupal.nodeintro.fieldButton[0].title}</button></Link>
                  <div className="divider-40"></div>
                </div>
                <div className="img-wrap text-center">
                  <img src="/vertical_line.png" alt="" />
                </div>
                <div className="divider-10 d-none d-xl-block"></div>
              </div>



            </div>
          </div>
        </div>
        <div className="divider-10 d-block d-sm-none"></div>
      </section>



      <section className="s-pt-30 s-pb-3 service-item2 ls" id="services" data-animation="fadeInUp">
        <div className="container">
          <div className="row c-mb-50 c-mb-md-60">
            <div className="d-none d-lg-block divider-20"></div>
            {props?.data?.drupal?.nodeserv?.entities?.map((item, i) => {
              return (
                <div key={i} className="col-12 col-md-6 col-lg-4">
                  <div className="vertical-item text-center">
                    <div className="item-media">
                      {item.fieldImageIcon ? <img src={item.fieldImageIcon.imageFile.publicURL} alt={item.fieldImageIcon.alt} /> : <img src='https://loremflickr.com/200/200' alt="" />}
                    </div>
                    <div className="item-content">
                      <h6>
                        <Link href={item.entityUrl.path + '/'}><span>{item.title}</span></Link>
                      </h6>

                      <p>
                        {item.body.summary}
                      </p>

                    </div>
                  </div>
                </div>
              )
            })}




          </div>
          <div className="pink-line text-center">
            <img src="/pink_line_big.png" alt="" />
          </div>
        </div>
      </section>

      <section className="s-pt-100 s-pt-lg-130 ds process-part skew_right s-parallax top_white_line_big overflow-visible" id="steps">
        <div className="container">
          <div className="divider-65"></div>
          {props?.data?.drupal?.nodesteps?.entities?.map((item, i) => {
            console.log(i % 2 == 0)
            if (i % 2 == 0) {
              return (
                <div key={i} className="row align-items-center c-mb-20 c-mb-lg-60">
                  <div className="col-12 col-lg-4">
                    <div className="step-left-part text-right">
                      <h2 className="step-title">
                        <span className={i === 0 ? "color-main" : `color-main${String(i + 1)}`}>0{String(i + 1)}</span>{item.title}</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="step-center-part text-center">
                      <img src={item.fieldImage.imageFile.publicURL} alt={item.fieldImage.alt} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4">
                    <div className="step-right-part">
                      {/* <div dangerouslySetInnerHTML={{ __html: item.body.processed }} className="step-text"></div> */}
                    </div>
                  </div>
                </div>
              )
            }
            else {
              return (
                <div key={i} className="row align-items-center right c-mb-20 c-mb-lg-60">
                  <div className="col-12 col-lg-4  order-lg-3">
                    <div className="step-left-part">
                      <h2 className="step-title color1">
                        <span className={`color-main${String(i + 1)}`}>0{String(i + 1)}</span>{item.title}</h2>
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 order-lg-2">
                    <div className="step-center-part text-center">
                      <img src={item.fieldImage.imageFile.publicURL} alt={item.fieldImage.alt} />
                    </div>
                  </div>
                  <div className="col-12 col-lg-4 order-lg-1 text-right">
                    <div className="step-right-part ">
                      {/* <div dangerouslySetInnerHTML={{ __html: item.body.processed }} className="step-text"></div> */}
                    </div>
                  </div>
                </div>
              )
            }

          })}







          <div className="divider-10 d-block d-sm-none"></div>
          <div className="img-wrap text-center">
            <img src="/vertical_line2.png" alt="" />
          </div>
          <div className=" white-button text-center">
            {props.language === 'EL' ? <Link className="btn white-btn" href='/el/contact/'>ΞΕΚΙΝΗΣΤΕ ΤΩΡΑ</Link> : <Link className="btn white-btn" href='/en/contact/'>Get Started</Link>}

          </div>
          <div className="divider-30 d-none d-xl-block"></div>
        </div>
      </section>

      <section className="s-pt-75 s-pt-xl-50 gallery-carousel main-gallery container-px-0" id="gallery">
        <div style={{ width: '95%' }} className="container-fluid owlhome">
          <div className="img-wrap text-center">
            <img src='/vertical_line.png' alt="" />
            <div className="divider-40 d-block d-sm-none"></div>
          </div>
          <div className="content text-center my-5">
            <h3>{props.language === 'EL' ? `Μας εμπιστεύτηκαν` : `Our clients`}</h3>
          </div>




          <div className="owl-carousel gallery-owl-nav" data-autoplay="false" data-responsive-lg="5" data-responsive-md="3" data-responsive-sm="2" data-responsive-xs="1" data-nav="false" data-dots="true" data-filters=".gallery-filters" data-margin="40" data-loop="true">

            {props?.data?.drupal?.nodeclients?.entities?.map((item, index) => {


              return (



                <div className={`vertical-item item-gallery  content-absolute text-center ds`} key={index}>


                  <div>
                    <img src={item.fieldImage.imageFile.publicURL} alt={item.fieldImage.alt} />

                  </div>


                </div>


              )
            })}


          </div>
          {/* .owl-carousel */}



        </div>
      </section>



      <section className="s-pt-50 s-pt-md-50 ls text-section">
        <div className="divider-30"></div>
        <div className="container">
          <div className="row">
            <div className="text-center col-md-12 justify-content-center text-block">
              <img src="/vertical_line.png" alt="" />
              <div className="divider-35"></div>
              <div className="content">
                <h3>
                  {props?.data?.drupal?.nodeintro2?.title}
                </h3>

                {/* <div dangerouslySetInnerHTML={{ __html: props?.data?.drupal?.nodeintro2?.body?.processed }} /> */}

             
                <div className="divider-30"></div>
              </div>

              <div>
                <div className="divider-40"></div>


                <div className="divider-30"></div>
              </div>
              <div className="img-wrap overflow-visible">
                <img src="/vertical_line.png" alt="" />
                <div className="divider-5 d-none d-xl-block"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="s-pt-50 s-pb-100 s-pt-lg-30 s-pb-lg-75 ls ms teaser-contact-icon main-icon s-parallax" id="contact">
        <div className="corner corner-inverse"></div>
        <div className="text-center img-wrap col-md-12">
          <img src="/dark_line_short.png" alt="" />
        </div>
        <div className="container">
          <div className="divider-10 d-none d-xl-block"></div>
          <div className="row c-mb-50 c-mb-lg-0">
            {props?.data?.drupal?.nodeinfohome?.entities?.map((item, index) => {
              return (
                <div className="col-lg-4 text-center" key={index}>
                  <div className="border-icon">
                    
                    {/* <div dangerouslySetInnerHTML={{ __html: item.fieldIcon }} className="teaser-icon" /> */}

               
                  </div>
                  <h6>
                    {item.title}
                  </h6>

                  {/* <div dangerouslySetInnerHTML={{ __html: item.body.processed }} /> */}
                </div>
              )
            })}



          </div>
          <div className="divider-30 d-none d-lg-block"></div>
          <div className="text-center img-wrap col-md-12 layout-2">
            <img src="/dark_line_short.png" alt="" />
          </div>
        </div>
        <div className="divider-10"></div>
      </section>

    </main>
  )
}
