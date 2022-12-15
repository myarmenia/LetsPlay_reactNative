import MafiaPng from '@/assets/mafiaPng/Mafia.png'
import Don from '@/assets/mafiaPng/Don.png'
import Sherif from '@/assets/mafiaPng/Sherif.png'
import Doctor from '@/assets/mafiaPng/Doctor.png'
import Shpin from '@/assets/mafiaPng/Spion.png'
import PLeaceMen from '@/assets/mafiaPng/PLeaceMen.png'

const MafiaData = [
  {
    id: 0,
    title: 'Мафия',
    text:
      'Клан Мафии. Наводит хаос в мирном городе с остальными членами клана, устанавливая свои порядки и правила. Ночью -"убить" всех мирных жителей, оставаясь незамеченным.',
    img: MafiaPng,
  },
  {
    id: 1,
    title: 'Дон',
    text:
      'Глава клана Мафии. Определяет кого "убить" ночью после голосования мафии: видит, как голосовала мафии и может согласится с большинством в выборе жертвы, а может сделать свой выбор. Также, должен определить шерифа и обезвредить его, ведь шериф самый персонаж  для Дона. И найти "крысу"  в своем клане - "Шпиона".',
    img: Don,
  },
  {
    id: 2,
    title: 'Шериф',
    text:
      'Относится к мирным жителям. Охраняет и защищает мирных жителей от Мафии. Ночью особая роль - ищет мафию, а если сделает правильный выбор в поиске, то обязательно арестует. Цель - "арестовать" весь клан Мафии, оставаясь незаметным.',
    img: Sherif,
  },
  {
    id: 3,
    title: 'Доктор',
    text:
      'Относится к мирным жителям. Обладает способностью лечить жителей города. Особая роль - определить кто является целью Мафии и "Ночью" спасти его. Если выбор сделан правильно, то после "Ночи" город остается без потерь. Доктор не может исцелять одного и того же игрока две ночи подряд. Вылечить самого себя доктор способен только один раз за игру.',
    img: Doctor,
  },
  {
    id: 4,
    title: 'Шпион',
    text:
      'Относится к мирным жителям. Видит весь клан Мафии, но не видит Дона. Особая роль - найти Дона, главаря Мафии, и "Утром" постараться всех убедить выгнать его, не выдав при этом себя. Если члены клана Мафии вычислят  "Шпиона", он без сомнения станет их главной целью предстоящей "Ночи".',
    img: Shpin,
  },
  {
    id: 5,
    title: 'Мирный житель',
    text:
      'Мирных жителей большинство в городе, но они друг друга не знают. Цель - найти и обезвредить всех членов клана Мафии, при этом убедить всех правоте. "Ночью" мирных житель ведет свою собственную статистику определения членов клана Мафии, но право голоса имеет только "Утром".',
    img: PLeaceMen,
  },
]
export default MafiaData
