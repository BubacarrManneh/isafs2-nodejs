// json assignment here
const fs = require('fs')

fs.readFile('countries.json', (error, data) => {
    if(error) {
        return ('an error occured', error);
    }
    const readData = Buffer.from(data).toString();
    console.log('data', readData)

    const printJson =JSON.parse(readData)
    const countries = printJson.map(country => {
        return ({'Country' : country.mame})
    })

    const msg = 'The list of country names'
    const countriesData = JSON.stringify(countries)

    fs.writeFile('countries.json', msg, countriesData, error => {
        if(error) {
            return ('an error occured', error);
        }
    })
})