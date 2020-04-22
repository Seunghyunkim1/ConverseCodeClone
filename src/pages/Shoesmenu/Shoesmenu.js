import React , {Component} from 'react';
import './Shoesmenu.scss';

export class Shoesmenu extends Component {

    render() {
        return (
          <div className="Shoesmenu">
           <div className ="Main">
               <ul> 
                 <li className="LiList"> 전체보기</li>
                 <li className="LiList"> 척테일러 올스타 </li>
                 <li className="LiList"> 척 70 </li>
                 <li className="LiList"> 원스타 </li>
                 <li className="LiList"> 잭퍼셀 </li>
                 <li className="LiList"> 프로레더 </li>
                 <li className="LiList"> 회원전용 </li>

               </ul>
         

           <div className ="RecommendItem">
               <p className="RecommendPtag"> 추천상품 </p> 
               <div className="HightLightList">
                <ul className="ImageList">
                <div className="PictureCollect">
                   <li> 
                   <a href="#">
                      <div className="Picture"> 
                        <img className="PictureSize" src="https://image.converse.co.kr/cmsstatic/menu/12723/KakaoTalk_20200417_143441155.jpg"alt=""/>
                       <span> 빅 사이즈</span>
                   </div> 
                   </a>
                   </li>
                   
                   <li> 
                   <a href="#">
                   <div className="Picture"> 
                        <img className="PictureSize" src="https://image.converse.co.kr/cmsstatic/menu/12733/Flyout_256x300_03.jpg"alt=""/>
                        <span> 농구화 컬렉션</span>
                   </div> 
                   </a>
                   </li>
                   
                   <li>
                   <a href="#">
                   <div className="Picture"> 
                        <img className="PictureSize" src="https://image.converse.co.kr/cmsstatic/menu/12751/Flyout_256x300_02.jpg"alt=""/>
                       <span> 아카이브 프린트</span>
                   </div> 
                   </a>
                   </li>
                   
                   <li> 
                   <a href="#">
                   <div className="Picture"> 
                      <img className="PictureSize" src="https://image.converse.co.kr/cmsstatic/menu/12752/Flyout_256x300_04.jpg" alt=""/>
                      <span> 에스파드류 </span>
                   </div>
                      </a>
                   </li>
                   </div>
                </ul>
             </div>
           </div>
         </div>  
         </div>   
        );
    }
}
export default Shoesmenu;