# Architectuur

## Varianten

### Open Webconcept variant

Als de voorkant direct wordt gedraaid op de Open Webconcept plugin kunnen WOO-verzoeken en convenanten gemakkelijk worden beheerd vanuit de reeds bestaande webomgeving en CMS.  In dit geval zijn er aan de kant van de organisatie geen verdere installatie of beheerstichtingen nodig (mits de organisatie beschickt over een OpenWebconcept installatie met de Open Woo en Open Convenanten plugins). In combinatie met het serverless kunnen draaien van de voorkant betekent dit een oplossing zonder server of hosting kosten waarbij simpelweg hergebruik gemaakt kan worden van bestaande Common Ground componenten

Nadeel van deze oplossingsrichting is dat WOO-verzoeken en convenanten handmatig moeten worden geüpload in de CMS-omgeving en dat de zoekbalk niet wordt ondersteund.

![https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/openweb.svg](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/openweb.svg "OpenWeb Architecture")

### Common Gateway variant

Het is ook mogelijk om de voorkant te koppelen aan een Common Gateway-installatie met daarop de Open WOO-plugin. Het voordeel hiervan is dat er kan worden doorgekoppeld op het zaaksysteem waardoor WOO-verzoeken en convenanten rechtstreeks kunnen worden gepubliceerd. Dit scheelt handwerk en voorkomt fouten. Tevens ondersteunt deze richting de zoekbalk. Het is ook mogelijk om dit te combineren met het binnentrekken van gegevens uit andere bronnen zoals een raadsinformatiesysteem op Open Webconcept CMS.

Nadeel van deze oplossingsrichting is dat de gemeente de Common Gateway (open source framework) of zelf zal moeten installeren of als SAAS afnemen.

![https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/commongateway.svg](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/commongateway.svg "Commongateway Architecture")
