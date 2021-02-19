
$(function(){
	$('.det_calender').daterangepicker({
		//parentEl: '',// (string) jQuery selector of the parent element that the date range picker will be added to, if not provided this will be 'body'
		autoUpdateInput: false,
		//showWeekNumbers: true,
		//showISOWeekNumbers: false,
		//timePicker: true,// Adds select boxes to choose times in addition to dates.
		//timePickerIncrement:29,// (number) Increment of the minutes selection list for times (i.e. 30 to allow only selection of times ending in 0 or 30).
		//timePicker24Hour: true,// Use 24-hour instead of 12-hour times, removing the AM/PM selection.
		//timePickerSeconds: true,// Show seconds in the timePicker.
		singleDatePicker: true,// Show only a single calendar to choose one date, instead of a range picker with two calendars. The start and end dates provided to your callback will be the same single date chosen.
		showDropdowns: true,
		//opens: 'left',// 'left' , 'right' , 'center'
		//drops: 'up',// 'down' , 'up'
		//buttonClasses: 'className Applay - Cancel Button',//(string) CSS class names that will be added to both the apply and cancel buttons.
		//applyButtonClasses: 'className',// (string) CSS class names that will be added only to the apply button.
		//cancelButtonClasses: 'className',// (string) CSS class names that will be added only to the cancel button.
		//autoApply: true,// Hide the apply and cancel buttons, and automatically apply a new date range as soon as two dates are clicked.
		//linkedCalendars: true,// When enabled, the two calendars displayed will always be for two sequential months (i.e. January and February), and both will be advanced when clicking the left or right arrows above the calendars. When disabled, the two calendars can be individually advanced and display any month/year.
		//isInvalidDate: function(){},// (function) A function that is passed each date in the two calendars before they are displayed, and may return true or false to indicate whether that date should be available for selection or not.
		//isCustomDate: function(){},// (function) A function that is passed each date in the two calendars before they are displayed, and may return a string or array of CSS class names to apply to that date's calendar cell.
		//startDate: moment().startOf('hour'),// (Date or string) The beginning date of the initially selected date range. If you provide a string, it must match the date format string set in your locale setting.
		//endDate: moment().startOf('hour').add(32, 'hour'),
		locale:{
			//format: 'M/DD hh:mm A'
			format: 'YYYY/M/D'
			//,cancelLabel: 'Clear'
			/*,"separator": " - ",
			"applyLabel": "Apply",
			"cancelLabel": "Cancel",
			"fromLabel": "From",
			"toLabel": "To",
			"customRangeLabel": "Custom",
			"weekLabel": "W",
			"daysOfWeek": ["Su","Mo","Tu","We","Th","Fr","Sa"],
			"monthNames": [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December"
			],
			"firstDay": 1*/
		}
		,minYear: 1930/*
		//maxYear: parseInt(moment().format('YYYY'),10),
		//maxYear: parseInt(moment().format('YYYY'),10),
		maxDate: moment().add(1, 'years'),
		//maxDate:  moment().subtract(1, 'week'),
		//maxDate:  moment().subtract(1, 'days'),
		//timeZone: 'utc',
		//timeZone: 'Australia/Sydney',
		ranges: {
			'Today': [moment(), moment()]
			,'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')]
			//,'Last 7 Days': [moment().subtract(6, 'days'), moment()]
			//,'Last 30 Days': [moment().subtract(29, 'days'), moment()]
			//,'This Month': [moment().startOf('month'), moment().endOf('month')]
			//,'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
			,'Next Year': [moment().add(1, 'year'), moment().add(1, 'year')]
			,'Prev Year': [moment().subtract(1, 'year'), moment().subtract(1, 'year')]
		},*/
		,showCustomRangeLabel: false
		//alwaysShowCalendars: false,// Normally, if you use the ranges option to specify pre-defined date ranges, calendars for choosing a custom date range are not shown until the user clicks "Custom Range". When this option is set to true, the calendars for choosing a custom date range are always shown instead.
		
	}/*,function(start, end, label) {
		var years = moment().diff(start, 'years');
		alert("You are " + years + " years old!");
	}*/);
	
	
	
	
	
	
	/*
	$('.det_calender').on('show.daterangepicker', function(ev, picker) {
		// Triggered when the picker is shown
	});
	$('.det_calender').on('hide.daterangepicker', function(ev, picker) {
		// Triggered when the picker is hidden
	});
	$('.det_calender').on('showCalendar.daterangepicker', function(ev, picker) {
		// Triggered when the calendar(s) are shown
	});
	$('.det_calender').on('hideCalendar.daterangepicker', function(ev, picker) {
		// Triggered when the calendar(s) are hidden
	});
	$('.det_calender').on('apply.daterangepicker', function(ev, picker) {
		// Triggered when the apply button is clicked, or when a predefined range is clicked
	});
	*/
	$('.det_calender').on('cancel.daterangepicker', function(ev, picker) {
		// Triggered when the cancel button is clicked
		// do something, like clearing an input
		$(this).val('');
	});
	$('.det_calender').on('apply.daterangepicker', function(ev, picker) {
		//$(this).val( picker.startDate.format('YYYY/M/D')   );
		//$(this).val( picker.startDate.format('YYYY/MM/DD') );
		//$(this).val( picker.endDate.format('YYYY/MM/DD')   );
		var format = picker.locale.format;
		$(this).val( picker.startDate.format(format) );
	});
	$('.det_calender').each(function(index, element){
		//$(this).val('');
	});
});
/*
$(window,document).on("load resize",function(){
	_Layout4cols();
	
	window.addEventListener("orientationchange",function(){
		//alert( screen.orientation.angle );
		_Layout4cols();
	});
});*/

