# Over de WOO en Open Woo App

> **Ondersteuning en bijeenkomsten**
>
> Meer weten over deze oplossing? Dat kan! Hiervoor hebben we een apart [Slack kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder.
>
> Tevens worden vanuit de aangesloten leveranciers worden regelmatig webinars georganiseerd.
>
> Terug kijken afgelopen webinars?
>
> - [xxllnc Woobinar 17-11-2023](https://www.youtube.com/watch?v=NCnLDEoPh5A)

De Wet Open Overheid (WOO) is een initiatief gericht op het verbeteren van de openbaarheid van overheidsinformatie. Het doel is om overheidsinformatie beter toegankelijk te maken voor iedereen. Meer informatie over de Wet Open Overheid kan [hier](https://www.open-overheid.nl/themas/wet-open-overheid/) worden gevonden.

De implementatie van de Wet Open Overheid brengt twee kernuitdagingen met zich mee:

1. **Diversificatie van categorieën:**
   Met de tijd zullen er steeds meer categorieën, variërend van rapporten en besluiten tot datasets en onderzoeksresultaten. Deze diversiteit vereist een flexibel systeem dat in staat is om verschillende typen categorieën adequaat te hanteren. Dat maakt het op voorhand onmogelijk om één bron (zoals zaaksysteem of raadsinformatiesysteem) richting de toekomst aan te wijzen.

2. **Proactieve Publicatie:**
   Overheden moeten informatie proactief te publiceren. Dit betekent dat publicatie onderdeel moet worden van het normale werkproces. Hiermee is het richting de toekomst niet haalbaar om Woo-publicaties handmatig via een apart systeem (bijvoorbeeld CMS-website) te laten verlopen.

Deze uitdagingen kunnen niet effectief worden aangepakt met een enkel Content Management Systeem (CMS) of door levering vanuit één systeem. Handmatige publicatie van alle overheidsinformatie zou een aanzienlijke personele inzet vereisen, wat onpraktisch is. Daarbij komt het voor dat verscheidende categorieën vaak verdeeld zijn over meerdere systemen, wat de situatie verder compliceert.

## Oplossing

De Open Woo-app biedt een geïntegreerde oplossing die bestaat uit een aantal hoofdcomponenten:

1. **Koppelvlak naar KOOP en Woogle voor de Landelijke Index:**
   Een interface die zorgt voor een gestandaardiseerde verbinding met de [Kennis- en Exploitatiecentrum en Officiële Publicaties](https://www.koopoverheid.nl/)(KOOP), waardoor een landelijke index van overheidsinformatie wordt gecreëerd. Daarnaast is er een integratie met [Woogle](https://Woogle.wooverheid.nl/search?q=*) van [WOOverheid](https://wooverheid.nl/) van de UvA.

2. **Organisatieweergave:**
   Een interface waarmee belanghebbenden binnen een organisatie naar relevante informatie kunnen zoeken.

3. **Koppelvlak:**
   Een module die in staat is om informatie uit verschillende systemen te verzamelen, waardoor een gecentraliseerde toegang tot diverse categorieën mogelijk wordt.

4. **CMS-module:**
   Een aanvullende module voor het handmatig invoeren van informatie die niet automatisch kan worden opgehaald, en voor het beheren van de gepubliceerde pagina's.

Deze geïntegreerde aanpak zorgt voor een naadloze, efficiënte en effectieve implementatie van de Wet Open Overheid, waardoor overheidsorganisaties hun informatie op een gebruiksvriendelijke en toegankelijke wijze kunnen delen.

## Functionaliteiten

De OpenWoo.app ondersteunt de volgende functionaliteiten.

- Één index pagina voor uw organisatie
- Weergave van data uit meerdere bronnen (zaaksysteem, website, raadsinformatie systeem en archief)
- Aanlevering bij KOOP aan de hand van `sitemap.xml`-bestanden
- Aanlevering bij Woogle aan de hand van API
- Automatisch en pro-actief publiceren
- Op de toekomst voorbereid

![epe.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/epe.png "Woo Website van de Gemeente Epe")

## Techniek

Deze pagina kan rechtstreeks vanaf GitHub (serverless) of los op een eigen omgeving gehost worden. Voor de getoonde data wordt gebruikgemaakt van de Open Woo API-definitie. Dat betekent dat een van de volgende bronnen kan worden gebruikt:

- Een ([Open Webconcept](https://openwebconcept.nl/)) WordPress installatie met de [Open Woo Plugin](https://github.com/OpenWebconcept/plugin-openwoo)
- Een ([Common Gateway](https://commongateway.app/)) Symfony installatie met de [Open Woo bundle](https://github.com/CommonGateway/WooBundle)
- Een ([Open Online](https://www.dimpact.nl/nieuws/gemeente-vught-live-met-open-online)) Drupal installatie met de Open Woo plugin ([roadmap](/docs/product/Roadmap.md))
- Een los JSON-bestand dat de data bevat vanuit de repository ([roadmap](/docs/product/Roadmap.md))
- Een rechtstreeks vanuit het zaak- en/of raadsinformatiesysteem ontsloten API

Voor de pagina maakt het niet uit wie de bron is, zolang deze bron zich aan de standaard houdt.
Meer details hierover vindt u onder [architectuur](/docs/techniek/Architectuur.md).

![Website Architectuur](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/components.svg "Website Architectuur")

Dit is een zelfstandig bruikbare uitbreiding op [Open Woo](https://github.com/OpenWebconcept/plugin-openwoo) van het [Open Webconcept](https://openwebconcept.nl/). Het maakt hergebruik van [NL Design (React componenten)](https://nldesignsystem.nl/meedoen/introductie) om aan de hand van [Design Tokens](https://nldesignsystem.nl/meedoen/design-tokens/) gemeentelijk specifieke [Woo-index](https://www.koopoverheid.nl/voor-overheden/rijksoverheid/woo-index) pagina's te genereren die voldoen aan alle [WCAG](https://wcag.nl/kennis/richtlijnen/) en [wettelijke eisen](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo).

### Meer open dan Woo

De Woo specificeert een aantal categorieën (zie configuratie) die door een organisatie moeten worden ontsloten. Dit template ondersteunt dat, maar gaat een stap verder door organisaties ook categorieën te laten toevoegen. Hierdoor kan bredere invulling worden gegeven aan het concept "open" en kunnen bijvoorbeeld ook datasets of algoritmes worden ontsloten.

## Praktijkvoorbeelden

Op dit moment wordt de OpenWoo.app al door een aantal organisaties gebruikt

| Organisatie | Type | Woo Pagina | Woo Bron | Status |
|-------------|------|------------|--------------|--------|
| [Noordwijk](https://www.noordwijk.nl/) | Gemeente |  [Pagina](https://conductionnl.github.io/woo-website-noordwijk/) | Zaaksysteem.nl  | Acceptatie |
| [Tubbergen](https://www.tubbergen.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-tubbergen/) | Zaaksysteem.nl  | Acceptatie |
| [Epe](https://www.epe.nl/) | Gemeente |[Pagina](https://open.epe.nl/) | Zaaksysteem | Productie  |
| [Dinkelland](https://www.dinkelland.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-dinkelland/) | Zaaksysteem.nl | Acceptatie |
| [Rotterdam (Alleen vormgeving)](https://www.rotterdam.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-rotterdam/) | Demo Omgeving                   | Demo       |
| [Noaberkracht](https://www.dinkelland.nl/noaberkracht-dinkelland-tubbergen) | Samenwerkingsverband | [Pagina](https://conductionnl.github.io/woo-website-noaberkracht/) | Zaaksysteem.nl | Acceptatie |
| [Leiden (Alleen vormgeving)](https://gemeente.leiden.nl/) | Gemeente | [Pagina](https://conductionnl.github.io/woo-website-leiden/) | Demo Omgeving           | Demo       |
| [Xxllnc (Demo omgeving)](https://xxllnc.nl/) | Leverancier | [Pagina](https://conductionnl.github.io/woo-website-xxllnc/) | Demo Omgeving           | Demo       |

## Architectuur

Wil je meer weten over de architectuur van de Open Woo-app en uit welke componenten het bestaat? Kijk dan op de [architectuur pagina](/docs/techniek/Architectuur.md).

## Toekomstplannen

Er komen steeds meer toepassingen voor het publiceren van overheidsinformatie. Denk bijvoorbeeld aan het publiceren van datasets, algoritmes en besluiten. Deze toepassingen zullen in de toekomst ook onderdeel worden van de Wet Open Overheid. Daarom is het belangrijk dat de Open WOO App flexibel is en kan worden aangepast aan de veranderende behoeften van de overheid. Kijk voor meer informatie over onze ontwikkelplannen op de [roadmap](/docs/product/Roadmap.md)
