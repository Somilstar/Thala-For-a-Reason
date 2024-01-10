// const inp = document.getElementById('input');

// const btn  =document.getElementById('btn');
// let out = document.getElementById('output');

// btn.addEventListener("click", checkInput());


function  checkInput(){
    
  
    userInput = document.getElementById('input').value;
    if (userInput.length === 7) {
        document.getElementById('output').value = 'Thala';

        document.getElementById('videoBackground').style.display = 'block';
        document.getElementById('videoBackground').style.opacity = '0.5';
        
      
    
       
    } else {
        // Clear the textarea if the input length is not 7
        document.getElementById('output').value = 'Not a Thala';
    }
    
}

function refreshPage() {
    var video = document.getElementById('videoBackground');
video.pause();
window.location.href = window.location.href;
}





// Get the button


// Pause and play the video, and change the button text
