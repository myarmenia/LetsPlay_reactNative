import Soccer from "@/assets/imgs/games/soccer.png";
import Naves from "@/assets/imgs/games/naves.png";
import Trista from "@/assets/imgs/games/trist.png";
import Basketball from "@/assets/imgs/games/Basketball.png";
import Volleyball from "@/assets/imgs/games/Volleyball.png";
import Pioneerball from "@/assets/imgs/games/Pioneerball.png";
import Hokey from "@/assets/imgs/games/Hokey.png";
import Quest from "@/assets/imgs/games/Quest.png";
import MyownGame from "@/assets/imgs/games/MyownGame.png";
import Elias from "@/assets/imgs/games/Elias.png";
import Poker from "@/assets/imgs/games/poker.png";
import Monopoly from "@/assets/imgs/games/monopolia.png";
import Crocodile from "@/assets/imgs/games/krokodil.png";
import Mafia from "@/assets/imgs/games/mafia.png";
import MyGame from "@/assets/imgs/games/MyownGame.png";

export const BoardGames = [
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Элиас',
    image: Elias,
    navigateTo: 'Elias',
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Покер',
    image: Poker,
    navigateTo: 'Poker',
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Монополия',
    image: Monopoly,
    navigateTo: 'Monopoly',
  },
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Крокодил',
    image: Crocodile,
    navigateTo: 'Crocodile',
  },
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Мафия',
    image: Mafia,
    navigateTo: 'Mafia',
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Своя игра',
    image: MyGame,
    navigateTo: 'MyGame',
  },
]

export const  ActiveGames = [
  {
    // type:'',
    // id:'',
    title: 'Футбол',
    image: Soccer,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Навес',
    image: Naves,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Триста',
    image: Trista,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Баскетбол',
    image: Basketball,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Волейбол ',
    image: Volleyball,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Пионербол ',
    image: Pioneerball,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Хоккей',
    image: Hokey,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Квест ',
    image: Quest,
    navigateTo: 'GameCreating',
  },
  {
    // type:'',
    // id:'',
    title: 'Своя игра ',
    image: MyownGame,
    navigateTo: 'GameCreating',
  },
]


export const Players = [
  {
    id: 1,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdnstatic.rg.ru/crop560x374/uploads/images/177/18/63/1000s.jpg',
    status: 'GOLD',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 2,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://www.nm.org//-/media/northwestern/healthbeat/images/healthy-tips/nm-9-health-issues-women_feature.jpg',
    status: 'GOLD',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 3,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25',
    status: 'SILVER',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 4,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://media.sgff.io/sgff_r1eHetbDYb/2022-10-12/1665610777549/The_state_of_women_1_320x286.png',
    status: 'GOLD',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 5,
    lName: 'Maik',
    fName: 'Joni',
    image: null,
    status: 'GOLD',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 6,
    lName: 'Maik',
    fName: 'Joni',
    image: '',
    status: 'BRONZE',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 7,
    lName: 'Maik',
    fName: 'Joni',
    image: '',
    status: 'GOLD',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 8,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdni-vm.servicecdn.ru/2022.06/original/720_62a0e28c82682c42ddc6a548.jpg',
    status: 'GOLD',
    organizer: 10,
    participant: 500,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 9,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXQAsxDObevKCCCn_C-5uJft3_p9cA8TQMw&usqp=CAU',
    status: 'BRONZE',
    organizer: 10,
    participant: 500,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
  {
    id: 10,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/96/755039177971965.jpg',
    status: 'SILVER',
    organizer: 10,
    participant: 50,
    gamesCreated: 10,
    acceptedGames: 7,
    canceledGames: 4,
    disabledGames: 70,
  },
]
