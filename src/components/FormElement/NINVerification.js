import React from 'react';

const NINVerification = () => {
   return (
      <div className="bio">
      <div className="bioData-Long">
         <div className="contentOne-Long">
            <div className="titleContent">
               <h1>NIN Verification</h1>
               <p>Enter your BVN here, so we can get more details form for you.</p>
            </div>
            <div className="contentIcon">
               <i className="ri-settings-2-line"></i>
               <i class="ri-delete-bin-6-line"></i>
            </div>
         </div>
         <div className="inputDetails-Long">
            <div className="fieldText">
               <div className="field">
                  <input
                     type="number"
                     placeholder="(000) 0000 0000"
                     className="control"
                     id="formBasicMail"
                  />
                  <div className="minus">-</div>
               </div>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-toggle-on"
                  viewBox="0 0 16 16"
               >
                  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
               </svg>
               <label>Enable Face Authentication</label>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-toggle-on"
                  viewBox="0 0 16 16"
               >
                  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
               </svg>
               <label>Instant Verification</label>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-toggle-on"
                  viewBox="0 0 16 16"
               >
                  <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
               </svg>
               <label>Instant Verification</label>
            </div>
         </div>
      </div>
   </div>
   );
}

export default NINVerification;
