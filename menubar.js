
window.onload = function(){

    // 외부문서 작성할 때 window.onload = function(){} 열고 닫아주기
let gnb = document.querySelectorAll('#gnb >li');
//querySelector : 해당되는 첫번째에만 값을 줌
let gnbElement = document.querySelector('#gnb');

for(i=0; i<gnb.length; i++){
    gnb[i].addEventListener('mouseover', function(){
        gnbElement.classList.add('on');
    });
}

let headerElement = document.querySelector('header');

headerElement.addEventListener('mouseout', function(e){
    if(e.target.id=='gnb'){
        gnbElement.classList.remove('on');
        //e는 addEventListener 의 약자
    }
});
}