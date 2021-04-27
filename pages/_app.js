import '../global.css'
import Header from '../components/Header'
import styled from 'styled-components'
import { DogsProvider } from '../context/DogContext'

function MyApp({ Component, pageProps }) {
	//Using header as a global component
	return (
		<DogsProvider>
			<AppContainer>
				<Header />
				<Component {...pageProps} />
			</AppContainer>
		</DogsProvider>

	)
}

export default MyApp

const AppContainer = styled.div`
	padding: 0px;
	margin: 0px;
	background-color: whitesmoke;
	min-height: 100vh;
`