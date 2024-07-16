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

- De technologiestack van OpenWoo.app maakt gebruik van een combinatie van moderne technologieën die zorgen voor flexibiliteit, schaalbaarheid, en efficiëntie. Door het gebruik van PHP en het Laravel framework wordt een robuuste basis gelegd voor de webapplicatie. MongoDB en Elasticsearch bieden krachtige oplossingen voor gegevensbeheer en zoekfunctionaliteiten. De API Gateway en RESTful API's zorgen voor gestandaardiseerde en veilige communicatie tussen verschillende applicaties en diensten. Ten slotte biedt Nextcloud een betrouwbare oplossing voor bestandsbeheer en samenwerking.

Welke bestaande componenten (zoals Elastic of KeyCloak) worden gebruikt?

Zijn er automatische tests? Welke soort (unit, end-to-end)? Wat is de dekkingsgraad?
Zijn er installatiescripts? Is er een Helm chart? Zijn voldoende omgevingsvariabelen ontsloten voor een volledige automatische installatie?

Bronnen
Welke bronnen kunnen nu worden aangesloten?
Is er een adapter framework of iets anders voor het aansluiten van nieuwe bronnen?
Worden bronnen via streaming aangesloten? Of is dat batch (bijv. 's nachts of ieder uur)?

Zoeken
Hoe verhoudt de zoekindex zich tot de ODRC?
Slaat Elastic alle gegevens (docs) zelf op?
Is de API voor zoeken een Elastic API of specifieke API voor WOO?

SaaS
Dimpact wil de oplossing als SaaS-dienst aanbieden aan haar leden. Wat is er nodig om de oplossing als SaaS aan te bieden?
Hoe ziet een gemeentelijke implementatie eruit? Ervan uitgaande dat alle technische integratie al gedaan is bij installatie.

Authenticatie en autorisatie
Kan de oplossing worden aangesloten op AD (OIDC)?
Hoe worden rollen en rechten ingeregeld? Kan de oplossing rollen uit AD gebruiken?
Kunnen beide bij installatie worden ingericht via de Helm chart?

Standaarden
Welke standaarden worden nu al gebruikt en ondersteund? TMLO, ZGW API's, etc.
Is de ODRC API een standaard API?

Aan te tonen functionaliteiten bij PoC OpenWoo.app

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
