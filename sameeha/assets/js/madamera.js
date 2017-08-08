	$body = $("body");
$('#convert_madamera').click(function(){
	$body.addClass("loading"); 
	var madmeraOutPut = '<?xml version="1.0" encoding="UTF-8"?><!-- ~ Copyright (c) 2013. The Trustees of Columbia University in the City of New York.~ The copyright owner has no objection to the reproduction of this work by anyone for~ non-commercial use, but otherwise reserves all rights whatsoever.  For avoidance of~ doubt, this work may not be reproduced, or modified, in whole or in part, for commercial~ use without the prior written consent of the copyright owner.--> \n'+
    '<madamira_input xmlns="urn:edu.columbia.ccls.madamira.configuration:0.1">\n'+
    '<madamira_configuration>\n'+
        '<preprocessing sentence_ids="false" separate_punct="true" input_encoding="UTF8"/>\n'+
        '<overall_vars output_encoding="UTF8" dialect="MSA" output_analyses="TOP" morph_backoff="NONE"/>\n'+
        '<requested_output>\n'+
            '<req_variable name="PREPROCESSED" value="true" />\n'+
            '<req_variable name="STEM" value="true" />\n'+
            '<req_variable name="GLOSS" value="true" />\n'+
            '<req_variable name="LEMMA" value="true" />\n'+
            '<req_variable name="DIAC" value="true" />\n'+
            '<req_variable name="ASP" value="true" />\n'+
            '<req_variable name="CAS" value="true" />\n'+
            '<req_variable name="ENC0" value="true" />\n'+
            '<req_variable name="ENC1" value="false" />\n'+
            '<req_variable name="ENC2" value="false" />\n'+
            '<req_variable name="GEN" value="true" />\n'+
            '<req_variable name="MOD" value="true" />\n'+
            '<req_variable name="NUM" value="true" />\n'+
            '<req_variable name="PER" value="true" />\n'+
            '<req_variable name="POS" value="true" />\n'+
            '<req_variable name="PRC0" value="true" />\n'+
            '<req_variable name="PRC1" value="true" />\n'+
            '<req_variable name="PRC2" value="true" />\n'+
            '<req_variable name="PRC3" value="true" />\n'+
            '<req_variable name="STT" value="true" />\n'+
            '<req_variable name="VOX" value="true" />\n'+
            '<req_variable name="BW" value="false" />\n'+
            '<req_variable name="SOURCE" value="false" />\n'+
			'<req_variable name="NER" value="true" />\n'+
			'<req_variable name="BPC" value="true" />\n'+
        '</requested_output>\n'+
        '<tokenization>\n'+
            '<scheme alias="ATB" />\n'+
			'<scheme alias="D3_BWPOS" /> <!-- Required for NER -->\n'+
            '<scheme alias="ATB4MT" />\n'+
            '<scheme alias="MyD3">\n'+
				'<!-- Same as D3 -->\n'+
				'<scheme_override alias="MyD3"\n'+
								 'form_delimiter="\u00B7"\n'+
								 'include_non_arabic="true"\n'+
								 'mark_no_analysis="false"\n'+
								 'token_delimiter=" "\n'+
								 'tokenize_from_BW="false">\n'+
					'<split_term_spec term="PRC3"/>\n'+
					'<split_term_spec term="PRC2"/>\n'+
					'<split_term_spec term="PART"/>\n'+
					'<split_term_spec term="PRC0"/>\n'+
					'<split_term_spec term="REST"/>\n'+
					'<split_term_spec term="ENC0"/>\n'+
					'<token_form_spec enclitic_mark="+"\n'+
									 'proclitic_mark="+"\n'+
									 'token_form_base="WORD"\n'+
									 'transliteration="UTF8">\n'+
						'<normalization type="ALEF"/>\n'+
						'<normalization type="YAA"/>\n'+
						'<normalization type="DIAC"/>\n'+
						'<normalization type="LEFTPAREN"/>\n'+
						'<normalization type="RIGHTPAREN"/>\n'+
					'</token_form_spec>\n'+
				'</scheme_override>\n'+
			'</scheme>\n'+
        '</tokenization>\n'+
    '</madamira_configuration>\n'+
	'<in_doc id="ExampleDocumen"> \n';
	var rawText = $('#rawText').val();
	//checl if var is empty
	if(rawText == ""){
		alert('Please put at least one word in the text area' )
	}else{
	
		var arrayOfSentences = rawText.split(';');
	//if array not empty 
		if(arrayOfSentences.length == 0 || arrayOfSentences === null){
			alert("The text you entered is not a correct format, please type each sentence and end it with ';' ")
		}else{
			for (var i = 0 ; i <= arrayOfSentences.length - 1; i++) {
			madmeraOutPut = madmeraOutPut + "<in_seg id=\"SENT"+i+"\">" +arrayOfSentences[i] +"</in_seg> \n"
		
			};

			  madmeraOutPut = madmeraOutPut + "</in_doc>\n</madamira_input>";
			 $('#result-madamera').empty();

			$('#result-madamera').val(madmeraOutPut);
		}
	}
	
	$body.removeClass("loading");

})

$('#copyButton').click(function(){
	document.getElementById("result-madamera").select();
	document.execCommand('copy');
})
