import { Navbar, Nav, Form, Button,Badge } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css'

const NavbarComponet = () => {
    return (

        <Navbar className='navbar-main' >
       

        
            <Nav  className='nav'>
            <div className='nav-bar-main'>
            <div>
        <Button variant="success" className='logo-btn'>Logo</Button>
        </div>
        <div>
        <InputGroup className="mb-3" style={{width:'538px',marginTop:'10px'}}>
        <Form.Control
          
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1" style={{backgroundColor:'white'}}><i class="bi bi-search"></i></InputGroup.Text>
      </InputGroup>
</div>
                <Nav.Link href="#Post Project" className='navbar-post-project'><b>Post Project</b></Nav.Link>
                <Nav.Link href="#Search Project" className='navbar-search-project'><b>Search Project</b></Nav.Link>
                <Nav.Link href="#Chat">
                
                <i class="bi bi-chat-left " style={{fontSize:'25px',position:'relative'}}></i>
                
                <span class="position-relative top-0 end-10 translate-middle badge rounded-pill bg-danger">
    9
    
  </span>
                </Nav.Link>
                <Nav.Link href="#favorite" className='icon-size-navbar'><i class="bi bi-heart " style={{fontSize:'25px',position:'relative'}} ></i>
                <span class="position-relative top-0 end-10 translate-middle badge rounded-pill bg-danger">
    9
    
  </span>
                </Nav.Link>
                <div className="right-navbar-image"  > </div>
                <i class="bi bi-chevron-down"></i>
                </div>
            </Nav>
       
    </Navbar>

    );
}

export default NavbarComponet;
