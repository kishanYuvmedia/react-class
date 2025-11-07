import React, { useEffect, useState } from 'react';
import './App.css';
import WebsiteLayout from './layout/website';
import WebRoute from './router/webroute';
import { BrowserRouter } from "react-router"
import Panel from './layout/panel';
import { Row,Col } from 'react-bootstrap';
function App() {
    const [isPanel, setIsPanel] = useState(false);
    return (
        <div className="App">
            {/* <Row>
                <Col sm={6} md={4} xl={2}>
                Hello
                </Col>
                <Col sm={6} md={4} xl={2}>
                Hello
                </Col>
                <Col sm={6} md={4} xl={2}>
                Hello
                </Col>
                <Col sm={6} md={4} xl={2}>
                Hello
                </Col>
                 <Col sm={6} md={4} xl={2}>
                Hello
                </Col>
                 <Col sm={6} md={4} xl={2}>
                Hello
                </Col>
            </Row> */}


            <button onClick={() => setIsPanel(!isPanel)}>Toggle Layout</button>
            <BrowserRouter>
                {isPanel ?
                 <Panel>

                 </Panel> 
                : <WebsiteLayout>
                    <WebRoute />
                </WebsiteLayout>}

            </BrowserRouter>
        </div>
    );
}

export default App;
