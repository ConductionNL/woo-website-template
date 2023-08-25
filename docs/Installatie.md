# Installatie
Het Open WOO Webstiue template is gebaseerd op het Conduction [Productpage template]() voor commonground. Onderstaande tref je ene verkorte installatie handleiding die vooral focused op de onderliggende bronnen. Voor meer en uitgebreidere details unt u de docuementatie van de productpage website tempalte gebruiken.


## Randvoowaarden 
Om dit template te gebruiken moet je beschicken over:
- NL Design Token voor je orgisatie ([lees hier hoe je die kan verkrijgen]()
- Een github organisatie en beheerders rechten daarop OF (Zie [Serverless Installatie]())
- Een APACHE/NGINX server(Zie [Server Installatie]())
- Een Open Webconcept CMS (wordpress) met de [Open WOO]()) en [Open Convenanten]() plugins OF
- Een Common Gateway installatie (Onpremmise of SAAS) met de [Open WOO plugin]()

## Serverless Installatie
Dit template is in eerste instantie opgezet om serverless gebruikt te worden via github. Dat scheelt niet alleen in de kosten maar levert ook voordeel op in de beschickbarheid en belastign. Simpel gezegd de Github CDN is gebowud om flink wat meer aan te kunnen dan de gemiddelde gemeente. 

Om dit template 


## Server Installatie


## Configuratie
adas

## Inrichting Zaaksysteem
Voor het kunnen publiceren van zaken vanuit het zaaksysteem is het belangrijk dat het zaaksysteembeschikct over de juiste inrichting. Indien we via de commongateway Open Woo plugin zaken worden opgehaald gelden daarvoor de volgende spelregels.

Zaken dienen te beschicken over de volgende properties (zaak atributen):

| Property            | Required | Usage                                                                                                 | Allowed Value              |
|---------------------|----------|-------------------------------------------------------------------------------------------------------|----------------------------|
| woo_publicatiedatum | Yes      | De datum vanaf waneer de publicatie wordt gepubliceerd, bij leeg word de publicatie niet gepubliceerd | date-time or NULL          |
| woo_categorie       | Yes      | De categorie van de WOO Publicatie                                                                    | One of ("Wetten en algemeen verbindende voorschriften","Overige besluiten van algemene strekking","Ontwerpen van wet- en regelgeving met adviesaanvraag","Organisatie en werkwijze","Bereikbaarheidsgegevens","Bij vertegenwoordigende organen ingekomen stukken","Vergaderstukken Staten-Generaal","Vergaderstukken decentrale overheden","Agenda's en besluitenlijsten bestuurscolleges","Adviezen","Convenanten","Jaarplannen en jaarverslagen","Subsidieverplichtingen anders dan met beschikking","Woo-verzoeken en -besluiten","Onderzoeksrapporten","Beschikkingen","Klachtoordelen")               |
| woo_thema           | No       | Een optionele titel van thema waar de zaak onder valt                                                 | string, max 255 characters |

Daarnaast is het mogelijk om bijlagen van publicaties te clusteren aan de hand van labels

Note: Op dit moment doet Open WOO nog niks met thema's behalve ze weergeven bij de zaak. Er zijn echter plannen om in de toekomst een thema overzochts pagina te maken en WOO publicaties filterbaar te maken op thema

### Voor XXLLNC (zaaksysteem.nl)

Er kan worden gekopeld via de zoeken optie

## Ophalen informatie
In princiepe "Scraped" de Open WOO plugin elke nacht alle relevante zaken, hierbij zijn de stappen

1. Ophalen alle zaaktypen
2. Per zaaktype controleren op beschickbare eigenschappen (zie inrichting zaaksysteem)
3. Per zaaktype dat aan de voorwaarden voldoet de zaken ophalen
4. Per zaak controleren of er een publicatie datum is, indien ja de zaak opnemen in de index
5. Zaken die niet in bovenstaande loop zijn gevonden maar momenteel wel in de index zijn opgenomen verwijderen

In princiepe is bovenstaande genoeg om te zorgen dat het zaaksysteem leidend is en zaken zowel gepubliceerd als gedepubliceerd kunnen worden. Het is echter ook mogenlijk om in plaats van een nachtenlijke import over te gaan tot een meer 
