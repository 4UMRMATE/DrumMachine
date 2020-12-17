import React from "react";
import "./App.css";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const bankTwo = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Chord-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Chord-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Chord-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Shaker",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Punchy-Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Side-Stick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Snare",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];

const randomColors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
];

const defaultStyle = {
  backgroundColor: "whitesmoke",
  boxShadow: "7.5px 10px 10px blue",
};

const powerOnStyle = {
  color: "rgb(0, 255, 0)",
};

const powerOffStyle = {
  color: "red",
};

const bankLeft = {
  flexDirection: "row",
};

const bankRight = {
  flexDirection: "row-reverse",
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      powerOn: true,
      powerStyle: powerOnStyle,
      currentBank: bankOne,
      bankState: bankLeft,
      displayText: "",
      padStyle: defaultStyle,
      volume: 50,
    };
    this.handleChange = this.handleChange.bind(this);
    this.changeCurrentBank = this.changeCurrentBank.bind(this);
    this.powerOnOff = this.powerOnOff.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleChange);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleChange);
  }

  handleChange(e) {
    let volume = 50;
    if (e.target.value != undefined) {
      volume = e.target.value;
      this.setState({
        volume: volume,
        displayText: "Volume: " + this.state.volume,
      });
    }
    if (this.state.powerOn) {
      let padCode = "";
      if (e.target.attributes.keycode != undefined) {
        padCode = e.target.attributes.keycode.value;
      }
      this.state.currentBank.filter((pad) => {
        let padId = pad.id.replace(/-/g, " ");
        if (pad.keyCode === e.keyCode || pad.keyCode === +padCode) {
          this.setState({
            displayText: padId,
          });
          this.playAudio(pad);
        }
      });
    }
  }

  playAudio(pad) {
    let audio = document.getElementById(pad.keyTrigger);
    audio.currentTime = 0;
    audio.volume = this.state.volume / 100;
    audio.play();

    // Pad Styles
    let activePad = document.getElementById(pad.id);
    activePad.style.backgroundColor =
      randomColors[Math.floor(Math.random() * 50)];
    setTimeout(() => {
      activePad.style.backgroundColor = "whitesmoke";
    }, 500);
  }

  powerOnOff() {
    this.setState({
      powerOn: !this.state.powerOn,
    });
    this.state.powerOn
      ? this.setState({
          powerStyle: powerOffStyle,
          displayText: "Power Off",
        })
      : this.setState({
          powerStyle: powerOnStyle,
          displayText: "Power On",
        });
  }

  changeCurrentBank() {
    this.state.currentBank === bankOne
      ? this.setState({
          currentBank: bankTwo,
          bankState: bankRight,
          displayText: "Piano Kit",
        })
      : this.setState({
          currentBank: bankOne,
          bankState: bankLeft,
          displayText: "Heater Kit",
        });
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid container" id="drum-machine">
          <Pads
            currentBank={this.state.currentBank}
            handler={this.handleChange}
            padStyle={this.state.padStyle}
            powerOn={this.state.powerOn}
          />
          <Tools
            displayText={this.state.displayText}
            bankState={this.state.bankState}
            bankHandler={this.changeCurrentBank}
            powerSwitch={this.state.powerStyle}
            powerHandler={this.powerOnOff}
            hanleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

class Pads extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Pads">
        <div className="pad-bank">
          {this.props.currentBank.map((pad) => {
            if (this.props.powerOn) {
              return (
                <div
                  className="drum-pad"
                  id={pad.id}
                  key={pad.id}
                  keycode={pad.keyCode}
                  onClick={this.props.handler}
                  style={this.props.padStyle}
                >
                  <audio
                    className="clip"
                    id={pad.keyTrigger}
                    src={pad.url}
                  ></audio>
                  {pad.keyTrigger}
                </div>
              );
            } else {
              return (
                <div
                  className="drum-pad"
                  id={pad.id}
                  key={pad.id}
                  keycode={pad.keyCode}
                  onClick={this.props.handler}
                  style={this.props.padStyle}
                >
                  <audio className="clip" id={pad.keyTrigger} src=""></audio>
                  {pad.keyTrigger}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

class Tools extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tools">
        <i
          className="fa fa-power-off power"
          style={this.props.powerSwitch}
          onClick={this.props.powerHandler}
        ></i>
        <span id="display">
          <p>{this.props.displayText}</p>
        </span>
        <div className="volume">
          <input type="range" onChange={this.props.hanleChange} />
        </div>
        <div className="kit-switcher">
          <p style={{ color: "white" }}>Kit Switcher</p>
          <div
            className="instruments"
            style={this.props.bankState}
            onClick={this.props.bankHandler}
          >
            <span className="switcher"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
