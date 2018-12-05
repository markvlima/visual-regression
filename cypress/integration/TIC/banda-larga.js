// This script makes the visual comparison of the home of the Banda Larga product.

describe('Jornada TIC', function () {
    it('TIC - Banda Larga', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/banda-larga')
	cy.eyesOpen({
      	      appName: 'Banda Larga',
	      testName: 'Banda Larga Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Banda Larga Page');
	cy.eyesClose();
    })
})
