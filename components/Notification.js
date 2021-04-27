import React from 'react'
import styled from 'styled-components'

export default function Notification({ number }) {

	if (number) return (
		<NotificationContainer>
			{number &&
				<Span>{number}</Span>}
		</NotificationContainer>
	)

	return null
}

const NotificationContainer = styled.div`
	position: absolute;
	width: 100%;
	display: flex;
	justify-content: flex-end;
`

const Span = styled.span`
	background-color: red;
	border-radius: 25px;
	color: white;
	padding: 1px 4px;
	font-size: 15px;
`