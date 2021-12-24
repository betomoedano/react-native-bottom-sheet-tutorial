import React, { useCallback, useRef, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import ApplePay from './src/components/ApplePay';

export default function App() {

  const sheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  const snapPoints = ["40%",];

  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
    setIsOpen(true);
  }, []);


  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isOpen ? '#00000090' : '#fff'}]}>
      <Text style={styles.subtitle}>{new Date().toString().slice(0, 11)}</Text>
      <Text style={styles.title}>Today</Text>
      <View style={styles.shadow}>
         <Image style={[styles.image, {opacity: isOpen ? 0.2 : 1 }]} source={{ uri: 'https://i.guim.co.uk/img/media/8806177a01e00e4afc6d5f04ec4e99a0db9166fb/50_293_2969_1781/master/2969.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c99accd4e72bec8825ac783bb40043cf'}} />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSnapPress(0)}>
        <Text style={{ color: '#0080FB', fontSize: 16, fontWeight: '600'}}>GET</Text>
      </TouchableOpacity>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        onClose={() => setIsOpen(false)}
      >
        <BottomSheetView>
          <ApplePay />
        </BottomSheetView>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    
  },
  title: {
    fontSize: 32,
    textAlign: "left",
    margin: 10,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    textAlign: "left",
    marginLeft: 10,
    color: "#aaa",
    fontWeight: '500',
    
  },
  image: {
    width: "90%",
    height: 400,
    resizeMode: "cover",
    alignSelf: "center",
    borderRadius: 20,

  },
  shadow: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: .55,
    shadowRadius: 6.84,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#f4f4f4',
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  }
});