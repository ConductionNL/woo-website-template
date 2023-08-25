# (Open) WOO Website Template

Dit is een zelfstandig bruikbare uitbreiding op [Open WOO](https://github.com/OpenWebconcept/plugin-openwoo) van het [Open Webconcept](https://openwebconcept.nl/). Het maakt hergebruik van [NL Design (React componenten)](https://nldesignsystem.nl/meedoen/introductie) om aan de hand van [Design Tokens](https://nldesignsystem.nl/meedoen/design-tokens/) een gemeentenlijk specifieke [WOO index](https://www.koopoverheid.nl/voor-overheden/rijksoverheid/woo-index) pagina's te genereren die voldoet aan alle [WCAG](https://wcag.nl/kennis/richtlijnen/) en [wettelijke eisen](https://www.rijksoverheid.nl/onderwerpen/wet-open-overheid-woo).


## Opzet
Deze pagina kan rechtstreeks vanaf Github (serverless) of los op een eigen omgeving gehost worden. Vervolgens kan de voorkant rechtstreek worden gekoppeld op de API van de Open WOO open webconcept plugin of de Open WOO common gateway plugin.

### Open webconcept variant
Als de voorkant direct wordt gedraaid op de Open Webconcept plugin kunnen WOO Verzoeken en COnvenanten gemakkelijk worden beheerd vanuit de reeds bestaande webomgeving en CMS.  In dit geval zijn er aan de kant van de overheid geen verdere installatie of beheerstichtingen nodig. In combinatie met het serverless kunnen draaien van de voorkant betekent dit een oplossing zonder server of hosting kosten waarbij simpelweg hergebruik gemaakt kan worden van bestaande common ground componenten

Nadeel van deze oplossingsrichting is dat WOO verzoeken en convenanten handmatig moeten worden geupload in de CMS omgeving en dat de zoekbalk niet wordt ondersteund.

### Common gateway variant
Het is ook mogelijk om de voorkant te koppelen aan een common gateway installatie met daarop de Open WOO plugin. Het voordeel hiervan is dat er kan worden doorgekoppeld op het zaaksysteem waardoor woor verzoeken en convenanten rechtstreeks kunnen worden gepubliceerd. Dit scheelt handwerk en voorkomt fouten. Tevens ondersteund deze richting de zoekbalk. Het is ook mogelijk om dit te combineren met het binnentrekken van gegevens uit andere bronnen zoals een raadsinformatie systeem op Open Webconcept CMS.

Nadeel van deze oplossingsrichting is dat de gemeente de Common Gateway (open source framework) of zelf zal moeten installeren of als SAAS afnemen.

## Features

- Serverless: Common WOO maakt gebruik van de RAD architectuur princiepes voor het leveren van een Serverless voorkant.
Eigen huisstijl: Via NL Design token de gemeente haar eigen huisstijl gebruiken. Als er nog een NL Design token voor uw organisatie zijn helpen wij u uiteraard verder.
Geen handwerk: Door directe bron integratie is het niet nodig WOO Verzoeken etc actief te publiceren
- Als de gemeente gebruik maakt van Open WOO kan er direct op de Open WOO Api worden gekopeld
- Als de gemeente een zaaksysteem heeft wat ZGW Gebruikt kan er via een gateway op het zaak systeem worden gekoppeld (bijvoorbeeld Xllnce, Roxit)
- WOO verzoeken ook los worden toegevoegd als JSON bestand.
- Kosteloos: Als de gemeente beschikt over een Bron, NL Design tokens en de interface servers draait zijn er geen kosten aan het gebruik verbonden.

## Voorbeelden

- [Noordwijk](https://conductionnl.github.io/woo-website-xxllnc/)
- [Tubbergen](https://conductionnl.github.io/woo-website-tubbergen/)
- [Epe](https://conductionnl.github.io/woo-website-epe/)
- [Dinkelland](https://conductionnl.github.io/woo-website-dinkelland/)
- [Noabrkracht](https://conductionnl.github.io/woo-website-noaberkracht/)
- [Leiden (Alleen vormgeving)](https://conductionnl.github.io/woo-website-xxllnc/)
- [Xxllnc (Demo omgeving)](https://conductionnl.github.io/woo-website-xxllnc/)

## Documentatie

- [Installatie handleiding](docs/installatie.md)
- [Test senario's](docs/Tests.md)
