# Installatie

Deze installatie handleiding is bedoeld voor overheden en levernciers  die zelfstandig aan de slag willen met Open WOO Website, als je Open WOO website als SAAS wilt afnemen kijk dan onder [kosten](/kosten).

Het Open WOO Website template is gebaseerd op het Conduction [Productpage template](https://github.com/ConductionNL/product-website-template) voor commonground. Onderstaande tref je ene verkorte installatie handleiding die vooral focust op de onderliggende bronnen. Voor meer en uitgebreidere details kunt u de documentatie van de Productpage website template gebruiken.

## Randvoorwaarden

Om dit template te gebruiken moet je beschikken over:

- NL Design Token voor je organisatie ([lees hier hoe je die kan verkrijgen](https://conductionnl.github.io/product-website-template/pages/Features/NL_Design)
- Een GitHub organisatie en beheerders rechten daarop OF (Zie [Serverless Installatie](#serverless-installatie))
- Een APACHE/NGINX server(Zie [Server Installatie](#server-installatie))
- Een Open Webconcept CMS (WordPress) met de [Open WOO](https://github.com/OpenWebconcept/plugin-openwoo)) en [Open Convenanten](https://github.com/OpenWebconcept/plugin-openconvenanten) plugins OF
- Een Common Gateway installatie (On premise of SAAS) met de [WOO Bundle](https://github.com/ConductionNL/WooBundle/tree/main)

## Frontend

### Serverless Installatie

Dit template is in eerste instantie opgezet om serverless gebruikt te worden via GitHub. Dat scheelt niet alleen in de kosten, maar levert ook voordeel op in de beschikbaarheid en belasting. Simpel gezegd de GitHub CDN is gebouwd om flink wat meer aan te kunnen dan de gemiddelde gemeente.

1. Rechts boven deze repro staat een knop “gebruiken als template” druk daarop en maak een nieuwe repository aan op uw GitHub-organisatie.
2. Pas de configuratie aan zo als vermeld onder configuratie

### Server Installatie

1. Volg de stappen hiervoor op de [Productpage template](https://github.com/ConductionNL/product-website-template)
2. Pas het de configuratie aan zoals vermeld onder configuratie

### Configuratie

Configuratie vindt plaats via environment (env) waardes. In het geval van een serverless configuratie moeten de env waardes worden aangepast in de [page deploy workflow](/.github/workflows/woo-page-deploy.yml). In het geval van een server installatie in het .env bestand in de Gatsby root map. We ondersteunen de volgende configuratieopties

| Key                       | Verplicht             | Usage                                                                                                               | Allowed Value                                        | Default / Example                                                                              |
|---------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------------------------------------------------|
| GITHUB_PAGES_BRANCH       | Alleen bij serverless | De branche waarop de pagina wordt gebouwd                                                                           | string, max 255 characters                           | gh-pages                                                                                       |
| GITHUB_REPOSITORY_NAME    | Alleen bij serverless |                                                                                                                     | string, max 255 characters                           | `${{ github.event.repository.name }}`                                                          |
| API_BASE_URL              | Ja                    | De locatie van de Open WOO API                                                                                      | string <URL>, string, max 255 characters             | "<https://api.gateway.commonground.nu/api>"                                                      |
| NL_DESIGN_THEME_CLASSNAME | Ja                    | De naam van het thema van de organisatie                                                                            | string, max 255 characters                           | "conduction-theme"                                                                             |
| FAVICON_URL               | Ja                    | De locatie van de favicon van de organisatie                                                                        | string <URL>, max 255 characters                     | "<https://conduction.nl/wp-content/uploads/2021/07/cropped-favicon-32x32.png>"                   |
| HEADER_LOGO_URL           | Ja                    | De locatie van het primaire logo van de organisatie                                                                 | string, moet een base encoded afbeelding zijn OF url | "<https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png>"                |
| ORGANISATION_NAME         | Ja                    | De naam van de Organisatie                                                                                          | string, max 255 characters                           | "Conduction"                                                                                   |
| JUMBOTRON_IMAGE_URL       | Nee                   | De locatie van de gebruikte header, bij leeg wordt er geen header getoont                                           | string <URL>, max 255 characters                     | "<https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png>" |
| FOOTER_LOGO_URL           | Ja                    | De locatie van het primaire logo van de organisatie                                                                 | string, moet een base encoded afbeelding zijn OF url | ...                                                                                            |
| FOOTER_LOGO_HREF          | Ja                    | De homepage van de organisatie                                                                                      | string <URL>, max 255 characters                     | "<https://conduction.nl/>"                                                                       |
| OIDN_NUMBER               | Nee                   | Het OIDN nummer van de organisatie, bij leeg worden WOO publicaties mogenlijk niet beperkt tot de eigen organisatie | integer, max 16 characters                           | 1234567890                                                                                     |

## Backend

Voor de backend zijn twee opties beschikbaar, in beide gevallen moet de resulterende URL worden opgenomen onder `API_BASE_URL` in de frontend configuratie.

### Open webconcept met Open WOO en Open Convenanten plugin

Volg de installatiehandleiding op [https://github.com/OpenWebconcept/plugin-openwoo](https://github.com/OpenWebconcept/plugin-openwoo) en op [https://github.com/OpenWebconcept/plugin-openconvenanten](https://github.com/OpenWebconcept/plugin-openconvenanten)

### Common Gateway met Open WOO Plugin

Volg de installatiehandleiding op [WOO Bundle](https://github.com/ConductionNL/WooBundle/tree/main).

## Externe systemen
Voor het koppelen van externe systemen geld dat zij op de juiste manier moeten zijn geconfigureerd, kijk daarvoor onder [configuratie](/Configuratie).

