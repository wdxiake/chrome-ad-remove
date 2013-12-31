;$(document).ready(function(){
    $.ajax({
        url: "http://fuliba.net",
        success: function(html){
            var a = $(html);
            document.write(a.find('a').length);
        }
    });
});