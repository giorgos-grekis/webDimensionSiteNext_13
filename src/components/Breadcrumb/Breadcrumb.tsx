import Link from 'next/link'
import React from 'react'

const Breadcrumb = ({title, path}) => {
    // if (props.path && props.title) {

        return (
            <section className="page_title ls s-py-50 corner-title ls invise overflow-visible breadcrumb-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="breadcrumb-title">{title}</h1>
                            <ol className="breadcrumb">
                                {path.map((item, i) => {
                                    return (

                                        <li key={i} className={(path.length === Number(i + 1)) ? "breadcrumb-item active" : "breadcrumb-item"}>
                                            {(path.length === Number(i + 1)) ? <span>{item.value}</span> : <Link href={item.path + '/'}>{item.value}</Link>}
                                        </li>
                                    )
                                })}

                            </ol>
                            <div className="divider-15 d-none d-xl-block"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    // }
    // else {
    //     return (
    //         <section className="page_title ls s-py-50 corner-title ls invise overflow-visible">
    //             <div className="container">
    //                 <div className="row">
    //                     <div className="col-md-12 text-center">
    //                         <h1>Single Service 3</h1>
    //                         <ol className="breadcrumb">
    //                             <li className="breadcrumb-item">
    //                                 <a href="./">Home</a>
    //                             </li>
    //                             <li className="breadcrumb-item">
    //                                 <a href="#">Pages</a>
    //                             </li>
    //                             <li className="breadcrumb-item active">
    //                                 Single Service 3
    //                             </li>
    //                         </ol>
    //                         <div className="divider-15 d-none d-xl-block"></div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </section>
    //     )
    // }

}


export default Breadcrumb