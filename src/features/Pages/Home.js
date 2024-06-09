import BooksList from "../BookList/Components/BooksList";
import Navbar from "../Shared/Navbar";





function Home(){
    return(
        <div>
             
                 <Navbar>
                    <BooksList></BooksList>
                 </Navbar>
            
        </div>
    )
}
export default Home;