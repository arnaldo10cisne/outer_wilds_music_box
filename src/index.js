import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import guideAudio from './music/silence-guide.mp3';
import pianoAudio from './music/outer-wilds-piano.mp3';
import banjoAudio from './music/outer-wilds-banjo.mp3';
import harmonicaAudio from './music/outer-wilds-harmonica.mp3';
import fluteAudio from './music/outer-wilds-flute.mp3';
import drumsAudio from './music/outer-wilds-drums.mp3';
import whistleAudio from './music/outer-wilds-whistle.mp3';
import celloAudio from './music/outer-wilds-stranger.mp3';

import {
  banjo,
  whistle,
  piano,
  harmonica,
  flute,
  cello,
  silenceGuide,
  drums
} from './utils/instruments_data';
// import Elem from './modules/elements.js';

//REACT RENDER
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// INSTRUMENT FILES
// const banjo = {
//   relativePath:"../music/outer-wilds-banjo.mp3",
//   playing: false,
//   audio: new Audio(banjoAudio),
//   checkBox: document.getElementById('chkBanjo'),
//   name: "Banjo"
// }
// const whistle = {
//   relativePath:"../music/outer-wilds-whistle.mp3",
//   playing:false,
//   audio: new Audio(whistleAudio),
//   checkBox: document.getElementById('chkWhistle'),
// }
// const flute = {
//   relativePath:"../music/outer-wilds-flute.mp3",
//   playing:false,
//   audio: new Audio(fluteAudio),
//   checkBox: document.getElementById('chkFlute'),
// }
// const harmonica = {
//   relativePath:"../music/outer-wilds-harmonica.mp3",
//   playing:false,
//   audio: new Audio(harmonicaAudio),
//   checkBox: document.getElementById('chkHarmonica'),
// }
// const drums = {
//   relativePath:"../music/outer-wilds-drums.mp3",
//   playing:false,
//   audio: new Audio(drumsAudio),
//   checkBox: document.getElementById('chkDrums'),
// }
// const piano = {
//   relativePath:"./music/outer-wilds-piano.mp3",
//   playing:false,
//   audio: new Audio(pianoAudio),
//   checkBox: document.getElementById('chkPiano'),
// }
// const cello = {
//   relativePath:"../music/outer-wilds-stranger.mp3",
//   playing:false,
//   audio: new Audio(celloAudio),
//   checkBox: document.getElementById('chkCello'),
// }
// const silenceGuide = {
//   relativePath:"../music/silence-guide.mp3",
//   playing:false,
//   audio: new Audio(guideAudio),
// }

const instrumentsArray = [banjo, whistle, harmonica, piano, flute, drums, cello]

const getNumberOfActiveInstruments = () => {
  let number = 0
  instrumentsArray.forEach(instrument => {
    if (instrument.checkBox.checked) {
      number++
    }
  });
  return number
}

instrumentsArray.forEach(instrument => {
  instrument.checkBox.addEventListener('change', () => {
    let numberOfActiveInstruments = getNumberOfActiveInstruments()
    console.log(numberOfActiveInstruments)
    if (instrument.checkBox.checked) {
      if (numberOfActiveInstruments == 1) {
        instrumentsArray.forEach(elem => {
          console.log('GUIDE START')
          silenceGuide.audio.currentTime = 0
          silenceGuide.audio.play()
          elem.audio.currentTime = 0
          elem.audio.play()
          elem.audio.volume = 0
          elem.playing = false
        });
        instrument.audio.volume = 1
        instrument.playing = true
      } else if (numberOfActiveInstruments > 1) {
        instrument.audio.volume = 1
        instrument.playing = true
      }
    } else {
      if (numberOfActiveInstruments == 0) {
        instrumentsArray.forEach(elem => {
          silenceGuide.audio.pause()
          silenceGuide.audio.currentTime = 0
          elem.audio.pause()
          elem.audio.volume = 0
          elem.playing = false
        });
      } else if (numberOfActiveInstruments > 0) {
        instrument.audio.volume = 0
        instrument.playing = false
      }
    }

    console.log(instrument)

  })
});

silenceGuide.audio.addEventListener('ended', () => {
  console.log('GUIDE ENDED')
  console.log('GUIDE START')
  silenceGuide.audio.currentTime = 0
  silenceGuide.audio.play()
  instrumentsArray.forEach(elem => {
    elem.audio.pause()
    elem.audio.currentTime = 0
    elem.audio.play()
    elem.audio.volume = 0
    if (elem.checkBox.checked) {
      elem.audio.volume = 1
    }
  });
})