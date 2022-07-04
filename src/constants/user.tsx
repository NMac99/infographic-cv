import {
  Github,
  Cars,
  Quantum,
  MacOs,
  LinkedIn,
  Linux,
  Windows,
  ARGlasses,
  Map,
  Music,
  Swift,
  Psychology,
  Dresscode,
  Analyze,
  Terminal,
  Office,
  Eyes,
  MagicMan,
  Matrix,
  VPN,
  TextToSpeech,
  Upwork,
  Photography
} from '../icons';

export default {
  personal: [
    {
      id: 0,
      label: 'Name',
      value: 'Narek Arsenyan'
    },
    {
      id: 1,
      label: 'Birth Date',
      value: '30 July 1999'
    },
    {
      id: 2,
      label: 'Residence',
      value: 'Yerevan, Armenia'
    }
  ],
  contact: [
    {
      id: 0,
      label: 'Email',
      type: 'mailto',
      value: 'narekarsenyan99@gmail.com',
      rawValue: 'narekarsenyan99@gmail.com'
    },
    {
      id: 1,
      label: 'Mobile',
      type: 'tel',
      value: '+374 95 112 195',
      rawValue: '+37495112195'
    },
    {
      id: 2,
      label: 'Mobile 2',
      type: 'tel',
      value: '+374 99 112 195',
      rawValue: '+37499112195'
    }
  ],
  references: [
    {
      id: 0,
      label: 'linkedin',
      icon: <LinkedIn style={{ fontSize: 32 }} />,
      linkValue: 'https://www.linkedin.com/in/nmac99',
      value: 'https://www.linkedin.com/in/nmac99'
    },
    {
      id: 1,
      label: 'github',
      icon: <Github style={{ fontSize: 32 }} />,
      linkValue: 'https://github.com/nmac99',
      value: 'https://github.com/nmac99'
    },
    {
      id: 2,
      label: 'upwork',
      icon: <Upwork style={{ fontSize: 32 }} />,
      linkValue: 'https://www.upwork.com/freelancers/~01a8a6c676566e31ba',
      value: 'https://tinyurl.com/upwork-nmac99'
    }
  ],
  hobbies: [
    {
      id: 0,
      label: 'cars',
      icon: <Cars style={{ fontSize: 32 }} />,
      linkValue: 'https://www.vw.com/en.html',
      value: 'Driving Cars'
    },
    {
      id: 1,
      label: 'quantumphysics',
      icon: <Quantum style={{ fontSize: 32 }} />,
      linkValue: 'https://www.newscientist.com/definition/quantum-physics/',
      value: 'Quantum Physics'
    },
    {
      id: 2,
      label: 'swift',
      icon: <Swift style={{ fontSize: 32 }} />,
      linkValue: 'https://developer.apple.com/swift/',
      value: 'Programming'
    },
    {
      id: 3,
      label: 'psychology',
      icon: <Psychology style={{ fontSize: 32 }} />,
      linkValue: 'https://www.verywellmind.com/',
      value: 'Psychology'
    },
    {
      id: 4,
      label: 'photography',
      icon: <Photography style={{ fontSize: 32 }} />,
      linkValue: 'https://eu.polaroid.com/',
      value: 'Photography'
    },
    {
      id: 5,
      label: 'dresscode',
      icon: <Dresscode style={{ fontSize: 32 }} />,
      linkValue: 'https://i.gifer.com/PTho.gif',
      value: 'Dress code'
    },
    {
      id: 6,
      label: 'analyze',
      icon: <Analyze style={{ fontSize: 32 }} />,
      linkValue: 'https://c.tenor.com/q0Cj0U0_4-0AAAAC/genius-smart.gif',
      value: 'Analysis'
    }
  ],
  aboutMe:
    'My name is Narek. I am 22 years old boy who likes to do some cool stuff. Yup, coding is cool. However, currently I am only a student at NPUA. I do like to code and want to find community where I can apply to continually expand related knowledge and skills. There are many things that attract me in this reality. Check out my hobbies!',
  skills: {
    os: [
      {
        id: 0,
        label: 'macos',
        icon: <MacOs style={{ fontSize: 32 }} />,
        linkValue: 'https://www.apple.com/am/macos',
        value: 'Mac OS'
      },
      {
        id: 1,
        label: 'linux',
        icon: <Linux style={{ fontSize: 32 }} />,
        linkValue:
          'https://thumbs.gfycat.com/BigheartedMassiveEastsiberianlaika-size_restricted.gif',
        value: 'Linux'
      },
      {
        id: 2,
        label: 'windows',
        icon: <Windows style={{ fontSize: 32 }} />,
        linkValue: 'https://www.microsoft.com/en-us/windows',
        value: 'Windows'
      },
      {
        id: 3,
        label: 'terminal',
        icon: <Terminal style={{ fontSize: 32 }} />,
        linkValue: 'https://hackertyper.net/',
        value: 'Terminal'
      },
      {
        id: 4,
        label: 'msoffice',
        icon: <Office style={{ fontSize: 32 }} />,
        linkValue: 'https://en.wikipedia.org/wiki/Microsoft_Office',
        value: 'MS Office'
      }
    ],
    swift: [
      {
        id: 0,
        percent: 100,
        key: 'foundation',
        name: 'Foundation',
        link: 'https://developer.apple.com/documentation/foundation'
      },
      {
        id: 1,
        percent: 75,
        key: 'uikit',
        name: 'UIKit',
        link: 'https://developer.apple.com/documentation/uikit'
      },
      {
        id: 2,
        percent: 70,
        key: 'swiftui',
        name: 'SwiftUI',
        link: 'https://developer.apple.com/documentation/SwiftUI'
      },
      {
        id: 3,
        percent: 60,
        key: 'realitykit',
        name: 'RealityKit',
        link: 'https://developer.apple.com/documentation/realitykit'
      },
      {
        id: 4,
        percent: 45,
        key: 'mapkit',
        name: 'MapKit',
        link: 'https://developer.apple.com/documentation/mapkit'
      },
      {
        id: 5,
        percent: 30,
        key: 'spritekit',
        name: 'SpriteKit',
        link: 'https://developer.apple.com/documentation/spritekit'
      },
      {
        id: 6,
        percent: 30,
        key: 'avkit',
        name: 'AVKit',
        link: 'https://developer.apple.com/documentation/avkit'
      },
      {
        id: 7,
        percent: 70,
        key: 'arkit',
        name: 'ARKit',
        link: 'https://developer.apple.com/documentation/arkit'
      }
    ]
  },
  experience: [
    {
      id: 0,
      name: 'AR Glasses',
      projectLink: 'https://github.com/NMac99/Glasses',
      icon: <ARGlasses style={{ fontSize: 64 }} />
    },
    {
      id: 1,
      name: 'Directions',
      projectLink: 'https://github.com/NMac99/Direction',
      icon: <Map style={{ fontSize: 64 }} />
    },
    {
      id: 2,
      name: 'Music',
      projectLink: 'https://github.com/NMac99/NM_Music',
      icon: <Music style={{ fontSize: 64 }} />
    },
    {
      id: 3,
      name: 'Eyes Tracking',
      projectLink:
        'https://github.com/NMac99/Eyes-tracking-with-distance-and-preview',
      icon: <Eyes style={{ fontSize: 64 }} />
    },
    {
      id: 4,
      name: 'Magic Man',
      projectLink: 'https://github.com/NMac99/Magic-Man',
      icon: <MagicMan style={{ fontSize: 64 }} />
    },
    {
      id: 5,
      name: 'Sorting with pairs',
      projectLink:
        'https://github.com/NMac99/Sort-Characters-with-swap-two-by-two',
      icon: <Matrix style={{ fontSize: 64 }} />
    },
    {
      id: 6,
      name: 'Text to Speech',
      projectLink: 'https://github.com/NMac99/TextToSpeech',
      icon: <TextToSpeech style={{ fontSize: 64 }} />
    },
    {
      id: 7,
      name: 'VPN',
      projectLink: 'https://github.com/NMac99/VPNTemplete',
      icon: <VPN style={{ fontSize: 64 }} />
    }
  ],
  education: [
    {
      id: 0,
      order: 0,
      entityTitle: 'College',
      entityDescription: 'YSCI, Mechatronics',
      startDate: new Date(2014, 8),
      endDate: new Date(2018, 6),
      extra: [
        {
          id: 0,
          gap: true
        },
        {
          id: 1,
          year: 2017,
          description:
            'Owner and creator of <b>Billiard playing manipulator</b>. Presented on DigiTec Expo'
        },
        {
          id: 2,
          year: 2018,
          description:
            'Owner and creator of <b>Smart recycle bin</b>. Presented on DigiTec Expo'
        }
      ]
    },
    {
      id: 1,
      order: 1,
      entityTitle: 'Army',
      entityDescription: 'Driver',
      startDate: new Date(2018, 6),
      endDate: new Date(2020, 6)
    },
    {
      id: 2,
      order: 2,
      entityTitle: 'University',
      entityDescription: 'NPUA, Computer Science',
      startDate: new Date(2020, 8),
      endDate: new Date(2023, 6),
      continuing: true,
      extra: [
        {
          id: 0,
          year: 2020,
          description:
            'Owner and creator of <b>Laser cutting machine-tool</b>. Presented in YSCI'
        },
        {
          id: 1,
          gap: true
        }
      ]
    },
    {
      id: 3,
      order: 3,
      entityTitle: 'Upwork',
      entityDescription: 'iOS Developer',
      startDate: new Date(2021, 1),
      endDate: new Date(2023, 12),
      continuing: true,
      extra: [
        {
          id: 0,
          year: 2020,
          description: 'iOS course in Sunny School'
        },
        {
          id: 1,
          gap: true
        }
      ]
    },
    {
      id: 4,
      order: 4,
      entityTitle: 'EPAM',
      entityDescription: 'Python classes',
      startDate: new Date(2022, 1),
      endDate: new Date(2024, 12),
      continuing: true,
      extra: [
        {
          id: 0,
          year: 2022,
          description: 'Python course in EPAM'
        },
        {
          id: 1,
          gap: true
        }
      ]
    }
  ],
  upworkReviews: [
    {
      id: 0,
      linkValue:
        'https://www.linkedin.com/feed/update/urn:li:activity:6865294730499117056/',
      imageRawLink: 'https://i.ibb.co/7CW14cZ/1636813813965.jpg'
    },
    {
      id: 1,
      linkValue:
        'https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6859172389536833536/',
      imageRawLink: 'https://i.ibb.co/fGcj0Th/1635354133817.jpg'
    },
    {
      id: 2,
      linkValue:
        'https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6859172389536833537/',
      imageRawLink: 'https://i.ibb.co/542d5PB/Review-3.png'
    },
    {
      id: 3,
      linkValue:
        'https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6859172389536833538/',
      imageRawLink: 'https://i.ibb.co/tKbcJCb/Review-4.png'
    }
  ],

  languages: [
    {
      id: 0,
      label: 'Armenian',
      spokenProgress: 95,
      writtenProgress: 85
    },
    {
      id: 1,
      label: 'Russian',
      spokenProgress: 80,
      writtenProgress: 65
    },
    {
      id: 3,
      label: 'English',
      spokenProgress: 50,
      writtenProgress: 40
    }
  ],
  advantages: [
    {
      id: 0,
      value: 'adapt quickly'
    },
    {
      id: 1,
      value: 'concentrate on the job and pay attention to details'
    },
    {
      id: 2,
      value: 'am punctual and hardworking'
    },
    {
      id: 3,
      value: 'like the process of learning'
    },
    {
      id: 4,
      value: 'always look for better solution'
    },
    {
      id: 5,
      value: 'am good at googling'
    }
  ],
  tools: [
    { id: 0, name: 'Xcode', progress: 8 },
    { id: 1, name: 'Git', progress: 6 },
    { id: 2, name: 'Reality Composer', progress: 5 },
    { id: 4, name: 'Zsh', progress: 5 },
    { id: 5, name: 'Bash', progress: 4 },
    { id: 3, name: 'JSON', progress: 6 }
  ]
};
