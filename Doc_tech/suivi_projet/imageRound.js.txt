import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function ImageRound(props) {
    return (
        <Image name={props.name} source={{ uri: props.url }} style={[styles.image, { height: props.height }]}
        />
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
});
