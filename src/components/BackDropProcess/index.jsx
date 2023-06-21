import { Modal, Spinner } from "native-base";
import React from "react";

const BackDropProcess = ({ open }) => {
  return (
    <Modal
      isOpen={open}
      _backdrop={{
        bg: "coolGray.900",
      }}
    >
      <Spinner color="#FFA2AB" size={70} />
    </Modal>
  );
};

export default BackDropProcess;
