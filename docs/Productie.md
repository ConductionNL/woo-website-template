# In productie nemen

Het in productie nemen van de OpenWOO app voor uw organisatie is makkelijker dan u wellicht denkt, het is vooral belangrijk dat u 
- Kies een [leverancier](https://openwoo.app/pages/Documentatie/Kosten) om de OpenWOO App bij af te nemen. OF implementeer hem zelfstandig.
- Van tevoren alle benodigde informatie verzameld
- Tijdig een PKI-certificaat en DNS wijziging aanvraagt bij uw ICT-leverancier(s)
- Tijd beschikbaar heeft voor het grondig doortesten van de keten aan de hand van de testscenario's

Als u de OpenWOO APP zelfstandig installeert zult u de [acties voor leverancier](#acties-voor-leverancier) uiteraard zelf moeten uitvoeren.

## Benodigde informatie voor de vormgeving
- Logo in vectorformaat (e.g. `.svg`, `.eps` of `.ai`)
- Huisstijlhandboek of website die als voorbeeld gebruikt kan worden
- Contactgegevens (naam, e-mailadres, telefoonnummer en functie) van een medewerker die eventuele vragen over de huisstijl kan beantwoorden.

## Benodigde informatie voor de inrichting
- Welke afbeelding moet er worden getoond in de jumbotron? (afbeelding boven aan de landingspagina)
- Welke contact gegevens moeten er in de footer worden getoond? Denk daarbij aan
  - Adresgegevens (bezoekadres en postadres)
  - Email
  - Telefoonnummer
  - Website
  - e.v.t socialmedia (Facebook, Instagram etc.)
  - Verplichte contextpagina's waarvoor wordt doorverwezen naar uw eigen site (privacy, over deze pagina, toegankelijkheid)
  - Overige websites waar u naar wilt verwijzen
- Op welk (sub)domein moet de pagina worden getoond? b.v. open.`uw organisatie naam`.nl
- Moet er gebruik worden gemaakt van een custom certificaat? Bijvoorbeeld PKIo
- Wordt er gekoppeld op een of meerdere zaaksystemen? Zo ja, welke?
- Wordt er gekoppeld op een of meerdere raadsinformatie systemen? Zo ja, welke?
- Wordt er gekoppeld op CMS van de huidige website? Zo ja, welke?
- Is er een wens voor het koppelen op overige systemen? (zoals Geo, DROP-publicaties of PowerBrowser)
- E-mailadres waar eventueel foutraportages naar kunnen worden verstuurd.

## Acties voor uitvragende organisatie

- [ ] Verzamelen en aanleveren benodigde informatie voor de vormgeving
- [ ] Verzamelen en aanleveren benodigde informatie voor de inrichting
- [ ] Aanleveren voor beoogde (sub)domeinnaam
- [ ] Aanvragen en aanleveren bij leverancier van certificaat (indien custom zoals PKIo)
- [ ] Verzamelen en aanleveren beoogde zaaksystemen, denk hierbij aan:
  - [ ] Endpoint (waar kan de OpenWoo App bevragen).
  - [ ] Credentials (hoe kan de OpenWoo App zich authentiseren).
  - [ ] Protocol (welk protocol moet er worden gebruik e.g. xxllnc search, ZGW, StUF, ZDS etc.).
- [ ] Verzamelen en aanleveren beoogde raadsinformatie denk hierbij aan:
   - [ ] Endpoint (waar kan de OpenWoo App bevragen).
   - [ ] Credentials (hoe kan de OpenWoo App zich authenticeren).
- [ ] Verzamelen en aanleveren gegevens van websitekoppeling indien gewenst.
- [ ] DPIA opstellen.
- [ ] Inregelen DNS voor (sub)domein.
- [ ] Inrichten zaaksysteem (zie configuratie).

## Acties voor leverancier

- [ ] Uitbreiden of aanmaken NL Design tokens aan de hand van de informatie voor de vormgeving.
- [ ] Inrichten van de app aan de hand van de informatie voor de inrichting.
- [ ] Inrichten van koppelingen aan de hand van aangeleverde informatie.
- [ ] Globaal doortesten aan de hand van testscenario's (voor zover mogelijk zonder toegang tot zaaksysteem).
- [ ] Aan uitvrager laten weten dat er een acceptatie kan plaatsvinden.

Wat doet de leverancier niet
- Aanleveren WCAG rapportage (deze staat [hier]())
- Aanleveren pentest (deze staat [hier]())

## Naar productie (Acceptatie)

- [ ] Doorlopen van de [Acceptatietests]()
- [ ] Website laten controleren en reviewen door uw communicatieafdeling
- [ ] Indien alles correct, aan de leverancier laten weten dat er geaccepteerd is.
- [ ] Op eigen website verwijzen naar de OpenWOO Pagina's (deeplinks)

