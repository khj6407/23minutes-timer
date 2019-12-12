import Timer from "./timerPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator as tomatoActions } from "../../reducer";

mapStateProps = state => {
  const { isPlaying, timerDuration, elabsed } = state;

  console.log(isPlaying, timerDuration, elabsed);

  return {
    isPlaying,
    timerDuration,
    elabsed
  };
};

mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
    restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
    addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
  };
};

export default connect(mapStateProps, mapDispatchToProps)(Timer);
