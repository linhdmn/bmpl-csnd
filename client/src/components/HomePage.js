import React from 'react'
import {Link} from "react-router-dom"

const HomePage = (props) =>{
    return(
        <div>
            
            <span>{props.lawNameList}</span>
            <div className="row">
        
                <div className="col">
                    <div className="card mt-3">
                    
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
                        
                    </div>
                    <div className="card mt-3">
                            
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
                        </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage