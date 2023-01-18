# Se crea y se configura el sitio
page = PAGE
page {
	typeNum = 0
	shortcutIcon = EXT:madrtemplate/Resources/Public/images/favicon.ico
	includeCSS {
		bootstrap_bdc = https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
		madr_govco = {$tx_madrtemplate.filepaths.css}/govco_font.css
		madr_estilos = {$tx_madrtemplate.filepaths.css}/madr.css
	}
	includeJS {
		bootstrap_bdc_js = https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js
		madr_js = {$tx_madrtemplate.filepaths.js}/madr.js
	}
	meta {
		description =
		description.override.field = description
		author =
		author.override.field = author
		keywords =
		keywords.override.field = keywords
		robots.value = all
		revisit-after = 1 hour
		copyright =
		distribution = all
		viewport = width=device-width, initial-scale=1, minimum-scale=0.5, maximum-scale=2.5, user-scalable=yes
		expires = 1
	}
	headerData {
		10 = TEXT
		10 {
			field = title
			noTrimWrap = |<title>|{$tx_madrtemplate.parameters.titleComplement}: Ministerio de Agricultura y Desarrollo Rural</title>|
		}
	}
	headerData {
		1541516054 = COA
   	1541516054 {
			#
			# Start comment
			1 = TEXT
			1.value = <!-- favicon begin -->

			# End comment
			100 = TEXT
			100.value = <!-- favicon end -->

			10 = COA
			10 {
				1 = IMG_RESOURCE
				1.file = {$tx_madrtemplate.filepaths.img}/apple-touch-icon.png
				1.stdWrap.wrap = <link rel="apple-touch-icon" sizes="180x180" href="|">

				2 = IMG_RESOURCE
				2.file = {$tx_madrtemplate.filepaths.img}/favicon-32x32.png
				2.stdWrap.wrap = <link rel="icon" type="image/png" sizes="32x32" href="|">

				3 = IMG_RESOURCE
				3.file = {$tx_madrtemplate.filepaths.img}/favicon-16x16.png
				3.stdWrap.wrap = <link rel="icon" type="image/png" sizes="16x16" href="|">

				4 = TEXT
				4.value = <link rel="manifest" href="{path: EXT:madrtemplate/Resources/Public/images/site.webmanifest}">
				4.insertData = 1

				5 = IMG_RESOURCE
				5.file = {$tx_madrtemplate.filepaths.img}/safari-pinned-tab.svg
				5.stdWrap.wrap = <link rel="mask-icon" href="|" color="#5bbad5">

				6 = TEXT
				6.value = <meta name="msapplication-TileColor" content="#da532c">

				7 = TEXT
				7.value = <meta name="theme-color" content="#ffffff">
			}
			#
		}
	}
}
