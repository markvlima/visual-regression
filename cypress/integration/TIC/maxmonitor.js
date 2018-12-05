// This script makes the visual comparison of the home of the Max Monitor product.

describe('Jornada TIC', function () {
    it('TIC - Max Monitor', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/max-monitor')
	cy.eyesOpen({
      	      appName: 'Max Monitor',
	      testName: 'Max Monitor Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Max Monitor Page');
	cy.eyesClose();
    })
})
