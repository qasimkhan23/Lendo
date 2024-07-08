import { useState } from "react";
import downCaret from "../../assets/downCaret.svg";
import CircleChart from "../../assets/circleChart.svg";
import Help from "../../assets/help.svg";
import Toggle from "../../assets/toggle.svg";
import Avatar from "../../assets/Avatar.svg";
import Notification from "../../assets/notification.svg";

import "./styles.scss";
import "../../App.scss";

const RightPanel = () => {
   return (
      <div className="rightPanelContainer">
         {/* header */}
         <div>
            <div className="flex menuItems bottomBorder">
               <div></div>
               <div>
                  <span className="regular menuItemsText">Overview</span>
               </div>
               <div>
                  <span className="regular menuItemsText">Invest</span>
               </div>
               <div className="activeMenuItem">
                  <span className="bold menuItemsText">Auto Invest</span>
               </div>
               <div>
                  <span className="regular menuItemsText">My Portfolio</span>
               </div>
               <div className="actionItems">
                  <div className="items-center">
                     <span
                        className="regular primary-text-color"
                        style={{ marginRight: 25 }}
                     >
                        En
                     </span>
                     <img src={Notification} style={{ marginRight: 25 }} />
                     <img src={Avatar} />
                  </div>
               </div>
            </div>
         </div>
         {/* header ends */}
         <div className="detailsContainer flex items-center justify-between">
            <span className="bold detailsText">Auto Investment</span>

            <div className="items-center">
               <span
                  className="regular primary-text-color Active"
                  style={{ marginRight: 4 }}
               >
                  Active
               </span>
               <img src={Toggle} />
            </div>
         </div>
         <div className="statstictsCard flex">
            <div className="conservativeCard flex-col">
               <span className="regular conservativeText">Conservative</span>
               <span className="regular conservativeText2 mt-4">10-14% </span>
               <span className="regular conservativeText mt-1">
                  Interest Rate
               </span>
            </div>

            <div className="flex flex-col" style={{ flex: 1 }}>
               <div className="statsDetails">
                  <div className="flex flex-col ">
                     <span className="regular activeHeader">Active</span>
                     <span className="regular activeHeaderText primary-text-color">
                        Status
                     </span>
                  </div>

                  <div className="flex flex-col" style={{ marginLeft: "35%" }}>
                     <span className="regular investmentHeader">1500 SAR</span>
                     <span className="regular activeHeaderText primary-text-color">
                        Max. Investement
                     </span>
                  </div>

                  <div className="flex flex-col" style={{ marginLeft: "35%" }}>
                     <span className="regular investmentHeader">26</span>
                     <span className="regular activeHeaderText primary-text-color">
                        Loans Funded
                     </span>
                  </div>
               </div>

               <div className="flex btnContainer mt-3 items-center">
                  <span className="grey strategyText">
                     * Strategy started at 20th March 2021
                  </span>

                  <div className="flex">
                     <div className="stopBtn">
                        <span className="regular depositBtnText">Deposit</span>
                     </div>
                     <div className="settingsBtn ml-3">
                        <span className="regular depositBtnText">
                           Change Settings
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="flex">
            <div className="investedCard">
               <div className="flex">
                  <span className="bold investedTitle mr-2">Invested</span>
                  <img src={Help} />
               </div>
               <div className="flex barsCotainer">
                  <div className="chartCol">
                     <span className="regular yTitles">30k SAR</span>
                     <span className="regular yTitles">20k SAR</span>
                     <span className="regular yTitles">10k SAR</span>
                     <span className="regular yTitles">0k SAR</span>
                  </div>
                  <div className="ml-3 flex">
                     <div className="bars"></div>
                     <div
                        className="bars ml-1"
                        style={{
                           height: 50,
                           alignSelf: "flex-end",
                        }}
                     ></div>
                     <div
                        className="bars ml-1"
                        style={{
                           height: 60,
                           alignSelf: "flex-end",
                        }}
                     ></div>

                     <div
                        className="bars ml-1"
                        style={{
                           height: 20,
                           alignSelf: "flex-end",
                        }}
                     ></div>

                     <div
                        className="bars ml-1"
                        style={{
                           height: 10,
                           alignSelf: "flex-end",
                        }}
                     ></div>

                     <div
                        className="bars ml-1"
                        style={{
                           height: 40,
                           alignSelf: "flex-end",
                        }}
                     ></div>
                     <div
                        className="bar2 ml-1"
                        style={{
                           height: 60,
                           alignSelf: "flex-end",
                        }}
                     ></div>
                  </div>
               </div>

               <div className="flex investedDetails">
                  <div className="flex" style={{ marginLeft: 30 }}>
                     <div className="blueCircle"></div>
                     <span className="regular circleText ml-2">Spent</span>
                  </div>

                  <div className="flex" style={{ marginLeft: 30 }}>
                     <div className="lightblueCircle"></div>
                     <span className="regular circleText ml-2">Excepted</span>
                  </div>
               </div>
            </div>
            <div className="investedCard ml-4">
               <div className="flex">
                  <span className="bold investedTitle mr-2">
                     Excepted Risk Score Distribution
                  </span>
               </div>
               <div className="mt-5 flex circlesContainer">
                  <img src={CircleChart} />

                  <div>
                     <div className="flex" style={{ marginLeft: 30 }}>
                        <div className="blueCircle"></div>
                        <span className="regular circleText ml-2">
                           A - 45.7%
                        </span>
                     </div>

                     <div className="flex mt-2" style={{ marginLeft: 30 }}>
                        <div className="lightblueCircle"></div>
                        <span className="regular circleText ml-2">
                           B - 51.5%
                        </span>
                     </div>
                     <div className="flex mt-2" style={{ marginLeft: 30 }}>
                        <div className="yellowCircle"></div>
                        <span className="regular circleText ml-2">
                           C - 23.2%
                        </span>
                     </div>
                     <div className="flex mt-2" style={{ marginLeft: 30 }}>
                        <div className="redCircle"></div>
                        <span className="regular circleText ml-2">
                           D - 51.5%
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="infoContainer">
            <span className="bold infoTitle">You Might Want to Know</span>

            <div
               className="flex justify-between bottomBorder mt-6"
               style={{ paddingBottom: 12 }}
            >
               <span className="regular infoText">
                  Why should I trust this tool?
               </span>
               <img src={downCaret} />
            </div>

            <div
               className="flex justify-between bottomBorder mt-6"
               style={{ paddingBottom: 12 }}
            >
               <span className="regular infoText">
                  What risks are related to investments?
               </span>
               <img src={downCaret} />
            </div>

            <div
               className="flex justify-between bottomBorder mt-6"
               style={{ paddingBottom: 12 }}
            >
               <span className="regular infoText">
                  What is the Auto-Investment?
               </span>
               <img src={downCaret} />
            </div>
         </div>
      </div>
   );
};

export default RightPanel;
