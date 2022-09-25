;
$(document).ready( function() {
    
    // This controls the button for the c note.
    
    // This variable calls the cNote audio element in the HTML.
    var cNote = document.getElementById('cAudio');
    
    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#c').mousedown(function(){
        
        // This is a property that scrubs the audio file back to its start.
        cNote.currentTime = 0;
        
        // This plays the audio file.
        cNote.play();
    });
    
    // This controls the button for the d note.
    
    var dNote = document.getElementById('dAudio');
    
    $('#d').mousedown(function(){
        dNote.currentTime = 0;
        dNote.play();
    });
    
    // This controls the button for the e note.
    
    var eNote = document.getElementById('eAudio');
    
    $('#e').mousedown(function(){
        eNote.currentTime = 0;
        eNote.play();
    });
 
    // This controls the button for the f note.
    
    var fNote = document.getElementById('fAudio');
    
    $('#f').mousedown(function(){
        fNote.currentTime = 0;
        fNote.play();
    });
    
    // This controls the button for the g note.
    
    var gNote = document.getElementById('gAudio');
    
    $('#g').mousedown(function(){
        gNote.currentTime = 0;
        gNote.play();
    });
    
    // This controls the button for the a note.
    
    var aNote = document.getElementById('aAudio');
    
    $('#a').mousedown(function(){
        aNote.currentTime = 0;
        aNote.play();
    });
    
    // This controls the button for the b note.
    
    var bNote = document.getElementById('bAudio');
    
    $('#b').mousedown(function(){
        bNote.currentTime = 0;
        bNote.play();
    });

   // This controls the button for the C note.
    
    // This variable calls the cNote audio element in the HTML.
    var CNote = document.getElementById('CAudio');
    
    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#C').mousedown(function(){
        
        // This is a property that scrubs the audio file back to its start.
        CNote.currentTime = 0;
        
        // This plays the audio file.
        CNote.play();
    });
    
    // This controls the button for the D note.
    
    var DNote = document.getElementById('DAudio');
    
    $('#D').mousedown(function(){
        DNote.currentTime = 0;
        DNote.play();
    });
    
    // This controls the button for the E note.
    
    var ENote = document.getElementById('EAudio');
    
    $('#E').mousedown(function(){
        ENote.currentTime = 0;
        ENote.play();
    });
 
    // This controls the button for the F note.
    
    var FNote = document.getElementById('FAudio');
    
    $('#F').mousedown(function(){
        FNote.currentTime = 0;
        FNote.play();
    });
    
    // This controls the button for the G note.
    
    var GNote = document.getElementById('GAudio');
    
    $('#G').mousedown(function(){
        GNote.currentTime = 0;
        GNote.play();
    });
    
    // This controls the button for the A note.
    
    var ANote = document.getElementById('AAudio');
    
    $('#A').mousedown(function(){
        ANote.currentTime = 0;
        ANote.play();
    });
    
    // This controls the button for the B note.
    
    var BNote = document.getElementById('BAudio');
    
    $('#B').mousedown(function(){
        BNote.currentTime = 0;
        BNote.play();
    });  

  // This controls the button for the Cc note.
    
  // This variable calls the CcNote audio element in the HTML.
    var CcNote = document.getElementById('CcAudio');
    
    // This turns our <div id= "c"> into a button that plays our audio file when the box is pressed.
    $('#Cc').mousedown(function(){
        
        // This is a property that scrubs the audio file back to its start.
        CcNote.currentTime = 0;
        
        // This plays the audio file.
        CcNote.play();
    });
  
});
