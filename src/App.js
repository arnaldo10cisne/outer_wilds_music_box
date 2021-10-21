function App() {
  return (
    <div className="App">
      <h1>OUTER WILDS MUSIC BOX</h1>
      <p>
        Activate and deactivate the instruments of each of the travelers to your liking
      </p>
      <input id="chkBanjo" type="checkbox" /><label>Banjo</label>
      <input id="chkWhistle" type="checkbox" /><label>Whistle</label>
      <input id="chkFlute" type="checkbox" /><label>Flute</label>
      <input id="chkHarmonica" type="checkbox" /><label>Harmonica</label>
      <input id="chkDrums" type="checkbox" /><label>Drums</label>
      <input id="chkPiano" type="checkbox" /><label>Piano</label>
      <input id="chkCello" type="checkbox" /><label>Cello</label>
    </div>
  );
}

export default App;
