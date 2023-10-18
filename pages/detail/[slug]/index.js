//Css styles
import styles from "@/styles/detail.module.css";

//Framework imports
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Space,
  Col,
  Typography,
  Modal,
  message,
  Skeleton,
} from "antd";

//Icons
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

//Custom hooks and apiCall
import { deletePost, detailPost, updatePost } from "@/pages/api";

const { TextArea } = Input;
const { Text } = Typography;
const { confirm } = Modal;

const Detail = ({ props }) => {
  const router = useRouter();

  const [detailData, setDetailData] = useState([]);
  const [detailTitle, setDetailTitle] = useState("");
  const [detailBody, setDetailBody] = useState("");

  useEffect(() => {
    const postId = router.query.slug;
    postId &&
      detailPost(postId).then((res) => {
        setDetailData(res.data);
        setDetailTitle(res.data.title);
        setDetailBody(res.data.body);
      });
  }, [router.query.slug]);

  const handleUpdate = (id) => {
    const updateData = {
      id: id,
      title: detailTitle,
      body: detailBody,
    };
    updatePost(id, updateData);
  };

  const handleDelete = (id) => {
    deletePost(id);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this post?",
      icon: <ExclamationCircleFilled />,
      content: "The post will be deleted. Are you sure?",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        handleDelete(detailData.id);
        router.push("/");
      },
      onCancel() {},
    });
  };

  return (
    <>
      <Skeleton
        paragraph={{
          rows: 30,
          width: "80%",
        }}
        active
        loading={!detailData}
      >
        <Col span={24} className={styles.detailWrapper}>
          <Col span={24} className={styles.detailContent}>
            <Space direction="horizontal" size={16}>
              <Button shape="circle">
                <Link href={"/"}>
                  <ArrowLeftOutlined />
                </Link>
              </Button>
              <Text strong>Posts</Text>
            </Space>
            <Button type="primary" icon={<PlusOutlined />}>
              <Link href={"/create"}>New Post</Link>
            </Button>
          </Col>
          <Col span={24}>
            <TextArea
              onChange={(e) => setDetailTitle(e.target.value)}
              value={detailTitle}
              placeholder="Post Title Text..."
              rows={4}
              className={styles.detailTextArea}
            />
            <TextArea
              value={detailBody}
              onChange={(e) => setDetailBody(e.target.value)}
              placeholder="Post Description..."
              rows={6}
            />
          </Col>

          <Col span={24} className={styles.detailButtons}>
            <Button
              onClick={showDeleteConfirm}
              type="primary"
              danger
              icon={<DeleteOutlined />}
            >
              Delete
            </Button>
            <Button
              onClick={() => {
                handleUpdate(detailData.id);
              }}
              type="primary"
              icon={<EditOutlined />}
            >
              <Link href={"/"}>Update</Link>
            </Button>
          </Col>
        </Col>
      </Skeleton>
    </>
  );
};

export default Detail;
