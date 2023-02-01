const messageDefault = {
  email: {
    id: 1 + Math.random(),
    position: 'left',
    isWrong: false,
    text: 'Укажите адрес электронной почты',
  },
  password: {
    id: 2 + Math.random(),
    position: 'left',
    secure: true,
    isWrong: false,
    text: 'Введите  пароль',
  },
  error: {
    id: 3 + Math.random(),
    clear: true,
    position: 'left',
    isWrong: true,
    text: 'Введенный логин или пароль не верен', //.\nВосстановить пароль
  },
}
export default messageDefault
//   {
//     isLeft: true,
//     isWrong: false,
//     text: 'Укажите адрес электронной почты',
//   },
//   {
//     isLeft: true,
//     secure: true,
//     isWrong: false,
//     text: 'Введите  пароль',
//   },
//   {
//     clear: true,
//     isLeft: true,
//     isWrong: true,
//     text: 'Введенный логин или пароль не верен.\nВосстановить пароль',
//   },
//   {
//     isLeft: true,
//     isWrong: false,
//     text: 'Для восстановления пароля введите адрес электронной почты.\nПосле чего Вам на указанный адрес, прийдет  письмо с кодом. Этот код необходимо отправить нам.',
//   },
//   {
//     isLeft: true,
//     isWrong: false,
//     text: 'Введите  код',
//   },
//   {
//     isLeft: true,
//     isWrong: false,
//     text: 'Введенный код верный. Создайте новый пароль',
//   },
//   {
//     isLeft: true,
//     isWrong: false,
//     text: 'Повторите пароль',
//   },
// ]
