$body = $("body");
$('#convert_scotts').click(function(){
$body.addClass("loading"); 
	var madamaraText = $('#madamaraText').val();
	var xml = $.parseXML(madamaraText);
	var outSeg = $(xml).find('out_seg');
	var categories = ""; 
	var wordAndCat = "";
	var ADJP = 0;	
	var ADVP = 0;
    var CONJP= 0;	
	var EDITED= 0;	
	var FRAG= 0	;
	var INTJ= 0	;
	var LST	= 0;
	var NAC	= 0;
	var NP	= 0;
	var PP	= 0;
	var PRN	= 0;
	var S	= 0;
	var SBAR	= 0;
	var SBARQ	= 0;
	var VP	= 0;
	var WHADVP	= 0;
	var WHNP	= 0;
	var WHPP	= 0;
	for (var i = outSeg.length - 1; i >= 0; i--) {
		var segmentInfo = $(outSeg[i]).find('segment_info');		
		var bpc =  $(segmentInfo).children();
		var chunkArray =$(bpc[1]).children();
		console.log(chunkArray);
		for (var j = chunkArray.length - 1; j >= 0; j--) {
			var tokenArray =  $(chunkArray[j]).children();
			for (var x = tokenArray.length - 1; x >= 0; x--) {
				var wordAndCat = wordAndCat + $(tokenArray[x]).attr("form0") + "  ";
			};
			wordAndCat = wordAndCat +  $(chunkArray[j]).attr("type") + ", \n";
			categories = categories + $(chunkArray[j]).attr("type") + ", \n";
			switch($(chunkArray[j]).attr("type")){
				case "ADJP" :
					ADJP = ADJP + 1;
				break;
				case "ADVP" :
					ADVP = ADVP + 1;
				break;
				case "CONJP" :
					CONJP = CONJP + 1;
				break;
				case "EDITED" :
					EDITED = EDITED + 1;
				break;
				case "FRAG" :
					FRAG = FRAG + 1;
				break;
				case "INTJ" :
					INTJ = INTJ + 1;
				break;
				case "LST" :
					LST = LST + 1;
				break;
				case "NAC" :
					NAC = NAC + 1;
				break;
				case "NP" :
					NP = NP + 1;

				break;
				case "PP" :
					PP = PP + 1;
				break;
				case "PRN" :
					PRN = PRN + 1;
				break;
				case "S" :
					S = S+1;
				break;
				case "SBAR" :
					SBAR = SBAR +1;
				break;
				case "SBARQ" :
					SBAQ = SBAQ +1;
				break;
				case "VP" :
					VP = VP + 1;
				break;
				case "WHADVP" :
					WHADVP = WHADVP + 1;
				break;
				case "WHNP" :
					WHNP = WHNP + 1;
				break;
				case "WHPP" :
					WHPP = WHPP + 1;
				break;
			}
		};
		
	};

	
	
	$('#resultScottsWordAndCat').empty();

	$('#resultScottsWordAndCat').val(wordAndCat);

	$('#resultScottsCat').empty();

	$('#resultScottsCat').val(categories);
	$('#ADJP').text(ADJP+"");
$('#ADVP').text(ADVP+"");
$('#CONJP').text(CONJP+"");
$('#EDITED').text(EDITED+"");
$('#FRAG').text(FRAG+"");
$('#INTJ').text(INTJ+"");
$('#LST').text(LST+"");
$('#NAC').text(NAC+"");
$('#NP').text(NP+"");
$('#PP').text(PP+"");
$('#PRN').text(PRN+"");
$('#S').text(S+"");
$('#SBAR').text(SBAR+"");
$('#SBARQ').text(SBARQ+"");
$('#VP').text(VP+"");
$('#WHADVP').text(WHADVP+"");
$('#WHNP').text(WHNP+"");
$('#WHPP').text(WHPP+"");
$body.removeClass("loading");

})

$('#copyButtonCat').click(function(){
	document.getElementById("resultScottsCat").select();
	document.execCommand('copy');
})
$('#copyButtonWordAndCat').click(function(){
	document.getElementById("resultScottsWordAndCat").select();
	document.execCommand('copy');
})

 
