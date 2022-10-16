import Layout from "../layout/Layout";
import 'antd/dist/antd.css';
import HomePage from "../components/homepage";
import Footer from "../components/footer";

const Home = () => {
  return (
    <Layout>
      <HomePage />
      <Footer/>
    </Layout>
  )
}

export default Home;
