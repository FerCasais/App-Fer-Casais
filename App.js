import React, { useState } from "react";
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  Modal,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import normalize from "react-native-normalize";
import Header from "./src/components/Header";
import ShowModals from "./src/components/ShowModals";

export default function App() {
  const [itemText, setItemText] = useState("");
  const [itemText2, setItemText2] = useState("");
  const [items, setItems] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const image = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH1S-zdlKssoDaCkb9I7Q-OfOPRDxT8hViCg&usqp=CAU",
  };
  const image3 = {
    uri: "https://i.ytimg.com/vi/rK8_Xf_2pfg/hqdefault.jpg",
  };

  const image2 = {
    uri: "https://dx35vtwkllhj9.cloudfront.net/trafalgarreleasing/the-bodyguard-30th-anniversary/images/regions/intl/onesheet.jpg",
  };

  const [selectedMovies, setSelectedMovies] = useState(image);

  const selectedHandler = () => {
    setSelectedMovies(image3);
  };

  const onChangeText = (text) => {
    setItemText(text);
  };

  const onChangeText2 = (text) => {
    setItemText2(text);
  };

  const addItemToState = () => {
    setItems((oldArry) => [...oldArry, { id: Date.now(), value: itemText }]);
    setItemText("");
  };

  const addItemToState2 = () => {
    setItems((oldArry) => [
      ...oldArry,
      { id: Date.now(), value: ` Tu puntaje es: ${itemText2} estrellitas` },
    ]);
    setItemText2("");
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <>
   
      <Header />
      
      <View style={styles.container}>
        <Image
          source={selectedMovies}
          resizeMode="cover"
          style={styles.image}
        ></Image>
      </View>

      <View style={styles.screen}>
        <Text style={styles.textSubTitle2}> Agregá tu comentario </Text>
        <View style={styles.addItemInputContainer}>
          <TextInput
            multiline
            placeholder="que te parecio?.. "
            style={styles.input}
            onChangeText={onChangeText}
            value={itemText}
          />
          <Button title="Comentar" onPress={addItemToState} />
        </View>

        <View style={styles.addItemInputContainer}>
          <TextInput
            keyboardType="numeric"
            placeholder="ponele tu puntuación ... "
            style={styles.input2}
            onChangeText={onChangeText2}
            value={itemText2}
          />
          <Button title="Puntaje ! !" onPress={addItemToState2} />
        </View>

        <View style={styles.botonPelis}>
          <Button title="cambiar de peli" onPress={selectedHandler} />
        </View>
        <FlatList
          data={items}
          renderItem={(itemData) => (
            <Pressable
              style={styles.itemContainer}
              onPress={() => {
                openModal(itemData.item);
              }}
            >
              <Text style={styles.boton}>X</Text>
              <Text style={styles.item}>{itemData.item.value}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />

       

        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.modalMainView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Eliminar comentario</Text>
              <Text style={styles.modalText}>
                ¿Está seguro que deseas eliminar tu comentario?{" "}
                <Text style={styles.modalBoldText}>{selectedItem?.value}</Text>?
              </Text>
              <View style={styles.modalActions}>
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={onCancelModal}
                >
                  <Text style={styles.textStyle}>Cancelar</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonDelete]}
                  onPress={() => {
                    onDeleteModal(selectedItem.id);
                  }}
                >
                  <Text style={styles.textStyle}>Eliminar</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
     
    
{/* <ShowModals
selectedItem = {selectedItem}
modalVisible = {modalVisible}
onCancelModal = {onCancelModal}
onDeleteModal = {onDeleteModal}
items={items}

/> */}
     
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    backgroundColor: "#FEFFAE",
  },
  addItemInputContainer: {
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: normalize(250),
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "#FEFFC0",
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
  },
  input2: {
    width: normalize(250),
    borderBottomColor: "black",
    borderBottomWidth: 1,
    backgroundColor: "#FEFFC0",
    fontSize: 18,
    borderColor: "black",
    borderWidth: 1,
  },
  itemContainer: {
    margin: 10,
    padding: 0,
    borderRadius: 5,
    backgroundColor: "#FEFFC0",
    width: 50,
  },
  item: {
    padding: 10,
    textAlign: "center",
    backgroundColor: "#fbe97e",
    color: "red",
    width: 300,
    marginLeft: 20,
  },
  modalMainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#e2e6ff",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#200",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBoldText: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    borderRadius: 20,
    padding: 0,
    marginHorizontal: 30,
  },
  buttonCancel: {
    backgroundColor: "#e64cad",
  },
  buttonDelete: {
    backgroundColor: "#ff9bd5",
  },
  container: {
    flex: 0.5,

    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    backgroundColor: "#FEFFC0",
  },

  image2: {
    // width: Dimensions.get("window").width,
    // height: Dimensions.get("window").height,
    height: 150,
    width: 200,
    marginTop: 40,
  },
  text: {
    color: "#F4A55F",
    fontSize: 42,
    lineHeight: 40,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FEFFC0",
    paddingTop: 10,
  },
  textSubTitle: {
    fontSize: 25,
    lineHeight: 30,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "#FEFFC0",
    width: normalize(380),
    paddingBottom: 20,
  },
  textSubTitle2: {
    fontSize: 15,
    lineHeight: 35,
    color: "black",
    fontStyle: "italic",
    textAlign: "center",
    backgroundColor: "#FEFFAE",
    marginTop: 0,
  },
  boton: {
    flex: 1,
    textAlign: "left",
  },
  image: {
    height: normalize(200),
    width: normalize(400),
  },
  botonPelis: {
    paddingTop: 20,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, TextInput, View, Image, ScrollView } from "react-native";
// import React, { useEffect, useState } from "react";

// console.log("viva boca juniors");

// export default function App() {
//   const [textItem, setTextItem] = useState("hola");

//   const [Counter, SetCounter] = useState(0);
//   const [Counter2, SetCounter2] = useState(0);
//   const [Counter3, SetCounter3] = useState(0);

//   const onChangeText = (text) => {
//     setTextItem(text);

//     console.log(text);
//   };

//   return (
//     <>

//       <View style={styles.screen}>
//         <View style={styles.inputContainer}>
//           <TextInput
//             placeholder="Item de lista"
//             style={styles.input}
//             onChangeText={onChangeText}
//             value={textItem}
//           />

//           <Button title="ADD" />
//         </View>
//       </View>

//       <View style={styles.itemList}>
//         <View>
//           <Button
//             title="moulin rouge"
//             style={styles.item}
//             placeholder="viva yo"
//             onPress={() => {
//               SetCounter(Counter + 1);
//             }}
//           />
//           <View>
//             <TextInput>likes {Counter}</TextInput>
//           </View>
//         </View>

// {/* <View>
//                          {/* <TextInput>likes {Counter2}</TextInput> */}
//                     <Image
//                           source={{
//                             uri: "https://m.media-amazon.com/images/I/717KH+f1fkL._AC_SL1000_.jpg",
//                             method: "POST",
//                             headers: {
//                               Pragma: "no-cache",
//                             },
//                             body: "Your Body goes here",
//                           }}
//                           style={{ width: 300, height: 400 }}
//                         />
//                       </View> */}

//         <View>
//           <View>
//             <Image
//               source={{
//                 uri: "https://media.revistavanityfair.es/photos/60e8648da8905e02065dbb92/master/w_320%2Cc_limit/87003.jpg",
//                 method: "POST",
//                 headers: {
//                   Pragma: "no-cache",
//                 },
//                 body: "Your Body goes here",
//               }}
//               style={{ width: 300, height: 400 }}
//             />
//             <Button
//               title="Titanic"
//               onPress={() => {
//                 SetCounter2(Counter2 + 1);
//               }}
//             />

//             <View>
//               <TextInput>likes {Counter2}</TextInput>
//               <Image
//                 source={{
//                   uri: "https://m.media-amazon.com/images/I/717KH+f1fkL._AC_SL1000_.jpg",
//                   method: "POST",
//                   headers: {
//                     Pragma: "no-cache",
//                   },
//                   body: "Your Body goes here",
//                 }}
//                 style={{ width: 300, height: 400 }}
//               />
//             </View>
//           </View>
//         </View>

//         <View>
//           <Button
//             title="El Padrino"
//             onPress={() => {
//               SetCounter3(Counter3 + 1);
//             }}
//           />
//           <Image
//             source={{
//               uri: "https://www.quepelivemoshoy.com/wp-content/uploads/2020/11/poster-el-padrino-726x1024.jpg.webp",
//               method: "POST",
//               headers: {
//                 Pragma: "no-cache",
//               },
//               body: "Your Body goes here",
//             }}
//             style={{ width: 300, height: 400 }}
//           />
//           <View>
//             <TextInput>likes {Counter3}</TextInput>
//           </View>
//         </View>
//       </View>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "red",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   screen: {
//     padding: 30,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   input: {
//     borderBottomColor: "black",
//     borderBottomWidth: 1,
//     width: 200,
//   },

//   itemList: {
//     backgroundColor: "pink",
//   },

//   item: {
//     fontWeight: "bold",
//     borderBootomColor: "black",
//     borderWidth: 1,
//     padding: 2,
//     textAlign: "center",
//     marginBottom: 10,
//     width: 100,
//     height: 50,
//   },
// });
