import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appHeader">
        <h1 className="appTitle">OUTER WILDS MUSIC BOX</h1>
        <p className="appDescription">
          Activate and deactivate the instruments of each of the travelers to
          your liking
        </p>
      </div>

      <div className="inputBox">
        <input className="checkBoxElement" id="chkBanjo" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkBanjo">
          Banjo
        </label>

        <input className="checkBoxElement" id="chkWhistle" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkWhistle">
          Whistle
        </label>

        <input className="checkBoxElement" id="chkFlute" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkFlute">
          Flute
        </label>

        <input className="checkBoxElement" id="chkHarmonica" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkHarmonica">
          Harmonica
        </label>

        <input className="checkBoxElement" id="chkDrums" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkDrums">
          Drums
        </label>

        <input className="checkBoxElement" id="chkPiano" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkPiano">
          Piano
        </label>

        <input className="checkBoxElement" id="chkCello" type="checkbox" />
        <label className="checkBoxLabel" htmlFor="chkCello">
          Stranger
        </label>
      </div>
    </div>
  );
}

export default App;
