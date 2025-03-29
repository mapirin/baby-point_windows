const returnButton = document.getElementById("returnButton");
const urlParams = new URLSearchParams(window.location.search);
let point = Number(urlParams.get("point"))

returnButton.addEventListener('touchend', ()=>{
    const selectedRadio = document.querySelectorAll('input[name="stockOptions"]:checked');
    if(selectedRadio){
        point=point+1;
        window.opener.postMessage({updatePoint:point}, window.location.origin);
        window.close();
    }else{
        alert("NG");
    }
})