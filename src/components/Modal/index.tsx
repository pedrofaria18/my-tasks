import React, { ReactNode, useEffect, useState } from "react";

import { View, Modal as ModalReactNative, StyleSheet } from "react-native";
import { HeaderModal } from "./HeaderModal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
  title: string;
}

export function Modal({ isOpen, setIsOpen, children, title }: ModalProps) {
  const [modalVisible, setModalVisible] = useState(isOpen);

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  return (
    <View style={styles.centeredView}>
      <ModalReactNative
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setIsOpen();
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <HeaderModal title={title} setIsOpen={setIsOpen} />
            {children}
          </View>
        </View>
      </ModalReactNative>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: "90%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
