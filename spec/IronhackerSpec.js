//describe(title, callback)
describe('my fkn first callback', ()=>{
	describe('Crea un array', () =>{
		it('el array se debe llamar ironhackers', ()=>{
			expect(Array.isArray(ironhackers)).toBeTruthy()
		})

		it('el array debería tener al menos 5 elementos', ()=>{
			expect(ironhackers.length).toBeGreaterThanOrEqual(5)
		})
	
		it('cada elemento debe ser un Objetote', ()=>{
			ironhackers.map(ironhacker =>{
				expect(typeof ironhacker).toBe('object')
			})
		})
	
		it('cada elemento debe tener "name", "lastname" & "age"', ()=>{
			ironhackers.map(ironhacker =>{
				expect(Object.keys(ironhacker)).toEqual(['name', 'lastname', 'age'])
			})
		})
	})
//next test
	describe('Crea el método más fácil que quieras, cos you are already death', ()=>{
		it('La funcion se debe llamar SayHello', ()=>{
			expect(typeof sayHello).toBe('function')
		})
		
		it('debe regresar "Hola <LARA>"', ()=>{
			expect(sayHello('Lara')).toEqual('Hola Lara')
			//expect(sayHello('Sam')).toEqual('Hola Sam')
		})
	})

})