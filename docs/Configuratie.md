# Configuratie
Om te zorgen dat de Open WOO Website goed werkt, is het belangrijk dat de onderliggende (zaak)systemen op de juiste manier zijn geconfigureerd. Zo kunnen zij de informatie aanleveren die op de voorkant benodigd is voor het opbouwen van de index. Daarbij is het belangrijk om te weten welke waarden waar worden gebruikt en wat het effect is van configuratiekeuzes.

## Gebruik variabelen

**Zoekbalk**

- Onder 'jaar' worden alleen de jaren weergegeven waarbinnen er een WOO-publicatie bestaat.
- Onder 'Onderwerp' worden de categorieën weergegeven waarvoor een WOO-publicatie bestaat.

![img_2.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/img_2.png)

**Cards**

In de cards worden de properties op de volgende plekken weergegeven.

![img_1.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/img_1.png)

**Overzichtspagina**

In de overzichtspagina worden de properties op de volgende plekken weergegeven.

![img_4.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/img_4.png)

## Algemene inrichting zaaksysteem

Voor het kunnen publiceren van zaken vanuit het zaaksysteem is het belangrijk dat het zaaksysteem beschikt over de juiste inrichting. Indien er via de Common Gateway (met Open WOO-plugin) zaken worden opgehaald, gelden daarvoor de volgende spelregels.

Zaken dienen te beschikken over de volgende properties (zaakattributen):

| Property            | Verplicht | Gebruik                                                                                                 | Toegestane waardes |
|---------------------|-----------|---------------------------------------------------------------------------------------------------------|--------------------|
| woo_publicatiedatum | Ja        | De datum vanaf wanneer de publicatie wordt gepubliceerd, bij leeg wordt de publicatie niet gepubliceerd | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12) or NULL. If a date is presented instead of a date-time, the time will be automatically set to 00:00. |
| woo_categorie       | Ja        | De categorie van de WOO-publicatie                                                                      | One of ("Wetten en algemeen verbindende voorschriften", "Overige besluiten van algemene strekking", "Ontwerpen van wet- en regelgeving met adviesaanvraag", "Organisatie en werkwijze", "Bereikbaarheidsgegevens", "Bij vertegenwoordigende organen ingekomen stukken", "Vergaderstukken Staten-Generaal", "Vergaderstukken decentrale overheden", "Agenda's en besluitenlijsten bestuurscolleges", "Adviezen", "Convenanten", "Jaarplannen en jaarverslagen", "Subsidieverplichtingen anders dan met beschikking", "WOO-verzoeken en -besluiten", "Onderzoeksrapporten", "Beschikkingen", "Klachtoordelen") |
| woo_thema           | Nee       | Een optionele titel van het thema waar de zaak onder valt                                               | string, max 255 characters |
| woo_samenvatting    | Nee       | De KORTE samenvatting van de publicatie zoals online getoond                                            | string, max 255 characters |
| woo_beschrijving    | Nee       | De UITGEBREIDE beschrijving van de publicatie zoals online getoond                                      | string, max 2555 characters |
| woo_datum_besluit   | Nee       |                                                                                                         | string formatted as date-time (e.g., 2023-09-12 09:00) or string formatted as date (e.g., 2023-09-12). If a date is presented instead of a date-time, the time will be automatically set to 00:00. |

Daarnaast is het mogelijk om bijlagen van publicaties te clusteren aan de hand van labels.

> **Note**
> Op dit moment doet Open WOO nog niets met thema's behalve ze weergeven bij de zaak. Er zijn echter plannen om in de toekomst een thema-overzichtspagina te maken en WOO-publicaties filterbaar te maken op thema.

## Mapping van XXLLNC zaken (opgehaald via search endpoint)
Gebaseerd op: [XXLLNC zaken mapping](https://github.com/CommonGateway/WooBundle/blob/main/Installation/Mapping/woo.xxllncCaseToWoo.mapping.json)

| WOO-publicatie (conform open web) | Zaaksysteemveld                                 |
|-----------------------------------|-------------------------------------------------|
| UUID                              | id                                              |
| ID                                | id                                              |
| Object_ID                         | object_id                                       |
| Portal_url                        | {{config}}/{{id}}                               |
| Behandelend_bestuursorgaan        | {{config}}                                      |
| Ontvanger_informatieverzoek       | (Empty)                                         |
| Volgnummer                        | (Empty)                                         |
| Titel                             | values.case.subject_external                    |
| Beschrijving                      | values.attribute.woo_beschrijving               |
| Samenvatting                      | values.attribute.woo_samenvatting               |
| Categorie                         | values.attribute.woo_categorie                  |
| Verzoeker                         | (Empty)                                         |
| Ontvangstdatum                    | values.case.date_of_registration                |
| Besluitdatum                      | values.attribute.woo_datum_besluit              |
| Behandelstatus                    | values.case.status                              |
| Publicatiedatum                   | values.attribute.woo_publicatiedatum            |
| Besluit                           | is de bijlage gelabeld als "besluit"            |
| Termijnoverschrijding             | case.date_target - case.date_of_completion      |
| URL_informatieverzoek             | is de bijlage gelabeld als "informatieverzoek"  |
| URL_inventarisatielijst           | is de bijlage gelabeld als "inventarisatielijst"|
| URL_besluit                       | is de bijlage gelabeld als "besluit"            |
| Geografisch_gebied                | (Empty)                                         |
| BAG_ID                            | (Empty)                                         |
| BGT_ID                            | (Empty)                                         |
| Postcodegebied                    | (Empty)                                         |
| Adres                             | (Empty)                                         |
| COORDS                            | (Empty)                                         |
| Geografische_positie              | (Empty)                                         |
| Bijlagen                          | values.attribute.test_documenten                |

Bijlagen

| Bijlage                            | values.attribute.test_documenten                |
|------------------------------------|-------------------------------------------------|
| Type_Bijlage                       | mimetype                                        |
| Status_Bijlage                     | accepted                                        |
| Tijdstip_laatste_wijziging_bijlage | (Empty)                                         |
| Titel_Bijlage                      | filename                                        |
| URL_Bijlage                        | (Empty)                                         |

De plek waarop bijlagen worden weergegeven wordt bepaald door de labels.

| Label                  | Effect van label                                                                                          |
|------------------------|-----------------------------------------------------------------------------------------------------------|
| woo_publicatie         | Alleen documenten met dit label worden weergegeven op de voorkant onder bijlage                           |
| woo_informatieverzoek  | Documenten met dit label worden weergegeven onder de titel 'informatieverzoek' in plaats van onder bijlagen|
| woo_inventarisatielijst| Documenten met dit label worden weergegeven onder de titel 'inventarisatielijst' in plaats van onder bijlagen|
| woo_besluit            | Documenten met dit label worden weergegeven onder de titel 'besluit' in plaats van onder bijlagen          |

Let op: Alleen documenten die zijn gelabeld als woo_publiceren worden daadwerkelijk overgenomen door de plugin.
