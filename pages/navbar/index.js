//Css styles
import styles from "@/styles/dashboard.module.css";

//Framework imports
import Image from "next/image";
import { Badge, Layout, Space, Typography } from "antd";

//Icons
import { HiViewGrid } from "react-icons/hi";
import { RxAvatar } from "react-icons/rx";
import { IoMdNotifications } from "react-icons/io";

const { Text } = Typography;

export default function Dashboard({ allPosts }) {
  return (
    <Layout className={styles.dashboardWrapper}>
      <Space direction="horizontal" className={styles.navbar}>
        <div className={styles.navbarLogo}>
          <Image
            alt="Picture of the author"
            src="/logo.png"
            width={100}
            height={80}
          />
          <Text style={{ width: "80px", fontSize: "20px" }} strong>
            Blog
          </Text>
        </div>
        <div className={styles.navbarUserInfo}>
          <Badge count={allPosts.length} offset={[10, -9]}>
            Posts
          </Badge>
          <IoMdNotifications className={styles.navbarIcons} />
          <HiViewGrid className={styles.navbarIcons} />
          <RxAvatar className={styles.navbarIcons} />
        </div>
      </Space>
    </Layout>
  );
}
