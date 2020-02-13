import * as React from 'react';

import Container, { Sizes } from '@/Components/Container';
import ScheduleItem from '@/Components/ScheduleItem';
import { SPEAKERS, SCHEDULE } from '@/dataset';

export default class Schedule extends React.Component {
    render() {
        return (
            <section id="schedule" className="schedule">
                <Container size={Sizes.medium}>
                    <Container size={Sizes.small}>
                        <h1>Schedule</h1>
                    </Container>
                    {/* <ul>
                        {SCHEDULE.map(schedule => (
                            <ScheduleItem
                                key={schedule.order}
                                schedule={schedule}
                                speaker={typeof schedule.speaker !== 'undefined' ? SPEAKERS[schedule.speaker] : null}
                            />
                        ))}
                    </ul> */}
		    <p><b>Coming soon! <a href="https://forms.gle/um1jAQXWrGpM7qwg6" target="_blank">Apply here for a talk.</a></b></p>
		    <p>Each talk will be 10 minutes long and we would love to have many first time speakers!</p>
                </Container>
            </section >
        );
    }
}
