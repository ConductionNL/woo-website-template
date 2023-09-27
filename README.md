# Over de Open Woo Website

Dit is een zelfstandig bruikbare uitbreiding op [Open Woo](https://github.com/OpenWebconcept/plugin-openwoo) van het [Open Webconcept](https://openwebconcept.nl/). Het maakt hergebruik van [NL Design (React componenten)](https://nldesignsystem.nl/meedoen/introductie) om aan de hand van [Design Tokens](https://nldesignsystem.nl/meedoen/design-tokens/) gemeentelijk specifieke [Woo-index](https://www.koopoverheid.nl/voor-overheden/rijksoverheid/woo-index) pagina's te genereren die voldoen aan alle [WCAG](https://wcag.nl/kennis/richtlijnen/) en [wettelijke eisen](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo).

![epe.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/epe.png "Woo Website van de Gemeente Epe")

## Opzet

Deze pagina kan rechtstreeks vanaf GitHub (serverless) of los op een eigen omgeving gehost worden. Voor de getoonde data wordt gebruikgemaakt van de Open Woo API-definitie. Dat betekent dat een van de volgende bronnen kan worden gebruikt:

- Een ([Open Webconcept](https://openwebconcept.nl/)) WordPress installatie met de [Open Woo Plugin](https://github.com/OpenWebconcept/plugin-openwoo)
- Een ([Common Gateway](https://commongateway.app/)) Symfony installatie met de [Open Woo bundle](https://github.com/CommonGateway/WooBundle)
- Een ([Open Online](https://www.dimpact.nl/nieuws/gemeente-vught-live-met-open-online)) Drupal installatie met de Open Woo plugin ([roadmap](/docs/Roadmap.md))
- Een los JSON-bestand dat de data bevat vanuit de repository ([roadmap](/docs/Roadmap.md))
- Een rechtstreeks vanuit het zaak- en/of raadsinformatiesysteem ontsloten API

Voor de pagina maakt het niet uit wie de bron is, zolang deze zich maar aan de standaard houdt.
Meer details hierover vindt u onder [architectuur](/docs/Architectuur.md).

![Website Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/components.svg "Website Architecture")

### Woo 1.0

Voor de eerste opzet van de Woo-index van BZK is het belangrijk dat organisaties zelf hun Woo-publicaties op een doorzoekbare index publiceren. BZK houdt vervolgens een overzichtspagina bij waarop per organisatie de algemene organisatiegegevens en de organisatiespecifieke indexpagina vindbaar zijn.

### Woo 2.0

BZK heeft de ambitie om aan de hand van een harvester een eigen index op te bouwen op open.overheid.nl. Deze harvester maakt gebruik van `robots.txt` en `sitemap.xml`-bestanden om de verschillende pagina's en metadata van de organisatiespecifieke index te vinden en over te nemen. Dat betekent dat ook binnen de 2.0 variant van Woo een eigen indexpagina noodzakelijk blijft. Sterker nog, de kwaliteit van de ontsluiting wordt in grote mate afhankelijk van de kwaliteit van de index.

### Open versus Woo

De Woo specificeert een aantal categorieën (zie configuratie) die door een organisatie moeten worden ontsloten. Dit template ondersteunt dat, maar gaat een stap verder door organisaties ook categorieën te laten toevoegen. Hierdoor kan bredere invulling worden gegeven aan het concept "open" en kunnen bijvoorbeeld ook datasets of algoritmes worden ontsloten.

## Functionaliteiten

- Serverless: Common Woo maakt gebruik van de RAD-architectuurprincipes voor het leveren van een serverless voorkant.
- Eigen huisstijl: Via NL Design tokens kan de gemeente haar eigen huisstijl gebruiken. Als er nog geen NL Design tokens voor uw organisatie zijn, helpen wij u uiteraard verder.
- Geen handwerk: Door directe bronintegratie is het niet nodig Woo-verzoeken actief te publiceren.
- Als de gemeente gebruikmaakt van Open Woo, kan er direct op de Open Woo-API worden gekoppeld.
- Als de gemeente een zaaksysteem heeft dat ZGW gebruikt, kan er via een gateway op het zaaksysteem worden gekoppeld (bijvoorbeeld xllnc, Roxit).
- Woo-verzoeken kunnen ook los worden toegevoegd als JSON-bestand.
- Kosteloos: Als de gemeente beschikt over een bron, NL Design tokens en de interfaceservers draait, zijn er geen kosten aan het gebruik verbonden.

## Voorbeelden

| Organisatie | Woo Pagina | Woo Bron(en) |
|-------------|------------|--------------|
| [Noordwijk](https://conductionnl.github.io/woo-website-noordwijk/) | [Pagina](https://conductionnl.github.io/woo-website-noordwijk/) | Zaaksysteem (acceptatie) |
| [Tubbergen](https://conductionnl.github.io/woo-website-tubbergen/) | [Pagina](https://conductionnl.github.io/woo-website-tubbergen/) | Zaaksysteem (acceptatie) |
| [Epe](https://conductionnl.github.io/woo-website-epe/) | [Pagina](https://conductionnl.github.io/woo-website-epe/) | Zaaksysteem (acceptatie) |
| [Dinkelland](https://conductionnl.github.io/woo-website-dinkelland/) | [Pagina](https://conductionnl.github.io/woo-website-dinkelland/) | Zaaksysteem (acceptatie) |
| [Rotterdam (Alleen vormgeving)](https://conductionnl.github.io/woo-website-rotterdam/) | [Pagina](https://conductionnl.github.io/woo-website-rotterdam/) | Demo |
| [Noaberkracht](https://conductionnl.github.io/woo-website-noaberkracht/) | [Pagina](https://conductionnl.github.io/woo-website-noaberkracht/) | Zaaksysteem (acceptatie) |
| [Leiden (Alleen vormgeving)](https://conductionnl.github.io/woo-website-leiden/) | [Pagina](https://conductionnl.github.io/woo-website-leiden/) | Demo |
| [Xxllnc (Demo omgeving)](https://conductionnl.github.io/woo-website-xxllnc/) | [Pagina](https://conductionnl.github.io/woo-website-xxllnc/) | Demo |

## Documentatie

- [Installatiehandleiding](docs/Installatie.md)
- [Architectuur](docs/Architectuur.md)
- [Roadmap](docs/Roadmap.md)
- [Configuratie](docs/Configuratie.md)
- [Testscenario's](docs/Tests.md)
