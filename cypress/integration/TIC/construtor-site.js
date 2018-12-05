// This script makes the visual comparison of the home of the Construtor Site product.

describe('Jornada TIC', function () {
    it('TIC - Construtor', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/construtor-site')
	cy.eyesOpen({
      	      appName: 'Construtor Site',
	      testName: 'Construtor Site Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Construtor Site Page');
	cy.eyesClose();
    })
})
