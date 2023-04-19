var arr_pros_img = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33];

document.addEventListener("DOMContentLoaded", function()
{
	// let path_xml = "http://localhost/madr_pruebasse/public/typo3conf/ext/madrtemplate/Resources/Public/xml/productos.xml";
	let path_xml = "https://pruebasse.minagricultura.gov.co/typo3conf/ext/madrtemplate/Resources/Public/xml/productos.xml";
	// let path_prods = "http://localhost/madr_pruebasse/public/typo3conf/ext/madrtemplate/Resources/Public/images/prods/";
	let path_prods = "https://pruebasse.minagricultura.gov.co/typo3conf/ext/madrtemplate/Resources/Public/images/prods/";

	// Load Precios contenedor
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
					producto = producto.replaceAll(/\*/g, '')
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

					// .replaceAll(/\*/g, '');
					// producto = producto.replace(/\*/g, "");
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


	// Load Ticker Precios
	var cnt_products_dane_marquee = document.getElementById("cnt_products_dane_marquee");
	let str_result_pros2 = "";
	let arr_result_dane2 = [];
	let arr_city2 = [];
	let arr_products2 = [];

	if(typeof(cnt_products_dane_marquee) != 'undefined' && cnt_products_dane_marquee != null)
	{
		var myXML = "";
		fetch(path_xml)
			.then( response => response.text()  )
			.then( data => {
				const parser2 = new DOMParser();
    			const xml2 = parser2.parseFromString(data, "application/xml");
				var products2 = xml2.getElementsByTagName("product");
				let date_pros2 = "";

				for (var i = 0; i < products2.length; i++)
				{
					let ciudad2 = products2[i].getElementsByTagName("ciudad")[0].innerHTML;
					let codProducto2 = products2[i].getElementsByTagName("codProducto")[0].innerHTML;
					let enviado2 = products2[i].getElementsByTagName("enviado")[0].innerHTML;
					let fechaCaptura2 = products2[i].getElementsByTagName("fechaCaptura")[0].innerHTML;
					let fechaCreacion2 = products2[i].getElementsByTagName("fechaCreacion")[0].innerHTML;
					let precioPromedio2 = products2[i].getElementsByTagName("precioPromedio")[0].innerHTML;
					let producto2 = products2[i].getElementsByTagName("producto")[0].innerHTML;
					producto2 = producto2.replaceAll(/\*/g, '')
					let regId2 = products2[i].getElementsByTagName("regId")[0].innerHTML;

					// prepare data
					let arr_item2 = {
						"ciudad" : ciudad2,
						"codProducto" : codProducto2,
						"enviado" : enviado2,
						"fechaCaptura" : fechaCaptura2,
						"fechaCreacion" : fechaCreacion2,
						"precioPromedio" : precioPromedio2,
						"producto" : producto2,
						"regId" : regId2
					};
					date_pros2 = fechaCreacion2;
					// build arrays
					arr_result_dane2.push(arr_item2);
					arr_city2.push(ciudad2);
					arr_products2.push(producto2);
				}

				// depure arrays
				let uniqueCity2 = [...new Set(arr_city2)];
				let uniqueProduct2 = [...new Set(arr_products2)];

				// build container
				let str_city2 = "";
				// loop cities
				uniqueCity2.forEach(item => {
					let cnt2 = 0;
					// loop each product in city
					arr_result_dane2.forEach(item_p => {
						cnt2++;

						// Check if exists image in array
						let url_img = "";
						arr_pros_img.forEach(item_img =>{
							if(item_p["codProducto"] == item_img )
							{
								url_img = "<img src='"+path_prods+"/"+item_p["codProducto"]+".jpg'>";
							}
						});

						if(item_p["ciudad"]==item)
						{
							str_city2 += "<div class='item_marquee'>";
							str_city2 += "	<div class='item_marquee_img'>"+url_img+"</div>";
							str_city2 += "	<div class='item_marquee_info'>";
							str_city2 += "		<div class='item_marquee_name'>";
							str_city2 += 			item_p["producto"];
							str_city2 += "		</div>";
							str_city2 += "		<div class='item_marquee_price'>";
							str_city2 += "			$ "+item_p["precioPromedio"];
							str_city2 += "		</div>";
							str_city2 += "		<div class='item_marquee_city'>";
							str_city2 += 			item_p["ciudad"];
							str_city2 += "		</div>";
							str_city2 += "	</div>";
							str_city2 += "</div>";
						}
					});
				});

				// str_result_pros2 = "<div class='inner_marquee' id='inner_marquee'><div class='round_marquee'>"+str_city2+"</div></div>";
				str_result_pros2 = "<div class='marquee'><div class='inner_marquee' id='inner_marquee'><div class='round_marquee'>"+str_city2+"</div><div class='round_marquee'>"+str_city2+"</div></div></div>";

				// add header
				// title
				let str_header = "<h2 style='text-align:center;'>Precio promedio de los productos en las principales ciudades de Colombia</h2>";
				// pretitle
				let str_header_pre = "<p style='text-align:center;'>(Precio por kilogramo - dado en pesos colombianos)</p>";
				// date
				date_pros2 = date_pros2.slice(0, 10);
				let str_date_pros = "<div class='cnt_date_pros'>Tomado del DANE "+date_pros2+"</div>";
				// add title
				// add content
				cnt_products_dane_marquee.innerHTML = str_header+str_header_pre+str_date_pros+str_result_pros2;
				// cnt_products_dane_marquee.innerHTML = str_result_pros2;

				//4. se establece la altura del contenedor
				var inner_marquee = document.getElementById("inner_marquee");
				if(typeof(inner_marquee) != 'undefined' && inner_marquee != null)
				{
					var ancho = parseInt(inner_marquee.clientWidth)/2;
					// se establece los frames
					let css = '@-webkit-keyframes animate_prices_h {';
					css += '		0% { left: 0; }';
					css += '		100% { left: -'+ancho+'px;}';
					css += '	}';
					css += '	@-moz-keyframes animate_prices_h {';
					css += '		0% { left: 0; }';
					css += '		100% { left: -'+ancho+'px;}';
					css += '	}';
					css += '	@keyframes animate_prices_h {';
					css += '		0% { left: 0; }';
					css += '		100% { left: -'+ancho+'px;}';
					css += '	}';
					var head = document.getElementsByTagName('head')[0];
					var css_anima = document.createElement('style');
					css_anima.innerHTML = css;
					head.appendChild(css_anima);
				}

				// if (document.querySelector('.cnt_pros')) {
				// 	const cnt_pros = document.querySelector('.cnt_pros');
				// 	cnt_pros.innerHTML = str_result_pros;

					// add button more
					// const btn_pros_all = document.createElement("div");
					// btn_pros_all.innerText = "Más";
					// btn_pros_all.classList.add("btn_pros_all");
					// btn_pros_all.onclick = function() {
					// 	var cnt_pros = document.getElementById("cnt_pros");
					// 	if(cnt_pros.classList.contains("full"))
					// 	{
					// 		btn_pros_all.innerText = "Más";
					// 	   cnt_pros.classList.remove("full");
					// 	}
					// 	else{
					// 	   cnt_pros.classList.add("full");
					// 		btn_pros_all.innerText = "Menos";
					// 	}
					// }
					// cnt_products_dane.appendChild(btn_pros_all);


				// }
			})
		.catch( console.error );
	}
});
