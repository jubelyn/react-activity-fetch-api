import "./App.css";
import Products from "./components/Products";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <h1 className="text-center">Product list</h1>
      <div className="App  d-flex align-items-center justify-content-center">
        <Products />
      </div>
    </>
  );
}

export default App;
