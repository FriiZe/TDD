Doc de présentation Projet TDD : 

Il s’agira de coder en CLI dans le terminal le jeu de société : Monopoly. 
Par soucis de temps, 1 jour et demi, seules certaines fonctionnalités de base seront implémentées : 

Création et initialisation d’une partie avec des joueurs 
Déplacement des joueurs 
Achat d’une propriété
Payer le loyer standard d’une propriété
Toucher le salaire lorsque l’on passe par la case Départ
Gestion des constructions 

Le projet sera codé en JS, avec comme framework de tests Mocha et comme librairie d’assertion Chai.

Il s’agira également de respecter au maximum le cycle Red => Green => Refactor et de les matérialiser via les différents commits

Archi : 

MonopolyTDD
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── Classes
│   │   ├── Board.js
│   │   ├── Cell.js
│   │   ├── Game.js
│   │   ├── Gare.js
│   │   ├── Player.js
│   │   └── Properties.js
│   └── main.js
└── tests
    ├── Classes
    │   ├── Board.js
    │   ├── Cell.js
    │   ├── Game.js
    │   ├── Gare.js
    │   ├── Player.js
    │   └── Properties.js
    └── main.js


VERGE Romain
