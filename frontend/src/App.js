 import Header from "./components/Header";
 import { Container } from 'react-bootstrap'
 import Footer from "./components/Footer";
 
 const App = () => {
  return (
    <div className="App">
     <>
      <Header />
      <main className="py-3">
        <Container>
          <h2>Welcome to Proshop</h2>
        </Container>
      </main>
      <Footer />
     </>
    </div> 
  );
}

export default App;
