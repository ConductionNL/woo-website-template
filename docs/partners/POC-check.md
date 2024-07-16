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

Onderstaande functionaliteien worden ondersteund, of worden op zeer korte termijn gerealiseerd.

## ODRC / gebruikersinterface “Model- en publicatiebeheer”

1. Inloggen (met SSO?)

- SSO via ADFS of SAML via Nextcloud

2. Modelbeheer:
Toevoegen, wijzigen en intrekken/verwijderen van extra informatiecategorieën, rekening houdend met TOOI-waardelijst
Toevoegen, wijzigen en intrekken/verwijderen van organisaties, rekening houdend met TOOI-waardelijst
Toevoegen, wijzigen en intrekken/verwijderen van organisatie-onderdelen
Toevoegen, wijzigen en intrekken/verwijderen van extra metadata-velden (per informatiecategorie)
Toevoegen, wijzigen en intrekken/verwijderen van thema’s / onderwerpen

De OpenWoo.app ondersteund het CRUD + intrekken van alle beovenstaande functionaliteiten voor het beheer van de modellen.

3. Publicatiebeheer:

- a. Wijzigen en intrekken/verwijderen van een concept-publicatie
- b. Wijzigen en intrekken/verwijderen van een publicatie
- c. Waarderen archief
- d. Raadplegen logging / audittrail van een (concept-)publicati
- e. Rapportages

De OpenWoo.app ondersteund het CRUD + intrekken van alle beovenstaande functionaliteiten voor het beheer van de publicaties.

4. Help-functie

Er wordt nagedacht over help-functies binnen de beheerinterface. Denk hierbij aan tooltips, documentatie voor zowel gebruikers, beheerders en ontwikkelaars van het ODRC.

## ODPC / gebruikersinterface “Autorisatiebeheer”

5. Inloggen (met SSO?)

- Dit gebeurd op een dezelfde manier als het inloggen voor het ODRC, via ADFS, LDAP of SAML.

6. Toevoegen, wijzigen en verwijderen van autorisatiegroepen

- Gebruikers kunnen autorisatiegroepen toevoegen, wijzigen en verwijderen. Deze groepen worden beheerd via LDAP.

7. Medewerkers toevoegen aan en verwijderen uit een autorisatiegroep

- Medewerkers kunnen worden toegevoegd aan of verwijderd uit een autorisatiegroep. Dit wordt beheerd via LDAP.

8. Een autorisatiegroep autoriseren voor:

- a. Informatiecategorieën (cq “publiceren van”)
- b. organisaties (cq “publiceren namens”)
- c. organisatie-onderdelen (cq “publiceren namens”)
- d. thema’s / onderwerpen (cq “publicatie hoort bij”)

- Configuratie en Authorisatieschema's: De configuratie en authorisatieschema's voor bovenstaande autorisaties worden al ondersteund via LDAP. De beheerinterface voor het uitvoeren van deze taken wordt momenteel ontwikkeld.

9. Raadplegen logging van (wijzigingen in) autorisaties

- Het is een herleidbaar audittrail dat inzichtelijk wordt gemaakt voor het raadplegen van de logging.

10. Help-functie

Er wordt nagedacht over help-functies binnen de beheerinterface. Denk hierbij aan tooltips, documentatie voor zowel gebruikers, beheerders en ontwikkelaars van het ODPC.

## ODPC / gebruikersinterface “Publiceren”

11. Inloggen (met SSO?)

- Dit gebeurd op een dezelfde manier als het inloggen voor het ODRC, via ADFS, LDAP of SAML.

12. aanmaken nieuwe (concept-)publicatie, met o.a.:

- a. Uploaden een of meerdere bestanden
- b. Selecteren een of meerdere informatiecategorieën
- c. Selecteren organisatie
- d. Selecteren een of meerdere thema’s / onderwerpen
- e. Verplichte DiWoo-velden
- f. Invullen extra metadata-velden
- g. Opslaan als concept of direct publiceren

Alle bovenstaande functionaliteit wordt ondersteund in het publicaitemodal in de beheerinterface voor publicaties.

13. Een concept-publicatie muteren en alsnog publiceren

14. Een publicatie intrekken

Publicaites intrekken wordt al ondersteund door het verwijderen van een verplicht veld. Zo is een conceptpublicatie ook al gelijk ondersteund. Met andere woorden, een publicicatie zonder alle verplichte velden ís een concept-publicatie. Let wel op dat als een publicatie eenmaal is gepubliceerd en een derde partij een kopie heeft gemaakt, de OpenWoo.app daar niets meer aan kan doen. In dat geval moet er contact opgenomen worden met bijv. WooGle of KOOP.

15. Help-functie

Er wordt nagedacht over help-functies binnen de beheerinterface. Denk hierbij aan tooltips, documentatie voor zowel gebruikers, beheerders en ontwikkelaars van het ODPC.

## ODBP / gebruikersinterface “Contentbeheer”

16. Inloggen (met SSO?)

- Dit gebeurd op een dezelfde manier als het inloggen voor het ODRC, via ADFS, LDAP of SAML.

17. Wijzigen welkomstpagina

Dit wordt ondersteund.

18. Aanmaken, wijzigen en verwijderen webpagina met overzicht andere relevante websites

@rubenvdlinde - dit via Acato front?

19. Raadplegen rapportage bezoekers- / gebruiks-statistieken

Dit wordt ondersteund door bijvoorbeeld Google Analystics, Nextcloud Analystics,  maar er kan gedacht worden aan dit op te lossen via Elastic(Stack) in hoeverre hier vraag naar is.

20. Help-functie

Er wordt nagedacht over help-functies binnen de gebruikersinterface. Denk hierbij aan tooltips, documentatie voor zowel gebruikers, beheerders en ontwikkelaars van het ODBP.

## ODBP / gebruikersinterface “Zoeken en raadplegen”

21. Huisstijl / NL design
22. Raadplegen welkomstpagina (zie 17) en overige pagina’s (zie 18)
23. Zoeken met behulp van een zoekbalk:

- a. Full-tekst
- b. 25. In metadata-waarde

24. Gebruik van boolean operators
25. Zoeken met behulp van filters
26. Raadplegen lijst met zoekresultaten
27. Openen van een zoekresultaat en raadplegen van een publicatie
28. Downloaden van een publicatie

Alle bovenstaande functionalitiet wordt ondersteund.

29. Help-functie

Er wordt nagedacht over help-functies binnen de gebruikersinterface. Denk hierbij aan tooltips, documentatie voor zowel gebruikers, beheerders en ontwikkelaars van het ODBP.

## Technisch

29. ODRC API:

- a. Raadplegen model (zie 2)
- b. Creëren, raadplegen, updaten en verwijderen van (concept-)publicaties

Wordt ondersteund via API. Sterker nog, de interfaces sturen de API aan.

30. Search API

Deze is ontwikkeld en wordt (vanzelfsprekend) doorontwikkeld
31. Genereren sitemap(-index)

- voor zolang dat nodig is voor KOOP, ondersteunen we dat.
