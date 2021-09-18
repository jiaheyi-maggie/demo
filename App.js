import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native';

// export default function App() {
// 	return (
// 		<View style={styles.container}>
// 			<Text>Open up App.js to start working on your app!</Text>
// 			<StatusBar style="auto" />
// 		</View>
// 	);
// }

const App = () => {
	return (
		<ScrollView style={styles.scrollViewContainer}>
			<View style={styles.container}>
				<Text> This is the main screen </Text>
				<Text> Here are some text </Text>
				<Image
					source={require('./assets/images/react-native-pic.png')}
					style={{width: 200, height: 200}}
				/>
				<TextInput
					style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1
					}}
					defaultValue="You can type in me"
				/>
			</View>
		</ScrollView>
	)
}

/* This is what a JSON object looks like */
const styles = StyleSheet.create({
	// An object called container
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	scrollViewContainer: {
		margin: 50
	}
});

export default App;