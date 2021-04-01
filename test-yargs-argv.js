const yargs = require('yargs')

//console.log(process.argv)

// to attach add command to yargs
yargs.command({
    command: 'add',
    describe: 'Add a new post',
    builder:{
       title:{
         describe: 'Post Title',
         demandOptions: true,
         type: 'string'
       },
       body:{
        describe: 'Post body',
        demandOptions: true,
        type: 'string'
       }
    },
    handler: (argv) =>  {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'List posts',
    handler: () =>  {
        console.log('Listing posts')
    }
})

yargs.parse()

//console.log(yargs.argv)