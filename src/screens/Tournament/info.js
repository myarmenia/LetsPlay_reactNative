export const gender = [
    { id: 1, text: 'М', checked: false, label: 'm' },
    { id: 2, text: 'Ж', checked: false, label: 'f' },
    { id: 3, text: 'Без ограничений', checked: true, label: 'm/f' },
]


export const organizerData = [
    { id: 1, text: 'Участвует', checked: true },
    { id: 2, text: 'Не Участвует', checked: false },
]
export const priceFondData = [
    { id: 1, text: 'Да', checked: false },
    { id: 2, text: 'Нет', checked: true },
]


export const start_date = {
    date: new Date(),
    time: new Date(),
}


export const end_date = {
    date: new Date(new Date().setDate(start_date.date.getDate() - 1)),
    time: new Date(),
}