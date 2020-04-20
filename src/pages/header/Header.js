import React, { Component } from 'react';
import '../header/Header.scss';

// import myPageIcon from '/image/icon.png';



export class Header extends Component {
    render() {
        return (
        <div className='headerContentWrapper'> 
             <div className='content'>    
                 <div className='navAll'>
                     <div className='flexAlignCenter'>
                     <div className='navLeftFlex'>
                     <div className='navLeftName'>
                       <a className ="logoFlex">
                       <img src="https://www.logo.wine/a/logo/Converse_(shoe_company)/Converse_(shoe_company)-Converse3-Logo.wine.svg" 
                            className = "headerNavigation" alt=""/>
                       </a>
                        <nav className='navContent'>
                            <ul className="ulName">
                                <li className="liName">
                                    <a> 신발  </a>
                                </li>
                                <li className="liName">
                                    <a> 의류  </a>
                                </li>
                                <li className="liName">
                                    <a> 아동  </a>
                                </li>

                            </ul>
                            
                        </nav>
                        </div>
                        </div>
                        <div className = 'navRightAll'>
                        <div className='navRight'>

                        <div className="userImg">
                          <img src="https://image.flaticon.com/icons/svg/747/747376.svg" alt=""/> 
                          </div>
                          <div className="shoppingCart">
                              <img src="https://image.flaticon.com/icons/svg/481/481384.svg" alt=""/>
                            </div>
                        <div className="heartImg">
                          <img src="https://image.flaticon.com/icons/svg/1077/1077035.svg" alt=""/> 
                          </div>

                          
                            
                            <div className='questionMart'>
                              <img src="https://image.flaticon.com/icons/svg/906/906794.svg" alt=""/>
                            </div>
                          </div>

                            <div className ="searchBox">
                            <span className="ptagSearch">검색</span>
                            <image className="searchImg" src="https://image.flaticon.com/icons/svg/101/101826.svg" alt="searchbar"></image>
                             </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>        
            
        );
    }
}



export default Header;