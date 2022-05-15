function valider() {
  
	var x = document.getElementById("in").value;
	var entree = parseInt(x.replace(/-/g,""));
	
	var y = document.getElementById("out").value;
	var sortie = parseInt(y.replace(/-/g,""));
	
	if(entree > sortie){
		document.write("Veuillez entrer une date de départ ultérieure à la date d'arrivée");
	}else if(entree < sortie){
		document.write("Bingo !");
	}
	var x = document.getElementsById("valid").value;
  if(x==""){
    document.write("Veullez remplir les cases");
  }
}