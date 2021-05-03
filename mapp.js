// // // const fmOsc = new Tone.FMOscillator({
// // //   frequency: 200,
// // //   type: "square",
// // //   modulationType: "triangle",
// // //   harmonicity: 0.2,
// // //   modulationIndex: 3,
// // // });
// // var statemeter = "";

// // //function Stop() {}

// // // startbtn.addEventListener("click", () => {
// // //   statemeter = "running";
// // //   console.log("woow");
// // // });
// // // stopbtn.addEventListener("click", () => {
// // //   statemeter = "down";
// // // });
// // // clockbtn.addEventListener("click", () => {
// // //   clock.start();
// // // });
// const clock = new Tone.Clock((time) => {
//   console.log("hello");
//   // if (statemeter == "down") {
//   //   // fatOsc.state = "stopped";
//   //   // fatOsc.stop();
//   //   console.log("woow");
//   // }

//   // if (statemeter == "") {
//   //   // fatOsc.start();
//   //   console.log("woow");
//   // }
// }, 0.1);
// // // document.getElementById("myBtn").addEventListener("click", displayDate);
// console.log("hello");
// function startClock() {
//   const clock = new Tone.Clock((time) => {
//     console.log("hello");
//     // if (statemeter == "down") {
//     //   // fatOsc.state = "stopped";
//     //   // fatOsc.stop();
//     //   console.log("woow");
//     // }

//     // if (statemeter == "") {
//     //   // fatOsc.start();
//     //   console.log("woow");
//     // }
//   }, 2);
//   clock.start();
// }
const AMinorScale = ["A", "B", "C", "D", "E", "F", "G"];
const addOctaveNumbers = (scale, octaveNumber) =>
  scale.map((note) => {
    const firstOctaveNoteIndex =
      scale.indexOf("C") !== -1 ? scale.indexOf("C") : scale.indexOf("C#");
    const noteOctaveNumber =
      scale.indexOf(note) < firstOctaveNoteIndex
        ? octaveNumber - 1
        : octaveNumber;
    return `${note}${noteOctaveNumber}`;
  });
// const synth = new Tone.Synth().toDestination();
// synth.triggerAttackRelease("C4", "8n");

document.getElementById("startbtn").addEventListener("click", function () {
  if (Tone.Transport.state !== "started") {
    Tone.Transport.start();
  } else {
    Tone.Transport.stop();
  }
});
const AMinorScaleWithOctave = addOctaveNumbers(AMinorScale, 4);
// Output ['A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4'];

// AMinorScaleWithOctave.forEach((note, index) => {
//   synth.triggerAttackRelease(note, "4n", index + 1);
// });

const constructMajorChord = (scale, octave, rootNote) => {
  const scaleWithOctave = addOctaveNumbers(scale, octave);

  const getNextChordNote = (note, nextNoteNumber) => {
    const nextNoteInScaleIndex =
      scaleWithOctave.indexOf(note) + nextNoteNumber - 1;
    let nextNote;
    if (typeof scaleWithOctave[nextNoteInScaleIndex] !== "undefined") {
      nextNote = scaleWithOctave[nextNoteInScaleIndex];
    } else {
      nextNote = scaleWithOctave[nextNoteInScaleIndex - 7];
      const updatedOctave = parseInt(nextNote.slice(1)) + 1;
      nextNote = `${nextNote.slice(0, 1)}${updatedOctave}`;
    }

    return nextNote;
  };

  const thirdNote = getNextChordNote(rootNote, 3);
  const fifthNote = getNextChordNote(rootNote, 5);
  const chord = [rootNote, thirdNote, fifthNote];

  return chord;
};
Tone.Transport.bpm.value = 150;
const synth0 = new Tone.PolySynth(Tone.Synth, {
  oscillator: {
    type: "triangle",
  },
}).toDestination();
const IChord = constructMajorChord(AMinorScale, 4, "A3");
// Output: ['A3', 'C4', 'E4']
const VChord = constructMajorChord(AMinorScale, 4, "E4");
// Output: ['E4', 'G4', 'B4']
const VIChord = constructMajorChord(AMinorScale, 3, "F3");
// Output: ['F3', 'A3', 'C3']
const IVChord = constructMajorChord(AMinorScale, 3, "D3");
// Output: ['D3', 'F3', 'A3']
const mainChords = [
  { time: 0, note: IChord, duration: "2n." },
  { time: "0:3", note: VChord, duration: "4n" },
  { time: "1:0", note: VIChord, duration: "2n." },
  { time: "1:3", note: VChord, duration: "4n" },
  { time: "2:0", note: IVChord, duration: "2n." },
  { time: "2:3", note: VChord, duration: "4n" },
  { time: "3:0", note: VIChord, duration: "2n" },
  { time: "3:2", note: VChord, duration: "4n" },
  { time: "3:3", note: IVChord, duration: "4n" },
  { time: "4:0", note: IChord, duration: "2n." },
  { time: "4:3", note: VChord, duration: "4n" },
  { time: "5:0", note: VIChord, duration: "2n." },
  { time: "5:3", note: VChord, duration: "4n" },
  { time: "6:0", note: IVChord, duration: "2n." },
  { time: "6:3", note: VChord, duration: "4n" },
  { time: "7:0", note: VIChord, duration: "2n" },
  { time: "7:2", note: VChord, duration: "4n" },
  { time: "7:3", note: IVChord, duration: "4n" },
];
const part = new Tone.Part(function (time, note) {
  synth0.triggerAttackRelease(note.note, note.duration, time);
}, mainChords).start(0);
