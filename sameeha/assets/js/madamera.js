	$body = $("body");
$('#convert_madamera').click(function(){
	$body.addClass("loading"); 
	var madmeraOutPut = '<?xml version="1.0" encoding="UTF-8"?><!-- ~ Copyright (c) 2013. The Trustees of Columbia University in the City of New York.~ The copyright owner has no objection to the reproduction of this work by anyone for~ non-commercial use, but otherwise reserves all rights whatsoever.  For avoidance of~ doubt, this work may not be reproduced, or modified, in whole or in part, for commercial~ use without the prior written consent of the copyright owner.-->'+
    '<madamira_input xmlns="urn:edu.columbia.ccls.madamira.configuration:0.1">'+
    '<madamira_configuration>'+
        '<preprocessing sentence_ids="false" separate_punct="true" input_encoding="UTF8"/>'+
        '<overall_vars output_encoding="UTF8" dialect="MSA" output_analyses="TOP" morph_backoff="NONE"/>'+
        '<requested_output>'+
            '<req_variable name="PREPROCESSED" value="true" />'+
            '<req_variable name="STEM" value="true" />'+
            '<req_variable name="GLOSS" value="true" />'+
            '<req_variable name="LEMMA" value="true" />'+
            '<req_variable name="DIAC" value="true" />'+
            '<req_variable name="ASP" value="true" />'+
            '<req_variable name="CAS" value="true" />'+
            '<req_variable name="ENC0" value="true" />'+
            '<req_variable name="ENC1" value="false" />'+
            '<req_variable name="ENC2" value="false" />'+
            '<req_variable name="GEN" value="true" />'+
            '<req_variable name="MOD" value="true" />'+
            '<req_variable name="NUM" value="true" />'+
            '<req_variable name="PER" value="true" />'+
            '<req_variable name="POS" value="true" />'+
            '<req_variable name="PRC0" value="true" />'+
            '<req_variable name="PRC1" value="true" />'+
            '<req_variable name="PRC2" value="true" />'+
            '<req_variable name="PRC3" value="true" />'+
            '<req_variable name="STT" value="true" />'+
            '<req_variable name="VOX" value="true" />'+
            '<req_variable name="BW" value="false" />'+
            '<req_variable name="SOURCE" value="false" />'+
			'<req_variable name="NER" value="true" />'+
			'<req_variable name="BPC" value="true" />'+
        '</requested_output>'+
        '<tokenization>'+
            '<scheme alias="ATB" />'+
			'<scheme alias="D3_BWPOS" /> <!-- Required for NER -->'+
            '<scheme alias="ATB4MT" />'+
            '<scheme alias="MyD3">'+
				'<!-- Same as D3 -->'+
				'<scheme_override alias="MyD3"'+
								 'form_delimiter="\u00B7"'+
								 'include_non_arabic="true"'+
								 'mark_no_analysis="false"'+
								 'token_delimiter=" "'+
								 'tokenize_from_BW="false">'+
					'<split_term_spec term="PRC3"/>'+
					'<split_term_spec term="PRC2"/>'+
					'<split_term_spec term="PART"/>'+
					'<split_term_spec term="PRC0"/>'+
					'<split_term_spec term="REST"/>'+
					'<split_term_spec term="ENC0"/>'+
					'<token_form_spec enclitic_mark="+"'+
									 'proclitic_mark="+"'+
									 'token_form_base="WORD"'+
									 'transliteration="UTF8">'+
						'<normalization type="ALEF"/>'+
						'<normalization type="YAA"/>'+
						'<normalization type="DIAC"/>'+
						'<normalization type="LEFTPAREN"/>'+
						'<normalization type="RIGHTPAREN"/>'+
					'</token_form_spec>'+
				'</scheme_override>'+
			'</scheme>'+
        '</tokenization>'+
    '</madamira_configuration>'+
	'<in_doc id="ExampleDocumen">';
	var rawText = $('#rawText').val();
	//checl if var is empty
	if(rawText == ""){
		alert('Please put at least one word in the text area' )
	}else{
	
		var arrayOfSentences = rawText.split(';');
	//if array not empty 
	for (var i = 0 ; i <= arrayOfSentences.length - 1; i++) {
		madmeraOutPut = madmeraOutPut + "<in_seg id=\"SENT"+i+"\">" +arrayOfSentences[i] +"</in_seg> "
		
	};

  madmeraOutPut = madmeraOutPut + "</in_doc></madamira_input>";
 $('#result-madamera').empty();

	$('#result-madamera').val(madmeraOutPut);
	}
	$body.removeClass("loading");

})

$('#copyButton').click(function(){
	document.getElementById("result-madamera").select();
	document.execCommand('copy');
})
