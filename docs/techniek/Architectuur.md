# Architectuur

> **Hulp nodig?**
>
> Hiervoor hebben we een apart [Slack kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder.

## Versimpelde opzet
OpenWoo.app bestaat in essentie uit een 3 tal onderdelen die samen oplossing vormen. 

![Basis Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/basis.svg)

### Publicatie platform 
Woo publicaties moeten worden uiteraard ergens worden gepubliceerd, dat gebeurd via een organisatie speciefiek Woo publicatie platform. De OpenWoo.app ondersteund meerde mogenlijke publicatie platformen waarbij de keuze bij u als organisatie ligt of u het publicatie platform binnen uw website wilt integreren of niet

| Component                     | Open Source | Leverancier(s)                                           | Beschrijving                                                      | Meer informatie | 
|-------------------------------|-------------|----------------------------------------------------------|-------------------------------------------------------------------|-----------------|
| Losse React pagina            | Ja          | [Conduction](https://conduction.nl/)                     | Een losse NL Design zoekpagina in de huisstijl van uw organisatie |                 |
| Integratie in Open Webconcept | Ja          | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) | Een NL Design weergavecomponent voor WordPress-websites           |                 |
| Sim Site                      | ?           | SIM Groep                                                | Een weergavecomponent voor Sim Site                               |                 |
| Drupal Site                   | ?           | "??"                                                     | Een weergavecomponent voor Drupal                                 |                 | 
| TYPO3 thema site              | Ja          | [OpenGemeenten](https://www.opengemeenten.nl/)           | Een weergavecomponent voor TYPO3-websites                         |                 |

Naast het locale publicatie platform ondersteund OpenWoo.app ook altijd de volgende landelijke publicatie platformen

- Een gestandaardiseerde verbinding met het Kennis- en Exploitatiecentrum Officiële Publicaties (KOOP)
- Een federale zoekvraag via [koophulpje.nl](https://koophulpje.nl/).
- Woogle van de WOOverheid van de UvA.

> **notice**
> Voor Open Source componenten bent u natuurlijk niet beperkt tot deze leveranciers, dit zijn de op dit moment bij ons bekende leveranciers.
>
> Weet u niet welk frontend framework uw organisatie op dit moment gebruikt? Kijk dan eens op [digimonitor](https://www.digimonitor.nl/cms-en/gemeenten/).

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Publicatie.svg)

### Motorblok
Het kloppende hard (of motorblok) onder het publicatie platform is het [commonground](https://commonground.nl/) component [Open Index](https://openindex.online/) dat haar oorsprong vind in het [Open Catalogi](https://opencatalogi.nl/) project. Dit component stel ons in staat om snel en organisatie overstijgend te zoeken in meerdere Woo categorien tegelijkertijd. Hierbij word onder water gebruik gemaakt van een mongodb object store.

Het tweede component is de [OpenWoo service](https://openwoo.openservices.online/), gebaseerd op het commonground [open services](https://openservices.online/) framework. Deze service faciliteerd de data uitwissseling tussen de onderlinggende bronnen en de [Open Index](https://openindex.online/). 

| Component       | Leverancier   | Meer informatie                                   |
|-----------------|---------------|---------------------------------------------------|
| Open Index      | Conduction    | [Open Index](https://openindex.online/)           |
| OpenWoo Service | Conduction    | [Lees meer](https://openwoo.openservices.online/) |

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Integratie.svg)

### Bronnen
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
> Via een StUF ↔ ZGW-koppelvlak is het in theorie ook mogelijk een zaaksysteem te koppelen aan de hand van StUF, dit is in de praktijk echter nog niet beproeft. Andere koppelvlakken en maatwerk zijn uiteraard bespreekbaar, neem daarvoor contact op met een leverancier.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Bronnen.svg)

## Totaal plaatje
Al deze zaken te samen geven ons een totaalbeeld van samenwerken componenten die als ecosysteem een oplossing leveren.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Totaal.svg)

## Hoe werkt dat scrapen vanuit de integratievoorziening?

De integratievoorziening "scraped" elke nacht alle relevante informatie en bouwt hier een organisatie-specifieke index over op. De stappen zijn als volgt:

1. Ophalen van alle zaaktypen.
2. Per zaaktype worden de beschikbare eigenschappen gecontroleerd (zie inrichting zaaksysteem).
3. Voor elk zaaktype dat aan de voorwaarden voldoet, worden de zaken opgehaald.
4. Per zaak wordt gecontroleerd of er een publicatiedatum is; zo ja, wordt de zaak opgenomen in de index.
5. Zaken die niet zijn gevonden in bovenstaande loop, maar wel in de index staan, worden verwijderd.

Dit proces zorgt ervoor dat het zaaksysteem leidend is en dat zaken zowel kunnen worden gepubliceerd als worden gedepubliceerd.

## Federatie (via OpenCatalogi)

OpenWoo.app maakt gebruik van het federatieve stelsel van [OpenCatalogi](https://opencatalogi.nl/) om verschillende integratievoorzieningen samen te binden. Hierbij verhoudt de organisatiespecifieke voorziening zich tot wat we binnen OpenCatalogi een catalogus noemen.

Dat betekent dat de integrale zoekvraag ook organisatie-overstijgend kan worden gesteld aan meerdere organisatie tegelijkertijd zonder dat er noodzaak is voor een landelijke index, dit concept is verder uitgewerkt in [koophulpje.nl](https://koophulpje.nl/) waarbij ook een voorziening is gerealiseerd voor het genereren van `robot.txt` en `sitemap.xml` bestanden. De facto is hiermee dus ook een landelijke Woo-API gerealiseerd met de beperking dat deze alleen organisaties bevat die participeren in OpenWoo.app

De reden dat we hebben gekozen voor OpenCatalogi is dat in deze `variant` van FSC géén PKI of overige certificaten nodig zijn. Dat lijnt beter uit met de gedachte dat dit open data betreft die conform de wet juist anoniem toegankelijk zou moeten zijn.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Federatie.svg)

## Woo Publicatie Object

Het Woo Publicatie Object vormt de kern van zowel de Woo API als de Woo-website. Dit object bevat alle essentiële informatie over een Woo-publicatie, inclusief metadata, publicatiedatum, bijlagen en andere relevante eigenschappen. Het dient als de centrale entiteit waaromheen de functionaliteiten van de API en de website zijn gebouwd. Door deze gecentraliseerde aanpak is het eenvoudiger om Woo-publicaties efficiënt te beheren, op te halen en weer te geven, en draagt het bij aan een coherente en gestroomlijnde gebruikerservaring.

## Roadmap

Organisaties kunnen bijdragen aan de ontwikkeling van deze componenten door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren. Voor het huidige overzicht, zie [Roadmap](/docs/product/Roadmap.md).
