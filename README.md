# ANARCHY // RULES PATCH

Module expérimental pour Foundry VTT 14 et le système **sra2** (Shadowrun Anarchy 2.0).

## Fonctionnalité v0.1.0
Lorsqu'une armure principale (`type: feat`, `featType: armor`, `system.active: true`) est créée sur une fiche ou activée, le module désactive les autres armures principales du même personnage. Les objets restent dans l'inventaire. Les protections additionnelles de type `equipment` ne sont pas désactivées.

**Limites :** la version 0.1.0 ne corrige pas rétroactivement les fiches déjà dotées de plusieurs armures actives, ne modifie pas les règles de cumul à l'intérieur du système et n'a pas encore été testée dans l'instance The Forge de l'utilisateur. Après installation, désactiver puis réactiver l'armure principale souhaitée pour déclencher la règle. Vérifier les seuils physiques et les RR sur un personnage de test.

## Installation
Dans Foundry (configuration / installation de modules), utiliser l'URL de manifeste :

`https://raw.githubusercontent.com/dallemagnegaetan-debug/anarchy-rules-patch/main/module.json`

Activer ensuite le module dans le monde utilisant le système `sra2`.

## Historique
- 0.1.0 : activation exclusive de l'armure principale par personnage.
