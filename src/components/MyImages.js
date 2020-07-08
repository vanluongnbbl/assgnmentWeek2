import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'

const imgData = [
    { id: 1, imgSource: require('../../assets/images/image1.jpg') },
    { id: 2, imgSource: require('../../assets/images/image2.jpg') },
    { id: 3, imgSource: require('../../assets/images/image3.jpg') },
    { id: 4, imgSource: require('../../assets/images/image4.jpg') },
    { id: 5, imgSource: require('../../assets/images/image1.jpg') },
    { id: 6, imgSource: require('../../assets/images/image2.jpg') },
    { id: 7, imgSource: require('../../assets/images/image1.jpg') },
    { id: 8, imgSource: require('../../assets/images/image2.jpg') },
    { id: 9, imgSource: require('../../assets/images/image1.jpg') },
    { id: 10, imgSource: require('../../assets/images/image2.jpg') },
    { id: 11, imgSource: require('../../assets/images/image1.jpg') },
    { id: 12, imgSource: require('../../assets/images/image2.jpg') }
];

const centerImgData = Math.floor(imgData.length / 2)

function MyImages() {
    return (
        <View style={styles.wrapScroll}>
            <ScrollView
                contentContainerStyle={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <View style={styles.myImages} >
                    {imgData.slice(0, centerImgData).map(item => {
                        return <Image
                            key={item.id}
                            source={item.imgSource}
                            style={styles.images}
                        />
                    })}
                </View>
                <View style={styles.myImages} >
                    {imgData.slice(centerImgData).map(item => {
                        return <Image
                            key={item.id}
                            source={item.imgSource}
                            style={styles.images}
                        />
                    })}
                </View>
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapScroll: {
        flex: 0.75
    },
    myImages: {
        flexDirection: 'column',
    },
    images: {
        flexDirection: 'row',
        flex: 1,
        height: 200,
        width: 200,
        margin: 15,
    }
})



export default MyImages