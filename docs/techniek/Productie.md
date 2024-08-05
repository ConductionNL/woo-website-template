# In productie nemen

Het in productie nemen van OpenWoo.app voor uw organisatie is makkelijker dan u wellicht denkt. Hieronder vindt u de stappen die u moet volgen om succesvol over te gaan naar de productiefase.

- (optioneel) Kies een [leverancier](/docs/product/Kosten.md) om de OpenWoo.app bij af te nemen. Of implementeer hem zelfstandig.
- Verzamel van tevoren alle benodigde informatie
- Vraag tijdig een PKI-certificaat en DNS-wijziging aan bij uw ICT-leverancier(s)
- Zorg dat u tijd beschikbaar hebt voor het grondig doortesten van de keten aan de hand van de testscenario's

Als u de OpenWoo.app zelfstandig installeert zult u de [acties voor leverancier](#acties-voor-leverancier) uiteraard zelf moeten uitvoeren.

## Benodigde informatie voor de vormgeving

Om de vormgeving van OpenWoo.app aan te passen aan uw organisatie, heeft uw leverancier of u de volgende informatie nodig:

- Logo in vector formaat (e.g. `.svg`, `.eps` of `.ai`)
- Huisstijlhandboek of website die als voorbeeld gebruikt kan worden
- Contactgegevens (naam, e-mailadres, telefoonnummer en functie) van een medewerker die eventuele vragen over de huisstijl kan beantwoorden.

Om te beoordelen of uw organisatie NL Design tokens nodig heeft of moet aanpassen kunt u het [landelijke overzicht van NL Design tokens](https://github.com/nl-design-system/themes/tree/main/proprietary) raadplegen.

## Benodigde informatie voor de inrichting

Voor de inrichting van OpenWoo.app heeft uw leverancier of u de volgende informatie nodig:

- Welke afbeelding moet er worden getoond in de jumbotron? (afbeelding boven aan de landingspagina)
- Welke contactgegevens moeten er in de footer worden getoond? Denk daarbij aan:
  - Adresgegevens (bezoekadres en postadres)
  - Email
  - Telefoonnummer
  - Website
  - e.v.t socialmedia (Facebook, Instagram etc)
  - Verplichte context pagina's waarvoor wordt doorverwezen naar uw eigen site (privacy, over deze pagina, toegankelijkheid)
  - Overige website waar u naar wilt verwijzen
- Op welk (sub) domein moet de pagina worden getoond? b.v. open.`uw organisatienaam`.nl
- Moet er gebruik worden gemaakt van een custom certificaat? Bijvoorbeeld PKIo
- Wordt er gekoppeld op een of meerdere zaaksystemen? Zo ja, welke
- Wordt er gekoppeld op een of meerdere raadsinformatiesystemen? Zo ja, welke
- Wordt er gekoppeld op CMS van de huidige website? Zo ja, welke
- Is er een wens voor het koppelen op overige systemen? (zoals geo, DROP-publicaties of PowerBrowser)
- E-mailadres waar eventuele foutrapportages naar toe kunnen worden gestuurd

## Acties voor uitvragende organisatie

Om het neerzetten van een omgeving soepel te laten verlopen, zijn er verschillende acties die de uitvragende organisatie zelf moet ondernemen:

- [ ] Verzamelen en aanleveren benodigde informatie voor de vormgeving
- [ ] Verzamelen en aanleveren benodigde informatie voor de inrichting
- [ ] Aanleveren voor beoogde (sub)domeinnaam
- [ ] Aanvragen en aanleveren bij leverancier van certificaat (indien custom zoals PKIo)
- [ ] Verzamelen en aanleveren beoogde zaaksystemen, denk hierbij aan:
  - [ ] Endpoint (waar kan de OpenWoo.app bevragen?).
  - [ ] Credentials (hoe kan de OpenWoo.app zich authenticeren?).
  - [ ] Protocol (welk protocol moet er worden gebruik e.g. xxllnc search, ZGW, StUF, ZDS etc.).
- [ ] Verzamelen en aanleveren beoogde raadsinformatie denk hierbij aan:
  - [ ] Endpoint (waar kan de OpenWoo.app bevragen?).
  - [ ] Credentials (hoe kan de OpenWoo.app zich authenticeren?).
- [ ] Verzamelen en aanleveren gegevens van websitekoppeling indien gewenst.
- [ ] DPIA opstellen.
- [ ] Inregelen DNS voor (sub)domein.
- [ ] Inrichten zaaksysteem (zie configuratie).

## Acties voor leverancier

Aan de hand van de acties voor de opdrachtgever kan uw leverancier vervolgens aan de slag. Als u geen leverancier heeft moet u deze acties zelf verzetten.

- [ ] Uitbreiden of aanmaken NL Design tokens aan de hand van de informatie voor de vormgeving.
- [ ] Inrichten van de app aan de hand van de informatie voor de inrichting.
- [ ] Inrichten van koppelingen aan de hand van aangeleverde informatie.
- [ ] Globaal doortesten aan de hand van testscenario's (voor zover mogelijk zonder toegang tot zaaksysteem).
- [ ] Aan uitvrager laten weten dat er een acceptatie kan plaatsvinden.

Wat doet de leverancier niet

- Aanleveren WCAG-rapportage (deze staat [hier](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/WCAG-Raportage.pdf))
- Aanleveren PEN-test (deze staat [hier](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/PENTEST-Raportage.pdf))

## Naar productie (Acceptatie)

Als uw leverancier alles heeft klaar gezet is het tijd voor acceptatie en livegang

- [ ] Doorlopen van de [Acceptatietests](/docs/techniek/Tests.md)
- [ ] Website laten controleren en reviewen door communicatieafdeling
- [ ] Indien alles correct, aan leverancier laten weten dat er geaccepteerd is.
- [ ] Op eigen website verwijzen naar de OpenWoo.app (deeplinks)
- [ ] Vier de livegang met een feestje
