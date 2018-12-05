// This script makes the visual comparison of the home of the Cloud Backup product.

describe('Jornada TIC', function () {
    it('TIC - Cloud Backup', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/cloud-backup')
	cy.eyesOpen({
      	      appName: 'Cloud Backup',
	      testName: 'Cloud Backup Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Cloud Backup Page');
	cy.eyesClose();
    })
})
