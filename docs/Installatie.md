# Installatie

Deze installatiehandleiding is bedoeld voor overheden en leveranciers die zelfstandig aan de slag willen met Open Woo Website. Als je Open Woo Website als SaaS wilt afnemen, kijk dan onder [kosten](/kosten).

Het Open Woo Website-template is gebaseerd op het Conduction [Productpage-template](https://github.com/ConductionNL/product-website-template) voor CommonGround. Hieronder tref je een verkorte installatiehandleiding aan die vooral focust op de onderliggende bronnen. Voor meer en uitgebreidere details kun je de documentatie van het Productpage-website-template gebruiken.

## Randvoorwaarden

Om dit template te gebruiken, moet je beschikken over:

- NL Design Token voor je organisatie ([lees hier hoe je die kunt verkrijgen](https://conductionnl.github.io/product-website-template/pages/Features/NL_Design))
- Een GitHub-organisatie en beheerdersrechten daarop OF (zie [Serverless Installatie](#serverless-installatie))
- Een APACHE/NGINX-server (zie [Server Installatie](#server-installatie))
- Een Open Webconcept CMS (WordPress) met de [Open Woo](https://github.com/OpenWebconcept/plugin-openwoo) en [Open Convenanten](https://github.com/OpenWebconcept/plugin-openconvenanten) plugins OF
- Een Common Gateway-installatie (on-premise of SaaS) met de [Woo Bundle](https://github.com/ConductionNL/WooBundle/tree/main)

## Frontend

### Serverless Installatie

De Open WOO Website is in eerste instantie opgezet om serverless gebruikt te worden via GitHub. Dat scheelt niet alleen in de kosten, maar levert ook voordeel op in de beschikbaarheid en belasting. Simpel gezegd, de GitHub CDN is gebouwd om flink wat meer aan te kunnen dan de gemiddelde gemeente.

> **Stappen**
>
> 1. Rechtsboven deze repo staat een knop ["gebruiken als template"](https://github.com/new?template_name=woo-website-template&template_owner=ConductionNL), druk daarop (of [klik hier](https://github.com/new?template_name=woo-website-template&template_owner=ConductionNL)) en maak een nieuwe repository aan op je GitHub-organisatie.
> 2. Ga in de repository naar de folder `.github/workflows/`
> 3. Verwijder de workflow `product-page-deploy` als deze er nog staat
> 4. Open de workflow `woo-page-deploy` en pas de branche aan van `never` naar `main`
> 5. Pas de verdere configuratie in `woo-page-deploy` aan zoals hieronder vermeld onder configuratie en sla deze op
> 6. Ga naar acties en wacht tot de actie "Deploy the WOO Page to GitHub Pages" succesvol is afgerond
> 7. Ga naar settings->pages, selecteer onder source `deploy from branch` en geef als branche op `gh-pages`
> 8. Bovenaan de pagina verschijnt nu de URL waarop je je Open WOO Website kunt terugvinden
> 9. Als je de Open WOO Website wilt hosten onder een subdomein van je organisatie en voorzien van een PKI-certificaat, kun je daarvoor de normale GitHub Pages-handleidingen volgen of een SLA afsluiten voor ondersteuning (zie [kosten]())

### Server Installatie

Als je de Open Woo Website liever vanaf een eigen server draait, kan dat uiteraard ook. In dat geval is er wel sprake van een ietwat ingewikkelder installatie waarvoor je beter de handleiding van het onderliggende framework kunt volgen.

> **Stappen**
>
> 1. Volg de stappen hiervoor op de [Productpage-template](https://github.com/ConductionNL/product-website-template)
> 2. Pas de configuratie aan zoals hieronder vermeld bij configuratie

### Configuratie

Configuratie vindt plaats via environment (env) waardes. In het geval van een serverless configuratie moeten de env-waardes worden aangepast in de [page deploy workflow](/.github/workflows/woo-page-deploy.yml). In het geval van een serverinstallatie in het `.env`-bestand in de Gatsby-rootmap. We ondersteunen de volgende configuratie-opties.

| Key                       | Verplicht             | Usage                                                                                                               | Allowed Value                                        | Default / Example                                                                              |
|---------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|------------------------------------------------------------------------------------------------|
| GITHUB_PAGES_BRANCH       | Alleen bij serverless | De branche waarop de pagina wordt gebouwd                                                                           | string, max 255 characters                           | gh-pages                                                                                       |
| GITHUB_REPOSITORY_NAME    | Alleen bij serverless |                                                                                                                     | string, max 255 characters                           | `${{ github.event.repository.name }}`                                                          |
| API_BASE_URL              | Ja                    | De locatie van de Open Woo API                                                                                      | string <URL>, string, max 255 characters             | "<https://api.gateway.commonground.nu/api>"                                                      |
| NL_DESIGN_THEME_CLASSNAME | Ja                    | De naam van het thema van de organisatie                                                                            | string, max 255 characters                           | "conduction-theme"                                                                             |
| FAVICON_URL               | Ja                    | De locatie van de favicon van de organisatie                                                                        | string <URL>, max 255 characters                     | "<https://conduction.nl/wp-content/uploads/2021/07/cropped-favicon-32x32.png>"                   |
| HEADER_LOGO_URL           | Ja                    | De locatie van het primaire logo van de organisatie                                                                 | string, moet een base encoded afbeelding zijn OF url | "<https://conduction.nl/wp-content/uploads/2021/07/cropped-conductionlogo-1.png>"                |
| ORGANISATION_NAME         | Ja                    | De naam van de organisatie                                                                                          | string, max 255 characters                           | "Conduction"                                                                                   |
| JUMBOTRON_IMAGE_URL       | Nee                   | De locatie van de gebruikte header, bij leeg wordt er geen header getoond                                           | string <URL>, max 255 characters                     | "<https://www.conduction.nl/wp-content/uploads/2021/07/cropped-Conduction_HOME_0000_afb1-1.png>" |
| FOOTER_LOGO_URL           | Ja                    | De locatie van het primaire logo van de organisatie                                                                 | string, moet een base encoded afbeelding zijn OF url | ...                                                                                            |
| FOOTER_LOGO_HREF          | Ja                    | De homepage van de organisatie                                                                                      | string <URL>, max 255 characters                     | "<https://conduction.nl/>"                                                                       |
| OIDN_NUMBER               | Nee                   | Het OIDN-nummer van de organisatie, bij leeg worden Woo-publicaties mogelijk niet beperkt tot de eigen organisatie  | integer, max 16 characters                           | 1234567890                                                                                     |

## Backend

Voor de backend zijn twee opties beschikbaar. In beide gevallen moet de resulterende URL worden opgenomen onder `API_BASE_URL` in de frontend-configuratie.

### Open Webconcept met Open Woo en Open Convenanten Plugin

Volg de installatiehandleiding op [https://github.com/OpenWebconcept/plugin-openwoo](https://github.com/OpenWebconcept/plugin-openwoo) en op [https://github.com/OpenWebconcept/plugin-openconvenanten](https://github.com/OpenWebconcept/plugin-openconvenanten).

### Common Gateway met Open Woo Plugin

Volg de installatiehandleiding op [Woo Bundle](https://github.com/ConductionNL/WooBundle/tree/main).

## Externe Systemen

Voor het koppelen van externe systemen geldt dat zij op de juiste manier moeten zijn geconfigureerd. Kijk daarvoor onder [configuratie](/Configuratie).
