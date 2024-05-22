import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';
import './contactUs.css';

const ContactUs = () => {
    const mapStyles = {
        height: "400px",
        width: "100%"
    };

    return (
        <div className="contact-us">
            <h1>Contact Us</h1>
            <p>Have questions or feedback? Get in touch with us using the form below:</p>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Enter your message" rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
            <div className="map-container">
                <LoadScript
                    googleMapsApiKey="AIzaSyBJYPXvR-UZaN29KsdAiHiPbkgR6EbZHYQ"
                >
                    <GoogleMap
                        mapContainerStyle={mapStyles}
                        zoom={13}
                        center={{ lat: 41.319360, lng: 19.825000 }}
                    >
                        <Marker
                            position={{ lat: 41.319360, lng: 19.825000 }}
                            title="Marker Title"
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    );
};

export default ContactUs;
