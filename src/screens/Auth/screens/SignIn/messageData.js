const messageDefault = {
  hello: {
    position: 'left',
    text: 'С возвращением в платформу «Играем»!', //Здравствуйте и добро пожаловать! Вас приветствует платформа «Играем»!
  },
  email: {
    position: 'left',
    text: 'Укажите адрес электронной почты',
  },
  emailError: {
    position: 'left',
    text: 'Некорректный адрес',
    error: true,
  },
  password: {
    position: 'left',
    secure: true,
    text: 'Введите пароль',
  },
  error: {
    clear: true,
    position: 'left',
    error: true,
    text: 'Введенный логин или пароль не верен',
  },
  forgotPassword: {
    clear: true,
    position: 'left',
    error: true,
    text: 'Хотите сбросить пароль?',
  },
  emailCode: {
    text: 'Вам на электронную почту поступило письмо от платформы «Играем» с кодом подтверждения, укажите его',
    type: 'TEXT',
    position: 'left',
  },
  validEmailCode: {
    text: 'Некорректный код',
    type: 'TEXT',
    position: 'left',
    error: true,
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
