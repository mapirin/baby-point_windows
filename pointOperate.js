let pointDspl = document.getElementById("pointDspl");
pointDspl.textContent = "0";
const stockButton = document.getElementById("stockButton");
const useButton = document.getElementById("useButton");
if(pointDspl.textContent <= 0){
    useButton.disabled = true; 
}

stockButton.addEventListener('touchend', ()=>{
    let point = Number(pointDspl.textContent);
    const modal = window.open(`stockExecute.html?point=${point}`,"_blank","width=400,height=300")

    window.addEventListener(("message"), (e)=>{
        if(e.origin === window.location.origin){
            point = e.data.updatePoint;
            pointDspl.textContent = point;
            if(useButton.disabled){
                useButton.disabled = false;
            }
        }
    })
})

useButton.addEventListener('touchend', ()=>{
    pointDspl.textContent--;
    //比較時はString→Numberに変換して数値で実行が必要
    if(Number(pointDspl.textContent) <= 0){
        useButton.disabled = true;
    }
})