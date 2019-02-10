
// Read file content and print word n meaning
function doesFileExist (filePath) {
    const fs = require('fs') 

    fs.readFile(filePath, 'utf8', (err, data) => { 
        if (err) {
            console.log('File cannot be found')
        } else {
            let lines = data.split('\n')
            for (let i = 0; i < lines.length; i++) {
                let singleLine = lines[i].split('-')
                console.log(singleLine[0])
                if (singleLine[1]) {
                    let definition = singleLine[1].split(',')
                    for (let j = 0; j < definition.length; j++) {
                        console.log(definition[j])
                    }
                }
            }
        }
      
    })
}

doesFileExist("./question_one_data.txt")



