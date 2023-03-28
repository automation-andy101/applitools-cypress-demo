/// <reference types="cypress" />

const urls1 = require('../fixtures/listOfUrlsInJSON-applitools-1.json');
const urls2 = require('../fixtures/listOfUrlsInJSON-applitools-2.json');

describe('Zaizi public website visual tests', () => {

    beforeEach(() => {
        cy.eyesOpen({
            appName: 'Zaizi Website',                       // The name of the app under test
            testName: Cypress.currentTest.title,        // The name of the test case
        })
    })

    it(`should visit all pages within the Zaizi LIVE website, and take a snapshot of each page`, () => {

        let i = 0;
        urls1.forEach(url => {
            
            cy.visit(url.url)

            if(i == 0) {
                cy.get('.moove-gdpr-infobar-allow-all').click();
            }

            cy.eyesCheckWindow({
                tag: url.url,
                target: 'window',
                fully: true,
                matchLevel: 'Layout'
            });
            i=i+1;;
        })
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        cy.eyesClose()
    })
})