// This script makes the visual comparison of the home of the Telefonia Fixa product.

describe('Jornada TIC', function () {
    it('TIC - Telefonia Fixa', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/telefonia-fixa')
	cy.eyesOpen({
      	      appName: 'Telefonia Fixa',
	      testName: 'Telefonia Fixa Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Telefonia Fixa Page');
	cy.eyesClose();
    })
})
