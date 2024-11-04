import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaylistAddSongComponent } from './../../components/playlist-add-song/playlist-add-song.component';
import { Song } from './../../store/models/song.model';
import { Album } from './../../store/models/album.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from './../../store/index';
import { Store } from '@ngrx/store';

import { Artist } from './../../store/models/artist.model';
import { ArtistsAlbumService } from '../services/artists-album.service';
import { Mysong } from '../../store/models/mysong.model';

@Component({
  selector: 'app-christ-est-vainqueur',
  templateUrl: './christ-est-vainqueur.component.html',
  styleUrls: ['./christ-est-vainqueur.component.scss']
})
export class ChristEstVainqueurComponent implements OnInit, OnDestroy {
  artist: Artist;
  slug: string;
  lyrics: string
  album: Album;
  songs: Mysong[]

  artistSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<State>, public dialog: MatDialog, private albumService: ArtistsAlbumService) {
    this.artistSubscription = store.select('artists').subscribe(artists => {
      this.slug = route.snapshot.paramMap.get('slug');

      this.artist = artists.items[this.slug];
    });

    /*this.albums = store.select('albums').map(albums => {
      return typeof albums[this.slug] !== 'undefined' ? albums[this.slug] : [];
    });*/

    this.artist = {
      about: "Chantez à l'Eternel, vous qui l'aimez, Célébrez par vos louanges sa sainteté",
      genre: [{
        id: 1,
        name: "gospel",
        slug: "ee"
      }],
      image: "assets/images/louanges.png",
      name: "Christ Est Vainqueur cantiques",
      slug: "cev"
    }

    const myAlbum: Album = {
      id: "album-0",
      name: "Christ est vainqueur",
      image: "./../../../assets/images/louanges.png"
    }

    this.album = myAlbum

    this.songs = [
      {
        "id": 1,
        "name": "GRAND Dieu, nous te bénissons",
        "url": "./../../../assets/audios/CEV001.mp3",
        "image": "https://images.unsplash.com/photo-1440549770084-4b381ce9d988?dpr=1&auto=compress,format&fit=crop&w=2850&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>GRAND Dieu, nous te b&eacute;nissons,<br />Nous c&eacute;l&eacute;brons tes louanges ;<br />Eternel, nous t'exaltons<br />De concert avec les anges,<br />Et, prostern&eacute;s devant toi,<br />Nous t'adorons, &ocirc; grand Roi bis<br />2 Puisse ton r&egrave;gne de paix<br />S'&eacute;tendre par tout le monde ;<br />D&egrave;s maintenant &agrave; jamais,<br />Que sur la terre et sur l'onde,<br />Tous genoux soient abattus bis<br />Au nom du Seigneur J&eacute;sus!<br />3 Gloire soit au Saint-Esprit !<br />Gloire soit &agrave; Dieu le P&egrave;re !<br />Gloire soit &agrave; J&eacute;sus-Christ,<br />Notre Sauveur, notre Fr&egrave;re ;<br />Son immense charit&eacute;<br />Dure &agrave; perp&eacute;tuit&eacute;.</p>"
      },
      {
        "id": 2,
        "name": "CHRIST est vainqueur",
        "url": "./../../../assets/audios/CEV002.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "1 CHRIST est vainqueur,<br />Nous chantons Sa victoire,<br />Christ est vainqueur !<br />Il a d&eacute;fait l'ennemi des &eacute;lus,<br />Pour toujours l'Agneau r&eacute;gnera;<br />Sa victoire dure &agrave; toujours,<br />Sa puissance dure &agrave; jamais ;<br />A Celui qui est assis sur le tr&ocirc;ne,<br />l'honneur la louange, la gloire. bis</p>" +
          "<p><br />2 Satan vaincu,<br />Nous chantons ta d&eacute;faite ;<br />Tu es vaincu !<br />Tu es tomb&eacute; devant le Roi des rois,<br />Pour toujours tu es renvers&eacute; ;<br />Ta d&eacute;faite dure &agrave; toujours,<br />Ta faiblesse dure &agrave; jamais ;<br />A celui qui accusait les &eacute;lus bis<br />La confusion, la honte.</p>" +
          "<p><br />3 Esprits m&eacute;chants,<br />D&eacute;mons et dominations,<br />Vous &ecirc;tes confus !<br />Votre royaume est jug&eacute;, an&eacute;anti,<br />Pour toujours Satan est vaincu;<br />Sa d&eacute;faite dure &agrave; toujours</p>" +
          "<p>Sa faiblesse dure &agrave; jamais ;<br />A celui qui accusait les &eacute;lus bis<br />La confusion, la honte.</p>" +
          "<p><br />4 Tous les &eacute;lus, de tout c&oelig;ur,<br />de toute &acirc;me, se sont unis !<br />Soumis au Roi qui les a rachet&eacute;s<br />C'est l&agrave; le chemin de la gloire ;<br />Leur victoire est assur&eacute;e ;<br />Leur puissance est en J&eacute;sus ;<br />A Celui qui est assis sur le tr&ocirc;ne, bis<br />l'honneur la louange, la gloire.</p>"
      },
      {
        "id": 3,
        "name": "SAINT, saint, saint est l'Eternel",
        "url": "./../../../assets/audios/CEV003.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>SAINT, saint, saint est l'Eternel,<br />Le Seigneur, Dieu des arm&eacute;es,<br />Son pouvoir est immortel ;<br />Ses &oelig;uvres partout sem&eacute;es,<br />Font &eacute;clater sa grandeur<br />Sa majest&eacute;, sa splendeur ! bis</p>" +
          "<p><br />2 Les saints et les bienheureux,<br />Les tr&ocirc;nes et les puissances,<br />Toutes les vertus des cieux<br />Disent ses magnificences,<br />Proclamant dans leurs concerts<br />Le grand Dieu de l'univers. bis</p>" +
          "<p><br />3 L'illustre et glorieux ch&oelig;ur<br />Des ap&ocirc;tres, des proph&egrave;tes,<br />C&eacute;l&egrave;bre le Dieu Sauveur<br />Dont ils sont les interpr&egrave;tes ;<br />Tous les martyrs couronn&eacute;s<br />Chantent ses fid&eacute;lit&eacute;s. bis</p>" +
          "<p><br />4 Sauve ton peuple, Seigneur,<br />Et b&eacute;nis ton h&eacute;ritage !<br />Que ta gloire et ta splendeur<br />Soient &agrave; jamais son partage<br />Conduis-le par ton amour<br />Jusqu'au c&eacute;leste s&eacute;jour</p>"
      },
      {
        "id": 4,
        "name": "DANS les cieux et sur la terre",
        "url": "./../../../assets/audios/CEV004.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 DANS les cieux et sur la terre,<br />Il n'est aucun nom plus doux,<br />Aucun que mon c&oelig;ur pr&eacute;f&egrave;re<br />Au nom du Christ mort pour nous.<br /><br />Choeur :<br />Quel beau nom<br />Porte l'Oint de l'Eternel !<br />Quel beau nom (bis)<br />Que celui d'Emmanuel !</p>" +
          "<p><br />2 Quelque grand que soit un homme,<br />Qu'il soit prince ou qu'il soit roi,<br />De quelque nom qu'on le nomme,<br />J&eacute;sus est plus grand pour moi. Ch.</p>" +
          "<p><br />3 Les s&eacute;raphins, les archanges<br />Portent des noms glorieux,<br />Mais le plus beau nom des anges<br />Pourrait-il me rendre heureux? Ch.</p>" +
          "<p><br />4 Dans les maux, J&eacute;sus soulage,<br />Il gu&eacute;rit l'esprit froiss&eacute;,<br />Il ranime le courage<br />Du c&oelig;ur le plus oppress&eacute;. Ch</p>"
      },
      {
        "id": 5,
        "name": "JESUS est le nom du grand Roi",
        "url": "./../../../assets/audios/CEV005.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 JESUS est le nom du grand Roi,<br />C'est le nom de mon amour,<br />Il me fait trembler de joie<br />Quand je pense &agrave; son retour.</p>" +
          "<p><br />Ch&oelig;ur :<br />Quel beau jour<br />Quand J&eacute;sus-Christ reviendra (bis)<br />Quel beau jour<br />Que celui de son retour.</p>" +
          "<p><br />2 Le Seigneur J&eacute;sus vient bient&ocirc;t<br />Chercher les Saints dispers&eacute;s,<br />Quiconque est marqu&eacute; de son sceau<br />Sera par Lui appel&eacute;. Ch.</p>" +
          "<p><br />3 Quand il descendra des cieux,<br />Resplendissant sur les nu&eacute;es<br />Tous les &eacute;lus bienheureux<br />Seront par Lui rassembl&eacute;s. Ch.</p>" +
          "<p><br />4 Et la loi de la pesanteur<br />Sera pour de bon cass&eacute;e,<br />Quand les Saints et leur<br />R&eacute;dempteur<br />Seront au ciel enlev&eacute;s. Ch</p>"
      },
      {
        "id": 6,
        "name": "O NOM divin, nom Rédempteur",
        "url": "./../../../assets/audios/CEV006.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 O NOM divin, nom Rédempteur<br />J&eacute;sus, puissant Sauveur !(bis)<br />Nous prosternant tous devant toi.</p>" +
          "<p><br />Ch&oelig;ur :<br />Nous te couronnons,<br />nous te couronnons<br />C'est toi J&eacute;sus,<br />C'est toi que nous couronnons Roi.</p>" +
          "<p><br />2 Avec les anges dans les cieux,<br />Les martyrs glorieux, (bis)<br />Qui jadis ont souffert pour toi Ch.</p>" +
          "<p><br />3 Rachet&eacute;s au prix de ton sang,<br />O Sauveur tout-puissant, (bis)<br />Sauv&eacute;s par gr&acirc;ce, et par la foi. Ch.</p>" +
          "<p><br />4 Bient&ocirc;t nous te verrons au ciel<br />Sur ton tr&ocirc;ne &eacute;ternel (bis)<br />Mais ne vivant d&eacute;j&agrave; qu'en toi. Ch</p>"
      },
      {
        "id": 7,
        "name": "GLOIRE ! Il est ressuscité",
        "url": "./../../../assets/audios/CEV007.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Chœur :<br />GLOIRE ! Il est ressuscité<br />Ah ! Jésus est vivant<br />Nous vous l'annonçons ;<br />Ah ! Alléluia gloire à Dieu,<br />Jésus a vaincu la mort.</p>" +
          "<p><br />1 Gloire ! Dieu l'a ressuscité<br />Ah ! Il l'a délivré<br />Des liens de la mort ;<br />Ah ! Jésus plus fort que Satan !<br />Il a vécu sans pécher. Ch.</p>" +
          "<p><br />2 Gloire ! Il a bravé la mort !<br />Ah ! Il est ma victoire<br />Je n'ai peur de rien ;<br />Ah! Mon Sauveur est tout-puissant,<br />Et c'est Lui qui est ma force. Ch.</p>" +
          "<p><br />3 Gloire ! Jésus-Christ est ma vie!<br />Ah ! Il vit en moi<br />Et moi je vis pour Lui ;<br />Ah Il reviendra me chercher<br />Pour m'amener dans son ciel. Ch.</p>" +
          "<p><br />4 Christ, t'appelle aujourd'hui ;<br />Viens, repens-toi<br />Et n'endurcis pas ton cœur ;<br />Et, quand Il viendra nous chercher<br />Tu ne seras pas laissé.</p>"
      },
      {
        "id": 8,
        "name": "TU ES le berger,nous ne manquerons de rien",
        "url": "./../../../assets/audios/CEV008.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Choeur<br />Alléluia ! Alléluia ! Alléluia ! Alléluia !<br />Alléluia! Alléluia ! Alléluia ! Amen</p>" +
          "<p><br />1 TU ES le berger,<br />nous ne manquerons de rien,<br />Qui nous séparera<br />de l'amour de Jésus? bis<br />Qui accusera les élus de Dieu ?<br />Car le Seigneur est mort,<br />Bien plus ressuscité. Ch</p>" +
          "<p><br />2 Tu es le berger,<br />nous ne manquerons de rien,<br />Nous T'exaltons Seigneur<br />et nous Te célébrons. bis<br />Nous prosternant devant<br />Ton trône ô Dieu<br />Car les cieux sont à Toi,<br />La terre(est) Ton marche-pied Ch</p>"
      },
      {
        "id": 9,
        "name": "ESPRIT de Dieu, de vérité",
        "url": "./../../../assets/audios/CEV009.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 ESPRIT de Dieu, de vérité,<br />Source de vie, de sainteté,<br />C'est un grand honneur pour l'Eglise<br />Qui est sur le roc assise<br />De Te chanter ses louanges, (bis)<br />Comme au ciel le font les anges.</p>" +
          "<p><br />2 Lorsque Jésus notre Seigneur<br />Nous promit un Consolateur,<br />L'Eglise chérie était sans force,<br />Saisie de crainte et tremblante<br />Sous la menace de l'épée (bis)<br />Les siens s'étaient enfermés.</p>" +
          "<p><br />3 Monté et près du Père assis,<br />Jésus à qui Tu T'es soumis,<br />Auprès des siens T'a envoyé,<br />Plein de zèle Tu es allé<br />Comme le feu est descendu (bis)<br />Sur chacun Tu es venu.</p>" +
          "<p><br />4 L'enfer et le monde enragés,<br />Pour le combat, se sont rangés,<br />Mais Ta puissance s'est déployée:<br />Le salut est proclamé<br />Et les pécheurs sont sauvés (bis)<br />Les captifs sont libérés.</p>" +
          "<p><br />5 Si l'Eglise est restée debout,<br />A persévéré jusqu'au bout,<br />C'est grâce à Ton soutien Seigneur.<br />Dans les temps de la douleur<br />Tu es resté son ami (bis)<br />Et Tu as pris son parti.</p>" +
          "<p><br />6 Nous Te louons et T'adorons,<br />Nous Te louons Te bénissons,<br />Esprit de vie, de vérité,<br />Source de la sainteté<br />Nous T'offrons nos vies nos cœurs (bis)<br />De Toi vient notre bonheur.</p>"
      },
      {
        "id": 10,
        "name": "SAINT des saints",
        "url": "./../../../assets/audios/CEV010.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 SAINT des saints !<br />Tout mon cœur<br />Veut s'élever à Toi (bis)<br />Tu me dis de chercher<br />Le regard de ta face,<br />Fais-moi sentir<br />ta puissante efficace,<br />Esprit de Dieu, viens soutenir<br />ma foi. (bis)</p>" +
          "<p><br />2 Eternel, ton amour<br />Te fit mon Créateur : (bis)<br />L'univers tout entier,<br />Seigneur est ton ouvrage ;<br />Mais tu formas<br />notre âme à ton image,<br />Et pour t'aimer Tu nous<br />donnas un cœur. (bis)</p>" +
          "<p><br />3 Ta bonté m'accueillit<br />Au matin de mes jours ;(bis)<br />Tu veillas au berceau<br />De ma fragile vie ;<br />Par Ta faveur ma route fut choisie,<br />Mille bienfaits en marquèrent le<br />cours. (bis)</p>" +
          "<p><br />4 Mais bientôt J‟oubliai,<br />Seigneur ! ce tendre soin ;(bis)<br />Trop souvent en mon cœur<br />Je méconnus ta grâce.<br />Que de mépris,<br />que d'orgueil et d'audace!<br />Que de détours dont tu fus<br />le témoin ! (bis)</p>" +
          "<p><br />5 Devant toi je rougis<br />Et demeure confus ; (bis)<br />Mais, Seigneur ! Ta pitié<br />Relève ma misère.<br />N'as-tu pas mis<br />entre elle et ta colère<br />L'amour, la croix et le sang<br />de Jésus ? (bis)</p>" +
          "<p><br />6 Oui Seigneur ! Tu m'entends<br />Tu m'ôtes ma douleur, (bis)<br />Je me sens ton enfant ;<br />Mon Père je t'appelle,<br />De ton secours<br />la promesse est fidèle;<br />Béni sois-tu ! Ta paix rentre en<br />mon cœur. (bis)</p>"
      },
      {
        "id": 11,
        "name": "JÉSUS est le Libérateur",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>JÉSUS est le Libérateur<br />Dont le salut m'inonde,<br />Jésus le Tout-Puissant Sauveur<br />Qui m'affranchit du monde.</p> " +
          "<p><br />2 Je me souviens de mon passé<br />Baigné dans la misère,<br />Quand le Seigneur m'a visité<br />Et m'a conduit au Père</p> " +
          "<p><br />3 Peux-tu nous dire ce qui t'arrive?<br />Me demandent mes amis  " +
          ";<br />O! Tout ce que je puis vous dire:<br />J'ai rencontré le Messie.</p>"
      },
      {
        "id": 12,
        "name": "JÉSUS, Jésus, Jésus",
        "url": "./../../../assets/audios/CEV012.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 JÉSUS, Jésus, Jésus, Jésus<br />Seul nom que mon cœur aime,<br />Je voudrais ne prononcer plus<br />Qu'un seul mot, ce nom même.</p> " + "<p><br />2 Jésus, Jésus, ce nom si beau,<br />C'est celui dont les anges,<br />Prosternés autour de l'Agneau<br />Remplissent leurs louanges.</p> " + "<p><br />3 Jésus, c'est le nom de celui<br />Qui descendit du Père,<br />Dont l'amour sur la croix a lui,<br />En qui la terre espère.</p> " + "<p><br />4 Jésus, Jésus, Jésus, Jésus,<br />Bientôt mon cœur qui t'aime,<br />Auprès de toi ne dira plus<br />Qu'un seul mot, ton nom même.</p>"
      },
      {
        "id": 13,
        "name": "MON Jésus, je t'aime",
        "url": "./../../../assets/audios/CEV013.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>MON Jésus, je t'aime<br />Je te sais à moi.<br />Oh ! quel charme extrême<br />Me retient à toi !<br />Les plaisirs du monde<br />Ne m'attirent plus,<br />Ton amour m'inonde,<br />Je t'aime, ô Jésus !</p> " + "<p><br />2 Mon Jésus, je t'aime,<br />Car tu m'as sauvé.<br />En t'offrant toi-même,<br />Ton sang m'a lavé !<br />Sur la croix bénie,<br />Pour moi, tu mourus,<br />Ta mort est ma vie,<br />Je t'aime, ô Jésus !</p> " + "<p><br />3 Qu'ici-bas je t'aime<br />Jusque dans la gloire<br />A l'heure suprême<br />De l‟enlèvement<br />Ma voix triomphante<br />Se fera entendre<br />Sachez que je chante :<br />Je t'aime, ô Jésus !</p> " + "<p><br />4 Je verrai ta face,<br />Quel ravissement !<br />Je louerai ta grâce<br />Éternellement,<br />Et dirai sans cesse<br />Avec les élus<br />L'hymne d'allégresse :<br />Je t'aime, ô Jésus !</p>"
      },
      {
        "id": 14,
        "name": "JESUS est notre ami suprême",
        "url": "./../../../assets/audios/CEV014.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 JESUS est notre ami suprême:<br />Oh ! quel amour !<br />Mieux qu'un tendre frère<br />Il nous aime;<br />Oh ! quel amour !<br />Ici parents, amis, tout passe ;<br />Le bonheur paraît et s'efface ;<br />Son cœur seul jamais ne se lasse...<br />Oh ! quel amour !</p> " + "<p><br />2 Il est notre vie éternelle ;<br />Oh ! quel amour !<br />Célébrons son œuvre immortelle ;<br />Oh ! quel amour !<br />Par son sang notre âme est lavée ;<br />Au désert il l'avait trouvée,<br />Dans son bercail il l'a sauvée ;<br />Oh ! quel amour !</p> " + "<p><br />3 Seigneur Jésus ! fais-nous<br />comprendre<br />Tout ton amour !<br />Dans nos cœurs, Tu as daigné<br />répandre<br />Tout ton amour !<br />Que cet amour soit notre vie !<br />Qu'à jamais notre âme ravie !<br />Savoure une joie</p>"
      },
      {
        "id": 15,
        "name": "QUEL ami fidèle et tendre",
        "url": "./../../../assets/audios/CEV015.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 QUEL ami fidèle et tendre<br />Nous avons en Jésus-Christ,<br />Toujours prêt à nous entendre<br />A répondre à notre cri !<br />Il connaît nos défaillances,<br />Nos chutes de chaque jour.<br />Sévère en ses exigences,<br />Il est riche en son amour.</p> " + "<p><br />2 Quel ami fidèle et tendre<br />Nous avons en Jésus-Christ,<br />Toujours prêt à nous comprendre<br />Quand nous sommes en souci !<br />Disons-Lui toute nos craintes,<br />Ouvrons-Lui tout notre cœur,<br />Bientôt ses paroles saintes<br />Nous rendront le vrai bonheur.</p> " + "<p><br />3 Quel ami fidèle et tendre<br />Nous avons en Jésus-Christ,<br />Toujours prêt à nous défendre<br />Quand nous presse l'ennemi !<br />Il nous suit dans la mêlée,<br />Nous entoure de ses bras,<br />Et c'est Lui qui tient l'épée<br />Qui décide des combats.</p> " + "<p><br />4 Quel ami fidèle et tendre<br />Nous avons en Jésus-Christ,<br />Toujours prêt à nous apprendre<br />A vaincre en comptant sur Lui !<br />S'il nous voit vrais et sincères<br />A chercher la sainteté,<br />Il écoute nos prières,<br />Et nous met en liberté.</p> " + "<p><br />5 Quel ami fidèle et tendre<br />Nous avons en Jésus-Christ,<br />Bientôt Il viendra nous prendre<br />Pour être au ciel avec Lui !<br />Suivons donc l'étroite voie<br />En comptant sur son secours ;<br />Bientôt nous aurons la joie<br />De vivre avec Lui toujours.</p>"
      },
      {
        "id": 16,
        "name": "JE l'ai trouvé",
        "url": "./../../../assets/audios/CEV016.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 JE l'ai trouvé, Je l'ai trouvé,<br />Le Bonheur ineffable !<br />Je suis sauvé, je suis sauvé,<br />O joie inexprimable !<br />Tous mes péchés sont effacés :<br />Le sang de Christ me lave :<br />Les jours de larmes sont passés<br />Je ne suis plus esclave !</p> " + "<p><br />2 Oh! quel bonheur! oh! quel<br />bonheur,<br />D'avoir Jésus pour Maître !<br />O mon Sauveur, mon seul Sauveur,<br />A toi seul je veux être !<br />Tu vins briser, puissant vainqueur,<br />Du mal la tyrannie,<br />Affranchissant mon pauvre cœur<br />Et me donnant ta vie.</p> " + "<p><br />3 Dans ton amour tu m'as cherché,<br />Errant bien loin du Père :<br />Tu m'as sauvé de mon péché,<br />Tu fis de moi ton frère ;<br />Et maintenant, et pour jamais,<br />Sous ton joug je me plie.<br />Je ne puis vivre désormais<br />Jésus, que de ta vie !</p> " + "<p><br />4 Ah ! Laissez-moi chanter mon Roi<br />Oui, qu'à genoux, je chante !<br />Jésus n'est-Il pas tout pour moi?<br />Gloire à sa croix sanglante !<br />Sans se lasser, jour après jour,<br />Il m'aime, Il m'aime encore...<br />Comment répondre à tant d'amour ?<br />Je crois j'aime et j'adore !</p>"
      },
      {
        "id": 17,
        "name": "JE NE sais pourquoi",
        "url": "./../../../assets/audios/CEV017.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>JE NE sais pourquoi, dans sa grâce,<br />Jésus m'a tant aimé ;<br />Pourquoi, par son sang, Il efface<br />Ma dette, mon péché.</p> " + "<p><br />Chœur :Mais je sais qu'en Lui j'ai la vie,<br />Il m'a sauvé dans son amour :<br />Et gardé par sa main meurtrie,<br />J'attends l'heure de son retour.</p> " + "<p><br />2 Je ne sais comment la lumière<br />Eclaire tout mon cœur,<br />Comment je compris ma misère<br />Et reçus mon Sauveur ! Ch.</p> " + "<p><br />3 Je ne sais quelle est la mesure<br />De joie et de douleur<br />Que pour moi, faible créature,<br />Réserve mon Sauveur. Ch.</p> " + "<p><br />4 Je ne sais quand de la victoire<br />L'heure enfin sonnera,<br />Quand l'Agneau, l'Epoux, dans<br />sa gloire<br />Avec Lui me prendra. Ch</p>"
      },
      {
        "id": 18,
        "name": "NOUS étions tous errants",
        "url": "./../../../assets/audios/CEV018.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 NOUS étions tous errants<br />comme des brebis perdues,<br />Chacun suivait sa propre voie;<br />Il plut à celui que nous avions rejeté<br />De nous sauver, de nous laver<br />Et nous sommes enfants de Dieu.</p> " + "<p><br />Chœur :<br />Personne ne m'avait jamais aimé<br />Jésus c'est Toi qui m'as aimé bis<br />De mon cœur cette belle mélodie<br />S'élève à Toi.</p> " + "<p><br />2 A cause de Toi le monde pour<br />moi est crucifié<br />Et tout ce qu'il m'offre de plus beau;<br />J'ai regardé tout cela comme<br />de la boue<br />A cause de Toi mon Sauveur,<br />J'ai bien tout abandonné. Ch.</p> " + "<p><br />3 Et maintenant nous souffrons<br />pour le Roi des rois,<br />Notre royaume n'est point ici-bas<br />En attendant la gloire de la cité<br />céleste,<br />Allons mes frères portons la croix,<br />Et suivons notre Seigneur. Ch</p>"
      },
      {
        "id": 19,
        "name": "LE NOM de Jésus est si doux",
        "url": "./../../../assets/audios/CEV019.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 LE NOM de Jésus est si doux!<br />De Dieu désarmant le courroux,<br />Il nous appelle au rendez-vous,<br />Précieux nom de Jésus !</p> " + "<p><br />Chœur :<br />Jésus ! Béni soit ton nom !<br />Jésus ! Oh ! merveilleux don !<br />Jésus ! Suprême rançon,<br />Sois adoré pour toujours.</p> " + "<p><br />2 J'aime ce nom dans le chagrin,<br />Il me soutient sur le chemin,<br />Sa musique est un son divin,<br />Précieux nom de Jésus ! Ch.</p> " + "<p><br />3 J'aime le nom de mon Sauveur,<br />Car Lui seul connaît tout mon cœur,<br />Lui seul me rend plus que<br />vainqueur:<br />Précieux nom de Jésus ! Ch.</p> " + "<p><br />4 Et si parfois j'ai succombé,<br />Si dans le mal je suis tombé,<br />Son nom puissant m'a relevé :<br />Précieux nom de Jésus ! Ch.</p> " + "<p><br />5 Et lorsque avec Lui je serai,<br />Et lorsque enfin je Le verrai,<br />Alors sans fin je redirai :<br />Précieux nom de Jésus ! Ch.</p>"
      },
      {
        "id": 20,
        "name": "RÉDEMPTEUR adorable",
        "url": "./../../../assets/audios/CEV020.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 RÉDEMPTEUR adorable,<br />Sur la croix attaché,<br />Traité comme un coupable,<br />Brisé pour mon péché,<br />Ton angoisse suprême,<br />Ta douleur, ton tourment<br />Me disent : Vois, je t'aime,<br />J'ai pris ton châtiment.</p> " + "<p><br />2 Abandonné du Père,<br />Dans mon âme troublé,<br />Buvant la coupe amère<br />Pour ton iniquité,<br />De l'éternelle flamme<br />Mon amour te sauva,<br />Je mourus pour ton âme,<br />Pécheur, à Golgotha !</p> " + "<p><br />3 Le sang de mes blessures,<br />Ma couronne de Roi,<br />Toutes ces meurtrissures,<br />Comprends-le, c'est pour toi !<br />J'ai subi ta souffrance,<br />J'ai porté ta langueur :<br />Contemple en assurance<br />Ton grand Libérateur !</p> " + "<p><br />4 Ton amour me réclame,<br />Me voici, cher Sauveur ;<br />Prends mon corps et mon âme<br />Pour prix de ta douleur.<br />Oui, mon âme ravie<br />Désormais ne veut plus<br />Que vivre de ta vie,<br />A ta gloire, ô Jésus !</p>"
      },
      {
        "id": 21,
        "name": "A TOI la gloire",
        "url": "./../../../assets/audios/CEV021.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 A TOI la gloire,<br />O Ressuscité !<br />A toi la victoire<br />Pour l'éternité !<br />Brillant de lumière,<br />L'ange est descendu,<br />Il roule la pierre<br />Du tombeau vaincu.<br />Chœur :<br />A toi la gloire, ô Ressuscité !<br />A toi la victoire! Pour l'éternité !</p> " + "<p><br />2 Vois-le paraître !<br />C'est Lui, c'est Jésus,<br />Ton Sauveur, Ton Maître,<br />Oh ! ne doute plus !<br />Sois dans l'allégresse,<br />Peuple du Seigneur,<br />Et redis sans cesse<br />Que Christ est vainqueur. Ch.</p> " + "<p><br />3 Craindrais-je encore ?<br />Il vit à jamais,<br />Celui que j'adore,<br />Le Prince de Paix ;<br />Il est ma victoire,<br />Mon puissant soutien,<br />Ma vie et ma gloire ;<br />Non, je ne crains rien ! C</p>"
      },
      {
        "id": 22,
        "name": "O POURQUOI, pourquoi suis-je né",
        "url": "./../../../assets/audios/CEV022.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 O POURQUOI, pourquoi suis-je né?<br />A quoi bon, à quoi bon vivre et<br />mourir?<br />A quoi bon, à quoi bon ce monde<br />Où tout passe, où tout s'en va ?<br />Dites-moi ! O qui me dira<br />D'où je viens, où je vais ?<br />Je n'en peux plus !<br />O ! je sais, oui que je mourrai,<br />Mais j'ignore où me conduit la mort!</p> " + "<p><br />2 C'est l'impasse, le noir autour de<br />moi,<br />Le chagrin et la peur là au-dedans,<br />Des questions, des questions<br />sans réponses<br />Tout au fond de mon cœur.<br />O ton cœur est plein de péchés,<br />Et Dieu dit : point de paix<br />Pour le méchant<br />Mais ce Dieu, est le Dieu d'amour,<br />Mon ami, repens-toi, repens-toi.</p> " + "<p><br />3 Il y a bien environ deux mille ans,<br />Un beau jour, un jour, à Golgotha<br />Jésus-Christ, Jésus-Christ a donné<br />A la croix sa vie pour toi.<br />Fils de Dieu Il s'est abaissé<br />Une histoire, une histoire<br />Jamais contée.<br />Innocent, Il s'est humilié<br />Jésus-Christ, Jésus-Christ, Fils</p>"
      },
      {
        "id": 23,
        "name": "TOUS les Saints",
        "url": "./../../../assets/audios/CEV023.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Chœur 1:<br />TOUS les Saints<br />Qui sont partis avant nous<br />se lèveront. Tous les Saints<br />Qui nous avaient devancés<br />Du tombeau surgiront. (bis)</p> " + "<p><br />1 Le Seigneur Jésus après avoir<br />souffert,<br />Est monté au ciel nous préparer<br />une place,<br />Il en reviendra comme Il nous l'a<br />promis,<br />Pour amener ceux qui l'auront aimé.<br />Ch.1</p> " + "<p><br />2 Oui tous les apôtres ainsi que les<br />prophètes,<br />Et tous les martyrs dont le sang<br />a coulé,<br />Oui tous les témoins qui furent<br />méprisés,<br />Se lèveront au son de la trompette.<br />Ch.1</p> " + "<p><br />3 Et nous le verrons pas comme<br />dans un miroir,<br />Nous le toucherons pas au<br />travers d'un voile,<br />Eh oui tel qu'Il est, tels aussi<br />nous serons,<br />En toutes choses nous Lui<br />ressemblerons.</p> " + "<p><br />Chœur 2:<br />Au grand Roi seront rendus<br />le royaume, le règne, la gloire<br />Au grand Roi<br />Seront rendus les hommages<br />Pour l'éternité. (bis)</p> " + "<p><br />4 A Jérusalem Il nous amènera,<br />Dans la cité d'or préparée pour<br />l'Epouse,<br />La salle du festin, la table seront<br />prêtes<br />Et avec nous, Il boira à nouveau.<br />Ch.2</p> " + "<p><br />5 En ce jour-là, il n'y aura plus de<br />mystère<br />Nous Le connaîtrons comme Il<br />nous a connus,<br />Et nous chanterons le cantique<br />de l'Agneau,<br />Nous jetterons nos couronnes<br />devant Lui. Ch.2</p>"
      },
      {
        "id": 24,
        "name": "LE SEIGNEUR<br Nous a donné la victoire",
        "url": "./../../../assets/audios/CEV024.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Chœur 1:<br />LE SEIGNEUR<br />Nous a donné la victoire sur le péché<br />Le Seigneur nous a donné la victoire<br />Même sur la mort. (bis)</p> " + "<p><br />1 A Gethsémané où Il fut arrêté,<br />Comme à Golgotha où Il fut<br />crucifié,<br />Il a obéi à tous Ses ennemis,<br />Jusqu'à la mort et la mort de la<br />croix. Ch.1</p> " + "<p><br />2. Au troisième jour de ces temps<br />difficiles,<br />Marie Magdala se rendit au sépulcre;<br />Elle ne vit personne, personne<br />comme Jésus,<br />Rien que ce froid, ce vide, ce silence<br /><br />Chœur 2:<br />Le Seigneur était sorti du tombeau<br />au grand matin ;<br />Le Seigneur avait déjà triomphé<br />Du dernier ennemi. (bis)</p> " + "<p><br />3 Marie Magdala s'était mise à pleurer,<br />Quand soudain derrière, elle<br />entendit : Marie !<br />S'étant retournée elle reconnut le Roi,<br />Se prosterna et elle l'adora. Ch.2</p> " + "<p><br />4 A Jérusalem où se trouvaient les<br />Siens,<br />Marie Magdala apporta la nouvelle;<br />Mais personne ne crut à ce<br />qu'elle annonçait,<br />C'était trop beau, comme vérité<br />Ch.2</p>"
      },
      {
        "id": 25,
        "name": "OH ! quel bonheur de le connaître",
        "url": "./../../../assets/audios/CEV025.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 OH ! quel bonheur de le connaître,<br />L'ami qui ne saurait changer,<br />De l'avoir ici-bas pour Maître,<br />Pour défenseur et pour berger !</p> " + "<p><br />Chœur :<br />Chantons, chantons d'un cœur joyeux<br />Le grand amour du Rédempteur,<br />Qui vint à nous du haut des cieux<br />Et nous sauva du destructeur.</p> " + "<p><br />2 Dans la misère et l'ignorance<br />Nous nous débattions sans espoir,<br />La mort au cœur, l'âme en souffrance<br />Quand à nos yeux il se fit voir. Ch.</p> " + "<p><br />3 Il nous apporta la lumière,<br />La victoire et la liberté ;<br />L'ennemi mordit la poussière,<br />Pour toujours Satan fut dompté. Ch.</p> " + "<p><br />4 Vers l'avenir marchons sans crainte<br />Et sans souci du lendemain,<br />Pas à pas nos pieds dans l'empreinte<br />De ses pieds sur notre chemin. Ch</p>"
      },
      {
        "id": 26,
        "name": "VENEZ au Sauveur qui vous aime",
        "url": "./../../../assets/audios/CEV026.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 VENEZ au Sauveur qui vous aime,<br />Venez Il a brisé vos fers ;<br />Il veut vous recevoir Lui-même,<br />Ses bras vous sont ouverts.</p> " + "<p><br />Chœur :<br />Oh ! quel beau jour, Sauveur fidèle,<br />Quand, nous appuyant sur ton bras,<br />Dans la demeure paternelle<br />Nous porterons nos pas !</p> " + "<p><br />2 Venez, pécheurs, Il vous appelle,<br />Le bonheur est dans Son amour!<br />Ah ! donnez-Lui ce cœur rebelle,<br />Donnez-le sans retour. Ch.</p> " + "<p><br />3 Le temps s'enfuit, l'heure s'écoule,<br />Qui sait si nous vivrons demain?<br />Jésus est ici dans la foule ;<br />Ah ! saisissez Sa main ! Ch.</p>"
      },
      {
        "id": 27,
        "name": "QUI me relève dans mes chutes",
        "url": "./../../../assets/audios/CEV027.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 QUI me relève dans mes chutes ?<br />C'est Jésus-Christ !<br />Qui combat pour moi dans mes<br />luttes?<br />C'est Jésus-Christ.<br />Jésus a parlé, je veux croire,<br />Que je puis lutter pour sa gloire,<br />Car mon bouclier, ma victoire,<br />C'est Jésus-Christ !</p> " + "<p><br />2 Je vais à mon Père, et ma voie<br />C'est Jésus-Christ :<br />Je suis bienheureux, et ma joie<br />C'est Jésus-Christ.<br />Et, si même dans la souffrance,<br />Mon cœur me parle d'espérance,<br />C'est que j'ai mis ma confiance<br />En Jésus-Christ.</p> " + "<p><br />3 Sauvé, je ne me glorifie<br />Qu'en Jésus-Christ ;<br />Pour la terre et le ciel ma vie<br />C'est Jésus-Christ.<br />Bientôt adieu, choses mortelles!<br />Loin de vous je prendrai des ailles<br />Vers les demeures éternelles,<br />Vers Jésus-Christ !</p>"
      },
      {
        "id": 28,
        "name": "AU pied de la croix sanglante",
        "url": "./../../../assets/audios/CEV028.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 AU pied de la croix sanglante,<br />Où tu t'es donné pour moi,<br />Mon âme émue et tremblante,<br />O Jésus se livre à toi.</p> " + "<p><br />Chœur :<br />Le parfait bonheur, (bis)<br />C'est de mettre tout mon être<br />A tes pieds, Seigneur !</p> " + "<p><br />2 Me voici pour ton service,<br />Je ne garde rien pour moi,<br />Sur l'autel du sacrifice,<br />Je me place par la foi. Ch.</p> " + "<p><br />3 Oui tu pris ma vie entière,<br />Mis sur moi ton divin sceau ;<br />Tu fis d'un fils de poussière,<br />Un enfant du Dieu Très-Haut. Ch.</p> " + "<p><br />4 A la gloire, aux biens du monde,<br />Je renonce pour jamais ;<br />Que le Saint-Esprit m'inonde<br />De ta joie et de ta paix ! Ch.</p> " + "<p><br />5 Si ma faiblesse est bien grande,<br />Ta force est plus grande encor,<br />O Jésus, qu'elle me rende<br />Fidèle toute la vie. Ch.</p> " + "<p><br />6 O félicité suprême !<br />Ta grâce est mon bouclier,<br />Et je t'appartiens, je t'aime,<br />Toi qui m'aimas le premier. Ch</p>"
      },
      {
        "id": 29,
        "name": "MISÉRICORDE insondable",
        "url": "./../../../assets/audios/CEV029.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 MISÉRICORDE insondable !<br />Dieu peut-Il tout pardonner ?<br />Absoudre un si grand coupable,<br />Et mes péchés oublier ?</p> " + "<p><br />Chœur :<br />Jésus, je viens ! je viens à Toi !<br />Tel que je suis, je viens à Toi !<br />Jésus, je viens ! je viens à Toi !<br />Tel que je suis, prends-moi.</p> " + "<p><br />2 Longtemps j'ai, loin de Sa face,<br />Provoqué Son saint courroux,<br />Fermé mon coeur à Sa grâce,<br />Blessé le Sien devant tous. Ch.</p> " + "<p><br />3 O Jésus, à Toi, je cède,<br />Je veux être libéré ;<br />De tout péché qui m'obsède<br />Etre à jamais délivré. Ch.</p> " + "<p><br />4 Alléluia ! plus de doute,<br />Mon fardeau m'est enlevé ;<br />Pour le ciel je suis en route,<br />Heureux pour l'éternité. Ch.</p>"
      },
      {
        "id": 30,
        "name": "TEL que je suis, sans rien à moi",
        "url": "./../../../assets/audios/CEV030.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 TEL que je suis, sans rien à moi,<br />Sinon Ton sang versé pour moi,<br />Et Ta voix qui m'appelle à Toi ;<br />Agneau de Dieu, je viens ! je viens!</p> " + "<p><br />2 Tel que je suis, bien vacillant,<br />En proie au doute à chaque instant,<br />Lutte au dehors, crainte au dedans,<br />Agneau de Dieu, je viens ! je viens!</p> " + "<p><br />3 Tel que je suis, Ton cœur est prêt<br />A prendre le mien tel qu'il est,<br />Pour tout changer, Sauveur parfait<br />Agneau de Dieu, je viens ! je viens!</p> " + "<p><br />4 Tel que je suis, Ton grand amour<br />A tout pardonné sans retour,<br />Je veux être à Toi dès ce jour ;<br />Agneau de Dieu, je viens ! je viens!</p>"
      },
      {
        "id": 31,
        "name": "JÉSUS, par ton sang précieux",
        "url": "./../../../assets/audios/CEV031.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 JÉSUS, par ton sang précieux,<br />Enlève mon iniquité,<br />Regarde-moi du haut des cieux,<br />Dis-moi que tu m'as pardonné...<br />J'ai longtemps erré, cœur rebelle,<br />Mais j'entends ta voix qui m'appelle,<br />Au pied de ta croix, maintenant,<br />Tout confus, brisé, je me rends.</p> " + "<p><br />Chœur :<br />Blanc, plus blanc que neige,(bis)<br />Lavé dans le sang de l'Agneau,<br />Je serai plus blanc que la neige!</p> " + "<p><br />2 Oh ! le fardeau de mon péché,<br />Dieu très saint, est trop grand<br />pour moi,<br />Je veux en être délivré,<br />A cette heure, oh ! révèle-toi<br />Jésus, viens, sois ma délivrance,<br />Seul tu peux calmer ma souffrance!<br />Au pied de ta croix, maintenant,<br />Tout confus, brisé, je me rends. Ch.</p> " + "<p><br />3 O Jésus, ton sang précieux,<br />A lavé mon iniquité ;<br />Oui, tu m'as répondu des cieux,<br />Ton amour m'a tout pardonné.<br />Je te contemple et je puis croire<br />Qu'en toi j'ai complète victoire...<br />Au pied de ta croix maintenant<br />Je me relève triomphant !<br />Chœur :<br />Blanc, plus blanc que neige, (bis)<br />Lavé dans le sang de l'Agneau,<br />Mon cœur est plus blanc que la<br />neige.<br />A. HUM</p>"
      },
      {
        "id": 32,
        "name": "NE CRAINS rien, je t'aime",
        "url": "./../../../assets/audios/CEV032.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 NE CRAINS rien, je t'aime !<br />Je suis avec toi !<br />Promesse suprême<br />Qui soutient ma foi.<br />La sombre vallée<br />N'a plus de terreur,<br />L'âme consolée,<br />Je marche avec mon Sauveur.</p> " + "<p><br />Chœur :<br />Non jamais tout seul(bis)<br />Jésus mon Sauveur me garde<br />Jamais ne me laisse seul<br />Non, jamais tout seul (bis)<br />Jésus mon Sauveur me garde<br />Je ne suis jamais tout seul.</p> " + "<p><br />2 L'aube matinière<br />Ne luit qu'aux beaux jours,<br />Jésus, ma lumière,<br />M'éclaire toujours !<br />Quand je perds de vue<br />L'astre radieux,<br />A travers la nue,<br />Jésus me montre les cieux ! Ch.</p> " + "<p><br />3 Les dangers accourent,<br />Subtils, inconnus :<br />De près ils m'entourent,<br />Plus près est Jésus,<br />Qui dans le voyage,<br />Me redit : C'est Moi !<br />Ne crains rien, courage :<br />Je suis toujours avec toi. Ch</p>"
      },
      {
        "id": 33,
        "name": "C'est la croix notre chemin",
        "url": "./../../../assets/audios/CEV033.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "1 OH ! C'est la croix notre chemin, " + "Sur ce chemin il faut quitter " + "Et le monde et le moi " + "Et tous ceux qui nous sont chers. " + "Oui pour la gloire du Seigneur, " + "Nous ne faillirons pas " + "S'il faut perdre la vie, " + "Oui nous mourrons. " + " " + " " + "2 Très difficile d'avancer, " + "De tous côtés toujours pressés, " + "Le courant contre nous " + "Mais à Jésus nous regardons. " + "Oui nous ne faillirons pas, " + "Notre Dieu est vivant, " + "Par la force de son bras, " + "Nous sommes vainqueurs. " + " " + " " + "3 Adieu papa, Adieu maman, " + "A nous revoir les chers amis, " + "Sur le champ du combat " + "J'entends une voix qui m'appelle. " + "Oui, c'est la voix du Seigneur, " + "Qui m'appelle qui m'appelle, " + "Me voici mon Jésus " + "Je te suivrai."
      },
      {
        "id": 34,
        "name": "ENTRE tes mains j'abandonne",
        "url": "./../../../assets/audios/CEV034.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 ENTRE tes mains j'abandonne<br />Tout ce que j'appelle mien.<br />Oh ! ne permets à personne,<br />Seigneur, d'en reprendre rien !<br />Oui, prends tout, Seigneur ! (bis)<br />Entre tes mains j'abandonne<br />Tout avec bonheur.</p> " + "<p><br />2 Je n'ai pas peur de te suivre<br />Sur le chemin de la croix.<br />C'est pour toi que je veux vivre,<br />Je connais, j'aime ta voix.<br />Oui, prends tout, Seigneur ! (bis)<br />Sans rien garder je te livre<br />Tout avec bonheur.</p> " + "<p><br />3 Tu connais mieux que moi-même<br />Tous les besoins de mon cœur;<br />Et, pour mon bonheur suprême,<br />Tu peux me rendre vainqueur :<br />Oui, prends tout, Seigneur ! (bis)<br />Je ne vis plus pour moi-même,<br />Mais pour mon Sauveur.</p> " + "<p><br />4 Prends mon corps et prends mon<br />âme<br />Que tout en moi soit à Toi ;<br />Que par ta divine flamme<br />Tout mal soit détruit en moi !<br />Oui, prends tout, Seigneur ! (bis)<br />Prends mon corps et prends<br />mon âme ;<br />Règne sur mon cœur !</p>"
      },
      {
        "id": 35,
        "name": "L'HEURE approche, la nuit vient",
        "url": "./../../../assets/audios/CEV035.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 L'HEURE approche, la nuit vient<br />Où je n'pourrai plus<br />Me lever, travailler ;<br />Il sera trop tard.</p> " + "<p><br />Chœur :<br />Le repos (bis)<br />Ne se trouve qu'en Lui,<br />A présent mon repos c'est de Le servir</p> " + "<p><br />2 Le temps s'envole, il s'enfuit,<br />Que n'puis-je l'arrêter ?<br />Mais il court, mais il court,<br />Qui peut le saisir ? Ch.</p> " + "<p><br />3 La souffrance et la douleur,<br />Tout cela passera<br />Quand le Roi reviendra,<br />Je verrai l'bonheur. Ch.</p> " + "<p><br />4 La couronne de la vie<br />Me sera donnée ;<br />Quand Jésus reviendra,<br />Je serai couronné. Ch</p>"
      },
      {
        "id": 36,
        "name": "DIS-MOI quel est le but de ta vie",
        "url": "./../../../assets/audios/CEV036.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 DIS-MOI quel est le but de ta vie ?<br />Ce que tu fais sur la terre.<br />Sais-tu quel est le but de ma vie ?<br />Gagner le monde pour Jésus.</p> " + "<p><br />Chœur :<br />Nous devons (bis)<br />Faire de toutes les nations des<br />disciples<br />Le Seigneur (bis)<br />Ne nous l'a-t-Il pas commandé ?<br />2 Nous devons l'Evangile de Jésus,<br />A tous les six continents.<br />En Libye, en Russie, au Yémen,<br />Jésus sera proclamé. Ch.<br />3 Nous dirons que c'est pour nos<br />péchés,<br />Qu'Il fut cloué sur la croix.<br />Nous irons annoncer qu'Il est mort,<br />Pour tous les hommes de la terre. Ch.<br />4 Nous allons proclamer Sa victoire,<br />A toute la création.<br />Nous devons exalter Sa grandeur,<br />Et tout genou fléchira. Ch.<br />5 Nous ne trahirons pas le grand Roi,<br />Il est l'Agneau immolé.<br />Son sang n'a-t-il pas coulé pour nous?<br />Nous devons Le couronner. Ch</p>"
      },
      {
        "id": 37,
        "name": "LE MONDE m'a cloué sur cette croix",
        "url": "./../../../assets/audios/CEV037.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 LE MONDE m'a cloué sur cette<br />croix infâme<br />M'accablant sous les coups de sa<br />brutalité<br />Mais Dieu, pour te sauver versa<br />sur mon âme<br />Tout le bourbier fangeux de ton<br />péché.</p> " + "<p><br />Ref 1 :<br />Ne crains pas désormais,<br />pauvre brebis errante<br />Tu ne connaîtras plus l'angoisse<br />ou l'épouvante.<br />Tout péché m'atteignit et j'en<br />portai le poids<br />Qui te condamnerait une seconde fois ?</p> " + "<p>2 Ne crains pas, ne crains pas,<br />ma brebis retrouvée<br />Je saurai te défendre, ô toi que<br />j'ai sauvée<br />Comment guidée par moi,<br />perdrais-tu ton chemin ?<br />Quel ennemi pourrait te ravir de<br />ma main?</p> " + "<p><br />Ref 2 :<br />Aucun fardeau ne pèse à ma<br />puissante épaule.<br />De mes travaux sans fin, ton<br />salut me console.<br />Au prix dont je t'acquis, j'estime<br />ta valeur<br />Maintenant, pose en paix ta tête<br />sur mon cœur !</p> " + "<p><br />3 Et serré contre Lui, je sentais<br />son cœur battre<br />D'un rythme égal et fort, paisible<br />et triomphant.<br />Et le mien aussitôt cessa de se<br />débattre,<br />Comme l'oiseau captif dans la<br />main d'un enfant.</p> " + "<p><br />Ref 3 :<br />Oh ! Comme du berger je<br />partageais la joie<br />En trouvant ce repos cherché<br />jadis en vain!<br />L'amour à l'adversaire avait ravi<br />sa proie<br />Et me portait, paisible, au grand<br />repos, le repos divin</p>"
      },
      {
        "id": 38,
        "name": "MERVEILLEUX amour",
        "url": "./../../../assets/audios/CEV038.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Chœur :<br />MERVEILLEUX amour,<br />Mystérieux amour<br />De Jésus pour moi sur une croix<br />Merveilleux amour, Mystérieux amour<br />De Jésus pour moi à Golgotha !</p> " + "<p><br />1 Il m'a donné la vie<br />C'est pourquoi je chante aujourd'hui<br />Il m'a donné la vie<br />Je veux être pour Lui. Ch.</p> " + "<p><br />2 Tu me dis mon enfant<br />Ma puissance est dans ta faiblesse<br />Tu me dis mon enfant<br />Ma grâce te suffit. Ch.</p>"
      },
      {
        "id": 39,
        "name": "TOI égaré, connais-tu ton lendemain ?",
        "url": "./../../../assets/audios/CEV039.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1TOI égaré, connais-tu ton lendemain ?<br />Dans tes chemins tu te sens heureux<br />Mais souviens-toi<br />Ton long chemin obscur<br />Te conduirait droit vers la mort.</p> " + "<p><br />Chœur :<br />Il frappe (Jésus-Christ} (bis)<br />L'Agneau de Dieu Oui ! A ta porte<br />Il frappe (Jésus-Christ} (bis)<br />Ouvre-Lui donc, car Il t'implore.</p> " + "<p><br />2 Le crucifié t'appelle aujourd'hui<br />Ses meurtrissures te donnent la vie<br />Son sang versé<br />Sur la croix t'appelle<br />Oui crois en Lui, Il est Sauveur.</p> " + "<p><br />3 Qui donc perdrait, ami si tu<br />refusais?<br />Serait-ce Lui le Fils de Dieu ?<br />Non ! Jésus-Christ<br />Voudrait bien te sauver<br />Pour toi Il a donné sa vie.</p> " + "<p><br />Chœur :<br />Il frappe (Jésus-Christ) (bis)<br />L'Agneau de Dieu Ton rédempteur<br />Il frappe (Jésus-Christ) (bis)<br />Après ce jour, Il s'en irait<br />Après ce jour, Il serait trop tard</p>"
      },
      {
        "id": 40,
        "name": "O ! DIEU merci, merci pour ton Esprit",
        "url": "./../../../assets/audios/CEV040.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Chœur :<br />O ! DIEU merci, merci pour ton<br />Esprit<br />Merci pour ton Fils Jésus-Christ.<br />Chantons à Dieu, chantons à notre Roi<br />Celui qui nous donne la victoire.</p><p><br />1 Toi mon ami, que fais-tu ici-bas?<br />As-tu pensé à ton Créateur ?<br />Ne sais-tu pas qu'Il t'a donné<br />Un libérateur qui est Jésus ?</p><p><br />Chœur :<br />Reviens mon ami, reviens à Jésus !<br />Car c'est toi qu'Il cherche à sauver.<br />Reviens, et crois, reviens repens-toi<br />Car Il veut te donner son Esprit.</p><p><br />2 Ecoute sa douce voix, au fond<br />de ton cœur,<br />Qui te dit : viens, viens mon enfant!<br />Ne doute plus, crois en Jésus<br />Et tu auras le vrai bonheur. Ch.</p><p><br />3 N'hésite pas, mais crois seulement!<br />Au sang versé, par Jésus sur la croix<br />Car très bientôt, Il reviendra<br />Pour chercher ceux qui auront cru. Ch</p>"
      },
      {
        "id": 41,
        "name": "TOI qui disposes De toutes choses",
        "url": "./../../../assets/audios/CEV041.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 TOI qui disposes<br />De toutes choses,<br />Et nous les donnes chaque jour,<br />Reçois, ô Père ! Notre prière<br />De reconnaissance et d'amour.</p> " + "<p><br />2 Le don suprême<br />Que ta main sème<br />C'est notre pardon, c'est ta paix;<br />Et ta clémence, Trésor immense,<br />Est le plus grand de tes bienfaits.</p> " + "<p><br />3 Que, par ta grâce,<br />L'instant qui passe<br />Serve à nous rapprocher de toi!<br />Et qu'à chaque heure<br />Vers ta demeure<br />Nos cœurs s'élèvent par la foi.</p>"
      },
      {
        "id": 42,
        "name": "A JÉSUS je m'abandonne",
        "url": "./../../../assets/audios/CEV042.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>A JÉSUS je m'abandonne ;<br />Ce qu'il me dit, je le crois,<br />Et je prends ce qu'Il me donne,<br />La couronne avec la croix.</p> " + "<p><br />Chœur :<br />Compter sur Lui d'heure en heure,<br />Tant que dure le combat ;<br />Que l'on vive ou que l'on meure<br />Compter sur Lui, tout est là bis</p> " + "<p><br />2 Que si l'ennemi se montre,<br />Mon cœur n'en est point troublé;<br />Avec Christ à sa rencontre<br />Je puis aller sans trembler. Ch.</p> " + "<p><br />3 Suis-je en paix ? vers la lumière<br />Mon chant s'élève, attendri,<br />Pour se changer en prière<br />Si l'horizon s'assombrit. Ch.</p> " + "<p><br />4 Qu'on m'approuve ou qu'on me<br />blâme,<br />Et demain comme aujourd'hui,<br />Je ne veux, quoi qu'on réclame,<br />Jamais compter que sur Lui. Ch</p>"
      },
      {
        "id": 43,
        "name": "QU'IL fait bon à ton service",
        "url": "./../../../assets/audios/CEV043.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 QU'IL fait bon à ton service,<br />Jésus, mon Sauveur !<br />Qu'il est doux le sacrifice,<br />Que t'offre mon cœur !</p> " + "<p><br />Chœur :<br />Prends, ô Jésus prends ma vie,<br />Elle est toute à toi !<br />Et dans ta grâce infinie,<br />Du mal garde-moi !</p> " + "<p><br />2 Mon désir, mon vœu suprême,<br />C'est la sainteté !<br />Rien je ne veux et je n'aime<br />Que ta volonté ! Ch.</p> " + "<p><br />3 Comme l'ange au vol rapide<br />Je veux te servir,<br />Les yeux fixés sur mon guide,<br />Toujours obéir. Ch.</p> " + "<p><br />4 Travail, douleur et souffrance,<br />Non, je ne crains rien !<br />Toi, Jésus, mon Espérance,<br />Voilà mon seul bien ! Ch.<br /><br />5 Ensemble donc vers la gloire,<br />Marchons en avant !<br />Chantant l'hymne de victoire<br />Toujours triomphant ! Ch.</p>"
      },
      {
        "id": 44,
        "name": "JÉSUS dit : je suis le Chemin",
        "url": "./../../../assets/audios/CEV044.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>Chœur :<br />JÉSUS dit : je suis le Chemin,<br />La Vérité, et la Vie.<br />Demeurez tous en moi<br />Et comme le Père m'a aimé<br />Je vous ai aussi aimés,<br />Demeurez dans mon amour !</p> " + "<p><br />1 Si vous demeurez en moi<br />Et que mes paroles, demeurent en<br />vous,<br />Demandez ce que vous voudrez,<br />Et cela vous sera accordé. Ch.</p> " + "<p><br />2 Jésus dit : je suis le pain de vie<br />Celui qui vient à moi,<br />N'aura jamais, jamais faim, Ch.</p> " + "<p><br />3 Celui qui demeure en moi<br />Et en qui je demeure,<br />Porte beaucoup de fruit<br />Car sans moi vous ne pouvez rien. Ch.</p> " + "<p><br />4 Vous êtes la lumière du monde<br />Et le sel de la terre,<br />Je suis avec vous chaque jour<br />Jusqu'à la fin du monde. Ch</p>"
      },
      {
        "id": 45,
        "name": "ROC séculaire, frappé pour moi",
        "url": "./../../../assets/audios/CEV045.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": "<p>1 ROC séculaire, frappé pour moi<br />Sur le calvaire, je viens à toi,<br />Tu sais mes chutes,<br />O mon Sauveur !<br />Tu vois mes luttes<br />Et ma douleur.</p> " + "<p><br />Chœur :<br />Roc séculaire, frappé pour moi<br />Sur le Calvaire, Je viens à Toi bis</p> " + "<p><br />2 Oh ! purifie, lave, Seigneur,<br />Et sanctifie mon pauvre cœur.<br />Ma main tremblante<br />Ne t'offre rien ;<br />Ta croix sanglante<br />Est mon seul bien. Ch.</p> " + "<p><br />3 Dans la détresse sois mon berger,<br />Ma forteresse dans le danger,<br />Et qu'à toute heure,<br />Que chaque jour,<br />Mon cœur demeure<br />En ton amour. Ch.</p>"
      },
      {
        "id": 46,
        "name": "JESUS est un trésor immense",
        "url": "./../../../assets/audios/CEV046.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 JESUS est un trésor immense;<br />O ! quel trésor !<br />Mieux que tous les biens Il satisfait;<br />O ! quel trésor !<br />Ici argent, et gloire tout passe<br />Les plaisirs viennent et s'envolent.<br />Jésus seul me remplit de joie,<br />O ! quel trésor !</p>
        <p><br />2 Je n'ai jamais manqué de rien ;<br />O ! quel trésor !<br />Il cherche à combler tous mes désirs<br />O ! quel trésor !<br />Bien des fois j'ai eu des besoins;<br />En tout temps Il m'a secouru ;<br />En Lui j'ai connu l'abondance.<br />O ! quel trésor !</p>
        <p><br />3 Je sais que Tu seras fidèle ;<br />Dans Ton amour !<br />Et que chaque jour de ma vie ;<br />Tu pourvoiras.<br />Que tout ce monde tombe en faillite;<br />Que la crise fasse ses ravages,<br />Je sais Tu tiendras tes promesses ;<br />Dans Ton amour.</p>`
      },
      {
        "id": 47,
        "name": "O ! TOI qui dis que Jésus-Christ n'est pas vivant",
        "url": "./../../../assets/audios/CEV047.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />O ! TOI qui dis que Jésus-Christ<br />n'est pas vivant,<br />Viens donc goûter à la joie qu'Il<br />donne.<br />Et toi qui aimes ce qui ne te nourrit<br />pas,<br />Viens à Jésus et tu n'auras plus<br />faim.</p>
        <p><br />1 Et toi qui te livres aux plaisirs<br />de la terre,<br />Ne sais-tu pas que c'est contre<br />Son Esprit?<br />Jésus est venu te libérer de tout<br />cela,<br />Pour que ta joie soit parfaite en Lui.<br />Ch.</p>
        <p><br />2 O toi qui te fies à ton intelligence,<br />Ne sais-tu pas que c'est contre<br />Son Esprit?<br />Jésus est venu te libérer de tout<br />cela,<br />Pour que ta joie soit parfaite en Lui.</p>
        <p><br />3 O toi qui cherches à plaire aux<br />hommes de la terre,<br />Ne sais-tu pas qu'Il te veut à Lui<br />tout seul?<br />Jésus est venu te libérer de tout<br />cela,<br />Pour que ta joie soit parfaite en Lui<br />Ch.</p>
        <p><br />4 O toi qui cherches à te sauver par<br />ta force,<br />Ne sais-tu pas que tu ne le pourras<br />pas?<br />Jésus est venu te libérer de tout<br />cela<br />Pour que ta joie soit parfaite en Lu</p>`
      },
      {
        "id": 48,
        "name": "J'AI soif de ta présence",
        "url": "./../../../assets/audios/CEV048.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 J'AI soif de ta présence,<br />Divin chef de ma foi ;<br />Dans ma faiblesse immense<br />Que ferais-je sans toi ?</p>
        <p><br />Chœur :<br />Chaque jour, à chaque heure,<br />Oh ! j'ai besoin de toi,<br />Viens, Jésus, et demeure<br />Auprès de moi.</p>
        <p><br />2 Des ennemis dans l'ombre,<br />Rôdent autour de moi ;<br />Accablé par le nombre,<br />Que ferais-je sans toi ? Ch.</p>
        <p><br />3 Pendant les nuits d'orage,<br />D'obscurité, d'effroi,<br />Quand faiblit mon courage,<br />Que ferais-je sans toi ? Ch.</p>
        <p><br />4 O Jésus, ta présence<br />C'est la vie et la paix,<br />La paix dans la souffrance,<br />Et la vie à jamais. Ch</p>`
      },
      {
        "id": 49,
        "name": "C'EST mon joyeux service",
        "url": "./../../../assets/audios/CEV049.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 C'EST mon joyeux service<br />D'offrir à Jésus-Christ,<br />En vivant sacrifice,<br />Mon corps et mon esprit.</p>
        <p><br />Chœur :<br />Accepte mon offrande,<br />Bien-aimé Fils de Dieu,<br />Et que sur moi descende<br />la flamme du saint lieu !</p>
        <p><br />2 J'abandonne ma vie,<br />Sans regret ni frayeur,<br />A Ta grâce infinie,<br />O mon Libérateur. Ch.</p>
        <p><br />3 Qu'un feu nouveau s'allume<br />Par Ton amour en moi,<br />Et dans mon cœur consume<br />Ce qui n'est pas à Toi ! Ch.</p>
        <p><br />4 Viens, Jésus, sois mon Maître ;<br />Par Ton sang racheté,<br />A Toi seul je veux être,<br />Et pour l'éternité. Ch.</p>`
      },
      {
        "id": 50,
        "name": "MON corps, mon cœur, mon âme",
        "url": "./../../../assets/audios/CEV050.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MON corps, mon cœur, mon âme<br />Ne m'appartiennent plus ;<br />Ton amour les réclame ;<br />Ils sont à Toi, Jésus !</p>
        <p><br />Chœur :<br />Reçois mon sacrifice,<br />Il est sur Ton autel !<br />Esprit, Esprit, descends,<br />J'attends le feu du ciel.</p>
        <p><br />2 En Toi je me confie,<br />Je m'abandonne à Toi ;<br />Ton sang me purifie<br />Et Ta grâce est ma loi. Ch.</p>
        <p><br />3 Consacre mon offrande,<br />Mets Ton sceau sur mon cœur !<br />Le sceau que je demande<br />C'est Ton Esprit Seigneur. Ch</p>`
      },
      {
        "id": 51,
        "name": "MON cœur joyeux, plein",
        "url": "./../../../assets/audios/CEV051.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MON cœur joyeux, plein<br />d'espérance,<br />S'élève à Toi, mon Rédempteur !<br />Daigne écouter avec clémence<br />Un pauvre humain, faible et pécheur.<br />En Toi seul est ma confiance,<br />En Toi seul est tout mon bonheur.</p>
        <p>2 C'est vers Ton ciel que, dans ma<br />course<br />Je vois aboutir tous mes pas ;<br />De Ton Esprit la vive source<br />Me rafraîchit quand je suis las ;<br />Et, dans le danger, ma ressource<br />Est dans la force de Ton bras.</p>
        <p>3 Le jour, je marche à Ta lumière ;<br />La nuit je repose en Ton sein ;<br />Dès le matin, à ma prière,<br />Tu viens éclairer mon chemin,<br />Et chaque soir, ô mon bon Père,<br />Tu prépares mon lendemain.</p>
        <p>4 Je vois ainsi venir le terme<br />De mon voyage en ces bas lieux,<br />Et j'ai l'attente vive et ferme<br />Du saint héritage des cieux ;<br />Quand la trompette retentira,<br />Je m'en irai victorieux !</p>`
      },
      {
        "id": 52,
        "name": "TOUJOURS joyeux, telle est notre",
        "url": "./../../../assets/audios/CEV052.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1.TOUJOURS joyeux, telle est notre<br />devise,<br />Joyeux d'avoir Jésus-Christ pour<br />Sauveur<br />Oui, joyeux même alors qu'on<br />Nous méprise,<br />Rien ne saurait assombrir notre</p>
        <p><br />Cœur.<br />N'ayons pas peur de l'adversaire !<br />Marchons en chantant vers les cieux.<br />Triomphant déjà sur la terre, bis<br />Toujours joyeux, toujours joyeux!</p>
        <p><br />2 Joyeux encore au fort de la bataille,<br />Nous combattrons pour lui toute<br />la vie.<br />Ah pourrions-nous pour plaire à<br />qui nous raille,<br />Trahir jamais de Jésus le drapeau !<br />Que nul de nous ne le renie !<br />N'est-il pas un Roi glorieux ?<br />Bravons pour Lui la moquerie bis<br />Toujours joyeux, toujours joyeux!</p>
        <p><br />3 Toujours joyeux ! Un jour, devant<br />les anges,<br />Jésus dira : "Ces vaillants sont à moi."<br />Nos cœurs alors d'éclater en<br />louanges,<br />Pour ce Jésus notre bien-aimé Roi.<br />Souffrir pour Lui, bonheur suprême!<br />Victorieux par son secours.<br />Nous resterons, puisqu'Il nous<br />aime, bis<br />Toujours joyeux, joyeux toujours</p>`
      },
      {
        "id": 53,
        "name": "OÙ IRAS-TU quand Jésus reviendra",
        "url": "./../../../assets/audios/CEV053.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />OÙ IRAS-TU quand Jésus reviendra,<br />Quand Il viendra chercher Ses élus ?<br />En un clin d'œil ils seront tous<br />enlevés<br />Où iras-tu quand Jésus reviendra ?</p>
        <p><br />1 Il y aura bientôt deux mille ans,<br />Qu'Il est venu mourir sur une croix ;<br />A cause de toi Jésus-Christ fut<br />crucifié !<br />Où iras-tu quand Jésus reviendra? Ch.</p>
        <p><br />2 Lorsqu'Il était cloué sur ce bois,<br />Voici ce qu'Il a dit à Son Père :<br />"Père pardonne-leur car ils ne<br />savent ce qu'ils font"<br />Où iras-tu quand Jésus reviendra?<br />Ch.</p>
        <p><br />3 Viens avec nous viens te préparer!<br />Tourne-toi aujourd'hui vers Jésus,<br />Ouvre-Lui ton cœur et donne-Lui<br />ta vie :<br />Alors tu partiras avec Jésus.</p>
        <p><br />Chœur :<br />Alors nous partirons avec Jésus.<br />Quand Il viendra chercher ses élus,<br />En un clin d'œil nous serons tous<br />enlevés!<br />Alors nous partirons avec Jésus</p>`
      },
      {
        "id": 54,
        "name": "MON cœur voudrait t'aimer",
        "url": "./../../../assets/audios/CEV054.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MON cœur voudrait t'aimer<br />Assez t'aimer,<br />Pour pouvoir supporter,<br />Tout supporter :<br />La souffrance et la peine,<br />L'injustice et la haine.<br />Je veux assez t'aimer<br />Pour tout supporter.</p>
        <p><br />2 Mon cœur voudrait t'aimer,<br />Assez t'aimer,<br />Pour pouvoir accepter,<br />Tout accepter,<br />Quand je ne puis t'entendre,<br />Accepter sans comprendre.<br />Je veux assez t'aimer<br />Pour tout accepter.</p>
        <p><br />3 Mon cœur voudrait t'aimer,<br />Assez t'aimer,<br />Pour pouvoir espérer,<br />Tout espérer :<br />La fin de la souffrance,<br />La pleine délivrance.<br />Je veux assez t'aimer<br />Pour tout espérer.<br />M. WARGENAU-SALLENS</p>`
      },
      {
        "id": 55,
        "name": "MON Dieu, plus près de toi",
        "url": "./../../../assets/audios/CEV055.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MON Dieu, plus près de toi,<br />Plus près de toi !<br />C'est le mot de ma foi :<br />Plus près de toi.<br />Dans le jour où l'épreuve<br />Déborde comme un fleuve,<br />Garde-moi près de toi,<br />Plus près de toi.</p>
        <p><br />2 Plus près de toi, Seigneur,<br />Plus près de toi !<br />Tiens-moi dans ma douleur<br />Tout près de toi.<br />Alors que la souffrance<br />Fait son œuvre en silence<br />Toujours plus près de toi,<br />Seigneur, tiens-moi !</p>
        <p><br />3 Plus près de toi, toujours<br />Plus près de toi !<br />Donne-moi ton secours,<br />Soutiens ma foi.<br />Que Satan se déchaîne,<br />Ton amour me ramène<br />Toujours plus près de toi,<br />Plus près de toi.</p>
        <p><br />4 Mon Dieu plus près de toi !<br />Dans le désert<br />J'ai vu, plus près de toi,<br />Ton ciel ouvert.<br />Pèlerin, bon courage !<br />Ton chant brave l'orage...<br />Mon Dieu, plus près de toi,<br />Plus près de toi !</p>`
      },
      {
        "id": 56,
        "name": "PAR la croix, oui ! j'entrerai au ciel",
        "url": "./../../../assets/audios/CEV056.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 PAR la croix, oui ! j'entrerai au ciel<br />Par la croix de mon Seigneur Jésus<br />Par la croix oui ! j'entrerai<br />Dans les saints lieux de mon Dieu.</p>
        <p><br />Chœur :<br />Par la croix,<br />Jésus mon Seigneur me sauva<br />En mourant sur le calvaire<br />Oui pour tous mes péchés.</p>
        <p><br />2 Sur la croix, oui ! Mon Seigneur cria<br />Oui ! quand la souffrance excéda,<br />Il souffrit pour moi pécheur,<br />Moi objet sans valeur. Ch.</p>
        <p><br />3 Par la croix Jésus me délivra<br />Car Il vint mourir, oui ! à ma place<br />Il accepta l'outrage<br />Et fit de moi Son frère. Ch</p>`
      },
      {
        "id": 57,
        "name": "JESUS est le Roc, le Roc de mon salut",
        "url": "./../../../assets/audios/CEV057.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur</p>
        <p>JESUS est le Roc, le Roc de mon salut.<br />Si tu crois en Lui, Il te ressuscitera<br />Au dernier jour pour la vie avec Lui.</p>
        <p><br />1 Il n'y a pas longtemps<br />J'étais égaré dans mon péché.<br />Mais Jésus, est venu vers moi,<br />Lui le Bon Berger pour me sauver.<br />Il est l'Agneau de Dieu qui ôte<br />Le péché du monde ! (bis)<br />1ère voix : Jésus<br />2ème voix : Jésus<br />3ème voix : Jésus<br />4ème voix : Jésus,<br />Jésus, Jésus est le Roc ! Ch.</p>
        <p><br />2 Oh quel changement<br />Il a apporté dans toute ma vie ;<br />Maintenant je suis son enfant.<br />Oui, je le sais car Il vit en moi.<br />Jésus-Christ est le Libérateur,<br />C'est Lui qui transforme ! (bis)<br />Jésus, Jésus, Jésus,<br />Jésus, Jésus, Jésus est le Roc ! Ch.</p>
        <p><br />3 Que c'est merveilleux<br />D'être lavé dans son sang précieux,<br />Et de savoir sans aucun doute<br />Que je suis sauvé vraiment sauvé !<br />Celui qui a le Fils de Dieu a<br />La vie éternelle (bis)<br />Jésus, Jésus, Jésus,<br />Jésus, Jésus, Jésus est le Roc ! Ch.</p>
        <p><br />4 Tout mon avenir<br />Est bien assuré entre ses mains<br />Ici-bas, je vis pour Lui seul<br />Et bientôt Il revient me chercher !<br />Jésus a dit : "je reviens bientôt,<br />Oui ! je reviens bientôt,<br />Oui ! je viens bientôt".<br />Jésus, Jésus, Jésus,<br />Jésus, Jésus, Jésus est le Roc ! Ch</p>`
      },
      {
        "id": 58,
        "name": "Il nous a aimés",
        "url": "./../../../assets/audios/CEV058.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />LE SEIGNEUR Jésus,<br />Il nous a aimés<br />Il nous a choisis<br />Pour être la lumière du monde ;<br />Et c'est Lui que nous attendons<br />Car Il revient très bientôt<br />Pour chercher tous ceux qui<br />auront cru.</p>
        <p><br />1 Nous étions errants comme des<br />brebis<br />Et chacun suivait sa voie ;<br />Mais Jésus est venu vers nous,<br />Plein de zèle et plein d'amour ;<br />Il nous offrit gratuit le salut<br />Et fit de nous ses élus ;<br />C'est pourquoi nous proclamons<br />son nom ! Ch.</p>
        <p><br />2 Il nous a envoyés dans le monde<br />Pour annoncer l'Evangile<br />Qui délivre du péché<br />Et guérit les cœurs brisés.<br />Si tu te détournes de tes voies<br />Jésus te pardonnera<br />Comme nous, tu pourras aussi<br />chanter. Ch.</p>
        <p><br />3 Quand la trompette retentira<br />Jésus-Christ apparaîtra ;<br />Ceux qui l'auront rejeté<br />Resteront et souffriront,<br />Mais ceux qui l'auront toujours aimé<br />Tous les morts et les vivants,<br />Le rencontreront tous dans les<br />airs. Ch.</p>`
      },
      {
        "id": 59,
        "name": "ENTENDS-tu l'appel du Maître ?",
        "url": "./../../../assets/audios/CEV059.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 ENTENDS-tu l'appel du Maître ?<br />Il te veut pour moissonneur ;<br />Réponds-Lui : "Oui, je veux être,<br />O Jésus, ton serviteur !"<br />La moisson est déjà mûre,<br />Les épis dorés sont pleins ;<br />C'est l'instant où la nature<br />Aime à nous livrer ses biens. Ch.</p>
        <p><br />2 Sous le soleil de l'Afrique<br />Le païen meurt dans la nuit ;<br />Jésus, ton Roi pacifique,<br />A pourtant souffert pour lui.<br />Quitte, ô chrétien, ta patrie<br />Pour servir, au loin ton Roi.<br />Va dire, au prix de ta vie,<br />Ce que Jésus fit pour toi. Ch.</p>
        <p><br />3 Mais dans la mission lointaine<br />Tous ne peuvent s'engager ;<br />Ceux qui vont semer la graine,<br />Tu dois les encourager ;<br />Ils ont besoin d'argent : donne,<br />De soutien : prie avec eux,<br />Pour que l'ouvrier moissonne<br />D'un cœur vaillant et joyeux. Ch</p>`
      },
      {
        "id": 60,
        "name": "COMME un fleuve immense",
        "url": "./../../../assets/audios/CEV060.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 COMME un fleuve immense<br />Est la paix de Dieu.<br />Parfaite elle avance,<br />Vainqueur en tout lieu ;<br />Parfaite elle augmente<br />Constamment son cours ;<br />Parfaite, sa pente<br />S'abaisse toujours.</p>
        <p><br />Chœur :<br />Fondés sur Dieu même,<br />Nos cœurs à jamais<br />Ont pour bien suprême<br />Sa parfaite paix.</p>
        <p><br />2 Sous ta main meurtrie,<br />Se brise, ô mon Roi,<br />Toute arme ennemie<br />Faite contre moi !<br />Rien ne peut me nuire<br />Ni troubler mon cœur,<br />Tu veux me conduire,<br />Tu seras vainqueur. Ch.</p>
        <p><br />3 Tu traces ma voie :<br />J'y marche avec foi :<br />L'épreuve et la joie<br />Me viennent de toi !<br />Cadran de nos vies,<br />Marque, chaque jour,<br />Les heures bénies<br />Du soleil d'amour Ch.</p>
        <p><br />4 Océan de gloire,<br />Paix de mon Sauveur<br />Gage de victoire !<br />Trésor de bonheur !<br />Ta grâce infinie,<br />Coulant nuit et jour,<br />Inonde ma vie<br />De vagues d'amour !</p>
        <p><br />Chœur :<br />Selon ta promesse,<br />O Jésus, mon Roi !<br />Je trouve sans cesse<br />Paix parfaite en toi !</p>`
      },
      {
        "id": 61,
        "name": "SI JE suis dans l'obscurité",
        "url": "./../../../assets/audios/CEV061.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 SI JE suis dans l'obscurité<br />Je ne pourrai avancer<br />J'aurai besoin de lumière<br />Pour ne point m'égarer.</p>
        <p><br />Chœur :<br />Gare à l'insensé qui éteint sa lampe!<br />Qui le guidera (bis)<br />Au dehors noir ?<br />Merveilleuse lumière<br />Je ne m'éloignerai de Toi.<br />Merveilleuse lumière, tu me guideras.</p>
        <p><br />2 Si je demeure en Toi<br />Je ne trébucherai point<br />Je serai éclairé.<br />Loin de moi les ténèbres ! Ch.</p>
        <p><br />3 Je garde ma vie en Christ<br />Serre sa Parole dans mon cœur<br />Elle est du pétrole<br />Pour la lampe de mon esprit<br />Elle est du pétrole pour mon âme<br />Ch.</p>`
      },
      {
        "id": 62,
        "name": "MOMENT si doux de la prière",
        "url": "./../../../assets/audios/CEV062.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MOMENT si doux de la prière<br />Où Dieu, m'élevant jusqu'à Lui,<br />Se révèle à moi comme un Père,<br />Comme un Sauveur, comme un<br />appui.<br /><br />2 Oh ! oui, je t'aime, heure bénie,<br />Je te désire avec ardeur,<br />Car déjà souvent dans la vie,<br />Tu m'as sauvé du tentateur.</p>
        <p><br />3 C'est toi, doux moment de prière<br />Qui me transportes jusqu'aux cieux,<br />Où Jésus, mon ami, mon frère,<br />Lui-même présente mes vœux.</p>
        <p><br />4 Déjà souvent dans la tristesse<br />Tu fus ma force et mon espoir ;<br />Pour qui te recherche sans cesse<br />Jamais il n'est de ciel trop noir</p>`
      },
      {
        "id": 63,
        "name": "Seigneur, que Ton Esprit descende sur nous",
        "url": "./../../../assets/audios/CEV063.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 SEIGNEUR, Seigneur,<br />Que Ton Esprit descende sur nous,<br />Selon Ta Parole.<br />Que Ton Esprit descende sur nous,<br />Selon Ta promesse.</p>
        <p><br />2 Seigneur, Seigneur,<br />Que Ta puissance descende sur nous<br />Selon Ta Parole<br />Que Ta puissance descende sur nous<br />Selon Ta promesse.</p>
        <p><br />3 Seigneur, Seigneur,<br />Que Ton onction repose sur nous,<br />Selon Ta Parole<br />Que Ton onction repose sur nous,<br />Selon Ta promesse.</p>`
      },
      {
        "id": 64,
        "name": "Que ton joug est facile !",
        "url": "./../../../assets/audios/CEV064.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. OH ! Que ton joug est facile !<br />Oh ! Combien j‟aime Ta loi !<br />Dieu saint, Dieu de l‟Evangile,<br />Elle est toujours devant moi.<br />De mes pas, c‟est la lumière,<br />C‟est le repos de mon cœur ;<br />Mais pour la voir tout entière,<br />Ouvre mes yeux, bon Sauveur !</p>
        <p><br />2. Non, Ta loi n‟est point pénible,<br />Pour quiconque est né de Toi ;<br />Toute victoire est possible,<br />A qui combat avec foi,<br />Seigneur, dans Ta forteresse,<br />Aucun mal ne m‟atteindra ;<br />Si je tremble en ma faiblesse,<br />Ta droite me soutiendra.</p>
        <p><br />3. D‟un triste et rude esclavage,<br />Affranchi par Jésus - Christ,<br />J‟ai part à Ton héritage,<br />Au secours de Ton Esprit.<br />Au lieu d‟un Maître sévère,<br />Prêt à juger, à punir,<br />je sers le plus tendre Père,<br />Toujours prêt à me bénir.</p>
        <p><br />4. Dieu qui guide, qui console,<br />J‟ai connu que le bonheur,<br />C‟est de garder Tes paroles,<br />Et je les serre en mon cœur.<br />Fais-moi marcher dans Ta voie,<br />Et me plaire en Tes statuts.<br />Si je cherche en Toi ma joie,<br />Je ne serai pas confus.</p>`
      },
      {
        "id": 65,
        "name": "TOUJOURS ta divine présence",
        "url": "./../../../assets/audios/CEV065.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 TOUJOURS ta divine présence<br />Jette un rayon sur mon chemin ;<br />Et le cœur joyeux, je m'avance :<br />Je n'ai pas peur du lendemain.</p>
        <p><br />Chœur :<br />Où tu voudras, je veux te suivre ;<br />Agneau de Dieu, conduis mes pas.<br />Vivre sans toi ce n'est pas vivre ;<br />Je ne puis être où tu n'es pas.</p>
        <p><br />2 Oh ! que jamais rien ne me voile<br />Ton doux regard, bien-aimé Roi !<br />Dans le danger, brillante étoile,<br />Garde mes yeux fixés sur toi. Ch.</p>
        <p><br />3 Auprès de toi la vie est belle,<br />C'est le bonheur, la liberté,<br />C'est une jeunesse éternelle,<br />C'est le ciel, la félicité ! Ch.</p>`
      },
      {
        "id": 66,
        "name": "JE SUIS heureux je chante",
        "url": "./../../../assets/audios/CEV066.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 JE SUIS heureux je chante !<br />C'est pour Toi<br />Ma douce mélodie<br />C'est pour Toi</p>
        <p>Autour de moi égaye<br />C'est pour Toi<br />Je t'aime, je T'adore ô Jésus (bis)</p>
        <p><br />2 C'est pour Toi que je veux vivre<br />O Seigneur<br />Mon cœur je Te le donne<br />O Seigneur<br />Et dans ma vie entière<br />O Seigneur<br />Parle, commande, règne<br />Tu es Roi (bis)</p>
        <p><br />3 Et quand l'épreuve viendra<br />O Seigneur<br />A Toi je saurai crier<br />O Seigneur<br />Je sais Tu es fidèle<br />O Seigneur<br />Sur Toi je me repose, à jamais.(bis)</p>
        <p><br />4 Que se dressent les montagnes<br />Pour Ta gloire<br />Que brillent tous les astres<br />Pour Ta gloire<br />Que chantent les cigales<br />Pour Ta gloire<br />Et tous les saints Te disent<br />Alléluia !</p>`
      },
      {
        "id": 67,
        "name": "ME VOICI Seigneur Jésus",
        "url": "./../../../assets/audios/CEV067.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 ME VOICI Seigneur Jésus<br />Prends le trône de mon cœur,<br />Règne sur moi, tu es Roi.<br />Gloire soit à Toi Seigneur !</p>
        <p><br />2 Jésus viens oh ! viens mon Dieu,<br />Libère mon esprit, mon Dieu<br />Je veux t'adorer Seigneur<br />En esprit, en vérité.</p>
        <p><br />3 Je bannis ma volonté :<br />Donne-moi ta volonté<br />Fais-moi marcher sur tes voies<br />Dans tout détail de ma vie.</p>
        <p><br />4 Seigneur circoncis mon cœur ;<br />Je te donne tout mon cœur ;<br />Je te livre toute mon âme ;<br />Toute la force de mon cœur</p>`
      },
      {
        "id": 68,
        "name": "IL EST le Dieu qui accomplit",
        "url": "./../../../assets/audios/CEV068.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />IL EST le Dieu qui accomplit<br />ses promesses ;<br />Il appelle ce qui n'est pas<br />Comme si c'était déjà.<br />Il est le Dieu qui accomplit<br />ses promesses<br />Il amène toutes choses à l'existence.</p>
        <p><br />1 Ce que je suis ici aujourd'hui,<br />Dieu l'avait déjà appelé à<br />l'existence hier;<br />Ce que je serai demain,<br />Il l'appelle à l'existence aujourd'hui.Ch.</p>
        <p><br />2 Ce que je dois donc faire aujourd'hui<br />C'est de connaître ce qu'Il appelle<br />à l'existence ;<br />Ce que je ferai demain,<br />De le confesser et de l'accomplir Ch.</p>`
      },
      {
        "id": 69,
        "name": "J'AI été crucifié avec Christ",
        "url": "./../../../assets/audios/CEV069.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>GAL 2 : 20<br />J'AI été crucifié avec Christ (bis)<br />Et si je vis, et si je vis<br />Ce n'est plus moi qui vis<br />C'est Christ qui vit en moi.</p>`
      },
      {
        "id": 70,
        "name": "Ô VOUS qui n'avez pas la paix",
        "url": "./../../../assets/audios/CEV070.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 Ô VOUS qui n'avez pas la paix,<br />Venez, Jésus la donne,<br />Pure, profonde, et pour jamais,<br />Venez, Jésus pardonne.<br />Quand Jésus remplit un cœur,<br />Il déborde de bonheur,<br />Et l'effroi ne l'atteint plus,<br />Gloire, gloire à Jésus !</p>
        <p><br />2 Vous qui tombez à chaque pas,<br />Venez, Jésus délivre ;<br />Celui qui se jette en ses bras<br />Peut à toujours le suivre.<br />Quand Jésus remplit un cœur,<br />Il déborde de bonheur,<br />Car il ne chancelle plus,<br />Gloire, gloire à Jésus !</p>
        <p><br />3 Vous qui tremblez sous la terreur<br />Que la mort vous inspire,<br />Venez, votre Libérateur<br />A détruit son empire.<br />Avec Lui nous revivrons,<br />Avec Lui nous régnerons,<br />Et la mort ne sera plus,<br />Gloire, gloire à Jésus !</p>`
      },
      {
        "id": 71,
        "name": "QUEL repos céleste Jésus",
        "url": "./../../../assets/audios/CEV071.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 QUEL repos céleste Jésus,<br />d'être à toi!<br />A toi pour la mort et la vie,<br />Dans les jours mauvais de<br />chanter avec foi:<br />Tout est bien, ma paix est infinie !</p>
        <p>Chœur :<br />Quel repos (ter)<br />Quel céleste repos !</p>
        <p><br />2 Quel repos céleste ! Mon fardeau<br />n'est plus<br />Libre par le sang du Calvaire,<br />Tous mes ennemis, Jésus les a<br />vaincus,<br />Gloire et louange à Dieu notre<br />Père! Ch.</p>
        <p><br />3 Quel repos céleste ! Tu conduis<br />mes pas,<br />Tu me combles de tes richesses,<br />Dans ton grand amour, chaque<br />jour tu sauras<br />Déployer envers moi tes<br />tendresses. Ch.</p>
        <p><br />4 Quel repos céleste, quand enfin,<br />Seigneur,<br />Auprès de toi j'aurai ma place,<br />Après les travaux, les combats, la<br />douleur,<br />A jamais je pourrai voir ta face ! Ch</p>`
      },
      {
        "id": 72,
        "name": "PROCLAMONS de Dieu les bienfaits",
        "url": "./../../../assets/audios/CEV072.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 PROCLAMONS de Dieu les bienfaits<br />En chœur, chantons Sa grandeur.<br />Il est notre ferme Rocher ;<br />Tout ce qu'Il fait est parfait.</p>
        <p><br />Chœur :<br />Nous avons un Dieu fidèle<br />En Lui, point d'iniquité ;<br />Il est la bonté suprême,<br />Que son nom soit exalté !</p>
        <p><br />2 Il fit de nous ses bienheureux<br />En sacrifiant son Fils ;<br />Oh ! quel ineffable bonheur<br />D'être à jamais ses enfants ! Ch.</p>
        <p><br />3 Nous avons du prix à ses yeux<br />Nous sommes ses rachetés.<br />Il veille sur nous nuit et jour,<br />Nous conduit avec amour. Ch.</p>
        <p><br />4 Il nous accorde sa grâce ;<br />Son amour ne peut changer.<br />Il est un Père merveilleux ;<br />Que son nom soit glorifié. CH</p>`
      },
      {
        "id": 73,
        "name": "TOUT JOYEUX, bénissons",
        "url": "./../../../assets/audios/CEV073.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 TOUT JOYEUX, bénissons<br />le Seigneur,<br />Chantons et célébrons ses<br />louanges,<br />Adorons avec foi le Sauveur,<br />Nous joignant aux célestes<br />phalanges.</p>
        <p><br />Chœur :<br />Gloire à Dieu, gloire à Dieu !<br />Que ce chant retentisse en (bis)<br />tout lieu.</p>
        <p><br />2 Dieu dans son incomparable<br />amour,<br />Du ciel envoya son Fils unique,<br />Et la terre et les cieux, dans ce<br />jour,<br />S'unissent pour chanter ce<br />cantique. Ch.</p>
        <p><br />3 Le châtiment qui produit la paix,<br />Jésus-Christ l'a subi pour mon<br />âme;<br />Il voulut expier nos forfaits<br />En mourant, Lui, sur le bois<br />infâme. Ch.</p>
        <p><br />4 Nous voulons, en retour, bon<br />Sauveur<br />T'aimer par-dessus toute autre chose<br />Forme ton amour dans notre cœur,<br />Et puis, de chacun de nous<br />dispose! Ch.<br />G. JAULMES</p>`
      },
      {
        "id": 74,
        "name": "TA MAIN se déploya",
        "url": "./../../../assets/audios/CEV074.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 TA MAIN se déploya<br />Pour leur donner un même cœur<br />Pour leur faire exécuter<br />L'ordre du Roi (bis)<br />L'ordre de ses chefs.</p>
        <p><br />2 Qu'elle se déploie,(oui nous te<br />prions)<br />Qu'elle se déploie<br />Pour nous donner Seigneur,<br />Ce même cœur.<br />Qu'elle se déploie (bis)<br />Pour nous donner Seigneur,<br />Un même cœur.</p>`
      },
      {
        "id": 75,
        "name": "que ta main paternelle",
        "url": "./../../../assets/audios/CEV075.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 OH ! que ta main paternelle<br />Me bénisse à mon coucher !<br />Et que ce soit sous ton aile<br />Que je dorme, ô mon Berger ! (bis)</p>
        <p><br />2 Veuille effacer, par ta grâce,<br />Les péchés que j'ai commis,<br />Et que ton Esprit me fasse<br />Obéissant et soumis ! (bis)</p>
        <p><br />3 Fais reposer sous ta garde<br />Mes amis et mes parents,<br />Et que ton œil les regarde<br />De ton ciel petits et grands ! (bis)</p>
        <p><br />4 Que ta faveur se déploie<br />Pour consoler l'affligé ;<br />Donne au pauvre un peu de joie,<br />Au malade la santé. (bis)</p>
        <p><br />5 Seigneur, j'ai fait ma prière ;<br />Sous ton aile, je m'endors,<br />Heureux de savoir qu'un Père<br />Plein d'amour veille au dehors. (bis)</p>`
      },
      {
        "id": 76,
        "name": "MEME si on m'accule",
        "url": "./../../../assets/audios/CEV076.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MEME si on m'accule,<br />Même si je souffre,<br />Je sais que Dieu<br />Ne ment jamais ;<br />Certainement Il reviendra. (bis)</p>
        <p><br />Chœur :<br />Au fond de moi,<br />J'ai cette conviction ;<br />Au-dedans de moi<br />Cela me presse (bis)<br />Même si quelquefois<br />J'ai été troublé,<br />Je sais une chose :<br />Ce n'est plus loin. (bis)</p>
        <p><br />2 J'avancerai<br />Et j'avance.<br />La persécution ?<br />Le Seigneur l'a subie ;<br />Aucun disciple n'est plus que<br />son Maître. Ch.</p>
        <p><br />3 Je vais travailler<br />Tant que j'aurai ce souffle<br />Et publier<br />Ce grand message,<br />A tous ceux qui ne l'ont ouï. Ch.</p>`
      },
      {
        "id": 77,
        "name": "SEMONS dès l'aurore",
        "url": "./../../../assets/audios/CEV077.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 SEMONS dès l'aurore, (bis)<br />Quand le soleil luit ;(bis)<br />Et semons encore<br />Lorsque vient la nuit<br />Dieu peut faire éclore<br />La fleur et le fruit</p>
        <p><br />Chœur :<br />Bon courage, amis !<br />Bon courage, amis !<br />Nous irons joyeux (bis)<br />Cueillir les épis</p>
        <p><br />2 Semons pour le Maître, (bis)<br />Parlons du Sauveur ; (bis)<br />Semons, car peut-être<br />Un pauvre pécheur<br />Par nous pourra naître<br />Au seul vrai bonheur. Ch.</p>
        <p><br />3 La tâche est immense (bis)<br />Et les cœurs sont prêts (bis)<br />Donc bonne espérance !<br />Nul travail n'est vain :<br />De Dieu la puissance<br />Fait germer le grain. Ch.</p>`
      },
      {
        "id": 78,
        "name": "mon cœur est plein d'espérance",
        "url": "./../../../assets/audios/CEV078.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 OUI ! mon cœur est plein<br />d'espérance<br />De douceur, de paix, de joie<br />Oui ! mon cœur est plein<br />d'espérance,<br />D'amour et de vie.</p>
        <p><br />2 C'est une histoire qui naît un jour<br />Je ne sais comment (ni) pourquoi<br />Une merveilleuse histoire d'amour<br />Jésus m'a sauvé.</p>
        <p><br />Chœur :<br />Oui Il vit en moi, Jésus-Christ<br />Le merveilleux, l'admirable ;<br />Oui, Il vit en moi Jésus-Christ,<br />Il m'aime et je l'aime.</p>
        <p><br />3 Et les épreuves ne manquent pas<br />Je connais bien la douleur ;<br />Mais du secours de mon Sauveur,<br />Je ne manque pas. Ch.</p>
        <p><br />4 Et puis un jour viendra la fin<br />La fin des pleurs, du chagrin.<br />Il a promis Il vient bientôt<br />Il me prendra là-haut. Ch.</p>
        <p><br />5 Veux-tu avec moi espérer,<br />Que bientôt tout passera ?<br />Le monde et toute sa vanité<br />Seront balayés. Ch.</p>
        <p><br />6 Veux-tu au festin de l'Agneau<br />De bonheur être comblé ?<br />Viens à Jésus, viens maintenant<br />Oh ! il t'aime tant. Ch</p>`
      },
      {
        "id": 79,
        "name": "O JÉSUS dans la passion",
        "url": "./../../../assets/audios/CEV079.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 O JÉSUS dans la passion<br />De ton amour pour moi<br />Acceptant condamnation<br />Par tes sujets ô Roi,<br />A la pire des trahisons<br />Tu offris ton pardon,<br />Subissant tout abandon<br />Pour prix de ma rançon.</p>
        <p><br />2 Ton corps subit la souffrance<br />Ton âme le tourment<br />Afin que j'aie l'espérance<br />Oh ! quel amour clément<br />Ta grâce salutaire<br />Ta bonté sans pareille<br />Sur la croix du calvaire<br />Proclament tes merveilles.</p>
        <p><br />3 Quel est ce don suprême,<br />Quel en est le secret ?<br />Un sacrifice extrême,<br />Total et sans regret ;<br />L'obéissance au Père,<br />Ta soumission à Lui<br />Défient mon cœur austère<br />Et j'en suis fort ébloui.</p>
        <p><br />4 Ton amour m'humilie,<br />Me presse et me contraint<br />Prends le don de ma vie<br />Elle est en toi étreinte<br />Ton amour me réclame<br />Ta passion, ta douleur<br />Exigent que je t'aime<br />Pour prix de ta langueur.</p>
        <p><br />5 Mon Jésus, ô mon Maître,<br />Mon suprême bonheur,<br />Captive tout mon être,<br />Possède tout mon cœur<br />Source de satisfaction<br />Désormais devenu<br />Mon unique satisfaction<br />Mon Sauveur, mon Jésus.</p>`
      },
      {
        "id": 80,
        "name": "VEUX-TU briser du péché",
        "url": "./../../../assets/audios/CEV080.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 VEUX-TU briser du péché le<br />pouvoir?<br />La force est en Christ ! (bis<br />Si dans ton cœur tu veux le<br />recevoir:<br />La force est dans le sang de<br />Christ!</p>
        <p><br />Chœur :<br />Je suis fort, fort ! oui, plus que<br />vainqueur,<br />Par le sang de Jésus !<br />Je suis fort, fort ! oui, plus que<br />vainqueur,<br />Par le sang de Jésus mon Sauveur!</p>
        <p><br />2 Veux-tu braver et la mort et<br />l'enfer?<br />La force est en Christ ! (bis)<br />Jésus, d'un mot fait tomber tous<br />tes fers:<br />La force est dans le sang de<br />Christ. Ch.</p>
        <p><br />3 Veux-tu marcher toujours pur,<br />triomphant?<br />La force est en Christ ! (bis)<br />Pour te garder Jésus est toutpuissant :<br />La force est dans le sang de<br />Christ. Ch.</p>
        <p><br />4 Veux-tu du Ciel t'approcher<br />chaque jour?<br />La force est en Christ ! (bis)<br />Avec Jésus demeurer pour<br />toujours?<br />La force est dans le sang de<br />Christ. Ch.</p>`
      },
      {
        "id": 81,
        "name": "j'ai décidé de suivre Jésus",
        "url": "./../../../assets/audios/CEV081.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Coeur:<br />MOI j'ai décidé de suivre Jésus, (ter)<br />Je sais qu'Il revient très bientôt,<br />Oui très bientôt.</p>
        <p><br />1 Oh quel bonheur, oh quelle joie<br />D'appartenir à Jésus.<br />Oh quel mystère, Jésus en moi,<br />L'espérance de la gloire !<br />Oui, car sur la croix,<br />Jésus a pris ma place,<br />Et le châtiment qui me<br />donne la paix (bis)<br />Est tombé sur Lui. Ch.</p>
        <p><br />2 Je me réjouirai en l'Eternel,<br />Ravi d'allégresse ;<br />Car Il m'a vêtu de son salut<br />Et m'a couvert de sa délivrance.<br />Oui car sur la croix,<br />Jésus a pris ma place ;<br />Et le châtiment qui me<br />donne la paix (bis)<br />Est tombé sur Lui. Ch.</p>
        <p><br />3 Je me réjouirai, en l'Eternel,<br />Ravi d'allégresse ;<br />Car Il m'a vêtu de son salut<br />Et m'a couvert de sa délivrance.<br />C'est pour toi aussi<br />Qu'Il est mort sur la croix,<br />Et le châtiment qui te<br />donne la paix (bis)<br />Est tombé sur Lui.</p>
        <p><br />Chœur<br />Veux-tu décider de suivre Jésus (ter)<br />Tu sais, Il revient très bientôt,<br />Oui très bientôt.</p>`
      },
      {
        "id": 82,
        "name": "TRAVAILLONS et luttons",
        "url": "./../../../assets/audios/CEV082.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 TRAVAILLONS et luttons, nous<br />sommes au Seigneur.<br />Suivons l'étroit sentier qui conduit<br />à la vie<br />Jésus marche avec nous,<br />avançons sans frayeur,<br />Il nous garde et son bras toujours<br />nous fortifie.</p>
        <p><br />Chœur :<br />Travaillons et luttons, (bis)<br />Soyons prêts et prions,<br />Bientôt le Maître va venir !</p>
        <p><br />2 Travaillons et luttons ! Que les<br />Cœurs affligés,<br />Les perdus loin de Dieu<br />Retrouvent l'espérance<br />Vers la croix dirigeons leurs<br />regards angoissés,<br />Pressons-les d'accepter Jésus,<br />leur délivrance. Ch.</p>
        <p><br />3 Travaillons et luttons ! Il nous<br />appelle tous,<br />Le champ nous est ouvert et la<br />moisson est grande,<br />Pour servir notre Chef ne pensons<br />plus à nous.<br />En avant vers le but ! Le Maître le<br />demande. Ch.</p>
        <p><br />4 Travaillons et luttons ! Sans<br />Jamais nous lasser,<br />De notre Rédempteur élevons la<br />bannière,<br />Fidèles jusqu'au bout, sachons<br />persévérer,<br />Le repos nous attend dans sa<br />Pleine lumière. Ch</p>`
      },
      {
        "id": 83,
        "name": "JE LÈVE mes yeux vers Toi",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 JE LÈVE mes yeux vers Toi<br />Seigneur<br />Pour Te contempler dans Ta<br />splendeur ;<br />Et ma voix est l'écho de mon<br />cœur<br />Pour Te dire mon amour.</p>
        <p><br />2 Au petit matin, de louange éclate<br />Toute l'œuvre de Tes mains.<br />A ce chant de gloire je mêle mon<br />cœur<br />Pour Te dire "Alléluia" !</p>
        <p><br />3 Je lève mes yeux vers Toi<br />Seigneur<br />Pour Te contempler dans Ta<br />splendeur ;<br />Et ma voix est l'écho de mon<br />cœur<br />Pour Te dire mon amour</p>`
      },
      {
        "id": 84,
        "name": "JE TE célèbre de tout mon cœur",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>PSAUME 138<br />1 JE TE célèbre de tout mon cœur,<br />Je chante Tes louanges en la<br />présence de Dieu.<br />Je me prosterne dans Ton saint<br />temple,<br />Je célèbre Ton nom, ô mon Dieu !<br />A cause de Ta bonté et de Ta<br />fidélité,<br />Car Ta renommée s'est accrue<br />Par l'accomplissement de Tes<br />promesses.</p>
        <p><br />2 Le jour où je T'ai invoqué,<br />Tu m'as exaucé, Tu m'as rassuré,<br />Tu as fortifié mon âme Dieu de<br />bonté.<br />Tous les rois de la terre Te<br />loueront !<br />Eternel en entendant les paroles<br />de Ta bouche ;<br />Ils célébreront Tes voies,<br />Car la gloire de l'Eternel est grande.</p>
        <p><br />3 L'Eternel est élevé : Il voit les<br />humbles,<br />Il reconnaît de loin les orgueilleux.<br />Quand je marche au milieu de la<br />détresse,<br />Tu me rends la vie, ô mon Dieu !<br />Tu étends Ta main sur la colère<br />de mes ennemis,<br />Et Ta droite me sauve, ô Eternel !<br />L'Eternel agira en ma faveur.</p>`
      },
      {
        "id": 85,
        "name": "NOUS voici Seigneur Jésus !",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 NOUS voici Seigneur Jésus !<br />Nous sommes reconnaissants ;<br />Merci pour ce rendez-vous<br />De Ton grand amour.<br />Oui, Seigneur !<br />Merci pour ce rendez-vous<br />De Ton grand amour.</p>
        <p><br />2 Nous voici Seigneur Jésus !<br />Nous sommes reconnaissants ;<br />Nous venons Te rendre grâce<br />Pour ton grand amour<br />Oui Seigneur !<br />Nous venons Te rendre grâce<br />Pour Ton grand amour.</p>
        <p><br />3 Nous voici Seigneur Jésus !<br />Membres de Ton Eglise<br />Daigne nous rendre soumis,<br />Comme Toi Seigneur<br />Oui, Seigneur !<br />Daigne nous rendre soumis<br />Comme Toi Seigneur.</p>
        <p><br />4 Nous voici Seigneur Jésus,<br />Enrôlés dans Ton Armée !<br />Daigne nous rendre vaillants<br />De vaillants soldats<br />Oui, Seigneur !<br />Daigne nous rendre vaillants<br />Comme Toi Seigneur.</p>`
      },
      {
        "id": 86,
        "name": "QUELLE gloire",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />QUELLE gloire (bis)<br />Quel bonheur d'être pour toujours<br />Près du trône de la gloire<br />Quelle gloire (bis)<br />Quand j'entrerai dans le céleste<br />séjour.</p>
        <p><br />1 Le grand jour de notre Seigneur<br />Oui le grand jour de la gloire<br />Quand je m'assiérai aux noces de<br />l'Agneau<br />Avec tous les saints en chœur<br />Je chanterai dans sa gloire<br />J'entonnerai le saint cantique<br />nouveau</p>
        <p><br />2 Tu es digne notre Seigneur<br />Toi l'Agneau immolé<br />De prendre le livre et d'en ouvrir<br />les sceaux<br />Car Tu es le Rédempteur<br />Qui nous a tous rassemblés<br />Nous chantons à la gloire de<br />l'Agneau</p>
        <p><br />3 Sois exalté, ô mon Jésus<br />De la mort, Tu es vainqueur<br />Et tu fais de nous un sacerdoce<br />royal<br />Pour Dieu un peuple élu.<br />Oui un peuple élu.<br />Oui un peuple de vainqueurs<br />Qui désormais serviront d'un<br />Cœur loyal.</p>`
      },
      {
        "id": 87,
        "name": "A de nouveaux combats",
        "url": "./../../../assets/audios/CEV087.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 A DE nouveaux combats,<br />Jésus, tu nous appelles,<br />Et nous voici fidèles,<br />Prêts à suivre tes pas.<br />Conduis-nous aux combats :<br />Nous sommes tes soldats.</p>
        <p><br />Chœur :<br />Arme nos bras, arme nos cœurs,<br />Et nous serons plus que<br />vainqueurs ! (bis)<br />Arme nos bras, arme nos cœurs.</p>
        <p><br />2 Arme-nous, ô Seigneur !<br />De foi, de hardiesse,<br />De force, de sagesse,<br />D'amour et de ferveur ;<br />Embrase-nous, Seigneur,<br />D'une invincible ardeur. Ch.</p>
        <p><br />3 Nous tiendrons ferme et haut<br />La croix, notre bannière,<br />Pour vaincre l'adversaire<br />Par le sang de l'Agneau.<br />Oui, nous tiendrons bien haut<br />Ta croix, notre drapeau. Ch.</p>
        <p><br />4 Luttons, prions, souffrons !,<br />Nous aurons la victoire ;<br />La couronne de gloire<br />Un jour ceindra nos fronts.<br />Luttons, prions, souffrons,<br />Bientôt nous régnerons !</p>`
      },
      {
        "id": 88,
        "name": "CELUI qui met en Jésus<br />Une pleine confiance",
        "url": "./../../../assets/audios/CEV088.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 CELUI qui met en Jésus<br />Une pleine confiance,<br />Jamais ne chancelle plus,<br />Complète est sa délivrance.</p>
        <p><br />Chœur :<br />Par la foi nous marcherons,<br />Par la foi nous triomphons,<br />Par la foi mon Rédempteur<br />Me rendra plus que vainqueur !</p>
        <p><br />2 Dans les jours d'adversité,<br />Quand tu sens gronder l'orage,<br />Regarde en sécurité<br />A Christ, et reprends courage ! Ch.</p>
        <p><br />3 Quand Satan veut te troubler,<br />Enlever ton espérance,<br />Ton passé te reprocher,<br />Que Christ soit ton assurance ! Ch.</p>
        <p><br />4 Par la foi je marcherai,<br />En comptant sur ses promesses,<br />Par Lui je triompherai<br />En tout temps de mes détresses! Ch</p>`
      },
      {
        "id": 89,
        "name": "DIEU a un plan pour ma vie",
        "url": "./../../../assets/audios/CEV089.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />DIEU a un plan pour ma vie (bis)<br />J'irai partout dans le monde<br />Prêcher la bonne nouvelle.</p>
        <p><br />1 Je ne suis plus comme ces<br />vagabonds<br />Qui tournent et errent sur la terre ;<br />Hantés par la peur de l'inconnu<br />Comme des bergers sans<br />troupeau. Ch.</p>
        <p><br />2 Il y a de cela pas très longtemps<br />J'étais comme tous mes amis<br />Lassé, dégoûté de mes péchés<br />Je n'étais pas dans ma peau. Ch.</p>
        <p><br />3 J'ai entendu parler de Jésus<br />L'Agneau qui mourut pour moi,<br />Qui a préparé le chemin<br />Qui m'a ramené à Dieu. Ch.</p>`
      },
      {
        "id": 90,
        "name": "NOUS n'avons pas Ici-bas de cité permanente",
        "url": "./../../../assets/audios/CEV090.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 NOUS n'avons pas (3 fois)<br />Ici-bas de cité permanente<br />Nous en cherchons une meilleure<br />Différente de celle d'où nous<br />sommes sortis.</p>
        <p><br />Chœur :<br />Car nous cherchons une patrie.<br />Nous attendons une cité ;<br />Celle que notre Dieu nous a<br />promise<br />Le pays au-delà du Jourdain.</p>
        <p><br />2 Seigneur Jésus (3 fois)<br />O Seigneur écoute nos prières<br />Et montre-nous le chemin<br />Qui nous conduira dans ce pays<br />des géants. Ch.</p>
        <p><br />3 Renonce à toi (3 fois)<br />Et suis-moi sans détour, ni regret.<br />Sanctifie-toi, travaille dur<br />Sois soumis et marche dans<br />l'intégrité. Ch.</p>
        <p><br />4 Renonce à toi (3 fois)<br />Persévère dans le jeûne, la prière ;<br />Souviens-toi de mes promesses ;<br />Et crois en mes prophètes, tu<br />Verras ma gloire. Ch.</p>
        <p><br />5 Seigneur Jésus (3 fois)<br />Je te donne mon cœur et mon<br />bras.<br />Prends ma vie et mon trésor ;<br />Je les mets sur l'autel, bénis-moi<br />Seigneur. Ch.</p>`
      },
      {
        "id": 91,
        "name": "MON fils, mon cher enfant M'aimes-tu assez ?",
        "url": "./../../../assets/audios/CEV091.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 MON fils, mon cher enfant<br />M'aimes-tu assez ?<br />O si tu m'aimes assez,<br />Pour tout risquer ;<br />Je t'enverrai au loin<br />En Inde ou en Irak ;<br />Tu iras me servir<br />Au prix de ta vie.</p>
        <p><br />2 Mon fils, mon cher enfant<br />M'aimes-tu assez ?<br />Ce que tu dois souffrir<br />Je te montrerai :<br />L'opposition des hommes,<br />La haine de l'ennemi.<br />Mais alors souviens-toi<br />Je suis avec toi.</p>
        <p><br />3 Mon fils, mon cher enfant<br />M'aimes-tu assez ?<br />Pour aller pour toujours<br />Loin de ta patrie.<br />Missionnaire lève-toi,<br />Jésus est avec toi.<br />Sur le chemin étroit<br />Il te soutiendra.</p>
        <p><br />4 Si tu traverses les eaux,<br />Donne-Lui ta main<br />Si tu passes par le feu<br />Caches-toi sous Lui<br />Si l'enfer se déchaîne<br />Souviens-toi qu'Il a dit :<br />Je serai avec toi<br />Jusqu'au dernier jour.</p>
        <p><br />5 Si ta vie est rançon<br />Pour ce pays ;<br />La cause de l'Evangile<br />Ne la trahis pas.<br />Bon soldat prends courage<br />Souviens-toi qu'Il a dit<br />"A celui qui vaincra<br />la couronne de vie"</p>`
      },
      {
        "id": 92,
        "name": "NOUS ne travaillons pas pour manger",
        "url": "./../../../assets/audios/CEV092.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 NOUS ne travaillons pas pour<br />manger<br />Nous mangeons pour travailler.<br />S'il nous faut sur la terre dominer<br />Il nous faut bien travailler.</p>
        <p><br />Chœur:<br />Nous devons (bis)<br />Assujettir toute la terre<br />Le Seigneur (bis)<br />Ne nous l'a-t-il pas commandé ?</p>
        <p><br />2 Si tu ne peux tenir un rabot<br />Tu peux porter une houe.<br />Si tu ne peux être charpentier<br />Tu peux la terre cultiver. Ch.</p>
        <p><br />3 Les traités qu'il faudra envoyer<br />Seront le fruit d'un dur labeur.<br />Nous allons travailler sans relâche<br />Que Dieu bénisse nos efforts. Ch.</p>
        <p><br />4 Si tu n'es pas un grand<br />millionnaire<br />Donne le peu que tu as.<br />Pourvu que tu le donnes de bon<br />cœur<br />Dieu le fera prospérer. Ch</p>`
      },
      {
        "id": 93,
        "name": "FANEZ-VOUS joies terrestres",
        "url": "./../../../assets/audios/CEV093.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 FANEZ-VOUS joies terrestres ;<br />Jésus est mien<br />Brisez tout tendre lien ;<br />Jésus est mien<br />La terre est un désert<br />obscur et sans repos<br />Jésus seul peut bénir ;<br />Jésus est mien.</p>
        <p><br />2 Ne tentez point mon âme ;<br />Jésus est mien<br />De Lui j‟ai fait mon choix ;<br />Jésus est mien<br />Choses éphémères d'argile,<br />O vanité qui passe<br />Fuyez-loin de mon cœur ;<br />Jésus est mien.</p>
        <p><br />3 Adieu, rêves de nuit ;<br />Jésus est mien<br />Voici le jour qui luit ;<br />Jésus est mien<br />Mon cœur a tant cherché<br />mais n'a trouvé que vide<br />Jésus m'a satisfait ;<br />Jésus est mien.</p>
        <p><br />4 Adieu mortalité ;<br />Jésus est mien<br />A moi l'éternité !<br />Jésus est mien<br />Venez ô bien-aimés,<br />viens, doux repos des saints<br />Viens Sauveur, viens à moi,<br />Jésus est mien</p>`
      },
      {
        "id": 94,
        "name": "IL POURVOIRA à nos besoins",
        "url": "./../../../assets/audios/CEV094.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 IL POURVOIRA à nos besoins<br />Selon Ses richesses en Jésus<br />Nous remplira de tendres soins<br />Telle est Sa promesse aux élus.</p>
        <p><br />Chœur.1 :<br />Il pourvoira, Il pourvoira<br />Nos cœurs peuvent en être assurés<br />Et demeurer en Lui fondés<br />Car notre Seigneur pourvoira.</p>
        <p><br />2 A-t-on jamais à Lui crié<br />Sans recevoir un prompt secours ?<br />Non, tous, nous pouvons attester<br />Que vrai, fidèle est Son amour. Ch 1</p>
        <p><br />3 A qui Le comparerons-nous<br />Pour le faire l'égal du Seigneur ?<br />Il est unique ! Frères à genoux,<br />Adorons Jésus le Seigneur. Ch 1</p>
        <p><br />4 Frères croyons à la vision<br />Du Seigneur pour notre pays<br />Et de tout cœur investissons !<br />Oui travaillons avant la nuit.</p>
        <p><br />Chœur 2.<br />De Cameroun (toutes nations),<br />ils partiront<br />Les missionnaires de Jésus-Christ<br />Ils partiront et rempliront<br />le monde entier de ses disciples.</p>`
      },
      {
        "id": 95,
        "name": "LEVE-TOI, vaillante armée",
        "url": "./../../../assets/audios/CEV095.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 LEVE-TOI, vaillante armée<br />Pour les combats du Seigneur ;<br />C'est ton Dieu qui t'a formée,<br />C'est Lui seul qui rend vainqueur.<br />Soldats, à la sainte guerre,<br />Préparez-vous en ce jour !<br />Il faut soumettre la terre<br />Au Roi de Paix et d'Amour. (bis)</p>
        <p><br />2 Allez révéler au monde<br />L'amour du Dieu tout-puissant ;<br />Dans l'obscurité profonde<br />Annoncez le jour naissant.<br />Aux peuples sans espérance,<br />Dites que Christ est venu,<br />Apportant la délivrance,<br />Au cœur coupable et perdu. (bis)</p>
        <p><br />3 Sur le plus lointain rivage,<br />Portez l'éternelle croix ;<br />Avec un nouveau courage,<br />Partout élevez la voix.<br />Qu'ainsi l'Eglise s'étende<br />Ici-bas sous tous les cieux<br />Et que partout l'on entende,<br />O Christ ! Ton nom glorieux (bis)</p>
        <p><br />4 Heureux ceux qui pour leur<br />Maître<br />Auront voulu tout souffrir !<br />Le grand jour fera connaître<br />L'honneur qui les doit couvrir.<br />Dans l'immortelle victoire<br />De Jésus le Roi des rois,<br />Ils auront part à Sa gloire,<br />Ayant eu part à Sa croix. (bis)</p>`
      },
      {
        "id": 96,
        "name": "LÈVE-TOI armée de gloire",
        "url": "./../../../assets/audios/CEV096.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 LÈVE-TOI armée de gloire<br />De ton Roi tiens le drapeau ;<br />De Jésus ton capitaine,<br />Tu dois le porter très haut.<br />Fais de Jésus ta passion,<br />De vivre ta seule raison,<br />Ton amour, ton style de vie,<br />Fais de Jésus ton seul but. (bis)</p>
        <p><br />2 Mais avant de nous lancer<br />Avant d'aller conquérir;<br />Offrons-Lui donc tous nos cœurs<br />Offrons-Lui toutes nos vies,<br />A ses pieds sachons nous tenir,<br />De la croix, contemplons l'œuvre,<br />C'est d'ici que jaillit, le flot<br />d'amour pour tout le monde. (bis)</p>
        <p><br />3 Nous irons au bout du monde<br />Des disciples nous ferons;<br />C'est l'ordre de notre Maître,<br />Nous ne le trahirons point.<br />En avant portons nos armes,<br />Ceignons-nous de vérité,<br />Prenons sur nous la droiture,<br />Faisons tout dans la prière,<br />Avec foi, vivons la Bible.<br />Avec zèle oui travaillons. (bis)</p>
        <p><br />4 Gens de destinée nous sommes<br />Serviteurs, sujet du Roi ;<br />Jésus est le Chef, le Berger,<br />Nous ne manquerons de rien.<br />A Lui seul offrons nos vies,<br />Et entrons dans Son service,<br />Quant aux affaires de la vie,<br />Nous ne nous embarrassons (bis)<br />point.</p>
        <p><br />5 Nous irons dire à tout pécheur<br />A tous les désespérés,<br />Il y a pour eux de l'espoir<br />Car Jésus est ressuscité<br />Il n'y a plus de condamnation<br />Christ s'est donné en rançon<br />Pour que tous avec le Père,<br />Par Lui soient réconciliés. (bis)</p>
        <p><br />6 En avant toujours fidèles,<br />Dirigés par le Fidèle ;<br />Nous irons partout le monde,<br />La moisson est déjà prête.<br />En Europe, en Amérique,<br />En Asie comme en Afrique,<br />Dans toute l'Océanie<br />Jésus sera proclamé. (bis)</p>`
      },
      {
        "id": 97,
        "name": "LA MOISSON est grande",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Coeur:<br />LA MOISSON est grande mais il y<br />a peu d'ouvriers<br />Priez donc le Maître de la moisson<br />D'envoyer des ouvriers<br />Des ouvriers dans Sa moisson. (bis)</p>
        <p><br />1 Voyant la foule Jésus fut ému de<br />Compassion pour elle<br />Une foule languissante et abattue<br />Comme des brebis qui n'ont point<br />de berger.</p>
        <p><br />2 Voyant la France Jésus est ému<br />de Compassion pour elle<br />Une France trempée dans les<br />œuvres des ténèbres.<br />Comme des brebis qui n'ont point<br />de berger.</p>
        <p><br />3 Voyant la Chine Jésus est ému<br />De Compassion pour elle<br />Une Chine si peuplée mais<br />égarée par des faux dieux<br />Comme des brebis qui n'ont point<br />de berger.</p>
        <p><br />4 La moisson est mûre, parmi les<br />nations,<br />déjà les champs blanchissent<br />Frères levons les yeux, hâtonsnous donc d'obéir<br />La nuit vient ou personne ne peut<br />travailler.</p>
        <p><br />Chœur :<br />La moisson est grande mais il y a<br />peu d'ouvriers<br />Prions donc le maître de la moisson<br />Seigneur envoie des ouvriers<br />Des ouvriers dans ta moisson. (bis)</p>`
      },
      {
        "id": 98,
        "name": "TOI, fils de l'homme",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />TOI, fils de l'homme<br />Je t'établis sentinelle<br />Sur la maison d'Israël (2 fois)<br />Tu dois écouter la parole de ma<br />bouche<br />Les avertir de ma part (2 fois)</p>
        <p><br />1 Quand je dis au méchant,<br />méchant tu mourras<br />Si tu ne parles pas pour détourner<br />Le méchant de sa voie<br />Ce méchant mourra dans son iniquité<br />Et je te redemanderai son sang.</p>
        <p><br />2 Dis-leur : je suis vivant, dit le<br />Seigneur l'Eternel,<br />Ce que je désire ce n'est<br />pas que le méchant meure<br />Mais c'est qu'il change de<br />conduite et qu'il vive<br />Revenez de votre mauvaise voie.</p>
        <p><br />3 Quand je dis au Français,<br />Français tu mourras<br />Si tu ne parles pas pour détourner<br />le Français de sa voie<br />Ce Français mourra dans son<br />iniquité<br />Et je te redemanderai son sang.</p>
        <p><br />Chœur:<br />Toi fils de l'homme<br />Je t'envoie comme missionnaire<br />Vers le pays de la France (2 fois)<br />Tu dois écouter la parole de ma<br />bouche<br />Les avertir de ma part. (2 fois)</p>
        <p><br />4 Quand je dis, Éthiopien, oh oui, tu<br />mourras<br />Si tu ne parles pas pour détourner<br />l'Ethiopien de sa voie<br />L'Éthiopien mourra dans son<br />iniquité<br />Et je te redemanderai son sang.</p>
        <p><br />Chœur: Toi fils de l'homme<br />Je t'envoie comme missionnaire<br />Vers le peuple éthiopien (2 fois)<br />Tu dois écouter la parole de ma<br />bouche<br />Les avertir de ma part (2 fois)</p>`
      },
      {
        "id": 99,
        "name": "L'EGLISE est fondée sur Jésus mon Seigneur",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 L'EGLISE est fondée,<br />Sur Jésus son Seigneur<br />Il l'a Lui-même créée<br />Par la Parole et l'eau<br />Des cieux Il vint, la chercha<br />En fit Sa sainte Epouse,<br />Par Son sang Il l'acheta<br />Pour sa vie Il mourut.</p>
        <p><br />2 De toutes nations élue<br />Mais une sur la terre<br />La charte de son salut<br />"Un Seigneur, une foi,<br />Une seule naissance,<br />Et un seul nom béni"<br />Une seule espérance<br />En Lui la tient unie.</p>
        <p><br />3 Et bien qu‟on la méprise<br />La voyant opprimée<br />Déchirée par des schismes<br />Et par des hérésies<br />Les saints sans cesse attendent<br />Leur cri : Jusques à quand ?<br />Bientôt la nuit de larmes<br />Sera le jour des chants.</p>
        <p><br />4 En dépit des souffrances,<br />Du bruit de la mêlée,<br />Elle attend patiente<br />Qu'enfin soit consommée<br />La gloire éternelle<br />Jusqu'au jour où, ravie,<br />L'Eglise, pure et belle<br />De paix sera bénie.</p>
        <p><br />5 Elle est unie sur terre<br />Au Dieu Père, Fils, Esprit<br />Et par un saint mystère,<br />Aux saints déjà partis<br />O Seigneur par Ta grâce,<br />Avec ces bienheureux<br />Puissions-nous voir Ta face<br />T'adorer dans les cieux</p>`
      },
      {
        "id": 100,
        "name": " VIENDRA-T-IL ? ",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 VIENDRA-T-IL ? il viendra le<br />réveil attendu<br />L'Esprit Saint descendra sur les<br />saints attendants ;<br />Et la puissance du péché sera par<br />Lui brisée ;<br />Dieu dans son grand amour nous<br />enverra sa pluie.</p>
        <p><br />2 Notre Dieu notre Père reçois notre<br />prière<br />Souviens-toi de Jésus, souvienstoi de la croix<br />N'entends-tu pas cette voix criant<br />à Golgotha<br />"Pardonne-leur, pardonne-leur<br />Ils ne savent ce qu'ils font."</p>
        <p><br />3 Rappelle-toi, rappelle-toi l'agonie<br />de la croix<br />Et le sang du Seigneur sur le côté<br />percé<br />Et le mot de victoire ce "Tout est<br />accompli"<br />Que l'œuvre du calvaire porte des<br />fruits nouveaux.<br /><br />4 Les vieillards comme les jeunes<br />seront tous affranchis<br />Les sorciers, les voleurs, seront<br />aussi sauvés.<br />Et la puissance de Mamon sera<br />enfin brisée<br />Un seul Dieu, un seul Roi régnera<br />dans les cœurs.</p>`
      },
      {
        "id": 101,
        "name": "TOUT est à Toi Seigneur",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />TOUT est à Toi Seigneur<br />Le don le plus grand<br />Que Tu as donné<br />C'est la Lumière<br />Qui est venue sur notre terre<br />Pour sauver tous ceux qui croient.</p>
        <p><br />1 Tu créas la terre, tout était bon<br />Tu nous l'as confiée<br />Mais notre réponse ne fut que<br />rébellion<br />Dieu aie pitié de nous !</p>
        <p><br />2 Tu immolas ton Saint Fils<br />Sur cette horrible croix<br />Tu l'as condamné pour nous<br />justifier<br />O Eternel Tu es bon !</p>
        <p><br />3 Et Tu répandis Ton Saint-Esprit<br />Pour nous fortifier<br />Et pour faire de nous des témoins<br />du Dieu vivant<br />O Eternel Tu es grand !</p>
        <p><br />4 Tu nous as donné notre Leader.<br />Pour nous servir de modèle<br />O Dieu aide-nous à suivre ce<br />modèle</p>
        <p><br />Pour satisfaire Ton cœur.<br />5 Tu nous as donné Tes enfants<br />Pour que nous les servions<br />O Dieu donne-nous des cœurs de<br />serviteurs<br />Pour satisfaire Ton cœur.<br />6 Tu nous as promis de revenir<br />Nous amener là-haut<br />Seigneur notre joie est dans Ton<br />avènement<br />Viens Seigneur viens bientôt !</p>`
      },
      {
        "id": 102,
        "name": "EH oui ! pour vous",
        "url": "./../../../assets/audios/CEV102.m4a",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Coeur :<br />EH oui ! pour vous,<br />Pour le Seigneur pour le prochain bis<br />Nous voulons être des serviteurs.</p>
        <p><br />1 Ici nous nous sommes rencontrés<br />pour nous engager<br />Afin de servir dans le Seigneur.<br />Tous les hommes du monde<br />entier. Ch.</p>
        <p><br />2 Car nous avons reçu du grand<br />Roi, cette commission<br />D'aller partout dans le monde<br />entier<br />Annoncer la bonne nouvelle. Ch.</p>
        <p><br />3 Le monde avec toutes sortes<br />d'appâts, ne nous séduira<br />Car nous savons il est vanité<br />Le vrai trésor est en Jésus. Ch.</p>
        <p><br />4 Aussi loin que nous pourrons<br />trouver la malédiction<br />Nous irons de la part de Jésus<br />Car le Seigneur est mort pour<br />tous! Ch.</p>`
      },
      {
        "id": 103,
        "name": "ECOUTE la voix qui crie à ton",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 ECOUTE la voix qui crie à ton<br />Cœur<br />Ouvre-moi, ouvre-moi.<br />Et c'est encore cette voix qui<br />supplie<br />Ouvre-moi, ouvre-moi.</p>
        <p><br />Chœur :<br />C'est le Seigneur qui frappe à ta<br />porte<br />Si tu entends, ouvre-Lui ton cœur<br />Il apporte l'eau de vie à ton cœur<br />assoiffé<br />Ouvre-Lui, ouvre-Lui.</p>
        <p><br />2 Toi qui cherches le chemin dans<br />le noir<br />Ouvre-moi, ouvre-moi<br />Car je suis le vrai chemin de la vie<br />Ouvre-moi, ouvre-moi.</p>
        <p><br />3 C'est pour toi que j'ai souffert à la<br />croix<br />Ouvre-moi, ouvre-moi.<br />J'ai porté tous tes péchés au calvaire<br />Ouvre-moi, ouvre-moi.</p>
        <p><br />4 N'aie pas peur, je ne te condamne<br />pas<br />Ouvre-moi, ouvre-moi.<br />Je suis celui qui te donne la paix<br />Ouvre-moi, ouvre-moi.</p>
        <p><br />5 Mon cher ami, n'endurcis pas ton<br />Cœur<br />Ouvre-Lui, ouvre-Lui.<br />C'est peut-être la dernière fois<br />qu'Il t'appelle<br />Ouvre-Lui, ouvre-Lui</p>`
      },
      {
        "id": 104,
        "name": "Dans les cieux règne le Dieu<",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>LOUEZ-LE<br />1 Dans les cieux règne le Dieu<br />vivant<br />Celui qui par Son Verbe puissant<br />Fit la terre et le grand firmament<br />Louez-Le, louez-Le.</p>
        <p><br />2 Qui comme Lui du rocher fait jaillir<br />Une eau qui jamais ne peut tarir<br />Quiconque en boit ne saurait périr<br />Louez-Le, louez-Le.</p>
        <p><br />3 A Ses yeux, mille ans sont<br />comme un jour<br />Sur terre, l'homme a un si bref<br />séjour<br />Mais, Lui, l'Eternel, sera toujours.<br />Louez-Le, louez-Le.</p>
        <p><br />4 Plions-nous sous Son bras<br />souverain<br />Car Lui-Même trace notre chemin<br />L'avenir, en Lui, reste certain<br />Louez-le, Louez-le</p>`
      },
      {
        "id": 105,
        "name": "Je ne vivrai pas comme une poule",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref.1 :<br />Je ne vivrai pas comme une poule<br />Sur la terre<br />Mon nom n'ira pas dans la foule<br />Des humains</p>
        <p><br />1 Tu as besoin d‟être aimé<br />Tu as besoin d‟être écouté<br />Besoin d‟un ami, besoin de paix<br />Et tu as cherché, cherché.</p>
        <p><br />2 Pendant plusieurs années<br />J'ai été enseigné<br />J'ai été exhorté<br />A faire de grandes choses pour<br />Dieu<br />Maintenant, je me lève pour un<br />avenir glorieux Ref.1:</p>
        <p><br />3 Je laisserai, Dieu aidant,<br />Sur le sable du temps<br />Des marques permanentes<br />Pour la plus grande gloire de Dieu<br />Et j'aurai investi tout mon être<br />pour bâtir le royaume de Dieu.</p>
        <p><br />Ref.2:<br />Mon frère vivras-tus comme une<br />poule sur la terre ?<br />Ton nom ira-t-il dans la foule<br />des humains ?</p>
        <p><br />4 En ce qui me concerne, je ne<br />serai pas une poule<br />Je serai un aigle<br />Car Dieu m'a donné des ailes<br />Oui je m'envolerai vers les<br />hauteurs<br />Et je connaîtrai mon Seigneur. Ref.2</p>
        <p><br />5 Je donnerai ma vie<br />Mon corps sera assujetti<br />Je paierai le prix<br />Pour une vie de destinée<br />Qui aura des conséquences au<br />ciel, sur terre et en enfer.</p>
        <p>Ref.3 :<br />Oui ma vie aura sur la terre<br />Un impact<br />J'amènerai par la prière<br />Christ le Roi</p>`
      },
      {
        "id": 106,
        "name": "LE PÉCHÉ d'Adam entraîna la",
        "url": "./../../../assets/audios/CEV106.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />LE PÉCHÉ d'Adam entraîna la<br />mort<br />Dieu ne le toléra pas<br />Il ne tolérera pas le tien (bis)<br />Il donnera à chacun ce qu'il mérite.</p>
        <p><br />1 Le monde vit dans le péché<br />Les cœurs brisés, les foyers<br />brisés<br />Les suicides, les divorces<br />En sont les conséquences.</p>
        <p><br />2 Tu es séparé de Dieu<br />Voué au châtiment (éternel)<br />A moins que tu ne te repentes<br />L'enfer est ton salaire.</p>
        <p><br />3 Il te donne dans son amour<br />Un don merveilleux<br />Jésus son Fils, c'est la vie<br />Reçois-le dans ton cœur.</p>
        <p><br />4 Tes œuvres sont inutiles<br />Jésus seul suffira<br />Pour apaiser la colère<br />Du Dieu juste et saint.</p>
        <p><br />Chœur<br />Il te tend la main ce Jésus<br />Il te tend la main, sa main d'amour<br />Il insiste pour te sauver<br />Ouvre-Lui, ouvre-Lui, Ouvre-Lui ton<br />cœur !</p>`
      },
      {
        "id": 107,
        "name": "Ta gloire est grande",
        "url": "./../../../assets/audios/CEV107.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />Ta gloire est grande sur toute la<br />terre<br />Ta majesté surpasse le ciel<br />Nous te louons, nous t'adorons<br />Ô Eternel Roi des rois notre Maître.</p>
        <p><br />1 Quand je vois le ciel ouvrage de<br />tes mains<br />La lune et les étoiles que tu as<br />placées<br />Je me demande : qui est l'homme ?<br />Pour que tu penses tant à lui ! Ch.</p>
        <p><br />2.Ta majesté surpasse celle du ciel<br />Mais c'est la voix des tous petits<br />enfants<br />Que tu opposes à tes adversaires<br />Elle est comme un rempart que tu<br />dresses. Ch.</p>
        <p><br />3 Tu m'as fait presque l'égal de<br />Dieu<br />Tu m'as fait régner sur ta création<br />Tu as tout mis tout mis à mes<br />pieds<br />Mérité-je vraiment cet honneur? Ch</p>`
      },
      {
        "id": 108,
        "name": "QUE cherches-tu ?",
        "url": "./../../../assets/audios/CEV108.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />QUE cherches-tu ? quand tu ne<br />cesses de courir<br />Le matin à peine levé, tu cours !<br />Le soir lassé,<br />Tu t'écries je n'ai pas eu le temps,<br />pas le temps<br />Je n'ai pas le temps, pas le temps<br />est ton refrain.</p>
        <p><br />1 Pourtant tu veux bien être heureux<br />espérer vivre mieux<br />L'âme angoissée, le cœur ravagé<br />tu restes insatisfait<br />En vain tu as marché en vain tu<br />as couru. Ch.1</p>
        <p><br />2 Autour de toi des amis, des frères<br />ne sont plus<br />Ils ont couru sans rien emporter ils<br />sont partis !<br />Oh! vanité de la course sans<br />Jésus. Ch.1</p>
        <p><br />3 La course après les richesses les<br />plaisirs éphémères<br />La course après les bulles de<br />savon, la course !<br />Tu peux l'arrêter, tu peux être<br />heureux</p>
        <p><br />Chœur 2 :<br />Prends donc le temps d'écouter ce<br />que dit Jésus : Je t'aime !<br />J'ai payé le prix pour ta satisfaction<br />Sur cette croix j'ai tout accompli<br />pour toi<br />Je suis Ton Sauveur, Ton Sauveur<br />qui t'aime.</p>
        <p><br />4 Viens tel que tu es adultère,<br />voleur, qu'importe<br />Âme lassée, viens te reposer sur<br />moi<br />Viens tu es pardonné, ton péché<br />j'ai effacé<br />Je te veux maintenant et pour<br />l'éternité (bis)</p>`
      },
      {
        "id": 109,
        "name": "COMBIEN de chemins as-tu parcourus",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur 1:<br />COMBIEN de chemins as-tu<br />parcourus<br />Combien de fois, tu as hésité<br />Combien de fois tu as été déçu<br />Combien de fois tu as été trompé.</p>
        <p><br />1 Tu as besoin d‟être aimé<br />Tu as besoin d‟être écouté<br />Besoin d‟un ami, besoin de paix,<br />Et tu as cherché, cherché.</p>
        <p><br />2 Après les hommes tu courus<br />Et vers les dieux, tu t'es tourné<br />Aujourd'hui Mahomet, demain<br />Bouddha<br />Marie et les saints, c'est pareil. Ch.1</p>
        <p><br />3 Ton avenir est incertain<br />La paix du cœur tu ne connais pas<br />La véritable joie, tu ne connais pas<br />Et tu restes triste, désespéré. Ch.1</p>
        <p><br />4 Laisse-moi te dire, te confier<br />Il y a un seul chemin, oui un seul<br />Pour arriver à ce bonheur<br />A ce paradis cherché.</p>
        <p><br />Chœur 2 :<br />Un seul chemin pour les angoissés<br />Un seul chemin pour les damnés<br />Un seul chemin pour les ratés<br />Un seul chemin pour les délaissés.<br />(Paroles} :<br />Oui c'est Jésus, Jésus le Fils de Dieu<br />Le Sauveur du monde...<br />Viens à Jésus, viens à Lui<br />et ton âme, Il la sauvera. Ch.2</p>`
      },
      {
        "id": 110,
        "name": "QUEL bonheur d'être sauvé",
        "url": "./../../../assets/audios/CEV110.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />O QUEL bonheur d'être sauvé<br />D'avoir ses péchés pardonnés<br />D'avancer chaque jour qui passe<br />Vers la maison du Père.</p>
        <p><br />1.Si à Lui tu t'es vraiment confié<br />Et tes voies tu as abandonné<br />N'écoute pas cette voix trompeuse<br />Crois à la Sainte Parole. Ch.</p>
        <p><br />2 Pour toi commence la vraie vie<br />Avec joie va servir Jésus<br />Son joug est doux, il est léger<br />Ouvre-Lui tout ton cœur. Ch.</p>
        <p><br />3 Tu connaîtras des difficultés<br />Ton Maître a fait le même chemin<br />Il te conduira, t'instruira<br />Il ne t'oubliera pas. Ch.</p>
        <p><br />4 Pour le combat, tu as des armes<br />Demeure en Lui, sois vrai et zélé<br />Pour annoncer la Bonne Nouvelle<br />Prie, lis la Bible, agis. Ch</p>`
      },
      {
        "id": 111,
        "name": "Ô TENDRE Père, donne-moi Un cœur contrit et brisé",
        "url": "./../../../assets/audios/CEV111.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 Ô TENDRE Père, donne-moi<br />Un cœur contrit et brisé<br />Oh un cœur qui sans murmure<br />Reconnaît sa pauvreté<br />Donne-moi (bis)<br />Un cœur contrit et brisé.</p>
        <p><br />2 Que Ta vue sur moi provoque<br />la réaction que Tu veux<br />Ce regard qu'un jour Tu posas<br />Sur Pierre quand il Te renia.<br />Ce regard, Ton regard<br />Brise en moi la dureté.</p>
        <p><br />3 Souvent je me suis demandé<br />Comment Tu l'as regardé<br />Le regard d'un cœur blessé,<br />D'un ami qui aime encore.<br />Oui sur moi, Ton regard<br />Me fasse fondre en chaudes<br />larmes</p>
        <p><br />4 L'œil de mon Seigneur en peine<br />Qui tait la justification<br />Mais fait fondre le cœur en larmes<br />Ne cherche aucune raison.<br />Donne-moi (bis)<br />Un cœur contrit et brisé.</p>
        <p><br />5 Bien que souffrant pose sur moi<br />Ta vue pleine de déception<br />Oh que je ressente avec Toi<br />Ta douleur causée par moi.<br />Donne-moi (bis)<br />Un cœur contrit et brisé.</p>
        <p><br />6 Je veux connaître la haine<br />Du péché que Tu connais<br />Cesser de me justifier<br />L'œuvre de la croix accepter.<br />Donne-moi (bis)<br />Un cœur contrit et brisé.</p>`
      },
      {
        "id": 112,
        "name": "TOI mon ami c'est pour toi que je chante",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />TOI mon ami c'est pour toi que je<br />chante<br />Mon cœur est plein, plein d'amour<br />et de zèle<br />J'ai l'Evangile de paix à t'annoncer<br />Oui j'ai l'amour, l'amour de Christ à<br />te donner.</p>
        <p><br />1 Ta route est-elle sombre, longue<br />et triste<br />Tu ne sais pas où elle te mène<br />Tes lendemains sont bien<br />incertains<br />Tu ne sais pas où te conduira<br />demain</p>
        <p><br />2 Je sais où je vais et je suis<br />rayonnant<br />Mais cela n'a pas toujours été<br />comm' c'la<br />Mon histoire commence avec une<br />rencontre<br />Celle avec Jésus qui est devenu<br />Mon Maître.</p>
        <p><br />3 Jésus, c'est Lui la raison de ma<br />joie<br />J'étais sous la malédiction divine<br />Je traînais sans assurance de la<br />vie<br />Quand un jour, Il est venu sur<br />mon chemin.</p>
        <p><br />4 Il a pris sur Lui notre malédiction<br />Il a pris sur Lui notre sanction<br />Toi aussi tu peux être libéré<br />Et comme moi tu pourras aussi<br />chanter</p>`
      },
      {
        "id": 113,
        "name": "A MOI les cœurs braves !",
        "url": "./../../../assets/audios/CEV113.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 "A MOI les cœurs braves !"<br />A dit le Vainqueur<br />Qui rompt les entraves<br />Du pauvre pécheur.<br />"Noble est la carrière :<br />Qui veut y courir,<br />Et, sous ma bannière,<br />Combattre et vivre ? "</p>
        <p><br />Chœur:<br />A toi, Divin Maître,<br />Mon cœur et mon bras :<br />Jésus, je veux être<br />Un de tes soldats !</p>
        <p><br />2 L'ennemi fait rage !<br />Je sens ses fureurs ;<br />Comme un bruit d'orage<br />J'entends ses clameurs<br />Quand Satan déchaîne<br />Tous ses alliés :<br />Mais ce flot de haine<br />Expire à tes pieds. Ch.</p>
        <p><br />3 Ma couronne est prête :<br />Tu m'as racheté !<br />Ma justice est faite<br />De Ta sainteté.<br />Ta grâce infinie<br />Couvre mes péchés ;<br />A Ta croix bénie<br />Ils sont attachés. Ch.</p>
        <p><br />4 Après tant de luttes,<br />Lassés, mais vainqueurs,<br />Relevés des chutes,<br />Guéris des douleurs,<br />Gardés sous ton aile,<br />Nous aurons toujours<br />La paix éternelle<br />Et pourrons chanter :</p>
        <p><br />Chœur :<br />"A Toi les couronnes<br />De tous les élus !<br />C'est Toi qui leur donnes<br />Ton ciel, ô Jésus !"</p>`
      },
      {
        "id": 114,
        "name": "JÉSUS-CHRIST est ma sagesse",
        "url": "./../../../assets/audios/CEV114.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 JÉSUS-CHRIST est ma sagesse ;<br />Il éclaire mon chemin,<br />Et je marche en ma faiblesse,<br />Conduit par sa sûre main.<br />Il éclaire mon chemin (bis)<br />Et je marche en ma faiblesse,<br />Conduit par sa sûre main.</p>
        <p><br />2 Jésus-Christ est ma justice ;<br />Son sang a coulé pour moi ;<br />Je trouve en son sacrifice<br />Paix et pardon par la foi.<br />Son sang a coulé pour moi; (bis)<br />Je trouve en son sacrifice<br />Paix et pardon par la foi.</p>
        <p><br />3 Jésus-Christ me sanctifie ;<br />Au divin cep attaché,<br />Je reçois de Lui la vie<br />Qui m'affranchit du péché.<br />A Toi, Jésus, attaché, (bis)<br />Je reçois de Toi la vie<br />Qui m'affranchit du péché.</p>
        <p><br />4 Jésus en payant ma dette,<br />A grand prix m'a racheté,<br />Près de Lui ma place est prête<br />Au ciel pour l'éternité,<br />Jésus Tu m'as racheté (bis)<br />Et déjà ma place est prête<br />Au ciel pour l'éternité,</p>`
      },
      {
        "id": 115,
        "name": "AU COMBAT de la vie",
        "url": "./../../../assets/audios/CEV115.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 AU COMBAT de la vie<br />Conscrits et vétérans,<br />Le Seigneur nous convie :<br />Soldats ! serrons nos rangs !<br />Qu'au divin capitaine<br />Notre cœur soit uni :<br />La victoire est certaine<br />sous son drapeau béni.</p>
        <p><br />2 La croix est sa bannière,<br />Son beau nom est Jésus ;<br />Des armes de lumière<br />Il revêt ses élus.<br />Son Esprit les enflamme<br />Au plus fort des combats ;<br />Son âme est dans leur âme,<br />Sa force est dans leurs bras.</p>
        <p><br />3 Jeunesse ardente et fière,<br />Jeunesse au cœur vaillant,<br />Donne-toi toute entière<br />Au Sauveur Tout-Puissant !<br />Soumise à sa loi pure,<br />Tu mettras sous tes pieds,<br />Tes péchés, ta souillure,<br />Par sa mort expiés.</p>
        <p><br />4 Par sa grâce infinie<br />Il guérira tes maux ;<br />Et, la lutte finie,<br />Après bien des travaux,<br />Sur ton front, qui rayonne<br />D'espoir et de clarté,<br />Il mettra la couronne<br />De l'immortalité !</p>`
      },
      {
        "id": 116,
        "name": "JÉSUS guérit, Il pardonne",
        "url": "./../../../assets/audios/CEV116.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>JÉSUS guérit, Il pardonne<br />Il délivre il libère. (bis)</p>
        <p><br />1 Es-tu déjà découragé<br />Es-tu lassé par ton péché<br />Ne t'en fais pas viens à Lui<br />Ne t'en fais pas viens à Jésus.</p>
        <p><br />2 La maladie t'a-t-elle lassé<br />Et tu souffres, souffres, vraiment<br />Ne t'en fais pas viens à Lui<br />Ne t'en fais pas viens à Jésus.</p>
        <p><br />3 Que de fardeaux tu as sur toi<br />Et tu misères sous leur poids<br />Ne t'en fais pas viens à Lui<br />Ne t'en fais pas viens à Jésus.</p>
        <p><br />4 Que de marabouts tu as visités<br />Que de remèdes tu as pris<br />Ne t'en fais pas viens à Lui<br />Ne t'en fais pas viens à Jésus.</p>
        <p><br />5 Que de démons t'ont tourmenté<br />Et tu cherches la délivrance<br />Ne t'en fais pas viens à Lui<br />Ne t'en fais pas Jésus délivre.</p>`
      },
      {
        "id": 117,
        "name": "VIENS avec tous tes fardeaux",
        "url": "./../../../assets/audios/CEV117.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />VIENS avec tous tes fardeaux<br />mon ami bis<br />Viens les déposer aux pieds de<br />Jésus</p>
        <p><br />1 Es-tu fatigué, es-tu lassé<br />Il te donnera le repos du cœur.<br />Es-tu déçu, as-tu été trompé<br />Ne t'en fais pas, Ô viens à Lui. Ch.</p>
        <p><br />2 Tu as trompé, tu as fait souffrir<br />Il te pardonnera, viens à Lui.<br />Es-tu abandonné, es-tu raté<br />Ô viens à Lui, viens à Jésus. Ch.</p>
        <p><br />3 Tu es voleur ou même menteur<br />Son sang a coulé pour toi à<br />Golgotha.<br />Ne t'en va pas, ne t'endurcis pas<br />Tu pourrais avoir à le regretter. Ch.</p>
        <p><br />4 Oui c'est pour toi, pour toi qu'Il a<br />souffert<br />Oui c'est pour toi qu'Il a tout<br />accompli.<br />Il a vaincu le monde, Il a vaincu<br />Satan<br />Il a rompu toutes tes chaînes. Ch.</p>
        <p><br />5 Oui c'est pour toi, pour toi ce<br />Golgotha<br />Oh ! c'est pour toi ce flot d'amour.<br />L'Ami des pécheurs, le Roi des<br />rois<br />Frappe à ta porte, veux-tu ouvrir ? Ch</p>`
      },
      {
        "id": 118,
        "name": "UN nom si doux réjouit mon cœur",
        "url": "./../../../assets/audios/CEV118.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. UN nom si doux réjouit mon cœur,<br />Me fait chanter ses louanges,<br />Brille d‟une auguste splendeur :<br />Le plus beau nom Jésus.</p>
        <p><br />Chœur :<br />Oui j’aime Jésus, (ter)<br />Qui m’aima le premier.</p>
        <p><br />2. Ce nom parle d‟amour suprême,<br />De Lui qui m‟a sauvé,<br />Qui a versé Son sang précieux<br />Pour ôter mes péchés.</p>
        <p><br />3. Et il me parle de ce que<br />Le Père a pour l‟enfant :<br />De Sa grâce, Son fort Esprit<br />Pour vaincre à chaque instant.</p>
        <p><br />4. Et il affirme qu‟un Ami<br />M‟assiste à chaque épreuve,<br />Qu‟Il me soutient dans mon chagrin<br />De la peine m‟enlève.</p>`
      },
      {
        "id": 119,
        "name": "SUR la place du village",
        "url": "./../../../assets/audios/CEV119.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. SUR la place du village<br />Ils sont accourus,<br />Les malheureux de tout âge<br />Criant à Jésus :<br /><br />Chœur :<br />Seigneur, doux Maître !<br />En Toi seul j’ai foi.<br />Daigne restaurer mon être.<br />Seigneur, guéris-moi !</p>
        <p><br />2. Qu‟il vous soit fait, dit le Maître,<br />Selon votre foi.<br />Sa parole les pénètre,<br />Bannit leur effroi. Ch.</p>
        <p><br />3. Il pose Ses mains bénies,<br />Sur leurs fronts brûlants<br />Et chasse la maladie<br />De leurs corps souffrants. Ch.</p>
        <p><br />4. Et soudain la vie divine,<br />Restaure leurs corps ;<br />Comme hier en Israël,<br />Il guérit encore. Ch.</p>`
      },
      {
        "id": 120,
        "name": "COMME une terre altérée",
        "url": "./../../../assets/audios/CEV120.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. COMME une terre altérée<br />Soupire après l‟eau du ciel,<br />Nous appelons la rosée<br />De Ta grâce, Emmanuel !</p>
        <p><br />Ref. Fraîches rosées<br />Descendez sur nous tous !<br />O divines ondées,<br />Venez arrosez-nous</p>
        <p><br />2. Descends, ô pluie abondante,<br />Coule à flots dans notre cœur,<br />Donne à l‟âme languissante<br />Une nouvelle fraîcheur. Ch.</p>
        <p><br />3. Ne laisse en nous rien d‟aride<br />Qui ne soit fertilisé ;<br />Que le cœur le plus avide<br />Soit pleinement arrosé. Ch.</p>
        <p><br />4. Oui que les déserts fleurissent<br />Sous tes bienfaisantes eaux,<br />Que les lieux secs reverdissent<br />Et portent des fruits nouveaux. Ch.</p>
        <p><br />5. Viens, ô salutaire pluie,<br />Esprit de grâce et de paix !<br />Répands en nous une vie<br />Qui ne tarisse jamais. Ch.</p>`
      },
      {
        "id": 121,
        "name": "QUAND la trompette céleste",
        "url": "./../../../assets/audios/CEV121.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 QUAND la trompette céleste<br />Annoncera les temps nouveaux,<br />Quand poindra l‟aurore de l‟éternité<br />Et que s‟ouvrira le grand livre de<br />vie de L‟Agneau,<br />Pourrons-nous répondre à l‟appel:<br />Je suis prêt ?</p>
        <p><br />Chœur :<br />A l’appel de la trompette, (ter}<br />Quand Jésus-Christ<br />reviendra, je serai prêt.</p>
        <p><br />2. Oh ! Quel glorieux réveil :<br />Les morts en Christ se lèveront,<br />Avec eux nous les vivants serons<br />changés<br />Tous ensemble sur la nue en un<br />clin d'œil nous monterons<br />Pour être avec Lui toujours.<br />Seras-tu Prêt ? Ch.</p>
        <p><br />3. Travaillons pour notre Maître<br />Tandis qu' il fait encore jour,<br />Moissonnons des âmes pour<br />l‟éternité !<br />S‟Il nous trouve à notre poste<br />pleins de zèle et pleins d‟amour<br />Quand Il viendra nous chercher,<br />Nous serons prêts ! Ch</p>`
      },
      {
        "id": 122,
        "name": "DIVIN ROCHER, Refuge sûr : L'abri pour nous dans la tempête",
        "url": "./../../../assets/audios/CEV122.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. DIVIN ROCHER, Refuge sûr :<br />L‟abri pour nous dans la tempête !<br />Notre défense en combat dur :<br />L‟abri pour nous dans la tempête !</p>
        <p><br />Chœur :<br />Oui, Jésus est le Roc dans un pays<br />troublé<br />Un pays troublé. (bis)<br />Oui, Jésus est le roc dans un pays<br />troublé:<br />L’abri pour nous dans la tempête !</p>
        <p><br />2. Une ombre au jour, un mur la nuit:<br />L‟abri pour nous dans la tempête !<br />Nulle peur donc de l‟ennemi :<br />L‟abri pour nous dans la tempête! Ch</p>
        <p><br />3.Si l‟orage éclate alentour :<br />L‟abri pour nous dans la tempête !<br />Nous restons forts par son<br />secours:<br />L‟abri pour nous dans la tempête! Ch.</p>
        <p><br />4.Divin Rocher, Refuge aimé :<br />L‟abri pour nous dans la tempête !<br />Sois notre Aide à tout jamais :<br />L‟abri pour nous dans la tempête!<br />Ch.</p>`
      },
      {
        "id": 123,
        "name": "ROI de ma vie, reçois l'hommage",
        "url": "./../../../assets/audios/CEV123.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. ROI de ma vie, reçois l'hommage,<br />Sois adoré, exalté !<br />De ma misère, mon esclavage,<br />Mourant Tu m‟as sauvé.</p>
        <p><br />Chœur<br />Que jamais je n’oublie, ô Dieu,<br />Ton grand’amour si merveilleux !<br />Garde toujours devant mes yeux<br />Le Christ mourant en croix !</p>
        <p><br />2. Agonisant sur le calvaire<br />Je vois souffrir pour moi<br />Buvant la coupe, si pleine, amère,<br />Toi, Sauveur, à la croix. Ch.</p>
        <p><br />3. Déposé dans un froid tombeau,<br />Ayant rendu Ton âme,<br />Ton corps brisé reçut le repos<br />Après une mort infâme. Ch.</p>
        <p><br />4. Sauveur, je Te prie, aide-moi<br />A suivre Ton modèle,<br />Portant à chaque instant ma croix,<br />Restant toujours fidèle. Ch.</p>
        <p><br />5. Et chauffe en moi un feu vivant,<br />Allumé au Calvaire,<br />Pour annoncer aux cœurs errants<br />Ton amour salutaire. Ch.</p>`
      },
      {
        "id": 124,
        "name": "QUAND la Bible ici-bas !",
        "url": "./../../../assets/audios/CEV124.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. QUAND la Bible ici-bas !<br />Illumine nos pas,<br />De sa gloire, Dieu vient nous<br />remplir.<br />Quand je veux ce qu' il veut,<br />En son nom je le peux<br />Simplement il faut croire, obéir.</p>
        <p><br />Chœur :<br />Croire, obéir :<br />Pour que Dieu puisse ouvrir<br />Les écluses célestes,<br />Il faut croire, obéir.</p>
        <p><br />2. Veux-tu la liberté,<br />Le bonheur, la santé ?<br />Que ton seul but soit de le servir !<br />Car l‟esprit n‟est donné<br />Avec la joie, la paix,<br />Qu'à celui qui veut croire, obéir.</p>
        <p><br />3. Les fardeaux, les labeurs,<br />Le chagrin et les pleurs,<br />A mon bien Dieu les fait concourir.<br />Ils deviendront au ciel<br />Des trésors éternels.<br />Simplement il faut croire, obéir.</p>
        <p><br />4. Nous pouvons dépasser<br />Nos incapacités,<br />Aux desseins éternels nous ouvrir<br />De nouveaux horizons,<br />Une vaste moisson...<br />Simplement il faut croire, obéir.</p>
        <p><br />5. A Ses ordres soumis<br />Sans aucun compromis :<br />Alors le Tout-Puissant peut agir.<br />Il nous ouvre les flots,<br />Fait tomber Jéricho.<br />Simplement il faut croire, obéir</p>`
      },
      {
        "id": 125,
        "name": "DEBOUT, sainte cohorte",
        "url": "./../../../assets/audios/CEV125.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. DEBOUT, sainte cohorte,<br />Soldats du Roi des rois !<br />Tenez d‟une main forte<br />L‟étendard de la croix !<br />Au sentier de la gloire<br />Jésus-Christ vous conduit.<br />De victoire en victoire<br />Il mène qui le suit.</p>
        <p><br />2. La trompette résonne :<br />Debout ! Vaillants soldats !<br />L‟immortelle couronne<br />Est le prix des combats.<br />Si l‟ennemi fait rage,<br />Soyez fermes et forts !<br />Redoublez de courage,<br />S‟il redouble d‟efforts.</p>
        <p><br />3. Debout pour la bataille,<br />Partez, n‟hésitez plus !<br />Pour que nul ne défaille,<br />Regardez à Jésus !<br />De l‟armure invincible,<br />Soldats, revêtez - vous !<br />Le triomphe est possible<br />Pour qui lutte à genoux.</p>
        <p><br />4. Debout, debout encore !<br />Luttez jusqu' au matin.<br />Déjà brille l‟aurore<br />A l‟horizon lointain.<br />Bientôt jetant nos armes<br />Aux pieds du Roi des rois !<br />Les chants après les larmes,<br />Le trône après la croix !</p>`
      },
      {
        "id": 126,
        "name": "FRÈRES, en avant Dans la sainte guerre !",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. FRÈRES, en avant<br />Dans la sainte guerre !<br />Suivons l‟étendard de la croix !<br />Luttons sans crainte !<br />Notre Chef demeure<br />Avec nous dans chaque combat.</p>
        <p><br />Chœur :<br />Christ notre Roi,<br />A Toi nous rendons la gloire.<br />Christ notre Roi,<br />A Toi appartient notre vie</p>
        <p><br />2. Prenons les armes !<br />L‟Esprit nous fortifie,<br />Nous fait triompher de Satan.<br />Toujours en avant !<br />Jamais en arrière !<br />Voilà la devise des vaillants.</p>
        <p><br />3. Christ nous dirige,<br />Jamais ne nous délaisse<br />Même dans le plus fort combat.<br />Donc, nous le suivons,<br />L‟étendard ne se baisse.<br />Car Il est déjà Roi des rois</p>`
      },
      {
        "id": 127,
        "name": "LA LUTTE suprême Nous appelle tous",
        "url": "./../../../assets/audios/CEV127.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. LA LUTTE suprême<br />Nous appelle tous<br />Et Jésus Lui-même<br />marche devant nous.<br />Que Sa vue enflamme<br />Tous Ses combattants<br />Et soutienne l‟âme<br />Des plus hésitants</p>
        <p><br />Chœur :<br />Du Christ, la bannière<br />Se déploie au vent.<br />Pour la sainte guerre,<br />Soldats en avant !</p>
        <p><br />2. L‟ennemi redoute<br />le nom seul du Roi.<br />Il fuit en déroute<br />Au cri de la foi.<br />Acclamons ensemble<br />Jésus d‟un seul cœur<br />Et que l‟enfer tremble<br />A ce nom vainqueur. Ch.</p>
        <p><br />3. Nous suivons la trace<br />Des saints d‟autrefois :<br />Par la même grâce,<br />Sous les mêmes lois,<br />Vivant de miracles<br />L‟Eglise de Dieu,<br />De tous les obstacles,<br />Triomphe en tout lieu. Ch.</p>
        <p><br />4. Que les ans s‟écoulent,<br />Que de toutes parts,<br />A grand bruit s‟écroulent<br />Trônes et remparts :<br />Notre citadelle,<br />Ferme contre tout,<br />48<br />L'Eglise fidèle<br />Restera debout. Ch.</p>
        <p><br />5. En avant jeunesse!<br />Que ta noble ardeur<br />Jamais ne connaisse<br />Ni honte ni peur!<br />Ton chef invincible<br />Marche devant toi<br />Et tout est possible<br />Aux hommes de foi</p>
        <p><br />6. Reçois, Chef suprême,<br />Monarque éternel,<br />D‟un peuple qui T‟aime<br />Le vœu solennel.<br />Gloire, amour, hommage<br />Au Ressuscité !<br />Qu' Il soit, d‟âge en âge<br />Partout exalté ! Ch</p>`
      },
      {
        "id": 128,
        "name": "Christ est ressuscité",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. CHRIST est ressuscité<br />Qu' en des chants joyeux,<br />Son triomphe en tous lieux<br />Soit exalté !</p>
        <p><br />Chœur :<br />A Toi la gloire et l’honneur,<br />O Sauveur, ô puissant Rédempteur!<br />Du sépulcre Tu sortis vainqueur<br />Prince de vie et Prince de paix.<br />Gloire à Toi, gloire à Toi,<br />Gloire à Toi, gloire à jamais !</p>
        <p><br />2. Christ est ressuscité,<br />Cherche en Lui toujours,<br />O peuple racheté,<br />Force et secours. Ch.</p>
        <p><br />3. Christ est ressuscité,<br />Par Lui nous vivons<br />Et dans l‟éternité<br />Nous régnerons. Ch.</p>`
      },
      {
        "id": 129,
        "name": "Chantons du Seigneur la bonté",
        "url": "./../../../assets/audios/CEV129.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. CHANTONS du Seigneur la<br />bonté<br />Pour tout Son peuple racheté<br />Sauveur divin, Sauveur parfait,<br />Jésus fait bien tout ce qu' Il fait.</p>
        <p><br />Chœur :<br />Toute ma vie je chanterai,<br />Je chanterai, je chanterai.<br />Toute ma vie je chanterai :<br />Jésus fait bien tout ce qu' Il fait.</p>
        <p><br />2. Tout l‟univers dit Son pouvoir,<br />Mais Son amour qui sait le voir<br />C‟est à la croix qu' il apparaît,<br />Jésus fait bien tout ce qu' Il fait. Ch.</p>
        <p><br />3. Pour me sauver, pécheur perdu,<br />Dans l‟abîme, Il est descendu,<br />Quand déjà Satan m‟entraînait.<br />Jésus fait bien tout ce qu' Il fait. Ch.</p>
        <p><br />4. C‟est en vain que le tentateur<br />Veut me ravir à mon Sauveur :<br />De Ses bras qui m‟arracherait ?<br />Jésus fait bien tout ce qu'Il fait. Ch</p>`
      },
      {
        "id": 130,
        "name": "Seigneur, attire mon cœur à Toi",
        "url": "./../../../assets/audios/CEV130.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. SEIGNEUR, attire<br />Mon cœur à Toi,<br />Je Te désire<br />Tout près de moi,<br />Ma délivrance<br />Dans le danger,<br />C‟est Ta présence<br />Divin Berger, (bis)</p>
        <p><br />2. Par Ta puissance,<br />Brise, soumets<br />Ma résistance<br />A tout jamais,<br />Courbe mon être,<br />Ma volonté<br />Sois-en le Maître<br />Incontesté (bis)</p>
        <p><br />3. Quand je contemple,<br />Près de Ta croix,<br />Ton grand exemple,<br />Jésus, mon Roi,<br />Ah ! Je n‟aspire<br />Qu'à m‟immoler,<br />Tant je désire<br />Te ressembler ! (bis)</p>
        <p><br />4. Prompt, je m‟élance,<br />Pour T‟obéir,<br />Prompt, je m‟avance<br />Pour Te servir ;<br />Mais sous Ton aile,<br />Loin du péché,<br />Sauveur fidèle,<br />Tiens-moi caché. (bis)</p>`
      },
      {
        "id": 131,
        "name": "La voix du Seigneur m‟appelle",
        "url": "./../../../assets/audios/CEV131.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. LA VOIX du Seigneur m‟appelle :<br />Prends ta croix et viens, suis-moi !<br />Je réponds : Sauveur fidèle,<br />Me voici, je suis à Toi</p>
        <p><br />Chœur :<br />Jusqu' au bout je veux Te suivre,<br />Dans les bons, les mauvais jours,<br />A Toi pour mourir et vivre,<br />A Toi Jésus, pour toujours.</p>
        <p><br />2. Mais le chemin du Calvaire<br />Est étroit et périlleux,<br />C‟est un chemin solitaire,<br />Difficile et ténébreux. Ch.</p>
        <p><br />3. Il faut quitter ceux qu'on aime,<br />Savoir être mal jugé,<br />Endurer l‟injure même,<br />Du monde être méprisé. Ch.</p>
        <p><br />4. Oui, perdre sa propre vie,<br />Consentir à n'être rien,<br />N‟avoir qu'une seule envie :<br />Aimer Jésus, le seul bien ! Ch.</p>
        <p><br />5. Jésus donne grâce et gloire<br />Pour Le suivre pas à pas.<br />Avec Lui, joie et victoire,<br />Paix et bonheur ici-bas ! Ch.</p>`
      },
      {
        "id": 132,
        "name": "QUAND le vol de la tempête",
        "url": "./../../../assets/audios/CEV132.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. QUAND le vol de la tempête<br />Vient assombrir ton ciel bleu,<br />Au lieu de baisser la tête,<br />Compte les bienfaits de Dieu.</p>
        <p><br />Chœur :<br />Compte les bienfaits de Dieu,<br />Mets-les tous devant tes yeux,<br />Tu verras, en adorant,<br />Combien le nombre en est grand.</p>
        <p><br />2. Quand, sur la route glissante,<br />Tu chancelles sous ta croix,<br />Pense à cette main puissante<br />Qui a béni tant de fois. Ch.</p>
        <p><br />3. Si tu perds dans le voyage<br />Plus d‟un cher et doux trésor,<br />Pense au divin héritage<br />Qui là-haut te reste encore. Ch.</p>
        <p><br />4. Bénis donc, bénis sans cesse<br />Ce Père qui, chaque jour,<br />Répand sur toi la richesse<br />De Son merveilleux amour. Ch.</p>`
      },
      {
        "id": 133,
        "name": "ESPÈRE en Dieu quand la nuit sombre Voile le ciel et l'horizon",
        "url": "./../../../assets/audios/CEV133.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. ESPÈRE en Dieu quand la nuit<br />sombre<br />Voile le ciel et l'horizon<br />Jamais là-haut ne règne l'ombre<br />Là-haut t'attend une maison<br />Espère en Dieu quand la tempête<br />Contre la nef jette ses flots<br />Un mot vainqueur<br />Déjà s'apprête<br />A commander paix et repos.</p>
        <p><br />2. Espère en Dieu quand la<br />souffrance<br />Brisant ton corps, trouble ton cœur<br />Chez Lui jamais l'indifférence<br />Ne le distrait de ton malheur<br />Espère en Dieu quand sonne<br />l'heure<br />D'abandonner les biens d'en bas.<br />Crois aux trésors de Sa demeure<br />Car Son amour t‟ouvre Ses bras.</p>
        <p><br />3. Espère en Dieu quand on t'oublie<br />Ou qu'on te raille avec dédain<br />Pour te sauver, jamais ne plie !<br />Va plutôt seul sur ton chemin<br />Espère en Dieu quand ton pied<br />glisse<br />Sous les efforts du tentateur<br />Saisis la main libératrice<br />Qui te rendra toujours vainqueur.</p>`
      },
      {
        "id": 134,
        "name": "QU' ON batte des mains !",
        "url": "./../../../assets/audios/CEV134.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. QU' ON batte des mains !<br />Que tous les humains,<br />En cet heureux jour,<br />Viennent tour à tour<br />D‟un chant solennel<br />Louer l‟eternel.<br />Peuple, il vous faut<br />Craindre le Très - Haut,<br />Le grand Roi qui peut<br />Faire quand Il veut<br />Trembler à Sa voix<br />Les plus puissants rois.</p>
        <p><br />2. Par Son grand pouvoir,<br />Il nous fera voir<br />Les peuples soumis ;<br />Et nos ennemis<br />Par Lui châtiés<br />Seront sous nos pieds<br />Ce Maître si doux<br />A choisi pour nous<br />La meilleure part,<br />Et sous Son regard,<br />Israël en paix<br />Triomphe à jamais.</p>
        <p><br />3. Peuples, Le voici<br />Qui se montre ici.<br />Que pour L‟honorer,<br />Que pour L‟adorer,<br />On aille au-devant<br />Du grand Dieu vivant !<br />Chantez donc, chantez<br />Ses grandes bontés ;<br />D‟un cœur plein de foi<br />Chantez notre Roi,<br />Le vrai, le seul Dieu,<br />Qui règne en tout lieu.</p>`
      },
      {
        "id": 135,
        "name": "PRÈS du trône de la grâce et de la paix",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. PRÈS du trône de la grâce<br />et de la paix,<br />J‟ai reçu la promesse d‟un Dieu<br />parfait.<br />En Jésus j‟ai la victoire<br />Par Sa mort expiatoire,<br />Près du trône de la grâce et de<br />la paix.</p>
        <p><br />Chœur :<br />Viens, oh ! Viens, Viens avec moi,<br />Viens, oh ! Viens, viens à la croix !<br />A la croix, viens et vois !<br />Viens, mon frère, viens ma sœur,<br />viens à la croix !</p>
        <p><br />2 Fuis le monde, vanité des vanités :<br />Point de paix pour l‟âme en ses<br />frivolités.<br />Par lui Satan nous opprime,<br />Nous conduisant à l‟abîme.<br />Fuis le monde, vanité des vanités!<br />Ch</p>
        <p><br />3. Je veux être un vaillant soldat<br />du Seigneur,<br />Lutter, combattre toujours avec<br />ferveur.<br />Et, rempli de confiance,<br />J‟accepterai la souffrance.<br />Je veux être un vaillant soldat du<br />Seigneur. Ch.</p>
        <p><br />4. Quand devant moi s‟ouvriront les<br />portes d‟or<br />Et qu' enfin j‟atteindrai le céleste<br />port,<br />Un bonheur pur et sans ombre,<br />Remplacera la nuit sombre,<br />Quand devant moi s‟ouvriront les<br />portes d‟or. Ch.</p>`
      },
      {
        "id": 136,
        "name": "SEIGNEUR, ta mort à Golgotha",
        "url": "./../../../assets/audios/CEV136.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. SEIGNEUR, ta mort à Golgotha<br />Me fait T‟aimer sans cesse<br />Et ne permets pas, mon grand Roi,<br />Que jamais je Te laisse.</p>
        <p><br />Chœur :<br />Je T’aimerai sans cesse,<br />Mon Sauveur, mon Sauveur<br />Je T’aimerai sans cesse<br />Pour tous Tes grands bienfaits.</p>
        <p><br />2. Du châtiment de mes péchés,<br />Qui était mon mérite,<br />Ton sacrifice m‟a sauvé<br />Dans Ta plus forte lutte Ch<br /><br />3. Ton sang versé me purifie<br />De toutes mes souillures.<br />Ton corps brisé pour moi acquit<br />Pardon par ses blessures. Ch.</p>
        <p><br />4. Y a-t-il comme Toi un autre ami<br />Qui sans réserve m‟aime,<br />Qui m‟aide dans toute ma vie<br />Donnant ses biens suprêmes ? Ch.</p>
        <p><br />5. Beaucoup peuvent T‟abandonner,<br />Je T‟aimerai sans cesse.<br />Pour Ton amour et Ta bonté<br />A jamais je T‟embrasse. Ch</p>`
      },
      {
        "id": 137,
        "name": "RÉVEILLE-NOUS, Seigneur !",
        "url": "./../../../assets/audios/CEV137.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. RÉVEILLE-NOUS, Seigneur !<br />Fais montrer Ta présence !<br />A Ta parole ouvre nos cœurs<br />Et parle avec puissance !</p>
        <p><br />Chœur :<br />Réveille-nous Seigneur !<br />Pendant que nous prions<br />Descends, Seigneur, descends<br />vers nous !<br />Viens glorifier Ton nom !</p>
        <p><br />2 Réveille-nous Seigneur !<br />Pour exalter Ton nom<br />Mets Ton amour dans chaque<br />cœur<br />Fais de nous des flambeaux. Ch</p>
        <p><br />3. Réveille-nous, Seigneur,<br />Et bénis Ta Parole,<br />Que, par sa force et vérité,<br />Elle nos vies contrôle. Ch.</p>
        <p><br />4. Réveille-nous, Seigneur !<br />Envoie ton Saint-Esprit<br />Qu' Il nous remplisse de ferveur<br />De chercher les perdus. Ch</p>`
      },
      {
        "id": 138,
        "name": "SEIGNEUR, ce que mon cœur réclame",
        "url": "./../../../assets/audios/CEV138.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. SEIGNEUR, ce que mon cœur<br />réclame<br />C'est le Feu (Ter)<br />Que sur moi descende la flamme<br />De Ton Feu (Ter)<br />Que ce soit une chambre haute,<br />Qu'une nouvelle Pentecôte<br />Fasse de nous de vrais apôtres<br />Pleins de Feu (Ter)</p>
        <p><br />2. Le seul secret de la victoire,<br />C'est le Feu (Ter)<br />Nous voulons refléter Ta gloire<br />Par le Feu (Ter)<br />O Dieu Tout-Puissant, qui nous<br />aime<br />Viens nous affranchir de nousmêmes<br />Remplis-nous d‟un amour suprême<br />Par le feu (Ter)</p>
        <p><br />3. Nous voulons porter l‟espérance<br />par le Feu (Ter)<br />Et proclamer la délivrance<br />Par le Feu (Ter)<br />Ton règne vienne sur la terre<br />Ta volonté soit faite ô Père<br />Exauce enfin notre prière<br />Par le Feu (Ter)</p>`
      },
      {
        "id": 139,
        "name": "JÉSUS m’a dit Mets ta main dans Ma main et viens",
        "url": "./../../../assets/audios/CEV139.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref. JÉSUS m’a dit<br />Mets ta main dans Ma main et viens<br />Toute ta vie tu seras Mon témoin ;<br />Et quand j’’ai mis<br />Ma main dans Sa forte main,<br />J’’ai reçu de Lui<br />La puissance de l’esprit Saint.</p>
        <p><br />1. Je connais l‟eau vive<br />Qui nous désaltère<br />Je l‟ai découverte à Golgotha ;<br />Il y a d‟innombrables fleuves sur<br />la terre<br />Mais Jésus seul est Source de j‟oie</p>
        <p><br />2. Tout autour de moi<br />Je vois tant de souffrances<br />Tant de cœurs qui sont si<br />malheureux<br />Que l‟esprit me pousse<br />A rompre mon silence<br />Pour crier partout la paix de<br />Dieu.</p>
        <p><br />3. Et si Dieu m‟entraîne<br />Jusqu'au bout du monde<br />Pour que Son amour soit<br />proclamé,<br />Je ne compte pas sur mes<br />forces profondes<br />Mais sur Son Esprit qu'Il m‟a<br />donné.</p>`
      },
      {
        "id": 140,
        "name": "EN Christ seul est mon espérance",
        "url": "./../../../assets/audios/CEV140.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. EN Christ seul est mon<br />espérance;<br />Sa justice est mon assurance.<br />Il est devant Dieu mon appui.<br />Je n‟en veux point d‟autre que<br />Lui.</p>
        <p><br />Chœur :<br />Jésus est ma retraite sûre<br />Le rocher en qui je m’assure.</p>
        <p><br />2.Tout autre asile est périssable ;<br />Tout autre appui n‟est que du<br />sable<br />Qui n‟a posé ce fondement<br />Travaille et souffre vainement. Ch.</p>
        <p><br />3. Lorsque sur moi s‟abat l‟orage,<br />Sa croix ranime mon courage.<br />Quand tout faiblit autour de moi,<br />Sa présence soutient ma foi Ch.</p>
        <p><br />4.Quand la trompette retentira<br />Que je sois prêt pour Son appel,<br />Revêtu de Sa sainteté,<br />Pur à Ses yeux devant le Trône.<br />Ch</p>`
      },
      {
        "id": 141,
        "name": "VIENS, mon âme Te réclame",
        "url": "./../../../assets/audios/CEV141.WAV",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. VIENS, mon âme Te réclame,<br />Car c‟est Toi qui m‟as cherché.<br />Pour Te suivre je Te livre<br />Mon cœur libre de tout péché.</p>
        <p><br />Chœur :<br />Viens ! Mon âme Te réclame;<br />Mon bonheur est tout en Toi.<br />Je T’adore, Je T’implore ;<br />O Jésus ! Demeure en moi !</p>
        <p><br />2. Oui, Ta grâce seule efface<br />Toutes mes iniquités ;<br />Tu pardonnes, Tu me donnes<br />La paix de Tes rachetés. Ch</p>
        <p><br />3. Quand je doute, quand ma route<br />Passe auprès du tentateur,<br />Ta main sûre, me rassure<br />Et me rend plus que vainqueur. Ch.</p>
        <p><br />4. Ah ! demeure, à chaque heure<br />Mon rempart, Mon défenseur,<br />Ma victoire, et ma gloire,<br />Mon Jésus, Mon seul Sauveur ! Ch.</p>`
      },
      {
        "id": 142,
        "name": "O SEIGNEUR Tu es le Roi ",
        "url": "./../../../assets/audios/CEV142.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1.O SEIGNEUR Tu es le Roi !<br />Tu règnes à toujours.<br />O Seigneur, Tu es pour moi le<br />secours<br />Tu me dis : Va, ne crains rien.<br />Tu es mon Gardien.<br />O Seigneur par Toi je suis<br />vainqueur!</p>
        <p><br />2.Que je sois dans l‟allégresse,<br />ou dans le malheur,<br />Que mon cœur chante sans<br />cesse sa victoire.<br />Tu es là, oui à toute heure,<br />Tu sèches mes pleurs.<br />Tu guéris et redonnes la vie !</p>
        <p><br />3. O Jésus, Tu es venu dans<br />l‟humanité.<br />O Jésus Tu es venu nous sauver,<br />Par Ton sang Tu as lavé nos<br />iniquités.<br />O Seigneur, nous voulons<br />T‟acclamer!</p>`
      },
      {
        "id": 143,
        "name": "SEIGNEUR, Tu donnes Ta grâce",
        "url": "./../../../assets/audios/CEV143.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. SEIGNEUR, Tu donnes Ta grâce<br />Au cœur qui regarde à Toi.<br />Ah ! Que sa douce efficace<br />Se répande aussi sur moi !<br />Oui sur moi (bis)<br />Se répande aussi sur moi !</p>
        <p><br />2. Père tendre et secourable,<br />Je fus rebelle à Ta loi ;<br />Quoique impur et misérable<br />Oh ! Pardonne et bénis - moi !<br />Bénis-moi (bis)<br />Oh ! Pardonne et bénis - moi !</p>
        <p><br />3. Rédempteur toujours propice,<br />Je veux m‟attacher à Toi<br />J‟ai faim, j‟ai soif de justice,<br />Je T‟appelle, réponds-moi !<br />Réponds-moi (bis)<br />Je T‟appelle, réponds-moi !</p>
        <p><br />4. Saint-Esprit, souffle de vie<br />Viens en mon cœur par la foi !<br />Dans le sang qui purifie,<br />De tout péché lave-moi !<br />Lave-moi ! (bis)<br />De tout péché lave-moi !</p>
        <p><br />5. Par Ton amour, ô bon Père,<br />Par le sang versé pour moi,<br />Par l‟esprit qui seul opère,<br />Dieu trois fois saint, sauve-moi !<br />Sauve-moi ! (bis)<br />Dieu trois fois saint, sauve-moi !</p>`
      },
      {
        "id": 144,
        "name": "C’EST TOI JÉSUS, que recherche mon âme",
        "url": "./../../../assets/audios/CEV144.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1.C’EST TOI JÉSUS, que<br />recherche mon âme<br />A Te trouver se bornent mes<br />souhaits<br />C‟est Ton regard que sur moi j‟e<br />réclame;<br />Rends-moi Seigneur, rends-moi<br />Ta douce Paix</p>
        <p><br />2 Longtemps j‟errai dans les<br />sentiers du monde<br />Ne connaissant ni Ton nom ni Ta<br />loi;<br />Tu me cherchas dans cette nuit<br />profonde<br />Et pour toujours, m‟en tiras par la<br />foi.</p>
        <p><br />3. De Ton amour la voix se fit<br />entendre;<br />J‟appris alors que Tu m‟as<br />racheté,<br />Et Ton Esprit à mon cœur fit<br />comprendre<br />Ce qu' est pour nous, ô Dieu! Ta<br />charité</p>
        <p><br />4.Prends donc pitié de ma grande<br />misère:<br />Soumets mon cœur, brise sa<br />dureté;<br />A Golgotha, mon âme Te fut<br />chère<br />Je compte, ô Dieu! Sur Ta fidélité</p>`
      },
      {
        "id": 145,
        "name": "IL ME CONDUIT, douce pensée",
        "url": "./../../../assets/audios/CEV145.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>IL ME CONDUIT, douce pensée !<br />Repos pour mon âme lassée !<br />En tout lieu, Son regard me suit,<br />Et par la main il me conduit.</p>
        <p><br />Chœur:<br />Il me conduit, il me conduit !<br />Désormais pour Lui je veux vivre;<br />Brebis fidèle, je veux suivre<br />Le bon Berger qui me conduit.</p>
        <p><br />2. Jésus sur moi veille sans cesse :<br />Dans la joie et dans la tristesse,<br />Dans le jour comme dans la nuit,<br />Pas à pas Sa main me conduit.Ch</p>
        <p><br />3. Comme un rempart Il me protège,<br />Il me préserve de tout piège ;<br />Loin de moi l‟ennemi s‟enfuit,<br />Quand par la main Christ me<br />conduit.Ch.</p>
        <p><br />4. Quand la trompette aura sonné,<br />Mon œuvre ici-bas terminée,<br />Je dirai au travers des nuées :<br />Alléluia ! Il m‟a conduit ! Ch</p>`
      },
      {
        "id": 146,
        "name": "J’ENTRERAI dans ses parvis",
        "url": "./../../../assets/audios/CEV146.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 J’ENTRERAI dans ses parvis<br />Avec joie dans mon cœur,<br />J‟entrerai dans ses parvis<br />Avec louange Je dirai ; voici le jour<br />Le grand jour du Seigneur,<br /><br />Je chanterai, car Il m'a délivré,<br />Il m'a délivré, Il m'a délivré<br />Je chanterai car Il m'a délivré bis</p>
        <p><br />2 Je chanterai car Il est mon<br />Sauveur.</p>
        <p><br />3 Je chanterai car Il est mon<br />Seigneur</p>
        <p><br />4 Je chanterai car Il est Roi des<br />rois.</p>`
      },
      {
        "id": 147,
        "name": "QUE ferai-je pour Toi",
        "url": "./../../../assets/audios/CEV147.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />QUE ferai-je pour Toi<br />Tu as tout fait pour moi,<br />Que ferai-je pour Toi<br />Tu as tout fait pour moi.</p>
        <p><br />1 Tu es venu dans ce monde perdu<br />Me délivrer du joug des ténèbres.</p>
        <p><br />2 Je suis faible, mais je compte sur<br />Toi<br />Pour accomplir la tâche que Tu<br />veux</p>
        <p><br />3 J‟irai partout appeler les<br />pécheurs<br />J‟annoncerai Ta parole surtout.</p>
        <p><br />4 Venez amis, chantons pour louer<br />Dieu,<br />Qui dans sa grâce fait de nous<br />ses enfants.</p>
        <p><br />5 Oui, je te loue, de tout ce que tu<br />fais,<br />Merci beaucoup de m'avoir tant<br />aimé.</p>`
      },
      {
        "id": 148,
        "name": "JE SUIS dans la joie",
        "url": "./../../../assets/audios/CEV148.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />JE SUIS dans la joie<br />Quand on me dit bis<br />Allons dans la maison<br />de l'Eternel</p>
        <p><br />1 Un jour dans ses parvis<br />Vaut mieux que mille ailleurs. (bis)</p>
        <p><br />2 Entrons dans ses parvis<br />Avec des actions de grâces. (bis)</p>
        <p><br />3 Si Dieu est avec nous<br />Qui sera contre nous ? (bis)</p>
        <p><br />4 Jésus est Roi des rois<br />Et Seigneur des seigneurs. (bis)</p>`
      },
      {
        "id": 149,
        "name": "QUEL sort merveilleux d‟être sauvé",
        "url": "./../../../assets/audios/CEV149.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>QUEL sort merveilleux d‟être sauvé,<br />Sauvé par le sang de l‟agneau,<br />Sauvé par sa grâce infinie,<br />A jamais un enfant de Dieu !</p>
        <p><br />Chœur :<br />Sauvé, sauvé.<br />Sauvé par le sang de l’agneau!<br />Sauvé, sauvé,<br />A jamais un enfant de Dieu !</p>
        <p><br />Sauvé, quelle j‟oie ineffable !<br />Des mots ne peuvent l‟exprimer.<br />Je sais que sa douce présence<br />M‟accompagnera à jamais.</p>
        <p><br />Je pense à mon Sauveur sublime<br />Le louant d‟un cœur enchanté.<br />Je chante, je ne peux pas me taire.<br />Son amour m‟a rendu heureux.</p>
        <p><br />Au ciel réservé par le Maître,<br />M‟attend la couronne de vie<br />Et j‟oint aux rangs des fidèles<br />Je demeurerai près de lui.</p>
        <p><br />Je sais, je verrai dans sa gloire<br />Le Roi qui règne sur moi<br />Et qui par sa pleine victoire<br />Me rend fort de garder ses lois.</p>`
      },
      {
        "id": 150,
        "name": "ENTENDS-tu le chant joyeux",
        "url": "./../../../assets/audios/CEV150.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>ENTENDS-tu le chant joyeux?<br />Jésus sauve aujourd‟hui !<br />Il retentit en tous lieux :<br />Jésus sauve aujourd‟hui !<br />C‟est un cri de délivrance,<br />Un cantique d‟espérance,<br />Qui remplit l‟espace immense :<br />Jésus sauve aujourd‟hui !</p>
        <p><br />Partout élève la voix :<br />Jésus sauve aujourd‟hui !<br />Vaillant héraut de la croix,<br />Jésus sauve aujourd‟hui !<br />A parler, Jésus t‟appelle,<br />Répands au loin la nouvelle.<br />En connais-tu de plus belle ?<br />Jésus sauve aujourd‟hui !</p>
        <p><br />Répète au pécheur contrit ;<br />Jésus sauve aujourd‟hui !<br />Ceux que le mal asservit<br />Jésus sauve aujourd‟hui !<br />Va jusqu‟à l‟île lointaine,<br />Briser du captif la chaîne,<br />Redire au cœur dans la peine<br />Jésus sauve aujourd‟hui !</p>
        <p><br />Jusqu‟au confins des déserts,<br />Jésus sauve aujourd‟hui !<br />Jusque par de-là les mers,<br />Jésus sauve aujourd‟hui !<br />Que d‟un pôle à l‟autre pôle<br />Coure la sainte parole<br />Qui relève, instruit, console :<br />Jésus sauve aujourd‟hui !</p>`
      },
      {
        "id": 151,
        "name": "IL EST vivant",
        "url": "./../../../assets/audios/CEV151.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>IL EST vivant, il est vivant<br />Même s'il y a deux mille ans (bis)<br />Qu'il est mort pour nous.</p>
        <p><br />1 Avec l'ange, au sépulcre<br />Devant Marie étonnée ;<br />Les pèlerins d'Emmaüs<br />A toujours consolés<br />Avec tous les apôtres<br />Par l'Esprit transformés<br />Il nous faut crier,<br />Crier, la vérité... Ch.</p>
        <p><br />2 Avec les premiers martyrs<br />Par les lions déchirés ;<br />Avec tous les chrétiens<br />Des siècles passés<br />Et puis tous les témoins.<br />Par le monde dispersés<br />Il nous faut crier,<br />Crier la vérité... Ch.</p>`
      },
      {
        "id": 152,
        "name": "SOURCE de grâce, source efficace",
        "url": "./../../../assets/audios/CEV152.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>SOURCE de grâce, source efficace,<br />Qui du mont Golgotha jaillit !<br />La mort subie par Christ, la vie,<br />Nous dit : Tout est accompli !</p>
        <p><br />Chœur :<br />Oui, je veux croire, Oui, je puis<br />croire<br />Que Jésus-Christ est mort pour moi !<br />Sa mort sanglante et triomphante<br />Me rend libre par la foi.</p>
        <p><br />Source de vie : Nos maladies,<br />Jésus nous en a délivrés !<br />Je sens renaître dans tout mon être<br />La vigueur et la santé.</p>
        <p><br />Jésus envoie l‟esprit de j‟oie<br />Dans les cœurs lavés par le sang :<br />L‟Esprit de gloire et de victoire<br />Sur les rachetés descend !</p>
        <p><br />Pour récompense de ses<br />souffrances,<br />Devant son trône Jésus voit<br />La sainte église qu‟il s‟est acquise<br />Au prix du sang de la croix.</p>`
      },
      {
        "id": 153,
        "name": "DIEU Tu es bon",
        "url": "./../../../assets/audios/CEV153.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>DIEU Tu es bon,<br />Dieu Tu es doux,<br />Dieu Tu es merveilleux,<br />Mon Dieu Tu es excellent.</p>
        <p><br />Excellent est Ton nom,<br />Excellente est Ta force,<br />Dieu Tu es merveilleux,<br />Mon Dieu Tu es excellent</p>`
      },
      {
        "id": 154,
        "name": "JE CHANTERAI ton amour",
        "url": "./../../../assets/audios/CEV154.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />JE CHANTERAI ton amour<br />En union avec les anges<br />Je chanterai ton amour à jamais.<br /><br />1 Je te loue et je t'adore<br />De concert avec les anges<br />Je chanterai ton Saint nom à<br />jamais Ch.</p>
        <p><br />2 Tu m'as sorti des ténèbres<br />Tu m'as sorti de l'enfer<br />Me voici à la lumière de la vie. Ch.</p>
        <p><br />3 Je suis délivré maintenant<br />Du fardeau de mes péchés<br />Je marche avec l'Eternel chaque<br />jour. Ch.</p>
        <p><br />4 Tu m'as donné de l'espoir<br />Et je vis dans la victoire<br />Que tu as conquise pour moi<br />à la croix. Ch.</p>
        <p><br />5 Merci Dieu pour ton Esprit<br />Merci Dieu pour Jésus-Christ<br />Merci Dieu pour la vie que tu m'as<br />donnée. Ch.</p>`
      },
      {
        "id": 155,
        "name": "LE zèle de ta maison,",
        "url": "./../../../assets/audios/CEV155.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur :<br />LE zèle de ta maison,<br />Me dévore comme un feu (4x)</p>
        <p><br />1 Même si mes frères me disent<br />tous "non"<br />Même si mon père me chasse de<br />sa maison,<br />Je ne dirai jamais non à Ton<br />amour,<br />Oui ! à grand JAMAIS, je ne Te<br />dirai non, Ch.</p>
        <p><br />2 Même si je perds tout ce qui<br />m'appartient,<br />Même si je n'ai plus un seul bien,<br />Je ne dirai jamais non à Ta croix,<br />Non ! à grand JAMAIS, je ne Te<br />dirai non, Ch.</p>
        <p><br />3 Même si je perds tous mes amis,<br />Même si je n'ai plus un seul abri,<br />Je ne pourrai jamais m'en aller<br />loin de Toi,<br />Oui ! à grand JAMAIS, je ne Te<br />quitterai. Ch.</p>
        <p><br />4 Mêm'si je dois partir très loin de<br />Cette ville,<br />Mêm'si je dois quitter tous ceux<br />qui sont mes frères,<br />Je ne dirai jamais non à ma foi,<br />Oui, à grand JAMAIS, je ne<br />T'oublierai. Ch.</p>`
      },
      {
        "id": 156,
        "name": "SI seulement tu crois",
        "url": "./../../../assets/audios/CEV156.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 SI seulement tu crois et je crois<br />Si nous prions ensemble,<br />Alors le Saint-Esprit viendra<br />Yaoundé sera sauvé.<br />Yaoundé sera sauvé (bis)<br />Oui le Saint-Esprit descendra,<br />Yaoundé sera sauvé.</p>
        <p><br />2 Cameroun sera sauvé.</p>
        <p><br />3 L'Afrique sera sauvée.</p>
        <p><br />4 Le monde sera sauvé. Etc ...</p>`
      },
      {
        "id": 157,
        "name": "OUI J’ai vu !",
        "url": "./../../../assets/audios/CEV157.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Chœur<br />OUI J’ai vu ! vu !<br />La victoire de Jésus.<br />Gloire soit à Dieu !<br />Gloire soit à Jésus !<br />Oui j’'ai vu ! vu !<br />La victoire de Jésus.<br />Gloire soit à Dieu ! Amen.</p>
        <p><br />1 Quand je regarde devant,<br />Je vois Jésus victorieux ;<br />En regardant derrière<br />Je vois Jésus victorieux ;<br />Regardant à ma droite,<br />Je vois Jésus victorieux ;<br />Quand je me tourne à gauche,<br />Je vois Jésus victorieux. Ch.1</p>
        <p><br />Chœur<br />Oui j’ai vu ! vu !<br />La défaite de Satan.<br />Gloire soit à Dieu !<br />Gloire soit à Jésus!<br />Oui j’ai vu ! vu !<br />La défaite de Satan<br />Gloire soit à Dieu ! Amen.</p>
        <p><br />2 Quand je regarde devant,<br />Je vois Satan à terre ;<br />En regardant derrière,<br />Je vois Satan à terre ;<br />Regardant à ma droite,<br />Je vois Satan à terre ;<br />Quand je me tourne à gauche,<br />Je vois Satan à terre. Ch.2</p>`
      },
      {
        "id": 158,
        "name": "J’AIME le Seigneur",
        "url": "./../../../assets/audios/CEV158.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 J’AIME le Seigneur (ter)<br />De tout mon cœur.</p>
        <p><br />2 Il a souffert (ter)<br />A Golgotha.</p>
        <p><br />3 Son sang coula (ter)<br />Pour mes péchés.</p>
        <p><br />4 Il m'a sauvé (ter)<br />Du lac de feu. Etc...</p>`
      },
      {
        "id": 159,
        "name": "BÉNIS Dieu, ô mon âme",
        "url": "./../../../assets/audios/CEV159.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>BÉNIS Dieu, ô mon âme<br />Et tout ce qui est en moi ;<br />Bénis Dieu, ô mon âme ;<br />N'oublie aucun de ses bienfaits.</p>
        <p><br />1 Il m'a donné plus que la vie,<br />Il a béni tous mes pas,<br />Il m'a gardé dans son amour,<br />N'oublie aucun de ses bienfaits.</p>
        <p><br />(bénis-le) Etc...</p>`
      },
      {
        "id": 160,
        "name": "SEIGNEUR, tu es sûrement bon",
        "url": "./../../../assets/audios/CEV160.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>SEIGNEUR, tu es sûrement bon<br />pour moi, (bis)<br />Seigneur, tu es sûrement,<br />tellement bon pour moi,<br />Tu as fait ce que nul ne peut faire.</p>
        <p><br />1 Tu m'as donné Ton Fils, (ter)<br />Tu es sûrement, tellement bon<br />pour moi,<br />Tu as fait ce que nul ne peut faire.</p>
        <p><br />2 Tu m'as donné Ton Esprit (ter)<br />Tu es sûrement, tellement bon<br />pour moi,<br />Tu as fait ce que nul ne peut faire.<br />Etc...</p>`
      },
      {
        "id": 161,
        "name": "JEHOVAH JIRE, l’eternel pourvoit",
        "url": "./../../../assets/audios/CEV161.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>JEHOVAH JIRE, l’eternel pourvoit:<br />Tu nous as comblé de Tes bienfaits,<br />Et nous vivons en Toi sans regret.<br />Nous voulons crier<br />que c’est Toi le Roi.<br />Toi Seul es digne d’être adoré,<br />Dès maintenant, et pour l’éternité.</p>
        <p><br />Seigneur Jésus, que Tu es<br />merveilleux<br />Ta bonne main se déploie en tous<br />lieux<br />Non seulement pour protéger les<br />Tiens<br />Mais aussi pour répondre à leurs<br />besoins.<br />Voilà ce que Tu fais de Tes enfants,<br />Ceux-là qui T‟estiment plus que<br />l‟argent.</p>
        <p><br />Ta majesté, ô Seigneur est<br />immense,<br />Ta création étale Ta puissance.<br />Et a-t-on jamais entendu parler<br />D‟un dieu qui soit riche comme<br />Yahvé?<br />Car Tu possèdes la terre et les<br />cieux.<br />Qui s‟égalera à Toi, ô mon Dieu ?</p>
        <p><br />S‟il advenait des temps difficiles,<br />C‟est en Toi que nous trouverons<br />asile.<br />Car toutes les générations passées<br />Proclament tout haut Ta fidélité.<br />Seigneur nous saurons nous saisir<br />de Toi<br />Mettrons toute notre espérance en<br />toi, ô mon Dieu !</p>`
      },
      {
        "id": 162,
        "name": "QUI est comme Toi",
        "url": "./../../../assets/audios/CEV162.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>QUI est comme Toi,<br />ô Seigneur bis<br />Qui est comme Toi,<br />ô Seigneur!<br />Parmi les dieux,<br />Qui est comme Toi :<br />Magnifique en sainteté,<br />Digne de louange,<br />Opérant des prodiges ?</p>`
      },
      {
        "id": 163,
        "name": "NUL n'est saint comme l'Eternel",
        "url": "./../../../assets/audios/CEV163.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 NUL n'est saint comme l'Eternel,<br />Il n'y a point d'autre dieu que Toi,<br />Il n'y a point de rocher<br />Comme notre Dieu,<br />Nul n'est saint comme l'Eternel.</p>
        <p><br />2 Nul n'est juste.</p>
        <p><br />3 Nul n'est grand</p>`
      },
      {
        "id": 164,
        "name": "VIENS, oui viens !",
        "url": "./../../../assets/audios/CEV164.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>VIENS, oui viens !<br />Viens dans sa maison,<br />Viens manger à sa table<br />viens, oui viens !</p>
        <p><br />1 Il veut t'ouvrir toute grande bis<br />la porte de sa maison Ch.</p>
        <p><br />2 Il veut t'offrir la plus belle bis<br />place) dans sa maison Ch.</p>
        <p><br />3 Il veut que tu restes toujours bis<br />à la table dans sa maison Ch.</p>
        <p><br />Etc...</p>`
      },
      {
        "id": 165,
        "name": "IL est Roi, Il est Roi",
        "url": "./../../../assets/audios/CEV165.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>IL est Roi, Il est Roi,<br />Il est ressuscité, Il est Roi.<br />Tout genou fléchira,<br />Toute langue confessera<br />Que Jésus-Christ est Roi</p>`
      },
      {
        "id": 166,
        "name": "JE sais que Jésus règne",
        "url": "./../../../assets/audios/CEV166.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>JE sais que Jésus règne,<br />Je sais que Jésus règne,<br />Je sais que Jésus règne,<br />Il règne pour toujours.</p>
        <p><br />1 Il règne dans mon cœur,<br />Il règne au Cameroun,<br />Il règne en Afrique,<br />Je sais que Jésus règne. Ch.</p>
        <p><br />2 Il règne dans ton cœur,<br />Il règne au Canada,<br />Il règne en Amérique,<br />Je sais que Jésus règne. Ch.</p>
        <p><br />3 Il règne sur les rois,<br />Il règne sur les royaumes,<br />Il règne sur les nations,<br />Je sais que Jésus règne. Ch.</p>`
      },
      {
        "id": 167,
        "name": "CRIEZ, criez,",
        "url": "./../../../assets/audios/CEV167.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>CRIEZ, criez, criez sur les<br />montages<br />Criez, criez que Jésus-Christ est<br />Roi.</p>
        <p><br />1 Criez sur les monts des bis<br />Oliviers ! Oliviers ! Ch.</p>
        <p><br />2 Criez dans les rues de bis<br />Yaoundé ! Yaoundé ! Ch.</p>
        <p><br />3 Criez dans les rues de bis<br />Washington ! Washington! Ch.</p>
        <p><br />4 Criez dans les rues de bis<br />New-Delhi ! New-Delhi ! Ch.</p>
        <p><br />5 Criez dans les rues de bis<br />Paris ! De Paris ! Ch.</p>`
      },
      {
        "id": 168,
        "name": "CHANTONS, chantons",
        "url": "./../../../assets/audios/CEV168.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>CHANTONS, chantons sans<br />cesse<br />La bonté du Seigneur !<br />Qu‟une sainte allégresse<br />Remplisse notre cœur.<br />Un salut éternel<br />Est descendu du ciel,<br />Nous avons un Sauveur ! (bis)</p>
        <p><br />2. O! Bonheur ineffable !<br />Dieu n‟est plus irrité !<br />Il pardonne au coupable,<br />Contre Lui révolté.<br />Pour porter nos forfaits,<br />Pour sceller notre paix,<br />Jésus s‟est présenté. (bis)</p>
        <p><br />3. Vers le trône de grâce,<br />Si nous levons les yeux,<br />Nous rencontrons la face,<br />D‟un Sauveur glorieux.<br />Il est notre avocat ;<br />Pour les siens il combat,<br />Toujours victorieux. (bis)</p>
        <p><br />4. Pour diriger la voie,<br />De tous Ses rachetés,<br />Dans leur cœur Il envoie,<br />Ses célestes clartés !<br />Son Esprit nous conduit,<br />Sa grâce nous instruit,<br />Des saintes vérités. (bis)</p>
        <p><br />5. Bientôt, vêtu de gloire,<br />Du ciel Il reviendra !<br />Consommant sa victoire,<br />Il nous affranchira.<br />Et Son heureux enfant,<br />Avec Lui triomphant,<br />Tel qu‟Il est le verra. (bis)</p>`
      },
      {
        "id": 169,
        "name": "PAR tous les saints glorifié",
        "url": "./../../../assets/audios/CEV169.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. PAR tous les saints glorifié,<br />Jésus inspire leurs louanges,<br />Plus belles que le chant des<br />anges:<br />Gloire à l‟agneau (ter) sacrifié !</p>
        <p><br />2. C‟est par Lui qu‟est justifié<br />Tout pécheur qui demande<br />grâce.<br />Prêtres et rois devant Sa face,<br />Chantons l‟agneau (ter) sacrifié!</p>
        <p><br />3. Par le Père magnifié,<br />Tout l‟univers Lui rend hommage.<br />L‟Agneau régnera d‟âge en âge,<br />Gloire à l‟agneau (ter) sacrifié !</p>
        <p><br />4. Par son Esprit vivifié,<br />Je veux jusqu‟à ma dernière<br />heure,<br />Chanter l‟amour qui seul demeure,<br />Gloire à l‟agneau (ter) sacrifié !</p>
        <p><br />5. Pour nous il fut crucifié ;<br />Son sang a racheté notre âme ;<br />C‟est pourquoi notre amour<br />l‟acclame :<br />Gloire à l‟agneau (ter) sacrifié !</p>`
      },
      {
        "id": 170,
        "name": "SANS attendre, je veux tendre,Au bonheur promis",
        "url": "./../../../assets/audios/CEV170.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. SANS attendre, je veux tendre,<br />Au bonheur promis ;<br />Qui s‟élance, qui s‟avance,<br />Obtiendra le prix.<br />De mon Dieu je suis l‟enfant,<br />Et c‟est Lui qui me défend,<br />Donc en route, point de doute,<br />Le but est si grand !</p>
        <p><br />2. Près du trône, la couronne<br />Attend le vainqueur.<br />Nulle trêve ! Qu‟on se lève !<br />A dit le Seigneur.<br />D‟obéir soyons heureux,<br />Point de tièdes, de peureux !<br />Qui se lasse perd sa place,<br />Au banquet des cieux.</p>
        <p><br />3. D‟un pas ferme jusqu‟au terme,<br />Il faut s‟avancer ;<br />Dieu m‟observe, qu‟Il préserve,<br />Mon pied de glisser.<br />Que ce monde et ses attraits,<br />Ne me séduisent jamais !<br />Si sa haine se déchaîne,<br />Que je sois en paix.</p>
        <p><br />4. Dieu de grâce, que Ta face,<br />Luise en mon chemin !<br />Père tendre, Viens me prendre,<br />Par Ta forte main,<br />Toute puissance est à Toi<br />Subviens à ma faible foi ;<br />Ma victoire, c‟est Ta gloire,<br />O mon Dieu, mon Roi !</p>`
      },
      {
        "id": 171,
        "name": "A DIEU soit la gloire",
        "url": "./../../../assets/audios/CEV171.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>A DIEU soit la gloire !<br />Pour Son grand amour<br />Dans mon âme noire s‟est levé le<br />jour.<br />Jésus à ma place, mourut sur la<br />croix.<br />Il m‟offre sa grâce et je la reçois.</p>
        <p><br />Ref:<br />Gloire à Dieu, gloire à Dieu!<br />Terre, écoute Sa voix !<br />Gloire à Dieu, gloire à Dieu !<br />Monde, réjouis-toi !<br />Oh ! Venez au Père !<br />Jésus est vainqueur.<br />Que toute la terre<br />Chante en Son honneur.</p>
        <p><br />De Jésus, la joie,<br />Remplit notre cœur,<br />Qu‟importe qu‟on voie<br />Tout notre bonheur.<br />Selon Sa promesse,<br />Jésus changera,<br />Deuil en allégresse,<br />Quand Il reviendra. Ref.</p>`
      },
      {
        "id": 172,
        "name": "DIS non aux tentations",
        "url": "./../../../assets/audios/CEV172.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. DIS non aux tentations : céder<br />c‟est pécher,<br />Toute victoire, t‟aidera à gagner<br />d‟autres,<br />Lutte sans te lasser, soumets<br />tes passions,<br />Et regarde à Christ pour te<br />porter tout au long.</p>
        <p><br />Réf :<br />Crie au Sauveur pour t’aider,<br />Te consoler, te garder,<br />Et, tel un bon compagnon,<br />Te porter tout au long.</p>
        <p><br />2. Aux mauvais compagnons et<br />mots: le dédain,<br />De Dieu le nom, tu craindras de<br />prendre en vain,<br />Sois persévérant, zélé, véridique<br />et bon,<br />Et regarde à Christ pour te<br />porter tout au long.</p>
        <p><br />3. Tout vainqueur connaîtra le<br />couronnement,<br />Par la foi tu vaincras tout<br />abattement,<br />Le Sauveur, de Sa force te fera<br />don,<br />Regarde à Christ pour te porter<br />tout au long.</p>`
      },
      {
        "id": 173,
        "name": "DIEU est très Saint !",
        "url": "./../../../assets/audios/CEV173.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Réf : DIEU est très Saint !<br />Oui trois fois saint.<br />Les Chérubins et Séraphins,<br />Au ciel là-haut, chantent sans<br />fin ;<br />Dieu est très Saint ! <br />Oui trois fois saint, (bis)<br />Tel est des anges le refrain.</p>
        <p><br />1. Prier c‟est se préoccuper<br />Tout d‟abord de Sa sainteté.<br />Christ aux disciples a enseigné<br />Que ton Nom soit sanctifié.</p>
        <p><br />2. Prier c‟est aussi célébrer,<br />Du Dieu vivant, la sainteté.<br />C‟est exalter, c‟est proclamer,<br />C‟est imposer Sa sainteté.</p>
        <p><br />3. La sainteté c‟est bien la clé,<br />Dans la prière, pour entrer,<br />Tous les pécheurs doiv‟ s‟en<br />aller<br />Ou bien entrer pour L‟affronter.</p>
        <p><br />4. Révèle-moi la sainteté<br />Du Dieu que je veux approcher,<br />Afin que je puisse me préparer,<br />Pleurer, jeûner, ensuite prier.</p>
        <p><br />5. La prière c‟est l‟intimité<br />Avec le Dieu de Sainteté.<br />Sur la terre, je dois proclamer,<br />Par la prière, Sa sainteté.</p>
        <p><br />6. Seigneur, daigne me révéler,<br />Ce qu‟à Ton cœur fait le péché,<br />Afin que je puisse l‟abondonner,<br />Car désormais je veux prier</p>`
      },
      {
        "id": 174,
        "name": "GARDE-MOI ô Seigneur, auprès de Toi",
        "url": "./../../../assets/audios/CEV174.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>GARDE-MOI ô Seigneur, auprès<br />de Toi. (bis)<br />J‟ai mon cœur à conquérir,<br />Tout mon être à gagner.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br /><br />2. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />J‟ai ma ville à conquérir,<br />Toute ma nation à gagner.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />3. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />J‟ai un prix à remporter,<br />Des victoires à gagner.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />4. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />Je dois porter du fruit,<br />Qui demeure en abondance.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />5. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />Toi qui es le bon Berger,<br />Fais de moi un vrai berger.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />6. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />Je dois demeurer en Toi,<br />Et Toi demeurer en moi.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />7. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />J‟‟ai des âmes à gagner,<br />Des disciples à former,<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />8. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />Crée en moi la faim de Toi<br />Et la faim de Ta parole.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />9. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />Fais-moi haïr le péché,<br />Le monde, les choses du monde.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />10. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />Fais-moi haïr le péché,<br />Le moi, l‟honneur de ce monde.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />11. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />J‟‟ai besoin du Saint-Esprit<br />Pour accomplir notre but.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>
        <p><br />12. Garde-moi ô Seigneur, auprès<br />de Toi. (bis)<br />J‟ai une couronne à gagner<br />Pour la placer à Tes Pieds.<br />Garde-moi ô Seigneur, auprès<br />de Toi. (bis)</p>`
      },
      {
        "id": 175,
        "name": "LA PUISSANCE de Dieu dans sa totalité",
        "url": "./../../../assets/audios/CEV175.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref.<br />LA PUISSANCE de Dieu<br />Dans sa totalité<br />Habite en moi<br />Ainsi je peux tout faire<br />J’’ai bien ce qu’il me faut<br />Eh ! Eh ! Gloire à Dieu !</p>
        <p><br />1. Aussi je peux prier<br />Prier intensément<br />Pour la libérer plus fort. Ref.</p>
        <p><br />2. Aussi je peux jeûner<br />Jeûner intensément<br />Pour la libérer plus fort. Ref.</p>
        <p><br />3. Je peux bien travailler<br />Travailler et travailler<br />Mais je ne romprai jamais Ref.</p>
        <p><br />4. Je peux bien résister<br />Devant le tentateur<br />Pleinement Dieu vit en moi Ref.</p>
        <p><br />5. J‟ai l‟amour dans mon cœur<br />Oui l‟amour de Jésus<br />J‟en ai assez pour aimer Ref.</p>
        <p><br />6. J‟ai la joie dans mon cœur<br />Oui la joie de mon Sauveur<br />J‟en ai assez pour donner Ref.</p>
        <p><br />7. J‟ai la paix dans mon cœur<br />Oui la paix de mon Sauveur<br />J‟en ai assez pour donner Ref.</p>
        <p><br />8. Aussi je loue mon Dieu<br />Toute ma vie je Le chanterai<br />Car Il m‟a vraiment comblé !Ref.</p>`
      },
      {
        "id": 176,
        "name": "Oui mon cœur chante pour Jéhovah Jiré",
        "url": "./../../../assets/audios/CEV176.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref.<br />Oui mon cœur chante pour<br />Jéhovah Jiré<br />Chante Sa grâce Sa bonté, Son<br />amour.</p>
        <p><br />1. Il t‟a donné Jésus<br />En Lui réjouis - toi<br />IL est Ton Ami<br />Ton Refuge, Ton Abri. Ref.</p>
        <p><br />2. Et Sa miséricorde<br />Est un bien quotidien<br />Dans ta détresse<br />Crie à Lui, tu verras. Ref.</p>
        <p><br />3. Chante, chante sans cesse<br />Son doux et puissant Nom<br />Accomplissant tes vœux<br />Chaque jour pour ton Dieu. Ref.</p>
        <p><br />4. Il est le Roi des rois<br />L‟Eternel des armées<br />Le Tout-Puissant Seigneur<br />Son Nom est merveilleux ! Ref.</p>
        <p><br />5. Venez et écoutez<br />Et je raconterai<br />Ce qu‟Il a fait pour moi<br />L‟Eternel est mon Dieu ! Ref.</p>`
      },
      {
        "id": 177,
        "name": "Dans la joie, dans l’amour, dans la foi",
        "url": "./../../../assets/audios/CEV177.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref<br />Dans la joie, dans l’amour, dans<br />la foi<br />Seigneur, nous T’attendons</p>
        <p><br />1.Jésus dit : que votre cœur<br />ne se trouble point<br />Croyez en Dieu et croyez en Moi<br />Jésus dit : je vais vous préparer<br />une place<br />Après quoi je reviendrai vous<br />chercher. Ref.</p>
        <p><br />2.Jésus dit : tu aimeras<br />Le Seigneur Ton Dieu<br />De tout ton cœur et de toute ton<br />âme<br />De toute ta pensée et de toute ta<br />force<br />Tu aimeras ton prochain<br />Comme toi-même. Ref.</p>
        <p><br />3.Jésus dit : Il y aura des troubles<br />Des famines<br />Et des tremblements de terre<br />en divers lieux<br />Cela n‟est que le commencement<br />des douleurs<br />Prenez donc garde à vous-même,<br />veillez, priez. Ref.</p>
        <p><br />4.Le Seigneur insiste vraiment<br />sur la prière:<br />Criez à Dieu nuit et jour Il<br />répondra.<br />Mais le Fils de l‟homme<br />Trouvera-t-Il la foi<br />Quand Il reviendra ici sur la terre.<br />Ref.</p>
        <p><br />5.Allez partout le monde et prêchez<br />la Bonne Nouvelle<br />Faites de toutes les nations des<br />disciples<br />Les baptisant au nom du Père,<br />du Fils du Saint-Esprit<br />Voici je suis avec vous tous les<br />jours<br />Avec Toi nous prêchons (bis)<br />Avec Toi nous souffrons (bis)<br />Avec crainte nous vivons (bis)<br />Dans la j‟oie, dans la j‟oie... nous<br />T‟attendons.</p>`
      },
      {
        "id": 178,
        "name": "DIEU Tout-Puissant, quand mon cœur considère",
        "url": "./../../../assets/audios/CEV178.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. DIEU Tout-Puissant, quand mon<br />cœur considère,<br />Tout l‟univers crée par Ton<br />pouvoir,<br />Le ciel d‟azur, les éclairs, le<br />tonnerre<br />Le clair matin ou les ombres du<br />soir.<br />De tout mon être alors<br />s‟élève un chant:<br />Dieu Tout - Puissant bis<br />Que Tu es grand !</p>
        <p><br />2. Quand par les bois ou la forêt<br />profonde,<br />J‟erre et j‟entends tous les<br />oiseaux chanter;<br />Quand sur les monts, la source<br />avec son onde,<br />Livre au zéphyr son chant doux<br />et léger...<br />Mon cœur heureux s‟écrie<br />à chaque instant :<br />Ô Dieu d‟amour, bis<br />Que Tu es grand !</p>
        <p><br />3.Mais quand je songe, ô sublime<br />mystère !<br />Qu‟un Dieu si grand a pu penser<br />à moi!<br />Que son cher Fils est devenu<br />mon Frère<br />Et que je suis l‟héritier du grand<br />Roi..<br />Alors mon cœur redit, la nuit,<br />le jour bis<br />Que Tu es bon, O Dieu d‟amour!</p>
        <p><br />4. Quand mon Sauveur éclatant de<br />lumière,<br />Se lèvera de Son trône éternel,<br />Et que laissant les douleurs de la<br />terre.<br />Je pourrai voir les splendeurs de<br />Son ciel.<br />Je redirai dans Son divin séjour,<br />Rien n‟est plus grand bis<br />que Ton amour.</p>`
      },
      {
        "id": 179,
        "name": "Avons-nous mérité",
        "url": "./../../../assets/audios/CEV179.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Avons-nous mérité tant d'amour<br />Avons-nous mérité<br />Dieu nous a tant aimés<br />Qu‟Il a donné<br />Son Fils pour nous sauver</p>
        <p><br />Ref. :<br />Sois loué (4 fois)<br />Ô Seigneur Jésus</p>
        <p><br />2. Jésus-Christ a brisé<br />Les chaînes qui nous tenaient<br />prisonniers<br />Il nous a libérés<br />Et a fait de nous des<br />privilégiés. Ref</p>
        <p><br />3. Satan est renversé, alléluia!<br />Le diable est tombé.<br />Jésus est couronné, alléluia!<br />L‟amour a triomphé. Ref</p>
        <p><br />4. Bénissons le Seigneur, alléluia!<br />Louons-Le de tout cœur.<br />Célébrons Sa grandeur.<br />Il est digne de louange dans Sa<br />splendeur. Ref :</p>
        <p><br />5. Adorons notre Dieu<br />Alléluia chantons pour l‟eternel<br />Sur la terre dans les cieux<br />Son amour est grand, sa Parole<br />fidèle. Ref :</p>
        <p><br />6. Rendons grâce au Seigneur<br />Il a fait des merveilles dans nos<br />vies<br />64<br />Nous a rendus vainqueurs<br />Et nous sommes en route pour<br />le Paradis. Ref</p>`
      },
      {
        "id": 180,
        "name": "As-tu faim, es-tu déprimé",
        "url": "./../../../assets/audios/CEV180.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. As-tu faim, es-tu déprimé ?<br />Jésus est le pain de vie, prendsLe!<br />Tu n‟auras plus faim(3 x)<br />Avec Jésus</p>
        <p><br />2. As-tu soif ? es-tu desséché ?<br />Jésus est la source de vie,<br />prends-Le !<br />Tu n‟auras plus soif (3 x)<br />Avec Jésus</p>
        <p><br />3. As-tu peur ? Es-tu tourmenté<br />Jésus est le prince de paix -<br />Prends-Le!<br />Tu auras la paix,<br />Tu auras la joie bis<br />Tu auras l‟amour<br />avec Jésus (bis)</p>
        <p><br />Ref :<br />Il est ma solution<br />En toute situation<br />Il est mon Grand amour<br />Il est pour toujours Mon Seul<br />Maître</p>
        <p><br />4. Fais comme moi ; reçois Jésus<br />Christ<br />Sur la croix, Il a tout fait. PrendsLe!<br />Je suis justifié<br />Je suis sanctifié bis<br />Je suis plus que<br />vainqueur en Jésus</p>
        <p><br />Ref 2 :<br />Je Te rends hommage<br />Mon Dieu pour Ta grâce<br />Ô Toi, Jésus ! Dieu d’amour<br />Je me languis de voir Ta face<br />Tu es ma solution<br />En toute situation<br />Tu es mon Grand amour<br />Tu es pour tou jours<br />Mon Seul Maître !</p>`
      },
      {
        "id": 181,
        "name": "A Celui qui nous aime",
        "url": "./../../../assets/audios/CEV181.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. A Celui qui nous aime<br />Et qui nous a délivrés<br />Par Son sang de nos péchés<br />A fait de nous un royaume</p>
        <p><br />Refrain:<br />A Toi la gloire et la puissance bis<br />Aux siècles des siècles<br />Seigneur, viens, viens viens (bis)<br />Oh ! Viens sécher nos pleurs<br />Viens établir Ton règne<br />Viens, viens, ô Seigneur reviens !</p>
        <p><br />2. Voici avec les nuées,<br />Il vient. Tout oeil Le verra<br />Même ceux qui l‟ont percé,<br />Le verront car Il revient. Ref.</p>
        <p><br />3. Il est l‟alpha l‟Oméga<br />Le Seigneur Dieu Tout-Puissant<br />Qui était, qui est, qui vient<br />Le Seigneur Dieu Tout-Puissant.<br />Ref.</p>`
      },
      {
        "id": 182,
        "name": "Crie pour le Seigneur",
        "url": "./../../../assets/audios/CEV182.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref :<br />Crie pour le Seigneur: Oh! Oh! Oh!<br />Chante à pleine voix : Oh ! Oh ! Oh<br />Nos plus belles chansons<br />Et toutes nos vies bis<br />Sont à Toi Seigneur<br />Tu es notre amour !</p>
        <p><br />1 Mes jours et les nuits<br />Sont à Toi Seigneur.<br />Oui prends toute ma vie.<br />Du fond de mon cœur<br />A Toi je me livre.<br />Pour Toi je veux vivre ! Ref.</p>
        <p><br />2. Oui, j‟élèverai<br />Ma coupe de délivrances.<br />Ton nom je crierai.<br />Tu m‟as retiré<br />Du fond de la fosse.<br />Gloire au Dieu Très-Haut ! Ref.</p>
        <p><br />3. J‟entrerai au ciel,<br />Non par mes mérites,<br />Par le sang de Christ.<br />Il essuiera toutes<br />Les larmes de ma vie.<br />Oh ! Que vienne ce jour ! Ref</p>`
      },
      {
        "id": 183,
        "name": "Dire à tout le monde",
        "url": "./../../../assets/audios/CEV183.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Dire à tout le monde,<br />Je voudrais le dire bis<br />Que Jésus m‟a aimé.<br />Oh ! Oh ! Oh !<br />Jésus m‟a aimé (ter)</p>
        <p><br />2. Dire à tout le monde<br />Je voudrais le dire, bis<br />Que Jésus m‟a sauvé<br />Oh ! Oh ! Oh !<br />Jésus m‟a aimé (ter)</p>
        <p><br />3. Dire à tout le monde<br />Je voudrais le dire, bis<br />Que Jésus m‟a comblé<br />Oh ! Oh ! Oh !<br />Jésus m‟a aimé (ter)</p>
        <p><br />4. Dire à tout le monde<br />Je voudrais le dire, bis<br />Que Jésus satisfait<br />Oh ! Oh ! Oh !<br />Jésus m‟a aimé (ter)</p>
        <p><br />5. Oh ! Oh ! Oh !<br />Jésus donne la joie (ter)<br />Oh ! Oh ! Oh !<br />Jésus donne la paix (ter)<br />Oh ! Oh ! Oh !<br />Jésus donne la vie (ter)</p>`
      },
      {
        "id": 184,
        "name": "Ô JOUR heureux, jour de bonheur",
        "url": "./../../../assets/audios/CEV184.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ô JOUR heureux, jour de bonheur,<br />Lumière, paix, joie ineffable !<br />Au Fils de Dieu, Saint, Adorable,<br />A Jésus, j‟ai donné mon cœur.</p>
        <p><br />Refrain :<br />Quel beau jour ! (bis)<br />Où d’un Sauveur j’ai su l’amour.<br />Oui, dans ma nouvelle patrie.<br />Jésus m’attend et pour moi prie.<br />Quel beau jour ! Quel beau jour,<br />Où d’un Sauveur j’ai su l’amour !</p>
        <p><br />Oh ! Comprenez mon heureux sort :<br />C‟est en Jésus que Dieu pardonne ;<br />La vie éternelle, il la donne;<br />Pourquoi donc te craindrais- je, ô<br />mort? Ref.</p>
        <p><br />Au ciel des chants ont retenti<br />Alléluia ! Disent les anges,<br />Entonnant de saintes louanges,<br />Car un pécheur s‟est converti. Ref.</p>
        <p><br />C‟en est fait, tout est accompli,<br />Le Fils de Dieu m‟appelle frère ;<br />Son sang coula sur le Calvaire ;<br />Il est à moi, je suis à Lui. Ref.</p>`
      },
      {
        "id": 185,
        "name": "L'AMOUR de Dieu de loin",
        "url": "./../../../assets/audios/CEV185.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. L'AMOUR de Dieu de loin<br />surpasse<br />Ce qu‟en peut dire un cœur<br />humain.<br />Il est plus grand que les espaces,<br />Même en l‟abîme il nous atteint.<br />Pour le péché de notre monde,<br />Dieu nous donna Jésus.<br />Il nous pardonne, ô paix<br />profonde,<br />Il sauve les perdus.</p>
        <p><br />Chœur :<br />L’amour de Dieu, si fort, si<br />tendre<br />Est un amour sans fin :<br />Tel est le chant que font<br />entendre,<br />Les anges et les Saints.</p>
        <p><br />2. Versez de l‟encre dans les<br />ondes,<br />Changez le ciel en parchemin ;<br />Tendez la plume à tout le<br />monde<br />Et que chacun soit écrivain :<br />Vous dire tout l‟amour du Père<br />Ferait tarir les eaux<br />Et remplirait la place entière<br />Sur ces divins rouleaux. Ch.</p>
        <p><br />3. Et que le monde un jour<br />chancelle<br />Avec ses trônes et ses rois,<br />Quand trembleront tous les<br />rebelles,<br />Soudain saisis d‟un grand effroi,<br />De Dieu l‟amour que rien ne<br />lasse<br />Pour nous encore vivra :<br />C‟est le miracle de la grâce,<br />Amen ! Alléluia ! Ch</p>`
      },
      {
        "id": 186,
        "name": "JÉSUS, doux maître",
        "url": "./../../../assets/audios/CEV186.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. JÉSUS, doux maître,<br />Règne sur moi,<br />Soumets mon être,<br />Sois - en le Roi.<br />Je suis l‟argile,<br />Toi le Potier ;<br />Rends - moi docile,<br />Ton prisonnier.</p>
        <p><br />2. Jésus, Lumière,<br />Pénètre en moi,<br />Eprouve, éclaire<br />Ma faible foi ;<br />Plus blanc que neige<br />Rends - moi, Seigneur,<br />Et de tout piège,<br />Garde mon cœur.</p>
        <p><br />3. Ô Jésus, source<br />De guérison,<br />Sois dans ma course<br />Santé, pardon !<br />Par Ta puissance<br />Protège-moi !<br />Par Ta présence<br />Relève-moi !</p>
        <p><br />4. Je m‟abandonne,<br />Jésus, à Toi ;<br />Détruis, pardonne<br />Tout mal en moi.<br />Remplis mon âme,<br />De Ton Esprit,<br />Et qu‟Il m‟enflamme<br />Et jour et nuit !</p>`
      },
      {
        "id": 187,
        "name": "Un seul Roi règne",
        "url": "./../../../assets/audios/CEV187.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Un seul Roi règne sur la terre,<br />Un seul Roi règne dans les<br />cieux,<br />Un seul Roi règne dans<br />l‟univers,<br />Un seul Roi règne c‟est Jésus.</p>
        <p><br />2. Un seul est digne d‟être chanté,<br />Un seul est digne d‟être loué<br />Un seul est digne d‟être adoré<br />Un seul est digne c‟est Jésus.</p>
        <p><br />3. Un seul libère du péché,<br />Un seul libère les enchaînés,<br />Un seul libère les prisonniers,<br />Un seul libère c‟est Jésus.</p>
        <p><br />4. Le seul qui a vaincu la mort,<br />Le seul qui a vaincu Satan,<br />Le seul qui a vaincu pour moi,<br />Le seul vainqueur c‟est JésusChrist.</p>
        <p><br />5. Alléluia à Toi ô Seigneur !<br />Alléluia au Roi des rois !<br />Alléluia au Lion de Juda !<br />Alléluia à Toi Jésus !</p>`
      },
      {
        "id": 188,
        "name": "Dans les profondeurs",
        "url": "./../../../assets/audios/CEV188.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref :<br />Dans les profondeurs,<br />dans les lieux très hauts, bis<br />Dans tout l’univers,<br />Il est le seul Dieu !</p>
        <p><br />1. Il fait tout ce qu‟Il veut (l‟eternel) !<br />Il fait tout ce qu‟Il veut (notre Dieu) !<br />Dans les cieux sur la terre<br />(l‟eternel)<br />Les mers et les abîmes (notre<br />Dieu)!</p>
        <p><br />2. Il fait monter les nuages (l‟eternel)!<br />Fait tomber la pluie (notre Dieu) !<br />C‟est Lui qui crée le vent<br />(l‟eternel)!<br />Qui produit les éclairs<br />(notre Dieu)!</p>
        <p><br />3. Il connaît nos pensées (l‟eternel) !<br />Il pénètre nos voies (notre Dieu) !<br />C‟est lui qui nous protège<br />(l‟eternel)!<br />Il est plein de bonté (notre Dieu) !</p>
        <p><br />4. Dans ta vie, dans ma vie<br />(l‟eternel)!<br />Il fait tout ce qu‟Il veut (notre Dieu)!<br />Dans la vie de l‟église (l‟eternel) !<br />Lui seul est Souverain (notre<br />Dieu)!</p>
        <p><br />5. Proclamons Son Saint nom<br />(l‟eternel)<br />Célébrons Sa grandeur (notre<br />Dieu)!<br />Louons-Le de tout cœur<br />(l‟eternel)!<br />Lui seul en est digne, (notre Dieu) !</p>`
      },
      {
        "id": 189,
        "name": "Acclamons Dieu, Il est notre Père",
        "url": "./../../../assets/audios/CEV189.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Ref :<br />Acclamons Dieu, Il est notre Père.<br />Louons - Le de tous nos cœurs.<br />Oui, chantons en Son honneur<br />Un cantique nouveau.<br />Jouons de tout notre art,<br />Célébrons - Le, Il est notre Père !</p>
        <p><br />1. Qu‟il entende nos mains ! (ter)<br />Acclamons - le encore plus fort !<br />Acclamons - Le, Il est notre<br />Dieu! Ref.</p>
        <p><br />2. Qu‟Il entende nos cris ! (ter)<br />Poussons des cris, des cris de<br />joie!<br />Ré jouissons - nous Il est notre<br />Père! Ref.</p>
        <p><br />3. Qu‟Il entende nos instruments !<br />Qu‟Il entende nos percussions !<br />Qu‟Il entende nos claviers !<br />Et nos guitares,<br />Et nos trompettes,<br />Et nos violons,<br />Nos balafons,<br />Célébrons - Le<br />Il est notre Dieu !</p>`
      },
      {
        "id": 190,
        "name": "Dieu nous T'aimons",
        "url": "./../../../assets/audios/CEV190.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Dieu nous T'aimons (bis)<br />Alléluia, Alléluia (bis)</p>
        <p><br />Nous T‟adorons, Seigneur Jésus<br />Alléluia, Alléluia (bis)</p>
        <p><br />Tu es digne, Seigneur Jésus<br />Alléluia, Alléluia (bis)</p>
        <p><br />Tu es digne d‟être adoré<br />Alléluia, Alléluia (bis)</p>
        <p><br />Nous T‟adorons, nous T‟exaltons<br />Alléluia, Alléluia (bis)</p>
        <p><br />Dieu nous T‟aimons, nous T‟adorons<br />Alléluia, Alléluia (bis)</p>`
      },
      {
        "id": 191,
        "name": "AU pied de la sainte croix",
        "url": "./../../../assets/audios/CEV191.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. AU pied de la sainte croix,<br />Jaillit la fontaine<br />Du salut que je reçois<br />Grâce souveraine.</p>
        <p><br />Chœur :<br />Oh Sauveur, Rédempteur,<br />Par Toi j’ai la vie.<br />C’est dans le sang de la Croix<br />Que je me confie.</p>
        <p><br />2. Seigneur, le sang de Ta croix<br />Mes péchés efface,<br />Tu me le dis, je le crois :<br />ADu mal, plus de trace. Ch.</p>
        <p><br />3. Prosterné devant la Croix<br />Sur le Mont Calvaire,<br />De Jésus je fais mon choix<br />En Lui seul j‟espère. Ch.</p>
        <p><br />4. M‟asseoir au pied de Ta croix<br />Est mon doux partage ;<br />C‟est là que J‟entends Ta voix<br />Qui me dit : courage ! Ch.</p>`
      },
      {
        "id": 192,
        "name": "Je ne sais pas le jour où je verrai mon Roi",
        "url": "./../../../assets/audios/CEV192.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Jésus te confie une œuvre<br />d‟amour,<br />Utile et bénie Jusqu‟à Son retour;<br />Cette sainte tâche, veux-tu<br />l‟accomplir,<br />Pour lui, sans relâche, sans<br />jamais faiblir ?</p>
        <p><br />Chœur :<br />Prie, agis, jour après jour,<br />Sans broncher, suis ton Sauveur<br />avec amour<br />Sois fidèle, obéissant, et le Maître<br />rendra ton travail Puissant.</p>
        <p><br />2.Va chercher ton frère, esclave<br />enlacé,<br />Las de sa misère, de son noir<br />passé ;<br />Arrache son âme au plaisir<br />trompeur,<br />Le salut proclame, en Christ, ton<br />Sauveur. Ch.</p>
        <p><br />3.Va vers la jeunesse, Que le<br />tentateur<br />Veut leurrer sans cesse loin du<br />vrai bonheur ;<br />Combattant le doute, parle-lui<br />d‟amour ;<br />Montre-lui la route du ciel, saint<br />séjour. Ch.</p>
        <p><br />4.Va vers ceux qui meurent sans<br />Dieu, sans espoir ;<br />Dis à ceux qui pleurent quand tout<br />semble noir :<br />« Jésus donne vie, bonheur, joie<br />et paix<br />A qui se confie en Lui, pour<br />jamais. » Ch</p>`
      },
      {
        "id": 193,
        "name": "",
        "url": "./../../../assets/audios/CEV193.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Je ne sais pas le jour où je<br />verrai mon Roi,<br />Mais je sais qu‟Il me veut<br />dans Sa sainte demeure ;<br />La lumière vaincra les ombres<br />à cette heure ;<br />Ce sera la gloire pour moi</p>
        <p><br />Chœur :<br />Ce sera la gloire pour moi (bis)<br />La lumière vaincra les ombres à<br />cette heure<br />Ce sera la gloire pour moi.</p>
        <p><br />2. Je ne sais quels seront les<br />chants des bienheureux,<br />Les accents, les accords<br />des hymnes angéliques,<br />Mais je sais que, joignant ma<br />voix aux saints cantiques,<br />Bientôt j‟adorerai comme eux</p>
        <p><br />Chœur:<br />Bientôt j’adorerai comme eux (bis)<br />Mais je sais que joignant ma voix<br />aux saints cantiques,<br />Bientôt j’adorerai comme eux.</p>
        <p><br />3. Je ne sais quel sera le palais<br />éternel,<br />Mais je sais que mon âme<br />y sera reconnue,<br />Un regard de Jésus sera ma<br />bienvenue.<br />Pour moi, pour moi s‟ouvre le<br />ciel</p>
        <p><br />Chœur :<br />Pour moi, pour moi s’ouvre le<br />ciel (bis)<br />Un regard de Jésus sera ma<br />bienvenue,<br />Pour moi, pour moi s’ouvre le<br />ciel</p>`
      },
      {
        "id": 194,
        "name": "Prends ma vie, elle doit être",
        "url": "./../../../assets/audios/CEV194.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Prends ma vie, elle doit être<br />A toi seul, ô divin Maître !<br />Que sur le flot de mes jours<br />Ton regard brille toujours !</p>
        <p><br />Que mes mains, à ton service,<br />S‟offrent pour le sacrifice ;<br />Qu‟à te suivre pas à pas<br />Mes pieds ne faiblissent pas !</p>
        <p><br />Prends ma voix, et qu‟elle<br />chante<br />Ta grâce auguste et touchante ;<br />Par mes lèvres que ton Nom<br />Parle aux pécheurs de pardon !</p>
        <p><br />Que mon esprit s‟illumine<br />De ta sagesse divine ;<br />Prends mon argent et mon or<br />Et, toi seul, sois mon trésor !</p>
        <p><br />Que ma volonté devienne<br />La servante de la tienne ;<br />Fais ton trône de mon cœur ;<br />Il t‟appartient, bon Sauveur !</p>
        <p><br />Qu‟ainsi mon amour répande<br />A tes pieds son humble<br />offrande ;<br />Prends-moi, dès mes premiers<br />jours,<br />Tout, à toi seul, pour toujours !</p>`
      },
      {
        "id": 195,
        "name": "Quand je contemple cette croix",
        "url": "./../../../assets/audios/CEV195.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1 Quand je contemple cette croix<br />Où Tu mourus, Prince de gloire<br />Combien mon orgueil d‟autrefois<br />M‟apparaît vain et dérisoire !</p>
        <p><br />2 O mon Sauveur, ne permets pas<br />Qu‟en aucun bien je me confie<br />Sauf dans le sang que Tu<br />versas<br />Pour que Ta mort devînt ma vie !</p>
        <p><br />3 Vit-on jamais amour si grand<br />S‟unir à douleur plus extrême,<br />Et l‟épine au front d‟un mourant<br />Resplendir comme un diadème ?</p>
        <p><br />4 Je voudrais T‟apporter, Seigneur<br />Tout l‟univers en humble offrande<br />Mais voici ma vie et mon cœur<br />C‟est ce qu‟un tel amour<br />demande.</p>`
      },
      {
        "id": 196,
        "name": "De Bethlehem à la croix",
        "url": "./../../../assets/audios/CEV196.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. De Bethlehem à la croix<br />De la crèche à Golgotha<br />De ma misère à ma joie<br />Il n‟y a que Jésus</p>
        <p><br />Refrain<br />O Jésus Ton amour oui Ton amour<br />pour moi<br />Est si grand qu’il remplit tout mon<br />cœur<br />O Jésus Ton amour oui Ton amour<br />pour moi<br />Est si grand qu’il me remplit de<br />bonheur</p>
        <p><br />2. Cet amour qu‟Il m‟a donné<br />Oh je voudrais le partager<br />Ne veut-tu pas l‟accepter<br />Et avec moi chanter Réf :</p>
        <p><br />3. De Bethlehem à la croix<br />De la crèche à Golgota<br />De ma misère à ma joie<br />Il n‟y a que Jésus Réf :</p>`
      },
      {
        "id": 197,
        "name": "Qui donc est dans cette étable",
        "url": "./../../../assets/audios/CEV197.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Qui donc est dans cette étable<br />Où les bergers se prosternent</p>
        <p><br />Refrain :<br />C’est Jésus, glorieuse histoire<br />Le Seigneur et Roi de gloire<br />À Ses pieds prosternons-nous<br />Couronnons-Le Roi des rois.</p>
        <p><br />2. Qui est donc ce solitaire<br />Qui jeûne dans le désert ?</p>
        <p><br />3. Qui est donc ce bien heureux<br />Aux paroles merveilleuses !</p>
        <p><br />4. À qui donc apporte-t-on<br />Les malades et malheureux</p>
        <p><br />5. Qui est donc cet homme en<br />larmes<br />À la tombe de Lazare</p>
        <p><br />6. C‟ est Lui qui est acclamé<br />Avec des chants de triomphe</p>
        <p><br />7. C‟est Lui qui prie à minuit<br />Tout seul à Gethsémané</p>
        <p><br />8. C‟est bien Lui qui sur ce bois<br />A souffert dans l‟agonie</p>
        <p><br />9. Qui est sorti du tombeau<br />Pour sauver et délivrer</p>
        <p><br />10. Qui donc est ce puissant Roi<br />Qui domine tout l‟univers ?</p>
        <p><br />11. Qui soupire et qui attend<br />L‟enlèvement de l‟Épouse ?</p>
        <p><br />12. Qui est-ce donc qui nous invite<br />Au grand festin de l‟agneau</p>
        <p><br />13. Qui est-ce donc au pied de qui<br />Nous placerons nos couronnes</p>`
      },
      {
        "id": 198,
        "name": "Pur et saint Fils de Dieu",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Pur et saint Fils de Dieu<br />Laissant la gloire de Son<br />Royaume<br />Prit la forme d‟un simple homme<br />Pour nous ouvrir les portes des<br />cieux.</p>
        <p><br />2. Justice du Père<br />Dieu regardant avec amour<br />L‟humanité dans sa misère<br />Envoya Son Fils un jour.</p>
        <p><br />Refrain :<br />Mais nous L’avons saisi, jugé<br />Cloué sur la croix<br />Et nous L’avons laissé souffrir<br />Mourir sur le bois,<br />Son sang coula sur la croix ce jour-là,<br />Payant la rançon du monde<br />Qui ainsi Le traita.</p>
        <p><br />3. Parmi les hommes, paix sur la<br />terre,<br />C‟est ce que les anges<br />chantèrent<br />Amour et miséricorde<br />Du cœur de notre Dieu<br />débordent..</p>
        <p><br />4. C‟est par amour qu‟Il vient<br />Enlever tous nos fardeaux<br />C‟est avec joie qu‟Il vient<br />Pour nous libérer<br />C‟est dans la paix qu‟Il vient<br />Nous donner le vrai repos<br />C‟est par amour qu‟Il met<br />En nous Sa bonté. Ref.</p>`
      },
      {
        "id": 199,
        "name": "Sais-tu qu‟un jour tu seras Au Tribunal de Christ",
        "url": "",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Sais-tu qu‟un jour tu seras<br />Au Tribunal de Christ<br />Afin de rendre compte<br />De ta vie de croyant<br />Dis-moi comment sera ce jour<br />pour toi, sera-t-il gai ou triste<br />Tu ne feras seulement que<br />récolter<br />Ce que tu auras semé (2x)</p>
        <p><br />2. En gardant le péché<br />En secret dans ton cœur<br />Tu espérais en même temps<br />Etre très près de Dieu<br />Ne sois pas surpris lorsque ce<br />jour-là tu te retrouveras<br />Très loin dans les bas-fonds du<br />ciel<br />Avec ceux qui sont comme toi (2x)</p>
        <p><br />3. En aimant le monde et les choses<br />du monde<br />Tu espérais qu‟en même temps,<br />tu aimerais le Père<br />Mais la Parole de Dieu déclare :<br />Celui qui est ami<br />Du monde se rend ennemi de<br />Dieu<br />C‟est pourquoi n‟aimez pas le<br />monde (2x)</p>
        <p><br />4. Sais-tu qu‟au ciel nous serons<br />Dans des quartiers différents<br />Et que les croyants du même<br />genre seront placés ensemble<br />Les amoureux intenses de Jésus<br />seront tout près de Lui<br />Tu seras dans le quartier qui<br />correspond<br />A ton amour pour Lui (2x)</p>
        <p><br />5. Le feu éprouvera<br />Les œuvres de chacun<br />Les motifs pour lesquels<br />Il les a accomplies<br />Si tu les as faites pour Jésus et<br />pour toi, tu auras tout perdu<br />Oui tu n‟obtiendras aucune<br />récompense<br />Ce jour-là des mains du<br />Seigneur (2x)</p>
        <p><br />6. Toutes les récompenses<br />que Jésus donnera<br />Dépendront toutes du degré<br />où tu as investi<br />Ton argent, ton temps et tes<br />forces et tout ce que tu avais<br />C‟est cela qui fixera ta place<br />au ciel<br />Et ton rang éternel (2x)<br />Maintenant, repens-toi<br />de ton cœur divisé<br />Maintenant, décide d‟avoir<br />un cœur entier pour Jésus<br />Maintenant, consacre-toi<br />et sois zélé pour Lui<br />C‟est alors que tu obtiendras<br />un grand rang éternel.</p>
        <p><br />7. La destinée ultime<br />des prix que nous aurons<br />Ce sera de les poser<br />aux pieds de Jésus-Christ<br />La récompense du disciple,<br />ce sera la joie<br />D‟apporter la couronne qu‟il<br />a gagnée<br />Aux pieds du Roi des rois (2x)</p>
        <p><br />8. Le cri et la crainte que doit avoir<br />mon cœur<br />C‟est de pouvoir faillir à satisfaire<br />son cœur<br />Si ce jour-là il manque à Ses<br />pieds certaines couronnes<br />Parce que personne ne sera<br />qualifié<br />Pour les mériter. (2x)<br />Maintenant je dois travailler<br />sans plus me ménager<br />C‟est alors que je gagnerai<br />toute les couronnes pour Lui<br />Maintenant, je m‟engage<br />à investir mon tout.<br />C‟est alors que je pourrai<br />enfin satisfaire Son cœur.</p>`
      },
      {
        "id": 200,
        "name": "Car Dieu a tant aimé le monde",
        "url": "./../../../assets/audios/CEV200.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Car Dieu a tant aimé le monde<br />Qu‟Il a donné Son Fils Unique<br />Afin que quiconque croit en Lui<br />Ne périsse plus. (3x)</p>
        <p><br />2. Dans Ton amour Tu nous invites<br />A donner nos biens temporels<br />Pour gagner les biens éternels<br />O notre Dieu. (3x)</p>
        <p><br />3. Donnez, il vous sera donné<br />On versera dans votre sein<br />Une bonne mesure serrée, secouée<br />Et qui déborde. (3x)</p>
        <p><br />4. Mon enfant donne-moi ton cœur<br />Pour habitation de ma gloire<br />Je veux l‟avoir à moi tout seul<br />Et pour toujours. (3x)</p>
        <p><br />5. Seigneur je viens à Toi ce jour<br />Déposant mon cœur à Tes pieds<br />Il est à Toi, Seigneur Mon Dieu<br />Oui à Toi Seul. (3x)</p>
        <p><br />6. Comme nos frères de Macédoine<br />Dans une pauvreté extrême<br />Et dans une joie débordante<br />Nous donnerons. (3x)</p>
        <p><br />7. Je ne serai plus égoïste<br />Mais avec générosité<br />Bien plus que mes capacités<br />Je donnerai. (3x)</p>
        <p><br />8. Je ne serai plus menacé<br />Manipulé pour Te donner<br />Mais entièrement de moi-même<br />Je donnerai. (3x)</p>
        <p><br />9. Pardonne mon aveuglement<br />A donner si nonchalamment<br />Je plaiderai pour Te donner<br />Avec urgence. (3x)</p>`
      },
      {
        "id": 201,
        "name": "Où est ton trésor",
        "url": "./../../../assets/audios/CEV201.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Où est ton trésor<br />La sera ton cœur<br />Tu peux te tromper<br />De placement<br />Ton avenir<br />Compte tout autant<br />Prends donc le temps<br />D‟y penser une heure.</p>
        <p><br />Refrain.<br />L’argent ne suffit pas<br />Pour nous rendre heureux<br />Il faut d’autres trésors<br />Pour combler nos vœux<br />Si tu n’as soif que d’or<br />Prépare tes yeux<br />Tu apprendras un jour<br />Qu’on n’achète pas Dieu.</p>
        <p><br />2. Le Christ est venu<br />Pour tout pardonner<br />L‟attrait de l‟argent<br />Il peut l‟ôter<br />Il faut savoir<br />Que pour les hommes riches<br />C‟est compliqué<br />D‟être démuni.</p>
        <p><br />3. Amassez-vous<br />Des trésors au ciel<br />C‟est le bon conseil<br />De l‟eternel<br />Ecoutez-le<br />Il est essentiel<br />Préparez-vous</p>`
      },
      {
        "id": 202,
        "name": "Pécheur, Je voudrais te guérir",
        "url": "./../../../assets/audios/CEV202.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Pécheur, Je voudrais te guérir ;<br />J‟ai vu tes larmes, ta souffrance ;<br />Mais pour avoir la délivrance,<br />Il faut apprendre à M‟obéir.<br />Voici, Je Me tiens à la porte,<br />Je suis ton Maître et ton Sauveur,<br />C‟est le bonheur que Je t‟apporte :<br />Ne veux-tu pas M‟ouvrir ton cœur ?</p>
        <p><br />2. Sais-tu que Je suis né pour toi,<br />Que pour toi J‟ai donné Ma vie ?<br />Ton cœur est-il l‟hôtellerie<br />Sans place, même pour ton Roi ?Y<br />Souvent, année après année,<br />Chez toi, J‟ai frappé, mais en vain.<br />Voici le soir de la journée,<br />Ne veux-tu pas M‟ouvrir enfin ?</p>
        <p><br />3. N‟auras-tu pas besoin de Moi,<br />Bientôt, dans la nuit éternelle ?<br />Dès aujourd‟hui viens sous Mon aile,<br />Je serai tout, oui, tout pour toi !<br />Le temps rapidement t‟emporte ;<br />Pourquoi renvoyer à demain ?<br />Trop tard, un jour devant Ma<br />porte,<br />Tu frapperas, peut être en vainY</p>
        <p><br />4. Si tu n‟as pas besoin de Moi,<br />Ecoute, obéis sans comprendre.<br />Jusque à quand devrai-Je<br />attendre ?<br />Ton Seigneur a besoin de toi.<br />Voici, Je me tiens à la porte,<br />Je suis ton Maître et ton Sauveur ;<br />C‟est le bonheur que Je t‟apporte !<br />Ne veux-tu pas M‟ouvrir ton cœur ?</p>`
      },
      {
        "id": 203,
        "name": "C'est dans l‟Evangile qu‟on trouve la vie",
        "url": "./../../../assets/audios/CEV203.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. C'est dans l‟Evangile qu‟on trouve<br />la vie<br />La paix, le pardon, le bonheur.<br />Ouvrons notre cœur à la grâce<br />infinie<br />Donnant tant de biens aux<br />pécheurs.<br /><br />Chœur<br />Auprès du Seigneur, avec Lui sur la<br />route<br />Marchons de tout cœur en chantant.<br />Il sauve, Il guérit, puis enlève le doute<br />Il vit, Il est là maintenant.</p>
        <p><br />2. Il montre un endroit pour jeter la<br />souillure<br />Voilà, c‟est ici Golgotha.<br />Un lieu de folie, un endroit de<br />rupture<br />Mais crois, le pardon est bien là.</p>
        <p><br />3. Suivons le chemin qui, plus loin,<br />nous entraîne<br />Au centre de la vérité.<br />Pendant que l‟amour de Jésus<br />nous enchaîne<br />Au règne de l‟éternité.</p>`
      },
      {
        "id": 204,
        "name": "Où cherchez-vous le bonheur",
        "url": "./../../../assets/audios/CEV204.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Où cherchez-vous le bonheur<br />Dans ce monde où tout passe ?<br />Avez-vous dans votre cœur,<br />Pour Jésus une place ?<br />A votre porte Il se tient,<br />Sans se lasser Il revient,<br />Pour Jésus votre Sauveur,<br />N‟avez-vous point de place ?</p>
        <p><br />Chœur<br />N’avez-vous point de place ? (bis)<br />Pour Jésus votre Sauveur,<br />N’avez-vous point de place ?</p>
        <p><br />2. S‟Il a souffert c‟est pour vous,<br />Oh ! Merveilleuse grâce !<br />Lorsqu‟Il luttait à genoux,<br />Dieu Lui voilant sa face.<br />Ah de Sa sublime croix,<br />N‟entendez-vous pas la voix,<br />Qui vous dit : * pauvre pécheur,<br />N‟as-tu donc point de place ?</p>
        <p><br />Chœur<br />N’avez-vous point de place ? (bis)<br />Ah pour l’homme de douleur<br />N’avez-vous point de place ?</p>
        <p><br />3. Si le monde a votre cœur,<br />Croyez-vous donc qu‟il fasse<br />Jusqu‟au bout votre bonheur ?<br />Vous savez que tout passe.<br />Oh ! pendant qu‟il en est temps<br />Ecoutez les doux accents,<br />De la voix du grand vainqueur,<br />Et faites-Lui donc place ?</p>
        <p><br />Chœur<br />N’avez-vous point de place ? (bis)<br />Pour Jésus le grand vainqueur,<br />N’avez-vous point de place ?</p>`
      },
      {
        "id": 205,
        "name": "Au loin sur la colline",
        "url": "./../../../assets/audios/CEV205.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Au loin sur la colline, se tient la<br />vielle croix<br />De souffrance et d‟ignominie<br />O que j‟aime cette croix<br />Ou Jésus, Bien-aimé<br />Pour tous les pécheurs fut immolé</p>
        <p><br />Refrain :<br />Oui je chérirai la rude croix<br />Et un jour, mes trophées à Ses pieds<br />Je m’accrocherai à cette croix<br />Jusqu’au jour où je se rai couronné</p>
        <p><br />2. Oui cette rude croix, par le mond‟<br />méprisée<br />Est pleine d‟attraction pour moi.<br />Car l‟agneau préci-eux<br />Quitta Sa gloire d‟en haut.<br />Pour subir le sombre calvaire</p>
        <p><br />3.O ! cette rude croix tachée de<br />sang divin<br />Rayonne de beauté sublime.<br />Sur cette vielle croix<br />Jésus souffrit, mourut<br />(Pour) me pardonner me sanctifier</p>
        <p><br />4.A la vielle rude croix, je resterai<br />fidèle<br />Portant avec joie son opprobre.<br />Alors, Il me prendra dans Ses bras<br />là au ciel<br />Avec Lui, pour toujours glorifié.</p>`
      },
      {
        "id": 206,
        "name": "Entends-tu Jésus t‟appelle",
        "url": "./../../../assets/audios/CEV206.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Entends-tu Jésus t‟appelle,<br />Viens ô pécheur Il t‟attend.<br />A cette voix si fidèle,<br />Tu résistas trop souvent.</p>
        <p><br />Chœur<br />Laisse entrer le Roi de gloire,<br />Ouvre ton cœur à Jésus,<br />Laisse entrer le Roi de gloire,<br />Hâte-toi ne tarde plus.</p>
        <p><br />2. Pour le péché pour le monde,<br />Tu trouves place en ton cœur,<br />Point pour le Sauveur du monde,<br />Rien pour l‟homme de douleur.</p>
        <p><br />3. Jésus frappe, Il frappe encore,<br />Ouvre à ton libérateur,<br />Et pour toi luira l‟aurore,<br />Du véritable bonheur.</p>
        <p><br />4. Aujourd‟hui, c‟est jour de grâce,<br />Ne compte pas sur demain.<br />Pendant que ton Sauveur passe,<br />Saisis sa puissante main !</p>`
      },
      {
        "id": 207,
        "name": "Sur le chemin, va sans peur",
        "url": "./../../../assets/audios/CEV207.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Sur le chemin, va sans peur,<br />Car Jésus est devant toi.<br />Il veut être ton Sauveur<br />Oh ! suis-Le, oh ! suis-Le par la foi.</p>
        <p><br />Chœur<br />Et maintenant saisis la main de ton<br />Sauveur,<br />Car Lui seul te donne l’éternel<br />bonheur.<br />Il a donné sa vie sur la croix,<br />Oh ! suis-Le, oh ! suis-Le par la foi.</p>
        <p><br />2. Et si tu tombes en chemin,<br />Regarde à Jésus ton Roi.<br />Il est dans le lieu très Saint,<br />Et Il prie, et Il prie pour toi.</p>
        <p><br />3. Réjouis-toi chaque jour,<br />Et chante à ce Dieu d‟amour.<br />Il t‟a sauvé du péché,<br />Et t‟a élu pour l‟éternité.</p>
        <p><br />4. Un jour Jésus reviendra,<br />O quel immense bonheur.<br />Dans Son ciel Il te prendra,<br />Bénis-Le (2x) dans ton cœur.</p>`
      },
      {
        "id": 208,
        "name": "Ils ont mis le Maître sur la croix",
        "url": "./../../../assets/audios/CEV208.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Ils ont mis le Maître sur la croix (2x)<br />Oh ! Je tremble, tremble encore<br />Quand je repense à Sa mort<br />Ils ont mis le Maître sur la croix</p>
        <p><br />2. Ils ont mis des épines à Son front<br />Et des clous à Ses poings et talons<br />Oh ! Je tremble, tremble encore<br />Quand je repense à Sa mort<br />Ils ont mis le Maître sur la croix</p>
        <p><br />3. Il disait, je suis venu chercher<br />Mes brebis, elles étaient égarées<br />Oh ! Je tremble, tremble encore<br />Quand je repense à Sa mort<br />Ils ont mis le Maître sur la croix</p>
        <p><br />4. À quoi bon ces trois années d‟espoir<br />S‟ils l‟ont mis au fond d‟un grand<br />trou noir<br />Oh ! Je tremble, tremble encore<br />Quand je repense à Sa mort<br />Ils ont mis le Maître sur la croix</p>
        <p><br />5 Aux lueurs de la troisième aurore<br />Dans la tombe en vain on a<br />cherché Son corps<br />Il avait roulé la pierre,<br />Il avait roulé la mort<br />Son amour est plus précieux que l‟or.</p>`
      },
      {
        "id": 209,
        "name": "Il est Roi, Il est Roi",
        "url": "./../../../assets/audios/CEV209.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Refrain<br />Il est Roi, Il est Roi<br />Et Seigneur des seigneurs<br />Que toute la terre se réjouisse en<br />Son nom<br />Il est Roi, Jésus-Christ est Roi !</p>
        <p><br />1. Il est assis sur le trône et Il règne.<br />Il intercède pour tous les saints.<br />Que toute la terre se réjouisse en<br />Son nom<br />Il est Roi, Jésus-Christ est Roi !</p>
        <p><br />2. Dieu L‟a élevé dans les lieux<br />célestes<br />Au-dessus de toute domination.<br />Que toute la terre se réjouisse en<br />Son nom<br />Il est Roi, Jésus-Christ est Roi !</p>
        <p><br />3. En Son nom nous chassons les<br />démons.<br />En Son nom guérissons les malades<br />Que toute la terre se réjouisse en<br />Son nom<br />Il est Roi, Jésus-Christ est Roi !</p>`
      },
      {
        "id": 210,
        "name": "Je suis fanatique de Jésus",
        "url": "./../../../assets/audios/CEV210.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Je suis fanatique de Jésus<br />Je n‟ai pas honte de le dire bis<br />Il a transformé toute ma vie<br />C‟est Lui seul qui me suffit</p>
        <p><br />Refrain<br />Ah Jésus, ah Jésus o (4 fois)<br />Ton amour a conquis mon cœur</p>
        <p><br />2. Je croupissais jour et nuit<br />Sous le poids de mes péchés<br />Mais quand Sa lumière a brillé bis<br />dans ma vie,<br />Son amour m‟a tout pardonné</p>
        <p><br />3. Ma face toujours défaite<br />A cause de mes nombreux soucis<br />Mais quand Sa lumière a brillé<br />dans ma vie, bis<br />Son amour m‟a donné la j‟oie</p>
        <p><br />4. Torturé par la souffrance<br />A cause de mes multipl‟ maladies<br />Mais quand Sa lumière a brillé<br />dans ma vie, bis<br />Sa puissance a tout guéri</p>
        <p><br />5. J‟‟ai connu des déceptions<br />Et des échecs multipliés<br />Mais quand Sa lumière a brillé bis<br />dans ma vie,<br />J‟suis devenu succès pour Dieu</p>`
      },
      {
        "id": 211,
        "name": "Jésus, nous Te louons",
        "url": "./../../../assets/audios/CEV211.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>Refrain<br />Jésus, nous Te louons,<br />Emmanuel, nous Te célébrons;<br />L’Etoile du matin, le Lion de Juda<br />Tu as vaincu pour l’éternité,<br />L’Etoile du matin, le Lion de Juda<br />Tout genou fléchit en Ton nom.</p>
        <p><br />1. Nous étions égarés<br />Comme des brebis sans berger,<br />Et chacun de nous suivait sa<br />propre voie<br />Ton appel d‟amour nous est<br />parvenu<br />Nous avons répondu à cet<br />amour, Seigneur<br />Ton Nom puissant nous a libérés.</p>
        <p><br />2- Nous sommes plus que<br />vainqueurs<br />Par Toi qui nous fortifies<br />Nous avons l‟espérance de la vie<br />éternelle<br />Car nous croyons en Ton Nom<br />Seigneur<br />Nous avons l‟espérance de la vie<br />éternelle<br />Car nous croyons en Ton Nom<br />Seigneur</p>
        <p><br />3- En Ton Nom oh Jésus<br />Les pécheurs sont sauvés<br />Les démons sont chassés, les<br />malades guéris<br />L‟espoir renaît dans les vies<br />Les démons sont chassés, les<br />malades sont guéris<br />L‟espoir renaît dans nos vies,<br />Seigneur</p>`
      },
      {
        "id": 212,
        "name": "Jésus quitta le trône de Son Père",
        "url": "./../../../assets/audios/CEV212.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Jésus quitta le trône de Son Père,<br />Il descendit ici bas sur la terre<br />Il accepta la crèche pour berceau<br />Lui Roi des rois Le fils du Dieu très<br />haut.</p>
        <p><br />Chœur<br />Ô oui c’est vrai, je sais que c’est vrai,<br />Il est écrit, cela suffit<br />Que Jésus m’aime oh bonheur<br />suprême<br />La Bible me le dit.</p>
        <p><br />2. En tout les lieux, portant la délivrance<br />Faisant le bien, guérissant la souffrance<br />Il pardonnait aux pêcheurs repentants<br />Il bénissait jusqu‟aux petits enfants<br />Ch.</p>
        <p><br />3. Il fut cloué sur la croix méprisable<br />Lui juste et saint mourut pour moi<br />coupable<br />Pour me sauver Son sang fut rependu<br />C‟est pourquoi j‟aime le Seigneur<br />Jésus Ch.</p>
        <p><br />4. Il fut cloué sur la croix méprisable<br />Lui juste et saint mourut pour moi<br />coupable<br />Pour me sauver Son sang fut rependu<br />C‟est pourquoi j‟aime le Seigneur<br />Jésus Ch.</p>
        <p><br />5. Plus que vainqueur, Il sortit de la<br />tombe<br />Gloire à l‟Agneau divin sauveur du<br />monde<br />Il règne au ciel intercède pour moi<br />Il vient bientôt me chercher je le crois.</p>`
      },
      {
        "id": 213,
        "name": "Au ciel est la maison du Père",
        "url": "./../../../assets/audios/CEV213.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Au ciel est la maison du Père<br />Etincellent de beauté<br />Tout en elle est gloire et lumière<br />Ineffable félicité.</p>
        <p><br />Chœur<br />Vers le ciel, (bis)<br />Nous, nous marchons vers le ciel<br />[C’est au ciel, (bis)<br />Qu’est notre héritage éternel ] x 4</p>
        <p><br />2. Là le bonheur est sans mélange<br />Là, le péché ne règne plus<br />C‟est l‟amour et c‟est la louange<br />C‟est la présence de Jésus Ch.</p>
        <p><br />3. Dans nos fatigues sur la terre<br />Dans nos combats et nos douleurs<br />C‟est toi douce maison du Père<br />Que cherchent nos yeux et nos<br />cœurs Ch.</p>
        <p><br />4. Jours de peine ou jours<br />d‟allégresse<br />Douce brise ou vents orageux<br />Poussez-nous, poussez-nous sans<br />cesse<br />Vers notre demeure des cieux Ch.</p>`
      },
      {
        "id": 214,
        "name": "Ecoutez l‟appel du Berger!",
        "url": "./../../../assets/audios/CEV214.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Ecoutez l‟appel du Berger !<br />Il sait ses brebis en danger ;<br />Il les appelle aves amour,<br />Espérant toujours leur retour.</p>
        <p><br />Chœur<br />Cherchons-les! Cherchons-les !<br />Savons-nous le prix d’une âme !<br />Cherchons-les! Cherchons-les !<br />Le Bon Berger les réclame</p>
        <p><br />2. Mourant de froid, de soif et de faim,<br />Les brebis appellent en vain.<br />Jésus nous veut pour les sauver :<br />Qui va l‟aider à les trouver ? Ch.</p>
        <p><br />3. Ne peut-il pas compter sur nous ?<br />Ne voulons-nous pas aller tous<br />Dire à tous ceux qui sont perdus<br />Que nous les voulons pour Jésus ?<br />Ch.</p>`
      },
      {
        "id": 215,
        "name": "Quel autre au ciel ai-je que Toi ?",
        "url": "./../../../assets/audios/CEV215.mp3",
        "image": "https://images.unsplash.com/photo-1457282367193-e3b79e38f207?dpr=1&auto=compress,format&fit=crop&w=2708&h=&q=80&cs=tinysrgb&crop=",
        "lyrics": `<p>1. Quel autre au ciel ai-je que Toi ?<br />Oh mon Dieu, mon Sauveur ;<br />N‟as-tu pas ouvert à ma foi<br />Les trésors de ton cœur ?<br />Tu t‟es donné toi-même à moi<br />Et vivant sous Ta douce loi<br />Je ne prends de plaisir qu‟en Toi<br />Oh mon Dieu. Mon Sauveur</p>
        <p><br />2. Que me font les biens ici bas ?<br />Oh mon Dieu, mon Sauveur ;<br />Ils passent, Tu ne passes pas<br />Tu suffis à mon cœur<br />Dans le deuil ou la pauvreté<br />Dans l‟exil ou l‟adversité<br />Tu reste ma félicité<br />Oh mon Dieu. mon Sauveur</p>
        <p><br />3. Je serais toujours avec Toi<br />Oh mon Dieu, mon Sauveur ;<br />Rien ici bas, non rien ne doit<br />M‟arracher de Ton cœur<br />Les vents peuvent se déchaîner,<br />Les torrents peuvent dérober<br />Ta grâce est mon ferme rocher<br />Oh mon Dieu. Mon Sauveur</p>
        <p><br />4. Par la main droite tu m‟as pris<br />Oh mon Dieu, mon Sauveur ;<br />Par ton conseil Tu me conduis<br />Au repos sur Ton cœur<br />Et quand viendra le dernier jour,<br />Tu m‟ouvriras avec amour ;<br />Les portes du divin séjour<br />Oh mon Dieu, mon Sauveur ;</p>`
      }
    ]

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.artistSubscription.unsubscribe();
  }

  /**
   * Handler to play a song.
   */
  playSong(song: Mysong) {
    this.albumService.playSong(song);
    this.lyrics = song.lyrics
  }

  bindLyrics(song: Mysong) {
    this.lyrics = song.lyrics
  }

  /**
   * Play this album
   */
  playAlbum() {
    this.albumService.playAlbum(this.album, this.songs);
  }

  /**
   * Add song to a playlist.
   */
  /*addSongToPlaylist(song: Song) {
    this.onAddSong.emit(song);
  }*/
  /**
   * Add song to playlist.
   *
   * @param song
   *  song to add.
   */
  addSongToPlaylist(song: Song) {
    const dialogRef = this.dialog.open(PlaylistAddSongComponent, {
      width: '350px',
      data: {
        song: song,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {

      }
    });
  }

  /**
  * Play all items.
  */
  playAll() {
    // this.onPlayall.emit();
  }

  /**
   * Play a single item.
   */
  playItem(song: Song) {
    //this.onPlayItem.emit(song);
  }

  /**
   * Play all items.
   */
  removeAll() {
    //this.onRemoveAll.emit();
  }
}
