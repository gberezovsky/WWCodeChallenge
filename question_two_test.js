// This page contains the test 

const helper = require('./question_two_helper.js')
const data = require('./question_two_data.js')

module.exports = {
  '@tags': ['homePage', 'searchStudio', 'studioSchedule', 'questionTwo'],

  beforeEach: function (browser) {
    browser.currentTest.author = 'guy.berezovsky'
  },

  /*
   * This test navigates to WW home page
   * And validate page title
   * Then click on the find studio link
   * And validate search title
   * Then search for a valid zip code
   * Then click on the first found results
   * And validate and return meeting schedule details
   */
  'Studio Search and Schedule Test': function (browser) {
    const page = browser.page.question_two_page()

    browser
        .url('https://www.weightwatchers.com/us/')
        .waitForElementVisible(page.homePage.pageHeadline)
        .assert.containsText(page.homePage.pageHeadline, data.homePageTitle)
        .click(page.homePage.findStudioLink)
        .waitForElementVisible(page.studioPage.meetingSearchTitle)
        .assert.containsText(studioPage.meetingSearchTitle, data.findStudioTitle)
        .click(page.studioPage.meetingSearchInput)
        .setValue(data.zipCode)
        .click(page.studioPage.submitButton)
        .waitForElementVisible(page.studioResults.firstStudio)
        .click(page.studioPage.firstStudio)
        .waitForElementVisible(page.studioPage.meetingScheduleContainer)
        .waitForElementVisible(page.studioPage.studioScheduleTable)
    helper.getScheduleSummary('Sun')
  },

  afterEach: function (browser, done) {
    browser.finish(browser.currentTest.results.failed)

    setTimeout(function () {
      done()
    }, 1000)
  }
}
