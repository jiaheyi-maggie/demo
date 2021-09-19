import React from 'react';
import { Text, View } from 'react-native';
import styles from '../assets/styles/style';

const getFullName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
}


const Cat = ({ name, fur_features }) => {
    name = getFullName(name, "tum", "bruh");
    return (
        <View style={styles.container}>
            <Text style={[styles.cat, {color : 'yellow'}]}>
                Hello, I am {name}! And I am {fur_features}!
            </Text>
        </View>
    );
}

export default Cat;