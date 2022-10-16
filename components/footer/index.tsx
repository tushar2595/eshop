
import  styles from '../../styles/footer.module.scss';
const Footer = () => {
    return (
        <>
            <footer className={styles.sitefooter}>
                <div className={styles.container}>
                    <div className={styles.sitefooter__top}>
                        <div className={styles.sitefooter__description}>
                            <h6>Logo <span>E</span>-Shop</h6>
                            <p>House My Brand designs clothing for the young, the old & everyone in between – but most
                                importantly, for the fashionable</p>
                            <ul className={styles.sitefooter__socialnetworks}>
                                <li><a href="#"><i className={styles.iconfacebook}></i></a></li>
                                <li><a href="#"><i className={styles.icontwitter}></i></a></li>
                            <li><a href="#"><i className={styles.iconinstagram}></i></a></li>
                            <li><a href="#"><i className={styles.iconyoutubeplay}></i></a></li>
                        </ul>
                    </div>

                    <div className={styles.sitefooter__links}>
                        <ul>
                            <li>Shopping online</li>
                            <li><a href="#">Order Status</a></li>
                            <li><a href="#">Shipping and Delivery</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Payment options</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <ul>
                            <li>Information</li>
                            <li><a href="#">Gift Cards</a></li>
                            <li><a href="#">Find a store</a></li>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Bacome a member</a></li>
                            <li><a href="#">Site feedback</a></li>
                        </ul>
                        <ul>
                            <li>Contact</li>
                            <li><a href="#">store@uikit.com</a></li>
                            <li><a href="#">Hotline: +1 131 138 138</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.sitefooter__bottom}>
                <div className={styles.container}>
                    <p>DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </footer>
    </>
  )
};


export default Footer