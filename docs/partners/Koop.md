# Koop integratie van search API

Vanuit verschillende overheden is aan KOOP de vraag gesteld of zij ook een API kunnen ondersteunen (naast de sitemap.xml)

Voordelen van API gebruik
- Stabielere standaard en minder fout gevoelig
- Kleineere bevragingen

## API versus Sitemap
OpenWoo.app maakt onder water gebruik van Open Catalogi als infrastructuur. Kort samengevat faciltieerd Open Catalogi het per organisatie neerzetten van een Woo catalogus. Binnen deze woo catalogus worden vervolgens publicaties (met bijlagen) aangemaakt die binnen een federatief netwerk worden gedeeld (vindbaar zijn).

Om de publicaties voorspelbaar te houden wordt er vervolgens gebruik gemaakt van json-ld context die voor de normale json api is vertaald naar schema.json. Dat wil zeggen dat centraal wordt beheerd welke properties er per publicatie type beschickbaar zijn. Hiermee onstaat een moderne goed leesbare JSON api die ook gemakkenlijk door andere partijen te implementeren is. De meest basale voorwaarde voor een partij om mee te doen aan het federatief stelsel is een `/search` endpoint beschickbaar stellen waarop zij de data die zij doorzoekbaar wil maken aanbied in een JSON standaard. Het is dus niet per definitie nodig om de gehele OpenCatalogi standaard te implementeren of een installatie van Open Catalogi neer te zetten. Dat maakt de standaard voor andere leveraniers behapbaar.

Documentatie
- [API definties](https://conduction.stoplight.io/docs/open-catalogi/liqfp3acl8cro-publication)
- [Open Catalogi Architectuur](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/)

Dit is in de praktijk een stuk sneller te organiseren vo

## Crawling (harvesting) versus pub/sub
Op dit moment crawled KOOP iedere nacht alle overheids organisaties die een sitemap XML hebben aangeleverd. Dat heeft een aantal nadelen
- **Server intensief:** De volledige sitemap xml word opgehaald en verwekt dat kan over duizende bestanden gaan
- **Foutgevoelig:** De sitemap xml nor blijkt in de praktijk lastig te volgen voor ontwikkel partijen
- **Latend:** Er wordt alleen s'nachts gecrawled, hierdoor loopt de data altijd achter
- **Privacy gevoelig** Evenutele datalekken worden pas na 24 uur autatisch bijgewerkt

Vanuit OpenWoo.app bieden we daarom een pub/sub patroon aan conform het NL GOV profiel voor cloud events. Dat betkend dat KOOP bij iedere CRUD actie op publicaties of bijlagen een systeem notifiatie `event` ontvangt. Aan de hand waarvan zij publicaties en documenten kan herindexeren of verwijderen. Hierdoor wordt de server belasting gelijkmatiger over de dag verdeerd en eventueele publicaties meteen zichtbaar.  

Om te zorgen dat er gedurende de dag geen notificaties verloren gaan hanteren we naast de ontvangst protocollen vanuit cloud events ook de mogenlijkheid om iedere nacht aan de API alle wijzigingen op te vragen zodat de administratie vierkant kan worden gemaakt.

## Aanmelden versus discovery
Op dit moment moeten sitemap.xml bestanden handmatig worden aangemeld en verwerkt door KOOP. Vanuit Open Catalogi gebruiken we een adverticing/discovery waarbij nieuwe API's zichzelf kenbaar maken op het netwerk waarbij `trust` wordt gehandhaaft aan de hand van PKI certificaten. Vanuit Koop gezien betkend dit dat de Koop API bij iedere nieuwe `Woo Catalogus` een bericht krijgt, contact kan leggen met deze catalogus om aan de hand van het PKI certificaat te bepalen of deze legitiem is en dan een notificatie abbonement te nemen aan de hand van pub/sub.

## Variant 1, Koop leest in via centrale dienst (koophulpje.nl)
In de meest makkenlijke opzet kan koop inlezen via de reeds bestaande landelijke voorziening van openwoo.app, deze biedt een federatieve API naast het search meganisme ook het notificatie megansisme. Hetgeen betekend dat KOOP (net als woogle) aan de hand van deze éné API de gegevens van alle deelnemende organisaties kan ophalen.

Voordelen: Snel te realiseren
Nadelen: Het betkend dat en een flinke verschuiving van verkeer naar koophulpje optreed. Hiervoor zal om een bijdrage worden gevraagd

## Variant 2, Koop leest in via de decentrale catalogi
Onder water is het federaal stelsel Open Catalogi een versameling van decentrale catalogi. Koop kan de verschillende Catalogi zelf in kaart brengen aan de henad van het in de API ingebouwde discovery meganisme. Om verolgens per organisatie een connectie te nemen

## Variant 3, Koop installeerd Open Catalogi
Open Catalogi is een set van scripts die onderling zoek indexen uitlijnen. Daarmee bevat zij in de kern de logica die nodig is om deel te nemen aan het federatief netwerk. Hoewel er hierbij voor is gekozen om géén data duplicatie maar vragen bij de bron toe te passen zou dat in theorie wel kunnen. Dat betekend dat er vanuit een OpenWoo.app perspectief twee uitbreidingen nodig zouden zijn om de gefederaliseerde data de huidige WOO index in te lezen.

1 - Ondersteuning/Koppeling met de onderligende zoek engine 
2 - Ondersteuning/Koppeling voor het locaal opbouwen van een zoek index

Voordeel: Dit betkend dat Open Catalogi een door Koop gehoste uitbreiding kan zijn op haar huidige index, ofwel weinig "bouw"
Nadeel: Koop zal en Open Catalogi instantie moeten (laten) hosten. Er zullen ook ontwikkelkosten zijn aan de kant van OpenCatalogi en OpenWoo