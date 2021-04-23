import { useRouter } from 'next/router'
import styled from 'styled-components'

//Data
import GetDog from '../../../functions/GetDog'

//Components
import Card from '../../../components/Card'

const Product = () => {
	const router = useRouter()
	const { id } = router.query

	return (
		<DetailsContainer>
			<DetailsTitle>Detalhes</DetailsTitle>
			<Card
				source={GetDog(id).source}
				dog={GetDog(id).dog}
				button={true}
			/>
		</DetailsContainer>
	)
}

const DetailsContainer = styled.div`
	text-align: center;
	background-color: whitesmoke;
`

const DetailsTitle = styled.h1`
	margin: 20px;
	font-size: 22px;
	color: #555555;
`

export default Product