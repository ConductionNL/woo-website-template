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

De API staat online en is beschikbaar op [https://api.gateway.commonground.nu/api/publicaties](https://api.gateway.commonground.nu/api/publicaties). Voor het stellen van zoekvragen is géén authenticatie vereist (het doel van OpenWOO.app is immers het verspreiden van openbare informatie). Er is echter wel sprake van throttling op response tijden (de API reageert langzamer) en rate-limiting (het aantal bevragingen per minuut en uur zijn beperkt) zonder authenticatie. Ook zijn alleen de GET (ophalen) acties toegestaan zonder authenticatie.

Als u vanuit uw casus een API nodig heeft zonder throttling, ratelimit of namens een organisatie wil wijzigingen (d.w.z POST, PUT, DELETE API requests wilt doen) dan kunt u een mail sturen naar <info@conduction.nl>.

### Documentatie

Voor de API is een [redoc documentatie](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/oas.yaml) beschikbaar met voorbeelden van de verschillende API-endpoints, calls en resultaten. Omdat de API daarnaast kan worden gebruikt zonder authenticatie is deze ook goed te beproeven via onze [Postman-collectie](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Woo.postman_collection.json). We raden developers van ook van harte aan om aan de hand van deze collectie te spelen en te ontwikkelen.

### Voorbeelden

In het merendeel van de gevallen zult u een zoekvraag willen uitvoeren binnen de Woo-publicaties van OpenWoo.app, het endpoint daarvoor is: <https://api.gateway.commonground.nu/api/publicaties>. Er zijn 4 voor de hand liggende zoekparameters waarmee gezocht wordt (overige opties vindt u terug in de [Redoc documentatie](https://redocly.github.io/redoc/?url=https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/oas.yaml)).

1. Op een of meerdere zoek woorden, b.v. `_search=test`
2. Op organisatie, dit gaat aan de hand van OIN (de volledige OIN-lijst vind u [hier](https://oinregister.logius.nl/oin-register)) b.v. `oin=00000001001299992000`
3. Op categorie, `categorie=Convenant`
4. Op datum, Hierbij kunt u een begin en eindatum opgeven om een periode (bijvoorbeeld jaar) te doorzoeken publicatiedatum[after]=2022-12-31T23:59:59Z&publicatiedatum[before]=2024-01-01T00:00:00Z&

````cli
GET 'https://api.gateway.commonground.nu/api/publicaties?extend[]=all&_search=Afvalwaterakkoord&_order[publicatiedatum]=desc&_limit=12&_page=1'

Response

{
    "results": [
        {
            "_id": "3c75db6d-55b5-48da-aef8-a5768dd8ec89",
            "id": "3082",
            "titel": "Afvalwaterakkoord",
            "beschrijving": null,
            "samenvatting": "In dit bestuursakkoord is afgesproken door de koepelorganisaties, dat het waterschap en de gemeenten moeten samenwerken in de afvalwaterketen &quot;als ware het één bedrijf’.",
            "categorie": "Convenant",
            "publicatiedatum": "2023-11-24 11:31:47",
            "portalUrl": "https://conductionnl.github.io/woo-website-epe/19cdec3f-896f-4765-8d62-c6c8570926b7",
            "bijlagen": [
                {                    
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
                    "hoofdthema": "Milieu",
                    "subthema": null,
                    "aanvullendThema": null
                }
            ],
            "organisatie": {
                "naam": "Gemeente Ridderkerk",
                "rsin": null,
                "tooi": null,
                "oidn": "ridderkerk",
                "id": "37165afb-0e33-4813-8f66-d504501e6128"
            },
            "metadata": {
                "volgnummer": null,
                "besluitdatum": "2022-12-21",
                "verzoek": {
                    "inventarisatielijst": {
                        "categorie": null,
                        "type": null,
                        "status": "accepted",
                        "url": "http://localhost/api/view-file/f9358a25-ee51-4079-a1d1-e98d53c4ca80",
                        "titel": "Temporarily title so a object gets created for file fetching and url genering.",
                        "id": null
                    },
                    "informatieverzoek": {
                        "categorie": null,
                        "type": null,
                        "status": "accepted",
                        "url": "http://localhost/api/view-file/f723f34c-ef3d-453b-b395-fe60b5127cde",
                        "titel": "Temporarily title so a object gets created for file fetching and url genering.",
                        "id": null
                    },
                    "besluit": {
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

Vanuit een het weergeven van een zoekformulier is het goed mogelijk dat u alleen bestaande waardes wilt weergeven (bijvoorbeeld bij jaartal of categorie). U kunt daarvoor de query-parameter gebruiken, deze vertelt u welke zoekwaarde welke resultaten opleveren.

````cli
GET 'https://api.gateway.commonground.nu/api/publicaties?_queries[]=categorie'

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

#### Klachten

| Property              | Verplicht     | Gebruik      | Toegestane waardes    |
|-----------------------|---------------|--------------|-----------------------|

### Spelregels

- Er mogen géén kopieën worden gemaakt van data uit de API, dit zodat overheden de mogelijkheid hebben data te depubliceren (bijvoorbeeld bij het per abuis publiceren van persoonsgegevens)
- Er mag wel gebruik worden gemaakt van caching voor het verbeteren van performance, maar er mag niet langer worden gecachet dan aangegeven in de caching header van het response-object. Ofwel de bron bepaald hoe lang er gecachet mag worden.

## Het koppelen van een bron

Er zijn twéé manieren waarop een bron kan worden gekoppeld, beide vereisen dat de bron beschikt over een koppelvlak dat benaderbaar is door de OpenWoo.app.

1. **De bron biedt een reeds door OpenWoo.app ondersteund koppelvlak aan of ontwikkelt deze.** Dit is vanuit de OpenWoo.app natuurlijk de snelste route
2. **OpenWoo.app ontwikkeld ondersteuning voor een bron specifiek koppelvlak.** Deze route vergt minder van de aan te sluiten bron (die zal doorgaans al over een koppelvlak zo als API beschikken). Maar vergt inspanning aan de kant van de OpenWoo.app leveranciers. Daarnaast zal de OpenWoo.app community akkoord moeten gaan met de ontwikkeling en bekostiging (in de praktijk zal de aanvragen worden gevraagd de kosten te dekken).

## Het koppelen van een organisatie

Zie voor het koppelen van een organisatie de [naar productiepagina](/docs/techniek/Productie.md).
