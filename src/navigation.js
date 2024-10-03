import { getPermalink} from './utils/permalinks';

export const headerData = {
  links: [
   /* {
      text: 'Inicio',
      links: [
        {
          text: 'SaaS',
          href: getPermalink('/homes/saas'),
        },
        {
          text: 'Startup',
          href: getPermalink('/homes/startup'),
        },
        {
          text: 'Mobile App',
          href: getPermalink('/homes/mobile-app'),
        },
        {
          text: 'Personal',
          href: getPermalink('/homes/personal'),
        },
      ],
    },*/
    {
      text: 'Mesa',
      href: "#calTable",
      links: [
        {
          text: 'Espiral',
          href: getPermalink('/mesa/espiral'),
        },
        {
          text: 'Triangular',
          href: getPermalink('/mesa/calendarios-mesa-triangulares'),
        }
      ]
    },
    {
      text: 'Pared',
      href:'#',
      links: [ 
        {
          text: 'Espiral',
          href:  getPermalink('/pared/espiral'),
        },
        {
          text: 'Revista',
          href:  getPermalink('/pared/revista'),
        }
      ]
    },
    {
      text: 'Nosotros',
      href: 'https://reprodisseny.com/page/sobre-nosotros'
    },
    {
      text: 'Contacto',
      href: 'contacto  '
    },
  ]
};

export const footerData = {
  links: [
    {
      title: '',
      links: [
        
      ],
    }
  ],
  secondaryLinks: [

  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },

  ],
  footNote: `
    
    Repro Disseny 2024 <a class="text-blue-600 underline dark:text-muted" href="https://reprodisseny.com/page/aviso-legal"> Aviso legal</a> · Todos los derechos reservados.
  `,
};
