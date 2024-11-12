# Integratie

OpenWoo.app is essentie een koppelvlak waar aan de bovenkant meerdere weergaven of user interfaces op kunnen worden gekoppeld en aan de onderkant worden meerdere bronnen ontsloten.

Als er tijdens of na het lezen zijn nog vragen zijn, neem een kijkje op de [FAQ](/docs/product/FAQ.md).

## Wat is OpenWoo.app

OpenWoo.app is in essentie een API-koppelvlak waar aan de bovenkant meerdere weergaven of user interfaces (front-ends) op kunnen worden gekoppeld en aan de onderkant meerdere bronnen ontsloten. Als u meer wilt weten over OpenWoo.app kunt u meer lezen op [https://openwoo.app](https://openwoo.app).

> **Hulp nodig?**
>
> Hiervoor hebben we een apart [Slack-kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder.

## Het koppelen van een user interface

Indien u als organisatie of leverancier OpenWoo.app wilt koppelen aan een huidige interface (bijvoorbeeld door de resultaten uit uw gemeente in uw website te integereren), kunt u daarvoor gebruikmaken van de OpenWoo.app API.

### Locatie en Authenticatie

De API staat online en er kunnen HTTP-methods aangeroepen worden op [https://api.gateway.commonground.nu/api/publicaties](https://api.gateway.commonground.nu/api/publicaties). Voor het stellen van zoekvragen is géén authenticatie vereist (het doel van OpenWOO.app is immers het verspreiden van openbare informatie). Er is echter wel sprake van throttling op response tijden (de API reageert langzamer) en rate-limiting (het aantal bevragingen per minuut en uur zijn beperkt) zonder authenticatie. Ook zijn alleen de GET (ophalen) acties toegestaan zonder authenticatie.

Als u vanuit uw casus een API nodig heeft zonder throttling, ratelimit of namens een organisatie wil wijzigingen (d.w.z POST, PUT, DELETE API requests wilt doen) dan kunt u een mail sturen naar <info@conduction.nl>.

### Documentatie

Voor de API is een [Stoplight documentatie](https://conduction.stoplight.io/studio/open-catalogi?) beschikbaar met voorbeelden van de verschillende API-endpoints, calls en resultaten. Omdat de API daarnaast kan worden gebruikt zonder authenticatie is deze ook goed te beproeven via onze [Postman-collectie](https://github.com/ConductionNL/opencatalogi/blob/feature/docs/postmancollection/docs/assets/Opencatalogi%20CRUD.postman_collection.json). We raden developers van ook van harte aan om aan de hand van deze collectie te spelen en te ontwikkelen.

### Voorbeelden

In het merendeel van de gevallen zult u een zoekvraag willen uitvoeren binnen de Woo-publicaties van OpenWoo.app, het endpoint daarvoor is: <https://api.gateway.commonground.nu/api/publicaties>. Er zijn een aantal voor de hand liggende zoekparameters waarmee gezocht wordt (overige opties zijn terug te vinden in de [Stoplight documentatie](https://conduction.stoplight.io/studio/open-catalogi?)).

1. Op een of meerdere zoek woorden, b.v. `_search=test`
2. Op organisatie, dit gaat aan de hand van OIN (de volledige OIN-lijst vind u [hier](https://oinregister.logius.nl/oin-register)) b.v. `oin=00000001001299992000`
3. Op categorie, `categorie=Convenant`
4. Op datum, Hierbij kunt u een begin en eindatum opgeven om een periode (bijvoorbeeld jaar) te doorzoeken publicatiedatum[after]=2022-12-31T23:59:59Z&publicatiedatum[before]=2024-01-01T00:00:00Z&

````cli
GET 'https://api.gateway.commonground.nu/api/publicaties?extend[]=all&_search=verzoek&_order[publicatiedatum]=desc&_limit=12&_page=1'

Response

{
    "results": [
        {
            "_id": "385628ef-dd81-4ab2-98e1-3051ab1b3ef6",
            "_self": {
                "id": "385628ef-dd81-4ab2-98e1-3051ab1b3ef6",
                "name": "informatieverzoek evenementenvergunning",
                "self": "/api/publicaties/385628ef-dd81-4ab2-98e1-3051ab1b3ef6",
                "schema": {
                    "id": "40c1041c-1526-4494-b191-244fdd30aefd",
                    "name": "Publicatie",
                    "ref": "https://commongateway.nl/woo.publicatie.schema.json"
                },
                "level": 1,
                "dateCreated": "2024-07-03T07:51:59+00:00",
                "dateModified": "2024-08-02T12:26:46+00:00",
                "dateDeleted": null,
                "database": {
                    "id": null,
                    "name": null,
                    "ref": null
                },
                "owner": {
                    "id": "06ef47a7-a2f1-4589-af59-b00a611d5692",
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
                        "id": "c04f118a-d853-48c4-a8d4-d4d86ef11b36",
                        "source": {
                            "id": "f1cf401b-fbbc-4416-b2da-519eac0163b9",
                            "ref": "https://commongateway.woo.nl/source/conduction.zaaksysteem.source.json",
                            "name": "Conduction zaaksysteem",
                            "description": "Conduction zaaksysteem api",
                            "location": "https://openwoo.zaaksysteem.net/api"
                        },
                        "endpoint": null,
                        "sourceId": "001046b9-0a9b-4068-a6bf-3e7efcf75c67",
                        "dateCreated": "2024-07-03T07:51:59+00:00",
                        "dateModified": "2024-07-03T07:52:00+00:00",
                        "lastChecked": null,
                        "lastSynced": null,
                        "sourceLastChanged": null
                    }
                ]
            }
        }
        // 1 enkele voorbeeld publicaite, in dit geval zijn het er 64
    ],
    "count": 12,
    "limit": 12,
    "total": 64,
    "offset": 0,
    "page": 1,
    "pages": 6
}
````

Vanuit een het weergeven van een zoekformulier is het goed mogelijk dat u alleen bestaande waardes wilt weergeven (bijvoorbeeld bij jaartal of categorie). U kunt daarvoor de content type `application/json+aggregations` gebruiken in combinatie met de de query-parameter `_queries[]`, deze vertelt u welke zoekwaarden welke resultaten opleveren.

````cli
GET 'https://api.gateway.commonground.nu/api/publicaties?_queries[]=categorie'
Accept: application/json+aggregations

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

### Metadata

De kerngegevens van een Woo-publicatie zitten in het metadata-object, de inhoud van dit object is 'semi' vrij, hij kan per publicatie `categorie` verschillen. Daarnaast zijn er een paar algemene properties die altijd kunnen voorkomen in de metadata.

#### Algemene properties

| Property              | Verplicht     | Gebruik      | Toegestane waardes    |
|-----------------------|---------------|--------------|-----------------------|
| besluitdatum          | Nee           | Detailpagina | String in date format |
| ontvangstdatum        | Nee           | Detailpagina | String in date format |
| informatieverzoek     | Nee           | Detailpagina | Bijlage object        |
| besluit               | Nee           | Detailpagina | Bijlage object        |
| inventarisatielijst   | Nee           | Detailpagina | Bijlage object        |
| termijnoverschrijding | Nee           | Detailpagina | String                |

#### Convenanten

| Property              | Verplicht     | Gebruik      | Toegestane waardes    |
|-----------------------|---------------|--------------|-----------------------|

#### Woo verzoeken

| Property              | Verplicht     | Gebruik      | Toegestane waardes    |
|-----------------------|---------------|--------------|-----------------------|

#### Klachtoordelen

| Property              | Verplicht     | Gebruik      | Toegestane waardes    |
|-----------------------|---------------|--------------|-----------------------|

### Spelregels

- Er mogen géén kopieën worden gemaakt van data uit de API, dit zodat overheden de mogelijkheid hebben data te depubliceren (bijvoorbeeld bij het per abuis publiceren van persoonsgegevens)
- Er mag wel gebruik worden gemaakt van caching voor het verbeteren van performance, maar er mag niet langer worden gecachet dan aangegeven in de caching header van het response-object. Ofwel de bron bepaald hoe lang er gecachet mag worden.

## Het koppelen van een bron

Er zijn twéé manieren waarop een bron kan worden gekoppeld, beide vereisen dat de bron beschikt over een koppelvlak dat benaderbaar is door de OpenWoo.app.

1. **De bron biedt een reeds door OpenWoo.app ondersteund koppelvlak aan of ontwikkelt deze.** Dit is vanuit de OpenWoo.app natuurlijk de snelste route
2. **OpenWoo.app ontwikkeld ondersteuning voor een bron specifiek koppelvlak.** Deze route vergt minder van de aan te sluiten bron (die zal doorgaans al over een koppelvlak zoals een API beschikken). Maar vergt inspanning aan de kant van de OpenWoo.app leveranciers. Daarnaast zal de OpenWoo.app community akkoord moeten gaan met de ontwikkeling en bekostiging (in de praktijk zal de aanvragen worden gevraagd de kosten te dekken).

## Het koppelen van een organisatie

Zie voor het koppelen van een organisatie de [naar productiepagina](../techniek/Productie.md).
