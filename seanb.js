var concat = require('ffmpeg-concat')

async function f() {
    // concat 3 mp4s together 
    await concat({
        output: 'test.mp4',
        videos: [
            'vid1.mp4',
            'vid2.mp4',
            'vid3.mp4'
        ],
        transition: {
            name: 'directionalWipe',
            duration: 500
        }
    })

   
}

f(); 

// speed-test
