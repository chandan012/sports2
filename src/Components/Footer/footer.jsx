import React from 'react'

import "./footer.css"

function footer() {
  return (
    <div className="footer">
        <div className="footcont">
            <div className="box">
                <div className="info1">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.Sequi reprehenderit itaque voluptates
                        reiciendis enim, veniam <br/>cupiditate, deserunt, velit facere beatae impedit perspiciatis ipsum
                        nam quisquam fugiat.</p>
                </div>
                <div className="info2">
                    <h2>Quick Links</h2>
                    <a className='footer-a' href="#">Home</a>
                    <hr/>
                    <a className='footer-a' href="#">About</a>
                    <hr/>
                    <a className='footer-a' href="#">Upcoming Events</a>
                    <hr/>
                    <a className='footer-a' href="#">Matches</a>
                    <hr/>
                    <a className='footer-a' href="#">Contact Us</a>
                    <hr/>
                </div>
                <div className="info3">
                    <h2>Contact</h2>
                    <p>D. Y. Patil College of Engineering, Akurdi, Pune</p>
                    <hr/>
                    <p>Sector 29, Nigdi Pradhikaran, Pimpri-Chinchwad, near Akurdi Railway Station, Pune, Maharashtra
                        411044</p>
                </div>
            </div>

            {/* <!-- <div className="icons"> -->
            <!-- <a href="#"><img src="./img/insta.png" alt="INSTAGRAM" srcset=""></a> -->
            <!-- <a href="#"><img src="./img/twit.svg" alt="TWITTER" srcset=""></a> -->
            <!-- <a href="#"><img src="./img/fb.png" alt="FACEBOOK" srcset=""></a> -->
            <!-- <a href="#"><img src="./img/LinkedIn2.png" alt="FACEBOOK" srcset=""></a> -->
            <!-- </div> --> */}
            <ul className='social-links'>
                <li className='footer-li'>
                  <a className='footer-a' href="#">
                    <i className="fab fa-facebook-f icon">F</i></a>
                </li>
                <li className='footer-li'>
                  <a className='footer-a' href="#"><i className="fab fa-twitter icon">T</i></a>
                </li>
                <li className='footer-li'>
                  <a className='footer-a' href="#"><i className="fab fa-linkedin-in icon">L</i></a></li>
                <li className='footer-li'>
                  <a className='footer-a' href="#"><i className="fab fa-instagram icon">I</i></a></li>
            </ul>
            {/* <div className="bottom">
                <p>Copyright © 2022.sportsweb.co. All rights reserved. Please read <a href="#"> Privacy Policy</a></p>
            </div> */}
        </div>

    </div>
  )
}

export default footer