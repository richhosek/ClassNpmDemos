// 
const scribble = require('scribbletune');
console.log(scribble.listChords());

let kick, bass;
 
// 4 by 4 kick
kick = scribble.clip({
    notes: ['c2'],
    pattern: 'x---'.repeat(4)
});
scribble.midi(kick, 'kick.mid');
 
// A simple bass line
bass = scribble.clip({
    notes: scribble.scale('a', 'minor', 2).slice(0, 3),
    pattern: '--x-'.repeat(4),
    shuffle: true
});
scribble.midi(bass, 'bass.mid');