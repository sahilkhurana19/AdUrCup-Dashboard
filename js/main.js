var formNumber = 1;

$("document").ready(function(){
    Materialize.updateTextFields();
    $('select').material_select();
    Toggle(formNumber);
    //$("#generalForm").show();
	//$("#appearanceForm").hide();
	//$("#dimensionsForm").hide();
	//$("#densityForm").hide();
	//$("#featureForm").hide();
	//$("#salesForm").hide();
	//document.getElementById("submitbutton").hide();
    $("button").hide();

	$(".next-button").on("click", function(){
		console.log("++")
		if(formNumber < 6)
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
				$("#salesForm").hide();
				$("nav").css("background-color", "#1b5e20");
				document.getElementById("sectionName").innerHTML = "General";
				break;

		case 2: $("#appearanceForm").show();
				$("#generalForm").hide();
				$("#dimensionsForm").hide();
				$("#densityForm").hide();
				$("#featureForm").hide();
				$("#salesForm").hide();
				$("nav").css("background-color", "#01579b");
				document.getElementById("sectionName").innerHTML = "Appearance";
				break;

		case 3: $("#dimensionsForm").show();
				$("#appearanceForm").hide();
				$("#generalForm").hide();
				$("#densityForm").hide();
				$("#featureForm").hide();
				$("#salesForm").hide();
				$("nav").css("background-color", "#f50057");
				document.getElementById("sectionName").innerHTML = "Dimensions";
				break;

		case 4: $("#densityForm").show();
				$("#generalForm").hide();
				$("#appearanceForm").hide();
				$("#dimensionsForm").hide();
				$("#featureForm").hide();
				$("#salesForm").hide();
				$("nav").css("background-color", "#e65100");
				document.getElementById("sectionName").innerHTML = "Density";
				break;
		
		case 5: $("#featureForm").show();
				$("#generalForm").hide();
				$("#appearanceForm").hide();
				$("#dimensionsForm").hide();
				$("#densityForm").hide();
				$("#salesForm").hide();
				$("nav").css("background-color", "#b71c1c");
				document.getElementById("sectionName").innerHTML = "Features";
				break;

		case 6: $("#salesForm").show();
				$("#generalForm").hide();
				$("#appearanceForm").hide();
				$("#dimensionsForm").hide();
				$("#densityForm").hide();
				$("#featureForm").hide();
				$("nav").css("background-color", "#004d40");
				document.getElementById("sectionName").innerHTML = "Sales";
				break;

	}

	if(formNumber == 6)
	{
		$("button").show();
	}
}
	



});