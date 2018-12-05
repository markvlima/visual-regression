// This script makes the visual comparison of the home of the Login.
describe('B2B Tests - Login', function () {
    it('test - login', function () {
        cy.visit('https://deploy-preview-158--lucid-jepsen-ae3f5a.netlify.com/checkout')
        cy.eyesOpen({
      	      appName: 'Login',
	      testName: 'Login',
	      browser: [
		    {width: 320, height: 600, name: 'chrome'},
		    {width: 1366, height: 1300, name: 'chrome'},
		    {width: 320, height: 600, name: 'firefox'},
		    {width: 1366, height: 1300, name: 'firefox'}
  	      ]
	});
	cy.eyesCheckWindow('Login Page');
	cy.get('#username')
            .type('08796331666')
        cy.get('#password')
            .type('ctbc2016{enter}')
	cy.eyesClose();
    })
    // it('check', function () {
    //     cy.get(user).console('info').then(($user) => {
    //         // subject is still $button
    //     })
    //     cy.wait(300)
    //     expect(cy.getCookie('customerkey')).to.be.true
    //     cy.getCookie('customerkey')
    //       .should('exist')
    // })
})

// customerKey
// userName
// x-authorization
// x-id
