import {connect} from 'react-redux'
import {getSeacrchLaw, createLaw, getAllLaw} from '../actions/indexActions'
import AdminPage from '../components/AdminPage'

const mapStateToProps = state => {
    console.log(state);
    return {
        userID: state.accountInfo.userID,
        email: state.accountInfo.email,
        role: state.accountInfo.role,
        lawId: state.adminHelper.lawId,
        tittle: state.adminHelper.tittle,
        subtittle: state.adminHelper.subtittle,
        number: state.adminHelper.number,
        description: state.adminHelper.description,
        organization: state.adminHelper.organization,
        content: state.adminHelper.connect,
        time: state.adminHelper.time,
        lawNameList: state.adminHelper.lawNameList
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        searchLaw: (lawName) => dispatch(getSeacrchLaw(lawName)),
        getLaw: (data) => dispatch(getAllLaw(data)),
        addLaw: (data) => dispatch(createLaw(data)),
    }
};

const admin = connect(mapStateToProps,mapDispatchToProps)(AdminPage);

export default admin