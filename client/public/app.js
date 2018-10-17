// app.js

var myFragment;
var myForm;
var myTextAreaInput;
var mySubmitInput;


var instantiateForm = () => {
	alert('GETTING READY');
	myFragment = document.createDocumentFragment();
	myForm = document.createElement('form');
	myForm.method = 'POST';
	myForm.target = 'csv_display';
	myTextAreaInput = document.createElement('input');
	myTextAreaInput.type = 'text';
	myTextAreaInput.name = 'myTextArea';
	mySubmitInput = document.createElement('input');
	mySubmitInput.type = 'submit';
	mySubmitInput.value = 'Submit';
	myFragment.appendChild(myForm);
	myForm.appendChild(myTextAreaInput);
	myForm.appendChild(mySubmitInput);
	document.getElementsByTagName('body')[0].appendChild(myFragment);
};
document.addEventListener('DOMContentLoaded', instantiateForm);
