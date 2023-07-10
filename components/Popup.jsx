import React from 'react'

function Popup(props) {
  return (props.trigger) ? (
    <div className="popup-inner">
        {props.children}
    </div>
  ) : "";
}

export default Popup
