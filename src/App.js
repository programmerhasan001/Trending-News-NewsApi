import { computeHeadingLevel } from '@testing-library/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Container, Nav, Navbar, Row, Spinner } from 'react-bootstrap';
import './App.css';
import News from './Components/News/News';

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-10-24&sortBy=publishedAt&apiKey=c0cd0a81c5144d77a8d82922ca039623')
      .then(res => res.json())
      .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="container">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold">Trending-News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-auto">
              <Nav.Link href="#home" className="px-4">Home</Nav.Link>
              <Nav.Link href="#link" className="px-4">blog</Nav.Link>
              <Nav.Link href="#link" className="px-4">about</Nav.Link>
              <Nav.Link href="#link" className="px-4">contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Row xs={1} md={3} className="g-4 mx-auto container mt-1">
        {
          news.length === 0 ?
            <Spinner animation="border" role="status" variant="success" className="mx-auto my-5">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            :
            news.map(nws => <News
              key={nws.url}
              news={nws}
            ></News>)
        }
      </Row>
    </div>
  );
}

export default App;
