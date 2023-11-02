import { useState } from "react";
import Countdown from "./Countdown";
import Wheel from "./Wheel";
import "./styles.css";

export default function Npsw() {
  const [blue, setBlue] = useState(0);
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [purple, setPurple] = useState(0);
  const [yellow, setYellow] = useState(0);
  const [orange, setOrange] = useState(0);
  const [black, setBlack] = useState(0);
  const [teal, setTeal] = useState(0);
  const [pink, setPink] = useState(0);
  const [brown, setBrown] = useState(0);

  const [showNext, setShowNext] = useState("Show Timer");
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
    setShowNext(buttonDisplay(showNext));
  }

  function buttonDisplay(text) {
    console.log("inButton Display");
    if (text == "Show Timer") {
      return "Show Wheel";
    } else {
      return "Show Timer";
    }
  }

  return (
    <div className="App">
      <h1 className="display-1 title">NPSW 5 Second Rule Activity</h1>

      <div className="main">
        <div className="wheelButtons">
          <button type="button" class="btn btn-primary btn-lg" onClick={toggle}>
            {showNext}
          </button>
        </div>
        <div className="wheel">
          <div hidden={isOpen}>
            <iframe
              src="https://spinthewheel.app/XWbVhv67gt"
              width="550px"
              height="550px"
            ></iframe>
          </div>
          {isOpen && <Countdown />}
        </div>

        <div className="scoreBoard">
          <h1>SCOREBOARD</h1>

          <div className="container">
            <div className="row" id="row">
              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="blue" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{blue}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setBlue(blue + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setBlue(blue - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="red" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{red}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setRed(red + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setRed(red - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="black" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{black}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setBlack(black + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setBlack(black - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="green" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{green}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setGreen(green + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setGreen(green - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="purple" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{purple}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setPurple(purple + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setPurple(purple - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="teal" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{teal}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setTeal(teal + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setTeal(teal - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="yellow" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{yellow}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setYellow(yellow + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setYellow(yellow - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="orange" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{orange}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setOrange(orange + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setOrange(orange - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="brown" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{brown}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setBrown(brown + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setBrown(brown - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-4 d-flex justify-content-center">
                <div className="card" id="pink" style={{ width: 180 }}>
                  <div class="card-body">
                    <h2 class="card-title">{pink}</h2>
                    <div className="buttons">
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setPink(pink + 1)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-light"
                        onClick={() => setPink(pink - 1)}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
