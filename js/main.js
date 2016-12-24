var formNumber = 1;

$("document").ready(function(){
    Materialize.updateTextFields();
    $('select').material_select();
    $("#generalForm").hide();
	$("#appearanceForm").hide();
	$("#dimensionsForm").hide();
	$("#densityForm").hide();
	$("#featureForm").hide();
    /*
	$(".next-button").on("click", function(){
		console.log("++")
		if(formNumber < 5)
			formNumber++;
		Toggle(formNumber);
	});
	$(".previous-button").on("click", function(){
		console.log("--")
		if(formNumber > 1)
			formNumber--;
		Toggle(formNumber);
	});
	function Toggle(formNumber) {
	switch(formNumber)
	{
		case 1: $("#generalForm").show();
				$("#appearanceForm").hide();
				$("#dimensionsForm").hide();
				$("#densityForm").hide();
				$("#featureForm").hide();
				break;

		case 2: $("#appearanceForm").show();
				$("#generalForm").hide();
				$("#dimensionsForm").hide();
				$("#densityForm").hide();
				$("#featureForm").hide();
				break;

		case 3: $("#dimensionsForm").show();
				$("#appearanceForm").hide();
				$("#generalForm").hide();
				$("#densityForm").hide();
				$("#featureForm").hide();
				break;

		case 4: $("#densityForm").show();
				$("#generalForm").hide();
				$("#appearanceForm").hide();
				$("#dimensionsForm").hide();
				$("#featureForm").hide();
				break;
		
		case 5: $("#featureForm").show();
				$("#generalForm").hide();
				$("#appearanceForm").hide();
				$("#dimensionsForm").hide();
				$("#densityForm").hide();
				break;

	}
}
	
*/


});