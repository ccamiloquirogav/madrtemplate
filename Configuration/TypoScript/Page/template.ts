
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
		madrsd_searchPid = TEXT
		madrsd_searchPid.value = 13
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
	# Menu And Site- Data Procesing
	dataProcessing {
      10 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
      10 {
         levels = 3
         includeSpacer = 1
         as = mainnavigation
      }
		20 = TYPO3\CMS\Frontend\DataProcessing\SiteProcessor
		20 {
		   as = site
		}
		30 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
		30 {
			special = directory
			#special.value = 57
			special.value = 5
			levels = 1
         as = profilesnavigation
		}
   }
}
