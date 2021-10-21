// INSTRUMENT FILES
const banjo = {
    relativePath:"../music/outer-wilds-banjo.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-banjo.mp3"),
    checkBox: document.getElementById('chkBanjo'),
}
const whistle = {
    relativePath:"../music/outer-wilds-whistle.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-whistle.mp3"),
    checkBox: document.getElementById('chkWhistle'),
}
const flute = {
    relativePath:"../music/outer-wilds-flute.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-flute.mp3"),
    checkBox: document.getElementById('chkFlute'),
}
const harmonica = {
    relativePath:"../music/outer-wilds-harmonica.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-harmonica.mp3"),
    checkBox: document.getElementById('chkHarmonica'),
}
const drums = {
    relativePath:"../music/outer-wilds-drums.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-drums.mp3"),
    checkBox: document.getElementById('chkDrums'),
}
const piano = {
    relativePath:"../music/outer-wilds-piano.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-piano.mp3"),
    checkBox: document.getElementById('chkPiano'),
}
const cello = {
    relativePath:"../music/outer-wilds-stranger.mp3",
    playing:true,
    audio: new Audio("../music/outer-wilds-stranger.mp3"),
    checkBox: document.getElementById('chkCello'),
}

// ALTERNATIVE SINTAX
// const banjo = new (function () {
//     this.relativePath="../music/outer-wilds-banjo.mp3"
//     this.playing=true
//     this.audio = new Audio(this.relativePath)
// })

// export default Elem;