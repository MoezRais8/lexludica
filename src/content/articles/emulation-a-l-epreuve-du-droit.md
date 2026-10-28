---
titre: "L'émulation de jeux vidéo à l'épreuve du droit : anatomie d'un paradoxe"
chapo: "Yuzu, Ryujinx, Citra : en quelques mois, Nintendo a fait disparaître les principaux émulateurs de ses consoles sans obtenir le moindre jugement de principe. L'émulation est-elle légale ? Oui et non : licite dans sa conception, elle est presque toujours illicite dans son usage."
date: 2026-06-26
rubrique: droit
auteurs: [moez-rais]
image: /images/emulation-a-l-epreuve-du-droit.jpg
imageAlt: "Ordinateur portable affichant le premier niveau de Super Mario Bros., entouré de deux manettes NES et de boîtes de jeux Nintendo"
imageCredit: "Photo : XDA Developers."
etiquettes: [émulation, interopérabilité, rétrogaming, droit d'auteur, propriété intellectuelle]
---

En mars 2024, *Yuzu*, l'émulateur Nintendo Switch le plus populaire au monde, téléchargé plus d'un million de fois, disparaissait du jour au lendemain. Quelques mois plus tard, *Ryujinx*, son principal concurrent, fermait à son tour ses portes. *Citra*, pour la console 3DS, avait été emporté dans la même tourmente. En quelques mois, Nintendo avait procédé à ce qui ressemble à une opération de nettoyage juridique d'une rare efficacité, sans presque jamais passer par le prétoire.

Précisons d'abord l'objet. L'**émulateur**, en tant que logiciel, est un programme qui vise à simuler le comportement d'une plateforme matérielle sur un support tiers. Il ne contient, en principe, aucun code appartenant au constructeur d'origine : il en imite seulement le fonctionnement. Selon le professeur Geoffray Brunaux, l'émulateur permet « de reproduire le comportement d'une console ou d'un ordinateur sur une autre machine pour permettre d'exécuter sur cette dernière les jeux initialement conçus pour la console ou l'ordinateur émulé »[^1]. Il existe bien une émulation matérielle, par reconfiguration physique de puces, mais elle reste marginale et ne sera pas traitée ici.

Cette technique permet de redonner une seconde vie à des jeux anciens, de préserver le marché du rétrogaming ou de fabriquer des machines rétrocompatibles, afin d'assouvir la nostalgie des joueurs.

Aujourd'hui, il suffit de quelques clics pour accéder à une multitude de sites d'émulation, tels que Web-emulation, Planetemu ou Mondemul, qui mettent à disposition des jeux vidéo sans l'accord des éditeurs. Pourtant, au même moment, Apple ouvrait son App Store aux émulateurs et des centaines de projets, tels *Dolphin*, *PCSX2* ou *RetroArch*, poursuivaient leur développement sans qu'aucune juridiction ne les ait jamais condamnés.

Cela remet sur la table une question : l'émulation est-elle légale ? La réponse, comme souvent en droit, est à la fois oui et non, et c'est précisément cette ambiguïté qui structure aujourd'hui toute la stratégie contentieuse des éditeurs.

Y répondre suppose de distinguer deux moments. Celui de la conception de l'émulateur d'abord, qui peut demeurer licite selon la technique retenue (I) ; celui de son utilisation ensuite, presque toujours entachée d'illicéité (II).

## I. La conception de l'émulateur : une possible licéité

À quelles conditions la fabrication d'un émulateur échappe-t-elle à la contrefaçon ? Y répondre suppose de rappeler le régime de protection des logiciels (A), puis les prérogatives que la loi reconnaît à l'utilisateur sans l'accord de l'auteur (B), avant de confronter ce cadre aux techniques concrètes de conception (C) et, plus précisément, au sort de la décompilation (D).

### A. La protection des logiciels

Pour fonctionner, toute machine, qu'il s'agisse d'un ordinateur, d'une console ou d'un terminal mobile, doit exécuter des logiciels, c'est-à-dire des ensembles d'instructions écrites dans un langage de programmation. Ces instructions empruntent deux formes : le **code source**, intelligible pour l'homme, et le **code objet** (ou code binaire), ces mêmes instructions traduites en une suite de bits, seule forme intelligible pour la machine. Les développeurs écrivent le comportement attendu en code source ; intervient alors l'opération de **compilation**, qui le traduit en programme exécutable au format binaire.

Plusieurs textes protègent le logiciel comme **œuvre de l'esprit**, en son sein tant le code source que le code objet, sous réserve d'**originalité** et de matérialisation. Les **travaux préparatoires de conception** (plans, maquettes, etc.) sont eux aussi protégeables.

Leurs auteurs jouissent de droits exclusifs, fondés notamment sur les **articles L. 111-1 et L. 112-2 du CPI**, qui consacrent la protection des logiciels comme œuvres de l'esprit, sur l'**article 10.1 de l'Accord sur les ADPIC**, qui assimile les programmes d'ordinateur à des œuvres littéraires au sens de la Convention de Berne, et sur la **directive 2009/24/CE du 23 avril 2009** (codifiant l'ancienne directive 91/250/CEE dite « Software »), qui harmonise leur protection dans l'Union.

Le logiciel peut en outre être **brevetable** dès lors qu'il s'inscrit dans une invention technique plus large, étant rappelé que le logiciel « en tant que tel » est exclu de la brevetabilité (**art. L. 611-10, 2°, c) du CPI**).

Ses **fonctionnalités**, en revanche, ne sont pas protégeables (CJUE, 2 mai 2012, *SAS Institute c/ World Programming*, C-406/10).

Il résulte de ce régime que seuls les ayants droit peuvent autoriser l'usage, la reproduction, l'exécution, la traduction, l'adaptation ou la mise sur le marché du logiciel, la liste limitative de ces prérogatives figurant à l'**article L. 122-6 du CPI**.

### B. Les prérogatives accordées aux utilisateurs sans l'accord des auteurs

Le monopole de l'auteur se heurte toutefois à plusieurs exceptions d'interprétation stricte prévues par le CPI :

- **Les actes nécessaires à l'utilisation conforme** (**art. L. 122-6-1, I**) : la reproduction et la représentation ne requièrent pas d'autorisation lorsqu'elles sont nécessaires à l'utilisation du logiciel conformément à sa destination. Limitée à ces seuls actes, l'exception ne couvre ni les améliorations, ni les adaptations, ni les ajouts, qui excèdent l'usage conforme et requièrent l'accord de l'auteur.
- **La copie de sauvegarde** (**art. L. 122-6-1, II**) : l'utilisateur peut réaliser une copie nécessaire à la préservation de l'usage du logiciel. Dérogation au régime de la copie privée (**art. L. 122-5**), elle est strictement encadrée : un seul exemplaire, réservé à l'utilisateur légitime, à partir d'une source licite, afin de préserver l'utilisation du logiciel (Cass. com., 22 mai 1991).
- **L'étude du fonctionnement** (**art. L. 122-6-1, III**) : l'utilisateur peut observer, étudier ou tester le logiciel pour en dégager les idées et principes non protégés, sans accéder au code source. En ce sens, la CJUE valide la reproduction des fonctionnalités dans un second programme tant qu'il n'y a pas eu accès au code source (*SAS Institute*, préc.).
- **La décompilation à des fins d'interopérabilité** (**art. L. 122-6-1, IV**) : procédé d'ingénierie inverse (*reverse engineering*), la **décompilation** est l'opération réciproque de la compilation, consistant à reconstituer le code source à partir du code objet. L'**interopérabilité** désigne la capacité d'un logiciel à communiquer avec d'autres programmes ; la Cour de cassation y a, par exemple, rattaché des opérations de migration de données (Cass. 1re civ., 20 oct. 2011, n° 10-14069). La décompilation poursuivant cette finalité est subordonnée à des conditions cumulatives que nous examinerons.
- **La décompilation aux fins de correction des erreurs** (également rattachée à l'**art. L. 122-6-1, I**) : la CJUE a enrichi cette construction par l'arrêt *Top System* (6 oct. 2021, C-13/20), jugeant que l'article 5 de la directive 91/250 autorise tout acquéreur légitime à décompiler un programme pour en corriger les *bugs*, sans être tenu de satisfaire aux conditions plus strictes de l'exception d'interopérabilité. Cette exception, qui n'est pas d'ordre public contrairement aux précédentes, peut être aménagée contractuellement au profit d'auteurs préférant corriger eux-mêmes leur logiciel. Les juridictions françaises ont prolongé cette logique pragmatique, jusqu'à contraindre un éditeur à remettre les codes sources à son licencié pour qu'il assure lui-même la maintenance (CA Douai, 7 avr. 2022, n° 20/01452 ; M. Sonnier-Poquillon, IEEPI, 2024).

### C. Les différentes techniques de conception d'un émulateur

Le régime de protection et ses exceptions étant posés, encore faut-il les confronter aux procédés concrets par lesquels naît un émulateur. Ceux-ci se rangent en deux grandes familles de méthodes, dont la légalité ne se fonde pas sur le même terrain. Toute technique de rétro-ingénierie suppose en effet une reproduction au moins provisoire du code, mais seules certaines emportent son adaptation ou sa traduction : c'est cette ligne de partage qui commande leur régime.

La **première famille** repose sur l'observation et l'étude du fonctionnement du logiciel pour en dégager les idées et principes : reproduction comportementale, *reverse engineering* comportemental, émulation de haut niveau par validation empirique (*high-level emulation*, ou HLE). Ces procédés trouvent leur légalité sur le fondement de l'**article L. 122-6-1, III** tant que le code objet n'est ni extrait ni traduit en code source. Il s'agit de créer un logiciel imitant le comportement d'un autre, sans en reprendre une seule ligne de code, mais en reprenant ses idées et principes, non protégeables. Dès lors que l'émulateur ne reprend aucun élément du système d'exploitation original, il n'encourt pas la sanction de la contrefaçon et constitue même, à son tour, un logiciel éligible au régime protecteur du droit d'auteur.

Certaines équipes recourent en outre à la technique de la ***clean room*** (ou « muraille de Chine »), consistant à recréer un BIOS (le logiciel faisant le pont entre le matériel et le système d'exploitation) fonctionnel sans jamais accéder au code source original : une équipe analyse le comportement et rédige des spécifications, une seconde, isolée de tout contact avec le code, réimplémente à partir de ces seules spécifications. Le projet de BIOS communautaire pour *PCSX2*, longtemps en gestation, en est l'illustration. Le droit d'auteur ne protégeant ni l'architecture logicielle, ni les fonctionnalités, cette famille n'est pas frappée d'illicéité, sous la seule réserve d'une action sur le terrain du **secret des affaires** ou du **brevet** : le logiciel n'est pas brevetable en tant que tel (**art. L. 611-10 du CPI**), mais peut l'être comme composante d'une invention technique.

La **seconde famille** se fonde sur la décompilation, donc la traduction du code objet en code source (interprétation, recompilation statique ou dynamique, *low-level emulation*, ou LLE). Elle consiste à extraire le système d'exploitation de la machine et à l'adapter à un autre terminal. Ce procédé est évidemment licite pour les auteurs du système eux-mêmes ; pour les tiers, en revanche, la décompilation doit répondre à plusieurs critères stricts qu'il faut maintenant éprouver.

### D. La conception d'un émulateur par décompilation est-elle légale ?

On peut d'emblée évacuer l'hypothèse de la décompilation aux fins de correction des erreurs : l'émulation vidéoludique n'a jamais eu pour but de corriger des *bugs*. Cette justification ne pourra donc aboutir. Reste la décompilation aux fins d'interopérabilité.

En Europe comme en France, le contentieux sur la légalité des émulateurs par décompilation est rare. Outre-Atlantique, la jurisprudence a étendu l'interopérabilité à l'émulation : dès l'arrêt *Atari Games v. Nintendo* (1992), qui en a dégagé le principe (Atari ayant néanmoins succombé pour s'être procuré le code source de façon déloyale), puis dans les arrêts *Sega* (1992) et *Sony v. Connectix* (2000), les juges ont admis la décompilation dans le cadre de l'émulation d'un terminal vidéoludique, dès lors qu'elle était nécessaire à la compréhension du programme ciblé et à la création d'un logiciel propre, au nom du ***fair use*** (usage loyal) limitant les droits d'auteur. Dans l'affaire *Connectix*, le juge américain a même qualifié l'émulateur d'œuvre « modestement transformative », justifiant la copie intermédiaire du BIOS réalisée pendant la rétro-ingénierie. L'affaire *Bleem* offre un autre exemple emblématique : cet émulateur, qui faisait tourner sur PC certains jeux PlayStation, dont le jeu de combat *Tekken 3* de l'éditeur Namco, a résisté aux tentatives de Sony d'en interrompre la commercialisation. Ces solutions américaines ne valent toutefois que dans la stricte mesure où la rétro-ingénierie sert à atteindre des éléments non protégés : le *fair use*, comme l'exception européenne d'interopérabilité, s'arrête au seuil de l'expression protégée. Les deux systèmes convergent ainsi pour refuser à la décompilation de devenir le véhicule d'une appropriation du code original.

*Quid* du droit français ? Le raisonnement libéral du juge américain n'a pas d'équivalent ici. La décompilation aux fins d'interopérabilité n'est pas un principe, mais une exception d'interprétation stricte, enfermée par l'**article L. 122-6-1, IV** dans une double série de conditions cumulatives : des conditions préalables à l'acte, puis des restrictions sur l'usage des informations obtenues. Or, à chacune de ces conditions, l'émulateur trébuche. La démonstration mérite d'être conduite point par point, car elle révèle que l'exception, loin de sécuriser l'émulation, en condamne presque tous les cas concrets.

**L'acte doit émaner d'un utilisateur légitime.** Seule une personne ayant acquis le logiciel licitement (un licencié) peut décompiler. La condition suppose donc que le développeur ait acquis le BIOS de la console de manière régulière, en achetant le terminal et en acceptant la licence. En pratique, les *firmwares* circulent le plus souvent sous forme de *dumps* récupérés en ligne, hors de toute acquisition licite : la première condition est déjà rarement remplie. Dans l'affaire des *linkers*, la Cour d'appel de Paris (pôle 5, ch. 12, 26 sept. 2011, *Nintendo c/ Divineo e.a.*) a précisément refusé aux prévenus la qualité d'utilisateurs légitimes, fermant d'emblée la porte de l'exception.

**Les informations ne doivent pas avoir été rendues accessibles autrement.** La décompilation n'est tolérée qu'en dernier recours, lorsque les données d'interopérabilité ne sont pas disponibles. Il pèse donc sur le développeur une obligation préalable : solliciter ces informations auprès du titulaire des droits avant tout désassemblage. En cas de refus, la voie licite n'est pas la décompilation sauvage, mais le recours devant l'Arcom (ex-Hadopi) ouvert par l'**article L. 331-32 du CPI**. Dans l'affaire *Nintendo*, c'est l'absence de toute demande préalable auprès du constructeur qui a fait tomber l'exception : on ne décompile pas avant d'avoir demandé.

**L'acte doit être limité aux seules parties nécessaires à l'interopérabilité.** La charge de la preuve est ici redoutable : c'est au décompilateur de démontrer qu'il n'a pas excédé le strict nécessaire. En première instance, les prévenus avaient d'ailleurs bénéficié d'un doute, faute pour Nintendo d'établir que l'accès au code avait dépassé les parties indispensables ; mais la cour d'appel a renversé l'analyse. Un émulateur, qui doit reproduire l'intégralité du comportement d'un système, peut difficilement prétendre s'être cantonné à quelques interfaces.

**Les informations ne doivent pas être communiquées à des tiers, sauf nécessité pour l'interopérabilité.** Or les émulateurs se développent presque toujours en communautés ouvertes, sur des dépôts publics et des canaux de discussion partagés, où documents et résultats de rétro-ingénierie circulent librement. Le modèle collaboratif, qui fait la force technique de ces projets, ruine juridiquement la confidentialité exigée par le texte.

**Les informations ne doivent servir ni à produire un logiciel d'expression substantiellement similaire, ni à porter atteinte au droit d'auteur.** Nous touchons ici le cœur du problème, et l'obstacle dirimant. L'exception d'interopérabilité a été conçue pour permettre à un programme indépendant de communiquer avec un autre, non pour le reproduire : selon une formule doctrinale, interopérer, c'est « parler le même langage » sans pour autant faire des clones (M. Behar-Touchais). Mais la finalité même d'un émulateur est mimétique : il reproduit le comportement, c'est-à-dire l'expression fonctionnelle, du système émulé. Quand bien même toutes les conditions préalables seraient réunies, cette dernière exigence suffit à elle seule à exclure l'émulation du champ de l'exception. La disposition ne tolère pas le résultat que l'émulateur poursuit par nature.

Une conclusion partielle s'impose. La jurisprudence française, du peu qu'elle compte, applique l'exception avec une rigueur constante : la Cour d'appel de Paris a refusé d'y voir un abri pour la décompilation des logiciels de console, comme elle l'avait déjà fait pour la décompilation aux fins d'étude de la sécurité (CA Paris, 21 févr. 2006) ou de maintenance corrective (CA Caen, 28 oct. 2010). À l'inverse, l'exception a pu jouer lorsqu'elle servait une interopérabilité véritable : la Cour d'appel de Caen a jugé en 2015 que la décompilation d'une partie de Skype, destinée à développer un logiciel d'échange sécurisé interopérable, ne constituait pas une contrefaçon (CA Caen, 18 mars 2015). La ligne de partage est nette : interopérer, c'est communiquer avec un programme sans le reproduire, ce que l'émulateur, par nature mimétique, ne peut éviter. Cette ligne se renforce à mesure que se construit un véritable « **droit à l'interopérabilité** » (directive 2009/24, DMA, et désormais le droit de la concurrence : CJUE, 25 févr. 2025, *Google / Enel*, C-233/23, qui sanctionne le refus d'interopérabilité comme **abus de position dominante**), lequel protège la communication entre systèmes indépendants, non la reproduction de l'un par l'autre. Aussi la doctrine s'accorde-t-elle à juger « peu probable » que les émulateurs puissent entrer dans cette exception. L'émulation par extraction et décompilation, copie servile d'un logiciel, est donc prohibée. En revanche, sans être encouragée, l'émulation par observation et étude d'un logiciel original, qui ne touche jamais au code source, ne présente pas de risque juridique caractérisé : c'est sur ce seul terrain que la conception d'un émulateur demeure véritablement défendable.

## II. L'utilisation de l'émulateur : une illicéité de fait

La licéité conquise au stade de la conception ne dit cependant rien de l'usage. Or c'est là que tout se joue : l'émulateur ne prend vie qu'au prix d'actes annexes qui, eux, sont rarement licites. Il faut donc examiner le statut des copies de jeux que l'outil requiert (A), avant de dissiper les justifications que l'on invoque communément pour les légitimer (B).

### A. L'utilisation de ROMs et d'ISOs, des actes contrefaisants

Si l'émulateur peut reposer sur des bases licites, son utilité pratique dépend en revanche d'une chaîne d'actes le plus souvent contestables, voire ouvertement illicites. C'est le paradoxe fondamental de l'émulation : un outil légal qui ne fonctionne qu'au prix d'actes illégaux annexes.

La quasi-totalité des émulateurs modernes, tels *PCSX2* (PS2), *DuckStation* (PSX), *Yuzu* et *Ryujinx* (Switch), supposent de disposer de copies des jeux : les **ROMs** (de *Read Only Memory*, pour les cartouches) et les **ISOs** (de la norme ISO 9660 de l'Organisation internationale de normalisation, pour les disques).

Ces fichiers informatiques contenant les jeux vidéo au format dématérialisé sont, juridiquement, des **reproductions d'œuvres vidéoludiques**. Si leur utilisation par les ayants droit ou les licenciés ne pose aucun problème, il en est autrement dès lors que des personnes non autorisées en font usage.

Le jeu vidéo étant une **œuvre complexe** soumise à une **qualification distributive** (Cass. 1re civ., 25 juin 2009, *Cryo*), cette reproduction non autorisée lèse à la fois sa composante logicielle, régie par le droit propre de l'auteur du logiciel (**art. L. 122-6 du CPI**), et ses éléments graphiques et sonores, qui relèvent du **droit de reproduction** (la fixation sur un support, **art. L. 122-3 du CPI**) et du **droit de représentation** (la communication au public, **art. L. 122-2 du CPI**). Au plan européen, la CJUE a confirmé cette nature composite : le jeu vidéo est un « **matériel complexe** » dont le programme et les éléments graphiques et sonores, lorsqu'ils concourent à l'originalité de l'œuvre, sont protégés ensemble par le droit d'auteur (*Nintendo c/ PC Box*, 23 janv. 2014, C-355/12, dans le prolongement de l'arrêt *Infopaq*, 16 juill. 2009, C-5/09).

Réalisés sans l'autorisation des titulaires de droits, l'extraction de ces fichiers depuis une console (le *dump*), leur diffusion sur Internet et, *a fortiori*, leur téléchargement constituent autant d'atteintes à ces prérogatives, mais aussi au **droit de mise sur le marché** propre au logiciel, que l'auteur a seul le pouvoir d'autoriser (**art. L. 122-6 du CPI**).

Les sites de téléchargement de ROMs, malgré leur banalisation culturelle, opèrent dans une illégalité parfaitement caractérisée, constitutive du délit de **contrefaçon** (**art. L. 335-2 et L. 335-3 du CPI**). La justice américaine l'a confirmé en sanctionnant les plateformes LoveROMs et LoveRETRO (*Nintendo of America Inc. v. Mathias*, No. 2:18-cv-02282, D. Ariz. 2018) puis RomUniverse (*Nintendo of America Inc. v. Storman*, No. 2:19-cv-07818-CBM-RAO, C.D. Cal. 2021), dont l'exploitant fut reconnu coupable de contrefaçon des droits d'auteur comme des marques de l'éditeur.

Aujourd'hui, la majorité des ROMs et ISOs ne survivent que grâce à la tolérance de certains éditeurs ou grâce aux ***abandonwares***, terme désignant un ensemble de jeux dont l'exploitation a pris fin ou dont les ayants droit n'existent plus.

### B. Le mythe de la copie privée et de la copie de sauvegarde

Afin de légitimer ce genre de pratiques, une idée largement répandue dans la culture vidéoludique est née : celle selon laquelle il serait licite de télécharger une ROM, soit sur le fondement de l'exception de **copie privée** (**art. L. 122-5, 2° du CPI**), « les copies ou reproductions réalisées à partir d'une source licite et strictement réservées à l'usage privé du copiste », soit sur le fondement de la **copie de sauvegarde** (**art. L. 122-6-1, II du CPI**), « la personne ayant le droit d'utiliser le logiciel peut faire une copie de sauvegarde lorsque celle-ci est nécessaire pour préserver l'utilisation du logiciel ».

Pour le logiciel, le législateur a érigé l'exception de copie de sauvegarde en ***lex specialis***, la « loi spéciale » qui évince la copie privée : cette dernière couvre toutes les œuvres, hormis les logiciels. La composante logicielle du jeu échappe donc par principe à la copie privée. Et quand bien même on tenterait d'opposer cette exception au titre des seuls éléments audiovisuels du jeu, elle ne saurait, en tout état de cause, prospérer.

**Sur la copie privée.** La licéité de ces copies est contestable à un triple titre :

- **La source licite** : exigence ajoutée par la loi du 20 décembre 2011. La copie doit provenir d'un original acquis licitement, physique ou dématérialisé. Or, dans une grande majorité des cas, la copie provient elle-même d'un exemplaire contrefaisant, comme déjà rappelé, commettant de nombreuses atteintes au monopole d'exploitation des auteurs.
- **L'extraction personnelle** : le copiste doit *dumper* lui-même sa copie depuis l'exemplaire qu'il détient, pour son usage unique et personnel. Télécharger une copie réalisée par autrui, ce qui se produit par la diffusion sur Internet, n'entre pas dans l'exception : c'est une importation de contrefaçon côté téléchargeur, une mise à disposition contrefaisante côté hébergeur.
- **L'usage privé** : la copie ne peut faire l'objet d'une utilisation collective et n'est partageable, tout au plus, qu'au sein du cercle de famille. Or les ROMs et ISOs sont mis à la disposition du public et se démultiplient au fil des téléchargements : la copie n'est donc pas réservée à l'usage privé qu'exige le texte. Leur mise en ligne emporte au surplus distribution de l'œuvre, en contradiction frontale avec la condition d'usage strictement privé.

**Sur la copie de sauvegarde.** Là encore, les ROMs et ISOs échouent à remplir les critères : ces copies ne sont ni uniques, par leur mode de distribution (CA Paris, 20 oct. 1988), ni nécessaires à la préservation de l'utilisation du logiciel, comme l'exige l'**article L. 122-6-1, II du CPI**. Outre-Atlantique, le tribunal fédéral du district nord de l'Illinois l'avait jugé dès 1983 à propos du *Prom Blaster*, un dispositif qui dupliquait les cartouches de l'Atari 2600 : la copie de sauvegarde n'est tolérée que pour prévenir une défaillance mécanique ou électrique de l'original, de sorte que les copies débordant cet objectif justifièrent une injonction de cessation de commercialisation (*Atari, Inc. v. JS&A Group, Inc.*).

**Sur le contournement des mesures techniques de protection (MTP).** En réalité, la nature juridique exacte de ces fichiers importe peu. Supposons qu'effectuer un « *dump* personnel » (l'action d'extraire les données de sa propre cartouche pour un usage strictement privé) remplisse en théorie les critères de la copie privée ou de sauvegarde, exigeant une source légale et une identité entre le copiste et l'usager. Dans les faits, pour les systèmes récents, bénéficier de cette légalité s'avère pour ainsi dire impossible.

La raison en est simple. Les machines de jeu actuelles s'appuient sur des écosystèmes fermés et intègrent systématiquement des dispositifs de protection. Ces dispositifs, communément appelés **DRM** (*Digital Rights Management*) ou **MTP** (**mesures techniques de protection**), sont définis à l'**article L. 331-5 du CPI**, qui transpose la directive 2001/29/CE du 22 mai 2001 : il s'agit des techniques destinées à empêcher ou à limiter les usages non autorisés par les titulaires de droits, une mesure étant réputée efficace lorsqu'elle permet de contrôler l'utilisation de l'œuvre protégée. Par conséquent, pour lancer des ROMs, des ISOs ou même des sauvegardes personnelles directement sur le matériel d'origine, le joueur est contraint de contourner ces barrières en recourant à des interfaces de piratage, à l'instar des *linkers*.

Si l'on observe la jurisprudence, notamment une décision marquante de la Cour d'appel de Paris du 26 septembre 2011, la technologie à l'œuvre dans ces adaptateurs n'est pas fondamentalement interdite, à condition de ne pas enfreindre les brevets des constructeurs. Néanmoins, les juges ont clairement statué que ces outils ne doivent en aucun cas servir à déjouer les sécurités matérielles ou logicielles. Or le principe de fonctionnement de ces *linkers* repose précisément sur la simulation illégale des protocoles d'authentification normalement réservés aux cartouches officielles.

Sur le plan légal, briser ces MTP est une infraction formellement sanctionnée par le Code de la propriété intellectuelle (**art. L. 331-5 et L. 335-3-1**). Ces textes condamnent fermement la fourniture ou la conception d'outils développés dans le but de neutraliser une mesure technique efficace. La seule nuance apportée à cette stricte interdiction provient du **contrôle de proportionnalité** exigé par la justice européenne (CJUE, *Nintendo c/ PC Box*, préc.), qui demande au juge de vérifier qu'aucune solution moins contraignante n'aurait pu protéger tout aussi efficacement les intérêts des créateurs.

En fin de compte, recourir à ces artifices de contournement invalide totalement l'application des exceptions au droit d'auteur. Le cadre légal français enferme donc l'utilisateur de bonne foi dans une véritable impasse : il possède un droit virtuel à la copie privée qu'il lui est matériellement impossible d'exercer sans basculer dans l'illégalité. C'est la raison principale pour laquelle la pratique de l'émulation à domicile se concentre massivement sur le rétrogaming, domaine où les vieilles machines étaient largement dépourvues de ces verrous numériques complexes.

## Conclusion

Au terme de ce parcours, le paradoxe initial se dissipe en une distinction simple : celle de l'outil et de l'usage. L'émulateur, en lui-même, peut être parfaitement licite. Conçu par observation et étude du comportement d'un système, sans reprise de son code, il n'est qu'un logiciel original parmi d'autres, éligible à son tour à la protection du droit d'auteur ; ce n'est que par la voie de la décompilation qu'il bascule dans l'illicite, l'exception d'interopérabilité ne pouvant presque jamais l'abriter. L'usage, en revanche, est presque toujours illicite, car l'émulateur ne fonctionne qu'au prix de ROMs et d'ISOs contrefaisants et, sur les machines récentes, du contournement de protections techniques. La même technique change donc de statut non selon sa nature, mais selon ce que l'on en fait.

Cette grille éclaire un angle mort du débat : l'émulation n'est pas systématiquement illicite, et elle devient même pleinement légale lorsqu'elle est pratiquée par les ayants droit eux-mêmes (G. Brunaux, *Le droit du jeu vidéo*, Mare & Martin, 2026). Sega a ainsi intégré dans l'univers de *Shenmue*, sur Dreamcast, une borne d'arcade virtuelle permettant de rejouer à ses anciens succès *After Burner* ou *Hang-On*. Profitant du renouveau du rétrogaming, Nintendo a proposé sur ses consoles Wii et Wii U d'anciens titres dématérialisés à prix parfois dérisoire, tel *Super Metroid* téléchargeable pour trente centimes d'euro, voire des jeux d'éditeurs tiers comme SNK ou Sega qui, ne fabriquant plus de consoles, y trouvent un moyen de rentabiliser leur catalogue. Microsoft a installé un émulateur de Xbox 360 dans la Xbox One par simple mise à jour, et Sony a rendu sa PlayStation 4 compatible avec des jeux PlayStation 2 émulés, vendus sur le PlayStation Store. Toutes ces formes sont licites parce que mises en œuvre par les titulaires des droits, ou avec leur accord : ce n'est pas l'émulateur qui est en cause, mais la main qui le tient.

Cette émulation officielle demeure toutefois minoritaire. La majorité des ROMs et ISOs reste fournie par des sites tiers, sans autorisation, et ne survit que par la tolérance des titulaires de droits. Le préjudice est minime pour les *abandonwares*, ces jeux qui ne sont plus exploités ou dont les ayants droit ont disparu, et les éditeurs peuvent même trouver un intérêt à l'émulation, fût-elle illicite, lorsqu'elle entretient l'attrait pour leurs anciennes productions et attire un public neuf. Mais cette tolérance n'est pas un droit, et l'intérêt croissant des fabricants pour l'émulation intégrée à leurs propres machines pourrait la faire cesser : Nintendo a déjà obtenu la fermeture de plusieurs émulateurs et plateformes, comme l'illustrent les disparitions de *Yuzu*, *Ryujinx* et *Citra*.

Encore faut-il en avoir les moyens. Car en pratique, la lutte contre l'émulation et les jeux émulés se révèle d'une difficulté redoutable. Les émulateurs sont des logiciels souvent libres et ouverts, dupliqués et archivés à l'infini sur des dépôts répartis dans le monde entier ; les ROMs et ISOs circulent sur une myriade de sites miroirs, hébergés dans des juridictions complaisantes et reconstitués sitôt fermés. Fermer un émulateur comme *Yuzu* ne fait pas disparaître son code, déjà cloné des milliers de fois, et la dimension communautaire, internationale et décentralisée de ces pratiques échappe largement à une action en contrefaçon menée éditeur par éditeur, site par site. La stratégie de Nintendo le confirme *a contrario* : faute de pouvoir éradiquer le phénomène, l'éditeur cible les maillons les plus exposés et mise sur l'effet dissuasif, sans jamais tarir la source.

Ce constat débouche sur un enjeu de fond, largement absent du débat public français. L'architecture du droit d'auteur, conçue pour protéger l'œuvre individuelle et son exploitation commerciale, s'avère mal adaptée à un médium dont l'accès dépend d'un support technique : lorsque la console n'est plus produite, que les serveurs s'éteignent ou que l'éditeur disparaît, l'œuvre devient juridiquement inaccessible alors même qu'elle demeure matériellement préservée. Il en résulte l'inaccessibilité légale d'une part considérable du patrimoine vidéoludique. La Video Game History Foundation établissait en 2023 que 87 % des jeux américains antérieurs à 2010 sont commercialement indisponibles, ne laissant d'autre voie d'accès que l'émulation et les ROMs, c'est-à-dire l'illégalité. Le paradoxe est saisissant en France, où le **dépôt légal** à la BnF constitue depuis 1992 une collection patrimoniale considérable, mais consultable sur place uniquement : l'État conserve des œuvres auxquelles le public n'a, en fait, presque aucun accès.

C'est tout le sens du contentieux *Yuzu*, qui marque une rupture moins juridique que stratégique : Nintendo n'a obtenu aucun jugement de principe contre l'émulation, mais a démontré qu'il pouvait démanteler en quelques mois un écosystème logiciel mature, à coût modéré et sans risque jurisprudentiel. Tant que le législateur, français ou européen, ne prendra pas en charge la question patrimoniale que ces stratégies privées laissent en suspens, l'essentiel de l'histoire du jeu vidéo restera, juridiquement, hors d'accès, et continuera de survivre, en marge, par la seule grâce de l'émulation.

[^1]: G. Brunaux, *Le jeu vidéo, un objet juridique identifié*, Mare & Martin, 2019.

## Sources

### Textes

- Code de la propriété intellectuelle : art. L. 111-1, L. 112-2, L. 122-2, L. 122-3, L. 122-4, L. 122-5 (2°), L. 122-6, L. 122-6-1 (I à IV), L. 331-5, L. 331-32, L. 335-2, L. 335-3, L. 335-3-1, L. 611-10
- Directive 2009/24/CE du 23 avril 2009 concernant la protection juridique des programmes d'ordinateur (codifiant la directive 91/250/CEE)
- Directive 2001/29/CE du 22 mai 2001 sur le droit d'auteur dans la société de l'information (InfoSoc)
- Accord sur les ADPIC, art. 10.1 ; Convention de Berne ; Convention sur le brevet européen, art. 52 § 2

### Jurisprudence

**France**

- CA Paris, 20 oct. 1988, JCP G 1989, II, 21188, note X. Linant de Bellefonds
- Cass. com., 22 mai 1991
- CA Paris, 21 févr. 2006 (décompilation aux fins d'étude de la sécurité)
- Cass. 1re civ., 25 juin 2009, *Cryo* (qualification distributive du jeu vidéo)
- CA Caen, 28 oct. 2010 (maintenance corrective)
- Cass. 1re civ., 20 oct. 2011, n° 10-14069 (décompilation et interopérabilité)
- CA Paris, pôle 5, ch. 12, 26 sept. 2011, *Nintendo c/ Divineo, Absolute Games, FL Games, Aakro Pure Tronic e.a.* (*linkers*)
- CA Caen, 18 mars 2015, *Skype* (décompilation aux fins d'interopérabilité)
- CA Douai, 1re ch., 7 avr. 2022, n° 20/01452 (remise des codes sources pour la maintenance)

**Union européenne**

- CJUE, 16 juill. 2009, *Infopaq International*, C-5/09
- CJUE, 22 déc. 2010, *Bezpečnostní softwarová asociace (BSA)*, C-393/09 (protection du code source et du code objet)
- CJUE, 2 mai 2012, *SAS Institute c/ World Programming*, C-406/10
- CJUE, 23 janv. 2014, *Nintendo c/ PC Box*, C-355/12
- CJUE, 6 oct. 2021, *Top System*, C-13/20
- CJUE, 25 févr. 2025, *Google / Enel X Italia*, C-233/23 (interopérabilité et abus de position dominante)

**États-Unis**

- *Atari Games Corp. v. Nintendo* (Fed. Cir. 1992) ; *Sega Enterprises Ltd. v. Accolade, Inc.*, 977 F.2d 1510 (9th Cir. 1992)
- *Sony Computer Entertainment v. Connectix Corp.* (9th Cir. 2000) ; *Sony Computer Entertainment v. Bleem* (9th Cir. 2000)
- *Atari, Inc. v. JS&A Group, Inc.*, 597 F. Supp. 5 (N.D. Ill. 1983) (*Prom Blaster*)
- *Nintendo of America Inc. v. Mathias*, No. 2:18-cv-02282 (D. Ariz. 2018) (LoveROMs / LoveRETRO)
- *Nintendo of America Inc. v. Storman*, No. 2:19-cv-07818-CBM-RAO (C.D. Cal. 2021) (RomUniverse)

### Doctrine

- N. Binctin, *Droit de la propriété intellectuelle : droit d'auteur, brevet, droits voisins, marque, dessins et modèles*, LGDJ, coll. « Manuel », 8e éd., 2024
- G. Brunaux, *Le jeu vidéo, un objet juridique identifié*, Mare & Martin, 2019
- G. Brunaux, *Le droit du jeu vidéo*, Mare & Martin, 2026
- P. Mouron et G. Rabu, *Droit du jeu vidéo*, Larcier-Intersentia, coll. « Droit des technologies », 2025
- A. Chéron, « Technique et légalité des émulateurs de jeux vidéo », afjv.com, 1er févr. 2016
- B. Warusfel et M. Dhenne, « La propriété intellectuelle face à l'ingénierie inverse », *Propriétés intellectuelles*, 2016, n° 58, pp. 20-32
- M. Behar-Touchais, « Être interopérable ou ne pas l'être », CCE 2008, étude n° 6
- L. Fouquet, « Jeux vidéo : protection par le droit d'auteur et contournement des mesures techniques de protection », note sous CJUE, 23 janv. 2014, C-355/12, *Nomos*, 20 mars 2014
- P.-Y. Margnoux et H. Roy, « Décompilation d'un logiciel : état des lieux », *Le Monde du Droit*, 28 juill. 2015
- C. Weber et J.-C. Ienné, « Vers un droit à l'interopérabilité ? », ITLAW Avocats, 12 mars 2025
- S. Dusollier, « L'arrêt Nintendo : la protection des mesures techniques au pays des jeux vidéo », *Auteurs & Média*, 2014, n° 5, pp. 360-369
- G. Mathias, « Décompilation et analyse de logiciel », *Solutions Numériques*, n° 15, 20 mars 2017
- M. Sonnier-Poquillon, « Le droit de l'utilisateur légitime de corriger un logiciel : mythe ou réalité ? », IEEPI, Paroles d'experts, 2024
- M. Soulez, « La décompilation d'un logiciel pour corriger des erreurs », Lexing Avocats, 7 janv. 2022
- É. Wery, « À quelles conditions décompiler un logiciel ? », *Droit & Technologies*, 6 déc. 2021
- G. Leclerc, « Droit des logiciels et des bases de données : le guide complet », Victoris Avocat, 22 févr. 2026

### Ressources en ligne

- « Droits des ROMs pour les bornes d'arcade », Les Fabriques du Ponant (wiki), traduisant l'entretien de D. E. Bambauer (Univ. of Arizona), « Is Downloading Retro Video Game ROMs Ever Legal? », *HowToGeek*
- « L'émulation dans le rétrogaming : un safari juridique au cœur de la nostalgie », *La Rétrogamerie*, 2024
- N. Le Guennec, « Analyse comparative des règles de décompilation de logiciels en Europe (France, Allemagne) et aux États-Unis », blogs pédagogiques de l'Université Paris Nanterre, 5 juill. 2019
- M. Kamal et X. Vogel, « The Legality and Morality of Video Game Emulation » (research-in-progress), SAIS 2020 Proceedings, n° 14, Southern Association for Information Systems Conference, 2020
- INPI, « Cas particulier : les logiciels », inpi.fr
- APP (Agence pour la Protection des Programmes), « Contenu de la protection du logiciel », base de connaissances, app.asso.fr
