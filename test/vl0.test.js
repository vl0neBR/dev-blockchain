const vl0 = artifacts.require('vl0');

contract('vl0', function(accounts){

    beforeEach(async () => {
        contract = await vl0.new()
    })

    it('Get Message', async () =>{
        const message = await contract.message()
        console.log(message)
        assert(message === 'Ola Mundo', "a Mensagem não é Ola Mundo")
    })

    it('Set Message', async () =>{
        await contract.setMessage('Nova Mensagem')


        const message = await contract.message()
        assert(message === 'Ola Mundo', "a Mensagem não é Ola Mundo")
    })
})