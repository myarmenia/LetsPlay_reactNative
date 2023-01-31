import Consent from "@/assets/imgs/Consent";

const messageDefault = {
    hello: {
        id: 1,
        text: 'Добро пожаловать в “Играем” пожалуйста пройдите регистрацию',
        type: 'TEXT',
        position: 'left',
    },
    name: {
        id: 2,
        text: 'Напишите имя',
        type: 'TEXT',
        position: 'left',
    },
    nameValid: {
        id: 3,
        text: 'Некорректный имя',
        type: 'TEXT',
        position: 'left',
    },
    surname: {
        id: 4,
        text: 'Напишите фаминию',
        type: 'TEXT',
        position: 'left',
    },
    surnameValid: {
        id: 5,
        text: 'Некорректный фаминию',
        type: 'TEXT',
        position: 'left',
    },
    email: {
        id: 6,
        text: 'Укажите адрес электронной почты',
        type: 'TEXT',
        position: 'left',
    },
    validEmail: {
        id: 7,
        text: 'Некорректный электронный адрес',
        type: 'TEXT',
        position: 'left',
    },
    consent: {
        id: 8,
        text: 'Согласие на обработку данных',
        type: 'FILE',
        svg:<Consent/>,
        position: 'left',
    },
    consentBtn:{
        id: 10,
        text: 'Подтвердите электронную почту. Вам на электронную почту поступило письмо от  приложения «Играем» с кодом подтверждения. Укажите его здесь',
        type: 'TEXT',
        position: 'left',
    },
    validConsent:{
        id: 12,
        text: 'Вы должны дать согласие на обработку данных госуслуги. Нажатие кнопку на верху',
        type: 'TEXT',
        position: 'left',
    },
    validEmailPassword:{
        id: 13,
        text: 'Некорректный код',
        type: 'TEXT',
        position: 'left',
    },
    createPassword:{
        id: 14,
        text: 'Создайте пароль. Пароль должен содержать не менее 8 символов!',
        type: 'TEXT',
        position: 'left',
    },
    validPassword:{
        id: 15,
        text: 'Некорректный пароль!',
        type: 'TEXT',
        position: 'left',
    },
    verifyPassword:{
        id: '16a',
        text: 'Подтвердите пароль',
        type: 'TEXT',
        position: 'left',
    },
    validVerifyPassword:{
        id: '1a',
        text: 'Пароль не совпадает',
        type: 'TEXT',
        position: 'left',
    },
}

export default messageDefault;
