// Jornada TIC
// Este script efetua um fluxo de compra de produto TIC

describe('Jornada TIC', function () {
    it('TIC - Checkout', function () {
	cy.viewport(1440, 1300)
        cy.visit('https://tic.enesolucoes.com.br/max-monitor')
	cy.get('#planos-max-monitor > div.Grid.Grid--alignCenter.flex-column-ns.mb16 > div > div > div.u-sizeFull.u-sm-size5of12.u-md-sizeFull.u-lg-sizeFull.db > div > div > div > div > label.f16.fw5.scorpion.dib.RadioButtonGroup-module--container--3ZwX7.pl20.mr0 > span.RadioButtonGroup-module--checkmark--yXo0x').click()
	cy.get('#___gatsby > div > main > section:nth-child(4) > div.Grid.Grid--alignCenter.flex-column-ns.mt12-ns > div.mc.center.u-sm-size10of12.u-md-size10of12.u-lg-size8of12 > div > div > div.flex-ns > div:nth-child(2) > div > div.f14.pt16.pb12.ph12.pb24-ns > div.mt12.mb12.u-sizeFull > section > div > svg.Counter-module--minus--KxBkq').click()
	cy.get('#___gatsby > div > main > section:nth-child(4) > div.Grid.Grid--alignCenter.flex-column-ns.mt12-ns > div.mc.center.u-sm-size10of12.u-md-size10of12.u-lg-size8of12 > div > div > div.u-sizeFull > div > div > div.u-sizeFull.u-sm-size6of12.u-md-size4of12.u-lg-size4of12.flex.justify-end.mt12.mt0-ns > button').click()
	cy.wait(3000)
	cy.get('body > div.ReactModalPortal > div > div > div.flex.items-start > div > div > div.u-sizeFull.u-lg-size5of12.shadow-1-l > div.flex.flex-column > a > button').click()
        cy.log('════ FLUXO DE LOGIN ════')
	cy.get('#username')
            .type('08796331666')
        cy.get('#password')
            .type('ctbc2016{enter}')
 	cy.wait(14000)
	cy.log('═══════ ENDEREÇO ═══════')
	cy.get('#cep').type('38010-070').should('have.value', '38010-070')
        cy.wait(3000)
	//cy.focused().type('{tab}');
	cy.get("#number").focus()
	cy.get('#number').type('1573')
	cy.wait(3000)
	//cy.get('.css-vj8t7z').select('APARTAMENTO', {force: true})
	//cy.get('#complement').type('b', {force: true})
	cy.get('#state').should('have.value', 'MG')
	cy.get('#city').should('have.value', 'Uberaba')
	cy.get('#addressType').should('have.value', 'Avenida')
	cy.get('#neighbourhood').should('have.value', 'Centro')
	cy.get('#address').should('have.value', 'Avenida Presidente Vargas')
	cy.get('#number').should('have.value', '1573')
	//cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.db > div.flex.justify-between.flex-column.flex-row-ns > div.u-sizeFull.u-sm-size8of12.u-md-size8of12.u-lg-size8of12 > section > div:nth-child(1) > form > div > div.Grid.flex > div:nth-child(5) > div.u-sizeFull.u-sm-size8of12.u-md-size8of12.u-lg-size8of12.mr12-ns > div > div').should('have.value', 'APARTAMENTO')
	//cy.get('#complement').should('have.value', 'b')
	cy.wait(3000)
	cy.get('#___gatsby > div > main > div > div > div.mc.center.db.mt24 > div > div.u-sizeFull.u-sm-size9of12.u-md-size9of12.u-lg-size9of12 > section > div:nth-child(1) > form > button').click()
	cy.log('══ FORMA DE PAGAMENTO ══')
	cy.wait(3000)	
	cy.get('#___gatsby > div > main > div > div > div.mc.center.mb16.Grid > div.u-size9of12.pr24 > div.flex.flex-wrap > section > div:nth-child(2) > div > div > label:nth-child(1) > span.RadioButtonGroup-module--checkmark--yXo0x').click()
	cy.get('#___gatsby > div > main > div > div > div.mc.center.mb16.Grid > div.u-size9of12.pr24 > div:nth-child(1) > div > button').click()
	cy.log('══ DADOS DO PAGAMENTO ══')
	cy.get('#___gatsby > div > main > div > div > section > div > div.PaymentCheckout-module--box--1kn3S.u-size1of1.u-sm-size8of12.u-md-size8of12.u-lg-size9of12.pr24 > section > div > div.flex.justify-between > div:nth-child(2) > div > div > h2').click()
	cy.get('#card_number').type('5160 6379 8796 7902').should('have.value', '5160 6379 8796 7902')
	cy.get('#card_name').type('JOAO CASTILHO DE SOUZA').should('have.value', 'JOAO CASTILHO DE SOUZA')
	cy.get('#card_expiration_month').type('9').should('have.value', '9')
	cy.get('#card_expiration_year').type('2021').should('have.value', '2021')
	cy.get('#card_safety_code').type('379').should('have.value', '379')
	//cy.get('#CardForm > div > div.u-sizeFull.mb24 > div > div').select('1')
	cy.get('#react-select-4-input').type('Avenida Presidente Vargas, 1573',  {force: true})
	cy.wait(3000)
	cy.contains('Finalizar preenchimento').click()
	cy.contains('Finalizar preenchimento').click()
	cy.log('═════ CONFIRMAÇÃO ══════')
	cy.wait(3000)
	cy.get('#___gatsby > div > main > div > div > div.Grid.mc.center.dn.db-ns.mb16 > div.flex.justify-between > div.u-size3of12 > section > button').click()
    })
})