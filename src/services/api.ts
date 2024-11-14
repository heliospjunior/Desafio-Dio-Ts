import { resolve } from "path"

const conta = {
    email: 'helio@gmail.com',
    password: '123456',
    name: 'Helio Paiva',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})