Projet Node.js avec EJS, Express, MySQL et Cookies
Ce projet utilise EJS pour le rendu côté client avec HTML, CSS et JavaScript. Le serveur est construit avec Node.js et Express, et les données sont stockées dans une base de données MySQL. Les cookies sont utilisés pour la gestion des sessions.

Prérequis
Node.js installé
Serveur MySQL configuré
Installation
Cloner le dépôt :
git clone (https://github.com/vuilletg/shitCode.git)

Installer les packages NPM :
npm install

Configurer la base de données MySQL :
Créez une base de données et deux tables nécessaires.
Mettez à jour les informations de connexion à la base de données dans le fichier DBini.
Lancer le serveur :
npm start

Structure du projet
├── views
│   ├── style.css
│   └── about.ejs
|── DB.ini
|── Dellet.sql
├── index.js
├── package.json
└── README.md

Utilisation
Installer Node.js : Téléchargez et installez Node.js depuis nodejs.org.
Installer les packages NPM :
npm install

Mettre en place un serveur MySQL :
Installez MySQL et créez une base de données.
Créez les deux tables nécessaires.
Lancer le serveur :
npm start

Accéder à l’application : Ouvrez votre navigateur et allez à http://localhost:3000.
