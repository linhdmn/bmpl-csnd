import React from 'react'

const Topbar = () =>{
    return(
        <div className="Header">
            <div className="card" >
                <div className="card-body" style={{'textAlign':'center'}}>
                    <h5 className="card-title">BỘ MÔN PHÁP LUẬT</h5>
                    <p className="card-text">Công cụ nghiên cứu bộ luật hình sự và bộ luật tố tụng hình sự</p>
                </div>
            </div>
            <div className="navbar navbar-expand-lg bg-success justify-content-between">
                <div className="btn-group">
                    <button type="button" className="btn btn-success">Trang chủ</button>
                    <button type="button" className="btn btn-success">Văn bản mới</button>
                    <button type="button" className="btn btn-success">Tìm kiếm</button>
                    <div className="dropdown">
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            So sánh
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">So sánh theo năm</a>
                            <a className="dropdown-item" href="#">So sánh theo cơ quan ban hành</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="Side">
                <ul className="nav navbar-nav ml-auto">
                    
                </ul>
            </div>
        </div>
    )
}

export default Topbar