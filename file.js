const audio= document.querySelectorAll("audio");
const buttons= document.querySelectorAll("button");

document.onkeydown = (e)=>{
    if(e.key=="a"){
        buttons[0].style.border="2px solid blue";
        buttons[0].style.boxShadow="0 0 10px blue"
        audio[0].play();
        audio[0].currentTime=0;
    }
    if(e.key=="s"){
        buttons[1].style.border="2px solid blue";
        buttons[1].style.boxShadow="0 0 10px blue"
        audio[1].play();
        audio[1].currentTime=0;
    }
    if(e.key=="d"){
        buttons[2].style.border="2px solid blue";
        buttons[2].style.boxShadow="0 0 10px blue"
        audio[2].play();
        audio[2].currentTime=0;
    }  
    if(e.key=="f"){
        buttons[3].style.border="2px solid blue";
        buttons[3].style.boxShadow="0 0 10px blue"
        audio[3].play();
        audio[3].currentTime=0;
    }
    if(e.key=="g"){
        buttons[4].style.border="2px solid blue";
        buttons[4].style.boxShadow="0 0 10px blue"
        audio[4].play();
        audio[4].currentTime=0;
    }
    if(e.key=="h"){
        buttons[5].style.border="2px solid blue";
        buttons[5].style.boxShadow="0 0 10px blue"
        audio[5].play();
        audio[5].currentTime=0;
    }
    if(e.key=="j"){
        buttons[6].style.border="2px solid blue";
        buttons[6].style.boxShadow="0 0 10px blue"
        audio[6].play();
        audio[6].currentTime=0;
    }
    if(e.key=="k"){
        buttons[7].style.border="2px solid blue";
        buttons[7].style.boxShadow="0 0 10px blue"
        audio[7].play();
        audio[7].currentTime=0;
    }
    if(e.key=="l"){
        buttons[8].style.border="2px solid blue";
        buttons[8].style.boxShadow="0 0 10px blue"
        audio[8].play();
        audio[8].currentTime=0;
    }
}

document.onkeyup= (e)=>{
    for(let i in buttons){
        buttons[i].style.border="2px solid white ";
        buttons[i].style.boxShadow="none";
    }
}