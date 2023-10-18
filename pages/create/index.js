import styles from "@/styles/create.module.css";
import { Button, Input, Space, Col, Typography, message } from "antd";
import { PlusOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useState } from "react";
import { createPost } from "@/pages/api";

const { TextArea } = Input;
const { Text } = Typography;

const CreatePost = () => {
  const [createTitle, setCreateTitle] = useState("");
  const [createBody, setCreateBody] = useState("");

  const handleCreate = () => {
    const postData = {
      title: createTitle,
      body: createBody,
    };
    createPost(postData);
  };

  return (
    <Col span={24} offset={1} className={styles.createWrapper}>
      <Col span={24} className={styles.createContent}>
        <Space direction="horizontal" size={16}>
          <Button shape="circle">
            <Link href={"/"}>
              <ArrowLeftOutlined />
            </Link>
          </Button>
          <Text strong>Posts</Text>
        </Space>
      </Col>
      <Col span={24}>
        <TextArea
          onChange={(e) => setCreateTitle(e.target.value)}
          value={createTitle}
          placeholder="Post Title Text..."
          rows={4}
          className={styles.createTextArea}
        />
        <TextArea
          value={createBody}
          onChange={(e) => setCreateBody(e.target.value)}
          placeholder="Post Description..."
          rows={6}
        />
      </Col>

      <Col span={24} className={styles.addButton}>
        <Button onClick={handleCreate} type="primary" icon={<PlusOutlined />}>
          <Link href={"/"}>Add Post</Link>
        </Button>
      </Col>
    </Col>
  );
};

export default CreatePost;
