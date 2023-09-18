# Configuratie

## Mapping van XXLLNC zaken (opgehaald via search endpoint)
Gebaseerd op: https://github.com/CommonGateway/WooBundle/blob/main/Installation/Mapping/woo.xxllncCaseToWoo.mapping.json

| Woo publicatie (conform open web) | Zaaksysteem case                 |
|-----------------------------------|----------------------------------|
| UUID                              | id                               |
| ID                                | id                               |
| Object_ID                         | object_id                        |
| Portal_url                        | {{config}}.{{id}}                |
| Behandelend_bestuursorgaan        | {{config}}                       |
| Ontvanger_informatieverzoek       | (Empty)                          |
| Volgnummer                        | (Empty)                          |
| Titel                             | values.case.subject_external        |
| Beschrijving                      | values.attribute.woo_beschrijving              |
| Samenvatting                      | values.values.attribute.woo_samenvatting              |
| Categorie                         | values.attribute.woo_categorie   |
| Verzoeker                         | (Empty)         |
| Ontvangstdatum                    | values.case.date_of_registration |
| Besluitdatum                      | values.attribute.woo_datum_besluit          |
| Behandelstatus                    | values.case.status               |
| Publicatiedatum                   | values.attribute.woo_publicatiedatum               |
| Besluit                           | is de bijlage gelabeld als "besluit"                         |
| Termijnoverschrijding             | case.date_target - case.date_of_completion                          |
| URL_informatieverzoek             | is de bijlage gelabeld als "informatie verzoek"                          |
| URL_inventarisatielijst           | is de bijlage gelabeld als "inventarisatielijst"                         |
| URL_besluit                       | is de bijlage gelabeld als "besluit"                          |
| Geografisch_gebied                | (Empty)                          |
| BAG_ID                            | (Empty)                          |
| BGT_ID                            | (Empty)                          |
| Postcodegebied                    | (Empty)                          |
| Adres                             | (Empty)                          |
| COORDS                            | (Empty)                          |
| Geografische_positie              | (Empty)                          |
| Bijlagen                          | values.attribute.test_documenten |

| Bijlage                            | values.attribute.test_documenten                       |
|------------------------------------|--------------------------------------------------------|
| Type_Bijlage                       | mimetype                                               |
| Status_Bijlage                     | accepted                                               |
| Tijdstip_laatste_wijziging_bijlage | (Empty)                                                |
| Titel_Bijlage                      | filename                                               |
| URL_Bijlage                        | (Empty)                                                |

Let op: Alleen documenten die zijn gelabeld als woo_publiceren worden 