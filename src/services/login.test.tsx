import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'kael@gmail.com'
    const mockPassword = '123456'

    it('Deve exibir um alert com boas vindas', async () => {
        const response = await login(mockEmail, mockPassword)
        expect(response).toBeTruthy()
    })

    it("Deve exibir um erro caso o email seja inválido", async () => {
        const response =  await login ('email@invalido.com', '654321')
        expect(response).toBeFalsy
    }) 
})