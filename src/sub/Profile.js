import Axios from 'axios';
import './Profile.css'
import React, { Component } from 'react';

export default class Profile extends Component {
        constructor(props) {
        super(props);
        this.state = {
            userDetail: [],
            company: [],
            address: [],
            geo: []
        }
    }


    componentDidMount() {
        const Url = 'https://panorbit.in/api/users.json';
        Axios
        .get(Url)
        .then(res => {
            console.log(res.data.users[0]);
            this.setState({
              userDetail: res.data.users[0],
              company: res.data.users[0].company,
              address: res.data.users[0].address,
              geo: res.data.users[0].address.geo
            });
        })
        .catch(err => console.log(err));

}


    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                       <section className="main-container">
                        <div className="flex-container-f">
                            <div className="title">Profile</div>
                            <div className="profile-name pull-right">
                                <img src={this.state.userDetail.profilepicture} className="img img-circle pro-pic" alt="pic" />
                                <p className="p-text"> {this.state.userDetail.name} </p>                            
                            </div>                  
                        </div>
                        <div className="flex-container-s">
                             <div className="left-side">
                                <img src={this.state.userDetail.profilepicture} className="img img-circle pro-pic-b" alt="pic" />
                                <div className="div-text"> {this.state.userDetail.name} </div>   
                                    <div className="upper">
                                        <div> <span className="t-common">Username  : </span><b>{this.state.userDetail.username} </b></div>   
                                        <div> <span className="t-common">e-mail    : </span><b>{this.state.userDetail.email} </b></div>   
                                        <div> <span className="t-common">phone     : </span><b>{this.state.userDetail.phone} </b></div>   
                                        <div> <span className="t-common">Website   : </span><b>{this.state.userDetail.website} </b></div>   
                                    </div>
                                    <div className="lower">
                                        <ul className="list-group f-ul">
                                            <li className="list-group-item myitem">
                                            <div className="heading text-center">Company</div>
                                        <div> <span className="t-common">Name: </span><b className="b1">{this.state.company.name} </b></div>   
                                        <div> <span className="t-common">catchphrase: </span><b className="b1">{this.state.company.catchPhrase} </b></div>
                                        <div> <span className="t-common">bs: </span><b className="b1">{this.state.company.bs} </b></div>
                                      
                                     </li>
                                    </ul>
                                    </div> 


                             </div>
                             <div className="right-side">
                             <ul className="list-group f-ul">
                                            <li className="list-group-item myitem">
                                        
                                            <div className="heading">Address: </div>
                                        <div> <span className="t-common">Street: </span><b>{this.state.address.street} </b></div>   
                                        <div> <span className="t-common">Suite: </span><b>{this.state.address.suite} </b></div>
                                        <div> <span className="t-common">City: </span><b>{this.state.address.city} </b></div>
                                        <div> <span className="t-common">Zipcode: </span><b>{this.state.address.zipcode} </b></div>
                                      
                                     </li>
                                    </ul>
                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.255587464024!2d77.15669651954202!3d13.110973200676568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafd31412e1f05f%3A0xf7119b64df126ad7!2sKudur%2C%20Karnataka%20561101!5e0!3m2!1sen!2sin!4v1605784580635!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                             <div className="geo pull-right">
                                <p><span className="t-common-r">Lat: </span><b className="b1">{this.state.geo.lat}</b></p>
                                <p><span className="t-common-r">Long: </span><b className="b1">{this.state.geo.lng}</b></p>
                             </div>
                             </div>
                        </div>
                    </section>
                </div>  
            </div>
        )
    }
}
