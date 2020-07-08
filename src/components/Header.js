import React from 'react'
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <View style={styles.info} >
            <View style={styles.infoImg}>
                <Image
                    style={styles.imgAvatar}
                    source={require('../../assets/images/Luong.jpg')}
                />
            </View>
            <View style={styles.infoText}>
                <Text style={styles.name}>Nguyen Van Luong</Text>
                <Text style={styles.jobName}>Developer</Text>
                <View style={styles.infoBtn}>
                    <TouchableOpacity style={styles.btnFollow}>
                        <Text style={styles.txtFollow}>Follow</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnMessage}>
                        <FontAwesomeIcon style={styles.iconMessage} icon={faPaperPlane} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    info: {
        fontSize: 20,
        flex: 0.15,
        paddingTop: 40,
        flexDirection: 'row',
        display: 'flex',
        justifyContent: 'center',
    },
    infoImg: {
        flex: 1,
        display: 'flex',
        alignItems: 'center'
    },
    imgAvatar: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    infoText: {
        flex: 1,
        paddingTop: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    jobName: {
        fontSize: 12,
        color: 'gray',
    },
    infoBtn: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    btnFollow: {
        flex: 1,
        backgroundColor: 'rgb(71,113,246)',
        borderRadius: 20,
        alignItems: 'center',
        marginRight: 10,
        padding: 4,
    },
    txtFollow: {
        color: '#fff',
    },
    btnMessage: {
        flex: 1,
        backgroundColor: 'rgb(120,213,250)',
        padding: 4,
        alignItems: "center",
        borderRadius: 20,
        marginRight: 20
    },
    iconMessage: {
        color: '#fff'
    }
})

export default Header