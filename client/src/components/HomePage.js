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
            <div className='row'> BỘ LUẬT HÌNH SỰ</div>
            <div className='row'>
            <span><a href="#Phan_nhất_Chuong_I" class="a_chuong">Chương I</a></span><ul><li class="dieu"><a href="#Phan_nhất_Chuong_I_Dieu_1" class="a_dieu" title="Nhiệm vụ của Bộ luật hình sự">Điều 1</a></li><li class="dieu"><a href="#Phan_nhất_Chuong_I_Dieu_2" class="a_dieu" title="Cơ sở của trách nhiệm hình sự">Điều 2</a></li><li class="dieu"><a href="#Phan_nhất_Chuong_I_Dieu_3" class="a_dieu" title="Nguyên tắc xử lý">Điều 3</a></li><li class="dieu"><a href="#Phan_nhất_Chuong_I_Dieu_4" class="a_dieu" title="Trách nhiệm phòng ngừa và đấu tranh chống tội phạm">Điều 4</a></li></ul>
            </div>
        </div>
    )
}

export default HomePage