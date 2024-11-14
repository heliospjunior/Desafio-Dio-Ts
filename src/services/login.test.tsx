
import { login } from "./login"

const mockSetIsLoggedIn = jest.fn()
const mockNavigate = jest.fn()

jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        setIsLoggedIn: mockSetIsLoggedIn
    })
}))

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockNavigate
}))

describe('login', () => {

    
    const mockEmail = 'helio@gmail.com'
    const mockPassword = '123456'

      it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
        
    })

    
    it('Deve exibir um erro caso o email ou senha sejam inválidos', async() => {
        const response = await login('email@invalido.com', '12345')
        expect(response).toBeFalsy()
       
       
    })
})