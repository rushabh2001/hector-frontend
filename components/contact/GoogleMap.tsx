
import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <section className="map-area">
                <div className="container-fluid px-0">
                <div id="contact-map" className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60307.18729489101!2d72.7649191804684!3d19.142755516677873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b75f3df70939%3A0xba98b37727899ee7!2sEDENWOODS%20TOWER!5e0!3m2!1sen!2sin!4v1726036661675!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    style={{border:0}}
                    allow-full-screen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                </div>
            </section>
        </>
    );
};

export default GoogleMap;