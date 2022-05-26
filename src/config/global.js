export default {
  global: {
    componenteFormativo:
      'Operación de sistemas alternos acorde a los requerimientos de tratamiento',
    descripcionCurso:
      'Con el fin de determinar la capacidad y condiciones de aprovechamiento del recurso hídrico, se debe analizar y apropiarse de los procedimientos y técnicas existentes para la potabilización y depuración del recurso y, entender, que todos los que hacen uso de este sin algún tipo de tratamiento o, sin unas técnicas adecuadas, estarán aportando a la contaminación del agua.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Identificación de recursos para procedimientos operativos en tratamiento de aguas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos y técnicas de potabilización de agua',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Técnicas de depuración de aguas residuales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tipos de sustancias químicas a utilizar',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Identificación de elementos que hacen parte de la operación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Puesta en marcha del sistema ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Operación del sistema de potabilización según normatividad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Funcionamiento del sistema operativo, seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto de seguridad y salud en el trabajo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de riesgo, contingencias',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Elementos de protección personal',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Acero, J. L. (2019). Normatividad del agua potable en Colombia.',
      link:
        'https://acuatecnica.com/normatividad-del-agua-potable-en-colombia/',
    },
    {
      referencia:
        'Asiprex. (2021). La importancia de la seguridad y salud en el trabajo.',
      link:
        'https://asiprex.com/la-importancia-de-la-seguridad-y-salud-en-el-trabajo/',
    },
    {
      referencia:
        'BBVA. (2021). ¿Cuál es el proceso de potabilización del agua y cuáles son sus fases?',
      link:
        'https://www.bbva.com/es/sostenibilidad/que-es-el-proceso-de-potabilizacion-del-agua-y-cuales-son-sus-fases/',
    },
    {
      referencia: 'Boss Tech. (2020). ¿Qué tipos de químicos se utilizan?',
      link:
        'https://bosstech.pe/tipos-quimicos-ptar/#:~:text=Los%20agentes%20reductores%2C%20tambi%C3%A9n%20conocidos%20como%20agentes%20oxidantes%2C,cloro%20y%20contaminantes%20biol%C3%B3gicos%2C%20de%20las%20aguas%20residuales.',
    },
    {
      referencia:
        'EMDUPAR. (2011). Manual de procedimientos de acueducto y alcantarillado.',
      link:
        'https://www.emdupar.gov.co/index.php/la-entidad/sistema-integrado-de-gestion/Planeacion/Manuales/MA-GA-01%20MANUAL%20DE%20%20PROCEDIMIENTOS%20DE%20ACUEDUCTO%20Y%20ALCANTARILLADO.pdf/detail',
    },
    {
      referencia:
        'Mintrabajo. (s.f.). Sistema de Gestión de la Seguridad y Salud en el Trabajo (SG-SST).',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/51963/Guia+tecnica+de+implementacion+del+SG+SST+para+Mipymes.pdf/e1acb62b-8a54-0da7-0f24-8f7e6169c178',
    },
    {
      referencia:
        'SEDAPAR. (2017). Ampliación y mejoramiento del sistema de agua potable y alcantarillado sanitario en la localidad de Chuquibamba, Distrito de Chuquibamba, provincia de Condesuyos, departamento y región de Arequipa.',
      link:
        'https://www.sedapar.com.pe/wp-content/uploads/2018/02/9.MANUAL-DE-PUESTA-EN-MARCHA-1.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Áreas de cribas',
      significado:
        'Son aquellas máquinas instaladas específicamente en la entrada de una instalación de tratamiento residual, con el fin de retirar los sólidos más grandes antes de que alcancen a llegar a las bombas de aguas residuales u otras maquinarias de tratamiento.',
    },
    {
      termino: 'Desarenador',
      significado:
        'Es una herramienta diseñada para retener la arena que traen las aguas residuales, con el fin de evitar que estas pasen al proceso de tratamiento y por lo tanto generen problemas de contaminación.',
    },
    {
      termino: 'Tratamientos físicos',
      significado:
        'Este concepto hace referencia a todos los métodos que pueden implementarse en una separación física, es decir, en una separación de sólidos. Son muy importantes las propiedades físicas de estos contaminantes para definir el método de separación.',
    },
    {
      termino: 'Tuberías de drenaje',
      significado:
        'Son aquellas tuberías conectadas directamente a una tubería principal con el fin de captar el agua lluvia.',
    },
  ],
  complementario: [
    {
      texto:
        'Aqualia. (2017). Depuración y reutilización de aguas residuales. ¿Qué es una EDAR y cómo funciona? ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Hi2ilunFSWc',
    },
    {
      texto:
        'Orenco Systems Incorporated. (s.f.). Puesta en marcha y mantenimiento de sistemas comerciales de tratamiento de aguas residuales AdvanTex.',
      tipo: 'Manual',
      link:
        'https://odl.orenco.com/documents/aim-om-atx-3-span.pdf#:~:text=Las%20aguas%20residuales%20se%20percuelan%20a%20trav%C3%A9s%20y,los%20microbios%20conviertan%20el%20amon%C3%ADaco%20en%20nitrato%20%28nitrificaci%C3%B3n%29',
    },
    {
      texto:
        'SENA. (2021). Sistemas de gestión de la seguridad y salud en el trabajo.',
      tipo: 'Video',
      link: 'https://youtu.be/5CF3HZdu6Bc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lizeth Daniela Reinoso Díaz',
        cargo: 'Experta Temática',
        centro: 'Regional Tolima - Centro Agropecuario La Granja',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora Instruccional',
        centro:
          'Regional Norte de Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Diego Acevedo',
        cargo: 'Diseñador Instruccional',
        centro:
          'Regional Norte de Santander - Centro Industrial del Diseño y la Manufactura',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor Metodológico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Miena Triana Pinto',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
