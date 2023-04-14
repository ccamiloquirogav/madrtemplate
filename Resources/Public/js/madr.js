
document.addEventListener("DOMContentLoaded", function(){

	// vars
	let btn_hamburguer = document.getElementById('btn_hamburguer');
	// let path_xml = "http://localhost/madr_pruebasse/public/typo3conf/ext/madrtemplate/Resources/Public/xml/productos.xml";
	let path_xml = "https://pruebasse.minagricultura.gov.co/typo3conf/ext/madrtemplate/Resources/Public/xml/productos.xml";


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

	// Load Precios
	var cnt_products_dane = document.getElementById("cnt_products_dane");
	let str_result_pros = "";
	let arr_result_dane = [];
	let arr_city = [];
	let arr_products = [];

	if(typeof(cnt_products_dane) != 'undefined' && cnt_products_dane != null)
	{
		var myXML = "";
		fetch(path_xml)
			.then( response => response.text()  )
			.then( data => {
				const parser = new DOMParser();
    			const xml = parser.parseFromString(data, "application/xml");
				var products = xml.getElementsByTagName("product");
				let date_pros = "";

				for (var i = 0; i < products.length; i++)
				{
					// let ciudad = products.item(i).getElementsByTagName("ciudad")[0];
					let ciudad = products[i].getElementsByTagName("ciudad")[0].innerHTML;
					let codProducto = products[i].getElementsByTagName("codProducto")[0].innerHTML;
					let enviado = products[i].getElementsByTagName("enviado")[0].innerHTML;
					let fechaCaptura = products[i].getElementsByTagName("fechaCaptura")[0].innerHTML;
					let fechaCreacion = products[i].getElementsByTagName("fechaCreacion")[0].innerHTML;
					let precioPromedio = products[i].getElementsByTagName("precioPromedio")[0].innerHTML;
					let producto = products[i].getElementsByTagName("producto")[0].innerHTML;
					let regId = products[i].getElementsByTagName("regId")[0].innerHTML;

					// prepare data
					let arr_item = {
						"ciudad" : ciudad,
						"codProducto" : codProducto,
						"enviado" : enviado,
						"fechaCaptura" : fechaCaptura,
						"fechaCreacion" : fechaCreacion,
						"precioPromedio" : precioPromedio,
						"producto" : producto,
						"regId" : regId
					};
					date_pros = fechaCreacion;

					// build arrays
					arr_result_dane.push(arr_item);
					arr_city.push(ciudad);
					arr_products.push(producto);

				}

				// depure arrays
				let uniqueCity = [...new Set(arr_city)];
				let uniqueProduct = [...new Set(arr_products)];

				// build container
				let str_city = "";
				// loop cities
				uniqueCity.forEach(item => {
					let cnt = 0;
					str_city += "<div class='cnt_city_pro'>";
					// loop each product in city
					arr_result_dane.forEach(item_p => {
						cnt++;
						if(cnt==1){
							str_city += "<h3>"+item+"</h3>";
						}
						if(item_p["ciudad"]==item)
						{
							str_city += "<div class='item_price'>"+item_p["producto"]+"<span>$"+item_p["precioPromedio"]+"</span></div>";
						}
					});
					str_city += "</div>";

				});

				// console.log(arr_result_dane);
				str_result_pros = str_city;


				if (document.querySelector('.cnt_pros')) {
					const cnt_pros = document.querySelector('.cnt_pros');
					cnt_pros.innerHTML = str_result_pros;

					// add button more
					const btn_pros_all = document.createElement("div");
					btn_pros_all.innerText = "Más";
					btn_pros_all.classList.add("btn_pros_all");
					btn_pros_all.onclick = function() {
						var cnt_pros = document.getElementById("cnt_pros");
						if(cnt_pros.classList.contains("full"))
						{
							btn_pros_all.innerText = "Más";
						   cnt_pros.classList.remove("full");
						}
						else{
						   cnt_pros.classList.add("full");
							btn_pros_all.innerText = "Menos";
						}
					}
					cnt_products_dane.appendChild(btn_pros_all);

					// add header


					// title
					const str_header = document.createElement("h2");
					str_header.innerText = "Precio promedio de los productos en las principales ciudades de Colombia";
					str_header.style.textAlign = "center";
					// pretitle
					const str_header_pre = document.createElement("p");
					str_header_pre.innerText = "(Precio por kilogramo - dado en pesos colombianos)";
					str_header_pre.style.textAlign = "center";

					// date
					const str_date_pros = document.createElement("div");
					date_pros = date_pros.slice(0, 10);
					str_date_pros.classList.add("cnt_date_pros");
					str_date_pros.innerText = "Tomado del DANE "+date_pros;

					//
					cnt_products_dane.prepend(str_date_pros);
					cnt_products_dane.prepend(str_header_pre);
					cnt_products_dane.prepend(str_header);
				}
			})
		.catch( console.error );


		// Event Precios
		/*global $, console*/
		var 	slider = document.querySelector('.items'),
				isDown = false,
				startX,
				scrollLeft;

		// slider.scrollLeft = 1970;
		slider.onmousedown = function (e) {
			'use strict';
			isDown = true;
			slider.classList.add('active');
			startX = e.pageX - slider.offsetLeft;
			scrollLeft = slider.scrollLeft;
		};

		slider.onmouseup = function () {
			'use strict';
			isDown = false;
			slider.classList.remove('active');
		};

		slider.onmouseleave = function () {
			'use strict';
			isDown = false;
			slider.classList.remove('active');
		};

		slider.onmousemove = function (e) {
			'use strict';
			if (!isDown) { return; }
			e.preventDefault();
			var x = e.pageX - slider.offsetLeft,
			walk = x - startX;
			slider.scrollLeft = scrollLeft - walk;
		};

		function controlsSlider(num) {
			'use strict';
			var smooth = setInterval(function () {
				slider.scrollLeft += num;
			}, 10);
			setTimeout(function () {
				clearInterval(smooth);
			}, 210);
		}
		window.onkeydown = function (e) {
			'use strict';
			var key = e.keyCode;
				if (key === 39) {
				controlsSlider(10);
			}
			if (key === 37) {
				controlsSlider(-10);
			}
		};









	}
	
});
// DOMContentLoaded  end

function detectTabKey(e)
{
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

function tamanioElemento(element)
{
	const tamanioParrafo = window.getComputedStyle(element, null).getPropertyValue('font-size');
	return parseFloat(tamanioParrafo);
}
