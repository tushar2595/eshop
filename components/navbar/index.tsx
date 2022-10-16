import styles from '../../styles/navbar.module.scss';
import { Col, Row } from 'antd';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const Header = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div className={styles.containerheader}>
            <div className={styles.containerlogo}>Logo</div>
            <div>
                <a className={styles.menucontent}>Products</a>
                <a className={styles.menucontent}>Blogs</a>
                <a className={styles.menucontent}>About us</a>
            </div>

            <div className={styles.userProfileContainer}>
                <div onClick={showDrawer} className={styles.burgerIcon}><MenuUnfoldOutlined /></div>
                <div className={styles.userContentIcons}><SearchOutlined /></div>
                <div className={styles.userContentIcons}><ShoppingCartOutlined /></div>
                <div className={styles.userContentIcons}><UserOutlined /></div>
            </div>
            <Drawer placement="right" onClose={onClose} open={open}>
                    <Col><a className={styles.menucontent}>Products</a></Col>
                    <Col><a className={styles.menucontent}>Blogs</a></Col>
                    <Col><a className={styles.menucontent}>About us</a></Col>
            </Drawer>
        </div>
    )
}
export default Header;