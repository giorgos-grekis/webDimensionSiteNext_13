import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import React from 'react'






const Contact = () => {
  return (
    <div >
      <Breadcrumb title="Contact" path={['/contact', 'erga']} />


      <section className="ls s-pt-30 s-pt-lg-75 s-pb-130 contact4">
        <div className="container">
          <div className="row c-gutter-60">

            <div className="divider-40 d-none d-xl-block"></div>

            <div className="col-lg-8">
              <form className="contact-form c-mb-20 c-gutter-15">

                <div className="row">

                  <div className="col-sm-12">
                    <h4>Contact Form</h4>
                  </div>
                </div>

                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group has-placeholder name">
                      <label htmlFor="name">Full Name
                        <span className="required">*</span>
                      </label>
                      <input type="text" aria-required="true" size={30} 
                      // onBlur={handleBlur} 
                      // onChange={handleChange} 
                      // value={state.name} 
                      name="name" id="name" className="form-control" placeholder="name" />

                    </div>
                    <span style={{ color: 'red' }} className="errormessage">
                      {/* {state.nameerror} */}
                    </span>
                  </div>


                </div>

                <div className="row">

                  <div className="col-sm-12">
                    <div className="form-group has-placeholder email">
                      <label htmlFor="email">Email address
                        <span className="required">*</span>
                      </label>
                      <input type="email" aria-required="true" 
                      // size="30" onBlur={handleBlur} onChange={handleChange} value={state.email} 
                      name="email" id="email" className="form-control" placeholder="email" />


                    </div>
                    <span style={{ color: 'red' }} className="errormessage">
                      {/* {state.emailerror} */}
                    </span>
                  </div>
                </div>

                <div className="row">

                  <div className="col-sm-12">

                    <div className="form-group has-placeholder message">
                      <label htmlFor="message">Message</label>
                      <textarea aria-required="true" 
                      // rows="6" cols="45" onBlur={handleBlur} onChange={handleChange} value={state.message} 
                      name="message" id="message" className="form-control" placeholder="message"></textarea>

                    </div>
                    <span style={{ color: 'red' }} className="errormessage">
                      {/* {state.messageerror} */}
                      </span>
                  </div>

                </div>

                <div className="row">
                  <div className="form-group has-placeholder">
                    <button 
                    // disabled={state.buttondisabled} onClick={handleSubmit} 
                    type="submit" id="contact_form_submit" name="contact_submit" className={"btn btn-block btn-maincolor"}>Send Message
                    </button>
                  </div>
                  <div>
                    {/* <CircleSpinner
                      size={30}
                      color="#686769"
                      loading={state.loading}
                    /> */}
                  </div>



                  {/* {state.success ? <h2 style={{ color: 'green' }}>Your Message has been Sent</h2> : <h2 style={{ color: 'red' }}>{state.errorsend}</h2>} */}
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div>
                <h4 className="header">
                  Contact Info
                </h4>

                <div className="media mb-10">
                  <div className="icon-styled color-main fs-16">
                    <i className="fa fa-map-marker"></i>
                  </div>

                  <div className="media-body">
                    <p>
                      Megalou Alexandrou 91, 18120 Korydallos

                    </p>
                  </div>
                </div>

                <div className="media mb-10">
                  <div className="icon-styled color-main fs-16">
                    <i className="fa fa-phone"></i>
                  </div>

                  <div className="media-body">
                    <p>
                      <a href="tel:+302107703051">+30 210 770 3051</a>

                    </p>
                  </div>
                </div>

                <div className="media mb-40">
                  <div className="icon-styled color-main fs-16">
                    <i className="fa fa-pencil"></i>
                  </div>

                  <div className="media-body">
                    <p className="color-dark">
                      <a href="mailto:hello@webdimension.gr">hello@webdimension.gr</a>

                    </p>
                  </div>
                </div>

                <h4>Open Hours</h4>


                <table>
                  <tbody>
                    <tr>
                      <td>
                        <div className="icon-styled color-main fs-16">
                          <i className="fa fa-clock-o"></i>
                        </div>
                        Weekdays
                      </td>
                      <td className="color-dark">10:00-18:00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="icon-styled color-main fs-16">
                          <i className="fa fa-clock-o"></i>
                        </div>
                        Saturday
                      </td>
                      <td className="color-dark">Closed</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="icon-styled color-main fs-16">
                          <i className="fa fa-clock-o"></i>
                        </div>
                        Sunday
                      </td>
                      <td className="color-dark">Closed</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>

            <div className="divider-60 d-none d-xl-block"></div>
          </div>
        </div>
      </section>


      {/* map */}
      <section className="mapcontainer">
        <div className="mapouter"><div className="gmap_canvas"><iframe width="100%" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=web%20dimension&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.embedgooglemap.org"></a></div>
        </div>
      </section>


    </div>
  )
}

export default Contact