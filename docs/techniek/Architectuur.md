# Architectuur

> **Hulp nodig?**
>
> Hiervoor hebben we een apart [Slack kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder.


## Doel van OpenWoo.app
De OpenWoo.app heeft als doel om een ecosysteem van samenwerkende componenten te bieden dat voorziet in de volgende functionaliteit

- [X] Opslag en ontsluiting van documenten en metadata middels API's;
- [X] Het indexeren van documenten en metadata, en het ontsluiten van zoekresultaten middels API's;
- [X] Het werken met (concept) publicaties
- [X] Het uploaden, registreren en publiceren van documenten en metadata door medewerkers;
- [X] Het (door)zoeken, vinden en raadplegen van documenten en metadata door burgers;
- [X] Het beheren van autorisaties, configuratie en publicaties door beheerders;
- [X] Integratie met de landelijke voorziening PLOOI/KOOP, Woogle, Koophulpje, DSO.
- [X] Integratie met standaard gemeentenlijke bronnen zo als zaaksysteem, raadsinformatie systeem en website
- [X] Afhandenlings flow voor zowel publiceren als woo verzoeken
- [X] Het kunnen terugtrekken van publicaties t.b.v herstel op procedurele fouten
- [X] Help functie voor medewerkers aan de hand van werk instructies
- [X] Interne publicaties die niet openbaar toegankenlijk zijn
- [ ] (Roadmap) Generatie van documenten ten behoefe van publiceren en inhouds lijsten
- [ ] (Roadmap) Koppeling met annonimiserings software
- [ ] (Roadmap) Naar PDF kunnen omzeten van documenten
- [ ] (Roadmap) Archiveren
- [ ] (Roadmap) Opslaan van zoek filters en resultaten
- [ ] (Roadmap) Aboneren op nieuwe publicaties die voldoen aan een opgeslagen zoek filter

We hebben deze functionaliteit opgedeeld in drie blokken
1. Publicatieplatform
2. Motorblok 
3. Bronnen

Secundair doel daarbij is wat idialistischer: om een gemeenschappenlijke codebase te realiseren die door meerdere leveranciers kan worden uitgeleverd en deze vanaf dag één te betrekken. Het voorkomgen van een locked in vraagt om een open source oplossing die door en door begrepen word door meerdere markt partijen. OpenWoo.app

## Hergebruik tot op het bot

OpenWoo.app maakt voor haar onderliggende techniek en architectuur gebruik van [Open Catalogi](https://documentatie.opencatalogi.nl/) meer informatie technsiche informatie over publiceren naar het federatief datastelsel vind je dan ook in de [architectuur documentatie van open catalogi](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/).

Daar waar we het binnen Open Catalogi over burgers hebben defineren we voor de woo de (sub)doelgroepen inwoners, onderzoekers, journalisten, raadsleden en ondernemers. Het ORC als opslag voor publicaties vertolkt richting de WOO ook de rol van Openbare Documenten Registratie Component (ODRC). Waarbij het configureerdbaar is of documenten daadwerkenlijk worden overgenomen naar het ORC of bij iedere inzage uit de bron worden gehaald (in welk geval alleen de metadata wordt overgenomen). Deze configuratie keuze wordt met name aangeboden om bronsystemen te ontzien of om trage bronsystemen heen te werken. In Elastic Search (die de rol van search vertolkt) worden ten allertijde alleen de metedata gegevens van bestanden opgenomen.

## Uitdagingen
Bij het ontwikkelen van een publicatie voorziening komen een aantal uitdagingen in beeld

- Woo gegeves staan vaak opgeslagen in bronnen die niet makkenlijk toegangenlijk zijn
- De scope van de WOO (alle niet vertrouwelijke gegevens) in combinatie met het concept actieve openbaarmaken raakt de volledige informatie huishouden
- Handmatig publiceren kan daarmee geen eindoplossing zijn, maar eigenlijk ook al geen tussen oplossing
- Er mogen géén fouten worden gemaakt met annonimisren, dit vraagt om een afgebakende proces flow met checks en balances rondom publiceren

Dat leid tot de conclusie dat we niet op zoek zijn naar een WOO publicatie platform maar een algemene publicatie voorzienen die één of meerdere publicatie kanalen kan 'voeden', daarbij denken we naast de WOO Index (koop) ook nadrukenlijk aan een organisatie eigen publicatie platform, Woogle en bijvoorbeeld een gemeentenlijke website. In het verlengde hiervan liggen ook DROP, SDG, Algoritme registers en WHO als kanalen die vanuit een generiek publicatie platform moeten kunnen worden ontsloten. 

## Belangrijkste verschillen ten opzicht van OpenWoo.app 1.0

**Splitsing opslag en search** Binnen de OpenWoo.app 1.0 werd er één mongoDB instance als opslag en search gebruikt, we hebben deze zowel qua opslag uit elkaar getrokken in een elastic search en orc instansie als vereeld over twee aparte api's (zoeken en beheer).
**Lostrekken integratie component** De 1.0 versie was direct gebouwd op de common gateway, een integratie voorziening. Vanaf 2.0 zijn de zoek api en beheer api gepositioneerd als losse componenten die (desgewenst) ook op NLX/FSC kunnen worden ontsloten.
**Publicatie flow** De 1.0 versie was gebouwd op de gedachte dat objecten vanuit de bron altijd automatisch moesten worden gepubliceerd. In de 2.0 is dit omgedraaid en wordt er vanuit gegaan dat er actief beheer is op publicaties en dat ze pas worden gepubliceerd als daarte is geacodeerd. Wel kunnen er nog steeds automatische spelregels worden afgesproken.

### Publicatieplatform (onderdeel 1)

Woo-publicaties moeten worden uiteraard ergens worden gepubliceerd, dat gebeurd via een organisatie specifiek Woo-publicatieplatform. Open Catalogi kent haar eigen zoeken UI maar voor de gemiddelde gemeente is die te generiek. Daarom zijn er vanuit het OpenWoo.app project een aantal alternatieve user interfaces beschickbaar waarbij de overheid zelf kan kiezen welke interface het beste bij haar past. Hierbij kunt u zowel kiezen voor de zoektinterface als los component als voor een intergratie binnen uw huidoge website. 

Let op, alle interfaces maken onderwater gebruik van de [zoeken-API](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/#de-zoek-api). U kunt de interfaces dan ook niet gebruiken zonder een Open Catalogi zoeken-api.
.

| Component                     | Open Source | Leverancier(s)                                           | Beschrijving                                                      | Meer informatie |
|-------------------------------|-------------|----------------------------------------------------------|-------------------------------------------------------------------|-----------------|
| Open Catalogi zoeken-Ui          | Ja          | [Conduction](https://conduction.nl/)                     | Een losse NL Design zoekpagina in de huisstijl van uw organisatie | | 
| OpenWoo.app default zoeken-Ui           | Ja          | [Conduction](https://conduction.nl/), [Shift2](https://www.shift2.nl/)                     | Een losse NL Design zoekpagina in de huisstijl van uw organisatie | 
| Tilburgse frontend           | Ja          | [Acato](https://acato.nl/)                    | Een losse NL Design zoekpagina in de huisstijl van uw organisatie |                  |
| Integratie in Open Webconcept | Ja          | [Yard](https://www.yard.nl/), [Conduction](https://conduction.nl/) | Een NL Design weergavecomponent voor WordPress-websites           |                 |
| Drupal Site                   | Ja           | [Drupal voor Overheden](https://www.drupalvooroverheden.nl/)                                                    | Een weergavecomponent voor Drupal                                 |                 |
| TYPO3 thema site              | Ja          | [OpenGemeenten](https://www.opengemeenten.nl/)           | Een weergavecomponent voor TYPO3-websites                         |                 |

Naast het lokale publicatieplatform ondersteund OpenWoo.app ook altijd de volgende landelijke publicatieplatformen

- Een gestandaardiseerde verbinding met het Kennis- en Exploitatiecentrum Officiële Publicaties (KOOP)
- Een federale zoekvraag via [koophulpje.nl](https://koophulpje.nl/).
- WooGLe van de Wooverheid van de UvA.
- KoopHulpje van OpenWoo.app
- OpenCatalogi.nl van Rotterdam

> **notice**
> Voor Open Source componenten bent u natuurlijk niet beperkt tot deze leveranciers, dit zijn de op dit moment bij ons bekende leveranciers.
>
> Weet u niet welk frontend framework uw organisatie op dit moment gebruikt? Kijk dan eens op [digimonitor](https://www.digimonitor.nl/cms-en/gemeenten/).

![Publicatie Platformen Architectuur](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/PublicatiePlatformen.svg)

### Motorblok (onderdeel 2)

Het kloppende hart (of motorblok) onder het publicatieplatform is het [Common Ground](https://commonground.nl/) project [Open Catalogi](https://documentatie.opencatalogi.nl/) vanuit dit poject nemen we een 2 tal componenten over te te weten [Open Index](https://openindex.online/) en [Open Registers](https://openregisters.app/).

**Open Index** stel ons in staat om snel en organisatie-overstijgend te zoeken in meerdere Woo-categorieën tegelijkertijd. Hierbij wordt onder water gebruik gemaakt van elastic search. Open index normaliseerd en standaaardiseerd elastic search voor ons door het toevoegen van json-ld, contextueele metadata, organisaties, directory en catalogi waardoor de onderliggende infrastructuur ontstaat voor een federatieve zoekvraag. Het vormt daarmee het hard van zoeken in OpenWoo.app. Meer informatie over hoe we de techniek van Open Index inzetten vind je in de [architectuur documentatie van open catalogi](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/).

**Open Registers** levert voor ons een publicatie register waar publicaties binnen komen (automtatisch aan de hand van synchronysatie of handmatig) en we deze behandelen voordat ze verder worden gecomuniseerd naar Open Index. 

Er is dus een bewuste en harde scheiding tussen de werkbak (open Registers) en de publicatie bak (open INdex) waarbij de zoek-API (en daarme de burger interface) gebruii maakt van de zoekbak. De medewerkers maken via de Admin-UI en beheers interface gebruik van Open Registers om publicaties te behandelen, onder het behandelen van publicatie verstaan we onder andere
- Controleren en aanvullen van metadata
- Toevoegen van documenten
- Controleren van annonimisering
- Evenuteel annonimiseren a.h.v. externe servcie
- Accoderen voor publicatie 
- Eventueel terugtrekken van publicaties
- Archiveren

Hierbij dient te worden opgemerkt dat het publicatie princiepe niet allen de WOO maar ook WHO en DSO onderstuend. 

Ahankenlijk van de specifieke configuratie wensen van overheden kunnen sommige van deze handelingen worden geautomatiseerd (bijvoorbeeld terugtrekken van en DSO publicatie die ter inzage ligt na het verloop van het termijn). Hiervoor ondersteunen we twee patronen

- Een BPMN (Camunda) task die wordt afgetrap n.a.v een notificatie bericht
- Een NextCloud workflow

**OpenWoo Service** gebaseerd op het Common Ground [OpenS ervices](https://openservices.online/) framework faciliteerd het inlezen van externe bronnen naar `open index`toe. Hierbij wordt bij voorkeur gebruik gemaakt van een pubsub principe (abbonement op notifiacties vanuit de bron) maar kan ook (indien gewenst) gebruik worden gemaakt van crawling.

| Component       | Leverancier   | Meer informatie                                   |
|-----------------|---------------|---------------------------------------------------|
| Open Index      | [Conduction](https://conduction.nl/)    | [Documentatie](https://index.openregisters.app/)    |
| Open Registers      | [Conduction](https://conduction.nl/)    |  [Documentatie](https://openregisters.app/)    |
| OpenWoo Service | [Conduction](https://conduction.nl/)    | [Documentatie](https://openwoo.openservices.online/) |

![Componenten Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Componenten.svg)

### Bronnen (onderdeel 3)

Een van de krachten van OpenWoo.app is het ondersteunen en (automatisch) publiceren vanuit een groot aantal bronnen

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

## Hoe werkt dat scrapen vanuit de woo service?

De woo service "scraped" elke nacht alle relevante informatie en synchronyseerd deze met de publicatie objecten in Open Registers. De stappen zijn (bijvoorbeeld bij een zaaksysteem) als volgt:

1. Ophalen van alle zaaktypen.
2. Per zaaktype worden de beschikbare eigenschappen gecontroleerd (zie inrichting zaaksysteem).
3. Voor elk zaaktype dat aan de voorwaarden voldoet, worden de zaken opgehaald.
4. Per zaak wordt gecontroleerd of er een publicatiedatum is; zo ja, wordt de zaak opgenomen opgenomen of bijgewerkt als publicatie object in Open Registers.
5. Zaken die niet zijn gevonden in bovenstaande loop, maar wel in Open Registers staan, worden gedepubliceerd en geoormerkt.

Het bovenstaande proces zorgt ervoor dat het zaaksysteem leidend is en dat zaken zowel kunnen worden gepubliceerd als worden gedepubliceerd.


## Integraal (Organisatiebreed) zoeken
De kern van de Woo is het zoeken in de openbare informatie van een overheid organisatie, hierbij zou het in theorie niet mogen uitmaken in welke bron/applicatie informatie staat. Deze vorm van bron en domein overstijgend zoeken kennen we vanuit overheid architectuur al langer en noemen we doorgaans integrale zoekvraag.

OpenWoo.app geeft invulling aan deze integrale zoekvraag door gebruik te maken van het commonground component [Open Index](), wat een standaardisatie is op reeds bestaande (en eventueel al binnen de organisatie beschikbare) tools. Waarin OpenWoo.app afwijkt is dat zij alleen publieke informatie in deze index opneemt waardoor een zoek index openbare informatie ontstaat. Dit heeft een aantal privacy, security en architectuur voordeelen.

Deze OpenIndex is echter ook buiten OpenWoo bruikbaar en kan bijvoorbeeld worden ingezet vanuit de website, zaaksysteem of klant contact centrum om burgers, inwoners en medewerkers van relevante informatie te voorzien.

## Federatief (Landelijk) zoeken
OpenWoo.app maakt gebruik van de federatieve zoekvraag ontwikkeld binnen [OpenCatalogi](https://opencatalogi.nl/) om verschillende integrale zoekvragen virtueel samen te voegen.  Simpel gezegd roept de landelijke zoek API meerdere instanties van [Open Index]() aan en aggregeert de resultaten. Technisch zitten daar nog wat haken en ogen aan die binnen Open Index worden [uitgelegd]().
Er word hierbij dus géén gebruik gemaakt van een landelijke index, het geen data duplicatie voorkomt en organisaties zelf in controlle houdt op hun publicaties. Dit dit concept is verder uitgewerkt in [koophulpje.nl](https://koophulpje.nl/) waarbij ook een voorziening is gerealiseerd voor het genereren van `robot.txt` en `sitemap.xml` bestanden (ten behoeve van KOOP). De facto is hiermee dus ook een landelijke Woo-API gerealiseerd met de beperking dat deze alleen organisaties bevat die participeren in OpenWoo.app
De bevragingen tussen de federale zoekvraag en de verschillende organisaties kan via [NLX/FSC]( https://www.nlx.io/) lopen, of daarbuiten. Gezien het publieke bevragingen zijn op openbare informatie is NLX an zich niet verplicht en kan het inregelen van een PKI certificaat nodeloos complex zijn. Dat gezegd hebbende biedt NLX ook voordelen met betrekking tot het monitoren en loggen van verkeer.
![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Federatie.svg)


## Domeinen
OpenWoo.app is een organisatie specifieke applicatie waarvan de installaties onderling een federatief netwerk vormen. Dat kan het wat onduidenlijk maken wat waar leeft.

| Type                  | Domein                                        | Status       | Type              |
|-----------------------|-----------------------------------------------|--------------|-------------------|
| Federatief            | koophulpje.nl                                 | productie    | Publicatie Pagina |
| Federatief            | acceptatie.koophulpje.nl                      | acceptatie   | Publicatie Pagina |
| Organisatie Specifiek | [organisatie_naam].koophulpje.nl              | productie    | Publicatie Pagina |
| Organisatie Specifiek | acceptatie.[organisatie_naam].koophulpje.nl   | acceptatie   | Publicatie Pagina |
| n.v.t                 | OpenWoo.app                                   | productie    | Product Pagina    |
| n.v.t                 | acceptatie.OpenWoo.app                        | acceptatie   | Product Pagina    |
| Organisatie Specifiek | [organisatie_naam].OpenWoo.app                | productie    | Publicatie Pagina |
| Organisatie Specifiek | acceptatie.[organisatie_naam].OpenWoo.app     | acceptatie   | Publicatie Pagina |
| Federatief            | api.OpenWoo.app                               | productie    | API               |
| Federatief            | acceptatie.api.OpenWoo.app                    | acceptatie   | API               |
| Organisatie Specifiek | api.[organisatie_naam].OpenWoo.app            | productie    | API               |
| Organisatie Specifiek | acceptatie.api.[organisatie_naam].OpenWoo.app | acceptatie   | API               |

Dit zijn de aangeboden domeinen vanuit OpenWoo.app, daarnaast zien de dat de meeste organisaties hun publicatie pagina ontsluiten op hun eigen domein e.g. open.[organisatie_naam].nl

## Documenten vs Publicatie Objecten
Vanuit de WOO denken we doorgaans aan documenten die gepubliceerd moeten worden, vanuit OpenWoo.app denken we echter in publicatie objecten waar een of meer documenten aan kunnen worden gekoppeld. Publicatie objecten omvatten de metadata waarmee documenten kunnen worden gevonden, geclusterd en weergegeven (zo als bijvoorbeeld thema's en typen). Publicatie objecten kunnen ook aan elkaar worden gerelateerd, dat is met name relavant in de casus van raads informatie systemen waarbij een stuk hoort bij een agenda item dat hoort bij een agenda bij een vergadering en gekopeld kan zijn aan stem gedrag van personen of facties.

Het onderling aan elkaar relateren van publicatie objecten leid onderwater tot een 3 dimensionaal datamodel en is een van de redenen waarom er binnen OpenWoo.app is gekozen voor linked data. 

## Metadata
Ieder publicatie object beschickt over een type (bijvoorbeeld woo_verzoek) en een voorgedefineerde metadata set. De metadataset beschrijft wat er in de publicatie aan gegevens wordt verwacht en typeerd dese (bijvoorbeeld heeft titel, de titel is een string) en biedt daarmee context voor de weergave van de publicatie. Dit bied de search UI de mogenlijkheid om cards te maken die geoptimaliseerd zijn voor specifieke WOO categorien en een algemene card voor niet op voorhand gedefineerde of onbekende categorien.

Dat laatste kan voorkomen als een organisatie zelf metedata sets toevoegd, dat mag. Het is mogenlijk voor organisaties om zelf extra metadata beschrijvingen te defineren en hierop te publiceren. Organisaties zijn daarmee ook niet gelimiteerd tot de door KOOP gedefineerde categorien. Dit is ook een van de redenen waarom zoeken UI de faceted search MOET implementeren (zie ook de [architectuur documentatie van open catalogi](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/)). Het is niet op voorhand voorspelbaar op welke aspecten kan worden gezocht, dit is afhankenlijk van de publicaties en gedefineerde metadata zo als gepubliceerd door deelnemende organisaties.

## Roadmap

Organisaties kunnen bijdragen aan de ontwikkeling van deze componenten door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren. Voor het huidige overzicht, zie [Roadmap](/docs/product/Roadmap.md).
