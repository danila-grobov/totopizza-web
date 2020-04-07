import React from "react";

export default () => {
    return (
        <div className="phoneInfo">
            <div className="phoneInfo__spacer" />
            <div className="phoneInfo__textWrapper"  onClick={() => { window.location.replace("tel:+37063999399") }}>
                <span className="phoneInfo__text">
                    UŽSAKYMŲ TELEFONAS
                </span>
                <span className="phoneInfo__text phoneInfo__text--bold">
                    8 639 99399
                </span>
            </div>
            <div className="phoneInfo__spacer" />
        </div>
    )
}