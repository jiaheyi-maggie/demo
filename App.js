import React from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import styles from './assets/styles/style';
import Cat from './screens/cat';

const width = Dimensions.get('window').width;

export default function App() {
	return (
		<ScrollView>
			<View style={styles.container}> 
				<Text> This is the main screen</Text>
				<Image 
					source={require('./assets/images/react-native-pic.png')}
					style={{width: width - 130, height: 200}}
				/>
				<Cat name="Cozzie" fur_features="floofy" />
			</View>
		</ScrollView> 
	);
}


