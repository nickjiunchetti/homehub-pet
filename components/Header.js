import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Link from 'next/link'

//Components
import { BiStore, BiLeftArrowAlt } from 'react-icons/bi'
import Button from '../components/Button'

export default function Header() {
	const [showBackButton, setShowBackButton] = useState(false)

	const router = useRouter()

	useEffect(() => {
		if (router.pathname === '/') {
			setShowBackButton(false)
		} else {
			setShowBackButton(true)
		}
	}, [router.pathname])

	return (
		<HeaderContainer>
			<Button onClick={() => router.back()} style={{ visibility: `${showBackButton ? 'visible' : 'hidden'}` }} >
				<LeftArrowIcon />
			</Button>
			<Row>
				<HeaderText>DOG</HeaderText>
				<BoldText>HUB</BoldText>
			</Row>
			<BiStoreIcon />
		</HeaderContainer>
	)
}

const HeaderContainer = styled.div`
	display: flex;
	flex: 1;
	background-color: darkgray;
	justify-content: space-around;
	padding: 15px 0px 10px 0px;
`

const LeftArrowIcon = styled(BiLeftArrowAlt)`
	color: white;
	font-size: 8vw;
`

const HeaderText = styled.h1`
	color: white;
	font-size: 7vw;
	font-weight: normal;
	margin: 0;
`
const BoldText = styled.h1`
	color: white;
	font-size: 7vw;
	margin: 0;
	font-weight: bolder;
`

const BiStoreIcon = styled(BiStore)`
	color: white;
	font-size: 8vw;
`

const Row = styled.div`
	display: flex;
`