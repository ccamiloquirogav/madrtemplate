lib.mainMenu = HMENU
lib.mainMenu {
	# Enlaces del primer nivel
	1 = TMENU
	1 {
		wrap = |
		expAll = 1
		NO = 1
    NO {
			wrapItemAndSub = <li class="nav-item">|</li>
			ATagParams = class="nav-link"
    }
		# Copia los parámetros de NO (Configuración para un item normal)
		# en IFSUB (Configuración para los items que tienen subpáginas)
		IFSUB =< .NO
		IFSUB {
			doNotLinkIt = 1
			allWrap = <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">|</a>
			allWrap.insertData = 1
			wrapItemAndSub= <li class="nav-item dropdown item_{field:uid}">|</li>
			wrapItemAndSub.insertData = 1
		}
		CURIFSUB < .IFSUB
		CUR =< .NO
		CUR {
			allWrap>
			wrapItemAndSub= <li class="nav-item item_{field:uid}">|</li>
			wrapItemAndSub.insertData = 1
			ATagParams = class="nav-link active" aria-current="page"
		}
	}

	# Enlaces del segundo nivel
	2 = TMENU
	2 {
		expAll = 1
		wrap = <ul class="dropdown-menu">|</ul>
		NO {
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			ATagTitle.field = description // title
			linkWrap = |
			ATagBeforeWrap = 0
			doNotLinkIt = 1
			#
			stdWrap.htmlSpecialChars = 0
			stdWrap.cObject = CASE
			stdWrap.cObject {
				key.field = doktype
				default = TEXT
				default {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink.parameter.field = uid
				}
				# Link
				3 = TEXT
				3 {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink {
						parameter.cObject=CASE
						parameter.cObject {
							key.field=urltype
							default=TEXT
							default.dataWrap = {field:url}
							1=TEXT
							1.dataWrap = http://{field:url}
							2=TEXT
							2.dataWrap = ftp://{field:url}
							3=TEXT
							3.dataWrap = mailto:{field:url}
							4=TEXT
							4.dataWrap = https://{field:url}
						}
					}
				}
			}
		}
		# Copia los parámetros de NO (Configuración para un item normal)
		# en IFSUB (Configuración para los items que tienen subpáginas)
		IFSUB =< .NO
		IFSUB {
			doNotLinkIt = 1
			allWrap = <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">|</a>
			allWrap.insertData = 1
			wrapItemAndSub= <li class="nav-item dropdown item_{field:uid}">|</li>
			wrapItemAndSub.insertData = 1
		}
	}

	# Enlaces del tercer nivel
	3 = TMENU
	3 {
		expAll = 1
		wrap = <ul class="submenu dropdown-menu">|</ul>
		NO {
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			ATagTitle.field = description // title
			linkWrap = |
			ATagBeforeWrap = 0
			doNotLinkIt = 1
			#
			stdWrap.htmlSpecialChars = 0
			stdWrap.cObject = CASE
			stdWrap.cObject {
				key.field = doktype
				default = TEXT
				default {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink.parameter.field = uid
				}
				# Link
				3 = TEXT
				3 {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink {
						parameter.cObject=CASE
						parameter.cObject {
							key.field=urltype
							default=TEXT
							default.dataWrap = {field:url}
							1=TEXT
							1.dataWrap = http://{field:url}
							2=TEXT
							2.dataWrap = ftp://{field:url}
							3=TEXT
							3.dataWrap = mailto:{field:url}
							4=TEXT
							4.dataWrap = https://{field:url}
						}
					}
				}
			}
		}
	}

	# Enlaces del cuarto nivel
	4 = TMENU
	4 {
		expAll = 1
		wrap = <ul class="dropdown-menu">|</ul>
		NO {
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			ATagTitle.field = description // title
			linkWrap = |
			ATagBeforeWrap = 0
			doNotLinkIt = 1
			#
			stdWrap.htmlSpecialChars = 0
			stdWrap.cObject = CASE
			stdWrap.cObject {
				key.field = doktype
				default = TEXT
				default {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink.parameter.field = uid
				}
				# Link
				3 = TEXT
				3 {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink {
						parameter.cObject=CASE
						parameter.cObject {
							key.field=urltype
							default=TEXT
							default.dataWrap = {field:url}
							1=TEXT
							1.dataWrap = http://{field:url}
							2=TEXT
							2.dataWrap = ftp://{field:url}
							3=TEXT
							3.dataWrap = mailto:{field:url}
							4=TEXT
							4.dataWrap = https://{field:url}
						}
					}
				}
			}
		}
	}
}

# TypoScript part
lib.mainMenuResponsive = HMENU
lib.mainMenuResponsive {
	# Enlaces del primer nivel
	1 = TMENU
	1 {
		wrap = |
		expAll = 1
		NO = 1
    NO {
			wrapItemAndSub = <li class="nav-item">|</li>
			ATagParams = class="nav-link"
    }
		# Copia los parámetros de NO (Configuración para un item normal)
		# en IFSUB (Configuración para los items que tienen subpáginas)
		IFSUB =< .NO
		IFSUB {
			doNotLinkIt = 1
			allWrap = <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#collapse_menu_{field:uid}" aria-expanded="false">|</a>
			allWrap.insertData = 1
			wrapItemAndSub= <li class="nav-item dropdown item_{field:uid}">|</li>
			wrapItemAndSub.insertData = 1
		}
		CURIFSUB < .IFSUB
		CUR =< .NO
		CUR {
			allWrap>
			wrapItemAndSub= <li class="nav-item item_{field:uid}">|</li>
			wrapItemAndSub.insertData = 1
			ATagParams = class="nav-link active" aria-current="page"
		}
	}

	# Enlaces del segundo nivel
	2 = TMENU
	2 {
		expAll = 1
		wrap = <ul class="dropdown-menu" id="collapse_menu_{field:uid}">|</ul>
		NO {
			stdWrap.htmlSpecialChars = 1
			wrapItemAndSub = <li>|</li>
			ATagTitle.field = description // title
			linkWrap = |
			ATagBeforeWrap = 0
			doNotLinkIt = 1
			#
			stdWrap.htmlSpecialChars = 0
			stdWrap.cObject = CASE
			stdWrap.cObject {
				key.field = doktype
				default = TEXT
				default {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink.parameter.field = uid
				}
				# Link
				3 = TEXT
				3 {
					field = nav_title//title
					htmlSpecialChars = 1
					typolink {
						parameter.cObject=CASE
						parameter.cObject {
							key.field=urltype
							default=TEXT
							default.dataWrap = {field:url}
							1=TEXT
							1.dataWrap = http://{field:url}
							2=TEXT
							2.dataWrap = ftp://{field:url}
							3=TEXT
							3.dataWrap = mailto:{field:url}
							4=TEXT
							4.dataWrap = https://{field:url}
						}
					}
				}
			}
		}
		# Copia los parámetros de NO (Configuración para un item normal)
		# en IFSUB (Configuración para los items que tienen subpáginas)
		IFSUB =< .NO
		IFSUB {
			doNotLinkIt = 1
			allWrap = <a class="nav-link dropdown-toggle" data-bs-toggle="collapse" href="#collapse_menu_{field:uid}" aria-expanded="false">|</a>
			allWrap.insertData = 1
			wrapItemAndSub= <li class="nav-item dropdown item_{field:uid}">|</li>
			wrapItemAndSub.insertData = 1
		}
	}
}
