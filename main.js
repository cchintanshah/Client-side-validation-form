$(document).ready(function(){

	var flagName = false;
	var flagid = false;
	var flagdep = false;
	var flagbonus = true;

$("#name").keyup(function()
  {
	

	var getName = $('#name').val();
	$.post('parta.php',{ act:'employeeName', name: getName },
	function(data){
		
		
		console.log(data);

		if(data['name'] == 11){
			$("#name").removeClass().addClass("form-control is-invalid");
			$(".invalid-feedback").html("Employee name cannot contain digits.");
			flagName = false;
		}
		if(data['name'] == 12){
			$("#name").removeClass().addClass("form-control is-invalid");
			$(".invalid-feedback").html("Employee name must be between 5-20 characters in length.");
			flagName = false;
		}
		if(data['name'] == 13){
			$("#name").removeClass().addClass("form-control");
			flagName = false;
			
		}
		if(data['name'] == 0){
			$("#name").removeClass().addClass("form-control is-valid");
			flagName = true;
		}

	},'json');


});
$("#eid").keyup(function()
  {
	

	var geteid = $('#eid').val();
	$.post('parta.php',{ act:'employeeID', eid: geteid },
	function(data){
		
		
		console.log(data);

		if(data['eid'] == 21){
			$("#eid").removeClass().addClass("form-control is-invalid");
			$(".invalid-feedback").html("Employee ID must be 9 digits in length.");
			flagid = false;
		}
		if(data['eid'] == 22){
			$("#eid").removeClass().addClass("form-control is-invalid");
			$(".invalid-feedback").html("Employee ID must only contain digits.");
			flagid = false;
			
		}
		if(data['eid'] == 23){
			$("#eid").removeClass().addClass("form-control");
			flagid = false;
			
		}
		if(data['eid'] == 0){
			$("#eid").removeClass().addClass("form-control is-valid");
			flagid = true;
		}

	},'json');

	
});
$("#dep").keyup(function()
  {
	

	var getdep= $('#dep').val();
	$.post('parta.php',{ act:'employeeDep', dep: getdep },
	function(data){
		
		
		console.log(data);

		if(data['dep'] == 31){
			$("#dep").removeClass().addClass("form-control is-invalid");
			$(".invalid-feedback").html("Advertising is not a valid department.");
			$( "#bonus" ).prop( "disabled", true );
			flagdep = false;
		}
		if(data['dep'] == 32){
			$( "#bonus" ).prop( "disabled", false );
			flagdep = true;
		}
		
		if(data['dep'] == 33){
			$("#dep").removeClass().addClass("form-control");
			$( "#bonus" ).prop( "disabled", true );
			flagdep = false;
			
		}
		if(data['dep'] == 0){
			$("#dep").removeClass().addClass("form-control is-valid");
			$( "#bonus" ).prop( "disabled", true );
			flagdep = true;
		}
		

	},'json');

	
});

$("#bonus").keyup(function()
  {
	

	var getBonus= $('#bonus').val();
	$.post('parta.php',{ act:'employeeBonus', bonus: getBonus },
	function(data){
		
		
		console.log(data);

		if(data['bonus'] == 41){
			$("#bonus").removeClass().addClass("form-control is-invalid");
			$(".invalid-feedback").html("Bonus must only contain digits.");
			flagbonus = false;
			
		}
		
		
		if(data['bonus'] == 42){
			$("#bonus").removeClass().addClass("form-control");
			flagbonus = true;
			
			
		}
		if(data['bonus'] == 0){
			$("#bonus").removeClass().addClass("form-control is-valid");
			flagbonus = true;
			
		}
		

	},'json');


});


$("#btn").click(function(){

	var getName= $('#name').val();
	var getID= $('#eid').val();
	var getdep= $('#dep').val();
	var getBonus= $('#bonus').val();
	
	

	if(getID != '' && getName != '' && getdep != '' && flagName &&flagdep && flagid  && flagbonus){

		if(getBonus === ''){
			
			getBonus = 'N/A';

		
		}

		if(getdep === 'Sales'){

			
			var markup = "<tr class='table-info'><td>"+getName+"</td><td>" + getID + "</td><td>" + getdep + "</td><td>" + getBonus + "</td></tr>";


		}
		else if(getdep === 'HR'){

			var markup = "<tr class='table-warning'><td>"+getName+"</td><td>" + getID + "</td><td>" + getdep + "</td><td>" + getBonus + "</td></tr>";


		}

		else{var markup = "<tr><td>"+getName+"</td><td>" + getID + "</td><td>" + getdep + "</td><td>" + getBonus + "</td></tr>";}

		
	$("table tbody").append(markup);
	$("#name").removeClass().addClass("form-control");
	$("#eid").removeClass().addClass("form-control");
	$("#dep").removeClass().addClass("form-control");
	$("#bonus").removeClass().addClass("form-control");
	$('#details').trigger("reset");
		

	}

	
});


});