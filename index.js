
var output = document.getElementById('output');
var buttonClick = document.getElementById('loadNew');

buttonClick.addEventListener('click', function(){
    loadxhr();
});

function loadxhr(){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        // console.log('State Changed:', xhr.readyState,xhr.status);
        if(xhr.readyState == 4 && xhr.status == 200) {
                var json = JSON.parse(xhr.responseText);
                var data = json.results[0];
                console.log(data);
                var message = data.name.first + ' ' + data.name.last + '<br><img src="+data.picture.thumbnail +">'
                output.innerHTML = message;


            }
    }
    xhr.open('GET',"https://randomuser.me/api/", true);
    xhr.send();
}