
document.addEventListener("DOMContentLoaded", function(){

	// vars
	let btn_hamburguer = document.getElementById('btn_hamburguer');

	//Events
	if(typeof(btn_hamburguer) != 'undefined' && btn_hamburguer != null)
	{
		btn_hamburguer.addEventListener("click", function()
		{
			if(btn_hamburguer.classList.contains("active"))
			{
				btn_hamburguer.classList.remove("active");
			}
			else {
				btn_hamburguer.classList.add("active");
			}
		});
	}

	/* Accesibilidad */
	document.addEventListener("keyup", detectTabKey);

	/* Accesibilidad */
	window.onload = function() {
		window.micAccessTool = new MicAccessTool({
			link: 'http://your-awesome-website.com/your-accessibility-declaration.pdf',
			contact: 'mailto:your-mail@your-awesome-website.com',
			buttonPosition: 'right', // default is 'left'
			forceLang: 'es-ES' // default is 'en' may be 'he-IL', 'ru-RU', or 'fr_FR'
		});
	}

});
// DOMContentLoaded  end

function detectTabKey(e) {
	if (e.keyCode == 9) {
		if (document.getElementById("botoncontraste").classList.contains("active-barra-accesibilidad-govco")) {
		document.getElementById("botoncontraste").classList.toggle("active-barra-accesibilidad-govco");}
		if (document.getElementById("botonaumentar").classList.contains("active-barra-accesibilidad-govco")) {
		document.getElementById("botonaumentar").classList.toggle("active-barra-accesibilidad-govco");}
		if (document.getElementById("botondisminuir").classList.contains("active-barra-accesibilidad-govco")) {
		document.getElementById("botondisminuir").classList.toggle("active-barra-accesibilidad-govco");}
	}
}

function cambiarContexto()
{
	var botoncontraste = document.getElementById("botoncontraste");
	var botonaumentar = document.getElementById("botonaumentar");
	var botondisminuir = document.getElementById("botondisminuir");

	if (!botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
		botoncontraste.classList.toggle("active-barra-accesibilidad-govco");
		document.getElementById("titleaumentar").style.display="";
		document.getElementById("titledisminuir").style.display="";
		document.getElementById("titlecontraste").style.display="none";
	}
	if (botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
		botondisminuir.classList.remove("active-barra-accesibilidad-govco");
	}
	if (botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
		botonaumentar.classList.remove("active-barra-accesibilidad-govco");
	}

	// var element = document.getElementById('para-mirar');
	if (document.body.className == 'modo_oscuro-govco') {
		// var element = document.getElementById('para-mirar');
		document.body.className = "modo_claro-govco";
	} else {
		// var element = document.getElementById('para-mirar');
		document.body.className = "modo_oscuro-govco";
	}
}

function disminuirTamanio(operador)
{
	var botoncontraste = document.getElementById("botoncontraste");
	var botonaumentar = document.getElementById("botonaumentar");
	var botondisminuir = document.getElementById("botondisminuir");

	if (!botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
		botondisminuir.classList.toggle("active-barra-accesibilidad-govco");
		document.getElementById("titleaumentar").style.display="";
		document.getElementById("titledisminuir").style.display="none";
		document.getElementById("titlecontraste").style.display="";
	}
	if (botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
		botonaumentar.classList.remove("active-barra-accesibilidad-govco");
	}
	if (botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
		botoncontraste.classList.remove("active-barra-accesibilidad-govco");
	}

	// var div1 = document.getElementById("para-mirar")
	// var texto = div1.getElementsByTagName("p");
	// var texto = document.body.getElementsByTagName("p");
	var texto = document.querySelectorAll('p,h1,h2,h3,h4,h5,a');
	for (let element of texto) {
		const total = tamanioElemento(element);
		const nuevoTamanio = (operador === 'aumentar' ? (total + 1) : (total - 1)) + 'px';
		element.style.fontSize = nuevoTamanio
	}
}

function aumentarTamanio(operador)
{
	var botoncontraste = document.getElementById("botoncontraste");
	var botonaumentar = document.getElementById("botonaumentar");
	var botondisminuir = document.getElementById("botondisminuir");

	if (!botonaumentar.classList.contains("active-barra-accesibilidad-govco")) {
		botonaumentar.classList.toggle("active-barra-accesibilidad-govco");
		document.getElementById("titleaumentar").style.display="none";
		document.getElementById("titledisminuir").style.display="";
		document.getElementById("titlecontraste").style.display="";
	}
	if (botondisminuir.classList.contains("active-barra-accesibilidad-govco")) {
		botondisminuir.classList.remove("active-barra-accesibilidad-govco");
	}
	if (botoncontraste.classList.contains("active-barra-accesibilidad-govco")) {
		botoncontraste.classList.remove("active-barra-accesibilidad-govco");
	}

	// var div1 = document.getElementById("para-mirar")
	// var texto = div1.getElementsByTagName("p");
	var texto = document.querySelectorAll('p,h1,h2,h3,h4,h5,a');
	for (let element of texto) {
		const total = tamanioElemento(element);
		if(total<=64)
		{
			const nuevoTamanio = (operador === 'aumentar' ? (total + 1) : (total - 1)) + 'px';
			element.style.fontSize = nuevoTamanio
		}
	}
}

function tamanioElemento(element) {
	const tamanioParrafo = window.getComputedStyle(element, null).getPropertyValue('font-size');
	return parseFloat(tamanioParrafo);
}
