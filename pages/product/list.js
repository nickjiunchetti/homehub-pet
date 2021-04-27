import styled from 'styled-components'

//Data
import GetDog from '../../functions/GetDog'

//Context
import { useDogs } from '../../context/DogContext'

//Components
import HorizontalCard from '../../components/HorizontalCard'

const Adoptions = () => {
	const { dogs } = useDogs()

	console.log(dogs, 'list')

	return (
		<ListContainer>
			<ProductListTitle>Sua lista de adoção</ProductListTitle>
			{dogs.length > 0 ? dogs.map((id, index) => {
				const dog = GetDog(id)
				return (
					<HorizontalCard
						key={index}
						source={dog.source}
						dog={dog.dog}
					/>
				)
			}) : null}

		</ListContainer>
	)
}

const ListContainer = styled.div`
	text-align: center;
	background-color: whitesmoke;
	align-items: center;
	display: flex;
	flex-direction: column;
`

const ProductListTitle = styled.h1`
	margin: 20px;
	font-size: 22px;
	color: #555555;
`

export default Adoptions