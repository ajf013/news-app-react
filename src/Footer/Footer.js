import React, { Component } from 'react';
import {Icon} from 'semantic-ui-react';
import './Footer.css';

export class Footer extends Component {
    render() {
        return (
            <div data-aos="fade-up" className="footer_main">
                <div className="footer_Icons">
                    <span className="footer_git"><a target="_blank" rel="noreferrer noopener" href="https://github.com/ajf013"><Icon name="github" size="big" /></a></span>
                    <span className="footer_link"><a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/ajf013-francis-cruz/"><Icon name="linkedin" size="big" /></a></span>
                    <span className="footer_insta"><a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/its_me_ajf013/"><Icon name="instagram" size="big" /></a></span>
                    <span className="footer_wht"><a target="_blank" rel="noreferrer noopener" href="https://api.whatsapp.com/send?phone=918870585619"><Icon name="whatsapp" size="big" /></a></span>
                    <span className="footer_twi"><a target="_blank" rel="noreferrer noopener" href="https://twitter.com/Itsme_Ajf013"><Icon name="twitter" size="big" /></a></span>
                </div>
                <div  className="footer_content">
                    <span>Copyrights <Icon name="copyright" />2021 - Designed and Developed by Francis Cruz (aka) AJF013</span>
                </div>
            </div>
        )
    }
}

export default Footer;
