import React, {Component} from "react";
import Nav from "./Nav";


class Contact extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="contact-form">
                    <form action="https://formspree.io/xdozrgyj" method="POST">
                        <input type="text" className="form_input contact_name" name="name" placeholder="Name" required/>
                        <input type="text" className="form_input contact_email" name="email" placeholder="Email"
                               required/>
                        <textarea type="text" className="form-control" rows="10" name="reason"
                                  placeholder="Reason for email"> </textarea>
                        <button type="submit" className="rounded mx-auto d-block btn btn-warning form_btn">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}
export default Contact;