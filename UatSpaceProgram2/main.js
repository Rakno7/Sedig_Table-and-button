//-----------------Bradley Alex Sedig-------------------

//Get the buttons and switch area from the html document
const Startbutton = document.getElementById("StartButton")
const Stopbutton = document.getElementById("StopButton")
const Switch = document.getElementById("SwitchColor")
//bools to set the buttons state
let StartActive = true;
let StopActive = false;

//when you start the program the start button should be active and the stop button inactive and invisable.
Stopbutton.style.opacity = 0





//this function is called when the start button is clicked
function start()
{
    //when you click this button it fades away and becomes unclickable while the oposite button becomes clickable and visable
    Startbutton.style.opacity = 0
    Stopbutton.style.opacity = 1 
    Switch.style.backgroundColor = "rgb(204, 236, 255)"
    StopActive = true
    StartActive = false
}
//this function is called when the stop button is clicked
function stop()
{
    //when you click this button it fades away and becomes unclickable while the oposite button becomes clickable and visable
    Startbutton.style.opacity = 1
    Stopbutton.style.opacity = 0
    Switch.style.backgroundColor = "rgb(221, 221, 221, 0.774)"
    StartActive = true
    StopActive = false
}
//this function runs on an interval and checks for onclick events from active buttons and runs the appropriate function
function CheckInput()
{
       if(StartActive)
   {
   Startbutton.onclick = start
   }
   if(StopActive)
   {
   Stopbutton.onclick = stop
   
   }
}

//set CheckInput fuction be called on an interval
setInterval(CheckInput, 10)






