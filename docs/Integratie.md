# Integratie

OpenWoo.app is essentie een koppelvlak waar aan de bovenkant meerdere weergaven of user interfaces op kunnen worden gekoppeld en aan de onderkant meerdere bronnen ontsloten.

## Het koppelen van een user interface

Als u als organisatie of leverancier OpenWoo.app wilt koppelen aan een huidige interface (bijvoorbeeld door de resultaten uit uw gemeente in uw website te integereren) and kunt u daarvoor gebruikmaken van de OpenWoo.app API.

### Locatie en Authenticatie

U vindt de API op [https://api.OpenWoo.app](https://api.OpenWoo.app). Voor het stellen van zoekvragen is géén authenticatie vereist (het doel van OpenWOO.app is immers het verspreiden van openbare informatie). Er is echter wel sprake van throttling op response tijden (de API reageert langzamer) en rate-limiting (het aantal bevragingen per minuut en uur zijn beperkt) zonder authenticatie. Ook zijn alleen de GET (ophalen) acties toegestaan zonder authenticatie.

Als u vanuit uw casus een API nodig heeft zonder throttling, ratelimit of namens een organisatie wijzigingen wilt doen (POST,PUT,DELETE) dan zijn er twee mogelijkheden.

- Beschikt uw organisatie reeds over FSC? Dan kunt u ons via FSC toegangsverzoek doen
- Beschikt uw organisatie nog niet over FSC? Dan kunt u een mail sturen naar <info@conduction.nl>

### Documentatie

Voor de API is een [redoc documentatie]() beschikbaar met voorbeelden van de verschillende API endpoints, calls en resultaten. Omdat de API daarnaast kan worden gebruikt zonder authenticatie is deze ook goed te beproeven via onze [Postman collectie](). We raden developers van ook van harte aan om aan de hand van deze collectie te spelen en ontwikkelen.

### Voorbeelden

In het merendeel van de gevallen zult u een zoekvraag willen uitvoeren binnen de Woo publicaties van OpenWoo.app, het endpoint daarvoor is: <https://api.OpenWoo.app/publicaties>. Er zijn 4 voor de hand liggende zoekparameters waarmee gezocht wordt (overige opties vind u terug in de [Redoc documentatie]()).

1. Op een of meerdere zoek woorden, b.v. `_search=test`
2. Op organisatie, dit gaat aan de hand van OIN (de volledige OIN lijst vind u [hier](https://oinregister.logius.nl/oin-register)).
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
            "id": "3082",
            "titel": "Afvalwaterakkoord",
            "beschrijving": null,
            "samenvatting": "In dit bestuursakkoord is afgesproken door de koepelorganisaties, dat het waterschap en de gemeenten moeten samenwerken in de afvalwaterketen &quot;als ware het één bedrijf’.",
            "categorie": "Convenant",
            "publicatiedatum": "2023-11-24 11:31:47",
            "portalUrl": "https://conductionnl.github.io/woo-website-epe/19cdec3f-896f-4765-8d62-c6c8570926b7",
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
                    "titel": "Naam_Bijlage",
                    "categorie": null,
                    "type": null,
                    "status": null,
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
            "organisatie": {
                "_self": {
                    "id": "37165afb-0e33-4813-8f66-d504501e6128",
                    "name": "Gemeente Ridderkerk",
                    "self": "/api/organisatie/37165afb-0e33-4813-8f66-d504501e6128",
                    "schema": {
                        "id": "c58c5089-924a-45de-90d2-5a04707dd3aa",
                        "name": "Organisatie",
                        "ref": "https://commongateway.nl/woo.organisatie.schema.json"
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
                "rsin": null,
                "tooi": null,
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
                "verzoek": {
                    "_self": {
                        "id": "865e9591-109c-40f0-abb6-617f24893e10",
                        "name": "No name could be established for this entity",
                        "self": "/api/objects/865e9591-109c-40f0-abb6-617f24893e10",
                        "schema": {
                            "id": "8eafc709-09a5-4e71-9f4a-2831db244f5f",
                            "name": "Verzoek",
                            "ref": "https://commongateway.nl/woo.verzoek.schema.json"
                        },
                        "level": 3,
                        "dateCreated": "2023-11-29T18:56:18+00:00",
                        "dateModified": "2023-11-29T19:10:18+00:00",
                        "owner": {
                            "id": "b5d1f8b2-100a-4925-9faa-f0a435228ee6",
                            "name": "Default User",
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
                    "inventarisatielijst": {
                        "_self": {
                            "id": "c9517757-a726-4aec-b666-6ae5d21281ee",
                            "name": "Temporarily title so a object gets created for file fetching and url genering.",
                            "self": "/api/bijlagen/c9517757-a726-4aec-b666-6ae5d21281ee",
                            "schema": {
                                "id": "fb4325dc-5f4e-4336-b2b5-f4c5f0872596",
                                "name": "Bijlage",
                                "ref": "https://commongateway.nl/woo.bijlage.schema.json"
                            },
                            "level": 3,
                            "dateCreated": "2023-11-29T18:56:16+00:00",
                            "dateModified": "2023-11-29T19:10:18+00:00",
                            "owner": {
                                "id": "b5d1f8b2-100a-4925-9faa-f0a435228ee6",
                                "name": "Default User",
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
                                    "id": "3d532126-45b6-461f-b713-36b2b94843dc",
                                    "source": {
                                        "id": "b4857337-cd1b-4834-9aeb-193c7170c488",
                                        "ref": "https://commongateway.woo.nl/source/epe.zaaksysteem.source.json",
                                        "name": "Epe zaaksysteem",
                                        "description": "Epe zaaksysteem api",
                                        "location": "https://zaaksysteem-accept.epe.nl/api"
                                    },
                                    "endpoint": null,
                                    "sourceId": "5d68832e-b847-4671-8a8e-5030f61d9a0a",
                                    "dateCreated": "2023-11-29T18:56:16+00:00",
                                    "dateModified": "2023-11-29T18:56:16+00:00",
                                    "lastChecked": null,
                                    "lastSynced": null,
                                    "sourceLastChanged": null
                                }
                            ]
                        },
                        "categorie": null,
                        "type": null,
                        "status": "accepted",
                        "url": "http://localhost/api/view-file/f9358a25-ee51-4079-a1d1-e98d53c4ca80",
                        "titel": "Temporarily title so a object gets created for file fetching and url genering.",
                        "id": null
                    },
                    "informatieverzoek": {
                        "_self": {
                            "id": "f6395c55-56d6-4837-bbd2-4e3f57f66f2a",
                            "name": "Temporarily title so a object gets created for file fetching and url genering.",
                            "self": "/api/bijlagen/f6395c55-56d6-4837-bbd2-4e3f57f66f2a",
                            "schema": {
                                "id": "fb4325dc-5f4e-4336-b2b5-f4c5f0872596",
                                "name": "Bijlage",
                                "ref": "https://commongateway.nl/woo.bijlage.schema.json"
                            },
                            "level": 3,
                            "dateCreated": "2023-11-29T18:56:16+00:00",
                            "dateModified": "2023-11-29T19:10:18+00:00",
                            "owner": {
                                "id": "b5d1f8b2-100a-4925-9faa-f0a435228ee6",
                                "name": "Default User",
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
                                    "id": "83fbd5dc-50f0-4c83-a0b3-1c9d097bc27c",
                                    "source": {
                                        "id": "b4857337-cd1b-4834-9aeb-193c7170c488",
                                        "ref": "https://commongateway.woo.nl/source/epe.zaaksysteem.source.json",
                                        "name": "Epe zaaksysteem",
                                        "description": "Epe zaaksysteem api",
                                        "location": "https://zaaksysteem-accept.epe.nl/api"
                                    },
                                    "endpoint": null,
                                    "sourceId": "348048f9-b29f-4986-8709-687d70d52333",
                                    "dateCreated": "2023-11-29T18:56:16+00:00",
                                    "dateModified": "2023-11-29T18:56:16+00:00",
                                    "lastChecked": null,
                                    "lastSynced": null,
                                    "sourceLastChanged": null
                                }
                            ]
                        },
                        "categorie": null,
                        "type": null,
                        "status": "accepted",
                        "url": "http://localhost/api/view-file/f723f34c-ef3d-453b-b395-fe60b5127cde",
                        "titel": "Temporarily title so a object gets created for file fetching and url genering.",
                        "id": null
                    },
                    "besluit": {
                        "_self": {
                            "id": "c070e255-bb45-424c-aafd-53b885c4c144",
                            "name": "Temporarily title so a object gets created for file fetching and url genering.",
                            "self": "/api/bijlagen/c070e255-bb45-424c-aafd-53b885c4c144",
                            "schema": {
                                "id": "fb4325dc-5f4e-4336-b2b5-f4c5f0872596",
                                "name": "Bijlage",
                                "ref": "https://commongateway.nl/woo.bijlage.schema.json"
                            },
                            "level": 3,
                            "dateCreated": "2023-11-29T18:56:17+00:00",
                            "dateModified": "2023-11-29T19:10:18+00:00",
                            "owner": {
                                "id": "b5d1f8b2-100a-4925-9faa-f0a435228ee6",
                                "name": "Default User",
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
                                    "id": "14be2af7-bb74-4f38-8b7a-dcc1844bff60",
                                    "source": {
                                        "id": "b4857337-cd1b-4834-9aeb-193c7170c488",
                                        "ref": "https://commongateway.woo.nl/source/epe.zaaksysteem.source.json",
                                        "name": "Epe zaaksysteem",
                                        "description": "Epe zaaksysteem api",
                                        "location": "https://zaaksysteem-accept.epe.nl/api"
                                    },
                                    "endpoint": null,
                                    "sourceId": "160ce4f7-612d-4ffa-a504-51b78367c61f",
                                    "dateCreated": "2023-11-29T18:56:17+00:00",
                                    "dateModified": "2023-11-29T18:56:17+00:00",
                                    "lastChecked": null,
                                    "lastSynced": null,
                                    "sourceLastChanged": null
                                }
                            ]
                        },
                        "categorie": null,
                        "type": null,
                        "status": "accepted",
                        "url": "http://localhost/api/view-file/4b7978e8-6cf9-469e-b27c-08f895e5f653",
                        "titel": "Temporarily title so a object gets created for file fetching and url genering.",
                        "id": null
                    },
                    "termijnoverschrijding": null,
                    "ontvangstdatum": "2023-10-02T10:31:12Z",
                    "ontvangerInformatieverzoek": null,
                    "status": null
                },
                "id": "8e1084b5-ba4d-4d33-a5c2-f98e7f893f07"
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

Vanuit een het weergeven van een zoekformulier is het goed mogelijk dat u alleen bestaande waardes wilt weergeven (bijvoorbeeld bij jaartal of categorie). U kunt daarvoor de queries parameter gebruiken, deze verteld u welke zoekwaarde welke resultaten opleveren.

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

- Er mogen géén kopiën worden gemaakt van data uit de API, dit zodat overheden de mogelijkheid hebben data te depubliceren (bijvoorbeeld bij het per abuis publiceren van persoonsgegevens)
- Er mag wel gebruik worden gemaakt van caching voor het verbeteren van performance, maar er mag niet langer worden gecachet dan aangegeven in de caching header van het responseobject. Ofwel de bron bepaald hoe lang er gecachet mag worden.

## Het koppelen van een bron

Er zijn twéé manieren waarop een bron kan worden gekoppeld, beide vereisen dat de bron beschikt over een koppelvlak dat benaderbaar is door de OpenWoo.app.

1. **De bron biedt een reeds door OpenWoo.app ondersteund koppelvlak aan of ontwikkelt deze.** Dit is vanuit de OpenWoo.app natuurlijk de snelste route
2. **OpenWoo.app ontwikkeld ondersteuning voor een bron specifiek koppelvlak.** Deze route vergt minder van de aan te sluiten bron (die zal doorgaans al over een koppelvlak zo als API beschikken). Maar vergt inspanning aan de kant van de OpenWoo.app leveranciers. Daarnaast zal de OpenWoo.app community akkoord moeten gaan met de ontwikkeling en bekostiging (in de praktijk zal de aanvragen worden gevraagd de kosten te dekken).

## Het koppelen van een organisatie

Zie voor het koppelen van een organisatie de [naar productie pagina]().
