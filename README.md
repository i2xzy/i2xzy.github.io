# BEE-BOT

striped black and yellow striped background  
Title and instructions 
Beebot 
Canvas 
 
**Title and instructions**  
Header 1: The Beebot  
Header 2: Introducing children to coding
 
**Beebot**

6 buttons in a grid

       -       ,   Forward   ,         - 
       
Turn left,       Go.       , Turn right  

  (Clear)  , Backwards,         - 
 
* Forward: Black up arrow on orange button
* Turn left: Black left arrow on orange button 
* Go: Black "GO" on green button 
* Turn right: Black right arrow on orange button 
* (Clear: Black "CLEAR" on orange button) 
* Backwards: Black down arrow on orange button 
 
Direction buttons: onClick call function to push direction to array  
Go button: onClick call function to execute draw program  
(Clear button: onClick call function to empty array) 
 
Iterate through array and call direction function that matches case 
* Forward should animate move sprite x pixels in direction 
* Backwards should animate move sprite -x pixels in direction 
* Right should change direction and animate rotate sprite by 90 degrees 
* Left should change direction and animate rotate sprite by -90 degrees 
 
**Canvas**
1. Clear canvas 
2. Set position and direction to default  
3. {Draw image at position facing direction 
4. Clear canvas 
5. Move or rotate image 
6. Go back to 3} 
7. (draw line) 
