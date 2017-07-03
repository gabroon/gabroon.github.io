var channelID = "UCZ4ixYzp3PGev6UQiAgLzDA";
var apiKey = "AIzaSyD92Iq5E9TmdKX-1vjxTpc_uQIFZfaS9Aw";



function getLatestVideo(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		console.log(this.status);
		console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
    	console.log(JSON.parse(this.responseText));
       var myObj = JSON.parse(this.responseText);
       myFunction(myObj.items);
     }
};
xmlhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCZ4ixYzp3PGev6UQiAgLzDA&maxResults=1&key=AIzaSyD92Iq5E9TmdKX-1vjxTpc_uQIFZfaS9Aw", true);
xmlhttp.send();
}



function myFunction(myArr){
	var out = "";
    var i;
    for(i = 0; i < myArr.length; i++) {
    	console.log();
    	var videoId = myArr[i].id.videoId;
    	$("#myDiv").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+videoId+'" frameborder="0" allowfullscreen></iframe>');
      
    }
}

function getValueFromUrl(){
var params = (new URL(document.location)).searchParams;
var name = params.get("myVar1");
var var2 = params.get("myVar2");
alert(name);
alert(var2);
}