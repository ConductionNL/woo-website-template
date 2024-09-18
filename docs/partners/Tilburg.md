# Tilburg

## Context

De gemeente Tilburg wil graag een WOO-publicatieplatform inrichten met daarbij een focus op zo min mogelijk handmatige acties. Zij heeft hiervoor de leverancier Acato aangetrokken. Zij heeft kennis genomen van OpenWoo.app en wil graag kijken of dit onderdeel kan zijn van haar oplossing. Acato en Conduction hebben hier al vaker contact over gehad en het lijkt ons inderdaad een reële oplossing.

We hebben hierbij gekeken naar wat er reeds beschikbaar is en zonder uitbreiding kan worden ingezet, welke componenten er nog uitgebreid zouden moeten worden en welke er überhaupt zouden moeten worden gebouwd. Dat brengt ons tot het volgende inzicht.

## Componenten

De gemeente Tilburg wil Woo-publicaties graag goedkeuren en aanpassen voordat ze met het publicatieplatform, KOOP en andere afnemers worden gedeeld. Dat vergt een aantal ontwikkelingen, we hebben per component aangegeven `mogelijke uitvoerder` Component (Ontwikkeling):

### Publicatieplatformen (laag 5: UI)

Naast de standaard koppelingen (KOOP, WooGLe), heeft de gemeente een keuze te maken met betrekking tot het publicatieplatform. Voor Tilburg lijkt dat neer te komen op 3 opties (integratie in de website, een losse themapagina of de reeds beschikbare zoekpagina):

- **`n.v.t` KOOP (Beschikbaar):** De koppeling met KOOP kan gewoon worden overgenomen.
- **`n.v.t` WooGLe (Beschikbaar):** De koppeling met WooGLe kan gewoon worden overgenomen.
- **`OpenGemeente` Website (keuze / uitbreiden):** Vanuit Open Gemeenten is er een Typo3 plugin beschikbaar voor het integreren van OpenWoo.app in de bestaande site.
- **`Acato/OpenGemeente` Themapagina (keuze / uitbreiden):** Vanuit Open Gemeenten wordt een losse TYPO3 themapagina aangeboden, maar er zou er ook een kunnen worden gebouwd door Acato. Een themapagina zou een mooie oplossing kunnen zijn voor Tilburg maar is naar waarschijnlijkheid niet direct herbruikbaar door andere gemeenten.
- **`Acato` Zoekpagina (keuze / uitbreiden):** Er is momenteel reeds een zoekpagina beschikbaar, maar deze kan zeker nog wat doorontwikkeling aan de hand van gebruikersonderzoek gebruiken. Dit zou kunnen worden uitgevoerd door Acato, voordeel daarvan is dat de ontwikkeling direct bijdraagt aan de gemeenten die deze pagina reeds gebruiken.
- **`Acato` Woo Dashboard:** Op dit moment beschikt de OpenIndex nog niet over een beheeromgeving. Deze zal dus in zijn geheel ontwikkeld moeten worden.

### Services (laag 4)

- **Backend for frontend:** Op dit moment beschikt de Open Index nog niet over een beheeromgeving. Deze zal dus in zijn geheel ontwikkeld moeten worden.

### Integratie (laag 3)

- **`Conduction`OpenWoo Service (Uitbreiden):** De OpenWoo service is reeds beschikbaar en in gebruik, toch verwachten wij dat er nog kleine aanpassingen nodig zijn voor het inlezen van nog niet ondersteunde bronnen (Notubiz, iBabs, SharePoint en DeVault) als het bevragen via de integratievoorziening. Wat in ieder geval positief is, is dat we momenteel reeds in gesprek zijn met Notubiz en DeVault over een koppeling.
- **`n.v.t` Federatief Netwerk (Beschikbaar):** Het federatieve netwerk van OpenWoo (gebaseerd op FSC/NLX) is reeds beschikbaar en in gebruik. We verwachten niet dat hier aanpassingen op nodig zijn.
- **`Tilburg` Integratieplatform (Beschikbaar):** De gemeente Tilburg heeft zelf reeds een integratieplatform beschikbaar, hiermee kunnen de in Tilburg reeds beschikbare bronnen worden benaderd door de OpenWoo-service. We verwachten niet dat er aanpassingen nodig zijn aan de integratievoorziening.
- **`Conduction` OpenIndex (Uitbreiden):** Voor het indexgedeelte van de OpenWoo.app geldt dat deze publicaties niet langer automatisch door moet zetten, maar pas na een controle en aanvulling door een medewerker. Dat betekent een aantal zaken, om te beginnen zal de index een soort van buffer moeten kunnen zijn voor publicatieobjecten daarnaast zullen er API-endpoints en business logica moeten komen voor het beheer van publicaties. Hierbij doen zich ook een aantal vragen voor als een publicatie daadwerkelijk wordt aangepast (is dan de bron of index leidend). Met name het uitvogelen van de benodigde business logica zal nog flink wat uitwerking vragen.

### Bronnen (laag 2)

- **`n.v.t` Zaaksysteem (xxllnc):** xxllnc wordt reeds ondersteund door OpenWoo.app.
- **`n.v.t` Raadsinformatiesysteem (Notubiz):** Notubiz wordt momenteel nog niet ondersteund door OpenWoo.app, hier lopen wel gesprekken over met Notubiz.
- **`n.v.t` Bestuursinformatiesysteem (iBabs):** iBabs wordt momenteel nog niet ondersteund door OpenWoo.app, er zijn wel meerdere gemeenten met die wens dus hier zou samenwerking in kunnen worden gezocht.
- **`n.v.t` Website (TYPO3):** TYPO3 wordt reeds ondersteund door OpenWoo.app.
- **`n.v.t` DMS (SharePoint):** SharePoint wordt momenteel nog niet ondersteund door OpenWoo.app.
- **`n.v.t` Archief (DeVault):** DeVault wordt momenteel nog niet ondersteund door OpenWoo.app, hier lopen wel gesprekken over met DeVault.

## Architectuur

![OpenWeb Architecture](https://raw.githubusercontent.com/ConductionNL/woo-website-template/main/docs/Tilburg.svg)

## Overige werkzaamheden

- **`Acato` Project management:**
- **`Acato` Validatie:**
- **`Acato` Design:**
- **`Acato` Gebruikers Onderzoek:**
- **`Conduction` Architectureel advies:**
