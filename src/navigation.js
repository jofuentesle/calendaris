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
    text: 'Selecciona tu calendario',
      links: [
        {
          text: 'Calendario para pared con espiral',
          href: getPermalink('/landing/calendario-pared-espiral'),
        },
        {
          text: 'Calendario para pared tipo revista',
          href: getPermalink('/landing/calendario-pared-revista'),
        },
        {
          text: 'Calendario para mesa triangular',
          href: getPermalink('/landing/calendarios-mesa-triangulares'),
        },
        {
          text: 'Calendario para mesa con espiral',
          href: getPermalink('/landing/calendarios-mesa-espiral'),
        },
      ],
    },
    /*{
      text: 'Mesa',
      href: "#calTable",
      links: [
        {
          text: 'Espiral',
          href: getPermalink('/mesa/calendarios-mesa-espiral'),
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
    },*/

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
