# Testscenario's

We kunnen de testscript opsplitsen in de volgende categorieën:

1. Opzet en voorwaarden: Hier beschrijven we de omgevingseisen en initialisatieprocedures.
2. Testcases: De daadwerkelijke testscenario's.
3. Schoonmaak: Procedures om de omgeving terug te brengen naar de oorspronkelijke staat.

## 1. Opzet en voorwaarden

**Omgevingseisen**: Zorg ervoor dat je een lokale/testversie van de (Open) WOO Website Template hebt draaien.

**Initialisatie**: Configureer de `API_BASE_URL` in de WOO Website Template om te wijzen naar het test-zaaksysteem.

   Zorg ervoor dat het zaaksysteem is geconfigureerd zoals beschreven in de documentatie.

## 2. Testcases

### Testcase 1: Een nieuwe WOO-publicatie toevoegen in het zaaksysteem

**Doel**: Verifiëren dat een nieuw WOO-publicatie correct wordt weergegeven op de WOO-website.

**Stappen**:

1. Voeg een nieuw WOO-publicatie toe in het zaaksysteem met een publicatiedatum die nu is of in het verleden.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer of het nieuwe verzoek correct wordt weergegeven.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet zichtbaar zijn op de WOO-website en moet alle relevante informatie correct weergeven.

### Testcase 2: Een nieuwe WOO-publicatie klaarzetten in het zaaksysteem

**Doel**: Verifiëren dat een nieuw WOO-publicatie correct pas wordt weergegeven op de WOO-website na de publicatiedatum.

**Stappen**:

1. Voeg een nieuw WOO-publicatie toe in het zaaksysteem met een publicatiedatum die in de toekomst is.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer of het nieuwe verzoek niet wordt weergegeven.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet niet zichtbaar zijn op de WOO-website.

### Testcase 3: Een nieuwe WOO-publicatie maken zonder publiceren

**Doel**: Verifiëren dat een nieuwe WOO-publicatie pas wordt weergegeven op de WOO-website met de publicatiedatum.

**Stappen**:

1. Voeg een nieuw WOO-publicatie toe in het zaaksysteem zonder een publicatiedatum.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer of het nieuwe verzoek niet wordt weergegeven.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet niet zichtbaar zijn op de WOO-website.

### Testcase 4: Synchronyseren van categoriën

**Doel**: Verifiëren dat WOO-publicatie's onder de juiste categorie worden overgenomen uit het zaaksysteem.

**Stappen**:

1. Voeg voor iedere onder `woo_categorie` genoemde categorie een nieuwe WOO-publicatie toe in het zaaksysteem met een publicatiedatum in het verleden.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer voor iedere WOO-publicatie of de nieuwe publicatie correct wordt weergegeven.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet niet zichtbaar zijn op de WOO-website.

### Testcase 5: Een WOO-publicatie verwijderen uit het zaaksysteem

**Doel**: Verifiëren dat een verwijderd WOO-publicatie niet meer wordt weergegeven op de WOO-website.

**Stappen**:

1. Verwijder een bestaand WOO-publicatie uit het zaaksysteem.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer of het verwijderde verzoek niet meer zichtbaar is.

**Verwachte resultaten**:

- Het verwijderde WOO-publicatie mag niet meer zichtbaar zijn op de WOO-website.

### Testcase 6: Een WOO-publicatie depubliceren uit het zaaksysteem

**Doel**: Verifiëren dat een verwijderd WOO-publicatie niet meer wordt weergegeven op de WOO-website.

**Stappen**:

1. Voeg een nieuw WOO-publicatie toe in het zaaksysteem met een publicatiedatum die nu is of in het verleden.
2. Laat het zaaksysteem synchroniseren met de WOO-website.
3. Ga naar de WOO-website en controleer of het nieuwe verzoek correct wordt weergegeven.
4. Verwijder nu de publicatie datum op het WOO-publicatie in het zaaksysteen.
5. Laat het zaaksysteem opnieuw synchroniseren met de WOO-website.
6. Ga naar de WOO-website en controleer of het gedepubliceerde verzoek niet meer zichtbaar is.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet zichtbaar na aanmaken zijn op de WOO-website en moet alle relevante informatie correct weergeven.
- Het nieuwe WOO-publicatie moet na het aanpassen van de publicatiedatum niet meer zichtbaar zijn op de website

### Testcase 7: Volledigheid van een woo publicatie (bijlagen en omschrijving)

**Doel**: Verifiëren dat een WOO-publicatie volledig wordt weergegeven op de WOO-website.

**Stappen**:

1. Voeg een nieuwe WOO-publicatie toe in het zaaksysteem met een publicatiedatum die nu is of in het verleden en als categorie `Woo-verzoeken en -besluiten`.
2. Voeg meerdere bijlagen toe, waarvan
   - Minimaal één gelabeld als besluit (en publiek)
   - Minimaal één gelabeld als informatieverzoek (en publiek)
   - Minimaal één gelabeld als inventarisatielijst (en publiek)
   - Minimaal één niet-gelabeld (en publiek)
   - Minimaal één niet publiek
3. Geef een onderwerp op
4. Geef een omschrijving op
5. Geef meerdere thema's op, gescheiden door een ,
6. Laat het zaaksysteem synchroniseren met de WOO-website.
7. Ga naar de WOO-website en controleer of het nieuwe verzoek correct wordt weergegeven.

**Verwachte resultaten**:

- Het nieuwe WOO-publicatie moet zichtbaar zijn op de WOO-website en moet alle relevante informatie correct weergeven.
- De als besluit gemarkeerde bijlage moet worden weergegeven onder besluiten
- De als besluit gemarkeerde informatieverzoek moet worden weergegeven onder informatieverzoek
- De als besluit gemarkeerde inventarisatielijst moet worden weergegeven onder inventarisatielijst
- De overige bijlagen moeten worden weergegeven onder bijlagen
- Het zaaknummer moet zichtbaar zijn onder Kenmerk
- De omschrijving moet zichtbaar zijn onder Samenvatting
- De niet publieke bijlagen moeten niet worden weergegeven

## 3. Schoonmaak

   Verwijder alle testdata uit het zaaksysteem en de WOO-website.
