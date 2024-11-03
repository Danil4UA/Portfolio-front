import './App.css'
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <> 
      <Header />
      <div 
        style={{
          width: "100%", 
          minHeight: "100vh", // Ensures the background spans the full viewport height
          backgroundImage: "url(https://t4.ftcdn.net/jpg/02/10/45/95/360_F_210459536_XmLDEcKq2DpeNLVmheuWeu9NM9aGKnih.jpg)", 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover", // Ensures the image covers the full area
          backgroundPosition: "center" // Centers the image
        }}
      >
        <Content />
        <Footer />
      </div>
    </>
  );
}

export default App
