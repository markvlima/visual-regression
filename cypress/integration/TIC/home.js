// This script makes the visual comparison of the home page of TIC Journey.

describe('Jornada TIC', function () {
    it('TIC - Home', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br')
	cy.eyesOpen({
      	      appName: 'Vitrini Home',
	      testName: 'Home Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Home Page');
	cy.eyesClose();
    })
})
