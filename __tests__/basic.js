const {normalizeSpace} = require ('..')

test ('bad', () => {

	expect (() => normalizeSpace (null)).toThrow ('string')

})

test ('basic', () => {

	expect (normalizeSpace ('')).toBe ('')

	expect (normalizeSpace (' ')).toBe ('')

	expect (normalizeSpace ('\t AA')).toBe ('AA')

	expect (normalizeSpace ('BB\r\n')).toBe ('BB')

	expect (normalizeSpace (`

		SELECT
			*
		FROM
			users t
			
	`)).toBe ('SELECT * FROM users t')

})
