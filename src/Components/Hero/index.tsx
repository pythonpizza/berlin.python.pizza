import * as React from 'react';

import Wave from '@/Components/Wave';

import './index.css';

export default class Hero extends React.Component {
    render() {
        return (
            <div className="hero">
                <div className="hero--info">
                    <h1>Python Pizza Night</h1>
                    <h2>
                        Berlin @ Wooga <br />
                        <a href="https://goo.gl/maps/mkQP66yAnXGHdK9w6" target="_blank">
                            Saarbrücker Str. 38, 10405 Berlin
                        </a>
                    </h2>
                    <h2>Saturday 16 May 2020</h2>
                    <h2>10:00 - 17:30 - Doors open at 09:30</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
