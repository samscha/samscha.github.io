export default [
  {
    to: '/about',
    title: 'Go to the about page',
    icon: ['fas', 'info-circle'],
    enabled: false,
  },
  {
    href: 'https://linkedin.com/in/chasamuels',
    title: "Click to go to Sam's LinkedIn",
    icon: ['fab', 'linkedin'],
    enabled: true,
  },
  {
    href: 'https://github.com/samscha',
    title: `Click to go to Sam's GitHub`,
    icon: ['fab', 'github'],
    enabled: true,
  },
  {
    href: 'mailto:contact@samscha.com',
    target: '',
    title: 'Click to email Sam',
    icon: ['fas', 'envelope'],
    enabled: false,
  },
  {
    href: 'https://t.me/chasamuels',
    title: 'Click to Telegram Sam',
    icon: ['fab', 'telegram-plane'],
    enabled: false,
  },
  {
    to: '/contact',
    title: 'Go to the contact page',
    //text: 'contact',
    icon: ['fas', 'address-card'],
    enabled: true,
  },
];
