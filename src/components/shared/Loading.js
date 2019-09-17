import React from 'react';
import { Container, Col, Fade, Row } from 'reactstrap';

import { ScaleLoader } from 'react-spinners';
import config from '../../helpers/config';

const Loading = function Loading() {
  return (
    <Container>
      <Row>
        <Col md={12} className='text-center' style={{paddingTop: '33vh'}}>
          <Fade>
            <ScaleLoader
              color={config().brandColor}
              height={32}
              width={12}
              sizeUnit={"px"}
            />
            <br/>
            <a href='/'> Back to home page </a>
          </Fade>
        </Col>
      </Row>
    </Container>
  );
};

export default Loading;
