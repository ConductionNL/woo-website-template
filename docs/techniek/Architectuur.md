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

OpenWoo.app maakt voor haar onderliggende techniek en architectuur gebruik van [Open Catalogi](https://documentatie.opencatalogi.nl/). Meer technsiche informatie over publiceren naar het federatief datastelsel vind je in de [architectuur documentatie van open catalogi](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/).

Binnen Open Catalogi richten we ons op burgers, terwijl we voor de Woo de (sub)doelgroepen inwoners, onderzoekers, journalisten, raadsleden en ondernemers definiëren. Het ORC fungeert als opslag voor publicaties vervult richting de WOO ook de rol van Openbare Documenten Registratie Component (ODRC). Hierbij kan worden ingesteld is of documenten daadwerkenlijk worden overgenomen naar het ORC of bij iedere inzage uit de bron worden gehaald (waarbij alleen de metadata wordt overgenomen). Deze configuratie ontlast bronsystemen of omzeilt trage bronsystemen. In Elastic Search, dat de zoekfunctie vervult, worden altijd alleen de metadata van bestanden opgenomen.

## Uitdagingen
Bij het ontwikkelen van een publicatievoorziening komen een aantal uitdagingen naar voren:

- Woo-gegevens zijn vaak opgeslagen in moeilijk toegankelijke bronnen.
- De scope van de Woo (alle niet-vertrouwelijke gegevens) en het concept van actieve openbaarmaking omvatten het volledige informatiehuishouden.
- Handmatig publiceren is geen duurzame oplossing, zelfs niet tijdelijk.
- Er mogen geen fouten worden gemaakt bij het anonimiseren, wat een afgebakende procesflow met checks en balances vereist.

Dit leidt tot de conclusie dat we een algemene publicatievoorziening nodig hebben die meerdere kanalen kan 'voeden', zoals de Woo Index (KOOP), een eigen publicatieplatform, Woogle, gemeentelijke websites, en kanalen zoals DROP, SDG, algoritmeregisters en WHO.

## Belangrijkste verschillen ten opzicht van OpenWoo.app 1.0

**Splitsing opslag en search** In OpenWoo.app 1.0 werd één MongoDB-instance gebruikt voor zowel opslag als zoekfuncties. In versie 2.0 zijn deze gescheiden in een Elasticsearch-instance voor zoekfuncties en een ORC-instance voor opslag, verdeeld over twee aparte API's (zoeken en beheer).
**Loskoppeling integratiecomponent** De 1.0 versie was direct gebouwd op de common gateway. In versie 2.0 is de common gateway uitgefasseerd en zijn de zoek-API en beheer-API losse componenten geworden, die indien gewenst, ook op NLX/FSC kunnen draaien.
**Publicatie flow** De 1.0 versie was gebouwd op de gedachte dat publicaties vanuit de bron altijd automatisch moesten worden gepubliceerd. In de 2.0 is dit omgedraaid en wordt er vanuit gegaan dat er actief beheer is op publicaties en dat ze pas worden gepubliceerd als er is geacodeerd. Het is in de 2.0 versie ook nogsteeds mogelijk om ublicaties te automatiseren.

### Publicatieplatform (onderdeel 1)

Woo-publicaties moeten uiteraard ergens worden gepubliceerd, en dat gebeurt via een organisatie specifiek Woo-publicatieplatform. Hoewel Open Catalogi een eigen zoekinterface heeft, sluit deze niet aan bij de functie en doelgroep voor Woo publicaties. Daarom biedt het OpenWoo.app-project verschillende alternatieve user interfaces aan, zodat overheden zelf kunnen kiezen welke interface het beste bij de behoeften van hun inwoners past. Hierbij is het ook mogelijk om de zoekfuncties te intergreren binnen de huidge bestaande website. 

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

> **notice**
> Weet u niet welk frontend framework uw organisatie op dit moment gebruikt? Kijk dan eens op [digimonitor](https://www.digimonitor.nl/cms-en/gemeenten/).


Naast het lokale publicatieplatform ondersteund OpenWoo.app ook altijd de volgende landelijke publicatieplatformen:

- Een gestandaardiseerde verbinding met het Kennis- en Exploitatiecentrum Officiële Publicaties (KOOP)
- Een federale zoekvraag via [koophulpje.nl](https://koophulpje.nl/).
- WooGLe van de Wooverheid van de Universiteit van Amsterdam.
- KoopHulpje van OpenWoo.app
- OpenCatalogi.nl van Rotterdam

![Publicatie Platformen Architectuur](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/PublicatiePlatformen.svg)

### Motorblok (onderdeel 2)

Het kloppende hart (of motorblok) onder het publicatieplatform zijn twee componenten uit het [Common Ground](https://commonground.nl/) project [Open Catalogi](https://documentatie.opencatalogi.nl/), namelijk [Open Index](https://index.openregisters.app/) en [Open Registers](https://openregisters.app/).

**Open Index** stelt ons in staat om snel en organisatie-overstijgend te zoeken in meerdere Woo-categorieën tegelijk. Hierbij wordt onder water gebruik gemaakt van elastic search. Open Index normaliseert en standaardiseert Elasticsearch door het toevoegen van JSON-LD, contextuele metadata, organisaties, directories en catalogi. Dit creëert een onderliggende infrastructuur voor een federatieve zoekvraag. Meer informatie over hoe we de techniek van Open Index inzetten vind je in de [architectuur documentatie van open catalogi](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/).

**Open Registers** levert een publicatieregister waarin publicaties binnenkomen, zowel automatisch via synchronisatie of notificatie als handmatig. Deze publicaties kunnen vervolgens worden verrijkt voordat ze worden doorgezet naar Open Index. 

Er is een bewuste en strikte scheiding tussen de werkbak (Open Registers) en de publicatiebak (Open Index), waarbij de zoek-API gebruikmaakt van de zoekbak. Medewerkers gebruiken de beheersinterface van Open Registers om publicaties te verrijken. Deze functionaliteit is optioneel, men kan er ook voor kiezen om de verrijking in de bron te doen, als hier voor gekozen wordt dan wordt de publicatie direct gepubliceert. Onder verrijken verstaan we de onderandere de volgende acties:
- Controleren en aanvullen van metadata
- Toevoegen van documenten
- Controleren en anonimiseren van informatie
- Evenuteel annonimiseren a.h.v. externe servcie
- Accorderen voor publicatie
- Eventueel terugtrekken van publicaties
- Archiveren
Deze scheiding zorgt voor een efficiënte en veilige verwerking en publicatie van gegevens.

Ahankenlijk van de specifieke configuratie wensen kunnen sommige van de bovenstaande acties worden geautomatiseerd (bijvoorbeeld terugtrekken van en DSO publicatie die ter inzage ligt na het verloop van het termijn). Hiervoor ondersteunen we drie patronen:

- Een BPMN (Camunda) task die wordt afgetrap n.a.v een notificatie bericht
- Een NextCloud workflow
- Een "pass thru" waarin de publicatie direct wordt gepubliceerd. De bovenstaande acties worden dan in de bron gedaan (bijvoorbeeld het zaaksysteem).

**OpenWoo Service** gebaseerd op het Common Ground [Open Services](https://openservices.online/) framework faciliteerd het inlezen van externe bronnen naar `open index`toe. Hierbij wordt bij voorkeur gebruik gemaakt van een pubsub principe (abbonement op notificaties vanuit de bron) maar kan ook (indien gewenst) gebruik worden gemaakt van crawling (synchronisatie).

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
> Er zijn meer koppelvlakken en daarmee bronnen beschikbaar, zoals StUF en ZDS. Bovenstaande is slechts een overzicht van de bij ons bekende en beproefde bronnen. Andere koppelvlakken en maatwerk zijn uiteraard ook mogelijk. Neem hiervoor contact op met een leverancier.  

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Bronnen.svg)

## Totaalplaatje

De drie onderdelen samen geven ons een totaalbeeld van samenwerkende componenten die als ecosysteem een complete oplossing leveren.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Totaal.svg)

## Hoe werkt het scrapen/synchroniseren vanuit de woo service? 

De woo service kan naast publicaties op basis van notifcaties (pubsub) inlezen deze ook via "scrapen"/synchronisatie inlezen. In het geval van scrapen draait er om een interval (bijvoorbeeld elke nacht) een synchronisatie die alle relevante informatie en synchronyseerd met de publicatie objecten in Open Registers. De synchronisatie stappen zijn (bijvoorbeeld bij een zaaksysteem) als volgt:

1. Ophalen van alle zaaktypen.
2. Per zaaktype worden de beschikbare eigenschappen gecontroleerd (zie inrichting zaaksysteem).
3. Voor elk zaaktype dat aan de voorwaarden voldoet, worden de zaken opgehaald.
4. Per zaak wordt gecontroleerd of er een publicatiedatum is; zo ja, wordt de zaak opgenomen opgenomen of bijgewerkt als publicatie object in Open Registers.
5. Zaken die niet zijn gevonden in bovenstaande loop, maar wel in Open Registers staan, worden gedepubliceerd en geoormerkt.

Het bovenstaande proces zorgt ervoor dat het zaaksysteem leidend is en dat zaken zowel kunnen worden gepubliceerd als worden gedepubliceerd.


## Integraal (Organisatiebreed) zoeken
De kern van de Woo is het zoeken in de openbare informatie van een overheidsorganisatie, waarbij het in theorie niet uitmaakt in welke bron of applicatie de informatie staat. Deze vorm van bron- en domeinoverstijgend zoeken kennen we al langer binnen de overheidsarchitectuur en noemen we doorgaans een integrale zoekvraag.

OpenWoo.app geeft invulling aan deze integrale zoekvraag door gebruik te maken van het commonground component [Open Index](), wat een standaardisatie is op reeds bestaande (en eventueel al binnen de organisatie beschikbare) tools. Waarin OpenWoo.app afwijkt, is dat het alleen publieke informatie in deze index opneemt, waardoor een zoekindex voor openbare informatie ontstaat. Dit heeft verschillende voordelen op het gebied van privacy, beveiliging en architectuur.

Open Index is echter ook buiten OpenWoo.app bruikbaar en kan bijvoorbeeld worden ingezet via de website, het zaaksysteem of het klantcontactcentrum om burgers, inwoners en medewerkers van relevante informatie te voorzien.

## Federatief (Landelijk) zoeken
OpenWoo.app maakt gebruik van de federatieve zoekvraag ontwikkeld binnen [OpenCatalogi](https://opencatalogi.nl/) om verschillende integrale zoekvragen virtueel samen te voegen. Simpel gezegd, roept de landelijke zoek-API meerdere instanties van [Open Index](https://index.openregisters.app/) aan en aggregeert de resultaten. Technisch zijn er enkele complexiteiten die binnen Open Index worden [uitgelegd](https://index.openregisters.app/).

Er wordt hierbij géén gebruik gemaakt van een landelijke index, wat dataduplicatie voorkomt en organisaties zelf controle geeft over hun publicaties. Dit dit concept is verder uitgewerkt in [koophulpje.nl](https://koophulpje.nl/) waarbij ook een voorziening is gerealiseerd voor het genereren van `robot.txt` en `sitemap.xml` bestanden (ten behoeve van KOOP). Hiermee is eigenlijk ook een landelijke Woo-API gerealiseerd met de beperking dat deze alleen organisaties bevat die participeren in OpenWoo.app

De bevragingen tussen de federale zoekvraag en de verschillende organisaties kan via [NLX/FSC]( https://www.nlx.io/) lopen, of daarbuiten. Gezien het publieke bevragingen zijn op openbare informatie is NLX niet verplicht en kan het inregelen van een PKI certificaat nodeloos complex zijn. Dat gezegd hebbende biedt NLX ook voordelen met betrekking tot het monitoren en loggen van verkeer.
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
Vanuit de WOO denken we doorgaans aan documenten die gepubliceerd moeten worden, vanuit OpenWoo.app denken we echter in publicatie objecten waar een of meer documenten aan kunnen worden gekoppeld. Publicatie objecten omvatten de metadata waarmee documenten kunnen worden gevonden, geclusterd en weergegeven (zoals bijvoorbeeld thema's en typen). Publicatie objecten kunnen ook aan elkaar worden gerelateerd, dat is met name relevant in de casus van raads informatie systemen waarbij een stuk hoort bij een agenda item dat hoort bij een agenda bij een vergadering en gekopeld kan zijn aan stem gedrag van personen of facties.

Het onderling aan elkaar relateren van publicatie objecten leid onderwater tot een 3 dimensionaal datamodel en is een van de redenen waarom er binnen OpenWoo.app is gekozen voor linked data. 

## Metadata
Ieder publicatie object beschickt over een type (bijvoorbeeld woo_verzoek) en een voorgedefineerde metadata set. De metadataset beschrijft wat er in de publicatie aan gegevens wordt verwacht en typeerd dese (bijvoorbeeld heeft titel, de titel is een string) en biedt daarmee context voor de weergave van de publicatie. Dit bied de search UI de mogenlijkheid om cards te maken die geoptimaliseerd zijn voor specifieke WOO categorien en een algemene card voor niet op voorhand gedefineerde of onbekende categorien.

Dat laatste kan voorkomen als een organisatie zelf metedata sets toevoegd, dat mag. Het is mogenlijk voor organisaties om zelf extra metadata beschrijvingen te defineren en hierop te publiceren. Organisaties zijn daarmee ook niet gelimiteerd tot de door KOOP gedefineerde categorien. Dit is ook een van de redenen waarom zoeken UI de faceted search MOET implementeren (zie ook de [architectuur documentatie van open catalogi](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/)). Het is niet op voorhand voorspelbaar op welke aspecten kan worden gezocht, dit is afhankenlijk van de publicaties en gedefineerde metadata zo als gepubliceerd door deelnemende organisaties.

## Roadmap

Organisaties kunnen bijdragen aan de ontwikkeling van deze componenten door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren. Voor het huidige overzicht, zie [Roadmap](/docs/product/Roadmap.md).
