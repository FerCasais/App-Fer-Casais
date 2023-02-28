import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
} from "react-native";
import normalize from "react-native-normalize";

const ShowModals = (
  selectedItem,
  modalVisible,
  onCancelModal,
  onDeleteModal,
  items,

) => {
  return (
    <>
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
    </>
  );
};

export default ShowModals;

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
