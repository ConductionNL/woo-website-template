# Configuratie

## Algemene inrichting zaaksystem
Voor het kunnen publiceren van zaken vanuit het zaaksysteem is het belangrijk dat het zaaksysteem beschikt over de juiste inrichting. Indien er via de Common Gateway (met Open Woo plugin) zaken worden opgehaald gelden daarvoor de volgende spelregels.

Zaken dienen te beschikken over de volgende properties (zaak attributen):

| Property            | Verplicht | Gebruik                                                                                                 | Toegestane waardes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
|---------------------|-----------|---------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| woo_publicatiedatum | Ja        | De datum vanaf wanneer de publicatie wordt gepubliceerd, bij leeg wordt de publicatie niet gepubliceerd | string formated as date-time (e.g. 2023-09-12 09:00) or string formated as date (e.g. 2023-09-12) or NULL. if a date is presented instead of a date-time the time wil be automaticly set to 00:00.                                                                                                                                                                                                                                                                                                                                                                                                         |
| woo_categorie       | Ja        | De categorie van de WOO-Publicatie                                                                      | One of ("Wetten en algemeen verbindende voorschriften","Overige besluiten van algemene strekking","Ontwerpen van wet- en regelgeving met adviesaanvraag","Organisatie en werkwijze","Bereikbaarheidsgegevens","Bij vertegenwoordigende organen ingekomen stukken","Vergaderstukken Staten-Generaal","Vergaderstukken decentrale overheden","Agenda's en besluitenlijsten bestuurscolleges","Adviezen","Convenanten","Jaarplannen en jaarverslagen","Subsidieverplichtingen anders dan met beschikking","WOO-verzoeken en -besluiten","Onderzoeksrapporten","Beschikkingen","Klachtoordelen")               |
| woo_thema           | Nee       | Een optionele titel van thema waar de zaak onder valt                                                   | string, max 255 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| woo_samenvatting    | Nee       | De KORTE samenvatting van de publicatie zo als online getoond                                           | string, max 255 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| woo_beschrijving    | Nee       | De UITGEBREIDE beschrijving van de publicatie zo als online getoond                                     | string, max 2555 characters                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| woo_datum_besluit   | Nee       |                                                                                                         | string formated as date-time (e.g. 2023-09-12 09:00) or string formated as date (e.g. 2023-09-12). if a date is presented instead of a date-time the time wil be automaticly set to 00:00.                                                                                                                                                                                                                                                                                                                                                                                                                 |

Daarnaast is het mogelijk om bijlagen van publicaties te clusteren aan de hand van labels.

> **Note**
> Op dit moment doet Open WOO nog niets met thema's behalve ze weergeven bij de zaak. Er zijn echter plannen om in de toekomst een thema overzichtspagina te maken en WOO-publicaties filterbaar te maken op thema.

## Mapping van XXLLNC zaken (opgehaald via search endpoint)
Gebaseerd op: https://github.com/CommonGateway/WooBundle/blob/main/Installation/Mapping/woo.xxllncCaseToWoo.mapping.json

| Woo publicatie (conform open web) | Zaaksysteem veld                                 |
|-----------------------------------|--------------------------------------------------|
| UUID                              | id                                               |
| ID                                | id                                               |
| Object_ID                         | object_id                                        |
| Portal_url                        | {{config}}/{{id}}                                |
| Behandelend_bestuursorgaan        | {{config}}                                       |
| Ontvanger_informatieverzoek       | (Empty)                                          |
| Volgnummer                        | (Empty)                                          |
| Titel                             | values.case.subject_external                     |
| Beschrijving                      | values.attribute.woo_beschrijving                |
| Samenvatting                      | values.attribute.woo_samenvatting         |
| Categorie                         | values.attribute.woo_categorie                   |
| Verzoeker                         | (Empty)                                          |
| Ontvangstdatum                    | values.case.date_of_registration                 |
| Besluitdatum                      | values.attribute.woo_datum_besluit               |
| Behandelstatus                    | values.case.status                               |
| Publicatiedatum                   | values.attribute.woo_publicatiedatum             |
| Besluit                           | is de bijlage gelabeld als "besluit"             |
| Termijnoverschrijding             | case.date_target - case.date_of_completion       |
| URL_informatieverzoek             | is de bijlage gelabeld als "informatie verzoek"  |
| URL_inventarisatielijst           | is de bijlage gelabeld als "inventarisatielijst" |
| URL_besluit                       | is de bijlage gelabeld als "besluit"             |
| Geografisch_gebied                | (Empty)                                          |
| BAG_ID                            | (Empty)                                          |
| BGT_ID                            | (Empty)                                          |
| Postcodegebied                    | (Empty)                                          |
| Adres                             | (Empty)                                          |
| COORDS                            | (Empty)                                          |
| Geografische_positie              | (Empty)                                          |
| Bijlagen                          | values.attribute.test_documenten                 |

Bijlagen

| Bijlage                            | values.attribute.test_documenten                       |
|------------------------------------|--------------------------------------------------------|
| Type_Bijlage                       | mimetype                                               |
| Status_Bijlage                     | accepted                                               |
| Tijdstip_laatste_wijziging_bijlage | (Empty)                                                |
| Titel_Bijlage                      | filename                                               |
| URL_Bijlage                        | (Empty)                                                |

De plek waarop bijlagen worden weergegeven worden bepaald door de labels. 

| Labbel                  | Effect van labbel                                                                                             |
|-------------------------|---------------------------------------------------------------------------------------------------------------|
| woo_publicatie          | Alleen documenten met dit label worden weergegeven op de voorkant on bijlage                                  |
| woo_informatieverzoek   | Documenten met dit label worden weergegeven onder de titel `informatie verzoek` in plaats van onder bijlagen  |
| woo_inventarisatielijst | Documenten met dit label worden weergegeven onder de titel `inventarisatielijst` in plaats van onder bijlagen |
| woo_besluit             | Documenten met dit label worden weergegeven onder de titel `besluit` in plaats van onder bijlagen             |

Let op: Alleen documenten die zijn gelabeld als woo_publiceren worden daadwerkenlijk overgenomen door de plugin