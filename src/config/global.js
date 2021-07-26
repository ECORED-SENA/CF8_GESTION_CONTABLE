export default {
  global: {
    componenteFormativo:
      'Reconocimiento de Propiedad, Planta y Equipo, propiedades de inversión y activos mantenidos para la venta',
    descripcionCurso:
      'En este componente se desarrolla la unidad temática de Propiedad, Planta y Equipo o lo que denominamos en la normativa contable, “Bienes de Uso” o “Activos Fijos”. Estos, son indispensables para el funcionamiento de las organizaciones. Por lo tanto, se debe identificar las necesidades requeridas de los activos, sus características, objetivo, finalidad y normatividad vigente aplicable.<br><br>De igual manera, es importante determinar el tratamiento contable de las propiedades de inversión y activos mantenidos para la venta, con el fin de generar información útil, oportuna y comprensible a los usuarios de los estados financieros para la adecuada toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner-principal-bg.svg'),
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
        titulo: 'Propiedad, planta y equipo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Política contable PPYE',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Compra de propiedad, planta y equipo en moneda local y moneda extranjera',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Ajuste de la diferencia en cambio',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Desmantelamiento, rehabilitación, componentes',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Propiedades de inversión',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Política contable',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Activos mantenidos para la venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Política contable',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Reconocimiento, medición, presentación y revelación',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      /*
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
      /*{
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },*/
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
        'Flórez, E., Rincón, C., Zamorano, R. (2014). Manual contable en la implementación de las NIIF. Bogotá: Ecoe Ediciones.',
    },
    {
      referencia: 'CTCP, (2016a), NIC 16 propiedad planta y equipo.',
      link:
        'http://www.aplicaciones-mcit.gov.co/adjuntos/niif/14%20ES_RedBV2016_IAS16_PartA.pdf',
    },
    {
      referencia:
        'CTCP, (2016b), NIIF 5- Activos no Corrientes Mantenidos para la Venta y Operaciones Discontinuadas',
      link:
        'https://www.ctcp.gov.co/proyectos/contabilidad-e-informacion-financiera/documentos-organismos-internacionales/compilacion-marcos-tecnicos-de-informacion-financi/1534346664-4845',
    },
  ],
  glosario: [
    {
      termino: 'Activos mantenidos para la venta',
      significado:
        'Son aquellos bienes que adquiere la empresa con la finalidad de desprenderse de los mismos, a través de la venta.',
    },
    {
      termino: 'Activos de uso',
      significado:
        'Los activos que adquiere la empresa para su funcionamiento y desarrollo de la actividad económica.',
    },
    {
      termino: 'Depreciación',
      significado:
        'Es la pérdida de valor del activo por su uso durante la vida útil.',
    },
    {
      termino: 'Inversión',
      significado:
        'Beneficio económico que se espera obtener a futuro, asumiendo riesgos de este.',
    },
    {
      termino: 'Propiedad de Inversión',
      significado:
        'Son los activos que adquiera la empresa con la finalidad de que generen una rentabilidad económica para sí misma.',
    },
    {
      termino: 'Valor residual',
      significado:
        'El valor residual anteriormente conocido como valor de salvamento es el importe recuperable después de depreciar totalmente el activo durante su vida útil, en la actualidad no existe un método definido, por lo tanto, se determina bajo la política contable de cada empresa.',
    },
    {
      termino: 'Vida útil',
      significado:
        'Es el número de años que tiene durabilidad un activo, tiempo en el cual la empresa espera obtener beneficios económicos.',
    },
  ],
  complementario: [
    {
      texto:
        'Investigación e innovación financiera y organizacional	Servicio Nacional de Aprendizaje, SENA. (2018). Revista Finnova: Investigación e Innovación Financiera y Organizacional.	Capítulo 1',
      tipo: 'Capítulo 1',
      link: 'http://revistas.sena.edu.co/index.php/finn',
    },
    {
      texto:
        'Contabilidad financiera	Calixto Mendoza Roca, 2016 Contabilidad financiera, Universidad del Norte.	Capítulo 3',
      tipo: 'Capítulo 3',
      link:
        'https://ebookcentral-proquest-com.bdigital.sena.edu.co/lib/senavirtualsp/reader.action?docID=4722180&query=activos+fijos',
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
        nombre: 'Claudia Brceida Coy Coy',
        cargo: 'Instructora',
        centro: 'Centros de Contabilidad',
      },
      {
        nombre: 'Angie Fernanda Salazar',
        cargo: 'Instructora',
        centro: 'Centros de Contabilidad',
      },
      {
        nombre: 'Maryuri Agudelo Franco',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología',
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
        nombre: 'Luis Arévalo',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Camila Ovalle',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
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
