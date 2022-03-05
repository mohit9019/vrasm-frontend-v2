import { Nav, Navbar, Container, } from 'react-bootstrap';
import "../../css/categories/Categories.css";
function Categories(){
    return(
        <>
        <div style={{zIndex:"5"}}>
            <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark" style={{marginTop:"20px"}}>
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight:"20px",marginLeft:'auto',fontSize:'10px',padding:'0.30rem 0.60rem',color:'white',border:'3px solid',borderRadius:'6px',backgroundColor:'rgb(116, 66, 167)'}} />
  <Navbar.Collapse  id="responsive-navbar-nav" style={{justifyContent:'center',alignItems:'center',fontSize:'10px'}} >
    
    <div className="cat">
      <Nav>
      <Nav.Link href="/categoriespage" style={{marginLeft:'auto',marginRight:'auto'}}><p>HTML 5</p></Nav.Link>
      <Nav.Link href="/categoriespage" style={{marginLeft:'auto',marginRight:'auto'}}><p>Responsive</p></Nav.Link>
      <Nav.Link href="/categoriespage" style={{marginLeft:'auto',marginRight:'auto'}}><p>Bootstrap</p></Nav.Link>
      <Nav.Link href="/categoriespage" style={{marginLeft:'auto',marginRight:'auto'}}><p>Wordpress</p></Nav.Link>
      <Nav.Link href="/categoriespage" style={{marginLeft:'auto',marginRight:'auto'}}><p>Psd</p></Nav.Link>
      <Nav.Link href="/categoriespage" style={{marginLeft:'auto',marginRight:'auto'}}><p>Tailwind</p></Nav.Link>
      </Nav>
    </div>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
</div>
        </>
    );
}
export default Categories;