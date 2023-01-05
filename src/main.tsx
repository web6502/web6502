import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';

const theme = {
	config: {
		initialColorMode: "dark",
		useSystemColorMode: false
	}
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ChakraProvider theme={extendTheme(theme)}>
			<App />
		</ChakraProvider>
	</React.StrictMode>
)
