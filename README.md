# ANARCHY // RULES PATCH

Module expérimental Foundry VTT 14 / `sra2`.

## Installer

Manifeste : `https://raw.githubusercontent.com/dallemagnegaetan-debug/anarchy-rules-patch/main/module.json`

## Version 0.2.0

Archive distribuée : [`dist/anarchy-rules-patch-v0.2.0.zip`](dist/anarchy-rules-patch-v0.2.0.zip). Elle contient `module.json`, `scripts/armor.js` et `scripts/consumables.js`.

Armures principales : activation exclusive (v0.1). Consommables : activation depuis le personnage, un objet temporaire est créé pour les RR et un éventuel sort maintenu en plus. Le terminer supprime l'objet. La fermeture d'un combat déclenche la fin des effets « combat » commencés dans ce combat ; effets « scène » et autres nécessitent une fin manuelle.

### Ouvrir les consommables depuis une macro Script

```javascript
const actor = canvas.tokens.controlled[0]?.actor || game.user.character;
if (!actor) return ui.notifications.warn("Sélectionner un token ou attribuer un personnage.");
await game.modules.get("anarchy-rules-patch").api.open(actor);
```

Un seul consommable actif par personnage à la fois. Les bonus de dégâts, actions supplémentaires, points Anarchy et désavantages ne sont pas automatiquement appliqués : ils sont affichés pour le MJ. Les contrecoups sont notifiés à l'arrêt, mais leurs blessures restent à appliquer manuellement. Aucun retrait de dose ni automatisation de l'addiction. À tester sur une fiche de démonstration avant partie.

Source de règles : Shadowrun Anarchy 2.0 VF, p. 150. Les valeurs d'objets proviennent du catalogue créé pour cette table.
