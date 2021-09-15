import React from 'react'
import { Row, Col, Card, Carousel, Space } from 'antd'
import Logo from '../../../../assets/vsco.svg'

const {Meta} = Card;

const contentStyle = {
  width: '100%',
  height: '500px',
  color: '#fff',
  textAlign: 'center',
}

const Second = () => (
  <div className='something'>
    <Carousel>
      <div className="slideOne">
        <h3 style={contentStyle}>1</h3>
      </div>

      <div className="slideTwo">
        <h3 className="two"  style={contentStyle}>
          <div className="textTwo">
            <h1 style={{color: 'inherit'}}><b>TECHNOLOGICAL SINGULARITY</b></h1>
            <p>hypothetical point in time at which technological growth becomes uncontrollable and irreversible, resulting in unforeseeable changes to human civilization.</p>
            <a 
             href="https://en.wikipedia.org/wiki/Technological_singularity" 
             target="_blank"
            ><button>Learn more</button></a>
          </div>
        </h3> 
      </div>
    </Carousel>
    <br/><br/>
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card 
          cover={<img 
                  src="https://cs13.pikabu.ru/post_img/big/2021/01/19/10/1611076203110844786.png"
                  style={{width: '100%', height: '100%', margin: 0}}
                  />} 
          bordered={false}
          hoverable
        >
          <Meta title="Cyberpunk 2077" description="" />
        </Card>
      </Col>
      <Col span={8}>
      <Card 
          cover={<img 
                  src="https://www.artofthetitle.com/assets/resized/sm/upload/o5/e5/2y/wn/dx_marketing_image2-0-1280-0-1024.jpg?k=b7a30da392"
                  style={{width: '100%', height: '100%', margin: 0}}
                  />} 
          bordered={false}
          hoverable
        >
          <Meta title="Deus Ex Human Revolution" description="" />
        </Card>
      </Col>
      <Col span={8}>
      <Card 
          cover={<img 
                  src="https://cs13.pikabu.ru/post_img/big/2021/01/19/10/1611076203110844786.png"
                  style={{width: '100%', height: '100%', margin: 0}}
                  />} 
          bordered={false}
          hoverable
        >
          <Meta title="Cyberpunk 2077" description="" />
        </Card>
      </Col>
    </Row>
    <br/>
    <Row gutter={16}>
      <Col span={8}>
      <Card 
          cover={<img 
                  src="https://cs13.pikabu.ru/post_img/big/2021/01/19/10/1611076203110844786.png"
                  style={{width: '100%', height: '100%', margin: 0}}
                  />} 
          bordered={false}
          hoverable
        >
          <Meta title="Cyberpunk 2077" description="" />
        </Card>
      </Col>
      <Col span={8}>
      <Card 
          cover={<img 
                  src="https://cs13.pikabu.ru/post_img/big/2021/01/19/10/1611076203110844786.png"
                  style={{width: '100%', height: '100%', margin: 0}}
                  />} 
          bordered={false}
          hoverable
        >
          <Meta title="Cyberpunk 2077" description="" />
        </Card>
      </Col>
      <Col span={8}>
      <Card 
          cover={<img 
                  src="https://cs13.pikabu.ru/post_img/big/2021/01/19/10/1611076203110844786.png"
                  style={{width: '100%', height: '100%', margin: 0}}
                  />} 
          bordered={false}
          hoverable
        >
          <Meta title="Cyberpunk 2077" description="" />
        </Card>
      </Col>
    </Row>
  </div>
</div>
)

export default Second