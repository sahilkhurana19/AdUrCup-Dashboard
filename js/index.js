$("document").ready(function(){
	Materialize.updateTextFields();
    $("select").material_select();
	
    function displayVals() {
  	var singleValues = $( "#cutlery" ).val();
    console.log(singleValues);
    if(singleValues === "Cup")
    	$("#lidavail").prop("disabled", true);
    
}
 	
	$( "#cutlery" ).change( displayVals );
displayVals();

})