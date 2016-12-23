var formNumber = 1;

$("document").ready(function(){
    Materialize.updateTextFields();
    $('select').material_select();
	$(".next-button").on("click", function(){
		$("#form" + formNumber).hide()
	});
	$(".previous-button").on("click", function(){
		$("#form" + formNumber).show()
	});


	$('#generalForm').hide();
});