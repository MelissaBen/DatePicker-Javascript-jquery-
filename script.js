'use strict'; 
$(function(){
	$( "#datepicker" ).datepicker({
		numberOfMonths: [ 2, 4 ],
		//firstDay: 1,
		beforeShowDay: $.datepicker.noWeekends,
		altField: "#actualDate",
		showButtonPanel: true
	});
});