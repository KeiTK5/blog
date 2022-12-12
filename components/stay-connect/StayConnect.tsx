import React from "react";
import Tem from "../tem/Tem";
function StayConnect() {
    return (
        <div className="stay-connect">
            <Tem title="STAY CONNECTED" backgroundColor="#222" color="white" borderBottom="#222" />
            <div className="wrapper-stay">
                <div className="box-social">
                    <div className="item-social">
                        <div className="info-social">
                            <div className="icon-social">
                                <i className="bx bxl-meta"></i>
                                <div className="follow-social">22,034 Fans</div>
                            </div>
                            <div className="actions-social">like</div>
                        </div>
                    </div>
                    <div className="item-social">
                        <div className="info-social">
                            <div className="icon-social">
                                <i className="bx bxl-twitter"></i>
                                <div className="follow-social">3,587 Followers</div>
                            </div>
                            <div className="actions-social">follow</div>
                        </div>
                    </div>
                    <div className="item-social">
                        <div className="info-social">
                            <div className="icon-social">
                                <i className="bx bxl-youtube"></i>
                                <div className="follow-social">20,300 Subscribers</div>
                            </div>
                            <div className="actions-social">subscribe</div>
                        </div>
                    </div>
                </div>
                <div className="background-stay">
                    <img src="/images/stay.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default StayConnect;
