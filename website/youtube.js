var channelID = getChannelFromUrl();
var apiKey = "AIzaSyD92Iq5E9TmdKX-1vjxTpc_uQIFZfaS9Aw";

getLatestVideo();


function getLatestVideo(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		console.log(this.status);
		console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200) {
    	console.log(JSON.parse(this.responseText));
       var myObj = JSON.parse(this.responseText);
       showLatestVid(myObj.items);
     }
    };
    xmlhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId="+channelID+"&maxResults=1&key=AIzaSyD92Iq5E9TmdKX-1vjxTpc_uQIFZfaS9Aw", true);
    xmlhttp.send();
}


function getLatest20Videos(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      
    if (this.readyState == 4 && this.status == 200) {
        console.log(JSON.parse(this.responseText));
       var myObj = JSON.parse(this.responseText);
       listLast20Videos(myObj.items)
     }
    };
    xmlhttp.open("GET", "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId="+channelID+"&maxResults=20&key=AIzaSyD92Iq5E9TmdKX-1vjxTpc_uQIFZfaS9Aw", true);
    xmlhttp.send();
}

function listLast20Videos(myArr){
    $("#showLatest20").hide();
    var out = "";
    var i;
    for(i = 0; i < myArr.length; i++) {
        
        var title = myArr[i].snippet.title;
        var videoId = myArr[i].id.videoId;
        var thumbnail = myArr[i].snippet.thumbnails.default.url;
        out = out + "<li style='padding:10px;display:block;float:left;' onclick='playVid(this.id)' id='"+videoId+"'><div style='display:block;' ><img style='float:left;cursor:pointer;margin-right:10px;border-radius:15px;width:120px;height:90px;' src='"+thumbnail+"' /> <p style='cursor:pointer;display:inline;width:50%;font-weight:bold;'>"+ title+"</p></div></li>";

    }
    $("#latest").append(out);
}


function showLatestVid(myArr){
	var out = "";
    var i;
    for(i = 0; i < myArr.length; i++) {
    	
    	var videoId = myArr[i].id.videoId;
    	$("#myDiv").append('<iframe id="currentVid"  width="560" height="315" src="https://www.youtube.com/embed/'+videoId+'" frameborder="0" allowfullscreen></iframe>');
      
    }
}

function getChannelFromUrl(){
    var params = (new URL(document.location)).searchParams;
    var channelId = params.get("ch");
    return channelId;
}

function playVid(id){
    $("#currentVid").replaceWith('<iframe id="currentVid" width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>');
}
