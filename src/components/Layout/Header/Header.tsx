'use client'

import Link from 'next/link'
import React from 'react'

const Header = (props) => {

  const handleClick = (e: any) => {

    console.log('handleClick: ', e);
    

		// var $ = window.$
		// $('.page_header').toggleClass('mobile-active')
		// $(this)
		// 	.toggleClass('mobile-active')
		// 	.closest('.page_header')
		// 	.toggleClass('mobile-active')
		// 	.end()
		// 	.closest('.page_toplogo')
		// 	.next()
		// 	.find('.page_header')
		// 	.toggleClass('mobile-active');

	}

  return (
    <div className={props.ishome ? "header_absolute s-pb-30" : undefined}>
      <header className="page_header ds justify-nav-end">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-11">
              {props.language === 'EN' ? <Link className="logo text-center" href='/en'>
                <img src={'https://picsum.photos/197/40'} alt="logo" />
              </Link> : <Link className="logo text-center" href='/el'>
                <img src={'https://picsum.photos/197/40'} alt="logo" />
              </Link>}
              {/* <div className="d-block d-xl-none mt-2">
                         <a target="_blank" href={`${this.props.language === 'EN'?
                           'https://www.efepae.gr/files4users/files/%CE%A3%CE%97%CE%9C%CE%91%CE%A4%CE%9F%CE%94%CE%9F%CE%A4%CE%97%CE%A3%CE%97/%CE%B1%CF%86%CE%AF%CF%83%CE%B5%CF%82%CE%BA%CE%B5%CE%B9%CE%BC%CE%B5%CE%BD%CE%BFAkiklosFLEPENDEN.pdf':
                           'https://www.efepae.gr/files4users/files/%CE%A3%CE%97%CE%9C%CE%91%CE%A4%CE%9F%CE%94%CE%9F%CE%A4%CE%97%CE%A3%CE%97/%CE%B1%CF%86%CE%AF%CF%83%CE%B5%CF%82%CE%BA%CE%B5%CE%B9%CE%BC%CE%B5%CE%BD%CE%BFAkiklosFLEPENDGR.pdf'}`}>
                           <img style={{maxWidth:"150px"}} src={`/eu-banner-${this.props.language === 'EN'?'en':'el'}.jpg`} alt="eu-banner"/>
                         </a>
                         </div> */}

            </div>
            <div className="col-xl-7 col-lg-6 col-1 text-sm-center">
              <div className="nav-wrap">

                {/* main nav start */}
                <nav className="top-nav">
                  <ul className="nav sf-menu">

                    {/* example
                                    <li className={this.props.pathname === "/"? 'active' : null}>
                                     <Link to={'/'}><span href="index.html">Home</span></Link>

                                    </li>
                                    */}

                    {props.menu?.links?.map((item, i) => {
                      return (

                        <li className={props.pathname === item.url.path ? 'active' : undefined} key={i}>
                          {item.url.path === '/en' ? <Link href='/'><span >{item.label}</span></Link> : <Link href={item.url.path + '/'}><span >{item.label}</span></Link>}


                        </li>
                      )
                    })}



                    {props.language === 'EN' ? <li className={props.pathname === '/contact' ? 'active' : undefined} >
                      <Link href='/en/contact/'><span>Contact</span></Link>
                    </li> :
                      <li className={props.pathname === '/contact' ? 'active' : undefined} >
                        <Link href='/el/contact/'><span>Επικοινωνια</span></Link>
                      </li>
                    }





                  </ul>

                  <div className="d-inline-block d-xl-none flagcontmobile mt-3">

                    {/* <ReactFlagsSelect
                      countries={["GB", "GR"]}
                      onSelect={onSelectFlag}
                      defaultCountry={props.language === 'EN' ? 'GB' : 'GR'}


                      customLabels={{ "GB": "English", "GR": "Ελληνικά" }}
                      placeholder="Select Language" /> */}

                  </div>
                </nav>
                {/* eof main nav */}

                {/*hidding includes on small devices. They are duplicated in topline*/}


              </div>
            </div>
            <div className="col-xl-3 col-lg-3 text-lg-left text-xl-right d-none d-xl-flex align-items-center">

              {/* <a target="_blank" href={`${this.props.language === 'EN'?
                           'https://www.efepae.gr/files4users/files/%CE%A3%CE%97%CE%9C%CE%91%CE%A4%CE%9F%CE%94%CE%9F%CE%A4%CE%97%CE%A3%CE%97/%CE%B1%CF%86%CE%AF%CF%83%CE%B5%CF%82%CE%BA%CE%B5%CE%B9%CE%BC%CE%B5%CE%BD%CE%BFAkiklosFLEPENDEN.pdf':
                           'https://www.efepae.gr/files4users/files/%CE%A3%CE%97%CE%9C%CE%91%CE%A4%CE%9F%CE%94%CE%9F%CE%A4%CE%97%CE%A3%CE%97/%CE%B1%CF%86%CE%AF%CF%83%CE%B5%CF%82%CE%BA%CE%B5%CE%B9%CE%BC%CE%B5%CE%BD%CE%BFAkiklosFLEPENDGR.pdf'}`}>
                           <img style={{maxWidth:"150px"}} src={`/eu-banner-${this.props.language === 'EN'?'en':'el'}.jpg`} alt="eu-banner"/>
                         </a> */}


              {/* <ReactFlagsSelect
                countries={["GB", "GR"]}
                onSelect={onSelectFlag}
                defaultCountry={props.language === 'EN' ? 'GB' : 'GR'}


                customLabels={{ "GB": "English", "GR": "Ελληνικά" }}

                placeholder="Select Language" 
              /> */}




            </div>
          </div>
        </div>
        {/* header toggler */}
        <span onClick={handleClick} className="toggle_menu">
          <span></span>

        </span>




      </header>

    </div>

  )
}

export default Header