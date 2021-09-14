import React from "react";
import { Row, Col, Form, Divider, Space } from 'antd'
import  { InstagramOutlined, GithubOutlined, YoutubeOutlined  } from '@ant-design/icons';



class Bottom extends React.Component {
render() {
    return(
        <div className='bottomInfo' style={{backgroundColor: 'rgba(0, 0, 0, 0.85)', width: {}}}>
            <Divider style={{color:'whitesmoke'}}></Divider>  
            <div className="information" style={{display: 'inline', textAlign: 'center'}}>
                <div>
                    <span style={{
                        fontSize: 14,
                        color: 'whitesmoke',
               
                    }}>
                         © 2021 Mostovenko, Inc. All rights reserved.
                    </span>
                </div>
                <Space/>
                <div className="icons" style={{marginTop: 5, paddingBottom:20 }}>
                    <a 
                        href="https://www.instagram.com/endlesslandlass/" 
                        target="_blank"
                    >
                        <InstagramOutlined 
                            className="instagram" 
                            style={{
                            fontSize: 28,
                        }}/>
                    </a> 
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="https://github.com/Mostovenko-shef" 
                       target="_blank"
                    >
                        <GithubOutlined 
                            className="gith"
                            style={{
                            fontSize: 28,
                            
                         }}/>
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp; 
                    <a href="https://www.youtube.com/c/SpitefulDick" 
                       target="_blank"
                    >
                        <YoutubeOutlined 
                                className="youtube"
                                style={{
                                fontSize: 28,
             
                        }}/>
                    </a> 
                </div>
            </div> 
        </div>
    )
}
}

export default Bottom