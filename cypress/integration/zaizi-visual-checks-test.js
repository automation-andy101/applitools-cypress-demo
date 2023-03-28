/// <reference types="cypress" />

const liveSiteUrls = require('../fixtures/listOfUrlsInJSON-small-live.json');
const devSiteUrls = require('../fixtures/listOfUrlsInJSON-small-dev.json');
const liveSiteUrlsFifty = require('../fixtures/listOfUrlsInJSON-50.json');

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

    // it(`should visit all pages within the Zaizi LIVE website, and take a snapshot of each page`, () => {
            
    //     cy.visit('https://www.zaizi.com/blog/aiim-roadshow-2013-reflection-zaizis-interview-with-john-mancini-president-of-aiim/')

    //     cy.get('.moove-gdpr-infobar-allow-all').click();


    //     cy.eyesCheckWindow({
    //         tag: 'https://www.zaizi.com/blog/will-the-chief-digital-officer-ko-the-cio/',
    //         target: 'window',
    //         fully: true,
    //         matchLevel: 'Layout'
    //     });

    //     cy.visit('https://www.zaizi.com/blog/cucumber/')
        
    //     cy.eyesCheckWindow({
    //         tag: 'https://www.zaizi.com/blog/cucumber/',
    //         target: 'window',
    //         fully: true,
    //         matchLevel: 'Layout'
    //     });
    // })

    it(`should visit all pages within the Zaizi LIVE website, and take a snapshot of each page`, () => {

        let i = 0;
        // cy.log(liveSiteUrls.length)
        liveSiteUrlsFifty.forEach(url => {
            
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

    // it(`should visit all pages within the Zaizi DEV website, and take a snapshot of each page`, () => {

    //     let n = 0;
    //     devSiteUrls.forEach(url => {
            
    //         cy.visit(url.url)
    //         if(n == 0) {
    //             cy.get('.moove-gdpr-infobar-allow-all').click();
    //         }

    //         cy.eyesCheckWindow({
    //             tag: "Main page",
    //             target: 'window',
    //             fully: true,
    //             matchLevel: 'Layout'
    //         });
    //         n=n+1;;
    //     })
    // })

    // This method performs cleanup after each test.
    afterEach(() => {
        // Close Eyes to tell the server it should display the results.
        cy.eyesClose()
    })
})