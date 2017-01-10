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

document.getElementById("files").onchange = function () {
    var reader = new FileReader();

    reader.onload = function (e) {
        // get loaded data and render thumbnail.
        document.getElementById("previewimage").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
};