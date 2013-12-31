var a = 0;
function remove(){
    setTimeout(function(){
        var ad = document.getElementById('s_skin_guide_traveloutside');
        if(ad != null){
            ad.remove();
            a=10;
        }
    }, 100);
    if(a< 10){
        a++;
        remove();
    }
}
remove();