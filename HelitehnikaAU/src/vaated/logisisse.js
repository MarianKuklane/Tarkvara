export class kuulutuse_detailvaade
{
	
  constructor()
  {
  }
  
  activate()
  {
	// Get the modal
	  var modal = document.getElementById('id01');

	  // When the user clicks anywhere outside of the modal, close it
	  window.onclick = function(event) 
	  {
	      if (event.target == modal) 
	      {
	          modal.style.display = "none";
	      }
	  }
	  
	  if (username.value ==""   && password.value=="")
	  {
	  	alert("Kui soovid sisse logida, siis sisesta väljad!");
	  }
  
	  if ( username.value   && password.value)
	  {
		  document.location.href = "index"
	  }
  }
  
}