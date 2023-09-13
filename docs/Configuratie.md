# Configuratie

## Mapping van XXLLNC zaken (opgehaald via search endpoint)
Gebaseerd op: https://github.com/CommonGateway/WooBundle/blob/main/Installation/Mapping/woo.xxllncCaseToWoo.mapping.json

| Woo publicatie                | Zaaksysteem case                                       |
|-------------------------------|--------------------------------------------------------|
| UUID                          | case.class_uuid                                        |
| ID                            | id                                                     |
| Object_ID                     | object_id                                              |
| Portal_url                    | (Empty)                                                |
| Behandelend_bestuursorgaan    | (Empty)                                                |
| Ontvanger_informatieverzoek   | (Empty)                                                |
| Volgnummer                    | (Empty)                                                |
| Titel                         | values.case.casetype.name                               |
| Beschrijving                  | values.case.subject                                     |
| Samenvatting                  | values.case.subject                                     |
| Categorie                     | values.attribute.woo_categorie                          |
| Verzoeker                     | values.case.requestor.name                              |
| Ontvangstdatum                | values.case.date_of_registration                        |
| Besluitdatum                  | values.case.date_target                                 |
| Behandelstatus                | values.case.status                                      |
| Besluit                       | (Empty)                                                |
| Termijnoverschrijding         | (Empty)                                                |
| URL_informatieverzoek         | (Empty)                                                |
| URL_inventarisatielijst       | (Empty)                                                |
| URL_besluit                   | (Empty)                                                |
| Geografisch_gebied            | (Empty)                                                |
| BAG_ID                        | (Empty)                                                |
| BGT_ID                        | (Empty)                                                |
| Postcodegebied                | (Empty)                                                |
| Adres                         | (Empty)                                                |
| COORDS                        | (Empty)                                                |
| Geografische_positie          | (Empty)                                                |
| Bijlagen                      | values.attribute.test_documenten                       |

| Bijlage                            | values.attribute.test_documenten                       |
|------------------------------------|--------------------------------------------------------|
| Type_Bijlage                       | mimetype                                               |
| Status_Bijlage                     | accepted                                               |
| Tijdstip_laatste_wijziging_bijlage | (Empty)                                                |
| Titel_Bijlage                      | filename                                               |
| URL_Bijlage                        | (Empty)                                                |

