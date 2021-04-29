import React, {useState, useEffect} from "react";
 
const PopupAd = props => {
  return (
    <div className="popup-box">
      <div className="boxPopup">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
      </div>
    </div>
  );
};

function Popup(){
  const [isOpen, setIsOpen] = useState(true);

  const closePopup = () => {
    setIsOpen(false)
  }
  return <div>
    { isOpen && <PopupAd content={<>
      <img className="advert" src="images/PopupAdd.jpg"/>
    </>} handleClose={closePopup}/>
  }</div>

}
 
export default Popup;