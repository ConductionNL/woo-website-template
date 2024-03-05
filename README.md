# Over de Woo en OpenWoo.app

> **Ondersteuning en bijeenkomsten**
>
> 
> Meer weten over deze oplossing? Dat kan! Hiervoor hebben we een apart [Slack kanaal](https://samenorganiseren.slack.com/archives/C067Q3UE9F0) binnen Common Ground. We helpen je daar graag verder. Uiteraard kan je ook altijd mailen naar [info@conduction.nl](mailto:info@conduction.nl)
>
> Tevens worden vanuit de aangesloten leveranciers worden regelmatig webinars georganiseerd. 
> [14 Maart 11:00 | Community Meeting](https://www.linkedin.com/events/openwoo-appcommunitymeetingmaar7164180127860383744/comments/). 
> [25 Maart 13:13 | Webinar Sim-Groep](https://www.simgroep.nl/toekomstbestendige-woo-oplossing)
> 
> Terug kijken afgelopen webinars en meetings?
>
> - [14-02-2024 | Community meeting](https://www.youtube.com/watch?v=ri5U8x-lsxo)
> - [30-01-2024 | OpenGemeente Woobinar](https://vimeo.com/909134953)
> - [19-12-2023 | xxllnc Demo ](https://www.youtube.com/watch?v=_FGpUYH1yd0)
> - [17-11-2023 | xxllnc Woobinar ](https://www.youtube.com/watch?v=NCnLDEoPh5A)

De Wet Open Overheid (Woo) is een initiatief gericht op het verbeteren van de openbaarheid van overheidsinformatie. Het doel is om overheidsinformatie beter toegankelijk te maken voor iedereen. Meer informatie over de Wet Open Overheid kan [hier](https://www.open-overheid.nl/themas/wet-open-overheid/) worden gevonden.

De implementatie van de Wet Open Overheid brengt twee kernuitdagingen met zich mee:

1. **Diversificatie van categorieën:**
   Met de tijd zullen er steeds meer categorieën, variërend van rapporten en besluiten tot datasets en onderzoeksresultaten. Deze diversiteit vereist een flexibel systeem dat in staat is om verschillende typen categorieën adequaat te hanteren. Dat maakt het op voorhand onmogelijk om één bron (zoals zaaksysteem of raadsinformatiesysteem) richting de toekomst aan te wijzen.

2. **Proactieve Publicatie:**
   Overheden moeten informatie proactief publiceren. Dit betekent dat publicatie onderdeel moet worden van het normale werkproces. Hiermee is het richting de toekomst niet haalbaar om Woo-publicaties handmatig via een apart systeem (bijvoorbeeld CMS-website) te laten verlopen.

Deze uitdagingen kunnen niet effectief worden aangepakt met een enkel Content Management Systeem (CMS) of door levering vanuit één systeem. Handmatige publicatie van alle overheidsinformatie zou een aanzienlijke personele inzet vereisen, wat onpraktisch is. Daarbij komt het voor dat verschillende categorieën vaak verdeeld zijn over meerdere systemen, wat de situatie verder compliceert.

## Deelnemende leveranciers

| Conduction                                                                              | Xxllnc                                                                           | Open Gemeente                                                                                     | Sim Groep                                                                      | Acato                                                                          | Notubiz | Io |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/conduction_svg.svg" height="30" />](https://www.conduction.nl/) | [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/xxllnc_orgineel.svg" height="30" />](https://xxllnc.nl/) | [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/opengemeente_orgineel.svg" height="30" />](https://www.opengemeenten.nl/) | [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/sim_svg.svg" height="30" />](https://www.simgroep.nl/) | [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/acato_orgineel.svg" height="30" />](https://acato.nl/) | [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/notubiz_svg.svg" height="30" />](https://www.notubiz.nl/)| [<img src="https://raw.githubusercontent.com/ConductionNL/woo-website-template/main//docs/logos/io_orgineel.svg" height="30" />](https://www.drupalvoorgemeenten.nl/)|

## Belangrijkste functionaliteiten en voordelen van OpenWoo.app:
- **Centrale Index Pagina:** Een overzichtelijke locatie voor alle openbare data van uw organisatie voor verbeterde vindbaarheid van informatie.
- **Multibron Dataweergave:** Een naadloze integratie en presentatie van data uit diverse bronnen, zoals het zaaksysteem, websites, raadsinformatiesystemen en archieven.
- **Keuze uit Publicatieplatformen:** Met opties zoals NL Design React en Open Gemeente Typo 3, biedt OpenWoo.app flexibiliteit in de manier waarop uw gegevens gepubliceerd worden, terwijl het tegelijkertijd eenvoudig integreerbaar is in uw huidige website.
- **Automatische Data-aanlevering:** Efficiënte aanlevering bij landelijke indexen zoals KOOP en Woogle, door middel van sitemap.xml-bestanden en API's, vergroot het bereik en de zichtbaarheid van uw gegevens.
- **Proactieve Publicatie:** Automatiseer het publicatieproces en verminder handmatige inspanningen met de slimme, proactieve publicatiefuncties van OpenWoo.app.
- **Toekomstbestendig en Veilig:** Bereid uw organisatie voor op toekomstige ontwikkelingen met configureerbare publicatietypen en verhoog de veiligheid en efficiëntie door het verminderen van directe bevragingen op bronnen. 

![epe.png](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/epe.png "Woo Website van de Gemeente Epe")

Wil je meer weten over de functionaliteiten van de Open Woo-app? Kijk dan op de [architectuur pagina](/docs/product/Features.md).

## Oplossing van OpenWoo.app:

OpenWoo.app gaat verder dan alleen deze basisfunctionaliteiten door een geïntegreerde oplossing aan te bieden die bestaat uit essentiële componenten:

- **Koppelvlak naar KOOP en Woogle voor de Landelijke Index:** Deze interface faciliteert een gestandaardiseerde verbinding met het Kennis- en Exploitatiecentrum Officiële Publicaties (KOOP) en Woogle van de WOOverheid van de UvA.
- **Federatieve Connectie:** Door gebruik te maken van een op FSC/NLX gebaseerde connectie, worden de zoekindexen van deelnemende organisaties samengevoegd tot één virtuele zoekindex.
- **Zoekpagina (Optioneel):** Een op NL Design gebaseerd publicatieplatform dat belanghebbenden in staat stelt om naar relevante informatie te zoeken.
- **Open WooService:** Deze module verzamelt informatie uit verschillende bronnen, waardoor een gecentraliseerde toegang tot diverse categorieën van gegevens mogelijk wordt.
- **Open Index:** Een opgebouwde index van openbare informatie die samen met andere zoekindexen een landelijke federatie vormt.
- **Overige Bronnen (Optioneel):** Bronnen zoals het Zaaksysteem, Raadsinformatiesysteem en archief kunnen optioneel worden gekoppeld, met ondersteuning voor handmatige uploads via het CMS van uw huidige website. 


Deze geïntegreerde aanpak zorgt voor een naadloze, efficiënte en effectieve implementatie van de Wet Open Overheid (Woo), waardoor overheidsorganisaties hun informatie op een gebruiksvriendelijke en toegankelijke wijze kunnen delen. OpenWoo.app is niet alleen een tool om te voldoen aan de Wet open overheid (Woo), maar een strategische partner die handwerk vermindert, transparantie bevordert, en de toegankelijkheid van overheidsinformatie aanzienlijk verbetert.

De OpenWoo.app architectuur is bewust ontworpen om gemeenten de keuze te geven in hoe zij willen omgaan met de Wet Open Overheid en KOOP
- Wil je automatisch publiceren uit je huidige zaaksysteem? dat kan!
- Liever publiceren uit je huidige website? dat kan ook!
- Of wil je bij KOOP aanleveren vanuit een kleine openzaak installatie? dan kan dat natuurlijk ook.

![Website Architectuur](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/components.svg "Website Architectuur")

Wil je meer weten over de architectuur van de OpenWoo.app en uit welke componenten het bestaat? Kijk dan op de [architectuur pagina](/docs/techniek/Architectuur.md).

## Praktijkvoorbeelden

Op dit moment wordt de OpenWoo.app al door een aantal organisaties gebruikt

| Organisatie | Type | Woo Pagina | Woo Bron | Status |
|-------------|------|------------|--------------|--------|
| [Noordwijk](https://www.noordwijk.nl/) | Gemeente |  [Pagina](open.noordwijk.nl) | Zaaksysteem.nl  | Productie |
| [Epe](https://www.epe.nl/) | Gemeente |[Pagina](https://open.epe.nl/) | Zaaksysteem | Productie  |
| [Tubbergen](https://www.tubbergen.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-tubbergen/) | Zaaksysteem.nl  | Acceptatie |
| [Dinkelland](https://www.dinkelland.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-dinkelland/) | Zaaksysteem.nl | Acceptatie |
| [Gouda](https://www.gouda.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-gouda/) | Zaaksysteem.nl | Acceptatie |
| [Rotterdam (Alleen vormgeving)](https://www.rotterdam.nl/) | Gemeente |[Pagina](https://conductionnl.github.io/woo-website-rotterdam/) | Demo Omgeving                   | Demo       |
| [Noaberkracht](https://www.dinkelland.nl/noaberkracht-dinkelland-tubbergen) | Samenwerkingsverband | [Pagina](https://conductionnl.github.io/woo-website-noaberkracht/) | Zaaksysteem.nl | Acceptatie |
| [Leiden (Alleen vormgeving)](https://gemeente.leiden.nl/) | Gemeente | [Pagina](https://conductionnl.github.io/woo-website-leiden/) | Demo Omgeving           | Demo       |
| [Xxllnc (Demo omgeving)](https://xxllnc.nl/) | Leverancier | [Pagina](https://conductionnl.github.io/woo-website-xxllnc/) | Demo Omgeving           | Demo       |

## Toekomstplannen

Er komen steeds meer toepassingen voor het publiceren van overheidsinformatie. Denk bijvoorbeeld aan het publiceren van datasets, algoritmes en besluiten. Deze toepassingen zullen in de toekomst ook onderdeel worden van de Wet Open Overheid. Daarom is het belangrijk dat de Open WOO App flexibel is en kan worden aangepast aan de veranderende behoeften van de overheid. Kijk voor meer informatie over onze ontwikkelplannen op de [roadmap](/docs/product/Roadmap.md)
