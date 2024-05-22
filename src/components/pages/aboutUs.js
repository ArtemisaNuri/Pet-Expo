import React, { useState } from 'react';
import './aboutUs.css';

const AboutUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        cellphone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="about-us">
            <h1>About Us</h1>
            <p>
                Welcome to Pet Expo, the ultimate destination for pet enthusiasts and animal lovers! Our expo is a celebration of all things furry, feathered, and fun, bringing together the best of the pet world under one roof. Whether you're a devoted dog lover, a curious cat enthusiast, or a fan of our fine-feathered friends, there's something for everyone at the Pet Expo.
            </p>

            <h2>Our Mission</h2>
            <p>
                At the Pet Expo, our mission is to promote responsible pet ownership and to celebrate the joy that pets bring into our lives. We aim to educate, inspire, and entertain our visitors with a variety of exhibits, interactive demonstrations, and expert talks.
            </p>

            <h2>What to Expect</h2>
            <p>
                Dogs: Discover a diverse range of dog breeds, from the tiny and adorable to the large and majestic. Our dog section features agility demonstrations, obedience training sessions, and even a meet-and-greet with some of the most beloved dog breeds.
            </p>
            <p>
                Cats: Enter the enchanting world of cats, where you can learn about different breeds, grooming techniques, and health tips. Watch cat agility courses and interact with some of the cutest felines you'll ever meet.
            </p>
            <p>
                Birds: For our avian admirers, the bird section showcases a stunning variety of birds, from colorful parrots to melodic songbirds. Learn about bird care, training, and get up close with these fascinating creatures.
            </p>

            <h2>Join Us</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cellphone">Cellphone:</label>
                    <input type="text" id="cellphone" name="cellphone" value={formData.cellphone} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AboutUs;
