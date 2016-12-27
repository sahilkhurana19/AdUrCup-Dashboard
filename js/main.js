selectizeOptions = {
    delimiter: ',',
    persist: false,
    create: function(input) {
        return {
            value: input,
            text: input
        }
    }
}

$("document").ready(function(){
	//$(".js-example-multiple").select2();
	$('#bestusedfor').selectize(selectizeOptions);
	$('#bestusedin').selectize(selectizeOptions);
})