import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'

//Data
import * as Breeds from '../breed/breeds.json'

//Components
import Card from '../components/Card'

export default function Home() {
	return (
		<div>
			<Head>
				<title>DogHub</title>
			</Head>

			<main>
				<HomeContainer>
					<HomeTitle>Para adoção</HomeTitle>
					{Breeds.default.map((breed) => (
						<Link
							key={breed.id}
							href={`/product/${breed.id}`}>
							<a>
								<Card
									source={`/static/images/${breed.id}.jpg`}
									dog={breed}
								/>
							</a>
						</Link>
					))}
				</HomeContainer>
			</main>
		</div>
	)
}

const HomeContainer = styled.div`
	text-align: center;
	background-color: whitesmoke;
`

const HomeTitle = styled.h1`
	margin: 20px;
	font-size: 22px;
	color: #555555;
`