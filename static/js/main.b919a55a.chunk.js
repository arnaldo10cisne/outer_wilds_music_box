(this.webpackJsonpouter_wilds_music_box=this.webpackJsonpouter_wilds_music_box||[]).push([[0],{10:function(e,c,a){"use strict";a.r(c);var i=a(1),t=a.n(i),o=a(3),l=a.n(o),n=(a(8),a(0));var s=function(){return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsxs)("div",{className:"appHeader",children:[Object(n.jsx)("h1",{className:"appTitle",children:"OUTER WILDS MUSIC BOX"}),Object(n.jsx)("p",{className:"appDescription",children:"Activate and deactivate the instruments of each of the travelers to your liking"})]}),Object(n.jsxs)("div",{className:"inputBox",children:[Object(n.jsx)("input",{className:"checkBoxElement",id:"chkBanjo",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkBanjo",children:"Banjo"}),Object(n.jsx)("input",{className:"checkBoxElement",id:"chkWhistle",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkWhistle",children:"Whistle"}),Object(n.jsx)("input",{className:"checkBoxElement",id:"chkFlute",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkFlute",children:"Flute"}),Object(n.jsx)("input",{className:"checkBoxElement",id:"chkHarmonica",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkHarmonica",children:"Harmonica"}),Object(n.jsx)("input",{className:"checkBoxElement",id:"chkDrums",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkDrums",children:"Drums"}),Object(n.jsx)("input",{className:"checkBoxElement",id:"chkPiano",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkPiano",children:"Piano"}),Object(n.jsx)("input",{className:"checkBoxElement",id:"chkCello",type:"checkbox"}),Object(n.jsx)("label",{className:"checkBoxLabel",htmlFor:"chkCello",children:"Stranger"})]})]})},u=a.p+"static/media/silence-guide.272e1c70.mp3",d=a.p+"static/media/outer-wilds-piano.ac5800be.mp3",m=a.p+"static/media/outer-wilds-banjo.5da443d6.mp3",h=a.p+"static/media/outer-wilds-harmonica.e9fab8f9.mp3",r=a.p+"static/media/outer-wilds-flute.9a2a3744.mp3",p=a.p+"static/media/outer-wilds-drums.422a7cc3.mp3",k=a.p+"static/media/outer-wilds-whistle.f8037762.mp3",x=a.p+"static/media/outer-wilds-stranger.d6dc2693.mp3";l.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(s,{})}),document.getElementById("root"));var b={relativePath:"../music/outer-wilds-banjo.mp3",playing:!1,audio:new Audio(m),checkBox:document.getElementById("chkBanjo")},j={relativePath:"../music/outer-wilds-whistle.mp3",playing:!1,audio:new Audio(k),checkBox:document.getElementById("chkWhistle")},B={relativePath:"../music/outer-wilds-flute.mp3",playing:!1,audio:new Audio(r),checkBox:document.getElementById("chkFlute")},g={relativePath:"../music/outer-wilds-harmonica.mp3",playing:!1,audio:new Audio(h),checkBox:document.getElementById("chkHarmonica")},y={relativePath:"../music/outer-wilds-drums.mp3",playing:!1,audio:new Audio(p),checkBox:document.getElementById("chkDrums")},v={relativePath:"./music/outer-wilds-piano.mp3",playing:!1,audio:new Audio(d),checkBox:document.getElementById("chkPiano")},w={relativePath:"../music/outer-wilds-stranger.mp3",playing:!1,audio:new Audio(x),checkBox:document.getElementById("chkCello")},E={relativePath:"../music/silence-guide.mp3",playing:!1,audio:new Audio(u)},f=[b,j,g,v,B,y,w];f.forEach((function(e){e.checkBox.addEventListener("change",(function(){var c=function(){var e=0;return f.forEach((function(c){c.checkBox.checked&&e++})),e}();console.log(c),e.checkBox.checked?1==c?(f.forEach((function(e){console.log("GUIDE START"),E.audio.currentTime=0,E.audio.play(),e.audio.currentTime=0,e.audio.play(),e.audio.volume=0,e.playing=!1})),e.audio.volume=1,e.playing=!0):c>1&&(e.audio.volume=1,e.playing=!0):0==c?f.forEach((function(e){E.audio.pause(),E.audio.currentTime=0,e.audio.pause(),e.audio.volume=0,e.playing=!1})):c>0&&(e.audio.volume=0,e.playing=!1),console.log(e)}))})),E.audio.addEventListener("ended",(function(){console.log("GUIDE ENDED"),console.log("GUIDE START"),E.audio.currentTime=0,E.audio.play(),f.forEach((function(e){e.audio.pause(),e.audio.currentTime=0,e.audio.play(),e.audio.volume=0,e.checkBox.checked&&(e.audio.volume=1)}))}))},8:function(e,c,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.b919a55a.chunk.js.map