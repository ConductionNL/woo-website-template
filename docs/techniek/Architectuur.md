# Architectuur

> **Hulp nodig?**
>
> Hiervoor hebben we een apart [Slack kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder.

## Versimpelde opzet

OpenWoo.app bestaat in essentie uit een drietal onderdelen die samen de totaaloplossing vormen.

![Basis Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Basis.svg)

### Publicatieplatform (onderdeel 1)

Woo-publicaties moeten worden uiteraard ergens worden gepubliceerd, dat gebeurd via een organisatie specifiek Woo-publicatieplatform. De OpenWoo.app ondersteund meerdere mogelijke publicatieplatformen waarbij de keuze bij u als organisatie ligt of u het publicatieplatform binnen uw website wilt integreren of niet.

| Component                     | Open Source | Leverancier(s)                                           | Beschrijving                                                      | Meer informatie |
|-------------------------------|-------------|----------------------------------------------------------|-------------------------------------------------------------------|-----------------|
| Losse React pagina            | Ja          | [Conduction](https://conduction.nl/)                     | Een losse NL Design zoekpagina in de huisstijl van uw organisatie |                 |
| Integratie in Open Webconcept | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) | Een NL Design weergavecomponent voor WordPress-websites           |                 |
| Sim Site                      | ?           | SIMgroep                                                | Een weergavecomponent voor SIM Site                               |                 |
| Drupal Site                   | ?           | "??"                                                     | Een weergavecomponent voor Drupal                                 |                 |
| TYPO3 thema site              | Ja          | [OpenGemeenten](https://www.opengemeenten.nl/)           | Een weergavecomponent voor TYPO3-websites                         |                 |

Naast het lokale publicatieplatform ondersteund OpenWoo.app ook altijd de volgende landelijke publicatieplatformen

- Een gestandaardiseerde verbinding met het Kennis- en Exploitatiecentrum Officiële Publicaties (KOOP)
- Een federale zoekvraag via [koophulpje.nl](https://koophulpje.nl/).
- WooGLe van de Wooverheid van de UvA.

> **notice**
> Voor Open Source componenten bent u natuurlijk niet beperkt tot deze leveranciers, dit zijn de op dit moment bij ons bekende leveranciers.
>
> Weet u niet welk frontend framework uw organisatie op dit moment gebruikt? Kijk dan eens op [digimonitor](https://www.digimonitor.nl/cms-en/gemeenten/).

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Publicatie.svg)

### Motorblok (onderdeel 2)

Het kloppende hart (of motorblok) onder het publicatieplatform is het [Common Ground](https://commonground.nl/) component [OpenIndex](https://openindex.online/) dat haar oorsprong vindt in het [OpenCatalogi](https://opencatalogi.nl/) project. Dit OpenIndex-component stel ons in staat om snel en organisatie-overstijgend te zoeken in meerdere Woo-categorieën tegelijkertijd. Hierbij wordt onder water gebruik gemaakt van een MongoDB-object store.

Het tweede component is de [OpenWoo service](https://openwoo.openservices.online/), gebaseerd op het Common Ground [OpenServices](https://openservices.online/) framework. Deze service faciliteert de data-uitwisseling tussen de onderliggende bronnen en de [Open Index](https://openindex.online/).

| Component       | Leverancier   | Meer informatie                                   |
|-----------------|---------------|---------------------------------------------------|
| Open Index      | Conduction    | [Open Index](https://openindex.online/)           |
| OpenWoo Service | Conduction    | [Lees meer](https://openwoo.openservices.online/) |

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Integratie.svg)

### Bronnen (onderdeel 3)

Een van de krachten van OpenWoo.app is het ondersteunen en automatisch publiceren vanuit een groot aantal bronnen

| Component        | Koppelvlak | Open Source | Leveranciers(s)                                  | Meer informatie |
|------------------|------------|-------------|-----------------------------------------------|-----------------|
| Zaaksysteem.nl   | Search     | Ja          | [Xxllnc](https://xxllnc.nl/)                  |                 |
| RX Fundament     | ZGW        | Nee         | [Roxit](https://www.roxit.nl/)                |                 |
| Decos JOIN       | ZGW        | Nee         | [Decos](https://www.decos.com/nl)             |                 |
| OpenZaak         | ZGW        | Ja          | [Maykin Media](https://www.maykinmedia.nl/nl/) |                 |
| SimSite          | Custom API | ?           | [SIM Groep](https://www.simgroep.nl/)                                      |                 |
| Open Verzoeken   | Custom API | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/)                                          |                 |
| Open Convenanten | Custom API | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) |                 |
| Open Klachten    | Custom API | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) |                 |
| Open PUB         | Custom API | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) |                 |
| Open PDC         | Custom API | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) |                 |

> **notice**
> Er zijn meer koppelvlakken en daarmee bronnen beschickbaar (bijvoorbeeld StUF en ZDS). Bovenstaande is slechts een overzicht van de bij ons bekende en beproefte bronnen. Andere koppelvlakken en maatwerk zijn uiteraard ook mogenlijk, neem daarvoor contact op met een leverancier.  

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Bronnen.svg)

## Totaalplaatje

De drie onderdelen samen geven ons een totaalbeeld van samenwerkende componenten die als ecosysteem een oplossing leveren.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Totaal.svg)

## Hoe werkt dat scrapen vanuit de integratievoorziening?

De integratievoorziening "scraped" elke nacht alle relevante informatie en bouwt hier een organisatie-specifieke index over op. De stappen zijn als volgt:

1. Ophalen van alle zaaktypen.
2. Per zaaktype worden de beschikbare eigenschappen gecontroleerd (zie inrichting zaaksysteem).
3. Voor elk zaaktype dat aan de voorwaarden voldoet, worden de zaken opgehaald.
4. Per zaak wordt gecontroleerd of er een publicatiedatum is; zo ja, wordt de zaak opgenomen in de index.
5. Zaken die niet zijn gevonden in bovenstaande loop, maar wel in de index staan, worden verwijderd.

Het bovenstaande proces zorgt ervoor dat het zaaksysteem leidend is en dat zaken zowel kunnen worden gepubliceerd als worden gedepubliceerd.

## Federatie (via OpenCatalogi)

OpenWoo.app maakt gebruik van het federatieve stelsel van [OpenCatalogi](https://opencatalogi.nl/) om verschillende integratievoorzieningen samen te binden. Hierbij verhoudt de organisatiespecifieke voorziening zich tot wat we binnen OpenCatalogi een catalogus noemen.

Dat betekent dat de integrale zoekvraag ook organisatie-overstijgend kan worden gesteld aan meerdere organisatie tegelijkertijd zonder dat er noodzaak is voor een landelijke index, dit concept is verder uitgewerkt in [koophulpje.nl](https://koophulpje.nl/) waarbij ook een voorziening is gerealiseerd voor het genereren van `robot.txt` en `sitemap.xml` bestanden. De facto is hiermee dus ook een landelijke Woo-API gerealiseerd met de beperking dat deze alleen organisaties bevat die participeren in OpenWoo.app

De reden dat we hebben gekozen voor OpenCatalogi is dat in deze `variant` van FSC géén PKI of overige certificaten nodig zijn. Dat lijnt beter uit met de gedachte dat dit open data betreft die conform de wet juist anoniem toegankelijk zou moeten zijn.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Federatie.svg)

## Woo Publicatie-object

Het Woo Publicatie-object vormt de kern van zowel de Woo-API als de Woo-website. Dit object bevat alle essentiële informatie over een Woo-publicatie, inclusief metadata, publicatiedatum, bijlagen en andere relevante eigenschappen. Het dient als de centrale entiteit waaromheen de functionaliteiten van de API en de website zijn gebouwd. Door deze gecentraliseerde aanpak is het eenvoudiger om Woo-publicaties efficiënt te beheren, op te halen en weer te geven, en draagt het bij aan een coherente en gestroomlijnde gebruikerservaring.

## Roadmap

Organisaties kunnen bijdragen aan de ontwikkeling van deze componenten door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren. Voor het huidige overzicht, zie [Roadmap](/docs/product/Roadmap.md).
