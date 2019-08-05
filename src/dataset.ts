import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const CHIARA_MEZZAVILLA = 0;
const SEBASTIAN_WITOWSKI = 1;
const TEREZA_IOFCIU = 2;
const MOISES_GUIMARES = 3;
const TANIA_VASILIKIOTI = 4;
const SERGEY_VASILYEV = 5;
const TAMARA_ATANASOSKA = 6;
const VALENTIN_HAENEL = 7;
const MARIELLE_DADO = 8
const DANIEL_RIOS = 9

export const SPEAKERS: Speaker[] = [
    {
        name: 'Chiara Mezzavilla',
        photo: 'https://pbs.twimg.com/profile_images/843489367066918913/Eax3Rtgy_400x400.jpg',
        job: 'Software Developer @ Zalando',
        social: 'https://twitter.com/ChiaraM_87',
    },
    {
        name: 'Sebastian Witwoski',
        photo: 'https://pbs.twimg.com/profile_images/1087400980185006082/WtuzQSQ2_400x400.jpg',
        job: 'Freelancer',
        social: 'https://twitter.com/sebawitowski',
    },
    {
        name: 'Tereza Iofciu',
        photo: 'https://pbs.twimg.com/profile_images/918446705800110081/9B7513w7_400x400.jpg',
        job: 'Lead Data Scientist @ Free Now',
        social: 'https://twitter.com/terezaif',
    },
    {
        name: 'Moisés Guimarães',
        photo: 'https://pbs.twimg.com/profile_images/1111210748393545728/Pw86TYqE_400x400.png',
        job: 'Software Engineer @ Red Hat',
        social: 'https://twitter.com/moisesguimaraes',
    },
    {
        name: 'Tania Vasilikioti',
        photo: 'https://pbs.twimg.com/profile_images/636142933528453120/nB7K01PP_400x400.jpg',
        job: 'Data Scientist @ Babbel',
        social: 'https://twitter.com/tvasi',
    },
    {
        name: 'Sergey Vasilyev',
        photo: 'https://pbs.twimg.com/profile_images/1157246707786272768/rIRMru3B_400x400.jpg',
        job: 'Senior Backend Engineer @ Zalando',
        social: 'https://twitter.com/nolar',
    },
    {
        name: 'Tamara Atanasoska',
        photo: 'https://pbs.twimg.com/profile_images/971536805504970752/QkeqeaJp_400x400.jpg',
        job: 'Software @ Ableton',
        social: 'https://twitter.com/tatanasoska',
    },
    {
        name: 'Valentin Haenel',
        photo: 'https://pbs.twimg.com/profile_images/3458019202/21abd6292392f70852b895a74e3055ba_400x400.png',
        job: 'Software Engineer @ Anaconda',
        social: 'https://twitter.com/esc___',
    },
    {
        name: 'Marielle Dado',
        photo: 'https://pbs.twimg.com/profile_images/657632103052517376/vHt9OWur_400x400.png',
        job: 'Educational Data Scientist',
        social: 'https://twitter.com/marielli',
    },
    {
        name: 'Daniel Rios',
        photo: 'https://pbs.twimg.com/profile_images/720637373877526528/qZiIF0t-_400x400.jpg',
        job: 'Python/Django/Web Developer',
        social: 'https://twitter.com/Misterrios',
    },
];

export const SPONSORS: Sponsor[][] = [
    [
        {
            id: 'PySV',
            name: 'Python Software Verband',
            photo: require('Assets/sponsors/PySVlogo.png'),
            link: 'https://python-verband.org',
        },
        {
            id: 'wooga',
            name: 'wooga',
            photo: require('Assets/sponsors/wooga_pride_logo.png'),
            link: 'https://www.wooga.com/',
        },
        {
            id: 'infarm',
            name: 'imfarm',
            photo: require('Assets/sponsors/infarm.png'),
            link: 'https://www.infarm.com/',
        },
    ],
    /* [
         {
             id: 'pythonitalia',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://pycon.it/',
         },
         {
             id: 'psf',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://www.012factory.it/',
         },
         {
             id: 'f012actory',
             name: 'TBA',
             photo: 'https://via.placeholder.com/150',
             link: 'https://www.012factory.it/',
         },
     ],*/
];

export const SCHEDULE: Schedule[] = [
    {
        order: 0,
        time: '17:10',
        title: 'Welcome',
        type: Types.OTHER,
    },
    {
        order: 1,
        time: '17:30',
        title: 'Python vs. Go - a Machine Learning experiment',
        type: Types.TALK,
        speaker: CHIARA_MEZZAVILLA,
    },
    {
        order: 2,
        time: '17:42',
        title: 'Python bites',
        type: Types.TALK,
        speaker: SEBASTIAN_WITOWSKI,
    },
    {
        order: 3,
        time: '17:54',
        title: 'Tech conferences and Diversity.. are we there yet?',
        type: Types.TALK,
        speaker: TEREZA_IOFCIU,
    },
    {
        order: 4,
        time: '18:06',
        title: 'Music as Code',
        type: Types.TALK,
        speaker: MOISES_GUIMARES,
    },
    {
        order: 5,
        time: '18:18',
        title: 'Just %time it',
        type: Types.TALK,
        speaker: TANIA_VASILIKIOTI,
    },
    {
        order: 6,
        time: '18:30',
        title: 'BREAK',
        type: Types.BREAK,
    },
    {
        order: 7,
        time: '19:00',
        title: 'Kubernetes operators in Python with Kopf',
        type: Types.TALK,
        speaker: SERGEY_VASILYEV,
    },
    {
        order: 8,
        time: '19:12',
        title: 'Multimethods (Multiple Dispatch) in Python',
        type: Types.TALK,
        speaker: TAMARA_ATANASOSKA,
    },
    {
        order: 9,
        time: '19:24',
        title: 'Numba: a compiler for the jitted generation',
        type: Types.TALK,
        speaker: VALENTIN_HAENEL,
    },
    {
        order: 10,
        time: '19:36',
        title: 'Predicting Coffee Quality: My first Summer of Data Science #SoDS Project',
        type: Types.TALK,
        speaker: MARIELLE_DADO,
    },
    {
        order: 11,
        time: '19:48',
        title: 'You too can (and should) Pull Request!',
        type: Types.TALK,
        speaker: DANIEL_RIOS,
    },
    {
        order: 12,
        time: '20:00',
        title: 'PIZZAAAAAAAA',
        type: Types.LUNCH,
    },
    {
        order: 13,
        time: '21:10',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 14,
        time: '21:22',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 15,
        time: '21:34',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 16,
        time: '21:46',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 17,
        time: '21:58',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 18,
        time: '22:10',
        title: 'BREAK',
        type: Types.BREAK,
    },
    {
        order: 19,
        time: '22:40',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 20,
        time: '22:52',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 21,
        time: '23:04',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 22,
        time: '23:16',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 23,
        time: '23:28',
        title: 'Talk',
        type: Types.BREAK,
    },
    {
        order: 24,
        time: '23:40',
        title: 'Closing session',
        type: Types.OTHER,
    },
    {
        order: 25,
        time: '00:00',
        title: '🎂🎂🎂🎂🎂🎂🎂🎂🎂🎂',
        type: Types.OTHER,
    },
];
