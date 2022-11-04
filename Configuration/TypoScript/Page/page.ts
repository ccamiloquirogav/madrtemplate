# Se crea y se configura el sitio
page = PAGE
page {
	typeNum = 0
	shortcutIcon = EXT:madrtemplate/Resources/Public/images/favicon.ico
	includeCSS {
		bootstrap_bdc = https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css
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
}
