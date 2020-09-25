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
    button: {
        marginVertical: 10,
    },
    input: {
        padding: 5,
        margin: 5,
    }
});

const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View width="90%">
                <Text h1>Vallot</Text>
                <Input
                    placeholder='Username'
                    style={styles.input}
                    leftIcon={
                        <Icon
                            name='user'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Input
                    placeholder='Password'
                    style={styles.input}
                    leftIcon={
                        <Icon
                            name='lock'
                            size={24}
                            color='black'
                        />
                    }
                />
                <Text></Text>
                <Button
                    title="Log In"
                    type="outline"
                    style={styles.button}
                />
                <Text></Text>
                <Button
                    title="Sign Up"
                    type="outline"
                    onPress={() => navigation.navigate('Sign Up')}
                />
            </View>
        </View>
    );
};

export default Login;