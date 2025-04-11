# Conduction

## Service Level Agreement OpenWoo.app - Productieomgevingen

**Contractnummer:** `{maand-klantnummer-volgnummer}`  
**Datum:** `{datum}`  
**Betreft:** `SLA OpenWoo.app`

## Versiebeheer

| Wie             | Datum       | Wijziging      |
|-----------------|------------|----------------|
| Remco Damhuis   | 22-11-2024 | Initiële opzet |
| Matthias Oliveiro | 29-11-2024 | Feedback gegeven |
| Persoon         |            |                |
| Persoon         |            |                |

## Inhoudsopgave

1. [Intro](#intro)  
2. [Definities](#definities)  
3. [Scope van de SLA](#scope-van-de-sla)  
4. [SLA ingangsdatum en termijn](#sla-ingangsdatum-en-termijn)  
5. [Beschikbaarheid](#beschikbaarheid)  
6. [Capaciteit](#capaciteit)  
7. [Stappen voor het melden incidenten](#stappen-voor-het-melden-incidenten)  
8. [Reactie- en oplostijden](#reactie--en-oplostijden)  
9. [Beveiliging](#beveiliging)  
10. [Software updates](#software-updates)  
11. [Periodieke Evaluatie](#periodieke-evaluatie)


## Intro
Deze Service Level Agreement (SLA) omvat de afspraken tussen de organisatie die OpenWoo.app gebruikt en Conduction die OpenWoo.app als SaaS-oplossing levert.

SaaS is de afkorting van Software as a Service. Ofwel: het aanbieden en gebruiken van software via internet in de vorm van een dienst. Klanten betalen de software in een abonnementsvorm naar gebruik in plaats van het eenmalig aankopen van software. Deze SLA beschrijft de niveaus van productbeschikbaarheid en -ondersteuning die verwacht kan worden van Conduction voor de duur van de overeenkomst.

Als open-source softwareleverancier biedt Conduction B.V. ondersteuning op de hosting en beheer van de code. Let op: wij bieden geen derdelijns codeonderhoud en beheer, oftewel ondersteuning op de code van derden, aan.

## Definities
Binnen deze Service Level Agreement (SLA) worden de onderstaande termen gebruikt met de aangegeven betekenis. In deze overeenkomst worden enkelvoud en meervoud als gelijkwaardig beschouwd, en vice versa. De termen "maand", "kwartaal" en "jaar" verwijzen naar de kalendermaand, kalenderkwartaal en kalenderjaar, tenzij anders vermeld. Daarnaast duidt het woord "inclusief" op onbeperkte inclusie.

- **Reactietijd**  
  De tijdsduur tussen het ontvangen van een melding en het moment waarop Conduction de melding bevestigt.

- **Oplostijd**  
  De periode die begint bij de Reactietijd en eindigt wanneer het Incident door Conduction als opgelost is gemeld.

- **Downtime**  
  De periode waarin het product niet beschikbaar is voor de klant. Het begrip "downtime" omvat echter niet:  
  - Gepland onderhoud  
  - Verminderde prestaties  
  - Factoren waarover Conduction geen controle heeft, waaronder overmachtsituaties  
  - Internet Storingen  
  - Handelingen of nalatigheid van de Klant en zijn Gebruikers  
  - Handhaving van overheidsvoorschriften

- **Beschikbaarheid**  
  Mate waarin de geboden dienst toegankelijk is voor geautoriseerde gebruikers. Een dienst is niet beschikbaar indien zich een prioriteit 1 storing op de dienst voordoet.

- **Gepland Onderhoud**  
  Conduction zal gepland onderhoud van de service aankondigen met een minimumtermijn van 24 uur voorafgaand aan het daadwerkelijke onderhoud. Conduction streeft ernaar om de aankondiging binnen een redelijke termijn te doen en, indien mogelijk, zal de geplande uitval tijdens de Onderhoudsuren plaatsvinden.

- **Onderhoudsuren**  
  Vinden plaats tijdens kantooruren.

- **Incident**  
  Indien een P1-, P2- of P3-melding door de klant wordt gedaan.

- **Kantooruren**  
  Maandag tot en met vrijdag van 09.00 tot 17.00 uur. Niet inbegrepen: officiële feestdagen.

- **SLA Ingangsdatum**  
  De startdatum zoals vermeld in de overeenkomst en de datum waarop deze SLA in werking treedt.

- **Ticket**  
  Een elektronisch verzoek dat door de klant naar Conduction is verzonden (bijvoorbeeld een verzoek om een oplossing van een Incident).

- **Verminderde Prestaties**  
  Een verminderde servicekwaliteit zoals beschreven in deze SLA (bijvoorbeeld tijdelijk verbroken of tijdelijk niet beschikbare functionaliteit).


## Scope van de SLA
Deze SLA is uitsluitend van toepassing op het product en de professionele diensten zoals beschreven in de Overeenkomst. Deze SLA is niet van toepassing op software, apparatuur, diensten of andere componenten van een informatietechnologiesysteem die niet zijn aangeschaft of beheerd worden door Conduction.

Conduction zal materiële problemen met het product oplossen, tenzij:

1. Het probleem is ontstaan doordat de klant het product heeft gebruikt op een manier die in strijd is met de instructies, training of kennisbank van Conduction.  
2. Indien de klant ongeoorloofde wijzigingen heeft aangebracht in de configuratie of opzet van de betreffende omgeving.  
3. De klant Conduction heeft belemmerd bij het uitvoeren van onderhoud aan de omgeving.  
4. Het probleem is veroorzaakt door derden.  
5. Het probleem is veroorzaakt door gebruiker(s), bijvoorbeeld door het aanpassen van een deel van de software, configuratie of door het verwijderen of toekennen van onjuiste rechten aan gebruikers.


## SLA ingangsdatum en termijn
Deze SLA treedt in werking vanaf de startdatum en eindigt zonder verdere kennisgeving, compensatie of restitutie bij het verstrijken of beëindigen van de overeenkomst.

## Beschikbaarheid
Conduction garandeert een uptime van 95% gedurende 24 uur per dag, 7 dagen per week. De Uptime wordt berekend op basis van het maandelijkse gemiddelde van beschikbaarheid, afgerond naar beneden op de dichtstbijzijnde minuut, volgens de volgende formule:
Uptime % = (Overeengekomen Diensturen - Uren Downtime) / Overeengekomen Diensturen * 100%

## Capaciteit
Conduction richt haar prijsstelling op kleine organisaties, en hanteert dus weinig opslag in haar abonnementen. Dat betekent dat we bovenmatig gebruik doorbelasten aan de hand van nacalculatie. Hierbij gaat het echter wel om bovenmatig gebruik van servers of diensten. Regulier gebruik zou niet tot een nacalculatie moeten leiden.

De beschikbare capaciteit per organisatie bedraagt:
- 5 GB opslag
- 1 miljoen bevragingen per maand
- 10 GB dataverkeer per maand


## Stappen voor het melden incidenten
Als er een probleem optreedt, neem dan tijdens kantoortijden contact op met onze helpdesk via het aangewezen Slack channel, [support@conduction.nl](mailto:support@conduction.nl) of 085 303 6840. We streven ernaar om binnen 2 uur te reageren op het probleem en wordt er een ticket aangewezen. Indien er buiten kantoortijden een melding plaatsvindt, wordt deze de eerstvolgende dag om 09:00 meegenomen.


## Reactie- en oplostijden
We streven ernaar om zo snel mogelijk na ontvangst van het probleem te reageren en het probleem spoedig op te lossen, afhankelijk van de complexiteit van het probleem. Hieronder is een overzicht van de prioriteitsniveaus die gebruikt worden voor de reactie- en oplostijden:

- **Prioriteit 1 (P1):** Software is in zijn geheel niet beschikbaar.  
- **Prioriteit 2 (P2):** Deze categorie omvat problemen die de servicekwaliteit verminderen, zoals intermitterende site- of productproblemen (bijv. het niet doorkomen van publicaties).  
- **Prioriteit 3 (P3):** Dit omvat algemene problemen zoals productvragen, functieverzoeken en ontwikkelingsproblemen.

Een klant kan bij het registreren van een melding een prioriteit meegeven. Deze wordt getoetst door een medewerker van Conduction en in redelijkheid en billijkheid behandeld:

| Incident prioriteit | Reactietijd \* | Workaround / Oplossing \* |
|---------------------|----------------|---------------------------|
| **P1**             | 2 uur          | 4 uur / 8 uur            |
| **P2**             | 4 uur          | 16 uur / 48 uur          |
| **P3**             | een week       | Planmatig                 |

\*De genoemde uren tellen alleen binnen kantoortijd. Niet inbegrepen: officiële feestdagen.

**Uitzonderingen**  
- **Updates aan het platform:**  
  Updates zullen altijd buiten kantooruren worden uitgevoerd. Incidenten die zich voordoen tijdens deze updates, vallen niet onder de definitie van incident zoals vermeld in deze SLA.

- **Niet-verwijtbare incidenten:**  
  Incidenten bij de klant die veroorzaakt worden buiten de schuld van Conduction vallen niet onder de definitie van incident zoals vermeld in deze SLA. Deze incidenten worden op basis van kosten en tijdsbestek hersteld.

- **Veiligheidsupdates:**  
  Updates die om veiligheidsredenen worden uitgevoerd, worden niet beschouwd als incident zoals vermeld in deze SLA.


## Beveiliging
Gegevensbeveiliging is van essentieel belang voor Conduction. Ons beveiligingsbeleid voldoet volledig aan de ISO 27001:2017-normen, een internationaal erkende standaard voor informatiebeveiliging.

## Software updates
Binnen deze SLA zal Conduction de klant voorzien van nieuwe versies, releases en updates van het product. Gezien het een open-source product is, valt ontwikkeling van nieuwe versies, releases en updates, naast bugfixing en beveiligingsupdates, buiten de SLA.


## Periodieke Evaluatie
Tijdens de maandelijkse community meeting OpenWoo.app zal er een vertegenwoordiger van Conduction aanwezig zijn. In deze meeting wordt het product geëvalueerd en de richting, roadmap en keuzes toegelicht.

