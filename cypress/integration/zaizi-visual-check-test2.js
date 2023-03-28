/// <reference types="cypress" />

const urls = require('../fixtures/listOfUrlsInJSON-small.json'); 

// This test case spec contains everything needed to run a full visual test against the ACME bank site.
// The file `applitools.config.js` specifies how to run this test against multiple browsers in Applitools Ultrafast Grid.

// This "describe" method contains related test cases with per-test setup and cleanup.
// In this example, there is only one test.
describe('Zaizi public website visual tests', () => {

    // This method performs setup before each test.
    beforeEach(() => {

        // Open Eyes to start visual testing.
        // Each test should open its own Eyes for its own snapshots.
        cy.eyesOpen({
            appName: 'Zaizi Website',                       // The name of the app under test
            testName: Cypress.currentTest.title,        // The name of the test case
        })
    })

    // This test covers login for the Applitools demo site, which is a dummy banking app.
    // The interactions use typical Cypress calls,
    // but the verifications use one-line snapshot calls with Applitools Eyes.
    // If the page ever changes, then Applitools will detect the changes and highlight them in the dashboard.
    // Traditional assertions that scrape the page for text values are not needed here.
    it('should visit zaizi web page and take a snapshot', () => {
        // cy.visit('https://www.zaizi.com/blog/aiim-roadshow-2013-reflection-zaizis-interview-with-john-mancini-president-of-aiim/')
        cy.visit('https://www.zaizi.com/blog/cucumber/')

        cy.get('.moove-gdpr-infobar-allow-all').click();

        cy.eyesCheckWindow({
            tag: "https://www.zaizi.com/blog/cucumber/",
            target: 'window',
            fully: true,
            matchLevel: 'Layout'
        });
    })

    // This method performs cleanup after each test.
    afterEach(() => {
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})

