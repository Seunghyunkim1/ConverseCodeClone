import React, { Component } from "react";
import FilterImage from '../../images/Filter-nav-left.png';
import ArrowDown from '../../images/Filter-nav-right.png';
import Minus from '../../images/Category-minus.png';
import Highshoe from '../../images/Highshoe.png';
import Lowshoe from '../../images/Lowshoe.png';
import Midshoe from '../../images/Midshoe.png';
import Flatformshoe from '../../images/Flatformshoe.png';
import Slipshoe from '../../images/Slipshoe.png';
import Hearticon from '../../images/Heart-icon.png';
import './Category.scss';

class Category extends Component {
    render () {
        return(
            <div className = "Category">                
                <div className = "DashBoard">
                    <div className = "LocationOfUser">
                        <a className = "Home" href="/https://www.converse.co.kr/" target="_blank">Home</a>
                        <a className = "Sinbal" herf="/https://www.converse.co.kr/category/shoes" target="_blank">신발</a>
                    </div>
                    <div className = "Dashboard-image-part"> 
                        <div className = "Dashboard-image-inside">
                            <img className = "DashImage1" src="https://image.converse.co.kr/cmsstatic/structured-content/15400/D-Converse-SP20-PWH-Best-Sellers-.jpg" alt="shoes"/>
                            {/* <img className = "DashImage1" src="https://image.converse.co.kr/cmsstatic/structured-content/15400/overview_plp_title_bn_mc.jpg" alt="shoes1" /> */}
                                                    <div className = "Dash-text-center">
                                <p className = "Text-shoes">SHOES</p>
                            </div>
                        </div>                                      
                    </div>
                </div>
                <div className = "Filter-nav">
                    <div className = "Filter-nav-inside">
                        <button className = "Filter-nav-button">
                            <span className = "HideFilter">필터 숨기기</span>
                            <img src={FilterImage} alt="filter" />
                        </button>
                        <div className="Filter-nav-center">
                            <div className="ProductCount">총 175개의 상품</div>
                        </div>
                        <div className="Filter-nav-newproducts">
                            <span className="New-product">신상품순</span>
                            <img src={ArrowDown} alt="arrow"/>
                        </div>
                    </div>
                </div>
                <div className="Category-bottom">
                    <div className="Category-bottom-left">
                        <div className="Left-inside">
                            <div className="Left-inside-border">
                                <div className="Left-inside-box">
                                    <div className="Box-detail-title">
                                        <span>구분</span>
                                        <img src={Minus} alt="minus" />
                                    </div>
                                    <div className="Box-detail-inside">
                                        <div className="Details1"> 
                                            <div className="Inside1">
                                                <a className ="Inside-detail-top" herf="/#">
                                                    <input type="checkbox" className = "Checkbox" name="top" />
                                                    <label for="top">남성</label>
                                                </a>                                               
                                            </div>
                                            <div className="Inside1">
                                                <a className ="Inside-detail-top" herf="/#">
                                                    <input type="checkbox" className = "Checkbox" name="bottom" />
                                                    <label for="bottom">여성</label>
                                                </a>  
                                            </div>                      
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="Left-inside-box">
                                    <div className="Box-detail-title">
                                        <span>제품타입</span>
                                        <img src={Minus} alt="minus" />
                                    </div>
                                    <div className="Box-detail-inside">
                                        <div className="Details1"> 
                                            <div className="Inside1">
                                                <a className ="Inside-detail-top" herf="/#">
                                                    <input type="checkbox" className = "Checkbox" name="top" />
                                                    <label for="top">뮬</label>
                                                </a>                                               
                                            </div>
                                            <div className="Inside2">
                                                <a className ="Inside-detail-top" herf="/#">
                                                    <input type="checkbox" className = "Checkbox" name="top" />
                                                    <label for="top">스니커즈</label>
                                                </a>  
                                            </div>                      
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="Left-inside-box">
                                    <div className="Box-detail-title">
                                        <span>색상</span>
                                        <img src={Minus} alt="minus" />
                                    </div>
                                    <div className="Box-detail-inside">
                                        <div className="Details1"> 
                                            <div className="Color-dots">
                                                
                                                <a className="Dotdotdot black" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot blue" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot green" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot navy" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot purple" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot brown" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot grey" href="/#" target="_blank"></a>

                                                <a className="Dotdotdot khaki" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot beige" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot red" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot orange" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot pink" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot yellow" href="/#" target="_blank"></a>
                                                <a className="Dotdotdot white" href="/#" target="_blank"></a>
                                            </div>    
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="Left-inside-box">
                                    <div className="Box-detail-title">
                                        <span>사이즈</span>
                                        <img src={Minus} alt="minus" />
                                    </div>
                                    <div className="Box-detail-inside">
                                        <div className="Details1"> 
                                            <div className="Shoe-size">
                                                <div className="Shoe-size-detail">
                                                    <a className="Square-inside" herf="/#"> 
                                                        <span>80</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>85</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>90</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>95</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>100</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>105</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>110</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>170</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>180</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>190</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>200</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>210</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>220</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>225</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>230</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>235</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>240</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>245</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>250</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>255</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>260</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>265</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>270</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>275</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>280</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>285</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>290</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>295</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>300</span>
                                                    </a>
                                                    <a className="Square-inside">
                                                        <span>FREE</span>
                                                    </a>

                                                </div>
                                            </div>
                                            
                                                
                                                               
                                        </div>                                    
                                    </div>
                                </div>
                                <div className="Left-inside-box">
                                    <div className="Box-detail-title">
                                        <span>실루엣</span>
                                        <img src={Minus} alt="minus" />
                                    </div>
                                    <div className="Box-detail-inside">
                                        <div className="Details1"> 
                                            <div className="Silhouette">
                                                <div className="Silhouette-detail">
                                                                                                   
                                                    <a className="Shoe-silhouette">
                                                        <img className="shoeshoeshoe" src={Highshoe} alt="High" />
                                                        <span>하이</span>
                                                    </a>
                                                    <a className="Shoe-silhouette">
                                                        <img className="shoeshoeshoe" src={Lowshoe} alt="Low" />
                                                        <span>로우</span>
                                                    </a>
                                                    <a  className="Shoe-silhouette">
                                                        <img className="shoeshoeshoe" src={Midshoe} alt="Mid" />   
                                                        <span>미드</span>
                                                    </a>

                                                    <a className="Shoe-silhouette">
                                                        <img className="shoeshoeshoe" src={Flatformshoe} alt="Flatform" />
                                                        <span>플랫폼</span>
                                                    </a>                                                      
                                                    <a className="Shoe-silhouette">
                                                        <div className="Shoe-more">
                                                            <img className="shoeshoeshoe" src={Slipshoe} alt="Slip" />
                                                            <span>슬립</span>
                                                        </div>
                                                    </a>
                                                </div> 
                                            </div>
                                                          
                                        </div>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Category-bottom-right">
                        
                        <div className="Product-layout">
                            <div className="Product-layout-detail">




                            
                                <div className="Product-detail">
                                    <div className="Product-detail-relative">
                                        <img className="Shoeppp" src="https://image.converse.co.kr/cmsstatic/product/564981C_564981C_hover.jpg?browse=20200219" alt="PinkBackground" />
                                        <a className="Shoe-detail-page" href="/#"></a>
                                        <div className="Heart-product-state">
                                            <div className="Heart-icon">
                                                <img className="Heart-heart" src={Hearticon} alt="Hearticon" />
                                            </div>
                                            <div className="Product-state">
                                                BEST SELLER NEW ARRIVAL
                                            </div>
                                        </div>  
                                        
                                        <div className="Product-explain">
                                            <p className="Product-name">
                                                척테일러 올스타 데인티 베이직 캔버스
                                            </p>
                                            <p className="Product-price">
                                                55,000원
                                            </p>
                                        </div>
                                        <div className="Product-color-sort">
                                            2 컬러
                                        </div>
                                    </div>    
                                </div>
                                <div className="Product-detail">
                                상품디테일칸
                                </div>
                                <div className="Product-detail">
                                상품디테일칸
                                </div>
                                <div className="Product-detail">
                                상품디테일칸
                                </div>
                                <div className="Product-detail">
                                    <img className="Shoeppp" src="https://image.converse.co.kr/cmsstatic/product/564981C_564981C_hover.jpg?browse=20200219" alt="PinkBackground" />

                                    상품디테일칸
                                </div>
                                <div className="Product-detail">
                                상품디테일칸
                                </div>
                                <div className="Product-detail">
                                상품디테일칸
                                </div>
                                Converse!!
                      
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Category;