# Koop Hulp(je)

Vanuit de gemeente Buren is Koophulpje.nl opgezet. Het doel van Koophulpje is het doen van een proof of concept (poc) met de OpenWoo.app en het stellen van integrale zoek vragen aan de hand van het federale data stelsel (FSC) en API's.

## Voordelen

- Het uitvragen van informatie via API's is gemakkelijker te integreren dan sitemap.xml
- Het uitvragen van informatie via API's maakt de sitemap.xml overbodig
- Het federaliseren van de API's maakt een index onnodig

## Opzet

- Koophulpje.nl is een 'platte' React pagina, ze beschikt niet over een eigen server, maar maakt direct gebruikt van één API
- Deze API bevat de gegevens van meerdere gemeenten aan de hand van federale bevraging
- Ter vergelijking creëren we ook sitemap en robot bestanden voor dezelfde gemeenten t.b.v van de door KOOP voorgestelde harverster

## Bevindingen

Dataveiligheid: Tijdens vroege testen kwam snel naar voren dat het via API de bron bevragen in plaats van het opbouwen van een index een databeveiligheidsverbeteringen opleverde. Foutieve test data kon snel worden verwijderd en was na verwijdering in het bronsysteem geen onderdeel meer van het federale netwerk en daardoor niet meer vindbaar via Koophulpje.
Hoewel dit bij het testen vooral fijn was, levert het bij daadwerkelijke productie gang een sterk voordeel op. Het stelt organisaties in staat om gegevens terug te trekken. Bijvoorbeeld bij het per ongeluk publiceren van persoonsgegevens kunnen de gegevens onmiddellijk worden teruggetrokken (i.p.v. dat er moet worden gewacht op de volgende keer data de harvester langs komt).

Schaalbaarheid: Het generen van sitemap.xml-bestanden aan de hand van grotere datasets (1000+) blijkt intensief te zijn

Belasting en kosten: Het genereren van grote sitemap bestanden is server intensief, het confronteert de publicerende overheid daarmee met relatief hoge kosten. We vermoeden dat dit ook geld aan de kant van de harvester.  

Actualiteit: Doordat de sitemap xml bestanden groot zijn blijkt het niet uitvoerbaar om ze bij elke wijziging bij te werken (bijvoorbeeld toegekende vergunning of afgeronde zaak) ipv daarvan worden ze 's nachts gegenereerd. Dit betekent dat het koppelvlak per definitie achterloopt.

We interpreteren de WOO als alle niet vertrouwelijke gegevens moeten pro-actief openbaar worden gemaakt. Door gebruik te maken van API's in plaats van sitemap xml bestanden zorgen we dat de gegevens alleen worden verstuurd op het moment dat ze worden opgevraagd. Dat vergroot het dataverkeer bij gebruik, maar voorkomt dataverkeer vooraf.

## Conclusie

De voorgestelde oplossing van Sitemap.xml bestanden lijkt in de praktijk onveiliger, duurder en minder actueel dan het inzetten van een API.
