import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';

export default class About extends React.Component {
    render() {
        return (
            <section id="about">
                <Container size={Sizes.medium}>
                    <br /><h2><b>Update</b>: Because of the current situation with Covid-19, we're postponing the event to August.
                    Follow us on twitter to stay updated with the new location and date. We're coming back soon!</h2><br /><br /><br />
                    <h1>Python Pizza</h1>
                    <p><b>Python Pizza</b> is a micro conference organized by the Python Berlin Community.</p>
                    <p>
                        We bring the Python Community together for some amazing food and Python Talks.</p>
                    <p>We believe in and encourage practical sessions, in which developers share their experience and lessons from real-world projects, each talk is 10 mins long.</p>
                    <p>Thanks to the Python Pizza (Naples!) that started this format!</p>
                    <br></br>
                </Container>
            </section >
        );
    }
}
