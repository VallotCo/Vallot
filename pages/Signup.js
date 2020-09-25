import React from 'react';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { StyleSheet, View } from "react-native";
import { Button } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        padding: 5,
    },
    button: {
        marginVertical: 20
    }
});

const Signup = () => {
    return (
        <View style={styles.container}>
            <View width="90%">
                <Text h1>Vallot</Text>
                <Input
                    placeholder='First Name'
                    style={styles.input}
                />
                <Input
                    placeholder='Last Name'
                    style={styles.input}
                />
                <Input
                    placeholder='Email'
                    style={styles.input}
                />
                <Input
                    placeholder='Password'
                    style={styles.input}
                />
                <Input
                    placeholder='Retype Password'
                    style={styles.input}
                />
                <Text></Text>
                <Button
                    title="Create Account"
                    type="outline"
                    style={styles.button}
                />
                <Text></Text>
            </View>
        </View>
    );
};

export default Signup;