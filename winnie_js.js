var im = require('imagemagick');

im.identify('./MyPhoto_WW.GIF', function(err, features){
    if (err) throw err
    console.log(features.colormap);
    console.log(features.version);
  })

//Different command line options: 

//Find out information about the photo:
  //magick identify MyPhoto_WW.GIF

//Create a new picture with a border:
  //convert -border 10x10 -bordercolor "#088800" MyPhoto_WW.gif NewFolder/new-myphoto-ww.gif

//Create a new picture as a different file type:
  //convert MyPhoto_WW.gif  NewFolder/new-myphoto-ww2.jpg

//Resize picture and save as new file:
  //convert -resize "200>" MyPhoto_WW.gif NewFolder/new-myphoto-ww3.gif