import React, { useState } from 'react';
import '../StylingComponents/UserFeedback.css';

const UserFeedback = () => {
    const [feedback, setFeedback] = useState({
        name: '',
        email: '',
        comments: '',
        rating: 0
    });

    const handleFeedbackChange = (e) => {
        const { name, value } = e.target;
        setFeedback({ ...feedback, [name]: value });
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Logic to handle feedback form submission
        alert('Thank you for your feedback!');
        setFeedback({ name: '', email: '', comments: '', rating: 0 });
    };

    return (
        <div className="feedback-section">
            <h1>Feedback</h1>
            <form onSubmit={handleFeedbackSubmit} className="feedback-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={feedback.name}
                        onChange={handleFeedbackChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={feedback.email}
                        onChange={handleFeedbackChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rating">Rating</label>
                    <select
                        id="rating"
                        name="rating"
                        value={feedback.rating}
                        onChange={handleFeedbackChange}
                        required
                    >
                        <option value="0">Select Rating</option>
                        <option value="1">1 - Very Poor</option>
                        <option value="2">2 - Poor</option>
                        <option value="3">3 - Average</option>
                        <option value="4">4 - Good</option>
                        <option value="5">5 - Excellent</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="comments">Comments</label>
                    <textarea
                        id="comments"
                        name="comments"
                        value={feedback.comments}
                        onChange={handleFeedbackChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-btn">Submit Feedback</button>
            </form>
        </div>
    );
};

export default UserFeedback;
