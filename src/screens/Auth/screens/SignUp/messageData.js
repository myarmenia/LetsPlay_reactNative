import Consent from '@/assets/imgs/Consent'

const messageDefault = {
  hello: {
    text: 'Добро пожаловать в “Играем” пожалуйста пройдите регистрацию',
    type: 'TEXT',
    position: 'left',
  },
  name: {
    text: 'Напишите имя',
    type: 'TEXT',
    position: 'left',
  },
  nameValid: {
    text: 'Некорректный имя',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
  surname: {
    text: 'Напишите фаминию',
    type: 'TEXT',
    position: 'left',
  },
  surnameValid: {
    text: 'Некорректный фаминию',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
  email: {
    text: 'Укажите Вашу электронную почту',
    type: 'TEXT',
    position: 'left',
  },
  validEmail: {
    text: 'Некорректный электронный адрес',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
  usedEmail: {
    text: 'Адрес электронной почты уже зарегистрирован',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
  consent: {
    text: 'Согласие на обработку данных',
    type: 'FILE',
    svg: <Consent />,
    position: 'left',
  },
  consentBtn: {
    text: 'Подтвердите электронную почту. Вам на электронную почту поступило письмо от  приложения «Играем» с кодом подтверждения. Укажите его здесь',
    type: 'TEXT',
    position: 'left',
  },
  validConsent: {
    text: 'Вы должны дать согласие на обработку данных госуслуги. Нажатие кнопку на верху',
    type: 'TEXT',
    position: 'left',
  },
  validEmailPassword: {
    text: 'Некорректный код',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
  createPassword: {
    text: 'Создайте пароль. Пароль должен содержать не менее 6 символов!',
    type: 'TEXT',
    position: 'left',
  },
  validPassword: {
    text: 'Некорректный пароль!',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
  verifyPassword: {
    text: 'Подтвердите пароль',
    type: 'TEXT',
    position: 'left',
  },
  validVerifyPassword: {
    text: 'Пароль не совпадает',
    type: 'TEXT',
    position: 'left',
    error: true,
  },
}

export default messageDefault
