# Open WOO Website Template

Dit is een zelfstandig bruikbare uitbreiding op [Open WOO](https://github.com/OpenWebconcept/plugin-openwoo) van het [Open Webconcept](https://openwebconcept.nl/). Het maakt hergebruik van [NL Design (React componenten)](https://nldesignsystem.nl/meedoen/introductie) om aan de hand van [Design Tokens](https://nldesignsystem.nl/meedoen/design-tokens/) een gemeentelijk specifieke [WOO-index](https://www.koopoverheid.nl/voor-overheden/rijksoverheid/woo-index) pagina's te genereren die voldoet aan alle [WCAG](https://wcag.nl/kennis/richtlijnen/) en [wettelijke eisen](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo).

## Opzet

Deze pagina kan rechtstreeks vanaf GitHub (serverless) of los op een eigen omgeving gehost worden. Voor de getoonde data wordt vervolgens gebruik gemaakt van de Open WOO API definitie.  Dat betekend dat één van de volgende bronnen kan worden gebruikt

- Een ([Open Webconcept](https://openwebconcept.nl/)) Wordpress installatie met de [Open WOO Plugin](https://github.com/OpenWebconcept/plugin-openwoo)
- Een ([Common Gateway](https://commongateway.app/)) Syfmony installatie met de [Open WOO bundle](https://github.com/CommonGateway/WooBundle)
- Een ([Open Online](https://www.dimpact.nl/nieuws/gemeente-vught-live-met-open-online)) Drupal installatie met de Open WOO plugin ([roadmap](/docs/Roadmap.md)).
- Een los JSON bestand dat de data bevat vanuit de repository ([roadmap](/docs/Roadmap.md)).
- Een rechtstreeks vanuit het zaak en/of raadsinformatie systeem ontsloten API 

Voor de pagina maakt het niet uit wie de bron is, zolang deze zich maar aan de standaard houdt. 
Meer details hierover vind u onder [architectuur](/docs/Architectuur.md).


![https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/components.svg](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/components.svg "Website Architecture")

### WOO 1.0

Voor de eerste opzet van de WOO Index van BZK is het belangrijk dat organisaties zelf hun WOO-publicaties op een doorzoekbare index publiceren. BZK houdt vervolgens een overzichtspagina bij waarop per organisatie de algemene organisatiegegevens en de organisaties specifieke indexpagina vindbaar zijn.

### WOO 2.0

BZK heeft de ambitie om aan de hand van een harvester een eigen index op te bouwen op open.overheid.nl. Deze harvesters maakt gebruik van `robot.txt` en `sitemap.xml`-bestanden om de verschillende pagina's en metadata van de organisatie specifieke index te vinden en over te nemen. Dat betekent dat ook binnen de 2.0 variant van WOO een eigen indexpagina noodzakelijk blijft. Sterker nog, de kwaliteit van de ontsluiting wordt in grote mate afhankelijk van de kwaliteit van de index.

### Open versus WOO

De WOO specificeert een aantal categorieën (zie configuratie) die door een organisatie moeten worden ontsloten, dit template ondersteund dat, maar gaat een stap verder door organisaties ook categorieën te laten toevoegen. Hierdoor kan bredere invulling worden gegeven aan het concept "open" en kunnen bijvoorbeeld ook datasets of algoritmes worden ontsloten.



## Functionaliteiten

- Serverless: Common WOO maakt gebruik van de RAD-architectuur principes voor het leveren van een Serverless voorkant.
Eigen huisstijl: Via NL Design tokens de gemeente haar eigen huisstijl gebruiken. Als er nog een NL Design tokens voor uw organisatie zijn helpen wij u uiteraard verder.
Geen handwerk: Door directe bron integratie is het niet nodig WOO-verzoeken etc actief te publiceren
- Als de gemeente gebruikmaakt van Open WOO kan er direct op de Open WOO-API worden gekoppeld
- Als de gemeente een zaaksysteem heeft wat ZGW gebruikt kan er via een gateway op het zaaksysteem worden gekoppeld (bijvoorbeeld xllnc, Roxit)
- WOO-verzoeken ook los worden toegevoegd als JSON-bestand.
- Kosteloos: Als de gemeente beschikt over een Bron, NL Design tokens en de interface servers draait zijn er geen kosten aan het gebruik verbonden.

## Voorbeelden

| Organisatie | WOO Pagina | WOO Bron(en)            |
|-------------|------------|-------------------------|
| [Noordwijk](https://conductionnl.github.io/woo-website-noordwijk/) | [Pagina](https://conductionnl.github.io/woo-website-noordwijk/) | Zaaksysteem (acceptatie) |
| [Tubbergen](https://conductionnl.github.io/woo-website-tubbergen/)| [Pagina](https://conductionnl.github.io/woo-website-tubbergen/)| Zaaksysteem (acceptatie) |
|[Epe](https://conductionnl.github.io/woo-website-epe/)| [Pagina](https://conductionnl.github.io/woo-website-epe/)| Zaaksysteem (acceptatie) |
|[Dinkelland](https://conductionnl.github.io/woo-website-dinkelland/)| [Pagina](https://conductionnl.github.io/woo-website-dinkelland/)| Zaaksysteem (acceptatie) |
|[Rotterdam (Alleen vormgeving)](https://conductionnl.github.io/woo-website-rotterdam/)| [Pagina](https://conductionnl.github.io/woo-website-rotterdam/)| Demo                    |
|[Noaberkracht](https://conductionnl.github.io/woo-website-noaberkracht/)| [Pagina](https://conductionnl.github.io/woo-website-noaberkracht/)| Zaaksysteem (acceptatie) |
 |[Leiden (Alleen vormgeving)](https://conductionnl.github.io/woo-website-leiden/)| [Pagina](https://conductionnl.github.io/woo-website-leiden/)| Demo                    |
 |[Xxllnc (Demo omgeving)](https://conductionnl.github.io/woo-website-xxllnc/)| [Pagina](https://conductionnl.github.io/woo-website-xxllnc/)| Demo                    |

## Documentatie

- [Installatiehandleiding](docs/Installatie.md)
- [Architectuur](docs/Architectuur.md)
- [Roadmap](docs/Roadmap.md)
- [Configuratie](docs/Configuratie.md)
- [Testscenario's](docs/Tests.md)
.
