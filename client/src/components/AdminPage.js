import React, {Component} from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import validate from './validate'
import {Link }from 'react-router-dom'
// import {Link} from 'react-router-dom'
// import {getTimeDistance} from '../constants/functions'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} type={type} placeholder={label}/>
        {touched && error && <span>{error}</span>}
      </div>
    </div>
)
  
const renderMembers = ({ fields, meta: { touched, error } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push({})}>Thêm chương</button>
        {touched && error && <span>{error}</span>}
      </li>
      {fields.map((member, index) =>
        <li key={index}>
          <button
            type="button"
            title="Xóa chương"
            onClick={() => fields.remove(index)}></button>
          <h4>Member #{index + 1}</h4>
          
          <Field
            name={`${member}.lastName`}
            type="text"
            component={renderField}
            label="Tên chương"/>
          <FieldArray name={`${member}.hobbies`} component={renderHobbies}/>
        </li>
      )}
    </ul>
)
  
const renderHobbies = ({ fields, meta: { error } }) => (
    <ul>
      <li>
        <button type="button" onClick={() => fields.push()}>Add Hobby</button>
      </li>
      {fields.map((hobby, index) =>
        <li key={index}>
          <button
            type="button"
            title="Remove Hobby"
            onClick={() => fields.remove(index)}/>
          <Field
            name={hobby}
            type="text"
            component={renderField}
            label={`Hobby #${index + 1}`}/>
        </li>
      )}
      {error && <li className="error">{error}</li>}
    </ul>
)
  

class Admin extends Component{
    
    render(){
      console.log(this.props);
      if(!this.props.userID)
      {
          this.props.history.push('/login');
          return null;
      }
      if(!this.props.role){
        this.props.history.push('/login');
          return null;
      }
        const { handleSubmit, pristine, reset, submitting } = this.props
        return(
            <div >
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
                <form onSubmit={handleSubmit}>
                <Field name="clubName" type="text" component={renderField} label="Tên bộ luật"/>
                <FieldArray name="Chương" component={renderMembers}/>
                <div>
                <button type="submit" disabled={submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
            </div>
        )
    }
    
    
}
Admin = reduxForm({
    form: 'contact' // a unique name for this form
  })(Admin);
export default Admin
