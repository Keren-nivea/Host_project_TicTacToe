const button=document.getElementById('button');
const disp=document.getElementById('display');
function update(obj){
    if(gameover){
        console.log('gameover');
        return;
    }
    let val=obj.innerHTML;
    if(val==''){
        if(player==1){
            obj.innerHTML='X';
            disp.innerHTML="O's Turn";
            check(obj);
            player=2;
        }
        else{
            obj.innerHTML='O';
            disp.innerHTML="X's Turn";
            check(obj);
            player=1;
        }
    }
    console.log('Update:Active');
}
function check(obj){
    let draw=true;
    let key=obj.innerHTML;
    console.log("Check:Active");
    const obj1=document.getElementById("bt1");
    let val1=obj1.innerHTML;
    const obj2=document.getElementById("bt2");
    let val2=obj2.innerHTML;
    const obj3=document.getElementById("bt3");
    let val3=obj3.innerHTML;
    const obj4=document.getElementById("bt4");
    let val4=obj4.innerHTML;
    const obj5=document.getElementById("bt5");
    let val5=obj5.innerHTML;
    const obj6=document.getElementById("bt6");
    let val6=obj6.innerHTML;
    const obj7=document.getElementById("bt7");
    let val7=obj7.innerHTML;
    const obj8=document.getElementById("bt8");
    let val8=obj8.innerHTML;
    const obj9=document.getElementById("bt9");
    let val9=obj9.innerHTML;
    if(obj ==obj1 &&((key==val2&&key==val3)||(key==val5&&key==val9)||(key==val7 && key==val4))){
        console.log(key+' Wins');
        draw=false;
        disp.innerHTML=key+' Wins';
        button.innerHTML='Reset';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj2&&((key==val5&&key==val8)||(key==val3 && key==val1))){
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        disp.innerHTML=key+' Wins';
        button.innerHTML='Reset';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj3&&((key==val1 &&key==val2)||(key==val6 && key==val9)||(key==val5 && key== val7))){
        console.log('button3');
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        disp.innerHTML=key+' Wins';
        button.innerHTML='Reset';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj4 &&((key==val1 && key==val7)||(key==val5 && key==val6))){
        console.log('button4');
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        disp.innerHTML=key+' Wins';
        button.innerHTML='Reset';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj5 && ((key == val1 && key == val9) || (key == val3 && key == val7) || (key == val2 && key == val8) || (key == val4 && key == val6))){
        console.log('button5');
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        disp.innerHTML=key+' Wins';
        button.innerHTML='Reset';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj6 &&((key == val3 && key == val9) || (key == val4 && key == val5))){
        console.log('button6');
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        button.innerHTML='Reset';
        disp.innerHTML=key+' Wins';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj7 &&((key == val1 && key == val4) || (key == val3 && key == val5) || (key == val8 && key == val9))){
        console.log('button7');
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        button.innerHTML='Reset';
        disp.innerHTML=key+' Wins';
        button.setAttribute('onclick','reset()');
    }
    else if(obj ==obj8 &&((key == val2 && key == val5) || (key == val7 && key == val9))){
        console.log('button7');
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        button.innerHTML='Reset';
        disp.innerHTML=key+' Wins';
        button.setAttribute('onclick','reset()');
    }
    else if(obj == obj9 && ((key == val1 && key == val5) || (key == val3 && key == val6) || (key == val7 && key == val8))){
        console.log("button9");
        console.log(key+' Wins');
        draw=false;
        gameover=true;
        button.innerHTML='Reset';
        disp.innerHTML=key+' Wins';
        button.setAttribute('onclick','reset()');
    }
    if(draw){
        if(val1!=''&&val1!=''&&val2!=''&&val3!=''&&val4!=''&&val5!=''&&val6!=''&&val7!=''&&val8!=''&&val9!='')
        {
            console.log("Draw");
            draw=false;
            gameover=true;
            button.innerHTML='Reset';
            disp.innerHTML="It's a Draw!!Try again!!";
            button.setAttribute('onclick','reset()');
        }
    } 
}
function startgame(){
    gameover=false;
    player=1;
    button.innerHTML='Ongoing';
    disp.innerHTML="X's Turn";
    console.log('New game started');
}
function reset(){
    button.innerHTML='Start';
    disp.innerHTML='Start Game'
    button.setAttribute('onclick','startgame()');
    const obj1=document.getElementById("bt1");
    const obj2=document.getElementById("bt2");
    const obj3=document.getElementById("bt3");
    const obj4=document.getElementById("bt4");
    const obj5=document.getElementById("bt5");
    const obj6=document.getElementById("bt6");
    const obj7=document.getElementById("bt7");
    const obj8=document.getElementById("bt8");
    const obj9=document.getElementById("bt9");
    obj1.innerHTML='';
    obj2.innerHTML='';
    obj3.innerHTML='';
    obj4.innerHTML='';
    obj5.innerHTML='';
    obj6.innerHTML='';
    obj7.innerHTML='';
    obj8.innerHTML='';
    obj9.innerHTML='';
}