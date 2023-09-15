# Installatie

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

| Key                       | Required               | Usage                                                                                                               | Allowed Value                                        | Default / Example                                                                              |
|---------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------------------------------------------------|
| GITHUB_PAGES_BRANCH       | Alleen bij serverless  | De branche waarop de pagina wordt gebouwd                                                                           | string, max 255 characters                           | gh-pages                                                                                       |
| GITHUB_REPOSITORY_NAME    | Alleen bij serverless  |                                                                                                                     | string, max 255 characters                           | `${{ github.event.repository.name }}`                                                          |
| API_BASE_URL              | Yes                    | De locatie van de Open WOO API                                                                                      | string <URL>, string, max 255 characters             | "<https://api.gateway.commonground.nu/api>"                                                      |
| NL_DESIGN_THEME_CLASSNAME | Yes                    | De naam van het thema van de organisatie                                                                            | string, max 255 characters                           | "conduction-theme"                                                                             |
| FAVICON_URL               | Yes                    | De locatie van de favicon van de organisatie                                                                        | string <URL>, max 255 characters                     | "<https://conduction.nl/wp-content/uploads/2021/07/cropped-favicon-32x32.png>"                   |
| HEADER_LOGO_URL           | Yes                    | De locatie van het primaire logo van de organisatie                                                                 | string, moet een base encoded afbeelding zijn OF url | "<https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png>"                |
| ORGANISATION_NAME         | Yes                    | De naam van de Organisatie                                                                                          | string, max 255 characters                           | "Conduction"                                                                                   |
| JUMBOTRON_IMAGE_URL       | No                     | De locatie van de gebruikte header, bij leeg wordt er geen header getoont                                           | string <URL>, max 255 characters                     | "<https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png>" |
| FOOTER_LOGO_URL           | Yes                    | De locatie van het primaire logo van de organisatie                                                                 | string, moet een base encoded afbeelding zijn OF url | ...                                                                                            |
| FOOTER_LOGO_HREF          | Yes                    | De homepage van de organisatie                                                                                      | string <URL>, max 255 characters                     | "<https://conduction.nl/>"                                                                       |
| OIDN_NUMBER               | No                     | Het OIDN nummer van de organisatie, bij leeg worden WOO publicaties mogenlijk niet beperkt tot de eigen organisatie | integer, max 16 characters                           | 1234567890                                                                                     |

## Backend

Voor de backend zijn twee opties beschikbaar, in beide gevallen moet de resulterende URL worden opgenomen onder `API_BASE_URL` in de frontend configuratie.

### Open webconcept met Open WOO en Open Convenanten plugin

Volg de installatiehandleiding op [https://github.com/OpenWebconcept/plugin-openwoo](https://github.com/OpenWebconcept/plugin-openwoo) en op [https://github.com/OpenWebconcept/plugin-openconvenanten](https://github.com/OpenWebconcept/plugin-openconvenanten)

### Common Gateway met Open WOO Plugin

Volg de installatiehandleiding op [WOO Bundle](https://github.com/ConductionNL/WooBundle/tree/main).

## Externe systemen

### Inrichting Zaaksysteem

Voor het kunnen publiceren van zaken vanuit het zaaksysteem is het belangrijk dat het zaaksysteem beschikt over de juiste inrichting. Indien er via de Common Gateway (met Open Woo plugin) zaken worden opgehaald gelden daarvoor de volgende spelregels.

Zaken dienen te beschikken over de volgende properties (zaak attributen):

| Property            | Required | Usage                                                                                                 | Allowed Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|---------------------|----------|-------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| woo_publicatiedatum | Yes      | De datum vanaf wanneer de publicatie wordt gepubliceerd, bij leeg wordt de publicatie niet gepubliceerd | date-time or NULL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| woo_categorie       | Yes      | De categorie van de WOO-Publicatie                                                                    | One of ("Wetten en algemeen verbindende voorschriften","Overige besluiten van algemene strekking","Ontwerpen van wet- en regelgeving met adviesaanvraag","Organisatie en werkwijze","Bereikbaarheidsgegevens","Bij vertegenwoordigende organen ingekomen stukken","Vergaderstukken Staten-Generaal","Vergaderstukken decentrale overheden","Agenda's en besluitenlijsten bestuurscolleges","Adviezen","Convenanten","Jaarplannen en jaarverslagen","Subsidieverplichtingen anders dan met beschikking","WOO-verzoeken en -besluiten","Onderzoeksrapporten","Beschikkingen","Klachtoordelen")               |
| woo_thema           | No       | Een optionele titel van thema waar de zaak onder valt                                                 | string, max 255 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| woo_beschrijving                    |          |                                                                                                       | string, max 255 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| woo_samenvatting                    |          |                                                                                                       | string, max 255 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| woo_datum_besluit                    |          |                                                                                                       | string, max 255 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|                     |          |                                                                                                       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
Daarnaast is het mogelijk om bijlagen van publicaties te clusteren aan de hand van labels.

Note: Op dit moment doet Open WOO nog niets met thema's behalve ze weergeven bij de zaak. Er zijn echter plannen om in de toekomst een thema overzichtspagina te maken en WOO-publicaties filterbaar te maken op thema.

#### Voor XXLLNC (zaaksysteem.nl)

Er kan worden gekoppeld via de zoeken-optie

### Ophalen informatie

In principe "scraped" de Open WOO plugin elke nacht alle relevante zaken, hierbij zijn de stappen

1. Ophalen alle zaaktypen
2. Per zaaktype controleren op beschikbare eigenschappen (zie inrichting zaaksysteem)
3. Per zaaktype dat aan de voorwaarden voldoet de zaken ophalen
4. Per zaak controleren of er een publicatiedatum is, indien ja de zaak opnemen in de index
5. Zaken die niet in bovenstaande loop zijn gevonden, maar momenteel wel in de index zijn opgenomen verwijderen

In principe is bovenstaande genoeg om te zorgen dat het zaaksysteem leidend is en zaken zowel gepubliceerd als gedepubliceerd kunnen worden.
