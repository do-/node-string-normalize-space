module.exports = {

	normalizeSpace: s => {

		if (typeof s !== 'string') throw Error ('Expected a string, got: ' + s)
		
		s = s.trim ()

		const {length} = s

		let result = '', from = 0, to = 0, sp = false; while (to < length) {

			const c = s.charCodeAt (to)

			switch (c) {

				case 0x20:
				case 0x9:
				case 0xD:
				case 0xA:
					if (!sp) result += s.slice (from, to) + ' '
					from = ++ to
					sp = true
					break

				default:
					if (sp) sp = false
					to ++
	
			}

		}

		if (from === 0) return s

		return (result + s.slice (from)).trim ()

	}

}