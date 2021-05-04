// const mainOsc= new Tone.Oscillator
const vol = new Tone.Volume(-30).toDestination();
// const env = new Tone.Envelope({
//   attack: 0.1,
//   decay: 0.2,
//   sustain: 0.5,
//   release: 0.8,
// }).connect(vol);
let freqConst;
const freqOsc = document.querySelector("#freq-osc");
const oscType = document.querySelector("#oscType");
const partialCount = document.querySelector("#partialCount");
function setValues(component, value) {
  component = document.querySelector(`#${component.toString()}`);
  component.addEventListener("input", () => {
    osc.set({
      component: value,
    });
  });
}
freqOsc.addEventListener("input", (value) => {
  freqConst = freqOsc.value;
  osc.set({
    frequency: freqConst,
  });
});
oscType.addEventListener("input", (value) => {
  osc.set({
    type: oscType.value,
  });
});
const filter = new Tone.Filter(1000, "highpass").connect(vol);
const osc = new Tone.Oscillator(freqConst, "square").connect(filter).start();
