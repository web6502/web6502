import { Center, Button, Heading, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Text, Textarea, Box } from '@chakra-ui/react';
import { useState } from 'react';

function App() {
	const [mode, setMode] = useState("select");
	
	if (mode == "advanced") {
		return (
			<>
				<Center>
					<SimpleGrid columns={2} spacing={10} style={{marginTop: 50}}>
						<Box width="30vw"><Textarea height="50vh" bg="#2D3748" resize="none" /></Box>
						<Box bg="#2D3748" height="50vh"></Box>
					</SimpleGrid>
				</Center>
				
				<Center>
					<SimpleGrid columns={2} spacing={10} style={{marginTop: 50}}>
						<Box width="30vw"></Box>
						<Box bg="#2D3748" height="15vh">
							<Button style={{marginTop: 15, marginLeft: 15}}>Run</Button>
						</Box>
					</SimpleGrid>
				</Center>
			</>
		);
	}

	return (
		<>
			<Center>
				<Heading style={{marginTop: 50, marginBottom: 50}} size="3xl">Choose a mode:</Heading>
			</Center>
			
			<Center>
				<SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
					<Card>
						<CardHeader>
							<Heading size="sm">Tutorial Mode</Heading>
						</CardHeader>
						<CardBody>
							<Text>A basic tutorial for 6502 assembly and the web6502 custom hardware.</Text>
						</CardBody>
						<CardFooter>
							<Button onClick={() => {alert("This feature has not been implemented yet.");}}>Select</Button>
						</CardFooter>
					</Card>
					<Card>
						<CardHeader>
							<Heading size="sm">Advanced Mode</Heading>
						</CardHeader>
						<CardBody>
							<Text>The code editor and emulator, ready to be used in any way you want.</Text>
						</CardBody>
						<CardFooter>
							<Button onClick={() => {setMode("advanced");}}>Select</Button>
						</CardFooter>
					</Card>
				</SimpleGrid>
			</Center>
		</>
	);
}

export default App;
