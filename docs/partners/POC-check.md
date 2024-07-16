# Vragenlijst POC

## Common Ground Architectuur

Voldoet de oplossing aan de CG architectuur. Zie ook figuur 5 in de PSA.

- Ja, de architectuur voldoent aan de CG architectuur(het heeft immers status goud). De Gebruikersinterfaces "Authorisatiebeheer" en "Publiceren" bevinden zich op laag 4 (procesinrichting) en laag 5 (interactie). De integratie verloopt via een oplossing op laag 3(connectiviteit), met daaronder de Woo-service op laag 2 (Diensten) en de bronnen op laag 5(databronnen).

Wordt er een scheiding gemaakt tussen gegevens ontsloten door API's aan de ene kant en applicaties aan de andere kant. Slaat de applicatie zelf nog gegevens op direct in een database? Welke?

- Ja, er wordt een duidelijke scheiding gemaakt tussen gegevens ontsloten door API's en applicaties. OpenWoo.app is ontworpen volgens de Common Ground principes, waarbij gegevens worden ontsloten via API's. Dit betekent dat de applicatie zelf niet direct gegevens opslaat, maar gebruikmaakt van API's om toegang te krijgen tot de benodigde data. Gegevens worden enkel tijdelijk in een cache-laag opgeslagen.

Kun je ook andere applicaties aansluiten op de API's van de oplossing? Bijv. website, portaal of een mobiele app?

- OpenWoo.app is ontworpen met flexibiliteit en schaalbaarheid in gedachten, waardoor het eenvoudig is om andere applicaties, zoals websites, portalen, en mobiele apps, aan te sluiten op de API's van de oplossing. De centrale Woo-service fungeert als een motorblok dat meerdere bronnen ondersteunt en gestandaardiseerde API's aanbiedt voor gegevensuitwisseling en functionaliteit. Hierdoor kunnen verschillende applicaties uniform en efficiënt gebruik maken van gemeentelijke diensten en gegevens. Er zijn momenteel meerdere website-ontwikkelaars die verschillende websites maken, inclusief portalen.

## Technologie

Hoe ziet de technologiestack van de oplossing eruit? Taal, frameworks, databases, etc.

- De technologiestack van OpenWoo.app maakt gebruik van een combinatie van moderne technologieën die zorgen voor flexibiliteit, schaalbaarheid, en efficiëntie. Door het gebruik van PHP wordt een stevige, doch voor developers bekende, basis gelegd voor de webapplicatie. MongoDB en Elasticsearch bieden krachtige oplossingen voor gegevensbeheer en zoekfunctionaliteiten. De API Gateway en RESTful API's zorgen voor gestandaardiseerde en veilige communicatie tussen verschillende applicaties en diensten. Ten slotte biedt Nextcloud een betrouwbare oplossing voor bestandsbeheer en samenwerking.

### Technologiestack van OpenWoo.app

| Component          | Technologie       | Opmerking                                                   |
|--------------------|-------------------|-------------------------------------------------------------|
| Taal               | PHP               | Flexibele en breed ondersteunde webontwikkelingstaal        |
| Database           | MongoDB           | NoSQL database voor gestructureerde en ongestructureerde gegevens |
| Zoekfunctionaliteit| Elasticsearch     | Voor snelle en efficiënte zoekfunctionaliteiten             |
| API Management     | API Gateway       | Beheer en routering van API-verzoeken                       |
| API's              | RESTful API's     | Gestandaardiseerde communicatie tussen applicaties          |
| Bestandsbeheer     | Nextcloud         | Veilige en schaalbare oplossing voor bestandsbeheer         |

Welke bestaande componenten (zoals Elastic of KeyCloak) worden gebruikt?

- OpenWoo.app maakt gebruik van diverse bestaande componenten om een robuuste, veilige en schaalbare oplossing te bieden. Hieronder staan de belangrijkste componenten die in de technologiestack worden gebruikt:

- Elasticsearch wordt gebruitk voor geavanceerde zoekfunctionaliteit en datatoegang. Elasticsearch wordt tevens gebruikt voor doorzoekbaarheid en analyse. Daarnaast is Nextcloud vooral gekozen omdat het industriestandaarden zoals Keycloak, Splunk en Nagios ondersteund.

Zijn er automatische tests? Welke soort (unit, end-to-end)? Wat is de dekkingsgraad?

- Er worden momenteel unit tests geschreven in de overgang naar een MVP. Nextcloud vereist dit ook voor plaatsing in de Nextcloud appstore.

Zijn er installatiescripts? Is er een Helm chart? Zijn voldoende omgevingsvariabelen ontsloten voor een volledige automatische installatie?

- Er is een docker-compose voor het draaien in een container. De instructies zijn [hier](https://github.com/ConductionNL/opencatalogi?tab=readme-ov-file#open-catalog) te vinden. Er is een officiele Helm-chart, we kijken ernaar om deze uit te breiden zodat dit inclusief de app is gebeurd.

Na installatie zijn er enige vereiste, zoals een API-sleutel voor MongoDB en clusternaam en voor het activeren van Elastic een sleutel en index. We kiezen er expres voor niet omgevingsvariableen niet allemaal mee te geven.

## Bronnen

Welke bronnen kunnen nu worden aangesloten?

- Momenteel de volgende bronnen:
- (xxllnc) zaaksysteem.nl
- Elasticsearch
- ZGW-api bronnen
- Bronnen met een REST API

Is er een adapter framework of iets anders voor het aansluiten van nieuwe bronnen?

- Ja, zolang bronnen gebruik maken van de ZGW-api's of RESTful API, dan is aansluiting nu al ondersteund.

Worden bronnen via streaming aangesloten? Of is dat batch (bijv. 's nachts of ieder uur)?

- Er is een cronjob die elke 10 minuten een synchronisatie met de bronnen uitvoert. Hierdoor hoeft er niet lang gewacht te worden voor de publicaites op de publicatiepagina getoond worden. Dit geeft tevens ook een buffer voor een check of er mogelijk toch iets onjuist is gepubliceerd.

## Zoeken

Hoe verhoudt de zoekindex zich tot de ODRC?

De zoekindex

Slaat Elastic alle gegevens (docs) zelf op?

- Elastic slaat in principe alles op. Er is een keuze te maken wat je naar Elasticsearch stuurt natuurlijk.

Is de API voor zoeken een Elastic API of specifieke API voor WOO?

- Er bestaat een specifieke API voor OpenWoo.app, die bovenop Elasticsearch gezet is. Wel is het mogelijk Elastic direct te bevragen

### SaaS

Dimpact wil de oplossing als SaaS-dienst aanbieden aan haar leden. Wat is er nodig om de oplossing als SaaS aan te bieden?
Hoe ziet een gemeentelijke implementatie eruit? Ervan uitgaande dat alle technische integratie al gedaan is bij installatie.

- Voor het aanbieden van SaaS voor de leden van Dimpact moet er gedacht worden aan multitenancy om aan de diverse leden en hun speicfieke eisen te voldoen. Hiervoor moeten we met de leden in kwesite in gesprek gaan en uitzoeken of er maatwerk nodig is. Indien dit niet het geval is, dan zou het enkel om configureerwerk gaan en kan het implementatieproces snel verlopen. Ter verduidelijking, de snelste organisaite die we hebben aangesloten duurde 2 weken. Aan de andere kant zijn er een gemeente die het traject zelf uitstrijkt over meerdere maanden. Kortom, om OpenWoo.app als SaaS-dienst aan te bieden, wordt er gebruik gemaakt van een multi-tenant architectuur om afzonderlijke omgevingen voor verschillende gemeenten te beheren. Dit omvat het creëren van tenants, het schalen van resources, integratie met SSO en AD/LDAP systemen, en het bieden van beveiliging, compliance, en ondersteuning. Een gemeentelijke implementatie omvat voorbereiding, technische integratie, configuratie, training, livegang, en nazorg.

## Authenticatie en autorisatie

Kan de oplossing worden aangesloten op AD (OIDC)?

- Ja, Nextcloud werkt met LDAP voor het AD, of (onder andere) ADFS voor SSO.

Hoe worden rollen en rechten ingeregeld? Kan de oplossing rollen uit AD gebruiken?

- Dit werkt via [LDAP](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/user_auth_ldap.html). De oplossing kan dus de rollen uit het AD overnemen.

Kunnen beide bij installatie worden ingericht via de Helm chart?

- Dit zou kunnendoor gebruik te maken van [Openldap](https://kb.symas.com/using-openldap-with-nextcloud), maar hebben we zelf nog niet eerder gedaan.

## Standaarden

Welke standaarden worden nu al gebruikt en ondersteund? TMLO, ZGW API's, etc.

- ZGW api
- REST API (OpenAPI)
- MDTO (voorheen TMLO)
- JSON-LD

Is de ODRC API een standaard API?

- Het is een API die volgens de NL API strategie functioneert, met 'reguliere' endpoints en convenience endpoints.

## **Aan te tonen functionaliteiten bij PoC OpenWoo.app**

ODRC / gebruikersinterface “Model- en publicatiebeheer”

Inloggen (met SSO?)
Modelbeheer:
Toevoegen, wijzigen en intrekken/verwijderen van extra informatiecategorieën, rekening houdend met TOOI-waardelijst
Toevoegen, wijzigen en intrekken/verwijderen van organisaties, rekening houdend met TOOI-waardelijst
Toevoegen, wijzigen en intrekken/verwijderen van organisatie-onderdelen
Toevoegen, wijzigen en intrekken/verwijderen van extra metadata-velden (per informatiecategorie)
Toevoegen, wijzigen en intrekken/verwijderen van thema’s / onderwerpen
Publicatiebeheer:
Wijzigen en intrekken/verwijderen van een concept-publicatie
Wijzigen en intrekken/verwijderen van een publicatie
Waarderen archief
Raadplegen logging / audittrail van een (concept-)publicati
Rapportages
Help-functie

ODPC / gebruikersinterface “Autorisatiebeheer”:

Inloggen (met SSO?)
Toevoegen, wijzigen en verwijderen van autorisatiegroepen
Medewerkers toevoegen aan en verwijderen uit een autorisatiegroep
Een autorisatiegroep autoriseren voor:
Informatiecategorieën (cq “publiceren van”)
organisaties (cq “publiceren namens”)
organisatie-onderdelen (cq “publiceren namens”)
thema’s / onderwerpen (cq “publicatie hoort bij”)
Raadplegen logging van (wijzigingen in) autorisaties
Help-functie

ODPC / gebruikersinterface “Publiceren”

Inloggen (met SSO?)
Aanmaken nieuwe (concept-)publicatie, met o.a.:
Uploaden een of meerdere bestanden
Selecteren een of meerdere informatiecategorieën
Selecteren organisatie
Selecteren een of meerdere thema’s / onderwerpen
Verplichte DiWoo-velden
Invullen extra metadata-velden
Opslaan als concept of direct publiceren
Een concept-publicatie muteren en alsnog publiceren
Een publicatie intrekken
Help-functie

ODBP / gebruikersinterface “Contentbeheer”

Inloggen (met SSO?)
Wijzigen welkomstpagina
Aanmaken, wijzigen en verwijderen webpagina met overzicht andere relevante websites
Raadplegen rapportage bezoekers- / gebruiks-statistieken
Help-functie

ODBP / gebruikersinterface “Zoeken en raadplegen”

Huisstijl / NL design
Raadplegen welkomstpagina (zie 17) en overige pagina’s (zie 18)
Zoeken met behulp van een zoekbalk:
Full-tekst
In metadata-waarde
Gebruik van bolean operators
Zoeken met behulp van filters
Raadplegen lijst met zoekresultaten
Openen van een zoekresultaat en raadplegen van een publicatie
Downloaden van een publicatie
Help-functie

Technisch

ODRC API:
Raadplegen model (zie 2)
Creëren, raadplegen, updaten en verwijderen van (concept-)publicaties
Search API
Genereren sitemap(-index)
