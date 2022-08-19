import { useState } from "react";
// Style
import { Button, Modal } from "antd";
//App
const LogOutModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <Button type="primary" onClick={showModal} danger>
        Log out
      </Button>
      <Modal
        title="Log out o k ase"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>¡Te has deslogeado!</p>
      </Modal>
    </>
  );
};

export default LogOutModal;
