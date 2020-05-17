describe('Constellations Page', function() {
    it('has constellations', function() {
        cy.visit('http://localhost:3001/constellations')

        cy.get('.card').first()
    })
    it('has a search bar', function() {
        cy.get('.filter_input').click()
            .type('capricorn')
            .should('have.value', 'capricorn')
    })
    it('cards show constellations on click', function() {
        cy.get('.card').click()

        cy.contains('Capricorn')
    })
})
describe('Planets Page', function() {
    it('has planets', function() {
        cy.contains('Planets').click()

        cy.contains('Jupiter')
    })
    it('has a search bar', function() {
        cy.get('.filter_input').click()
            .type('venus')
            .should('have.value', 'venus')

        cy.contains('Venus')
    })
    it('cards show planets on click', function() {
        cy.get('.card').click()

        cy.contains('Named after the Roman goddess of love and beauty')
    })
})
describe('Signs Page', function() {
    it('has signs', function() {
        cy.contains('Signs').click()

        cy.contains('Virgo')
    })
    it('has a search bar', function() {
        cy.get('.filter_input').click()
            .type('capricorn')
            .should('have.value', 'capricorn')
    })
    it('cards show signs on click', function() {
        cy.get('.card').click()

        cy.contains('goat')
    })
})
describe('Login Page', function() {
    it('user can log in', function() {
        cy.contains('Login').click()

        cy.get('.username_input').click()
            .type('Bri')
            .should('have.value', 'Bri')
        cy.get('.password_input').click()
            .type('s')
            .should('have.value', 's')
        cy.get('.submit_button').click()

        cy.contains('Hello Cosmonaut Bri')
    })
})
describe('Sign up Page', function() {
    it('user can sign up', function() {
        cy.contains('Logout').click()

        cy.get('.create_account_button').click()

        cy.get('.name_input').click()
            .type('Joe')
            .should('have.value', 'Joe')
        cy.get('.bio_input').click()
            .type('i am a test account')
            .should('have.value', 'i am a test account')
        cy.get('.birthdate_input').click()
            .type('2010-01-01')
        cy.get('.username_input').click()
            .type('Joe')
            .should('have.value', 'Joe')
        cy.get('.password_input').click()
            .type('s')
            .should('have.value', 's')
        cy.get('.submit_button').click()

        cy.contains('Hello Cosmonaut Joe')
    })
})
describe('Registered Gazers Page', function() {
    it('has users', function() {
        cy.contains('Registered Gazers').click()

        cy.contains('Paul')
    })
    it('can be filtered by name', function() {
        cy.get('.filter_input')
            .type('Bri')
            .should('have.value', 'Bri')
        
        cy.contains('Paul').should('not.exist')
    })
})
describe('Delete Account Button', function() {
    it('deletes user account', function() {
        cy.contains('Login').click()

        cy.get('.username_input').click()
            .type('Joe')
            .should('have.value', 'Joe')
        cy.get('.password_input').click()
            .type('s')
            .should('have.value', 's')
        cy.get('.submit_button').click()

        cy.contains('My Profile').click()

        cy.get('.delete_account_button').click()

        cy.url().should('include', '/login')
    })
})