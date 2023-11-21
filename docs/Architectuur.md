# Architectuur

## Woo Publicatie Object

Het Woo Publicatie Object vormt de kern van zowel de Woo API als de Woo-website. Dit object bevat alle essentiële informatie over een Woo-publicatie, inclusief metadata, publicatiedatum, bijlagen en andere relevante eigenschappen. Het dient als de centrale entiteit waaromheen de functionaliteiten van de API en de website zijn gebouwd. Door deze gecentraliseerde aanpak is het eenvoudiger om Woo-publicaties efficiënt te beheren, op te halen en weer te geven, en draagt het bij aan een coherente en gestroomlijnde gebruikerservaring.

Toegepaste norm: [NL API Strategie over property namen](https://docs.geostandaarden.nl/api/cv-hr-API-Strategie-20190213/#veldnamen-in-snake_case-camelcase-uppercamelcase-of-kebab-case)

## Varianten

### Open Webconcept variant

Met deze variant kunnen Woo-verzoeken en convenanten eenvoudig worden beheerd vanuit de bestaande webomgeving en CMS door middel van een directe koppeling met de gateway. Dit vereist geen extra installatie of beheerinspanningen van de organisatie, op voorwaarde dat er al een OpenWebconcept-installatie met de benodigde plugins beschikbaar is. Dit biedt een serverloze en kostenefficiënte oplossing door het hergebruik van bestaande Common Ground-componenten.

**Nadelen:**

- Woo-verzoeken en convenanten moeten handmatig worden geüpload in de CMS-omgeving.
- De zoekbalk wordt niet ondersteund.

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/openweb.svg)

### Common Gateway variant

Deze variant maakt het mogelijk om de front-end te koppelen aan een Common Gateway-installatie met de Open Woo-plugin. Dit biedt de mogelijkheid om direct te koppelen aan het zaaksysteem, waardoor Woo-verzoeken en convenanten automatisch kunnen worden gepubliceerd. Dit bespaart handmatig werk en vermindert de kans op fouten. De zoekbalk wordt in deze variant wel ondersteund. Het is tevens mogelijk om gegevens uit andere bronnen te integreren, zoals een raadsinformatiesysteem of een Open Webconcept CMS.

**Nadelen:**

- De organisatie moet de Common Gateway zelf installeren of als SaaS afnemen.

![Commongateway Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/commongateway.svg)

### Ophalen informatie

De Open Woo-plugin "scraped" elke nacht alle relevante zaken. De stappen zijn als volgt:

1. Ophalen van alle zaaktypen.
2. Per zaaktype worden de beschikbare eigenschappen gecontroleerd (zie inrichting zaaksysteem).
3. Voor elk zaaktype dat aan de voorwaarden voldoet, worden de zaken opgehaald.
4. Per zaak wordt gecontroleerd of er een publicatiedatum is; zo ja, wordt de zaak opgenomen in de index.
5. Zaken die niet zijn gevonden in bovenstaande loop maar wel in de index staan, worden verwijderd.

Dit proces zorgt ervoor dat het zaaksysteem leidend is en dat zaken zowel kunnen worden gepubliceerd als gedepubliceerd.

## Federatie via OpenCatalogi

OpenWoo.app maakt gebruik van het federatieve stelstel van OpenCatalogi om de verschillende varianten te kunnen ontsluiten. Dit betekent dat organisaties zelf kunnen bepalen welke variant ze willen gebruiken en dat ze niet afhankelijk zijn van een centrale partij.

## Landelijke API

Iedereen kan de landelijke API bevragen om alle Woo-verzoeken en convenanten op te halen. De API is gebaseerd op de [NL API Strategie](https://docs.geostandaarden.nl/api/cv-hr-API-Strategie-20190213/).

(wordt nog aangevuld)

## Componenten

Een variant bestaat uit een aantal componenten die samen de functionaliteit van de variant vormen. Deze componenten zijn:

- [Woo API]()
- [Woo Website]()
- [Woo Plugin]()
- [Woogle](https://woogle.wooverheid.nl/search?q=*)
- [Raadsinformatie Systeem]()
- [KOOP-index]()
- [Common Gateway]()
- [Open Webconcept CMS]()
- [Zaaksysteem]()

Alle componenten worden getest met [zaaksysteem.nl](https://xxllnc.nl/zaakgericht/), Rx.Fundament en Decos JOIN

## Verschil OpenWoo.app en de OpenWoo plugin

De OpenWoo.app is een verzameling van componenten die samen een oplossing vormen voor het publiceren van Woo-verzoeken en convenanten. De OpenWoo plugin is een onderdeel van deze oplossing en kan worden gebruikt om Woo-verzoeken en convenanten te publiceren vanuit een Open Webconcept CMS. De OpenWoo plugin is een onderdeel van deze oplossing en kan worden gebruikt om Woo-verzoeken en convenanten te publiceren vanuit een Open Webconcept CMS.

## Roadmap

Organisaties kunnen bijdragen aan de ontwikkeling van deze componenten door items aan te dragen, deze zelf op te pakken en uit te voeren, of door de uitvoering ervan te financieren. Voor het huidige overzicht, zie [Roadmap](/docs/Roadmap.md).
