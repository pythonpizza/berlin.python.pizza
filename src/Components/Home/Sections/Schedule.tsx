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
                    <p>Coming soon! </p><br />
                    <p>If you’re interested in giving a talk yourself, please apply through the Call for Proposals.</p>
                    <p>Each talk will be 10 minutes long and we would love to have many first time speakers!</p>
                </Container>
            </section >
        );
    }
}
