import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "../Button";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;

  return;
}

class Timer extends React.Component {
  shouldComponentUpdate = (nextProps, nextstate) => {
    const currentProps = this.props;
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      const timerInterval = setInterval(() => {
        currentProps.addSecond();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      clearInterval(this.state.interval);
    }
    return true;
  };
  render() {
    const {
      isPlaying,
      elabsed,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.upArea}>
          <Text style={styles.time}>{formatTime(timerDuration - elabsed)}</Text>
        </View>

        <View style={styles.downArea}>
          {isPlaying ? (
            <Button iconName="stop" action={restartTimer} />
          ) : (
            <Button iconName="play" action={startTimer} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  upArea: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  downArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    fontSize: 40,
    fontWeight: "bold"
  }
});

export default Timer;
