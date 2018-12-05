// This script makes the visual comparison of the home of the E-mail Profissional product.

describe('Jornada TIC', function () {
    it('TIC - E-mail Profissional', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/email-profissional')
	cy.eyesOpen({
      	      appName: 'E-mail Profissional',
	      testName: 'E-mail Profissional Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('E-mail Profissional Page');
	cy.eyesClose();
    })
})
