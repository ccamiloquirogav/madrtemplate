
# Create a Fluid Template
page.10 = FLUIDTEMPLATE
page.10 {
	# Set the Template Pathes
	partialRootPaths {
		1 = {$tx_madrtemplate.filepaths.pri}/Partials/
	}
	layoutRootPaths {
		1 = {$tx_madrtemplate.filepaths.pri}/Layouts/
	}
	variables {
		madrsd_currentLang = TEXT
		madrsd_currentLang.value = {$tx_madrtemplate.parameters.currentLang}
		madrsd_langMenu = HMENU
		madrsd_langMenu {
			special = language
			special.value = {$tx_madrtemplate.parameters.languageCodes}
			special.normalWhenNoLanguage = 0
			1 = TMENU
			1 {
				# Item normal
				NO {
					stdWrap.cObject = TEXT
					stdWrap.cObject.value = {$tx_madrtemplate.parameters.languageId}
					allWrap = <li> | </li>
				}
				# Item activo
#				ACT = 1
#				ACT.doNotShowLink = 1
				# Item normal (cuando no existe una versión traducida de la página)
				USERDEF1 = 1
				USERDEF1.doNotShowLink = 1
				# Item activo (cuando no existe una versión traducida de la página)
				USERDEF2 = 1
				USERDEF2.doNotShowLink = 1
			}
		}
		madrsd_facebook = TEXT
		madrsd_facebook.value = {$tx_madrtemplate.parameters.socialLinks.facebook}
		madrsd_twitter = TEXT
		madrsd_twitter.value = {$tx_madrtemplate.parameters.socialLinks.twitter}
		madrsd_rss = TEXT
		madrsd_rss.value = {$tx_madrtemplate.parameters.socialLinks.rss}
		madrsd_youtube = TEXT
		madrsd_youtube.value = {$tx_madrtemplate.parameters.socialLinks.youtube}
		madrsd_aspirantes = TEXT
		madrsd_aspirantes.value = {$tx_madrtemplate.parameters.profiles.aspirantes}
		madrsd_estudiantes = TEXT
		madrsd_estudiantes.value = {$tx_madrtemplate.parameters.profiles.estudiantes}
		madrsd_egresados = TEXT
		madrsd_egresados.value = {$tx_madrtemplate.parameters.profiles.egresados}
		madrsd_docentes = TEXT
		madrsd_docentes.value = {$tx_madrtemplate.parameters.profiles.docentes}
		madrsd_administrativos = TEXT
		madrsd_administrativos.value = {$tx_madrtemplate.parameters.profiles.administrativos}
		madrsd_subdomain = TEXT
		madrsd_subdomain.data = getEnv:HTTP_HOST
		madrsd_servicesMenu < lib.servicesMenu
		madrsd_showFinder = TEXT
		madrsd_showFinder.value = {$tx_madrtemplate.parameters.showFinder}
		madrsd_contenido < styles.content.get
		madrsd_sitemapLinkUid = TEXT
		madrsd_sitemapLinkUid.value = {$tx_madrtemplate.parameters.sitemapLinkUid}
		madrsd_faqLinkUid = TEXT
		madrsd_faqLinkUid.value = {$tx_madrtemplate.parameters.faqLinkUid}
		madrsd_contactLinkUid = TEXT
		madrsd_contactLinkUid.value = {$tx_madrtemplate.parameters.contactLinkUid}
		madrsd_glosaryLinkUid = TEXT
		madrsd_glosaryLinkUid.value = {$tx_madrtemplate.parameters.glosaryLinkUid}
		madrsd_contactAddress = TEXT
		madrsd_contactAddress.value = {$tx_madrtemplate.parameters.contact.address}
		madrsd_contactBuilding = TEXT
		madrsd_contactBuilding.value = {$tx_madrtemplate.parameters.contact.building}
		madrsd_contactCity = TEXT
		madrsd_contactCity.value = {$tx_madrtemplate.parameters.contact.city}
		madrsd_contactPhone = TEXT
		madrsd_contactPhone.value = {$tx_madrtemplate.parameters.contact.phone}
		madrsd_contactEmailAccount = TEXT
		madrsd_contactEmailAccount.value = {$tx_madrtemplate.parameters.contact.emailAccount}
		madrsd_aboutLinkUid = TEXT
		madrsd_aboutLinkUid.value = {$tx_madrtemplate.parameters.aboutLinkUid}
		madrsd_lastUpdateDate = TEXT
		madrsd_lastUpdateDate {
			data = page:SYS_LASTCHANGED
			if.isTrue.data = page:SYS_LASTCHANGED
			date >
			strftime = %d/%m/%Y
			data = register:SYS_LASTCHANGED
			if >
		}
	} # end Variables
	# Assign the Template files with the Fluid Backend-Template
	file.stdWrap.cObject = CASE
	file.stdWrap.cObject {
		key.data = levelfield:-1, backend_layout_next_level, slide
		key.override.field = backend_layout
		# Set the default Template, our 3 column Template
		default = TEXT
		default.value = {$tx_madrtemplate.filepaths.pri}/Templates/Page.html
	}
	# Data Procesing
	dataProcessing {
      10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      10 {
         levels = 3
         includeSpacer = 1
         as = mainnavigation
      }
   }
}
