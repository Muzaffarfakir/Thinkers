// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDp09lUjLI3p8if7gHmdTJLp7keRTYz9Ag",
  authDomain: "twitterm-a0f4f.firebaseapp.com",
  databaseURL: "https://twitterm-a0f4f-default-rtdb.firebaseio.com",
  projectId: "twitterm-a0f4f",
  storageBucket: "twitterm-a0f4f.appspot.com",
  messagingSenderId: "176217873055",
  appId: "1:176217873055:web:7508031caa296d42cba0aa",
  measurementId: "G-5Y9PM7CHSS"
};
firebase.initializeApp(firebaseConfig);
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let content = document.querySelector('.card');
let db = firebase.database();
let refer = db.ref('Message');
let unid = refer.push().key;
btn.addEventListener('click', btnclick)

function btnclick(e) {
  refer.child(unid).set({
    inp: inp.value,
  })
  inp.value = "";

}

refer.on('value', (snap) => {
  content.innerHTML = "";
  snap.forEach((show) => {
    content.innerHTML += `<div  class="card p-3 m-3">  <h6> ${show.val().inp}</h6></div>`
  })

});
