// 1. import

// 2. Action -> variable area(변수)
const STRAT_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADDSECOND_TIMER = "ADDSECOND_TIMER";

// 3. Action Creator -> How ?
const startTimer = () => {
  return {
    type: STRAT_TIMER
  };
};
const restartTimer = () => {
  return {
    type: RESTART_TIMER
  };
};
const addSecond = () => {
  return {
    type: ADDSECOND_TIMER
  };
};
// 4. Reducer (main*)
const initialState = {
  isPlaying: false,
  timerDuration: 1380,
  elabsed: 0
};

/* 이니셜 스테이트로 시작할거고, 액션을 보낼때마다 -> 디폴트 값으로 리듀서를 실행한다. */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STRAT_TIMER:
      return applyStartTimer(state);
    case RESTART_TIMER:
      return applyRestartTimer(state);
    case ADDSECOND_TIMER:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// 5. Reducer Function
const applyStartTimer = state => {
  return {
    ...state,
    isPlaying: true
  };
};
const applyRestartTimer = state => {
  return {
    ...state,
    isPlaying: false,
    elabsed: 0
  };
};
const applyAddSecond = state => {
  return {
    ...state,
    elabsed: state.elabsed + 1
  };
};

// 6. Export Action Creator
const actionCreator = {
  startTimer,
  restartTimer,
  addSecond
};

export { actionCreator };

// 7. Export Reducer
export default reducer;
