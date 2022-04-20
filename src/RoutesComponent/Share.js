import "./share.css";
import React from "react";
import HeaderII from "../HeaderII"

function Share() {
    
  return (
    <div className="share-container">
    <HeaderII/>
    <div className="all-share-container">
      <div className="share-preview">
        <div className="titleContents">
          <h1>Share IdentityForm</h1>
          <p>Make sure the details 
          you fill here are yours and correct</p>
        </div>
        <div className="share-card">
          <div className="cardone">
          <div className="cardContainer">
          <div>
          <h2>Public Link</h2>
          <p>Get your identity form link and
           share with anyone with this link and fill the form.</p>
           </div>
           <div className="generateLink">
           <span className="span1">rvnnksvsnNCdJ300eteww:Cqngodo</span>
           <span className="span2"><span className="span3"></span><i class="ri-file-copy-line" id="top"></i> copy link</span>
           </div>
           <div className="shareIcons">
           <div className="icons">
           <ul>
               <li> <i class="ri-whatsapp-fill"></i></li>
               <li><i class="ri-instagram-fill"></i></li>
               <li><i class="ri-twitter-fill"></i></li>
               <li><i class="ri-facebook-fill"></i></li>
               <li> <i class="ri-mail-fill"></i></li>

           </ul>
         </div>
           <a href="#">Customise Link</a>
           </div>
           </div>
          </div>
          <div className="cardtwo">
          <div className="embed">
          <i class="ri-database-2-fill"></i>
          <h3>Embed In a Webpage</h3>
          <p>Lorem ipsum dolor sit amet, consectetur 
          adipis amet, consectetur adipis Lorem ipsum dolor sit</p>
          </div>
          <div className="new-embed">
          <i class="ri-file-copy-line"></i>
          <a href="#">Copy Embed Link</a>
          </div>
          </div>
        </div>

        <div className="cardthree">
            <div className="privateContainer">
            <h2>Private Link</h2>
          <p>Invite individual or groups to fill your form.
           Only people invited or added via email can fill this form.</p>
           <form>
           <div className="fieldShare">
              <input
                type="text"
                placeholder="Enter Email"
                className="controller"
                id="formBasicmailShare"
              />
              </div>
              </form> 
            </div>
        </div>
        <div className="submitlink">
        <button type="sumbit">Share</button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Share;
