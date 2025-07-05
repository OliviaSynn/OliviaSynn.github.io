const writing = [
    "Don't Think Too Much...",
    "Just Do It.",
   
]; 

let writingindex = 0;
let index = 0;
let writtenNow = writing[writingindex];
let typingForward = true;

function typeWriter() {
    if (typingForward) {
        document.getElementById("introText").textContent = writtenNow.substring(0, index);
        index++;
        if (index > writtenNow.length) {
            typingForward = false;
            setTimeout(typeWriter, 1000); 
        } else {
            setTimeout(typeWriter, 100); 
        }
    } else {
        document.getElementById("introText").textContent = writtenNow.substring(0, index);
        index--;
        if (index < 0) {
            typingForward = true;
            writingindex = (writingindex + 1) % writing.length;
            writtenNow = writing[writingindex];
            setTimeout(typeWriter, 1000); 
        } else {
            setTimeout(typeWriter, 50);
        }
    }
}

typeWriter(); // Start the typing effect when the page loads


