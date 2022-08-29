import React from 'react'
// import Tabs from 'react-bootstrap/Tabs'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Explore() {  
  
  return (
    <>
    <section className=''>
      <div className='explore mb-5 mt-5'>
      
      <h1 class="fancy-title"><span> Explore your Fast On</span></h1>

      <p>Lorem ipsum, dolor sit ametelit voluptas.
        Quibusdam, quia. Accusantium, Lorem <br /> ipsum, dolor sit ametelit voluptas.
        Quibusdam, quia. Accusantium,</p>
      </div>
      <div className='container'>
      <div class="card" className='exp'>
      <div class="card-body">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={5}>
          <Nav variant="pills" className="mt-5 flex-column">
          <ul class="list-group list-group-flush">
            <Nav.Item>
              <Nav.Link eventKey="first" className='list-group-item'>Easily Fits	<i class="fa fa-angle-right icon" aria-hidden="true"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" class="list-group-item">Get instant hot water <i class="fa fa-angle-right icon" aria-hidden="true"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3" class="list-group-item">Longer Life <i class="fa fa-angle-right icon" aria-hidden="true"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4" class="list-group-item">Designed for high rise buildings <i class="fa fa-angle-right icon" aria-hidden="true"></i></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="5" class="list-group-item">Strong construction quality <i class="fa fa-angle-right icon" aria-hidden="true"></i></Nav.Link>
            </Nav.Item>
            </ul>            
          </Nav>
        </Col>
        <Col sm={7}>
          
          <Tab.Content className='tab px-5 mt-3 mb-2'>
            <Tab.Pane eventKey="first" >
              <p>Tab 1 content Lorem ipsum, dolor sit ametelit voluptas. 
              Tab 1 content Lorem ipsum,content Lorem ipsum,</p>
              <video className='video' controls>
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/ogg" />
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/mp4" />
            </video>

            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <p>Tab 2 content
            Lorem ipsum, dolor sit ametelit voluptas.
        Quibusdam, quia. Accusantium, Lorem <br />
            </p>

            <video className='video' controls>
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/ogg" />
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/mp4" />
            </video>

            </Tab.Pane>

            <Tab.Pane eventKey="3">
            <p>Tab 2 content
            Lorem ipsum, dolor sit ametelit voluptas.
        Quibusdam, quia. Accusantium, Lorem <br />
            </p>

            <video className='video' controls>
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/ogg" />
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/mp4" />
            </video>

            </Tab.Pane>

            <Tab.Pane eventKey="4">
            <p>Tab 2 content
            Lorem ipsum, dolor sit ametelit voluptas.
        Quibusdam, quia. Accusantium, Lorem <br />
            </p>

            <video className='video' controls>
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/ogg" />
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/mp4" />
            </video>
            </Tab.Pane>

            <Tab.Pane eventKey="5">
            <p>Tab 2 content
            Lorem ipsum, dolor sit ametelit voluptas.
        Quibusdam, quia. Accusantium, Lorem <br />
            </p>

            <video className='video' controls>
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/ogg" />
                <source src="https://youtu.be/wZrhthV9DFQ" type="video/mp4" />
            </video>

            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

    </div>
    </div>
      </div>
      </section>

    </>
  )
}

export default Explore