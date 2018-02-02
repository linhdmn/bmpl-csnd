import React from 'react'
import {Link} from "react-router-dom"

const HomePage = (props) =>{
    return(
        <div>
            
            <span>{props.lawNameList}</span>
            <div className="row">
        
                <div className="col">
                    {/* <div className="card mt-3">
                    
                        <div className="card-header bg-light" style={{'textAlign':'center'}}>
                            <b>Tìm kiếm văn bản</b>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row ">
                                    <label className="col col-md-auto form-label ">
                                        Từ khóa tìm kiếm: 
                                        <input type="text" className="form-input" id=""placeholder="Bộ luật hình sự"/>
                                    </label>
                                    <div className="form-inline">
                                    <label className="col-md-auto form-check-label">Tìm trong: </label>
                                    
                                    <label className="col-md-auto col-form-label">
                                        <input type="checkbox" className="form-input" id=""/>
                                        Tiêu đề
                                    </label>
                                    <label className="col-md-auto col-form-label">
                                        <input type="checkbox" className="col col-sm-auto" id=""/>
                                        Trích dẫn
                                    </label>
                                </div>
                                </div>
                                
                                <div className="row">
                                    <label className="col col-md-auto col-form-label">Thời gian ban hành: </label>
                                    <label className="col col-md-auto col-form-label">Từ ngày: </label>
                                    <input type="date" className="col col-sm-2" id=""placeholder=""/>
                                    <label className="col col-md-auto col-form-label">Đến ngày: </label>
                                    <input type="date" className="col col-sm-2" id=""placeholder=""/>
                                </div>
                                <button type="button" className="btn btn-primary">Tìm kiếm </button>
                            </form>
                        </div>
                        
                    </div> */}
                    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                        <h1 class="display-4 text-info"><b>Tìm kiếm văn bản</b></h1>
                        <p class="lead">
                            <label className="col col-md-auto form-label ">
                                Từ khóa tìm kiếm: 
                                
                            </label>
                            <input type="text" className="form-input" id=""placeholder="vd:Tên bộ luật"/>
                            <button type="button" className="btn btn-primary">Tìm kiếm </button>
                        </p>
                    </div>
                    {/* <div className="card mt-3">
                            <div className='card-header bg-light text-center'>
                                <ul className="nav nav-tabs card-header-tabs">
                                    <li className="nav-item">
                                        <a className="nav-link active">
                                            <Link to="/dashboard/content">
                                            Mục lục
                                            </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " >
                                        <Link to="/dashboard/#">
                                        Thuộc tính
                                        </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " >
                                        <Link to="/dashboard/#">
                                        Văn bản liên quan
                                        </Link>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " >
                                        <Link to="/dashboard/#">
                                        Lịch sử
                                        </Link>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='card-body'>

                                <p className="card-tittle">BỘ LUẬT HÌNH SỰ</p>
                                <span><a href="#Phan_nhất_Chuong_I" className="a_chuong">Chương I: ĐIỀU KHOẢN CƠ BẢN</a>
                                </span>
                                    <ul>
                                        <li className="dieu">
                                            <a href="#Phan_nhất_Chuong_I_Dieu_1" className="a_dieu" title="Nhiệm vụ của Bộ luật hình sự">Điều 1: Nhiệm vụ của Bộ luật hình sự</a>
                                        </li>
                                        <li className="dieu">
                                            <a href="#Phan_nhất_Chuong_I_Dieu_2" className="a_dieu" title="Cơ sở của trách nhiệm hình sự">Điều 2: Cơ sở của trách nhiệm hình sự</a>
                                        </li>
                                        <li className="dieu"><a href="#Phan_nhất_Chuong_I_Dieu_3" className="a_dieu" title="Nguyên tắc xử lý">Điều 3: Nguyên tắc xử lý</a>
                                        </li>
                                        <li className="dieu"><a href="#Phan_nhất_Chuong_I_Dieu_4" className="a_dieu" title="Trách nhiệm phòng ngừa và đấu tranh chống tội phạm">Điều 4: Trách nhiệm phòng ngừa và đấu tranh chống tội phạm</a>
                                        </li></ul>
                            </div>
                    </div> */}
                    <div class="my-3 p-3 bg-white rounded box-shadow">
                        <h6 class="border-bottom border-gray pb-2 mb-0">Các văn bản mới</h6>
                        <div class="media text-muted pt-3">
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">Luật sửa đổi Bộ luật Hình sự 2017 </strong>
                                    <a href="#">Xem</a>
                                </div>
                                <span class="d-block">Quốc hội</span>
                            </div>
                        </div>
                        <div class="media text-muted pt-3">
                        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">Luật sửa đổi Bộ luật Hình sự 2015</strong>
                            <a href="#">Xem</a>
                            </div>
                            <span class="d-block">Quốc hội</span>
                        </div>
                        </div>
                        <div class="media text-muted pt-3">
                        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">Bộ luật hình sự sửa đổi 2009 </strong>
                            <a href="#">Xem</a>
                            </div>
                            <span class="d-block">Quốc hội</span>
                        </div>
                        </div>
                        <small class="d-block text-right mt-3">
                        <a href="#">Tất cả văn bản mới</a>
                        </small>
                    </div>
                    <div class="my-3 p-3 bg-white rounded box-shadow">
                        <h6 class="border-bottom border-gray pb-2 mb-0">Các văn bản mới cập nhật</h6>
                        <div class="media text-muted pt-3">
                            <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                                <div class="d-flex justify-content-between align-items-center w-100">
                                    <strong class="text-gray-dark">Luật sửa đổi Bộ luật Hình sự 2017 </strong>
                                    <a href="#">Xem</a>
                                </div>
                                <span class="d-block">Quốc hội</span>
                            </div>
                        </div>
                        <div class="media text-muted pt-3">
                        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">Luật sửa đổi Bộ luật Hình sự 2015</strong>
                            <a href="#">Xem</a>
                            </div>
                            <span class="d-block">Quốc hội</span>
                        </div>
                        </div>
                        <div class="media text-muted pt-3">
                        <div class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <div class="d-flex justify-content-between align-items-center w-100">
                            <strong class="text-gray-dark">Bộ luật hình sự sửa đổi 2009 </strong>
                            <a href="#">Xem</a>
                            </div>
                            <span class="d-block">Quốc hội</span>
                        </div>
                        </div>
                        <small class="d-block text-right mt-3">
                        <a href="#">Tất cả văn bản mới</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage