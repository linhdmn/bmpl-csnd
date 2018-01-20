import {connect} from 'react-redux'
import {postLogin, logoutTodo,getAllLaw} from '../actions/indexActions'
import LoginForm from '../components/LoginForm'

const mapStateToProps = state =>{
    console.log(state);
    return{
        userID: state.accountInfo.userID,
        email: state.accountInfo.email,
        role: state.accountInfo.role
    }
};
const mapDispatchToProps = dispatch =>{
    return{
        Login : (data) => dispatch(postLogin(data)),
        getLaw: (data) => dispatch(getAllLaw(data)),
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm);

export default Login;