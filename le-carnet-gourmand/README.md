# Le Carnet Gourmand

Page de recette et commentaires réalisée pour le devoir mis à jour « Créez votre portfolio avec React.JS ». Malgré cet intitulé, la consigne de juin 2026 impose **HTML5, CSS3 et JavaScript natif**, sans framework.

## Ouvrir le projet

Ouvrir `index.html` dans un navigateur récent. Aucune installation, compilation ou connexion Internet n'est nécessaire.

## Fichiers

```text
le-carnet-gourmand/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
└── README.md
```

## Fonctionnement

- Le nom doit contenir au moins 2 caractères après suppression des espaces extérieurs.
- Le commentaire doit contenir au moins 10 caractères après suppression des espaces extérieurs.
- Une erreur apparaît sous le formulaire si un champ est invalide ; la saisie est conservée et le champ concerné reçoit le focus.
- Un commentaire valide apparaît en tête de liste, puis le formulaire est réinitialisé.
- Chaque bouton « 🗑️ Supprimer » retire son commentaire immédiatement.
- Les deux commentaires de Téo et Léa reproduisent les exemples de la maquette ; ils peuvent également être supprimés.
- Les modifications restent uniquement dans le DOM : aucun stockage ni envoi vers un serveur. Une réouverture de la page retrouve les exemples initiaux.

## Répartition des responsabilités

- **HTML** : contenu de la recette, formulaire, exemples et structure accessible.
- **CSS** : palette, typographie, dimensions et grille responsive ; une colonne à 900px et moins.
- **JavaScript** : événements, validation, création et suppression des commentaires. Le code utilise `querySelector`, `addEventListener`, `createElement`, `appendChild`, `prepend` et `remove`. Les saisies sont affectées avec `textContent`.

Aucune bibliothèque, image, icône externe, instruction JavaScript intégrée au HTML, ni API de stockage n'est utilisée. Le message d'erreur représenté sur la maquette apparaît uniquement après une soumission invalide.

## Vérification manuelle

1. Publier avec les champs vides : une erreur de nom apparaît, sans ajout.
2. Saisir « A » puis publier : le nom est refusé.
3. Saisir « Léa » et « Bon » : le commentaire est refusé.
4. Essayer uniquement des espaces : la saisie est refusée.
5. Saisir « Léa » et « Très bonne recette ! » : une carte apparaît, les champs sont vidés et l'erreur disparaît.
6. Publier un texte contenant `<b>Délicieux</b>` : les balises apparaissent comme du texte.
7. Supprimer un exemple puis un nouveau commentaire : seule la carte choisie disparaît.
8. Vérifier au clavier la navigation, la publication et la suppression.
9. Vérifier la disposition à 901px (deux colonnes), 900px et sur mobile (une colonne), sans défilement horizontal.
10. Vérifier l'absence d'erreurs dans la console et de rechargement lors des interactions.

## Restitution GitHub

Créer un dépôt dédié, par exemple `le-carnet-gourmand`, et y déposer **le contenu de ce dossier**, avec `index.html` à la racine. Pour que le correcteur puisse consulter le travail, le guide de restitution demande un dépôt public. Vérifier que les fichiers sont visibles sur GitHub avant de transmettre le lien du dépôt dans l'espace de rendu du devoir.
