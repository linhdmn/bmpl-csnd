import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="">
                <div className="card bg-secondary text-white" style={{'height':'40px'}}>
                    <div className="row">
                        <div className="col">
                        Công trinh nghiên cứu của:
                        </div>
                        <div className="col">
                        Số điện thoại : 
                        </div>
                        <div className="col">
                        Email : 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;