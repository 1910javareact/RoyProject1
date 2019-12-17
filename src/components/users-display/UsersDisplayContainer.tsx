import { connect } from "react-redux";
import { IState } from "../../reducers";
import { UsersDisplayComponent } from "./UsersDisplayComponent";

const mapStateToProps = (state:IState, ownProps:any) => {
    return {
        user:state.login.user,
        history:ownProps.history,
        match:ownProps.match,
        location:ownProps.location
    }
}

export default connect(mapStateToProps)(UsersDisplayComponent)