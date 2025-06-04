import Banner from "./Compoments/Banner";
import Footer from "./Compoments/Footer";
import Gallery from "./Compoments/Gallery";
import Header from "./Compoments/Header";

function App() {
    const navLinks = [
      {Name: 'Home', url: ''},
      {Name: 'Shop', url: ''},
      {Name: 'About', url: ''}
    ]

    const bookLinks = [
      'https://www.thebookdesigner.com/wp-content/uploads/2024/05/J.R.R.Tolkien-The-Hobbit.png',
      'https://blog-cdn.reedsy.com/directories/gallery/241/large_36dc2bfa3ecfa29a41812207f76df7a8.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KuFBHfsxQZK3XSsXtiRqaXOWcRn2MId1Tw&s',
    ]

    return (
        <main>
            <Header Title='Compoments' Links={navLinks}/>
            <Banner 
                Title='Be Creative' 
                Text='Be creative — not because you’re told to, but because there’s something 
                inside you that the world has never seen. Let your thoughts wander beyond the obvious, 
                beyond the expected. Chase curiosity like a spark in the dark. Create not to copy what 
                exists, but to reveal what’s hidden — in colors unspoken, in ideas unfinished, in moments 
                waiting to become magic. It doesn’t have to be perfect. It just has to be yours.'
            />
            <Gallery Links={bookLinks}/>
            <Footer />
        </main>
    );
}

export default App;
