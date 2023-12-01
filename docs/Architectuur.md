# Architectuur

## Opzet
OpenWoo.app bestaad in essentie uit een aantal componnenten de samenwerken rondom een integratie voorziening, het lijnt daarmee uit met de lagen architectuur van common ground. Daarbij is de keuze aan de onsluitende overheid welke componenten van welke leveranciers zij inzet. Het is daarmee bewust de bedoeling dat de inrichting per overheid kan verschillen zodat deze beter in het landschap van die betrefende overheid past. Binnen OpenWoo.app kennen we momententeel de volgende componenten

### Open Webconcept variant zonder integratie
Met deze variant kunnen Woo-verzoeken en convenanten eenvoudig worden beheerd vanuit de bestaande webomgeving en CMS . Dit vereist geen extra installatie of beheerinspanningen van de organisatie, op voorwaarde dat er al een OpenWebconcept-installatie met de benodigde plugins beschikbaar is. 

**Nadelen:**
- Woo-verzoeken en convenanten moeten handmatig worden geüpload in de CMS-omgeving.
- De integrale zoekvraag wordt alleen ondersteund op de in wordpress aanwezigen gegevens

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/OpenWebconceptZonder.svg)

### Open Webconcept met integratie
Het is ook mogenlijk om een bestaande Open Webconcept omgeving te combineren met de integratie voorziening. In dat geval gebruikt de integratie voorzien Open Webconcept zowel als bron als dat het naar Open Webconcept toe publiseerd

**Nadelen**
- Er moet een integratie voorziening worden geinstaleerd of afgenomen

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/OpenWebconceptMet.svg)

### (Losse) Frontend met integratie
Er zijn diverse fronten's die in theorie direct kunnen koppelen op de OpenWoo.app API.

**Voordelen**
- De frontend hoeft maar één api te koppelen voor toegang tot meerdere bronnen
- De gerbuiker kan een integrale zoekvraag over meerdere bronnen heen stellen (bijvoorbeeld zaaksysteem en raads informatie systeem)
- Als de frontend zelf een CMS is kan deze ook als bron dienen (voor bijvoorbeeld nieuwsberichten en categorie omschrijvingen)
- Er kan worden gecombineerd met componenten (bijvoorbeeld de los staande NL Design React voorkant op de Openwebconcept verzoeken en convenanten plugins)

**Nadelen**
- Er moet een integratie voorziening worden geinstaleerd of afgenomen

**Beschickbbare componenten voor frontend**
| Component | Framework | Open Source | Leveranciers | Beschrijving |
|-------------|------|------|------------|--------------|
| OpenWOO Site  | NL Design (React) | Ja | [Conduction](https://conduction.nl/) | Een losse NL Design zoek pagina in de huisstijl van uw organisatie |
| OpenWoo Plugin | Wordpress | Ja | [Yard](https://www.yard.nl/), [Acato](https://acato.nl/) | Een NL Design weergave component voor wordpress websites |
| Open Gemeente | Typo-3 | Ja | [Open Gemeente](https://www.opengemeenten.nl/) | Een weergave component voor typo 3 websites |
| Sim Drupal | Drupal | ? | [Sim Groep](https://www.simgroep.nl/) | Een weergave component voor Drupal |

> **notice** 
> Voor Open Source componenten bent u natuurlijk niet beperkt tot deze leveranciers, dit zijn de op dit moment bij ons bekende leveranciers.
> 
> Weet u niet welk frontend framework uw organisaite op dit moment gebruikt? Kijk dan eens op [digimonitor](https://www.digimonitor.nl/cms-en/gemeenten/)
> 
![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/LosseFrontend.svg)

### Bronnen met integratie
Als er word gekosen voor het implementeren van het integratie voorziening word het mogenlijk om geautomatiseerd te publiceren vanuit meerdere bronnen.
Dit bespaart handmatig werk en vermindert de kans op fouten. Tevens ondersteund het gebruik van het integratie meschanisme denintegrale zoekvraag en is mogelijk om gegevens uit andere bronnen te integreren, zoals een raadsinformatiesysteem of een Open Webconcept CMS.

**Nadelen**
- Er moet een integratie voorziening worden geinstaleerd of afgenomen

**Beschickbbare componenten voor bronnen**
| Component | Framework | Open Source | Leveranciers | Beschrijving |
|-------------|------|------|------------|--------------|
|Zaaksysteem.nl | ZGW | Ja | [Xxllnc](https://xxllnc.nl/) |--------------|
|RX Fundament | ZGW | Nee | [Roxit ](https://www.roxit.nl/) |--------------|
|Decos Join | ZGW | Nee | [Decos](https://www.decos.com/nl) |--------------|
|Open Zaak | ZGW | Ja | [Maykin media](https://www.maykinmedia.nl/nl/) |--------------|

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Bronnen.svg)

### Hoe werkt dat scrapen vanuit de integratie voorziening

De integratie voorziening "scraped" elke nacht alle relevante informatie en bouwt hier een organisaties specifieke index over op. De stappen zijn als volgt:

1. Ophalen van alle zaaktypen.
2. Per zaaktype worden de beschikbare eigenschappen gecontroleerd (zie inrichting zaaksysteem).
3. Voor elk zaaktype dat aan de voorwaarden voldoet, worden de zaken opgehaald.
4. Per zaak wordt gecontroleerd of er een publicatiedatum is; zo ja, wordt de zaak opgenomen in de index.
5. Zaken die niet zijn gevonden in bovenstaande loop maar wel in de index staan, worden verwijderd.

Dit proces zorgt ervoor dat het zaaksysteem leidend is en dat zaken zowel kunnen worden gepubliceerd als gedepubliceerd.

## Federatie (via OpenCatalogi)
OpenWoo.app maakt gebruik van het federatieve stelstel van [OpenCatalogi](https://opencatalogi.nl/) om verchillende integratie voorzieningne tesamen te binden. Hierbij verhoudt de organsiatie specifieke voorziening zich tot wat we binnen OPenCatalogi een catalogus noemen. 
Dat betekend dat de integralle zoekvraag ook organisatie overstijgend kan worden gesteld aan meerdere organisatie tegelijktijd zonder dat er noodzaak is voor een landelijke index, dit concept is verder uitgewerkt in [koophulpje.nl](https://koophulpje.nl/) waarbij ook een voorziening is gerealiseerd voor het genereren van robot.txt en sitemap.xml bestanden.  Defacto is hiermee dus ook een landerlijke WOO api gerealiseerd met die berpekend dat deze alleen organisaties bevat die participeren in OpenWoo.app

De reden dat we hebben gekozen voor OpenCatalogi is dat in deze `variant` van FSC géén PKI of overige certificaten benodigd zijn. Dat lijnt uit met beter uit met de gedachte dat dit open data betreft die conform de wet juist annoniem toegankenlijk zou moeten zijn. 

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Federatie.svg)

## Woo Publicatie Object

Het Woo Publicatie Object vormt de kern van zowel de Woo API als de Woo-website. Dit object bevat alle essentiële informatie over een Woo-publicatie, inclusief metadata, publicatiedatum, bijlagen en andere relevante eigenschappen. Het dient als de centrale entiteit waaromheen de functionaliteiten van de API en de website zijn gebouwd. Door deze gecentraliseerde aanpak is het eenvoudiger om Woo-publicaties efficiënt te beheren, op te halen en weer te geven, en draagt het bij aan een coherente en gestroomlijnde gebruikerservaring.


## Roadmap

Organisaties kunnen bijdragen aan de ontwikkeling van deze componenten door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren. Voor het huidige overzicht, zie [Roadmap](/docs/Roadmap.md).
