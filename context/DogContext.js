import React, { createContext, useState, useContext } from 'react'

export const DogsContext = createContext()

export default function DogsProvider({ children }) {
	const [dogs, setDogs] = useState([])

	return (
		<DogsContext.Provider
			value={{
				dogs,
				setDogs
			}}>
			{children}
		</DogsContext.Provider>
	)
}

export function useDogs() {
	const context = useContext(DogsContext)
	const { dogs, setDogs } = context

	return { dogs, setDogs }
}