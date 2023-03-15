import React, { useState } from "react";
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Popup() {
  const [popup, setPop] = useState(false);
  const handleClickOpen = () => {
    setPop(!popup);
  };

  const MinimizePopup = () => {
    setPop(!popup);
  };

  const FullScreenPopup = () => {
    setPop(!popup);
  };
  const closePopup = () => {
    setPop(false);
  };


  return (


    <div>
      <button onClick={handleClickOpen}>Compose</button>


      <div class="box arrow-left">
        <ul>
          {/* <a className="list-group-item active" aria-current="true"> */}
          {/* <img src="https://i.ibb.co/hBY4QVf/reply.png" width="16px" height="16px" />&nbsp;&nbsp; Reply</a> */}

          <button class="btn">  <i class="bi bi-reply" ></i> &nbsp; Reply</button>
          <hr width="100%"></hr>

          <li class="list-group-item"><img src="https://i.ibb.co/prr9NZC/Icon-feather-flag.png" width="18px" height="18px" />  &nbsp;&nbsp;Flag </li>
          <li class="list-group-item"><img src="https://i.ibb.co/3C1T4Yw/Path-22881.png" width="18" height="16px" />  &nbsp;&nbsp;Tag </li>
          <hr width="100%"></hr>
          <li class="list-group-item"><img src="https://i.ibb.co/SswFWcL/check-circle.png" width="18" height="18px" />  &nbsp;&nbsp;Mark as Active</li>
          <li class="list-group-item"><img src="https://i.ibb.co/8DKgCb7/times-circle.png" width="18" height="18px" />  &nbsp;&nbsp;Mark as Inactive</li>
          <hr width="100%"></hr>
          <li class="list-group-item"><img src="https://i.ibb.co/x1rQ4Kf/delete.png" width="16" height="18px" />  &nbsp;&nbsp;Delete</li>
          <li class="list-group-item"><img src="https://i.ibb.co/G03pL20/users-alt.png" width="19" height="19px" />  &nbsp;&nbsp;Add Client</li>

        </ul>

      </div>

      <div>

        <div className="main">
          <div className="Popup">
            <div className="Popup-header">

              <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   🗕︎ &nbsp;&nbsp;&nbsp; ⤢  &nbsp;&nbsp;&nbsp; 🗙︎ </h2>

              <div className="midvalues">
                <text> <img src="https://i.ibb.co/WfjWvNY/dark-avatar.png" className="rounded-circle img-fluid mb-3" width="25px" height="23px " ></img> &nbsp;

                  <small> code123@example.com</small> &nbsp;&nbsp;&nbsp;

                  <img src='https://i.ibb.co/wB0z5wx/icon-down.png' width='13px' height='9px' /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </text>
              </div>
            </div>
            <div>
              <hr width="87.5%" />
            </div>

            <div className="request">
              Design Request Proposal
            </div>

            <div className="linedraw">
              <hr width="87.5%"></hr>
            </div>


            <div className="loremtext">
              <p>Hi Mike, <br />
                <br />

                In alias assumenda et molestias ducimus non officia iusto vel  fugiat asperiores non magnam officia non atque facilis qui quod nostrum. Qui doloremque eaque aut quia commodi aut Quis quasi eum voluptas quod est dolorem distinctio. Id nihil praesentium cum deleniti sapiente ut sequi debitis nam placeat alias.
                <br /><br />
                Ut fugiat totam est ducimus ipsum vel porro dolorum eum voluptatem doloribus aut voluptatem similique. Eum iusto placeat qui dicta esse ut voluptatibus dolore qui cupiditate quia!

              </p>

            </div>

            <div className="modal-footer">

              <div className="fotter-leftside">
                <h3><i class="bi bi-trash3"></i></h3>
                <h3><i class="bi bi-three-dots-vertical"></i></h3>
                <h3><i class="bi bi-emoji-smile" ></i></h3>

                <h3><i class="bi bi-paperclip"></i></h3>
                <button> Send Now  &nbsp;&nbsp;| &nbsp;&nbsp; <i class="bi bi-calendar2-week"></i>
                </button>

              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Popup;