# Integratie

OpenWoo.app is essentie een koppelvlak waar aan de bovenkant meerdere weergaven of user interfaces op kunnen worden gekoppeld en aan de onderkant meerdere bronnen ontsloten. 

## Het koppelen van een user interface
Als u als organisatie of leverancier OpenWoo.app wilt koppelen aan een huidige interface (bijvoorbeeld door de resulaten uit uw gemeente in uw website te integegreren) and kunt u daarvoor gebruik maken van de OpenWoo.app api.

### Locatie en Authenticatie
U vind de API op [https://api.OpenWoo.app](https://api.OpenWoo.app). Voor het stellen van zoekvragen is géén authenticatie vereist (het doel van OpenWOO.app is immers het verspreiden van openbare informatie). Er is echter wel sprake van trotheling op responce tijden (de api reageert langsamer) en ratelimiting (het aantal bevragingen per minuut en uur zijn beperkt) zonder authenticatie. Ook zijn alleen de GET (ophalen) acties toegestaan zonder authenticatie.

Als u vanuit uw casus een API nodig heeft zonder throtheling, ratelimit of namens een organisatie wijzigingen wilt doen (POST,PUT,DELETE) dan zijn er twee mogenlijkheden. 
- Beschikt uw organisatie reeds over FSC? Dan kunt u ons via FSC toegangs verzoek doen
- Beschikt uw organisatie nog niet over FSC? Dan kunt u een mail sturen naar info@conduction.nl

### Documentatie
Voor de API is een [redoc documentatie]() beschickbaar met voorbeelden van de verschillende API endpoints, calls en resultaten. Omdat de API daarnaast kan worden gebruikt zonder authenticatie is deze ook goed te beproeven via onze [postman collectie](). We raden developers van ook van harte aan om aan de hand van deze collectie te spelen en ontwikkelen.

### Voorbeelden
In het merendeel van de gevallen zult u een zoekvraag willen uitvoeren binnen de Woo publicaties van OpenWoo.app, het enpoint daarvoor is: https://api.OpenWoo.app/publicaties. Er zijn 4 voor de hand liggende zoek parameters waarmee gezocht word (overige opties vind ut terug in de [redoc documentatie]().
1. Op een of meerdere zoek woorden, b.v. _search=test
2. Op organisatie, dit gaat aan de hand van OIN (de volledige OIN lijst vind u [hier](https://oinregister.logius.nl/oin-register).
3. Op categorie, categorie=Convenant
4. Op datum, Hierbij kunt u een begin en eindatum opgeven om een periode (bijvoorbeeld jaar) te doorzoeken publicatiedatum[after]=2022-12-31T23:59:59Z&publicatiedatum[before]=2024-01-01T00:00:00Z&

````cli
GET 'https://api.OpenWoo.app/publicaties?extend[]=all&_search=Afvalwaterakkoord&_order[publicatiedatum]=desc&_limit=12&_page=1'

Response

{
    "results": [
        {
            "_id": "3c75db6d-55b5-48da-aef8-a5768dd8ec89",
            "_self": {
                "id": "3c75db6d-55b5-48da-aef8-a5768dd8ec89",
                "name": "Afvalwaterakkoord",
                "self": "/api/openWOO/3c75db6d-55b5-48da-aef8-a5768dd8ec89",
                "schema": {
                    "id": "b405e7bf-6d6a-41d6-8db2-9a2a639cbd1e",
                    "name": "OpenWOO",
                    "ref": "https://commongateway.nl/pdd.openWOO.schema.json"
                },
                "level": 1,
                "dateCreated": "2023-11-24T11:31:47+00:00",
                "dateModified": "2023-11-24T11:31:48+00:00",
                "owner": {
                    "id": "f5d48e83-7a82-4d42-9120-9ff7b1ba0129",
                    "name": "Conduction Admin",
                    "ref": "https://docs.commongateway.nl/user/default.user.json"
                },
                "organization": {
                    "id": "a1c8e0b6-2f78-480d-a9fb-9792142f4761",
                    "name": "Default Organization",
                    "ref": "https://docs.commongateway.nl/organization/default.organization.json"
                },
                "application": {
                    "id": null,
                    "name": null,
                    "ref": null
                },
                "synchronizations": [
                    {
                        "id": "e0d1d582-86b9-469a-9494-526b34b2ab41",
                        "source": {
                            "id": "75b9d330-a87b-477e-a6e0-8258ecc75c97",
                            "ref": "https://commongateway.woo.nl/source/ridderkerk.openwoo.source.json",
                            "name": "Ridderkerk OpenWoo",
                            "description": "Ridderkerk OpenWoo API",
                            "location": "https://openpub.ridderkerk.nl/wp-json"
                        },
                        "endpoint": null,
                        "sourceId": "12202548",
                        "dateCreated": "2023-11-24T11:31:47+00:00",
                        "dateModified": "2023-11-24T11:31:48+00:00",
                        "lastChecked": null,
                        "lastSynced": null,
                        "sourceLastChanged": null
                    }
                ]
            },
            "titel": "Afvalwaterakkoord",
            "beschrijving": null,
            "samenvatting": "In dit bestuursakkoord is afgesproken door de koepelorganisaties, dat het waterschap en de gemeenten moeten samenwerken in de afvalwaterketen &quot;als ware het één bedrijf’.",
            "categorie": "Convenant",
            "ontvangstdatum": null,
            "publicatiedatum": "2023-11-24 11:31:47",
            "behandelstatus": null,
            "termijnoverschrijding": null,
            "urlInformatieverzoek": null,
            "id": "3082",
            "portalUrl": null,
            "ontvangerInformatieverzoek": null,
            "urlInventarisatielijst": null,
            "urlBesluit": null,
            "bijlagen": [
                "/api/bijlagen/2653c850-a57f-49ef-80e4-89b8d445a98a"
            ],
            "themas": [
                "/api/themas/622721fc-6866-4a88-a1da-91a28edbcb39"
            ],
            "Besluit": null,
            "informatieverzoek": null,
            "inventarisatielijst": null,
            "besluit": null,
            "behandelendBestuursorgaan": "/api/behandelend_bestuursorganen/37165afb-0e33-4813-8f66-d504501e6128",
            "metadata": "/api/metadata/8e1084b5-ba4d-4d33-a5c2-f98e7f893f07",
            "embedded": {
                "bijlagen": [
                    {
                        "_self": {
                            "id": "2653c850-a57f-49ef-80e4-89b8d445a98a",
                            "name": "Naam_Bijlage",
                            "self": "/api/bijlagen/2653c850-a57f-49ef-80e4-89b8d445a98a",
                            "schema": {
                                "id": "bbfc722b-55bb-455e-8029-4b5bee6172e4",
                                "name": "Bijlage",
                                "ref": "https://commongateway.nl/pdd.bijlage.schema.json"
                            },
                            "level": 2,
                            "dateCreated": "2023-11-24T11:31:47+00:00",
                            "dateModified": "2023-11-24T11:31:48+00:00",
                            "owner": {
                                "id": "f5d48e83-7a82-4d42-9120-9ff7b1ba0129",
                                "name": "Conduction Admin",
                                "ref": "https://docs.commongateway.nl/user/default.user.json"
                            },
                            "organization": {
                                "id": "a1c8e0b6-2f78-480d-a9fb-9792142f4761",
                                "name": "Default Organization",
                                "ref": "https://docs.commongateway.nl/organization/default.organization.json"
                            },
                            "application": {
                                "id": null,
                                "name": null,
                                "ref": null
                            },
                            "synchronizations": [
                                {
                                    "id": "f8cbb0d0-aa58-4163-97f2-2da2a220bb31",
                                    "source": {
                                        "id": "75b9d330-a87b-477e-a6e0-8258ecc75c97",
                                        "ref": "https://commongateway.woo.nl/source/ridderkerk.openwoo.source.json",
                                        "name": "Ridderkerk OpenWoo",
                                        "description": "Ridderkerk OpenWoo API",
                                        "location": "https://openpub.ridderkerk.nl/wp-json"
                                    },
                                    "endpoint": null,
                                    "sourceId": "https://openpub.ridderkerk.nl/wp-content/uploads/sites/3/2023/02/ondertekend-afvalwaterakkoord-Ridderkerk-2022.pdf",
                                    "dateCreated": "2023-11-24T11:31:47+00:00",
                                    "dateModified": "2023-11-24T11:31:47+00:00",
                                    "lastChecked": null,
                                    "lastSynced": null,
                                    "sourceLastChanged": null
                                }
                            ]
                        },
                        "id": null,
                        "type": null,
                        "status": null,
                        "tijdstipLaatsteWijziging": null,
                        "titel": "Naam_Bijlage",
                        "label": "Naam_Bijlage",
                        "url": "https://openpub.ridderkerk.nl/wp-content/uploads/sites/3/2023/02/ondertekend-afvalwaterakkoord-Ridderkerk-2022.pdf"
                    }
                ],
                "themas": [
                    {
                        "_self": {
                            "id": "622721fc-6866-4a88-a1da-91a28edbcb39",
                            "name": "No name could be established for this entity",
                            "self": "/api/themas/622721fc-6866-4a88-a1da-91a28edbcb39",
                            "schema": {
                                "id": "df8dec18-b872-4052-a9c4-d25d0654299e",
                                "name": "Thema",
                                "ref": "https://commongateway.nl/pdd.thema.schema.json"
                            },
                            "level": 2,
                            "dateCreated": "2023-11-24T11:31:47+00:00",
                            "dateModified": "2023-11-24T11:31:48+00:00",
                            "owner": {
                                "id": "f5d48e83-7a82-4d42-9120-9ff7b1ba0129",
                                "name": "Conduction Admin",
                                "ref": "https://docs.commongateway.nl/user/default.user.json"
                            },
                            "organization": {
                                "id": "a1c8e0b6-2f78-480d-a9fb-9792142f4761",
                                "name": "Default Organization",
                                "ref": "https://docs.commongateway.nl/organization/default.organization.json"
                            },
                            "application": {
                                "id": null,
                                "name": null,
                                "ref": null
                            },
                            "synchronizations": null
                        },
                        "hoofdthema": "Milieu",
                        "subthema": null,
                        "aanvullendThema": null
                    }
                ],
                "behandelendBestuursorgaan": {
                    "_self": {
                        "id": "37165afb-0e33-4813-8f66-d504501e6128",
                        "name": "Gemeente Ridderkerk",
                        "self": "/api/behandelend_bestuursorganen/37165afb-0e33-4813-8f66-d504501e6128",
                        "schema": {
                            "id": "c58c5089-924a-45de-90d2-5a04707dd3aa",
                            "name": "Behandelend bestuursorgaan",
                            "ref": "https://commongateway.nl/woo.behandelendBestuursorgaan.schema.json"
                        },
                        "level": 2,
                        "dateCreated": "2023-11-24T11:31:47+00:00",
                        "dateModified": "2023-11-24T11:31:48+00:00",
                        "owner": {
                            "id": "f5d48e83-7a82-4d42-9120-9ff7b1ba0129",
                            "name": "Conduction Admin",
                            "ref": "https://docs.commongateway.nl/user/default.user.json"
                        },
                        "organization": {
                            "id": "a1c8e0b6-2f78-480d-a9fb-9792142f4761",
                            "name": "Default Organization",
                            "ref": "https://docs.commongateway.nl/organization/default.organization.json"
                        },
                        "application": {
                            "id": null,
                            "name": null,
                            "ref": null
                        },
                        "synchronizations": null
                    },
                    "naam": "Gemeente Ridderkerk",
                    "oidn": "ridderkerk",
                    "id": "37165afb-0e33-4813-8f66-d504501e6128"
                },
                "metadata": {
                    "_self": {
                        "id": "8e1084b5-ba4d-4d33-a5c2-f98e7f893f07",
                        "name": "No name could be established for this entity",
                        "self": "/api/metadata/8e1084b5-ba4d-4d33-a5c2-f98e7f893f07",
                        "schema": {
                            "id": "dc551296-2715-4316-bb43-8a814f50197a",
                            "name": "Metadata",
                            "ref": "https://commongateway.nl/woo.metadata.schema.json"
                        },
                        "level": 2,
                        "dateCreated": "2023-11-24T11:31:47+00:00",
                        "dateModified": "2023-11-24T11:31:48+00:00",
                        "owner": {
                            "id": "f5d48e83-7a82-4d42-9120-9ff7b1ba0129",
                            "name": "Conduction Admin",
                            "ref": "https://docs.commongateway.nl/user/default.user.json"
                        },
                        "organization": {
                            "id": "a1c8e0b6-2f78-480d-a9fb-9792142f4761",
                            "name": "Default Organization",
                            "ref": "https://docs.commongateway.nl/organization/default.organization.json"
                        },
                        "application": {
                            "id": null,
                            "name": null,
                            "ref": null
                        },
                        "synchronizations": null
                    },
                    "volgnummer": null,
                    "besluitdatum": "2022-12-21",
                    "verzoeker": null,
                    "id": "8e1084b5-ba4d-4d33-a5c2-f98e7f893f07"
                }
            }
        }
    ],
    "count": 1,
    "limit": 12,
    "total": 1,
    "offset": 0,
    "page": 1,
    "pages": 1
}
````

Vanuit een het weergeven van een zoek formulier is het goed mogenlijk dat u alleen bestaande waardes wilt weergeven (bijvoorbeeld bij jaartal of categorie). U kunt daarvoor de queries parameter gebruiken, deze verteld uw welke zoekwaarde welke resultaten opleveren. 

````cli
GET 'https://api.OpenWoo.app/publicaties?_queries[]=categorie'

Response

{
    "categorie": [
        {
            "_id": "Woo verzoek",
            "count": 36
        },
        {
            "_id": "Convenant",
            "count": 9
        }
    ]
}
````

### Spelregels
- Er mogen géén kopien worden gemaakt van data uit de API, dit zodat overheden de mogenlijkheid hebben data te depubliceren (bijvoorbeeld bij het per abuis publiceren van persoons gegevens)
- Er mag wel gebruik worden gemaakt van cashing voor het verbeteren van performance, maar er mag niet langer worden gecashed dan aangegeven in de cashing header van het responce object. Ofwel de bron bepaald hoe lang er gecashed mag worden.

## Het koppelen van een bron
Er zijn twéé manieren waarop een bron kan worden gekoppeld, bijde vereisen dat de bron beschikt over een koppelvlak dat benaderbaar is door de OpenWoo.app.

1. **De bron bied een reeds door OpenWoo.app ondersteund koppelvlak aan of ontwikkelt deze.** Dit is vanuit de OpenWoo.app natuurlijk de snelste route
2. **OpenWoo.app ontwikkeld ondersteuning voor een bron specifiek koppelvlak.** Deze route vergt minder van de aan te sluiten bron (die zal doorgaans al over een koppelvlak zo als API beschikken). Maar vergt inspanning aan de kant van de OpenWoo.app leveranciers. Daarnaast zal de OpenWoo.app community acoord moeten gaan met de ontwikkeling en bekostiging (in de praktijk zal de aanvragen worden gevraagd de kosten te dekken).

## Het koppelen van een organisatie
Zie voor het koppelen van een organisatie de [naar productie pagina](). 