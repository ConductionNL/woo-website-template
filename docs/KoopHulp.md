# Koop Hulp(je)

Vanuit de gemeente Buren is koophulpje.nl opgezet. Het doel van koophulpje is het doen van een proof of concept (poc) met de OpenWoo.app en het stellen van integrale zoek vragen aan de hand van het federale data stelsel (FSC) en API's.

## Voorgeschiedenis
asd

## These
- Het uitvragen van informatie via API's is gemakenlijker te integreren dan sitemap.xml
- Het uitvragen van informatie via API's maakt de sitemap.xml overbodig
- Het federaliseren van de API's maakt een index onnodig

## Opzet 
- Koophulpje.nl is een 'plate' react pagina, ze beschickt niet over een eigen server maar maakt direct gebruikt van één API
- Deze API bevat de gegevens van meerdere gemeenten aan de hand van federale bevraging
- Ter vergelijking creëren we ook sitemap en robot bestanden voor dezelfde gemeenten t.b.v van de door KOOP voorgestelde haverster

## Bevindingen

Dataveiligheid: Tijdens vroege testen kwam snel naar voren dat het via API de bron bevragen ipv het opbouwen van een index een databeiligheids verbeteringen opleverdere. Foutieve test data kon snel worden verwijderd en was na verwijdering in het bron systeem geen onderdeel meer van het federale netwerk en daardoor nietmeer vindbaar via koophulpje.
Hoewel dit bij het testen vooral fijn was, levert het bij daad werkenlijke productie gang een sterk voordeel op. Het stelt organisaties in staat om gegevens terug te treken. Bijvoorbeeld bij het perongeluk publiceren van persoons gegevens kunnen de gegevens onmiddenlijk worden terug getrokken (ipv dat er moet worden gewacht op de volgende keer data de harvester langs komt)

Schaalbaarheid: Het generen van sitemap xml bestanden aan de hand van grotere datasets (1000+) blijkt intensief te zijn 

Belasting en kosten: Het genereren van grote sitemap bestanden is server intensief, het confronteerd de publicerende overheid daarmee met realtief hoge kosten. We vermeoden dat dit ook geld aan de kant van de harvester  

Actualitiet: Doordat de sitemap xml bestanden groot zijn blijkt het niet uitvoerbaar om ze bij elke wijziging bij te werken (bijvoorbeeld toegekende vergunning of afgeronde zaak) ipv daarvan worden ze snachts gegenereerd. Dit betekend dat het koppelvlak per defintie achterloopt.


We interpeteren de WOO als alle niet vertrouwelijke gegevens moeten pro-actief openbaar worden gemaakt. Door gebruik te maken van API's in plaats van sitemap xml bestanden zorgen we dat de gegevens alleen worden verstuurd op het moment dat ze worden opgevraagd. Dat vergroot het data verkeer bij gebruikt maar voorkomt data verkeer vooraf. Tijdens de vergelijking 

## Conclusie

De voorgestelde oplossing van Sitemap.xml bestanden lijkt in de praktijk onveiliger, duurder en minder actueel dan het inzetten van een API.



