
var querySelect = document.getElementsByClassName('twikiSelect')[0];
var options = querySelect.getElementsByTagName('option');
var content = querySelect.parentNode;
var len = options.length;
if(len > 1000){
    var queryInput = document.createElement("input");
    queryInput.id = "ParentQueryInput";
    queryInput.type = "text";
    content.appendChild(queryInput);
    queryInput.addEventListener("input",function(){
        var aValue = queryInput.value;
        for(var i = 0; i < len; i++) {
            if(options[i].innerText.indexOf(aValue) != -1){
                options[i].selected = true;
                break;
            }
        }
    },false);
}