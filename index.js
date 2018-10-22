/* README
   Lors de l'ajout d'un case ne pas oublié d'incrémenter le chiffre maximum lors de l'appel à la méthode getRandomInt() */

const Discord = require('discord.js')
const bot = new Discord.Client()
const token = process.env.token

/* Bouterfa */
bot.on('message', function(message){
    if(message.content == '$Bouterfa'){
        var rand = getRandomInt(16)
        switch(rand){
            case(0):
                message.channel.send('si vous n\'etes pas riche vous demandez a un camarade qui a les moyens de vous imprimer les documents!')
                break
            case(1):
                message.channel.send('quand on a fait ces condensateurs c\'est quand ta mere avait ± 20 ans et vous etiez encore dans les tenebres!')
                break
            case(2):
                message.channel.send('quand on a fait ces condensateurs c\'est quand ta mere avait ± 20 ans et vous etiez encore dans les tenebres!')
                break
            case(3):
                message.channel.send('le prof sera souriant meme s\'il nous pète , sauf quand il s\'est disputer avec sa femme au matin.')
                break
            case(4):
                message.channel.send('vous pouvez murmurer entre 30 et 100 kHz sinon vous sortez!')
                break
            case(5):
                message.channel.send('vous pouvez murmurer entre 30 et 100 kHz sinon vous sortez!')
                break
            case(6):
                message.channel.send('si vous ne savez pas ecrire ceci `R vu entre AB = U1/I1 = (U1/U2) * (U2/I2) * (I2/I1)  et Rentree = (n1/n2)^2 * Rc` a l\'examen, alors on peut deja commander son certificat medicale pour le jour de l\'examen!')
                break
            case(7):
                message.channel.send('En plein cours sur le theoreme de shannon et les informations a transferer d\'un point A a un Point B et on parlais donc de bits... \n puis soudain le prof s\'arrete dans ses explications et demande a un eleve comment il s\'appelle.\n L\'eleve repond: \"Julien, monsieur\". \n Puis le prof enboite le pas en demandant le nom de l\'eleve a coté de celui-ci et la reponse est Maxime. \n Et sur ce le prof dit: \" Alors Julien qu\'est-ce que tu regarde entre les jambes de Maxime? \"')
                break
            case(8):
                message.channel.send('vous devez aimer les filles qui ont des tresses car elles ont moins de parasites!')
                break
            case(9):
                message.channel.send('le prof parle et tout d\'un coups il voit un eleve Philémon qui rigole dans le fond de la classe et qui a son PC ouvert. Puis il dit que dorenavant pour moi tous les eleves qui ouvrent leur PC s\'appele Philémon!')
                break
            case(10):
                message.channel.send('a votre avis, pourquoi je ne veux pas que vous regardiez votre GSM? Et bien parceque c \'est une question de fierte personnelle et car ca me perturbe et que j\'ai l\'impression que vous n\'avez rien a foutre de mon cours!')
                break
            case(11):
                message.channel.send('vous pouvez parler entre 3H et 5H du matin.')
                break
            case(12):
                message.channel.send('il avance a la vitesse d\'un escargot malade qui est lent, qui a un rhume, qui a la grippe, qui bave et qui va mourir!')
                break
            case(13):
                message.channel.send('ce matin je me suis levé et j\'ai regardé dehors et j\'ai vu un beau soleil bleu!')
                break
            case(14):
                message.channel.send('Vous vous levez, Loi d\'Ohm. Vous allez vous couchez, loi d\'Ohm')
                break
            case(15):
                message.channel.send('Si tu doutes, utilises min max, ça marche toujours')
                break
            }
    }
})

/* MASSON */
bot.on('message', function(message){
    if(message.content == '$Masson'){
        var rand = getRandomInt(8)
        switch(rand){
            case(0):
                message.channel.send('Oui c\'est ça...Non...Ah si...mais en fait c\'est pas du tout ça...je vais aller vérifier...(__ sort de la classe et revient 30 minutes plus tard__)')
                break
            case(1):
                message.channel.send('Votre rapport est du plus pourri, mais bon allez le programme fonctionne (16/20)')
                break
            case(2):
                message.channel.send('Ca marche pas vraiment ça vaut un 14 sur 20')
                break
            case(3):
                message.channel.send('Je peux pas te mettre 10 (sur 20) .... ça va être 10')
                break
            case(4):
                message.channel.send('Excusez moi de mon retard, mon bus est parti dans la mauvaise direction')
                break
            case(5):
                message.channel.send('Mon bus n\'est pas passé j\'ai du prendre un taxi')
                break
            case(6):
                message.channel.send('C\'est pas possible, quelqu\'un a un double de la télécommande')
                break
            case(7):
                message.channel.send('IL A TELLEMENT PLU QUAND J\'AI ATTENDU MON BUS QUE MÊME MA PETITE CULOTTE EST TOUTE MOUILLEE #PasDeCensure')
                break  
        }
    }
})

/* DEWULF */
bot.on('message', function(message){
    if(message.content == '$Dewulf'){
        var rand = getRandomInt(3)
        switch(rand){
            case(0):
                message.channel.send('Bon allez je vous laisse 30... Nan 35 micro secondes d\'avance')
                break
            case(1):
                message.channel.send('Vous êtes beaucoup trop lent, c\'est grave hein ça c\'est de la matière de deuxième')
                break
            case(2):
                message.channel.send('Pas de cannettes dans les salles informatiques parce que si l\'admin réseau passe, il te tue et puis il me tue ensuite et j\'ai pas envie de mourir avec toi')
                break 
        }
    }
})

/* FAULKNER */
bot.on('message', function(message){
    if(message.content == '$Faulkner'){
        var rand = getRandomInt(4)
        switch(rand){
            case(0):
                message.channel.send('Je dois partir plus tôt aujourd\'hui')
                break
            case(1):
                message.channel.send('Excusez-moi il faut que je prenne cet appel')
                break
            case(2):
                message.channel.send('Ca ça vaut un podium !')
                break 
            case(3):
                message.channel.send('Dites, vous faites quelque chose mercredi prochain ? Je voudrais vous inviter à un souper')
                break 
        }
    }
})

/* HECQUET */
bot.on('message', function(message){
    if(message.content == '$Delvigne'){
        var rand = getRandomInt(6)
        switch(rand){
            case(0):
                message.channel.send('- Monsieur, j\'ai une question. \n- Demande à ton voisin, je ne répondrai pas.')
                break
            case(1):
                message.channel.send('Prof: Il existe des contraintes techniques au niveau des disques durs et vous ne verrez jamais un disque de 1TB à 10.000 tours/min. \nEtudiant: Western Digital VelociRaptor 1TB (WD1000DHTZ), il est à 10.000 tours/min.')
                break
            case(2):
                message.channel.send('Attention piège à...étudiants');
                break
            case(2):
                message.channel.send('C\'est un problème entre la chaise et le clavier');
                break
            case(3):
                message.channel.send('Mais en fait vous n\'avez strictement rien compris au cours l\'année dernière.')
                break
            case(4):
                message.channel.send('Non, c\'est juste votre structure qui est pourrie')
                break
            case(5):
                message.channel.send('Le problème c\'est que vous avez juste copié le SiTeX de Nini')
                break
        }
    }
})

/* HECQUET */
bot.on('message', function(message){
    if(message.content == '$Hecquet'){
        var rand = getRandomInt(2)
        switch(rand){
            case(0):
                message.channel.send('Bon si le son est trop fort, j\'arrache le cable HDMI. __retire le cable d\'alimentation__')
                break
            case(1):
                message.channel.send('Si on retire le whiskey aux enfants, ils sont perdus, il sont coupés du monde')
                break
        }
    }
})

/* HELP */
bot.on('message', function(message){
    if(message.content == '$ProfsHelp'){
        message.channel.send('$Bouterfa $Faulkner $Masson $Dewulf $Hecquet $Thomas $Delvigne $Lucie')
    }
})

/* LUCIE */
bot.on('message', function(message){
    if(message.content == '$Lucie'){
        var rand = getRandomInt(3)
        switch(rand){
            case(0):
                message.channel.send('Je suis en retard')
                break
            case(1):
                message.channel.send('Etudiant : C\'est grand \nLucie : Comme la bite de Charles')
                break
            case(2):
                message.channel.send('La bite de Charles c\'est la plus jolie')
                break
        }
    }
})
//poule request
/* JUSTINE */
bot.on('message', function(message){
    if(message.content == '$Justine'){
        var rand = getRandomInt(1)
        switch(rand){
            case(0):
                message.channel.send('Je vais finir par en tuer un c\'est pas possible')
                break
        }
    }
})

/* LOUIS */
bot.on('message', function(message){
    if(message.content == '$Louis'){
        message.channel.send('Paint est mon meilleur ami')
    }
})

/* HUMBERT */
bot.on('message', function(message){
    if(message.content == '$Humbert'){
        var rand = getRandomInt(1)
        switch(rand){
            case(0):
                message.channel.send('En fait ce matin j\'ai mis le cadena de mon vélo et il a fait _CLICK_ donc il a changé la combinaison')
                break
        }
    }
})

/* FILET MORT */
bot.on('message', function(message){
    if(message.content == '$Philémon' || message.content == '$Philemon' || message.content == '$Phil' || message.content == '$phil'){
        message.channel.send('Je suis grassouillet')
    }
})

/* THOMAS */
bot.on('message', function(message){
    if(message.content == '$Thomas' || message.content == '$Thom' || message.content == '$thom' || message.content == '$thomas'){
        var rand = getRandomInt(5)
        switch(rand){
            case(0):
                message.channel.send('Ta mère le sous plat')
                break
            case(1):
                message.channel.send('On va manger quoi ?')
                break
            case(2):
                message.channel.send('J\'ai faim je vais manger mon sandwich. _11h20_')
                break
            case(3):
                message.channel.send('Tu veux te battre ?')
                break
            case(4):
                message.channel.send('Ce matin je suis monté sur ma balance et j\'ai vu que j\'avais perdu un peu alors je me suis dis ce midi, O\'Tacos')
                break
        }
    }
})

/* WillSmith */
bot.on('message', function(message){
    if(message.content == '$WillSmith'){
        message.channel.send('Je suis une légende')
    }
})

/* RANDOM */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

/* CONNEXION */
bot.login(token)