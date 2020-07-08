import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

function MyInformation() {
    return (
        <View style={styles.follow}>
            <View style={styles.infoItem}>
                <Text style={styles.numberFollows}>43</Text>
                <Text style={styles.txtFollows}>Photos</Text>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.numberFollows}>1.2M</Text>
                <Text style={styles.txtFollows}>Followers</Text>
            </View>
            <View style={styles.infoItem}>
                <Text style={styles.numberFollows}>1</Text>
                <Text style={styles.txtFollows}>Following</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    follow: {
        flex: 0.1,
        flexDirection: 'row'
    },
    infoItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    numberFollows: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    txtFollows: {
        color: 'gray',
        fontSize: 13,
    }
})

export default MyInformation