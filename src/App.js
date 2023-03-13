import React, { useState }  from "react";
import './App.css'
import { Modal } from "rsuite";


      function PopUp(){
          const [popup,setPop]=useState(false)
          const handleClickOpen=()=>{
          
              setPop(!popup)
          }
      
          const MinimizePopup=()=> {
          setPop(!popup);
      
        }
      
        const FullScreenPopup=()=>{
          setPop(!popup)
      
      }
          const closePopup=()=> {
          setPop(false);
      
        }
      
         
      
          return(

      
              <div>
              <button onClick={handleClickOpen}>Compose</button>

            
              <ul className="list-unstyled components mb-5">
              <a className="active">
                </a>
                <a>   <i class="bi bi-reply"> </i>
                &nbsp;
 Reply</a>

              
              <hr width="95%"></hr>
              
                <a> <i class="bi bi-flag"></i>
                &nbsp;&nbsp;

 Flag</a>
              
 <br/>   <br/>
                <a> <i class="bi bi-bookmark"></i>
&nbsp;&nbsp;

 Tag</a>
              
              <hr width="95%"></hr>
              
                <a> <i class="bi bi-check-circle"></i>
                &nbsp;&nbsp;


 Mark as active</a>
              
              
 <br/> 
                <a> <i class="bi bi-x-circle"></i>&nbsp;&nbsp;


Mark as Inactive</a>
              
<hr width="95%"></hr>
              
             
              <a>  <i class="bi bi-trash"></i>
              &nbsp;&nbsp;

 Delete</a>
 <br/> 
               
              <a>  <i class="bi bi-people"></i>
              &nbsp;&nbsp;

 Add Client</a>
              

              </ul>


   



{/* <div> 
<ul  style="list-style-type:none">
            <li   className='reply-menu'>
                     <img src="https://i.ibb.co/hBY4QVf/reply.png/>" width="12px" height="12px"/> 
                     <span className='ms-1 d-none d-sm-inline'><b>Reply</b> </span>
                        
</li>
                      <li className='reply-menu'>
                     <img src="https://i.ibb.co/prr9NZC/Icon-feather-flag.png/>" width="14px" height="14px"/>
                     
                     <span className='ms-1 d-none d-sm-inline'>Flag</span>
                        
</li>
                 <li className='reply-menu'>
                     <img src="https://i.ibb.co/3C1T4Yw/Path-22881.png/>" width="14px" height="14px"/>
                     
                     <span className='ms-1 d-none d-sm-inline'>Tag</span>
                        
</li>
                 <li className='reply-menu'>
                     <img src="https://i.ibb.co/SswFWcL/check-circle.png/>" width="14px" height="14px"/>
                     
                     <span className='ms-1 d-none d-sm-inline'>Mark as Active</span>
                        
                        </li>

                  <li className='reply-menu'>
                     <img src="https://i.ibb.co/8DKgCb7/times-circle.png/>" width="14px" height="14px"/>
                     
                     <span className='ms-1 d-none d-sm-inline'>Mark as Inactive</span>
                        
                    </li>
                       <li className='reply-menu'>
                     <img src="https://i.ibb.co/x1rQ4Kf/delete.png/>" width="14px" height="14px"/>
                     
                     <span className='ms-1 d-none d-sm-inline'>Delete</span>
                        
                    </li>
                       <li className='reply-menu'>
                     <img src="https://i.ibb.co/G03pL20/users-alt.png/>" width="14px" height="14px"/>
                     
                     <span className='ms-1 d-none d-sm-inline'>Add Client</span>
                   
                    
                     </li>
           </ul>
          </div> */}

                  




              <div>
                
                  <div className="main">
                    <div className="popup">
                      <div className="popup-header">
                         {/* <h1><b>New Message</b></h1> <p >🗕︎&nbsp;&nbsp;    ⤢ &nbsp;&nbsp;  🗙︎ &nbsp;</p> */} 
                        {/*   <div>
                <h2 onClick={MinimizePopup }>🗕︎</h2>
                       <h2 onClick={FullScreenPopup}>⤢ </h2>
                       <h2 onClick={closePopup} >🗙︎</h2>
       </div>*/}
      <h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   🗕︎ &nbsp;&nbsp;&nbsp; ⤢  &nbsp;&nbsp;&nbsp; 🗙︎ </h2>
       <div className="midvalues"> 
       <text> <img src="https://i.ibb.co/WfjWvNY/dark-avatar.png"  className="rounded-circle img-fluid mb-3" width="25px" height="23px " ></img> &nbsp;
       <small> code123@example.com</small> &nbsp;&nbsp;&nbsp;
       <img src='https://i.ibb.co/wB0z5wx/icon-down.png' width= '13px' height= '9px'/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
        <p>Hi Mike, <br/>
        <br/>
      
        In alias assumenda et molestias ducimus non officia iusto vel  fugiat asperiores non magnam officia non atque facilis qui quod nostrum. Qui doloremque eaque aut quia commodi aut Quis quasi eum voluptas quod est dolorem distinctio. Id nihil praesentium cum deleniti sapiente ut sequi debitis nam placeat alias.
      <br/><br/>
      Ut fugiat totam est ducimus ipsum vel porro dolorum eum voluptatem doloribus aut voluptatem similique. Eum iusto placeat qui dicta esse ut voluptatibus dolore qui cupiditate quia!
      
        </p>
        </div>
        
         <div>
          
         </div>  
  <div className="modal-footer">
    <div className="fotter-leftside">
        <h3><i class="bi bi-trash3"></i></h3>
  <h3><i class="bi bi-three-dots-vertical"></i></h3>
    </div>

    <div className="fotter-rightside">
        <h3><i class="bi bi-emoji-smile" style={{marginLeft:"15em"}}></i></h3>
  
  <h3><i class="bi bi-paperclip" style={{marginLeft:"17em"}}></i></h3>
  <button style={{marginTop: "-30%"}}>Send Now</button>

  


    </div>
          

              </div>
            </div> 
        </div>
      </div>
    </div>
    )
}
export default PopUp;