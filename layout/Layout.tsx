import NavBar from "../components/navbar/index";

type LayoutType = {
    children?: React.ReactNode
}

const Main = ({ children }: LayoutType) => {
    return (
        <div><NavBar />{children}</div>
    )
}
export default Main;