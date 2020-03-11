var clickCount=0;
var promoClickCount=0;
var travelClickCount=0;
console.log("a");
function slick(value){
    console.log("offers",document.getElementsByClassName('offer').length)
    var t=document.getElementById('slick-container')
    if(value=='r' && clickCount!=0){
        clickCount--;
        t.style.transform="translate3d(-"+clickCount*968+"px,0px,0px)";
    } else if(value =='f' &&clickCount+1<document.getElementsByClassName('offer').length/2){
        clickCount++;
        t.style.transform="translate3d(-"+clickCount*964+"px,0px,0px)";
    }
    if(clickCount==0){
        document.getElementsByClassName('slick-button')[0].style.color="lightgray"
    } else if(clickCount+1>=document.getElementsByClassName('offer').length/2) {
        document.getElementsByClassName('slick-button')[1].style.color="lightgray"
    } else {
        document.getElementsByClassName('slick-button')[0].style.color="blue"
        document.getElementsByClassName('slick-button')[1].style.color="blue"
    }
}

function promoslick(dir){
    if(dir==='r' && promoClickCount+1<document.getElementsByClassName('promos').length-1){
        promoClickCount++;
        document.getElementById('promo-slick-container').style.transform="translate3d(-"+promoClickCount*602+"px,0px,0px)"
    } else if (dir ==='l' && promoClickCount>0){
        promoClickCount--;
        document.getElementById('promo-slick-container').style.transform="translate3d(-"+promoClickCount*602+"px,0px,0px)"
    }
    if(promoClickCount==0){
        document.getElementsByClassName('promo-slick-button')[0].style.color="gray";
    } else {
        document.getElementsByClassName('promo-slick-button')[0].style.color="blue";
    }
    if(promoClickCount+1>=document.getElementsByClassName('promos').length-1){
        document.getElementsByClassName('promo-slick-button')[1].style.color="gray";
    } else {
        document.getElementsByClassName('promo-slick-button')[1].style.color="blue";
    }
}

function travelslick(value){
    var t=document.getElementById('travel-slick')
    if(value=='r' && travelClickCount!=0){
        travelClickCount--;
        t.style.transform="translate3d(-"+travelClickCount*281+"px,0px,0px)";
    } else if(value =='f' &&travelClickCount+1<document.getElementsByClassName('travel-item').length-3){
        travelClickCount++;
        t.style.transform="translate3d(-"+travelClickCount*281+"px,0px,0px)";
    }
    if(travelClickCount==0){
        document.getElementsByClassName('travel-slick-button')[0].style.color="lightgray"
    } else if(travelClickCount+1>=document.getElementsByClassName('travel-item').length-3) {
        document.getElementsByClassName('travel-slick-button')[1].style.color="lightgray"
    } else {
        document.getElementsByClassName('travel-slick-button')[0].style.color="blue"
        document.getElementsByClassName('travel-slick-button')[1].style.color="blue"
    }
}

function movetotop(){
    document.getElementById('header').scrollIntoView(true);
}

function movetooffers(){
    document.getElementById('searchFooter').scrollIntoView(true);
}
function movetopromotions(){
    document.getElementById('offerdetail').scrollIntoView(true);
}