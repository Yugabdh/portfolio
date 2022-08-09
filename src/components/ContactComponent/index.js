import React from 'react';
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const ContactComponent = () => {
    return (
        <div className="contact-wrapper">
            <div className="contact-left">
                <p className="contact-small-info">
                I’m interested in freelance opportunities and full-time web development job opportunities. <br />
                However, if you have other request or question, don’t hesitate to use the form.
                </p>

                <p className="contact-small-info">
                You can find more information about me on following platforms.
                </p>
                        
                <div className="contact-social">
                    <span className="contact-social-media-icon-wrapper">
                        <a className="social-media-links" href="https://www.linkedin.com/in/yugabdh-pashte/" target="_blank" rel="noopener noreferrer"> <BsLinkedin /></a>
                    </span>
                    <span className="contact-social-media-icon-wrapper">
                        <a className="social-media-links" href="https://github.com/Yugabdh" target="_blank" rel="noopener noreferrer"> <BsGithub /></a>
                    </span>
                    <span className="contact-social-media-icon-wrapper">
                        <a className="social-media-links" href="https://twitter.com/yugabdh" target="_blank" rel="noopener noreferrer"> <BsTwitter /></a>
                    </span>
                </div>
            </div>
            <div className="contact-right" data-aos="fade-in" data-aos-easing="ease-in" data-aos-anchor-placement="top-bottom">
                <form className="contact-form" action="https://formsubmit.co/yugabdhppashte@gmail.com" method="POST">
                    <div className="contact-form-wrapper">
                        <div className="form-item contact-grid-2">
                            <div className="contact-grid-item name">
                                <input 
                                type="text" 
                                name="name"
                                size="40" 
                                className="input-text" 
                                aria-required="true" 
                                aria-invalid="false" 
                                placeholder="Name"
                                required="true"
                                />
                                <span className="focus-border"></span>
                            </div>
                            <div className="contact-grid-item email">
                                <input 
                                type="email" 
                                name="email" 
                                size="40" 
                                className="input-text" 
                                aria-required="true" 
                                aria-invalid="false" 
                                placeholder="Email"
                                required="true"
                                />
                                <span className="focus-border"></span>
                            </div>
                        </div>
                        <div className="form-item contact-grid-1">
                            <div className="contact-grid-item">
                                <input 
                                type="text" 
                                name="_subject" 
                                size="40" 
                                className="input-text" 
                                aria-required="true" 
                                aria-invalid="false" 
                                placeholder="Subject (Optional)"
                                />
                                <span className="focus-border"></span>
                            </div>
                        </div>

                        <div className="form-item contact-grid-1">
                            <div className="contact-grid-item">
                                <textarea 
                                name="message" 
                                cols="40" rows="6" 
                                className="input-textarea" 
                                aria-invalid="false" 
                                placeholder="Message" 
                                style={{height: 262+'px'}} 
                                required="true" 
                                />
                                <span className="focus-border"></span>
                            </div>
                        </div>

                        <div className="contact-grid-1">
                        <div className="button-borders">
                            <button className="primary-button">
                              Send message !
                            </button>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactComponent;
