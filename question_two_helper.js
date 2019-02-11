// This page contains helpers

module.exports = {
    getScheduleSummary: getScheduleSummary
}

// This function suppose to go through week days and return instructor name and number times listed per day
function getScheduleSummary(day) {
    const page = browser.page.question_two_page()
    const weekDays = Object.keys(data.scheduleDays)
    let str = day.toUpperCase()
    let arr = []

    weekDays.forEach((str) => {
        let instructorsPerDay = {}
        browser
           .getText(page.studioResults.scheduleInstructor, (result) => {
            let instructor = result.value
            if (instructorsPerDay.hasOwnProperty(instructor)) {
              let total = instructorsPerDay[instructor] + 1
           } else {
            instructorsPerDay[instructor] = 1
          }
        })
        browser.log('Name: ' + Objecy.keys(instructorsPerDay[instructor]) + 'Total: ' + total + 'Times')
        instructorsPerDay = {}
    })
}
