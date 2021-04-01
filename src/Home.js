import React, { useEffect, useState } from 'react';
import banner from './banner.svg';
import border from './border.svg';
import { Link, useHistory } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import './Home.css'



export default function Home() {


    const history = useHistory();
    const [user, setUser] = useFetch();

   

   

    return (
       <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="banner1">
              <img src={banner} width="100%" className="f-banner" />
              <img src={border} width="100%" className="f-border" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="panel u-panel">
              <div className="panel-heading f-heading">
                <h1 className="panel-title f-title">Select an account</h1>
              </div>
              <div className="panel-body f-body">
                <a id="my-text" onClick={() => {history.push('/Bret')}}>

                  {
                    user.map((item) => {
                        return(
                      <ul className="list-group f-ul" key={item.id}>
                          <li className="list-group-item myitem" >
                              <div className="profile-name">
                                  <img src={item.profilepicture} className="img img-circle pro-pic" alt="pic" />
                                  <p className="f-text"> { item.name } </p>
                              </div>
                          </li>
                      </ul>
                        )
                    })
                  }
                </a> 

                </div> 
              </div>
            </div>
          </div>
        </div>
    
    )
}
