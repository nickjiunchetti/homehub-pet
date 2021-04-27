import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

//Context
import { useDogs } from '../context/DogContext'

//Components
import Button from '../components/Button'

export default function Card({ source, dog, button }) {
	const { dogs, setDogs } = useDogs()
	const words = dog.temperament ? dog.temperament.split(' ') : null
	const tags = !words ? null : words.map((word, index) => {
		const removeDot = word.replace(',', '')
		if (index < 4) {
			return <CardTag key={index}>{removeDot}</CardTag>
		}
	})

	function onPressAdotar() {
		if (!dogs) {
			setDogs(dog.id)
		} else {
			const selected = dogs

			const found = selected.find(dogId => dogId === dog.id)

			if (found) {
				return
			}
			selected.push(dog.id)
			setDogs(selected)
		}

	}

	return (
		<CardContainer>
			{source &&
				<Image
					src={source}
					alt={dog.name}
					width={480}
					height={480}
				/>}
			<InnerContainer>
				<CardTitle>{dog.name}</CardTitle>
				<Row>
					{tags}
				</Row>
				{dog.life_span &&
					<List>
						<li>- Life Span: {dog.life_span}</li>
						{dog.bred_for &&
							<li>- Bred For: {dog.bred_for}</li>}
						<li>- Breed Group: {dog.breed_group}</li>
						<li>- Temperament: {dog.temperament}</li>
						<li>- Weight: {dog.weight.metric}</li>
						<li>- Height: {dog.height.metric}</li>
					</List>}
				{button &&
					<Link href={'/product/list'}>
						<a>
							<Button
								onClick={() => onPressAdotar()}
								style={{ backgroundColor: 'grey', padding: 12, fontSize: '4vw' }}
								color={'black'}>
								ADOTAR
							</Button>
						</a>
					</Link>}
			</InnerContainer>
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

	&:hover {
		box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
	}
`
const ImageContainer = styled.div`
	width: 200px;
	height: 200px;
	background-image: url("../../public/images/6.jpg")
`
const InnerContainer = styled.div`
	padding: 10px;
`

const CardTitle = styled.h2`
    color: #555555;
	text-align: left;
	margin: 0 0 12px 10px;
	font-size: 4vh;
`

const Row = styled.div`
	display: flex;
	justify-content: space-around;
`

const CardTag = styled.h3`
	font-size: 3.8vw;
    color: #555555;
	font-weight: 100;
	border: 1px solid #555555;
	border-radius: 5px;
	border-width: 1px;
	padding: 5px;
	margin: 0 4px 10px 0px;
`

const List = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	margin: 5px;
	padding: 0 0 10px 10px;
	font-size: 4vw;
	text-align: left;
`