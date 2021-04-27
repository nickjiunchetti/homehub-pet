import styled from 'styled-components'

//Context
import { useDogs } from '../context/DogContext'

//Components
import Button from '../components/Button'
import { BiX } from 'react-icons/bi'

export default function HorizontalCard({ source, dog }) {
	const { dogs, setDogs } = useDogs()

	function onPressX() {
		const selectedDogs = dogs
		const index = selectedDogs.indexOf(dog.id)
		if (index > -1) {
			selectedDogs.splice(index, 1)
		}
		setDogs(selectedDogs)
	}

	return (
		<CardContainer>
			<XContainer onClick={() => onPressX()}>
				<XIcon />
			</XContainer>
			<Row>
				{source && <ImageContainer style={{ backgroundImage: `url(${source})` }} />}
				<CardTitle>{dog.name}</CardTitle>
			</Row>
		</CardContainer>
	)
}

const CardContainer = styled.div`
	align-items: center;
	justify-content: center;
	margin: 0 35px 35px 35px;  
	border-radius: 10px;
	box-shadow: 0 4px 16px 0 rgba(0,0,0,0.3);
    transition: 0.3s;
	width: 500px;
	
	&:hover {
		box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
	}
`

const ImageContainer = styled.div`
	border-radius: 10px;
	width: 100%;
	max-width: 120px;
	height: 100px;
	background-size: 100% 100%;
`

const XContainer = styled(Button)`
	display: flex;
	float: right;
	padding:  0 25px 0 0;
`

const CardTitle = styled.h2`
    color: #555555;
	margin: 0 0 12px 10px;
	font-size: 2.4vh;
	display: flex;
	align-items: center;
`

const Row = styled.div`
	display: flex;
	padding: 12px;
`

const XIcon = styled(BiX)`
	color: lightgray;
	position: absolute;
	z-index: 1000;
	font-size: 1.5em;
`