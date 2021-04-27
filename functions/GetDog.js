//Data
import * as Six from '../breed/6.json'
import * as Sixteen from '../breed/16.json'
import * as EightyOne from '../breed/81.json'
import * as OneTwoOne from '../breed/121.json'

export default function getDog(id) {
	const dogData = {
		6: Six.default,
		16: Sixteen.default,
		81: EightyOne.default,
		121: OneTwoOne.default
	}

	const dog = dogData[id]
	const source = `/static/images/${id}.jpg`

	return { dog, source }
}