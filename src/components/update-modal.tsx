import React, { useEffect, useState } from "react";
import { Button, Input, Modal } from "antd";

interface Props {
  todo: string;
  id: number;
  setInputs: React.Dispatch<React.SetStateAction<string[]>>;
  inputs: string[];
}

const UpdateModal = ({ todo, id, setInputs, inputs }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [input, setInput] = useState("");
  const [rewrite, setRewrite] = useState(false);
  const [change, setChange] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log(input);
    if (rewrite) {
      setChange(true);
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  console.log("fjafkj");
  return (
    <>
      {change ? (
        <p onClick={showModal}>{input}</p>
      ) : (
        <p onClick={showModal}>{todo}</p>
      )}
      <Modal
        title="수정"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          defaultValue={todo}
          onChange={(e: {
            target: { value: React.SetStateAction<string> };
          }) => {
            setInput(e.target.value);
            setRewrite(true);
          }}
        />
      </Modal>
    </>
  );
};

export default UpdateModal;
