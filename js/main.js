var formNumber = 1;

$("document").ready(function(){
    Materialize.updateTextFields();
	$(".next-button").on("click", function(){
		$("#form" + formNumber).hide()
	});
	$(".previous-button").on("click", function(){
		$("#form" + formNumber).show()
	});
});