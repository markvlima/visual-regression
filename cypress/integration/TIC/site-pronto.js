// This script makes the visual comparison of the home of the Site Pronto product.

describe('Jornada TIC', function () {
    it('TIC - Site Pronto', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/site-pronto')
	cy.eyesOpen({
      	      appName: 'Site Pronto',
	      testName: 'Site Pronto Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Site Pronto Page');
	cy.eyesClose();
    })
})
