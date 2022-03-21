import React from "react";
 import "./style.css"

class Home extends React.Component{
    render(){
     return(
        <div id="bg"> 
            
            <section className="section-outer">
        <h1> Sports website </h1>
        <div className="container effect">

            <div id="simple-slideshow" className="carousel slide" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    <li data-target="#simple-slideshow" data-slide-to="0" class="active"></li>
                    <li data-target="#simple-slideshow" data-slide-to="1"></li>
                    <li data-target="#simple-slideshow" data-slide-to="2"></li>
                </ol>

                
                <div className="carousel-inner">
                    <div className="item active">
                        <img src="imgs\bg3.jpg" alt="..." width="155px"/>
                        
                        <div class="carousel-caption">
                            
                        </div>
                    </div>
                    <div className="item">
                        <img src="imgs\bg4.jpg" alt="..." width="155px"/>
                        <div className="carousel-caption">
                            
                        </div>
                    </div>
                    <div className="item">
                        <img src="imgs\bg5.jpg" alt="..." width="155px"/>
                        <div className="carousel-caption">
                            
                        </div>
                    </div>
                </div>

                
                <a className="left carousel-control" href="#simple-slideshow" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#simple-slideshow" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>

        </div>
    </section>
        
        </div>
        );
    }
}

export default Home;