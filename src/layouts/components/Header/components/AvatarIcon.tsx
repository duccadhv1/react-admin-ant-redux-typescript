import avatar from "@/assets/images/avatar.png";
import { HOME_URL } from "@/config/config";
import { setToken } from "@/redux/modules/global/action";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Menu, Modal } from "antd";
import { useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfoModal from "./InfoModal";
import PasswordModal from "./PasswordModal";

const AvatarIcon = (props: any) => {
	const { setToken } = props;
	const navigate = useNavigate();

	interface ModalProps {
		showModal: (params: { name: number }) => void;
	}
	const passRef = useRef<ModalProps>(null);
	const infoRef = useRef<ModalProps>(null);

	const logout = () => {
		Modal.confirm({
			title: "Đăng Xuất",
			icon: <ExclamationCircleOutlined />,
			content: "Bạn có chắc chắn muốn đăng xuất？",
			okText: "Đăng xuất",
			cancelText: "Huỷ",
			onOk: () => {
				setToken("");
				navigate("/login");
			}
		});
	};

	const menu = (
		<Menu
			items={[
				{
					key: "1",
					label: <span className="dropdown-item">Trang chủ</span>,
					onClick: () => navigate(HOME_URL)
				},
				{
					key: "2",
					label: <span className="dropdown-item">Tài khoản</span>,
					onClick: () => infoRef.current!.showModal({ name: 11 })
				},
				{
					type: "divider"
				},
				{
					key: "4",
					label: <span className="dropdown-item">Đăng xuất</span>,
					onClick: logout
				}
			]}
		></Menu>
	);
	return (
		<>
			<Dropdown overlay={menu} placement="bottom" arrow trigger={["click"]}>
				<Avatar size="large" src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef}></PasswordModal>
		</>
	);
};

const mapDispatchToProps = { setToken };
export default connect(null, mapDispatchToProps)(AvatarIcon);
