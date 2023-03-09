import Soccer from '@/assets/imgs/games/soccer.png'
import Naves from '@/assets/imgs/games/naves.png'
import Trista from '@/assets/imgs/games/trist.png'
import Basketball from '@/assets/imgs/games/Basketball.png'
import Volleyball from '@/assets/imgs/games/Volleyball.png'
import Pioneerball from '@/assets/imgs/games/Pioneerball.png'
import Hokey from '@/assets/imgs/games/Hokey.png'
import Quest from '@/assets/imgs/games/Quest.png'
import MyownGame from '@/assets/imgs/games/MyownGame.png'
// import Elias from '@/assets/imgs/games/Elias.png'
import Poker from '@/assets/imgs/games/poker.png'
import Monopoly from '@/assets/imgs/games/monopolia.png'
import Crocodile from '@/assets/imgs/games/krokodil.png'
import Mafia from '@/assets/imgs/games/mafia.png'
import MyGame from '@/assets/imgs/games/MyownGame.png'
import FootballField from '@/assets/imgs/FootballField.png'
import BasketballField from '@/assets/imgs/BasketballField.png'
import VolleyballField from '@/assets/imgs/VolleyballField.png'
import PionerballField from '@/assets/imgs/PionerballField.png'
import HockeyField from '@/assets/imgs/HockeyField.png'
import { RH, RW } from '@/theme/utils'

export const BoardGames = [
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Элиас',
    // image: Elias,
    navigateTo: 'Elias',
    scheme: false,
    info:
      'Словесная игра “Элиас”. Командная игра в которой нужно объяснить как можно больше слов за определенное время, используя только синонимы, антонимы и мимику. Правилами запрещено давать объяснения по частям и на иностранных языках, а также недопустимо использование однокоренных слов.\n' +
      '\n' +
      'Все игроки делятся на две и более (до 5) команды. Начинает первая команда. Игрок от первой команды должен объяснить как можно больше слов участникам своей команды за определенное время. За угаданное слово команда получает 1 балл. Далее объясняет вторая команда. Выигрывает та команда, которая быстрее наберет заранее определенное количество баллов.\n' +
      'Количество игроков должно быть не менее 4 человек.',
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Покер',
    image: Poker,
    navigateTo: 'Poker',
    scheme: false,
    info:
      'Покер - карточная игра, цель которой собрать выигрышную комбинацию или вынудить всех соперников прекратить участвовать в игре. Игра идёт с полностью или частично закрытыми картами. Конкретные правила могут варьироваться в зависимости от разновидности покера. Обобщающими элементами всех разновидностей покера являются комбинации и наличие торговли в процессе игры.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 2 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Монополия',
    image: Monopoly,
    scheme: false,
    navigateTo: 'Monopoly',
    info:
      'Монополия - экономическая и стратегическая настольная игра. Цель игры — рационально используя стартовый капитал остаться единственным игроком, который не достиг банкротства. Фактически «Монополия» представляет собой игровое поле, состоящее из квадратов, которые проходят по кругу все игроки по очереди. Квадраты разделяются на активы (предприятие, ценная вещь) и события. Когда игроку выпадает очередь ходить, то броском кубика он определяет, какое количество шагов он должен совершить на игровом поле за этот ход (каждый шаг соответствует одному очку на кубике и одному квадрату на игровом поле).\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 3 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Крокодил',
    image: Crocodile,
    scheme: false,
    navigateTo: 'Crocodile',
    info:
      'Словесная игра «Крокодил». Цель и задачи – нужно показать загаданное слово, используя только жесты и мимику.\n' +
      'Есть два варианта этой игры — индивидуальный и командный.\n' +
      'Индивидуальный - игрок показывает загаданное слово остальным игрокам. Кто отгадает получит право показывать следующее слово или любой другой игрок на усмотрение игрока, который показывал угаданное слово.\n' +
      'Командный - все игроки делятся на две команды. Начинает первая команда. Игрок от первой команды получает загаданное слово и он должен показать его участникам своей команды за определенное время. За угаданное слово команда получает 1 балл. Далее показывает вторая команда. Выигрывает та команда, которая быстрее наберет заранее определенное количество баллов.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 3 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    gadget: true,
    title: 'Мафия',
    image: Mafia,
    scheme: false,
    navigateTo: 'Mafia',
    info:
      'Мафия захватывает мирный город, и честные жители больше не могут спать спокойно: им нужно вычислить кто есть кто и выгнать всю мафию, чтобы спастись. Если им не удастся это сделать, мафия захватит город, и мирные жители будут обречены.\n' +
      'Игра делится на два периода: утро и ночь. В утреннем обсуждении — участвуют все игроки, а ночью… у каждого персонажа своя роль.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 5 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    gadget: false,
    title: 'Своя игра',
    image: MyGame,
    scheme: false,
    navigateTo: 'MyGame',
    info:
      'Своя игра — это абсолютно любая игра, которая Вами может быть предложена. Для игры необходимо описать сюжет и правила либо, если она общепризнана, достаточно указать интернет-сайт с описанием этой игры.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков - согласно правилам выбранной Вами игры.\n' +
      'Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
]

export const ActiveGames = [
  {
    // type:'',
    // id:'',
    title: 'Футбол',
    image: Soccer,
    navigateTo: 'GameCreating',
    scheme: true,
    playField: FootballField,
    info:
      'Футбол — командный вид спорта, в котором целью является забить мяч в ворота соперника ногами или другими частями тела (кроме рук) большее количество раз, чем команда соперника. Команда, которая забьет больше голов к концу игры, становится победителем.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. \n' +
      '\n' +
      'Количество игроков должно быть не менее 3 человек.\n' +
      'Главное - собраться.\n' +
      '\n' +
      ' Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Навес',
    image: Naves,
    navigateTo: 'GameCreating',
    scheme: false,
    info:
      'Навес - игра с футбольным мячом на одни ворота. Путем жеребьевки определяется стартовый вратарь. Цель остальных игроков забивать ему с навеса, при том навес должен производится другим игроком. Если вратарь поймал мяч в навесе, то он можем выбить мячом одного из игроков и уже тот встанет на ворота вместо него. Проигрывает участник, пропустивший, заранее оговоренное количество голов. Игра идет до определения 2-3 победителей.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 3 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Триста',
    image: Trista,
    navigateTo: 'GameCreating',
    scheme: false,
    info:
      'Триста - игра с футбольным мячом на одни ворота. Игроки делятся на две команды и пробивают друг другу с заранее оговоренного расстояния по очереди. Сначала по одному разу бьют все игроки первой команды, а вторая стоит на воротах, а потом наоборот. Задача пробивающих - забить гол, задача защищающихся - не пропустить гол и зафиксировать мяч в штрафной, тогда наступает очередь следующего бьющего. Система начисления очков: чистый гол - 50, грязный гол (от игроков рикошетом) - 25, штанга - 75, перекладина - 100, крестовина - 300 (сразу победа); розыгрыш мяча - 15, угловой - 25; гол головой - 50. Игра ведется до того момента, пока одна из команд не наберет 300 очков.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 4 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Баскетбол',
    image: Basketball,
    navigateTo: 'GameCreating',
    scheme: true,
    playField: BasketballField,
    info:
      'Баскетбол – спортивная командная игра с мячом, в которой мяч забрасывают руками в кольцо соперника. В баскетбол играют две команды. Цель каждой команды — забросить мяч в кольцо с сеткой (корзину) соперника и помешать другой команде завладеть мячом и забросить его в свою корзину. За мяч, заброшенный с ближней и средней дистанций, засчитывается два очка, с дальней (из-за трёхочковой линии) — три очка; штрафной бросок оценивается в одно очко. Команда, которая наберет больше очков к концу игры, становится победителем.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 4 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Волейбол ',
    image: Volleyball,
    navigateTo: 'GameCreating',
    scheme: true,
    playField: VolleyballField,
    info:
      'Волейбол – командная спортивная игра, в процессе которой две команды соревнуются на специальной площадке, разделённой сеткой, стремясь направить мяч на сторону соперника таким образом, чтобы он приземлился на площадке противника, либо чтобы игрок защищающейся команды допустил ошибку. При этом для организации атаки игрокам одной команды разрешается не более трёх касаний мяча подряд (в дополнение к касанию на блоке). Победа достается той команде, которая выиграла больше партий.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 4 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Пионербол ',
    image: Pioneerball,
    navigateTo: 'GameCreating',
    scheme: true,
    playField: PionerballField,
    info:
      'Пионербол – упрощенная версия Волейбола. Здесь так же задействуется волейбольная площадка и мяч, но мяч вводится не ударом по нему с целью отправить его на вражескую сторону, а вбрасыванием с той же целью. Игрокам не обязательно отбивать мяч, они могут его поймать и совершить с ним не более трех шагов к сетке, можно сделать одну передачу внутри команды. Игра продолжается до 15 очков.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 4 человек. Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Хоккей',
    image: Hokey,
    navigateTo: 'GameCreating',
    scheme: true,
    playField: HockeyField,
    info:
      'Хоккей – командная спортивная игра на льду, заключающаяся в противоборстве двух команд на коньках, которые, передавая шайбу клюшками, стремятся забросить её наибольшее количество раз в ворота соперника и не пропустить в свои.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков должно быть не менее 4 человек.\n' +
      'Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Квест ',
    image: Quest,
    navigateTo: 'GameCreating',
    scheme: false,
    info:
      'Квест — это игра с сюжетной линией, которая заключается в решении различных головоломок и логических заданий. На рынке сейчас популярны два вида квестов, это классический эскейп, где идет упор на логическое мышление и разгадывание загадок, и перформанс — квест с актерами, в основном базирующийся на получении адреналина.\n' +
      '\n' +
      'Организуйте увлекательное приключение: подберите подходящий для Вас “Квест” в Вашем городе и с помощью “Играем” найдите единомышленников для совместного прохождения игры. Количество игроков - согласно правилам организаций, проводящих “Квесты”.\n' +
      'Главное - собраться.\n' +
      '\n' +
      'Удачной игры!',
  },
  {
    // type:'',
    // id:'',
    title: 'Своя игра ',
    image: MyownGame,
    navigateTo: 'GameCreating',
    scheme: false,
    info:
      'Своя игра — это абсолютно любая игра, которая Вами может быть предложена. Для игры необходимо описать сюжет и правила либо, если она общепризнана, достаточно указать интернет-сайт с описанием этой игры.\n' +
      '\n' +
      'Организуйте увлекательную игру: подберите подходящую для Вас площадку в Вашем городе и с помощью “Играем” найдите единомышленников для совместной игры. Количество игроков - согласно правилам выбранной Вами игры.\n' +
      'Главное - собраться. \n' +
      '\n' +
      'Удачной игры!',
  },
]

export const Players = [
  {
    id: 1,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdnstatic.rg.ru/crop560x374/uploads/images/177/18/63/1000s.jpg',
    status: 'BRONZE',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
    y: RH(724),
    x: RW(20),
  },
  {
    id: 2,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://www.nm.org//-/media/northwestern/healthbeat/images/healthy-tips/nm-9-health-issues-women_feature.jpg',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
    y: RH(724),
    x: RW(50 * (2 - 0.6)),
  },
  {
    id: 3,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25',
    status: 'SILVER',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
    y: RH(724),
    x: RW(50 * (3 - 0.6)),
  },
  {
    id: 4,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://media.sgff.io/sgff_r1eHetbDYb/2022-10-12/1665610777549/The_state_of_women_1_320x286.png',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
    y: RH(724),
    x: RW(50 * (4 - 0.6)),
  },
  {
    id: 5,
    lName: 'Maik',
    fName: 'Joni',
    image: null,
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
    y: RH(724),
    x: RW(50 * (5 - 0.6)),
  },
  {
    id: 6,
    lName: 'Maik',
    fName: 'Joni',
    image: '',
    status: 'BRONZE',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
    y: RH(724),
    x: RW(50 * (6 - 0.6)),
  },
  {
    id: 7,
    lName: 'Maik',
    fName: 'Joni',
    image: '',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 8,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdni-vm.servicecdn.ru/2022.06/original/720_62a0e28c82682c42ddc6a548.jpg',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 9,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXQAsxDObevKCCCn_C-5uJft3_p9cA8TQMw&usqp=CAU',
    status: 'BRONZE',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 10,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/96/755039177971965.jpg',
    status: 'SILVER',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 11,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdnstatic.rg.ru/crop560x374/uploads/images/177/18/63/1000s.jpg',
    status: 'BRONZE',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 12,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://www.nm.org//-/media/northwestern/healthbeat/images/healthy-tips/nm-9-health-issues-women_feature.jpg',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 13,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://www.mckinsey.com/~/media/mckinsey/featured%20insights/diversity%20and%20inclusion/women%20in%20the%20workplace%202022/women%20in%20the%20workplace%202022_standard_1536x1536.jpg?mw=677&car=42:25',
    status: 'SILVER',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 14,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://media.sgff.io/sgff_r1eHetbDYb/2022-10-12/1665610777549/The_state_of_women_1_320x286.png',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 15,
    lName: 'Maik',
    fName: 'Joni',
    image: null,
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 16,
    lName: 'Maik',
    fName: 'Joni',
    image: '',
    status: 'BRONZE',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 17,
    lName: 'Maik',
    fName: 'Joni',
    image: '',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 18,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://cdni-vm.servicecdn.ru/2022.06/original/720_62a0e28c82682c42ddc6a548.jpg',
    status: 'GOLD',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 19,
    lName: 'Maik',
    fName: 'Joni',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOXQAsxDObevKCCCn_C-5uJft3_p9cA8TQMw&usqp=CAU',
    status: 'BRONZE',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
  {
    id: 20,
    lName: 'Maik',
    fName: 'Joni',
    image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/96/755039177971965.jpg',
    status: 'SILVER',
    organizer: 30,
    participant: 30,
    gamesCreated: 0,
    acceptedGames: 0,
    canceledGames: 0,
    disabledGames: 0,
  },
]

export const levels = [
  {
    id: 0,
    title: 'Быстрая игра',
    level: 'Легкий',
  },
  {
    id: 1,
    title: 'Оптимус',
    level: 'Средний',
  },
  {
    id: 2,
    title: 'Мозговой штурм',
    level: 'Сложный',
  },
  {
    id: 3,
    title: 'Рулетка',
    level: 'От простого до сложного',
  },
]
