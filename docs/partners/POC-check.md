# Vragenlijst POC

## Common Ground Architectuur

### Voldoet de oplossing aan de CG architectuur. Zie ook figuur 5 in de PSA.

- Ja, de architectuur voldoent aan de CG architectuur (het heeft immers status goud). In princiepe is de OpenWoo.app een implementatie van de [open catalogi architectuur](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/) aangevuld met een aantal extra componenten en inrichtingen. De aanvullingen staan beschreven in de [OpenWoo](https://openwoo.app/Techniek/Architectuur/) architectuur.

### Wordt er een scheiding gemaakt tussen gegevens ontsloten door API's aan de ene kant en applicaties aan de andere kant. Slaat de applicatie zelf nog gegevens op direct in een database? Welke?

Ja, er wordt een duidelijke scheiding gemaakt tussen gegevens ontsloten door API's en applicaties. OpenWoo.app is ontworpen volgens de Common Ground principes, waarbij gegevens worden ontsloten via API's. Dit betekent dat de applicatie zelf niet direct gegevens opslaat, maar gebruikmaakt van API's om toegang te krijgen tot de benodigde data. Dit geld bijvoorbeeld voor Publicaties en Bestanden. De beheer interface beschikt daarnaast echter over een eigen database voor het opslaan van configuratie zo als rollen, rechten, logging etc. 

Het is een tevens een keuze (configuratie mogenlijkheid) om in plaats van ORC/DRC gebruik te maken van MongoDB (object store) of zelfs de interne postgress database van de beheer interface. Het laatste wordt afgeraden voor productie maar maakt het bijvoorbeeld makkenlijk om de applicatie even locaal op een laptop op te starten.

### Kun je ook andere applicaties aansluiten op de API's van de oplossing? Bijv. website, portaal of een mobiele app?
Zekers, sterker nog dat is gangbaar. Er zijn op dit moment 5 verschillende Publicatie platformen aangesloten op de Open Catalogi api, waarvan 4 onderdeel zijn van de OpenWoo.app community. in de [OpenWoo](https://openwoo.app/Techniek/Architectuur/) staat een overzicht. Daarnaast maken Koop (via koophulpje), Woogle en een tweetal gemeenten ook direct gebruikt van de de API. Er zijn op dit moment geen mobiele app's die gebruik maken van de API maar er zijn wel organisaties die overwegen om hem in de mijn omgeving op te nemen (voor locaal nieuws).

In een iets bredere context zijn naar koophulje (de sitemapxml adaptor voor koop) ook andere adaptors in verkenning of ontwikkeling die de API weer omslaan naar externe bronnen (voor publiceren uit open catalogi). Voorbeelden hiervan zijn DROP en SDG.


## Technologie

### Hoe ziet de technologiestack van de oplossing eruit? Taal, frameworks, databases, etc.

- Voor de publicatie platformen wisselen technologiestack's per leverancier, Conduction en Acato bouwen statische voorkanten aan de hand van NL Design react framework(bijvoorbeeld de ui van tilburg) en IO  Digital volledige php wordpress plugins.  
- Op de backend zijn we recentenlijk overgestapt van conductions eigen oude framework (commong gateway) naar nextcloud framework (php+vue). Daar zijn veel redenen voor en die staan uitgelegd op in een [blog](https://documentatie.opencatalogi.nl/Handleidingen/Nextcloud/) maar nextcloud als framework is echt gericht op kubernetes (en bevat dsu onboard integratie voor logging wegschrijven, monitoring, adfs etc). 
- Op de datalaag wordt er door nextcloud zelf gebruik gemaakt van postgress. Vanuit applicatie oogpunt shrijven we de overige data bij voorkeur weg naar ORC (overige objecten), DRC (de documenten api van ZGW maar bijvoorbeeld ook corsa) + Elastic Search. Wie bieden echter ook de API aan overheden om één of al deze te vervangen door mongodb of alle data in de nexloud postgress op te slaan. Dat is een bewuste keuze, kubernetes blijkt voor veel overheden een drempel en we willen de applicatie ook geschickt houden van organisaties die en traditionele LAMP stack op VM's draaien.


### Welke bestaande componenten (zoals Elastic of KeyCloak) worden gebruikt?
OpenWoo.app maakt gebruik van diverse bestaande componenten om een robuuste, veilige en schaalbare oplossing te bieden. Hieronder staan de belangrijkste componenten die in de technologiestack worden gebruikt:

- DRC, 
- ORC
- Elasticsearch
- FSC/NLX
- Nextcloud asl basis framework
- Diverse NL Design React componenten

Hieromheen is het vooral belangrijk om te vermelden dat de keuze voor nextcloud als basis framework voortkomt uit de goede out of the box ondersteuning voor 
Keycloak, Splunk, Nagios, Apache spark, PRometheus, Loki, Gravana, Harbour, Open Shift en Azure. Dat is belangrijk omdat dit het platform goed schaalbaar en monitorbaar maakt in complexe kubernates omgevingen. 

### Zijn er automatische tests? Welke soort (unit, end-to-end)? Wat is de dekkingsgraad?

- We draaiden bijde soorten test, voor end-to-end testing maken we gebruik van [vitest](https://vitest.dev/) en voor unit tests van [php-unit](https://phpunit.de/index.html). De test covaradges wisselt wat rond de 60 procent, het doel is om dat voor 12 augustus naar 80% te hebben.

![alt text](image.png)

### Zijn er installatiescripts? Is er een Helm chart? Zijn voldoende omgevingsvariabelen ontsloten voor een volledige automatische installatie?

Zeker, goede installeerheid was een drive achter deze stack keuze. Er zijn een aantal installatie routes beschickbaar, voor (kubernetes) productie omgevingen zijn de stapppen redenlijk simpel
- Installeer Nexcloud (bijvoorbeeld via [Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/nextcloudgmbh1597841818906.nextcloud?tab=overview), [Open Shift](https://catalog.redhat.com/software/container-stacks/detail/65e9dc6f6365ba88288a412c) of [Artifact HUb](https://artifacthub.io/packages/helm/nextcloud/nextcloud) de officieele cloud native foundation marktplaats)
- Installeer via de nextcloud ui de Open Catalogi app
- Activeer in de Open Catalogi app de OpenWoo.app metadata bestanden

De herbruikte componenten binnen commonground kennen hun eigen installatie handeleidingen (ORC en DRC). Elastic (en optioneel MongoDB) zijn op Azure en Open Shift standaard als apps beschickbaar.

Optioneel kan er een losse frontend als container worden geinstalleerd, maar dat is in het van de standaard react container niet nodig. Die kan aan de hand van NL design tokens serverless worden gedraaid vanuit de [github marketplace](https://github.com/marketplace?query=opencatalogi) .

Voor (locaal) ontwikkleen en demo'en is er een docker-compose voor het draaien in een container. De instructies zijn [hier](https://github.com/ConductionNL/opencatalogi?tab=readme-ov-file#open-catalog) te vinden. Deze word momenteel door Acato getest (so far so good)

Na installatie zijn er enige (optionele) vereiste, zoals een API-sleutel voor MongoDB en clusternaam en voor het activeren van Elastic een sleutel en index of voor productie omgevingen een ORC en DRC. 

## Bronnen

### Welke bronnen kunnen nu worden aangesloten?

- Momenteel de volgende bronnen:
- (xxllnc) zaaksysteem.nl
- Elasticsearch
- ZGW-api bronnen
- Bronnen met een REST API

### Is er een adapter framework of iets anders voor het aansluiten van nieuwe bronnen?
Ja momenteel gebruiken we voor dit specifieke stukje van het ecosysteem nog wel de commongateway, dat werkt aardig (Acato heeft daar nu ook de eerste koppelingen mee gemapped) maar willen we eigenlijk ook over trekken naar een nextcloud app voor kubernetes.

Voor ZGW, DRC en ORI is er nu al een addaptor voor ondersteuning en Tilburg en Acato zijn aan het afronden op Stuf en Sharepoint.

### Worden bronnen via streaming aangesloten? Of is dat batch (bijv. 's nachts of ieder uur)?
Bijde, bijvoorkeur gebruiken we een pubsub patroon zo als notificaties bij ZGW. Of een tussenvorm via een data distributie syseem (haal nu deze stuf zaak op). Maar in de praktijk ondersteunen lang niet alle pakketen dit. In die gevalen grijpen we terug op batch verwerking. Hoe vaak die draaien hangt van de bron af en is per bron instelbaar. Dat kan elke uur of iedere nacht. Maar als de bron bijvoorbeeld kan fileren op items die afgelopen x minuten zijn gewijzigd kijken we graag idere 5 tot 10 minuten even (als het antwoord dan leeg is zijn we ook niet exsesief aan het vragen)

## Zoeken

### Hoe verhoudt de zoekindex zich tot de ODRC?
Deze is bewust losgekopeld, we hanteren het princiepe dat in de zoekindex alleen openbare informatie mag staan. 


## Slaat Elastic alle gegevens (docs) zelf op?
Dat hang van de configuratie keuzes van de gemeente af, maar bij voorkeur slaan we alleen de metedata van documenten op en halen we het document zelf uit het DRC op het moment dat het word opgevraagd. Er zijn echter casssusen waarin dat vanuit belasting of performance niet wensenlijk is.

### Is de API voor zoeken een Elastic API of specifieke API voor WOO?
Het is een specifieke API voor de WOO die binnen de parameters valt van wat Elastic zelf ook kan uitleveren met wat configuraite. Met andere woorden de elastic instantie kan ook direct worden bevraagd. De adaptor er boven op voorziet echter in twee extra functionaliteiten die wij binnen de WOO wensenlijk vinden
- Federatief zoeken over meerdere elastic search instanties
- Ophalen documenten door routeren naar b.v. DRC ipv elastic.

### SaaS

### Dimpact wil de oplossing als SaaS-dienst aanbieden aan haar leden. Wat is er nodig om de oplossing als SaaS aan te bieden?
Een kubernetes of azure omgeving met daarop bij voorkeur een managment tool voor container orchestratie die artifacthub ondersteund (er zijn er een aantal). In dat geval kan er visueel geinstalleerd worden.

Daarnaast ondersteunen we best een flink aantal monitoring en dashboard tools, het is verstandig om die ook operationeel te hebben (bijvoorbeeld graffana)

### Hoe ziet een gemeentelijke implementatie eruit? Ervan uitgaande dat alle technische integratie al gedaan is bij installatie.

Hiervoor is  een handleiding beschickbaar op https://openwoo.app/Techniek/Productie/ 


## Authenticatie en autorisatie

### Kan de oplossing worden aangesloten op AD (OIDC)?
Ja, Nextcloud werkt met LDAP voor het AD, of (onder andere) ADFS voor SSO. Hiervoor zijn meerdere [handleidingen](https://www.schiessle.org/articles/2023/07/04/nextcloud-and-openid-connect/) beschickbaar die bijvoorbeeld ook gebruik maken van Keycloak (er kan ook direct met LDAP op AD worden gekopeld).

### Hoe worden rollen en rechten ingeregeld? Kan de oplossing rollen uit AD gebruiken?
Dit werkt via [LDAP](https://docs.nextcloud.com/server/latest/admin_manual/configuration_user/user_auth_ldap.html). De oplossing kan dus de rollen uit het AD overnemen. Het toekenen van specifieke rechten aan rollen (bijvoorbeeld publiceren) gebeurd vervolgens in de applicatie zelf.

### Kunnen beide bij installatie worden ingericht via de Helm chart?
Ja, voor zover wij weten zijn alle configuratie opties (dus ook adaptors) zijn via de config optie van de [helm chart](https://artifacthub.io/packages/helm/nextcloud/nextcloud?modal=values) in te stellen. Dat betend dus dat de applicaite (in theorie) volledig werkend kan worden opgesponnen.

## Standaarden

Welke standaarden worden nu al gebruikt en ondersteund? TMLO, ZGW API's, etc.

- ZGW 
- REST API (OpenAPI)
- MDTO (voorheen TMLO)
- JSON-LD
- [Triple Store](https://en.wikipedia.org/wiki/Triplestore)
- Geo-JSON
- NFC/NLX

Zie voor meer standaarden de [Open Catalogi Architectuur](https://documentatie.opencatalogi.nl/Handleidingen/Architectuur/).

### Is de ODRC API een standaard API?

- Het is een API die volgens de NL API strategie functioneert, met 'reguliere' endpoints en convenience endpoints. We zijn nu in overleg met VNG en KOOP over standaardisatie, we verwachten daarbij maandag 22 juli een eerste besluit vanuit Koop. De VNG heeft 27 Juni reeds aangegeven de API als kandidaat te zien.

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

Dit gebeurd op een dezelfde manier als het inloggen voor het ODRC, via ADFS, LDAP of SAML.

17. Wijzigen welkomstpagina

Dit wordt ondersteund.

18. Aanmaken, wijzigen en verwijderen webpagina met overzicht andere relevante websites

Deze functie wordt niet direct door Open Catalogi ondersteund, althans contect en url beheer zo als we dat kennen binnen CMS systemen. We kunnen natuurlijk prima een metedata type toevoegen (of de gebruiker zelf) voor pagina's. Op dezelfde manier als waarop we die kennen voor producten en diensten (SDG) en nieuwsberichten.

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

De search API is het kloppende hard van Open Catalogi. Het  ondersteund naast full tekst search twee belangrijke mogenlijkheden
- Agregeted search (ofwel federatief over organisaties zoeken)
- Faceted search (van te voren zien hoeveel zoek resutleren een een aanpassing in de zoekopdracht opleverd)

De documentatie van de search API is aan uitbreiding onderhevig maar bevind zich momenteel op [stoplight](https://conduction.stoplight.io/docs/open-catalogi/6yuj08rgf7w44-open-catalogi-api) (een api design tool).

31. Genereren sitemap(-index)

Op dit moment heeft OpenWoo.app een tweetal keer meegedaan aan de beproeving van de sitemap xml koppeling naar KOOP. Een keer met als onderligende bron zaaksysteem.nl en een keer met Notubiz. Bijde keren zijn de gegevens succesvol overgebracht naar KOOP (en trouwens ook woogle) wel merken we hierbij de volgende problemen op.

 - Het sitemap xml format slaat de gegevens plat, hierdoor verdwijnen onderlinge verbanden tussen publicaties. Een voorbeeld hiervan is een raadsstuk, daarvan wil je eigenlijk zien dat het daarvoor in een commisie is behandeld en daarvoor bij B&W. In de opbouw van KOOP gaat deze context verloren. Terwijl juist dit intressant is voor het transperant maken van besluit vorming.
 - KOOP ondersteund geen video bestanden
 - KOOP ondersteund alleen documenten waardoor sommige objecten (e.g. raads agenda's) moeten worden omgeslagen naar PDF en minder toegankenlijk worden.
