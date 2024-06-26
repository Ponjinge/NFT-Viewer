# Muséum de Toulouse : Exposition numérique



:::info
:bulb: Ce document fournit une estimation préliminaire des coûts associés à la création d'une collection d'objets numériques. Veuillez noter que les prix finaux sont susceptibles de varier en fonction de contraintes supplémentaires et des fluctuations de l'état de la blockchain implémentée. 
:::

Pour comprendre plus facilement, chaque utilisation du terme “Smart Contract” peut être remplacé par “le code”.

## :mag_right: Information  


Utiliser les technologies blockchain de Smart Contracts afin de créer une collection d'œuvres digitales consiste à utiliser des jetons ou ‘tokens’ non fongibles (NFTs). 

C'est-à-dire des jetons rattachés à un blockchain avec des identifiants numériques uniques. Ces jetons sont inclus dans des collections. Chaque collection est définie par un Smart Contract dans lequel les propriétés générales partagées entre tous les jetons de cette collection sont définies.

Le blockchain permet aussi de vérifier l'authenticité de ces NFTs qui peuvent contenir plusieurs formes de contenu différents et peuvent servir plusieurs rôles différents.  

Concernant l'exposition, pour une vingtaine d'œuvres de formats différents, nous devons considérer de nombreuses contraintes qui peuvent changer comment ces œuvres seront représentées avec des Smart Contracts. Le plan général serait d’avoir un jeton par œuvre, idéalement avec tout les jetons au sein d’une même collection. 


## :triangular_flag_on_post: Contraintes 

:::success
Il faut déterminer plusieurs contraintes afin de bien pouvoir estimer le coût de ce projet.  
:::


### :small_blue_diamond: Blockchain

:::warning
Le choix de Blockchain sera le plus gros influenceur de coût. 
:::
Déployer un Smart Contract sur la blockchain, dans ce cas un jeton qui pointe vers du contenu. 

Il est important de choisir une technologie blockchain qui ne risque pas de devenir obsolète et/ou non utilisée dans les années à venir. Cette technologie permet d'immortaliser des œuvres sous forme digitale, mais ceci n’aura pas d’importance si cette technologie est oubliée. C’est pour cette raison qu’on recommande une quantité limitée de technologies qui se différencient par leur coût et leur importance dans l’industrie.  

Nous avons 3 choix viables de Blockchain: 


| **Blockchain** | **Prix de déploiement (par contrat)** | **Difficulté** | **Note** |
|:--------:|:---------:|:--------:|:--------:|
|   Base      |    :heavy_dollar_sign:5-20        |    Basse      | Une couche par dessus Ethereum qui réduit énormément les coûts d'utilisation. Créé par Coinbase, le plus grand acteur financier de l’industrie et le plus grand intégrateur de nouveaux utilisateurs à la technologie blockchain.  |
|    Ethereum     |   :heavy_dollar_sign:50-200        |    Basse      | La technologie blockchain la plus utilisée et le point d’origine des NFTs modernes. Ethereum détient presque le monopole d'activité sur blockchain. 
|     Solana     |    :heavy_dollar_sign:150-400       |         Moyenne | Une alternative au réseau d’Ethereum, avec sa propre base d’utilisateurs et très à la mode mais une complexité de code plus élevée.

---
### :small_blue_diamond: Type de collection 

:::warning
Il est indispensable de bien choisir les aspects principaux de la collection car la majorité des paramètres ne seront pas modifiables après le déploiement du contrat. 
:::

Il est possible de déployer un ou plusieurs jetons pour répondre aux besoins. Un contrat par type de format pourrait réduire le temps de développement, mais nécessiterait payer le coût de déploiement plus d'une fois. Tandis que rassembler tout dans une collection unique donne une vue plus uniforme sur le projet en plus de réduire les coûts. Il faut noter que l'écriture d’un Smart Contract de jeton qui supporte de multiples types de médias différents est totalement possible, mais présente quelques défis supplémentaires pour assurer que la metadata reste belle.  

Une dernière option serait de tout déployer sans collection en tant que pièces 1/1, même en utilisant des services préexistants pour simplifier la tâche. Mais en général ces pratiques sont vues comme solution de qualité inférieure. 


---
### :small_blue_diamond: Stockage 

Les images, vidéos, musiques etc. doivent être stockés quelque part afin de pouvoir être visualisés. Les jetons n'ont pas vraiment leur média inscrits sur eux, mais ont des pointeurs vers ce contenu. Voici les solutions possible pour le stockage: 


**Stockage direct sur la blockchain:** 

Cette solution donne une vraie immortalisation de l'œuvre en écrivant directement son contenu sur la Blockchain. Cependant, très peu de projets décident de faire ceci à cause des coûts exorbitants. 

###### :heavy_dollar_sign:**10k-100k+** sur 


**Solutions de stockage décentralisées :**


Ces solutions sont populaires pour le stockage des images et fichiers musicaux liés aux NFT car elles maintiennent l'éthos décentralisé de la blockchain. Des solutions comme IPFS ou Arweave offrent un stockage permanent et distribué. 

Lorsqu'un fichier est téléchargé sur IPFS ou Arweave, il est stocké sur un réseau de nœuds à l'échelle mondiale, ce qui garantit que le fichier reste accessible même si certains nœuds sont hors ligne. 

###### :heavy_dollar_sign:**0.032/MB** , ou gratuit si <1 GB en utilisant un Saas IPFS (10k appels/mois)


**Serveurs centralisés :** 

Il est aussi possible de stocker les fichiers sur des serveurs centralisés traditionnels ou des services de stockage Cloud. Bien que cette méthode puisse être plus simple et parfois moins coûteuse, elle n'offre pas le même niveau de permanence que la blockchain ou les solutions de stockage décentralisées.
###### :heavy_dollar_sign:**1/Mois** , ou gratuit 


## Paramétrage des contrats

Il est important de déterminer :

1. **Exclusivité des œuvres :** Déterminez si les œuvres numérisées actuelles seront les seules présentes dans cette collection ou si vous souhaitez laisser la possibilité d'ajouter d'autres œuvres à l'avenir.

2. **Limite de jetons :** Précisez s'il existe un nombre maximal de jetons dans cette collection ou si celle-ci est illimitée.

3. **Transférabilité des jetons :** Indiquez si les jetons peuvent être transférés entre utilisateurs, permettant ainsi la revente ou le don.

4. **Multiplicité des instances :** Déterminez si plusieurs copies d'une même œuvre peuvent exister sur différents jetons au sein de la collection.

5. **Droits d’auteur :** Clarifiez si les œuvres sont protégées par des droits d'auteur, et si ces droits sont exécutoires, affectant la manière dont les œuvres peuvent être utilisées ou modifiées.

6. **Mécanisme de revente :** Évaluez la nécessité d'intégrer un mécanisme permettant aux créateurs de percevoir des royalties sur les ventes secondaires des jetons.



## Defis possibles 

- La complexité du smart contract pour l'intégration de contenu mp3.

- La limite des appels pourrait être atteinte si une option gratuite de IPFS est utilisée. 

## Conclusion 

:::success
Nous pouvons réaliser une première estimation des coûts technologiques entre 50 et 200 euros si nous utilisons la Base Chain et une solution de stockage décentralisée, le tout sans prendre de raccourcis majeurs.
:::

Favoriser la création d’une seule collection dans laquelle on a chaque œuvre représenté par un jeton serait la meilleure option si le désir est d’immortaliser en une édition chaque œuvre. 

Cependant, la présence de plusieurs formats différents pourrait ajouter de la complexité pour la création des Smart Contracts, et des champs vides pour les œuvres qui n'ont pas tous les caractéristiques que détiennent d’autres œuvres. 

Ce sont des défis techniques qui ne devrez pas augmenter le coût de déploiement. Elles vont surtout ralentir le temps de développement. Car créer une collection de NFT qui inclut plusieurs formats différents, tous avec des propriétés différentes; et qui est suffisamment flexible pour ajouter de nouveaux formats à l'avenir; nécessite une planification et une mise en œuvre minutieuse.

          