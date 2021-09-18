import React from 'react';
import { Text } from 'react-native';

const getFullName = (firstName, secondName, thirdName) => {
    return firstName + " " + secondName + " " + thirdName;
}

const Cat = () => {
    return (
        <View>
            <Text>
                Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
            </Text>
        </View>
    );
}

export default Cat;