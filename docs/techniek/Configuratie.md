# Configuratie

Om te zorgen dat de OpenWoo-website goed werkt, is het belangrijk dat de onderliggende (zaak)systemen op de juiste manier zijn geconfigureerd. Zo kan het zaaksysteem de informatie aanleveren die op de voorkant nodig is voor het opbouwen van de index. Daarbij is het belangrijk om te weten welke waarden waar worden gebruikt en wat het effect is van configuratiekeuzes.

- [Configuratie](#configuratie)
  - [Gebruik variabelen](#gebruik-variabelen)
  - [Algemene inrichting zaaksysteem](#algemene-inrichting)
  - [Categorieën](#eigenschappen-naar-categorie)
  - [Bijlagen](#documentenbijlagen)
  - [Mapping ZGW](#mapping-zgw)
  - [Mapping vanuit zaaksysteem.nl search endpoint](#mapping-vanuit-zaaksysteemnl-search-endpoint)

## Gebruik variabelen

Centraal in de Open WOO Website staat het publicatieobject, het publicatieobject vertegenwoordigt een Woo-publicatie, zijnde een verzoek, besluit, convenant of overige (een definitie van het Woo-publicatieobject vind je onder [Architectuur](/docs/techniek/Architectuur.md)).

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

## Algemene inrichting

Voor het kunnen publiceren van zaken vanuit het zaaksysteem is het belangrijk dat het zaaksysteem beschikt over de juiste inrichting. Indien er via de [OpenWoo service](https://openwoo.openservices.online/) zaken worden opgehaald, gelden daarvoor de volgende spelregels.

- OpenWoo.app kijkt alleen naar eigenschappen die vooraf worden gegaan door `woo_`
- Er zijn algemene eigenschappen (geldend voor alle categorieën) en specifieke eigenschappen (alleen geldend voor bepaalde categorieën)
- Voor de gedefinieerde categorieën volgen we de [informatiecategorieen-en-werkdefinities](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/informatiecategorieen-en-werkdefinities) van koop
- Voor de velden volgen we daarnaast ook [DiWoo](https://standaarden.overheid.nl/diwoo/metadata/diwoo-handleiding-sitemapindex-en-sitemaps).
- Naast deze categorieën mag een organisatie ook eigen categorieën voeren, maar dan worden alleen de algemene eigenschappen over genomen

Het is niet per definitie nodig om alle eigenschappen in het bronsysteem handmatig in te regelen en vullen, sommige eigenschappen kunnen worden overgenomen uit algemene metadata van een bron systeem. Kijk onder [Mappings](#mappings) om te zien welke eigenschappen automatisch worden gevuld.

### Algemene eigenschappen

Een aantal zaakattributen zijn noodzakelijk voor het voor het goed werken van de OpenWoo.app, ze zijn dan ook altijd verplicht ongeacht de Woo categorie.  

| Property            | Verplicht | Gebruik                                                                                                 | Toegestane waardes |
|---------------------|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| woo_titel           | Ja        | De titel van de publicatie zoals online getoond                                                         | string, max 255 characters |
| woo_publicatiedatum | Ja        | De datum vanaf wanneer de publicatie wordt gepubliceerd, bij leeg wordt de publicatie niet gepubliceerd | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12) or NULL. If a date is presented instead of a date-time, the time will be automatically set to 00:00. |
| woo_categorie       | Ja        | De categorie van de WOO-publicatie                                                                      | One of ("Wetten en algemeen verbindende voorschriften", "Overige besluiten van algemene strekking", "Ontwerpen van wet- en regelgeving met adviesaanvraag", "Organisatie en werkwijze", "Bereikbaarheidsgegevens", "Bij vertegenwoordigende organen ingekomen stukken", "Vergaderstukken Staten-Generaal", "Vergaderstukken decentrale overheden", "Agenda's en besluitenlijsten bestuurscolleges", "Adviezen", "Convenanten", "Jaarplannen en jaarverslagen", "Subsidieverplichtingen anders dan met beschikking", "Woo-verzoeken en -besluiten", "Onderzoeksrapporten", "Beschikkingen", "Klachtoordelen") |
| woo_thema           | Nee       | Een optionele titel van het thema waar de zaak onder valt                                               | string, max 255 characters |
| woo_samenvatting    | Nee       | De KORTE samenvatting van de publicatie zoals online getoond                                            | string, max 255 characters |
| woo_beschrijving    | Nee       | De UITGEBREIDE beschrijving van de publicatie zoals online getoond                                      | string, max 2555 characters |

### Specifieke eigenschappen

| Eigenschap                | Verplicht | Gebruik                                                                          | Toegestane waardes |
|---------------------------|-----------|----------------------------------------------------------------------------------|--------------------|
| woo_termijnoverschrijding | Nee | | |
| woo_datum_besluit         | Nee       | De datum waarop het besluit over de zaak genomen is                              | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12). If a date is presented instead of a date-time, the time will be automatically set to 00:00. |
| woo_datum_ontvangst       | Nee       | De datum waarop de zaak genomen is geregistreerd                                 | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12). If a date is presented instead of a date-time, the time will be automatically set to 00:00. |
| woo_organisatieonderdeel  | Nee       | Vrije invulling tot op welk niveau ‘organisatieonderdeel’ wordt geïnterpreteerd. | string, max 2555 characters |
| woo_functiebenaming       | Nee       |  | string, max 255 characters |
| woo_gedraging             | Nee       |  | string, max 2555 characters |
| woo_bevindingen           | Nee       |  | string, max 2555 characters |
| woo_oordeel               | Nee       |  | string, max 2555 characters |
| woo_conclusies            | Nee       |                                                                                 | string, max 2555 characters |
| woo_opdrachtgever         | Nee       |                                                                                 | string, max 2555 characters |
| woo_onderdeel_taak        | Nee       |                                                                                 | string, max 2555 characters |

> **Note**
> Op dit moment doet OpenWoo nog niets met thema's behalve ze weergeven bij de zaak. Er zijn echter plannen om in de toekomst een thema-overzichtspagina te maken en Woo-publicaties filterbaar te maken op thema.

### Eigenschappen naar categorie

| Categorie | Omschrijving                                 | Eigenschappen                                                                                                                                                       | KOOP                                                                                                                                                                                                    |
|-----------|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1a        | Wetten en algemeen verbindende voorschriften | Valt buiten de OpenWoo.app                                                                                                                                          | Valt buiten de OpenWoo.app                                                                                                                                                                                                        |
| 1b        | Overige besluiten van algemene strekking     | Valt buiten de OpenWoo.app                                                                                                                                          | Valt buiten de OpenWoo.app                                                                                                                                                                              |
| 1c        | Ontwerpen van wet- en regelgeving met adviesaanvraag | Valt buiten de OpenWoo.app                                                                                                                                          | Valt buiten de OpenWoo.app                                                                                                                                                                              |
| 1d        | Organisatie en werkwijze                     | Valt buiten de OpenWoo.app                                                                                                                                          | Valt buiten de OpenWoo.app                                                                                                                                                                              |
| 1e        | Bereikbaarheidsgegevens                      | Valt buiten de OpenWoo.app                                                                                                                                          |                                                                                                                                                                                                         |
| 2a        | Bij vertegenwoordigende organen ingekomen stukken | Nog niet vastgesteld                                                                                                                                                | Nog niet vastgesteld                                                                                                                                                                                    |
| 2b        | Vergaderstukken Staten-Generaal              | Valt buiten de OpenWoo.app                                                                                                                                          | Valt buiten de OpenWoo.app                                                                                                                                                                              |
| 2c        | Vergaderstukken decentrale overheden         | Geen aanvullende eigenschappen                                                                                                                                      | [definitie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/publicaties/2023/07/20/werkdefinitie-woo-informatiecategorie-vergaderstukken-decentrale-overheden) |
| 2d        | Agenda's en besluitenlijsten bestuurscolleges | Geen aanvullende eigenschappen                                                                                                                                      | [definitie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/richtlijnen/2023/11/30/werkdefinitie-agendas-en-besluitenlijsten-bestuurscolleges)                 |
| 2e        | Adviezen                                     | `woo_oprdachtgever`, `woo_onderdeel_taak`                                                                                                                           | [defintiie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/richtlijnen/2024/1/11/beslishulp-onderzoeksrapporten)                                              |
| 2f        | Convenanten                                  | Geen aanvullende eigenschappen                                                                                                                                      | [definitie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/richtlijnen/2024/2/16/hulpmiddel-convenanten)                                                      |
| 2g        | Jaarplannen en jaarverslagen                 | Nog niet vastgesteld                                                                                                                                                | Nog niet vastgesteld                                                                                                                                                                                    |
| 2h        | Subsidieverplichtingen anders dan met beschikking | Nog niet vastgesteld                                                                                                                                                | Nog niet vastgesteld                                                                                                                                                                                    |
| 2i        | Woo-verzoeken en -besluiten                  | `woo_datum_besluit`, `woo_datum_ontvangst`,`woo_termijnoverschrijding`                                                                                              | [definitie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/publicaties/2023/07/20/werkdefinitie-woo-informatiecategorie-woo-verzoeken-en--besluiten)          |
| 2j        | Onderzoeksrapporten                          | Geen aanvullende eigenschappen                                                                                                                                      | [definitie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/richtlijnen/2024/1/11/beslishulp-onderzoeksrapporten)                                              |
| 2k        | Beschikkingen                                | nog niet vastgesteld                                                                                                                                                | Nog niet vastgesteld                                                                                                                                                                                    |
| 2l        | Klachtoordelen                               | `woo_datum_ontvangst`, `woo_organisatieonderdeel`, `woo_functiebenaming`, `woo_gedraging`, `woo_bevindingen`, `woo_oordeel`, `woo_conclusies`, `woo_datum_besluit`,`woo_termijnoverschrijding` | [definitie](https://www.open-overheid.nl/onderwerpen/actieve-openbaarmaking/instrumenten-en-diensten/richtlijnen/2024/2/16/werkdefinitie-klachtoordelen)                                                |

> **Note**
> Nog niet vastgestelde categorieën of categorieën die buiten de OpenWoo.app vallen kunnen wel worden ontsloten via OpenWoo.app, daarbij kan gebruik worden gemaakt van de algemene eigenschappen en documenten/bijlagen. De specifieke eigenschappen worden echter pas opgenomen op het moment dat de categorie door KOOP is vastgesteld.

### Documenten/Bijlagen

Bijlagen nemen een bijzondere positie in binnen de OpenWoo.app, ze vormen de kern van de naar de bezoeker over te dragen informatie en zijn het centrale onderdeel van de Woo. De manier waarop deze worden getoond wordt beïnvloed door labels. Daarvoor gelden de volgende regels:

| Label                   | Effect van label                                                                                              |
|-------------------------|---------------------------------------------------------------------------------------------------------------|
| woo_publicatie          | Alleen documenten met dit label worden weergegeven op de voorkant onder bijlage                               |
| woo_informatieverzoek   | Documenten met dit label worden weergegeven onder de titel 'Informatieverzoek' in plaats van onder bijlagen   |
| woo_inventarisatielijst | Documenten met dit label worden weergegeven onder de titel 'Inventarisatielijst' in plaats van onder bijlagen |
| woo_besluit             | Documenten met dit label worden weergegeven onder de titel 'Besluit' in plaats van onder bijlagen             |
| woo_convenant           | Documenten met dit label worden weergegeven onder de titel 'Convenant' in plaats van onder bijlagen           |

> **Spelregels omtrent labels**
>
> - Het is mogelijk om als organisatie zelf extra labels toe te voegen, als deze het juiste format volgen `woo_[[labelnaam]]]` worden deze automatisch overgenomen in de weergave door boven de rij `Bijlagen` een extra rij toe te voegen in de form `[[labelnaam]]: Alle hieraan gekoppelde bestanden`.
> - Bestanden die geen andere label hebben dan `woo_publicatie` worden getoond in de rij `Bijlagen`.
> - Als bestanden meerdere labels hebben worden ze op meerdere plekken getoond (met uitzondering van `Bijlagen` daar worden alleen bestanden getoond zonder label)
> - Bestanden zonder het label `woo_publicatie` worden niet getoond (ook al zijn ze wel van een ander `woo_`-label voorzien)

## Mappings

### Mapping ZGW

Gebaseerd op: [VNG ZGW Standaard](https://vng.nl/projecten/zaakgericht-werken-api)

### Mapping vanuit zaaksysteem.nl search endpoint

Gebaseerd op: [xxllc-zaken mapping](https://github.com/CommonGateway/WooBundle/blob/main/Installation/Mapping/woo.xxllncCaseToWoo.mapping.json)

| Eigenschap                | Zaaksysteem.nl eigenschap               |
|---------------------------|-----------------------------------------|
| woo_titel                 | values.case.subject_external            |
| woo_termijnoverschrijding | case.dateTarget - case.dateOfCompletion |
| woo_datum_ontvangst       | values.case.date_of_registration        |
| woo_id                    | object_id        |

> **Note**
> Voor de eigenschapen word verder gekeken naar values.attribute.[`eigenschap e.g. woo_beschrijving`]

Bijlagen

| Bijlage                            | values.attribute.woo_publicatie                 |
|------------------------------------|-------------------------------------------------|
| categorie                          | (Empty)                                         |
| type                               | mimetype                                        |
| status                             | accepted                                        |
| titel                              | filename                                        |
| url                                | {{fetchedFromZaaksysteem}}                      |

## Configuratie

Als laatste zijn er ook een aantal waarde op het publicatieobject die worden gezet aan de hand van configuratie in de [OpenWoo service](https://openwoo.openservices.online/), te weten

| Eigenchap        | Invulling                           | Gebruik |
|------------------|-------------------------------------|-------------------|
| portalUrl        | {{config}}/{{id van de publicatie}} | Metadata                              |
| organisatie.naam | {{config}}                          | Metadata                              |
| organisatie.oin  | {{config}}                          | Metadata                              |
