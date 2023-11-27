# Configuratie

Om te zorgen dat de Open WOO Website goed werkt, is het belangrijk dat de onderliggende (zaak)systemen op de juiste manier zijn geconfigureerd. Zo kunnen zij de informatie aanleveren die op de voorkant benodigd is voor het opbouwen van de index. Daarbij is het belangrijk om te weten welke waarden waar worden gebruikt en wat het effect is van configuratiekeuzes.

- [Gebruik variabelen](#gebruik-variabelen)
- [Algemene inrichting van zaaksysteem](#algemene-inrichting-zaaksysteem)
- [Mapping vanuit ZGW](#mapping-zgw)
- [Mapping vanuit zaaksysteem.nl search endpoint](#mapping-vanuit-zaaksysteemnl-search-endpoint)

## Gebruik variabelen

Centraal in de Open WOO Website staat het publicatieobject, het publicatieobject vertegenwoordigt een Woo-publicatie, zijnde een verzoek, besluit, convenant of overige (een definitie van het Woo-publicatieobject vind je onder [Architectuur](./Architectuur.md)).

**Zoekbalk**

- Onder 'jaar' worden alleen de jaren weergegeven waarbinnen er een WOO-publicatie bestaat.
- Onder 'Categorie' worden de categorieën weergegeven waarvoor een WOO-publicatie bestaat.

![img_2.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/img_2.png)

**Cards**

In de cards worden de properties op de volgende plekken weergegeven.

![img_1.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/img_1.png)

**Overzichtspagina**

In de overzichtspagina worden de properties op de volgende plekken weergegeven.

![img_4.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/img_4.png)

## Algemene inrichting zaaksysteem

Voor het kunnen publiceren van zaken vanuit het zaaksysteem is het belangrijk dat het zaaksysteem beschikt over de juiste inrichting. Indien er via de Common Gateway (met Open Woo-plugin) zaken worden opgehaald, gelden daarvoor de volgende spelregels.

Zaken dienen te beschikken over de volgende properties (zaakattributen):

| Property            | Verplicht | Gebruik                                                                                                 | Toegestane waardes |
|---------------------|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| woo_publicatiedatum | Ja        | De datum vanaf wanneer de publicatie wordt gepubliceerd, bij leeg wordt de publicatie niet gepubliceerd | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12) or NULL. If a date is presented instead of a date-time, the time will be automatically set to 00:00. |
| woo_categorie       | Ja        | De categorie van de WOO-publicatie                                                                      | One of ("Wetten en algemeen verbindende voorschriften", "Overige besluiten van algemene strekking", "Ontwerpen van wet- en regelgeving met adviesaanvraag", "Organisatie en werkwijze", "Bereikbaarheidsgegevens", "Bij vertegenwoordigende organen ingekomen stukken", "Vergaderstukken Staten-Generaal", "Vergaderstukken decentrale overheden", "Agenda's en besluitenlijsten bestuurscolleges", "Adviezen", "Convenanten", "Jaarplannen en jaarverslagen", "Subsidieverplichtingen anders dan met beschikking", "Woo-verzoeken en -besluiten", "Onderzoeksrapporten", "Beschikkingen", "Klachtoordelen") |
| woo_thema           | Nee       | Een optionele titel van het thema waar de zaak onder valt                                               | string, max 255 characters |
| woo_samenvatting    | Nee       | De KORTE samenvatting van de publicatie zoals online getoond                                            | string, max 255 characters |
| woo_beschrijving    | Nee       | De UITGEBREIDE beschrijving van de publicatie zoals online getoond                                      | string, max 2555 characters |
| woo_datum_besluit   | Nee       | De datum waarop het besluit over de zaak genomen is                                                     | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12). If a date is presented instead of a date-time, the time will be automatically set to 00:00. |
| woo_datum_ontvangst | Nee       | De datum waarop de zaak genomen is geregistreerd                                                        | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12). If a date is presented instead of a date-time, the time will be automatically set to 00:00. |

Daarnaast is het mogelijk om bijlagen van publicaties te clusteren aan de hand van labels.

> **Note**
> Op dit moment doet Open WOO nog niets met thema's behalve ze weergeven bij de zaak. Er zijn echter plannen om in de toekomst een thema-overzichtspagina te maken en WOO-publicaties filterbaar te maken op thema.

## Categorieën

Hoewel we er vanuit gaan dat categorieën voldoen aan de onder [Algemene inrichting zaaksysteem]() vermelde kenmerken voor `woo_categorie` is het technisch mogelijk voor organisaties om eigen categorieën te hanteren. Het toevoegen van een eigen categorie (e.g. algoritme's of dataset) leidt er automatisch toe dat deze in de voorkant wordt opgenomen in de `onderwerpen` lijst (mits er ten minimale één publicatietype van deze categorie gepubliceerd is). Deze toegevoegde categorie en publicaties daarin worden echter **NIET** doorgegeven aan de landelijke index van KOOP.

## Bijlagen

Bijlagen nemen een bijzondere positie in binnen de Open Woo Website, ze vormen de kern van de naar de bezoeker over te dragen informatie en zijn het centrale onderdeel van de Woo. De manier waarop deze worden getoond wordt beïnvloed door labels. Daarvoor gelden de volgende regels:

| Label                   | Effect van label                                                                                              |
|-------------------------|---------------------------------------------------------------------------------------------------------------|
| woo_publicatie          | Alleen documenten met dit label worden weergegeven op de voorkant onder bijlage                               |
| woo_informatieverzoek   | Documenten met dit label worden weergegeven onder de titel 'Informatieverzoek' in plaats van onder bijlagen   |
| woo_inventarisatielijst | Documenten met dit label worden weergegeven onder de titel 'Inventarisatielijst' in plaats van onder bijlagen |
| woo_besluit             | Documenten met dit label worden weergegeven onder de titel 'Besluit' in plaats van onder bijlagen             |
| woo_convenant           | Documenten met dit label worden weergegeven onder de titel 'Convenant' in plaats van onder bijlagen           |

> **Spelregels omtrend labels**
>
> - Het is mogelijk om als organisatie zelf extra labels toe te voegen, als deze het juist format volgen `woo_[[labelnaam]]]` worden deze automatisch overgenomen in de weergave door boven de rij `Bijlagen` een extra rij toe te voegen in de form `[[labelnaam]]: Alle hieraan gekoppelde bestanden`.
> - Bestanden die geen andere label hebben dan `woo_publicatie` worden getoond onder bijlagen
> - Als bestanden meerdere labels hebben worden ze op meerdere plekken getoond (met uitzondering van bijlagen)
> - Bestanden zonder het label `woo_publicatie` worden niet getoond (ook al zijn ze wel van een ander `woo_` label voorzien)

## Mapping ZGW

Gebaseerd op: [VNG ZGW Standaard](https://vng.nl/projecten/zaakgericht-werken-api)

| WOO Publicatie Object      | ZGW Zaak                                         | Gebruik                               |
|----------------------------|--------------------------------------------------|---------------------------------------|
| id                         | id                                               | Metadata                              |
| kenmerk                    | objectId                                         | Metadata, Detail pagina               |
| portalUrl                  | {{config}}/{{id}}                                | Metadata                              |
| behandelendBestuursorgaan  | {{config}}                                       | Metadata                              |
| ontvangerInformatieverzoek | (Empty)                                          | Metadata                              |
| volgnummer                 | (Empty)                                          | n.v.t                                 |
| titel                      | values.case.subject_external                     | Metadata, Index pagina, Detail pagina |
| beschrijving               | values.attribute.woo_beschrijving                | Metadata, Index pagina, Detail pagina |
| samenvatting               | values.attribute.woo_samenvatting                | Metadata, Index pagina, Detail pagina |
| categorie                  | values.attribute.woo_categorie                   | Metadata, Index pagina, Detail pagina |
| verzoeker                  | (Empty)                                          | n.v.t                                 |
| ontvangstdatum             | values.case.date_of_registration                 | Metadata, Detail pagina               |
| besluitdatum               | values.attribute.woo_datum_besluit               | Metadata                              |
| behandelstatus             | values.case.status                               | Metadata, Detail pagina               |
| publicatiedatum            | values.attribute.woo_publicatiedatum             | Metadata, Index pagina, Detail pagina |
| besluit                    | is de bijlage gelabeld als "besluit"             | Detail pagina                         |
| termijnoverschrijding      | case.dateTarget - case.dateOfCompletion          | Detail pagina                         |
| urlInformatieverzoek       | is de bijlage gelabeld als "informatieverzoek"   | Metadata, Detail pagina               |
| urlInventarisatielijst     | is de bijlage gelabeld als "inventarisatielijst" | Metadata, Detail pagina               |
| urlBesluit                 | is de bijlage gelabeld als "besluit"             | Metadata, Detail pagina               |
| geografischGebied          | (Empty)                                          | n.v.t                                 |
| bagId                      | (Empty)                                          | n.v.t                                 |
| bgtId                      | (Empty)                                          | n.v.t                                 |
| postcodegebied             | (Empty)                                          | n.v.t                                 |
| adres                      | (Empty)                                          | n.v.t                                 |
| coords                     | (Empty)                                          | n.v.t                                 |
| geografischePositie        | (Empty)                                          | n.v.t                                 |
| bijlagen                   | values.attribute.test_documenten                 | Metadata, Detail pagina               |

## Mapping vanuit zaaksysteem.nl search endpoint

Gebaseerd op: [XXLLNC zaken mapping](https://github.com/CommonGateway/WooBundle/blob/main/Installation/Mapping/woo.xxllncCaseToWoo.mapping.json)

| WOO Publicatie Object    | Zaaksysteemveld                                 | Gebruik                               |
|---------------------------|--------------------------------------------------|---------------------------------------|
| id                         | id                                               | Metadata                              |
| kenmerk                    | objectId                                         | Metadata, Detail pagina               |
| portalUrl                  | {{config}}/{{id}}                                | Metadata                              |
| behandelendBestuursorgaan  | {{config}}                                       | Metadata                              |
| ontvangerInformatieverzoek | (Empty)                                          | Metadata                              |
| volgnummer                 | (Empty)                                          | n.v.t                                 |
| titel                      | values.case.subject_external                     | Metadata, Index pagina, Detail pagina |
| beschrijving               | values.attribute.woo_beschrijving                | Metadata, Index pagina, Detail pagina |
| samenvatting               | values.attribute.woo_samenvatting                | Metadata, Index pagina, Detail pagina |
| categorie                  | values.attribute.woo_categorie                   | Metadata, Index pagina, Detail pagina |
| verzoeker                  | (Empty)                                          | n.v.t                                 |
| ontvangstdatum             | values.case.date_of_registration                 | Metadata, Detail pagina               |
| besluitdatum               | values.attribute.woo_datum_besluit               | Metadata                              |
| behandelstatus             | values.case.status                               | Metadata, Detail pagina               |
| publicatiedatum            | values.attribute.woo_publicatiedatum             | Metadata, Index pagina, Detail pagina |
| besluit                    | is de bijlage gelabeld als "besluit"             | Detail pagina                         |
| termijnoverschrijding      | case.dateTarget - case.dateOfCompletion          | Detail pagina                         |
| urlInformatieverzoek       | is de bijlage gelabeld als "informatieverzoek"   | Metadata, Detail pagina               |
| urlInventarisatielijst     | is de bijlage gelabeld als "inventarisatielijst" | Metadata, Detail pagina               |
| urlBesluit                 | is de bijlage gelabeld als "besluit"             | Metadata, Detail pagina               |
| geografischGebied          | (Empty)                                          | n.v.t                                 |
| bagId                      | (Empty)                                          | n.v.t                                 |
| bgtId                      | (Empty)                                          | n.v.t                                 |
| postcodegebied             | (Empty)                                          | n.v.t                                 |
| adres                      | (Empty)                                          | n.v.t                                 |
| coords                     | (Empty)                                          | n.v.t                                 |
| geografischePositie        | (Empty)                                          | n.v.t                                 |
| bijlagen                   | values.attribute.test_documenten                 | Metadata, Detail pagina               |

Bijlagen

| Bijlage                            | values.attribute.test_documenten                |
|------------------------------------|-------------------------------------------------|
| Type_Bijlage                       | mimetype                                        |
| Status_Bijlage                     | accepted                                        |
| Tijdstip_laatste_wijziging_bijlage | (Empty)                                         |
| Titel_Bijlage                      | filename                                        |
| URL_Bijlage                        | (Empty)                                         |
