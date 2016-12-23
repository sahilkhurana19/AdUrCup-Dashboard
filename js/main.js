var formNumber = 1;

$("document").ready(function(){
    Materialize.updateTextFields();
    $('select').material_select();
    
	$(".next-button").on("click", function(){
		console.log("++")
		if(formNumber < 2)
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
				break;

		case 2: $("#appearanceForm").show();
				$("#generalForm").hide(); 

	}
}
	



});