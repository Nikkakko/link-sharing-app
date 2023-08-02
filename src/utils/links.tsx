import {
  TwitchIcon,
  CodePenIcon,
  CodeWarsIcon,
  FacebookIcon,
  FreeCodeCampIcon,
  GitLabIcon,
  FrondendMentorIcon,
  GithubIcon,
  LinkedinIcon,
  YoutubeIcon,
  TwitterIcon,
  StackOverflowIcon,
  DevToIcon,
} from '@/svgs/icons';

export const dropDownMenuList = [
  {
    id: 1,
    title: 'Twitch',
    icon: <TwitchIcon />,
    bgcolor: '#EE3FC7 ',
  },

  {
    id: 2,
    title: 'Dev.to',
    icon: <DevToIcon />,
    bgcolor: '#333333',
  },

  {
    id: 3,
    title: 'CodeWars',
    icon: <CodeWarsIcon />,
    bgcolor: '#8A1A50  ',
  },
  {
    id: 4,
    title: 'Facebook',
    icon: <FacebookIcon />,
    bgcolor: '#2341AC  ',
  },
  {
    id: 5,
    title: 'FreeCodeCamp',
    icon: <FreeCodeCampIcon />,
    bgcolor: '#2F2167 ',
  },
  {
    id: 6,
    title: 'GitLab',
    icon: <GitLabIcon />,
    bgcolor: '#EA4825 ',
  },
  {
    id: 7,
    title: 'Frontend Mentor',
    icon: <FrondendMentorIcon />,
    bgcolor: '#FFFFFF  ',
  },
  {
    id: 8,
    title: 'GitHub',
    icon: <GithubIcon />,
    bgcolor: '#191919  ',
  },
  {
    id: 9,
    title: 'LinkedIn',
    icon: <LinkedinIcon />,
    bgcolor: '#2D68FF  ',
  },
  {
    id: 10,
    title: 'YouTube',
    icon: <YoutubeIcon />,
    bgcolor: '#EE3838  ',
  },
  {
    id: 11,
    title: 'Twitter',
    icon: <TwitterIcon />,
    bgcolor: '#42B6E8  ',
  },
  {
    id: 12,
    title: 'Stack Overflow',
    icon: <StackOverflowIcon />,
    bgcolor: '#EB7100  ',
  },
];

export const listArray = [
  {
    id: 1,
    title: 'GitHub',
    icon: <GithubIcon />,
    bgColor: 'rgba(26, 26, 26, 1)',
    link: 'https://github.com/',
    regEx: /^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 2,
    title: 'YouTube',
    icon: <YoutubeIcon />,
    bgColor: 'rgba(238, 57, 57, 1)',
    link: 'https://www.youtube.com/',
    regEx:
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:user\/|c\/)?|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 3,
    title: 'LinkedIn',
    icon: <LinkedinIcon />,
    bgColor: 'rgba(45, 104, 255, 1)',
    link: 'https://linkedin.com/',
    regEx:
      /^(?:https?:\/\/)?(?:www\.)?linkedin\.com\/(?:in|pub|company)\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 4,
    title: 'Facebook',
    icon: <FacebookIcon />,
    bgColor: 'rgba(253, 189, 72, 0.8)',
    link: 'https://www.facebook.com/',
    regEx:
      /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/(?:profile\.php\?id=|people\/)?([a-zA-Z0-9._-]+)(?:\/.*)?$/,
  },
  {
    id: 5,
    title: 'Frontend Mentor',
    icon: <FrondendMentorIcon />,
    bgColor: 'rgba(22, 117, 169, 0.9)',
    link: 'https://www.frontendmentor.io/',
    regEx: /^https:\/\/www.frontendmentor.io\/profile\/.+$/,
  },
  {
    id: 6,
    title: 'Twitch',
    icon: <TwitchIcon />,
    bgColor: 'rgba(238,63,199, 0.9)',
    link: 'https://www.twitch.tv/',
    regEx: /^(?:https?:\/\/)?(?:www\.)?twitch\.tv\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 7,
    title: 'Stack Overflow',
    icon: <StackOverflowIcon />,
    bgColor: 'rgba(46, 167, 51, 0.9)',
    link: 'https://stackoverflow.com/',
    regEx:
      /^(?:https?:\/\/)?(?:www\.)?stackoverflow\.com\/users\/([0-9]+)(?:\/.*)?$/,
  },
  {
    id: 8,
    title: 'Dev.to',
    icon: <DevToIcon />,
    bgColor: 'rgba(51, 51, 51, 1)',
    link: 'https://dev.to/',
    regEx: /^(?:https?:\/\/)?(?:www\.)?dev\.to\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 9,
    title: 'CodeWars',
    icon: <CodeWarsIcon />,
    bgColor: 'rgba(138, 26, 80, 1)',
    link: 'https://www.codewars.com/',
    regEx:
      /^(?:https?:\/\/)?(?:www\.)?codewars\.com\/users\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 10,
    title: 'CodePen',
    icon: <CodePenIcon />,
    bgColor: 'rgba(238, 47, 117, 0.6)',
    link: 'https://codepen.io/',
    regEx: /^(?:https?:\/\/)?(?:www\.)?codepen\.io\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 11,
    title: 'freeCodeCamp',
    icon: <FreeCodeCampIcon />,
    bgColor: 'rgba(48, 34, 103, 1)',
    link: 'https://www.freecodecamp.org/',
    regEx:
      /^(?:https?:\/\/)?(?:www\.)?freecodecamp\.org\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
  {
    id: 12,
    title: 'Twitter',
    icon: <TwitterIcon />,
    bgColor: 'rgba(47, 132, 229, 0.8)',
    link: 'https://twitter.com/',
    regEx: /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)(?:\/.*)?$/,
  },

  {
    id: 14,
    title: 'GitLab',
    icon: <GitLabIcon />,
    bgColor: 'rgba(114, 85, 82, 0.7)',
    link: 'https://about.gitlab.com/',
    regEx: /^(?:https?:\/\/)?(?:www\.)?gitlab\.com\/([a-zA-Z0-9_-]+)(?:\/.*)?$/,
  },
];
