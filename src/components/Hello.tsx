// src/components/Hello.tsx
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export interface Props {
    name: string;
    enthsiasmLevel?: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Hello({ name, enthsiasmLevel = 1, onIncrement, onDecrement }: Props) {
    if (enthsiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
        <View style={styles.root}>
            <Text style={styles.greeting}>
                Hello {name + getExclamationMarks(enthsiasmLevel)}
            </Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title="-" onPress={onDecrement || (() => {})} accessibilityLabel="decrement" color="red"/>
                </View>
                <View style={styles.button}>
                    <Button title="+" onPress={onDecrement || (() => {})} accessibilityLabel="increment" color="red"/>
                </View>
            </View>
        </View>
    );
}

export default Hello;

// styles
const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center"
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});

// helpers
function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}

