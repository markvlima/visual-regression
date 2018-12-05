// This script visually tests the bookmarks page when the empty-state is shown.
describe('B2B Tests - Login', function () {
    it('test - Favorites', function () {
        cy.viewport(1366, 1913)
	cy.visit('https://deploy-preview-196--lucid-jepsen-ae3f5a.netlify.com')
        cy.eyesOpen({
      	      appName: 'Favorites',
	      testName: 'Favorites Page',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.wait(5000)
	cy.eyesCheckWindow('Favorites Page');
	cy.get('#___gatsby > div > section.mc.center.pv16.mb20.bb-ns > div > div.Grid-cell.u-size6of12.u-sm-size5of12.u-md-size4of12.u-lg-size3of12 > div > a.Grid-cell.u-size3of12.u-sm-size2of12 > div > svg').click()
	cy.eyesCheckWindow('Favorites Page');
	cy.eyesClose();
    })
})
