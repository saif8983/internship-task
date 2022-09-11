import { Navbar, Nav, Form, Button, Stack, } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import InputGroup from 'react-bootstrap/InputGroup';
import '../App.css'

const NavbarComponet = () => {
    return (

        <Navbar className='navbar-main' >
       

        
            <Nav  className='nav'>
            <div className='nav-bar-main'>
            <div>
            <div className='logo-btn'  ><Button  variant='Outlined'><div className='btn-footer-text'>Logo</div></Button></div>
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
                <Nav className='navbar-post-project'><b>Post Project</b></Nav>
                <Nav className='navbar-search-project'><b>Search Project</b></Nav>
                <Nav.Link href="#Chat">
                
                <i class="bi bi-chat-left " style={{fontSize:'25px',position:'relative',color:'#07A189'}}></i>
                <sup>
                <span class="position-relative top-0 end-10 translate-middle badge rounded-pill bg-danger">
    9
    
  </span>
  </sup>
                </Nav.Link>
                <Nav.Link href="#favorite" className='icon-size-navbar'><i class="bi bi-heart " style={{fontSize:'25px',position:'relative',color:'#07A189'}} ></i>
                <sup>
                <span class="position-relative top-0 end-10 translate-middle badge rounded-pill bg-danger">
    9
    
  </span>
  </sup>
                </Nav.Link>
                <OverlayTrigger
          trigger="click"
          placement="bottom"
          overlay={
            <Popover id={`popover-positioned-bottom`}>
              <Popover.Body>
                <Stack gap={2}>
                  <Stack direction="horizontal" gap={3}>
                  <i class="bi bi-person-fill" style={{fontSize:'25px',color:'#07A189'}}></i>
                   <div className='popover-navbar'>View Profile</div>
                  </Stack>
                  <Stack direction="horizontal" gap={3}>
                  <i class="bi bi-box-arrow-left" style={{fontSize:'25px',color:'#07A189'}}></i>
                   <div className='popover-navbar'>Logout</div>
                  </Stack>
                </Stack>
              </Popover.Body>
            </Popover>
          }
        >
          <div className="right-navbar-image"> </div>
        </OverlayTrigger>
                <i class="bi bi-chevron-down" style={{color:'#07A189'}}></i>
                </div>
            </Nav>
       
    </Navbar>

    );
}

export default NavbarComponet;
