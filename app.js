// read command-line arguments 
//example: node app.js add
//          0    1      2
const command = process.argv[2]

//console.log(process.argv)
if (command === 'add') {
    console.log("in if construct")
    var x = 10
    console.log('value of x', x)
    console.log("Adding Post...")
}
else if (command === 'remove') {
    console.log('Removing Post...')
}
