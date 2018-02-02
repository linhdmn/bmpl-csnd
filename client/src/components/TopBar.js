import React from 'react'
import {Link }from 'react-router-dom'

const Topbar = (props) =>{
    if(!props.role){
        return(
            <div className="Header ">
               <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow navbar-expand-md fixed-top">
               <h5 class="my-0 mr-md-auto font-weight-normal">
               <Link to="/" style={{ textDecoration: 'none' }}><span>Bộ môn pháp luật</span></Link>
               </h5>
               <nav class="my-2 my-md-0 mr-md-3">
                 <a class="p-2 text-dark" href="#">Văn bản mới</a>
                 <a class="p-2 text-dark" href="#">Tìm kiếm nâng cao</a>
               </nav>
               <a >
                   <button class="btn btn-outline-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        So sánh
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">So sánh theo năm</a>
                                <a className="dropdown-item" href="#">So sánh theo cơ quan ban hành</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </a>
             </div>
                
                
            </div>
            
        )
    }
    else{
        return(
            <div className="Header ">
               <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow navbar-expand-md fixed-top">
               <h5 class="my-0 mr-md-auto font-weight-normal">Bộ môn pháp luật</h5>
               <nav class="my-2 my-md-0 mr-md-3">
                 <a class="p-2 text-dark" href="#">Danh sách văn bản luật</a>
                 <a class="p-2 text-dark" href="#">Văn bản mới</a>
                 <a class="p-2 text-dark" href="#">Tìm kiếm nâng cao</a>
               </nav>
               <a >
                   <button class="btn btn-outline-primary dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        So sánh
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">So sánh theo năm</a>
                                <a className="dropdown-item" href="#">So sánh theo cơ quan ban hành</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </a>
             </div>
                
                
            </div>
            
        )
    }
    
}

export default Topbar