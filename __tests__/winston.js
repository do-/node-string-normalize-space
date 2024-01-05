const {Writable} = require ('stream')
const {createLogger, format: {combine, printf}, transports} = require ('winston')
const normalizeSpace = require ('..').logform

test ('basic', async () => {

	let s = ''

	const stream  = new Writable ({
		write (r) {s += r.toString ()},
	})

	const logger = createLogger ({
		transports: [
//		  new transports.Console (),
		  new transports.Stream ({stream})
		],
		format: combine (
			printf (({message, meta}) => `${message} ${meta}`)
			, normalizeSpace ()
			, printf (({message}) => `(${message})`)
		),
	})

	logger.log ({level: 'info', message: '\t1    2\n'})
	
	expect ([s.trim ()]).toStrictEqual (['(1 2)'])

})
