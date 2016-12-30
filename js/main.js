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
	$("#bestusedfor").select2({
		placeholder: "Choose from options (Minimum 3)",
		tags: true
	});
	$("#bestusedin").select2({
		placeholder: "Choose from options (Minimum 3)",
		tags: true
	});
	$("#unitdescriptions").select2({
		placeholder: "Packets/Pieces",
		allowClear: true
	});
	$("#incrementvalue").select2({
		placeholder: "Select from options",
		allowClear: true
	});
})