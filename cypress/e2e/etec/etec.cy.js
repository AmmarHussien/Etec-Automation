/// <reference types="cypress" />

it("try on Etec", () => {
    cy.visit("https://etec-orch.org/service-catalog/details/64242be76d58186b3f73d3c2")

    cy.get('.ctm-btn').click().then(() => {



        cy.get('#englishName').type('Reviewer')

        cy.get('#arabicName').type('عمار')

        cy.get('.formio-component-residencePlace').click()
            .then(() => {
                cy.get('#choices--residencePlace-item-choice-1').click({ force: true })
            })

        cy.get('.formio-component-localResidenceCity').click()
            .then(() => {
                cy.wait(5000)
                cy.get("#choices--localResidenceCity-item-choice-2").click({ force: true })
            });
        cy.get(".form-check-input").first().should("have.value", 'nationalIdNumber').click()


        cy.get('#identityNumberOrIqamaNumber').type('1257456781')
        
        cy.get(".form-check-input").eq(2).should("have.value", '0').click()


    })
})
