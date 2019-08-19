//describe(title, callback)
describe('my fkn first callback', ()=>{
	describe('Crea un array', () =>{
		it('el array se debe llamar ironhackers', ()=>{
			expect(Array.isArray(ironhackers)).toBeTruthy()
		})
	})
})