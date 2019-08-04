import Speaker from '@/Types/Speaker';
import Sponsor from '@/Types/Sponsor';
import Schedule, { Types } from '@/Types/Schedule';

const CHIARA_MEZZAVILLA = 0;
const SEBASTIAN_WITOWSKI = 1;
const TEREZA_IOFCIU = 2;
const MOISES_GUIMARES = 3;
const TANIA_VASILIKIOTI = 4;
const IACOPO_SPALLETTI = 5;
const VALERIO_MAGGIO = 6;
const ELENA_NIEDDU = 7;

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
];
