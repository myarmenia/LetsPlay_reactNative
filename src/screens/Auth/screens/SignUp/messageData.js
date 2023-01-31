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
    }

}

export default messageDefault;
