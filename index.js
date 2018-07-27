var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    // console.log('State Changed:', xhr.readyState,xhr.status);
    if(xhr.readyState == 4 && xhr.status == 200) {
            var jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData);
        }
}

xhr.open('GET',"https://randomuser.me/api/", true);
xhr.send();