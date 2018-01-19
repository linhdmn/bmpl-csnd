import {connect} from 'react-redux'
import {getSeacrchLaw, getAllLaw} from '../actions/indexActions'
import TopBar from '../components/TopBar'

const mapStateToProps = state => {
    console.log(state);
    return {
        lawId: state.homePage.lawId,
        tittle: state.homePage.tittle,
        subtittle: state.homePage.subtittle,
        number: state.homePage.number,
        description: state.homePage.description,
        organization: state.homePage.organization,
        content: state.homePage.connect,
        time: state.homePage.time,
        lawNameList: state.homePage.lawNameList
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        searchLaw: (lawName) => dispatch(getSeacrchLaw(lawName)),
        getLaw: (data) => dispatch(getAllLaw(data)),
    }
};

const Header = connect(mapStateToProps,mapDispatchToProps)(TopBar);

export default Header