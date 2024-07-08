import { useState } from "react";
import Logo from "../../assets/logo.svg";
import BalanceIcon from "../../assets/balanceIcon.svg";
import RightCaret from "../../assets/rightCaret.svg";
import WarningIcon from "../../assets/warning.svg";
import TrustImg from "../../assets/trust.svg";
import "./styles.scss";
import "../../App.scss";

const Sidebar = () => {
   return (
      <>
         {/* left column */}
         <div className="leftSection flex-col">
            <div className="flex">
               <img src={Logo} />
               <span className="title">Lendo</span>
            </div>

            <div className="balanceContainer">
               <div className="flex">
                  <img src={BalanceIcon} />
                  <div className="flex flex-col ml-1">
                     <span className="regular amount">62520 SAR</span>
                     <div className="flex">
                        <span className="regular balance">Account Balance</span>
                        <img className="ml-3" src={RightCaret} />
                     </div>
                  </div>
               </div>
            </div>

            <div className="btn-container flex">
               <div className="depositBtn">
                  <span className="regular depositBtnText">Deposit</span>
               </div>
               <div className="withdrawBtn ml-2">
                  <span className="regular depositBtnText">Withdraw</span>
               </div>
            </div>

            <div className="warningTextContainer flex">
               <img src={WarningIcon} />
               <span className="regular warningText ml-2">
                  To withdraw more than <span className="bold">10,000 SAR</span>{" "}
                  you need to
                  <span className="bold"> verify</span> your banking account.
               </span>
            </div>

            <div className="divider mt-6" />

            <img src={TrustImg} />
         </div>
      </>
   );
};

export default Sidebar;
