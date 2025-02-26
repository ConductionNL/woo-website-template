# Over Woo en OpenWoo.app

Ondersteuning en bijeenkomsten

Wil je meer weten over deze oplossing? We hebben een speciaal Slack kanaal binnen Common Ground waar we graag helpen. Je kunt ook altijd contact opnemen via info@conduction.nl. Bezoek ook [OpenWoo.app](OpenWoo.app) voor meer informatie.

## Woo-container configureren en starten
Voor het opzetten van de Woo-container en image kun je de laatste versie van het image vinden hier.

Stap 1: Image downloaden
Download het laatste image met:

`docker pull ghcr.io/conductionnl/woo-website-v2:latest`

Stap 2: Container starten
Om de container te starten, gebruik de volgende docker run-opdracht:

`docker run -p [doelpoort]:8080 ghcr.io/conductionnl/woo-website-v2:latest`

Voorbeeld: om de applicatie beschikbaar te maken op poort 3000 op je lokale machine, voer je het volgende uit:

`docker run -p 3000:8080 ghcr.io/conductionnl/woo-website-v2:latest`

