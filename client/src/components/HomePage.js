import React from 'react'

const HomePage = (props) =>{
    return(
        <div>
            <span>{props.lawNameList}</span>
            <div className="row justify-content-md-center">
                <div className="card">
                    <div className="card-header" style={{'textAlign':'center'}}>
                        Tìm kiếm văn bản
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="row">
                                <label className="col col-md-auto col-form-label">Từ khóa tìm kiếm: </label>
                                <input type="text" className="col col-md-auto" id=""placeholder="Từ khóa tìm kiếm"/>
                            </div>
                            <div className="row">
                                <label className="col col-md-auto col-form-label">Tìm trong</label>
                                <input type="checkbox" className="col col-sm-auto" id=""/>
                                <label className="col col-md-auto col-form-label">Tiêu đề</label>
                                <input type="checkbox" className="col col-sm-auto" id=""/>
                                <label className="col col-md-auto col-form-label">Trích dẫn</label>
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
            </div>
            
        </div>
    )
}

export default HomePage