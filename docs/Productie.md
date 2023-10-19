# In productie nemen

Het in productie nemen van de OpenWOO app voor uw organisatie is makkelijker dan u welicht denkt, het is vooral belangrijk dat u 
- Van te voren alle benodigde informatie verzameld
- tijdig een PKI certificaat en DNS wijzig aanvraagt bij uw ICT leveranciers
- Tijd beschikbaar hebt voor het grondig doortesten van de keten aan de hand van de test senario's

## Benodigde informatie voor de vormgeving
- Logo in vector formaat (e.g. .svg, .eps of .ai)
- Huisstijl handboek

## Benodigde informatie voor de inrichting
- Welke afbeelding moet er worden getoond in de jumbotron? (afbeelding boven aan de landingspagina)
- Welke contact gegevens moeten er in de footer worden getoond? Denk daarbij aan
  - Adres gegevens (bezoek adres en post adres)
  - Email
  - Telefoon nr
  - Website
  - e.v.t socialmedia (Facebook, Instagram etc)
- Op welk (sub) domein moet de pagina worden getoond? b.v. open.`uw organisatie naam`.nl
- Moet er gebruik worden gemaakt van een custom certificaat? bijvoorbeeld PKIo
- Word er gekoppeld op een of meerder zaaksystemen? zo ja welke
- Word er gekoppeld op een of meerder raadsinformatie systemen? zo ja welke
- Word er gekoppeld op CMS van de huidige website? zo ja welke

## Acties voor uitvragende organisatie

- [ ] Verzamelen en aanleveren benodigde informatie voor de vormgeving
- [ ] Verzamelen en aanleveren benodigde informatie voor de inrichting
- [ ] Aanleveren voor beoogde domein naam
- [ ] Aanvragen en aanleveren certificaat (indien custom zoals PKIo)
- [ ] Verzamelen en aanleveren beoogde zaaksystemen denk hierbij aan
  - [ ] Endoint (waar kan de OpenWoo App bevragen)
  - [ ] Credentials (hoe kan de OpenWoo App zich authentiseren)
  - [ ] Protocol (welk protocol moet er worden gebruik e.g. xxllnc search, zgw, stuf, zds etc)
- [ ] Verzamelen en aanleveren beoogde raadsinformatie denk hierbij aan
   - [ ] Endoint (waar kan de OpenWoo App bevragen)
   - [ ] Credentials (hoe kan de OpenWoo App zich authentiseren)
- [ ] Verzamelen en aanleveren gegevens van website
- [ ] DPIA opstellen
- [ ] Inregelen DNS voor (sub) domein

## Acties voor leverancier

- [ ] Uitbreiden of aanmaken NL Design tokens aan de hand van de informatie voor de vormgeving
- [ ] Inrichten van de website aan de hand van de informatie voor de inrichting
- [ ] Inrichten van koppelingen aan de hand van aangeleverde informatie
- [ ] Globaal doortesten aan de hand van test senario's (voor zover mogenlijk zonder toegang tot zaaksysteem)
- [ ] Aan uitvrager laten weten dat er een acceptatie kan plaatsvinden

Wat doet de leverancier niet
- Aanleveren WCAG raportage (deze staat [hier]())
- Aanleveren pen test (deze staat [hier]())

## Naar productie (Acceptatie)

- [ ] Doorlopen van de [Acceptatie tests]()
- [ ] Website laten controleren en reviewen door communicatieafdeling
- [ ] Indien alles correct, aan leverancier laten weten dat er geaccepteerd is.
