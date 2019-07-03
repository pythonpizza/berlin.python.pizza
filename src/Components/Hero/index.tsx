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
                        <a target="_blank" rel="noopener noreferrer">
                            Berlin @ TBA
                        </a>
                    </h2>
                    <h2>23 August 2019</h2>
                </div>

                <Wave />
            </div>
        );
    }
}
