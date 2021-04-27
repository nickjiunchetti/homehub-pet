import styled from 'styled-components'
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

	return (
		<CardContainer>
			{source && <ImageContainer style={{ backgroundImage: `url(${source})` }} />}
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
							<AdoptButton onClick={() => setDogs([...dogs, dog.id])}>
								ADOTAR
							</AdoptButton>
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
	max-width: 700px;

	&:hover {
		box-shadow: 0 8px 24px 0 rgba(0,0,0,0.3);
	}
`
const ImageContainer = styled.div`
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
	width: 100%;
	height: 350px;
	background-size: 100% 100%;
`
const InnerContainer = styled.div`
	padding: 10px;
`

const CardTitle = styled.h2`
    color: #555555;
	text-align: left;
	margin: 0 0 12px 10px;
	font-size: 3vh;

	@media screen and (min-width: 1600px) {
		font-size: 35px;
	}
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

	@media screen and (min-width: 1600px) {
		font-size: 35px;
	}
`

const List = styled.ul`
	list-style-type: none;
	margin: 0;
	padding: 0;
	margin: 5px;
	padding: 0 0 10px 10px;
	font-size: 4vw;
	text-align: left;

	@media screen and (min-width: 1600px) {
		font-size: 25px;
	}
`

const AdoptButton = styled(Button)`
	background-color: grey;
	padding: 12;
	font-size: '4vw';
	color: white;

@media screen and (min-width: 1600px) {
		font-size: 35px;
	}
`