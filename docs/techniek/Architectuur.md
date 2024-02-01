# Architectuur

## Opzet

OpenWoo.app bestaat in essentie uit een aantal componenten die samenwerken rondom een integratievoorziening, het lijnt daarmee uit met de architectuurlagen van Common Ground. Daarbij is de keuze aan de ontsluitende overheid welke componenten van welke leveranciers zij inzet. Het is daarmee bewust de bedoeling dat de inrichting per overheid kan verschillen, zodat deze beter in het landschap van die betreffende overheid past. Binnen de OpenWoo.app kennen we momenteel de volgende componenten:

> **Hulp nodig?**
>
> Hiervoor hebben we een apart [Slack kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder.

### Open Webconcept-variant zonder integratie

Met deze variant kunnen Woo-verzoeken en convenanten eenvoudig worden beheerd vanuit de bestaande webomgeving en CMS. Dit vereist geen extra installatie of beheerinspanningen van de organisatie, op voorwaarde dat er al een OpenWebconcept-installatie met de benodigde plugins beschikbaar is.

**Nadelen:**

- Woo-verzoeken en convenanten moeten handmatig worden geüpload in de CMS-omgeving.
- De integrale zoekvraag wordt alleen ondersteund op de in WordPress aanwezige gegevens.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/OpenWebconceptZonder.svg)

### Open Webconcept met integratie

Het is ook mogelijk om een bestaande Open Webconcept-omgeving te combineren met de integratievoorziening. In dat geval gebruikt de integratievoorziening Open Webconcept, zowel als bron als dat het naar Open Webconcept toe publiceert. Dit betekent dat de organisatie de voordelen van de integratievoorziening kan benutten, terwijl de bestaande Open Webconcept-omgeving kan worden gebruikt om Woo-verzoeken en convenanten te beheren.

**Nadelen**

- Er moet een integratievoorziening worden geïnstalleerd of afgenomen

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/OpenWebConceptMet.svg)

### (Losse) Frontend met integratie

Er zijn diverse frontends die in theorie direct kunnen koppelen op de OpenWoo.app API.

**Voordelen**

- De frontend hoeft maar één API te koppelen voor toegang tot meerdere bronnen.
- De gebruiker kan een integrale zoekvraag over meerdere bronnen heen stellen (bijvoorbeeld aan zowel een zaaksysteem als een raadsinformatiesysteem).
- Als de frontend zelf een CMS is, kan deze ook als bron dienen (voor bijvoorbeeld nieuwsberichten en categorieomschrijvingen)
- Componenten zijn te combineren (bijvoorbeeld de losstaande NL Design React voorkant op de Open Webconcept-verzoeken en -convenanten plugins).

**Nadelen**

- Er moet een integratievoorziening worden geïnstalleerd of afgenomen

**Beschikbare componenten voor frontend**
| Component | Framework | Open Source | Leveranciers | Beschrijving |
|-------------|------|------|------------|--------------|
| OpenWOO Site  | NL Design (React) | Ja | [Conduction](https://conduction.nl/) | Een losse NL Design zoekpagina in de huisstijl van uw organisatie |
| OpenWoo Plugin | WordPress | Ja | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) | Een NL Design weergavecomponent voor WordPress-websites |
| OpenGemeenten | TYPO3 | Ja | [OpenGemeenten](https://www.opengemeenten.nl/) | Een weergavecomponent voor TYPO3-websites |
| SIM Drupal | Drupal | ? | [SIM Groep](https://www.simgroep.nl/) | Een weergavecomponent voor Drupal |

> **notice**
> Voor Open Source componenten bent u natuurlijk niet beperkt tot deze leveranciers, dit zijn de op dit moment bij ons bekende leveranciers.
>
> Weet u niet welk frontend framework uw organisatie op dit moment gebruikt? Kijk dan eens op [digimonitor](https://www.digimonitor.nl/cms-en/gemeenten/).
>
> ![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/LosseFrontend.svg)

### Bronnen met integratie

Als er wordt gekozen voor het implementeren van de integratievoorziening, wordt het mogelijk om geautomatiseerd te publiceren vanuit meerdere bronnen.

Dit bespaart handmatig werk en vermindert de kans op fouten. Tevens ondersteunt het gebruik van het integratiemechanisme de integrale zoekvraag en is het mogelijk om ook gegevens uit andere bronnen te integreren, zoals een raadsinformatiesysteem of een Open Webconcept CMS.

**Nadelen**

- Er moet een integratievoorziening worden geïnstalleerd of afgenomen

**Beschikbare componenten voor bronnen**
| Component | Framework | Open Source | Leveranciers | Beschrijving |
|-------------|------|------|------------|--------------|
|Zaaksysteem.nl | ZGW | Ja | [Xxllnc](https://xxllnc.nl/) |--------------|
|RX Fundament | ZGW | Nee | [Roxit](https://www.roxit.nl/) |--------------|
|Decos JOIN | ZGW | Nee | [Decos](https://www.decos.com/nl) |--------------|
|OpenZaak | ZGW | Ja | [Maykin Media](https://www.maykinmedia.nl/nl/) |--------------|

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Bronnen.svg)

### Hoe werkt dat scrapen vanuit de integratievoorziening?

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
