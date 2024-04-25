# Roadmap Open WOO APP

Organisaties kunnen bijdragen aan deze roadmap door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren.

## Raadsinformatie Systemen (Word momenteel ontwikkeld)

**Inschatting: 40 uur per RIS**

Medio september gaat de gebruikersgroep verkennen of het mogelijk is om ook de Raadsinformatiesystemen te ontsluiten via Open WOO. Deze ontwikkeling zal de dienstverlening naar de inwoners verbeteren door de transparantie van de gemeente te vergroten. Het draagt ook bij aan de invulling van de Wet Open Overheid door overheidsinformatie beter toegankelijk te maken.

## Inlezen vanuit sharepoint (Word momenteel onderzocht)

**Inschatting: 120 uur**

## Aanleveren DROP (Word momenteel onderzocht)

**Inschatting: 120 uur**

DROP staat voor Decentrale Regelgeving en Officiële Publicaties. Dit platform helpt dubbele of foutieve invoer te voorkomen en draagt zo bij aan een sneller en correcter publicatieproces bij aanlevering naar het Gemeenteblad, Het Provinciaal blad, het Waterschapsblad en de Staatscourant.

## Koppelen e-Depot (Geen ontwikkeling gepland)

**Inschatting: 80 uur**

Voor het bewaren van stukken voor langere termijn is een koppeling met het archiefsysteem van het Nationaal Archief gewenst. Hierdoor wordt de houdbaarheid van de informatie gewaarborgd voor langere tijd.

## Koppeling met het CMS van Open Webconcept (Medio November)

**Inschatting: 40 uur**

## Open Online Plugin (Geen ontwikkeling gepland)

**Inschatting: 80 uur**

Open Online is een Dimpact-project waarbij een gemeentelijke versie van het bekende Drupal CMS wordt ontwikkeld. Het creëren van een Drupal-plugin zal het voor Dimpact-gemeenten gemakkelijker maken om hun WOO-indexpagina handmatig aan te vullen. Dit verbetert de dienstverlening door het bieden van een meer gestroomlijnde gebruikerservaring en draagt bij aan de Wet Open Overheid door de toegankelijkheid van informatie te vergroten.

## Static JSON Content (Geen ontwikkeling gepland)

**Inschatting: 40 uur**

WOO-objecten veranderen zelden. Door de dataset na iedere wijziging om te zetten in statische JSON-bestanden en deze op te nemen in de website-repository, kan de website worden gedraaid zonder backend server. Dit verlaagt de operationele kosten en vergroot de betrouwbaarheid, wat bijdraagt aan betere dienstverlening. Daarnaast voldoet het aan de Wet Open Overheid door de beschikbaarheid van overheidsinformatie te vergroten.

## Landingspagina aan de hand van Thema's (Geen ontwikkeling gepland)

**Inschatting: 80 uur**

Het thematiseren van WOO-objecten met een overkoepelende themapagina kan dienen als landingspagina voor de index. Dit verbetert de navigeerbaarheid van de website, wat de dienstverlening aan inwoners verbetert. Het biedt ook een gestructureerde manier om overheidsinformatie toegankelijk te maken, in lijn met de Wet Open Overheid.

Voorbeelden:

- [Utrecht](https://www.utrecht.nl/bestuur-en-organisatie/publicaties/)
- [Amsterdam](https://open.amsterdam/)

## Uitlegpagina of categorieën (Geen ontwikkeling gepland)

**Inschatting: 40 uur**

Het toevoegen van een uitlegpagina of categorieën kan helpen bij het beter organiseren van de informatie. Dit maakt het gemakkelijker voor inwoners om de informatie te vinden die ze nodig hebben, wat bijdraagt aan betere dienstverlening. Het is ook in overeenstemming met de Wet Open Overheid, die streeft naar een betere toegankelijkheid en vindbaarheid van overheidsinformatie.

Voorbeelden:

- [Amsterdam](https://open.amsterdam/categorieen)

## Kaartweergave (Geen ontwikkeling gepland)

**Inschatting: 80 uur**

WOO-objecten die geografisch te relateren zijn kunnen op een kaart worden weergegeven. Dit maakt het voor inwoners gemakkelijker om informatie te vinden die relevant is voor hun specifieke locatie, wat de dienstverlening verbetert. Daarnaast draagt het bij aan de doelen van de Wet Open Overheid door de toegankelijkheid van geografische informatie te vergroten.

## Extra categorieën

**Inschatting: 20 uur**

In princiepe kunnen extra categorieën vanuit de reeds gekopelde bronnen worden ingelezen. Het zou echter kunnen voorkomen dat er een nieuwe categorie ontstaat vanuit KOOP waarvoor wel aanvullende acties moeten worden genomen. Dit is een stelpost die we daarvoor hebben opgenomen.

## Installeren via Helm Chart

**Inschatting: 40 uur**

Het is mogelijk om de openwoo.app te installeren via een Helm Chart. Dit maakt het gemakkelijker om de website te installeren op een Kubernetes cluster, wat de operationele kosten verlaagt en de betrouwbaarheid verhoogt. Dit draagt bij aan de dienstverlening door de beschikbaarheid van de website te vergroten. De Helm chart zal voldoen aan de Haven-standaard.

## Installeren via GitHub Actions

**Inschatting: 10 uur**

De serverless Woo-pagina kan ook geinstalleerd worden via een GitHub Action. Door de installatie te automatiseren wordt het gemakkelijker om de website te installeren en te onderhouden, wat de operationele kosten verlaagt en de betrouwbaarheid verhoogt. Dit draagt bij aan de dienstverlening door de beschikbaarheid van de website te vergroten.

## Inmiddels afgerond

### Robot.txt en sitemap.xml (Medio December)

Begin oktober wil KOOP graag de decentrale portalen harvesten om een centrale index op te bouwen. Dit zal de zoekbaarheid van overheidsinformatie verbeteren, wat de dienstverlening aan de inwoners ten goede komt. Het past ook binnen de kaders van de Wet Open Overheid door het vergroten van de toegankelijkheid van overheidsinformatie.

### Woo 1.0

Voor de eerste opzet van de Woo-index van BZK is het belangrijk dat organisaties zelf hun Woo-publicaties op een doorzoekbare index publiceren. BZK houdt vervolgens een overzichtspagina bij waarop per organisatie de algemene organisatiegegevens en de organisatiespecifieke indexpagina vindbaar zijn.

### Woo 2.0

BZK heeft de ambitie om aan de hand van een harvester een eigen index op te bouwen op open.overheid.nl. Deze harvester maakt gebruik van `robots.txt` en `sitemap.xml`-bestanden om de verschillende pagina's en metadata van de organisatiespecifieke index te vinden en over te nemen. Dat betekent dat ook binnen de 2.0 variant van Woo een eigen indexpagina noodzakelijk blijft. Sterker nog, de kwaliteit van de ontsluiting wordt in grote mate afhankelijk van de kwaliteit van de index.

