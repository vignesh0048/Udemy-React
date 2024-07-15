import Nav from "./components/nav"
import Categories from "./components/categories"
import Sale from "./components/sale"
import Recommendations from "./components/recommendations"
import Topics from "./components/topics"
import Popular from "./components/popular"
import Footer from "./components/footer"

function App() {
    return (
        <div>
            <Nav></Nav>
            <Categories></Categories>
            <Sale></Sale>
            <Recommendations></Recommendations>
            <Topics></Topics>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )
}

export default App