export default {
  global: {
    componenteFormativo:
      'Operación de sistemas alternos acorde a los requerimientos de tratamiento',
    descripcionCurso:
      'Con el fin de determinar la capacidad y condiciones de aprovechamiento del recurso hídrico, se debe analizar y apropiarse de los procedimientos y técnicas existentes para la potabilización y depuración del recurso y, entender, que todos los que hacen uso de este sin algún tipo de tratamiento o, sin unas técnicas adecuadas, estarán aportando a la contaminación del agua.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
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
        titulo: 'Sintesis',
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
        'Acuatecnica Líderes en Ingeniería Ambiental y Sanitaria. (2018). ¿Cuál es la normatividad vigente sobre aguas residuales en Colombia? ',
      link:
        'http://acuatecnica.com/cual-es-la-normatividad-vigente-sobre-aguas-residuales-en-colombia/ ',
    },
    {
      referencia:
        'Barreto. L. (2020). ¿Sabes qué son los sistemas de abastecimiento de agua? ',
      link:
        'https://sswm.info/es/gass-perspective-es/acerca-de-esta-herramienta/%C2%BFsabes-qu%C3%A9-son-los-sistemas-de-abastecimiento-de-agua%3F ',
    },
    {
      referencia:
        'Equipo de Planificación de Alcantarillado. (2009). Manual de Planificación de Alcantarillado. ',
      link: 'https://openjicareport.jica.go.jp/pdf/12044350_05.pdf ',
    },
    {
      referencia:
        'Gobierno de Colombia. (s.f.). Reglamento técnico del sector de agua potable y saneamiento básico.',
      link:
        'https://www.minvivienda.gov.co/viceministerio-de-agua-y-saneamiento-basico/reglamento-tecnico-sector/reglamento-tecnico-del-sector-de-agua-potable-y-saneamiento-basico-ras',
    },
    {
      referencia:
        'Instituto Nacional de Salud. (2011). Programa de Vigilancia por Laboratorio de la Calidad de Agua para Consumo Humano.',
      link:
        'https://www.ins.gov.co/sivicap/Documentacin%20SIVICAP/2011%20Manual%20toma%20de%20muestras%20agua.pdf#:~:text=Sistema%20de%20suministro%20de%20agua%20para%20consumo%20humano%3AEs,conducci%C3%B3n%20y%20distribuci%C3%B3n%20del%20agua%20para%20consumo%20humano.',
    },
    {
      referencia:
        'López Mora, R. (2019). El Abastecimiento de agua y saneamiento urbano. Agua y Territorio, 14, 133–134. ',
      link: 'https://doi.org/10.17561/at.14.4978 ',
    },
    {
      referencia:
        'Ministerio de Desarrollo Económico. (2000). Documentación técnico-normativa del sector de agua potable y saneamiento básico.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/010710_ras_titulo_a_.pdf ',
    },
    {
      referencia:
        'Ministerio de Vivienda, Ciudad y Territorio. (2018). Resolución número 0844.',
      link:
        'https://www.minvivienda.gov.co/sites/default/files/documentos/0844-2018.pdf ',
    },
    {
      referencia:
        'Pocería Sin Zanja. (2019). Pocería sin zanja: Diseño de la red de saneamiento',
      link:
        'https://www.poceriasinzanja.es/poceria-sin-zanja-diseno-de-la-red-de-saneamiento/',
    },
    {
      referencia: 'Real Academia Española. (2020). Alcantarillado.',
      link: ' https://dpej.rae.es/lema/alcantarillado ',
    },
    {
      referencia:
        'Research Integrity. (s.f.). Métodos de Recaudación de Información. ',
      link:
        'https://ori.hhs.gov/m%C3%B3dulo-4-m%C3%A9todos-de-recaudaci%C3%B3n-de-informaci%C3%B3n-secci%C3%B3n-1#:~:text=Algunos%20m%C3%A9todos%20de%20recolecci%C3%B3n%20de%20informaci%C3%B3n%20incluyen%20encuestas%2C,observaciones%2C%20revisi%C3%B3n%20de%20registros%20existentes%20y%20muestras%20biol%C3%B3gicas. ',
    },
    {
      referencia:
        'Rodríguez, J. A. (s.f.). Sistemas de tratamiento de aguas residuales. ',
      link: 'https://cidta.usal.es/cursos/etap/modulos/libros/sistemas.PDF  ',
    },
    {
      referencia:
        'TechnoLux. (s.f.) Características de la elección de tuberías y accesorios para alcantarillado. ',
      link:
        'https://myhouse.technoluxpro.com/es/kanalizaciya/kanalizacionnye-truby-i-fitingi/ ',
    },
    {
      referencia:
        'Servicios Especializados en Tratamientos de Aguas de Colombia, SETAC. (s.f.). Sistemas de tratamiento de aguas.',
      link: 'https://setac.com.co/sistema-de-tratamiento-de-aguas/ ',
    },
    {
      referencia:
        'TV Agro. (2015). Tratamiento de Aguas Residuales. [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=ktxKQC4FWc8',
    },
    {
      referencia: 'Velázquez, A. (2015). El sistema de agua. ',
      link:
        'https://es.slideshare.net/AlejandroS25/el-sistema-de-agua#:~:text=El%20sistema%20de%20agua%20El%20sistema%20de%20agua,un%20servicio%20adecuado%20a%20los%20usuarios%20y%20usuarias',
    },
  ],
  glosario: [
    {
      termino: 'Agua potable',
      significado:
        'Es el agua que cumple con condiciones óptimas tanto físicas, químicas y microbiológicas y por tanto es apta para el consumo humano.',
    },
    {
      termino: 'Alcantarillado',
      significado:
        'Red de canalización que se encarga de conducir las aguas residuales urbanas, domésticas o rurales hasta los puntos de incorporación para ser depuradas.',
    },
    {
      termino: 'Captación',
      significado:
        'La captación es la parte inicial del sistema hidráulico y, es aquí donde se recoge la cantidad de agua necesaria para abastecer a la población.',
    },
    {
      termino: 'Fuentes de abastecimiento',
      significado:
        'Son depósitos o cursos de agua que pueden ser superficiales, subterráneas, atmosféricas o marinas utilizadas para el abastecimiento de la población.',
    },
    {
      termino: 'Diseña',
      significado:
        'actividad creativa orientada a soluciones idóneas a ciertas problemáticas.',
    },
    {
      termino: 'Saneamiento',
      significado:
        'El saneamiento es el conjunto de procesos y/o acciones técnicas y socioeconómicas de salud pública que buscan alcanzar, en este caso, niveles de crecimiento en salud ambiental por el buen manejo sanitario del agua potable.',
    },
  ],
  complementario: [
    {
      texto:
        '2.1 Normatividad vigente para el sector de agua potable y residual.Gobierno de Colombia. (s.f.). Decreto 1575 de 2007. Decreto-1575-de-2007-Gestor-Normativo (funcionpublica.gov.co)',
      tipo: 'Decreto',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma_pdf.php?i=30007',
    },
    {
      texto:
        '2.3. Redes y sistemas de alcantarillado EMCASERVICIOS. (2020). ¿Cómo funciona un sistema de alcantarillado? [Video]. YouTube.',
      tipo: 'Video',
      descarga: 'https://www.youtube.com/watch?v=vnXBwQXY-Qw',
    },
    {
      texto:
        '3.1 Conceptos, tipos y características de tuberías basados en manuales técnicos Manual de Tubería de cobre. (s.f.). Manual_tuberias.pdf',
      tipo: 'Documento',
      link: 'https://www.academia.edu/17622063/Manual_tuberias',
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
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
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
