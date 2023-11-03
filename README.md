# Over de Open WOO App

> **WOObinar op 15 November**
>
>
> Meer weten over deze oplossing? Dat kan!
>
>
> De leverancier [xxllnc](https://xxllnc.nl/) organiseerd op 15 november 13:00 een [WOObinar](https://www.linkedin.com/events/woobinar7125512622950494208/comments/), inschrijven kan [hier](https://www.linkedin.com/events/woobinar7125512622950494208/comments/). Tijdens deze bijeenkomst wordt zowel deze oplossing toegelicht als dat er de mogelijkheid is voor het stellen van (technische) vragen.

De Wet Open Overheid (WOO) is een initiatief gericht op het verbeteren van de openbaarheid van overheidsinformatie. Het doel is om overheidsinformatie beter toegankelijk te maken voor iedereen. Meer informatie over de Wet Open Overheid kan [hier](https://www.open-overheid.nl/themas/wet-open-overheid/) worden gevonden.

De implementatie van de Wet Open Overheid brengt twee kernuitdagingen met zich mee:

1. **Diversificatie van Publicatie Typen:**
   Met de tijd zullen er steeds meer typen van publicaties ontstaan, variërend van rapporten en besluiten tot datasets en onderzoeksresultaten. Deze diversiteit vereist een flexibel systeem dat in staat is om verschillende typen van publicaties adequaat te hanteren. Dat maakt het op voorhand onmogelijk om één bron (zoals zaaksysteem of raadsinformatiesyteem) richting de toekomst aan te wijzen.

2. **Proactieve Publicatie:**
   Overheden moeten informatie proactief te publiceren. Dit betekent dat publicatie onderdeel moet worden van het normale werkproces. Hiermee is het richting de toekomst niet haalbaar om Woo-publicaties handmatig via een apart systeem (bijvoorbeeld CMS website) te laten verlopen.

## Probleemstelling

Deze uitdagingen kunnen niet effectief worden aangepakt met een enkel Content Management Systeem (CMS) of door levering vanuit één systeem. Handmatige publicatie van alle overheidsinformatie zou een aanzienlijke personele inzet vereisen, wat onpraktisch is. Daarbij komt dat de verscheidenheid aan publicatietypen vaak verdeeld is over meerdere systemen, wat de situatie verder compliceert.

## Oplossing

De Open Woo-app biedt een geïntegreerde oplossing die bestaat uit een aantal hoofdcomponenten:

1. **Koppelvlak naar KOOP en WOOGLE voor de Landelijke Index:**
   Een interface die zorgt voor een gestandaardiseerde verbinding met de [Kennis- en Exploitatiecentrum en Officiële Publicaties](https://www.koopoverheid.nl/)(KOOP), waardoor een landelijke index van overheidsinformatie wordt gecreëerd.

2. **Organisatieweergave:**
   Een interface waarmee belanghebbenden binnen een organisatie naar relevante informatie kunnen zoeken.

3. **Koppelvlak:**
   Een module die in staat is om informatie uit verschillende systemen te verzamelen, waardoor een gecentraliseerde toegang tot diverse publicatietypen mogelijk wordt.

4. **CMS-module:**
   Een aanvullende module voor het handmatig invoeren van informatie die niet automatisch kan worden opgehaald, en voor het beheren van de gepubliceerde pagina's.

Deze geïntegreerde aanpak zorgt voor een naadloze, efficiënte en effectieve implementatie van de Wet Open Overheid, waardoor overheidsorganisaties hun informatie op een gebruiksvriendelijke en toegankelijke wijze kunnen delen.

## Functionaliteiten

- Één index pagina voor uw organisatie
- Weergave van data uit meerdere bronnen (zaaksysteem, website, raadsinformatie systeem en archief)
- Aanlevering bij KOOP aan de hand van `sitemap.xml`-bestanden
- Automatisch en pro-actief publiceren
- Op de toekomst voorbereid

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

Dit is een zelfstandig bruikbare uitbreiding op [Open Woo](https://github.com/OpenWebconcept/plugin-openwoo) van het [Open Webconcept](https://openwebconcept.nl/). Het maakt hergebruik van [NL Design (React componenten)](https://nldesignsystem.nl/meedoen/introductie) om aan de hand van [Design Tokens](https://nldesignsystem.nl/meedoen/design-tokens/) gemeentelijk specifieke [Woo-index](https://www.koopoverheid.nl/voor-overheden/rijksoverheid/woo-index) pagina's te genereren die voldoen aan alle [WCAG](https://wcag.nl/kennis/richtlijnen/) en [wettelijke eisen](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo).

### Open versus Woo

De Woo specificeert een aantal categorieën (zie configuratie) die door een organisatie moeten worden ontsloten. Dit template ondersteunt dat, maar gaat een stap verder door organisaties ook categorieën te laten toevoegen. Hierdoor kan bredere invulling worden gegeven aan het concept "open" en kunnen bijvoorbeeld ook datasets of algoritmes worden ontsloten.

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

## Architectuur

Wil je meer weten over de architectuur van de Open Woo-app en uit welke componenten het bestaat? Kijk dan op de [architectuur pagina](./docs/Architectuur.md).

## Toekomstplannen

Er komen steeds meer toepassingen voor het publiceren van overheidsinformatie. Denk bijvoorbeeld aan het publiceren van datasets, algoritmes en besluiten. Deze toepassingen zullen in de toekomst ook onderdeel worden van de Wet Open Overheid. Daarom is het belangrijk dat de Open WOO App flexibel is en kan worden aangepast aan de veranderende behoeften van de overheid. Kijk voor meer informatie over onze ontwikkelplannen op de [roadmap](./docs/Roadmap.md)
