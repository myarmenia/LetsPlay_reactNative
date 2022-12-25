import Trista from '../Game/gamesDatas.js/gameSVGs/trista'
import Quest from '../Game/gamesDatas.js/gameSVGs/quest'
import Labyrinth from '../Game/gamesDatas.js/gameSVGs/labyrinth'
import Wave from '../Game/gamesDatas.js/gameSVGs/wave'
import FootballBall from '../Game/gamesDatas.js/gameSVGs/footballBall'
import Volleyball from '../Game/gamesDatas.js/gameSVGs/volleyball'
import Poker from '../Game/gamesDatas.js/gameSVGs/poker'
import PrizeCup from '../Game/gamesDatas.js/gameSVGs/prizeCup'
import { RH, RW } from '@/theme/utils'
export const tournamentData = [
  {
    title: 'Турниры',
    data: [
      {
        id: 11,
        bigComponent: (
          <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
        ),
        component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
        date: '07.07.22 ',
        gender: 'M',
        time: '18:30 ',
        location: 'Пресненская ',
        playersAge: '25-35',
        addres: 'наб. 25',
        players: '10-12',
        distantion: '1.6 км',
        playersText: 'Игроки',
        playersIn: '12/10',
        wave: <Wave />,
      },
      {
        id: 12,
        bigComponent: (
          <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
        ),
        component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
        date: '07.07.22 ',
        gender: 'M',
        time: '18:30 ',
        location: 'Пресненская ',
        playersAge: '25-35',
        players: '10-12',
        addres: 'наб. 25',
        distantion: '1.6 км',
        playersText: 'Игроки',
        playersIn: '12/10',
        wave: <Wave />,
      },
      {
        id: 13,
        bigComponent: (
          <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
        ),
        component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
        date: '07.07.22 ',
        gender: 'M',
        time: '18:30 ',
        location: 'Пресненская ',
        playersAge: '25-35',
        players: '10-12',
        addres: 'наб. 25',
        distantion: '1.6 км',
        playersText: 'Игроки',
        playersIn: '12/10',
        wave: <Wave />,
      },
      {
        id: 14,
        bigComponent: (
          <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
        ),
        component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
        date: '07.07.22 ',
        gender: 'M',
        time: '18:30 ',
        location: 'Пресненская ',
        playersAge: '25-35',
        players: '10-12',
        addres: 'наб. 25',
        distantion: '1.6 км',
        playersText: 'Игроки',
        playersIn: '12/10',
        wave: <Wave />,
      },
      {
        id: 15,
        bigComponent: (
          <PrizeCup width={RW(260)} height={RH(260)} top={RH(0)} viewBox={'0 0 40 50'} />
        ),
        component: <PrizeCup width={42} height={40} viewBox={'0 0 33 49'} />,
        date: '07.07.22 ',
        gender: 'M',
        time: '18:30 ',
        location: 'Пресненская ',
        playersAge: '25-35',
        players: '10-12',
        addres: 'наб. 25',
        distantion: '1.6 км',
        playersText: 'Игроки',
        playersIn: '12/10',
        wave: <Wave />,
      },
    ],
  },
]
