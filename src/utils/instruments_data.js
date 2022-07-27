import guideAudio from '../music/silence-guide.mp3';
import pianoAudio from '../music/outer-wilds-piano.mp3';
import banjoAudio from '../music/outer-wilds-banjo.mp3';
import harmonicaAudio from '../music/outer-wilds-harmonica.mp3';
import fluteAudio from '../music/outer-wilds-flute.mp3';
import drumsAudio from '../music/outer-wilds-drums.mp3';
import whistleAudio from '../music/outer-wilds-whistle.mp3';
import celloAudio from '../music/outer-wilds-stranger.mp3';

export const banjo = {
    relativePath:"../music/outer-wilds-banjo.mp3",
    playing: false,
    audio: new Audio(banjoAudio),
    checkBox: document.getElementById('chkBanjo'),
    name: "Banjo",
}

export const whistle = {
    relativePath:"../music/outer-wilds-whistle.mp3",
    playing:false,
    audio: new Audio(whistleAudio),
    checkBox: document.getElementById('chkWhistle'),
    name: "Whistle",
}

export const flute = {
    relativePath:"../music/outer-wilds-flute.mp3",
    playing:false,
    audio: new Audio(fluteAudio),
    checkBox: document.getElementById('chkFlute'),
    name: "Flute",
}

export const harmonica = {
    relativePath:"../music/outer-wilds-harmonica.mp3",
    playing:false,
    audio: new Audio(harmonicaAudio),
    checkBox: document.getElementById('chkHarmonica'),
    name: "Harmonica",
}

export const drums = {
    relativePath:"../music/outer-wilds-drums.mp3",
    playing:false,
    audio: new Audio(drumsAudio),
    checkBox: document.getElementById('chkDrums'),
    name: "Drums",
}

export const piano = {
    relativePath:"./music/outer-wilds-piano.mp3",
    playing:false,
    audio: new Audio(pianoAudio),
    checkBox: document.getElementById('chkPiano'),
    name: "Piano",
}

export const cello = {
    relativePath:"../music/outer-wilds-stranger.mp3",
    playing:false,
    audio: new Audio(celloAudio),
    checkBox: document.getElementById('chkCello'),
    name: "Cello",
}

export const silenceGuide = {
    relativePath:"../music/silence-guide.mp3",
    playing:false,
    audio: new Audio(guideAudio),
    name: "Silence",
}
