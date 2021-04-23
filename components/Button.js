import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
	const content = props.children

	return (
		<ButtonContainer {...props}>
			<ButtonDisplay>
				{content}
			</ButtonDisplay>
		</ButtonContainer>
	)
}

const ButtonContainer = styled.div`
	text-align: center;
    border-radius: 5px;
	color: white;
`

const ButtonDisplay = styled.h1`
	font-weight: bold;
	margin: 0px;
`