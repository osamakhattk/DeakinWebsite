import React from "react";
import "./Subscribe.css";

const Subscribe = (props) => {

    const [contact] = {
        email: ''
    }

    const handleClick = async () => {
        await fetch('http://localhost:8004/', {
            method: 'post',
            headers: { 'Content-Tyoe': 'application/json' },
            body: JSON.stringify({
                email: contact.email
            })
        })
            .then(response => response.json())
            .then(data => JSON.parse(data))
            .catch(err => {
                console.log("Error:" + err)
            })
    }

    return <div>
        <form class="form-inline" action="/" method="post">

            <label for="email"> SIGN UP FOR OUR DAILY INSIDER </label>

            <input type="email" id="email" placeholder="Enter email" name="email" />

            <button onClick={handleClick}>
                Subscribe
            </button>

        </form>
    </div>
}

export default Subscribe