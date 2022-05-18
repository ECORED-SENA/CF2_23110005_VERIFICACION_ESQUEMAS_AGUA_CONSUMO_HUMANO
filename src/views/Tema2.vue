<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Identificación de elementos que hacen parte de la operación
    .row.justify-content-center
       p Las plantas encargadas del tratamiento de las aguas residuales permiten contener el agua contaminada, con el fin de llevarlas a un proceso que haga posible su reutilización en varios campos, algunos de estos elementos dentro del proceso de operación son:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.p-4.tranform1.h-100
        .row.mb-3
          .col-8
            img.img106(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 Sistema de rejas
        p El cual es el medio por el que el cual el agua residual ingresa con algunos elementos pesados como arena, piedras, grasa, sólidos, entre otros, con este sistema se instalan una serie de rejillas dentro del canal de tal forma que estos obstáculos más grandes queden atrapados en la primera etapa. 

      .tarjeta.p-4.tranform1.h-100
        .row.mb-3
          .col-8
            img.img106(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 Los desarenadores y desengrasadores
        p Los cuales son tanques de flujo continuo que separa la arena del líquido sin separar los sólidos orgánicos, usualmente este proceso puede ser usado también como desengrasador de manera moderada para lograr una mayor purificación del agua.
      .tarjeta.p-4.tranform1.h-100
        .row.mb-3
          .col-8
            img.img106(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El decantador
        p Es otro elemento de este proceso y se encarga de separar diferentes componentes líquidos por densidad. Este proceso se realiza a través de la fuerza de gravedad haciendo que estos líquidos más densos vayan al fondo del decantador.
      .tarjeta.p-4.tranform1.h-100 
        .row.mb-3
          .col-8
            img.img106(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El reactor biológico
        p Usado para la asimilación de la materia orgánica y los nutrientes disueltos en el agua residual.
      .tarjeta.p-4.tranform1.h-100
        .row.mb-3
          .col-8
            img.img106(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El tanque para el tratamiento físico químico
        p Que permite alterar el estado físico de componentes en el agua como el aluminio, hidróxido o hierro y, que logran eliminar el 80 y 90% de dicha materia suspendida.
      .tarjeta.p-4.tranform1.h-100
        .row.mb-3
          .col-8
            img.img106(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El sistema de deshidratación de lodos y secado de lodos
        p Permitiendo reducir el peso de este componente por medio de radiación solar o calentamiento con elementos infrarrojos. 

    Separador   
    #t_2_1.titulo-segundo.color-acento-contenido.mb-5(data-aos="zoom-out-left")
      h2 2.1 Puesta en marcha del sistema 
  
    .row.justify-content-center
      .col-lg-10.mt-5
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5.position-relative
          .bloque-texto-g__img.posit(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img18.png')})`}")
            img.posit_1(src='@/assets/curso/tema2/img19.png' alt='AvatarTop')
          .bloque-texto-g__texto.p-5.posit_2
            p.mb-0 Para establecer un sistema que ponga en marcha todo el proceso de tratamiento de aguas residuales para el consumo potable, es necesario establecer un sistema de captaciones, líneas de conducción, planta de tratamiento, reservorio, redes de distribución y conexiones domiciliarias y/o públicas.
    
    p.m-0.mb-5 Siendo así, a continuación, podrán observar el proceso de tratamiento de aguas residuales para el consumo potable:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Captaciones" :icono="require('@/assets/curso/tema2/img03.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0
            h4 Captaciones
            p Son estructuras que se construyen para la recepción del agua y que serán trasladadas a la planta de tratamiento de agua potable, se deben diseñar cercos perimétricos para asegurar que dichas estructuras sean construidas correctamente. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img08.png', alt='Texto que describa la imagen')
          .col-md-1
      .py-4.py-md-5(titulo="Conducciones" :icono="require('@/assets/curso/tema2/img04.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0
            h4 Conducciones
            p Se diseñan con el fin de ajustar la presión en un punto neutro para conseguir una regulación del caudal mediante una válvula flotadora, en esta se debe colocar la caja principal de concreto en el lugar preciso, ajustar la calcula flotadora para que se cierre la compuerta a la altura indicada.  
        
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img09.png', alt='Texto que describa la imagen')
          .col-md-1
      .py-4.py-md-5(titulo="Planta de Tratamiento" :icono="require('@/assets/curso/tema2/img05.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0
            h4 Planta de Tratamiento
            p.mt-2 Se deben realizar algunas operaciones antes de su puesta en marcha, como, por ejemplo: una inspección preliminar del sistema, algunas operaciones iniciales de calibración de los dosificadores, el medidor caudal, la desinfección de las estructuras y el inicio de la dosificación.
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img10.png', alt='Texto que describa la imagen')
          .col-md-1
      .py-4.py-md-5(titulo="Inspección Preliminar" :icono="require('@/assets/curso/tema2/img06.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0
            h4 Inspección Preliminar
            p.mt-2 En dicho proceso es importante evaluar el estado de las obras, previsualizando daños, corroborando el funcionamiento de las válvulas, compuertas y equipos. Además, deben tener reactivos, materiales y personal requerido para iniciar la puesta en marcha del sistema, asignando responsabilidades.
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img11.png', alt='Texto que describa la imagen')
          .col-md-1
      .py-4.py-md-5(titulo="Operaciones Iniciales" :icono="require('@/assets/curso/tema2/img07.svg')")
        .row
          .col-md-1
          .col-md-6.mb-4.mb-md-0
            h4 Operaciones Iniciales
            p.mt-2 Se deben tener en cuenta lo siguientes factores antes de realizar un llenado de la planta: realizar una limpieza general de la planta sin residuos que generen contaminación, realizar una calibración y revisión de todos los equipos dosificadores.
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img12.png', alt='Texto que describa la imagen')
          .col-md-1
      
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido.mt-4(data-aos="zoom-out-left")
      h2 2.2 Operación del sistema de potabilización según normatividad 

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        img.imgposition(src='@/assets/curso/tema2/img13.png', alt='Texto que describa la imagen')
      .col-lg-8.mar-top(data-aos="fade-left")
        
        .bgt2
          p.mt-3.py-3.pe-3.mar-left1.ps-3.ps-lg-0 En Colombia, el Ministerio de la Protección Social, por medio del Decreto 1575 del 2007, determina un sistema de protección y control de calidad del agua para el consumo doméstico, con el propósito de monitorear, prevenir y controlar los posibles riesgos a la salud de la población; provocados por el consumo de agua que no ha sido tratada correctamente. Sin embargo, en términos de saneamiento en Colombia, menos de la mitad de las aguas residuales pasan por un tratamiento, ubicándonos por debajo de países como Perú, Chile y México.
        p.mt-4 Por lo anterior, la norma mencionada busca que los municipios, las personas prestadoras del servicio público, usuarios, las Entidades Territoriales de Salud, los sectores productivos y las autoridades ambientales, se articulen con el propósito de realizar acciones que aporten al manejo integral de residuos sólidos y líquidos que pueden ser vertidos en las fuentes hídricas naturales que abastecen los sistemas de suministro de agua para consumo potable y así, minimizar los riesgos que esto pueda conllevar en la salud pública. 

    p.m-0 Actualmente, existen variedad de protocolos para monitorear los procedimientos que se llevan a cabo en la potabilización del agua, entre estos están:
    <br>
    .row.mb-5.mt-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img16.svg' alt='AvatarTop')
          .tarjeta.color-primario
            .p-4
              h4 El Protocolo Nacional de Monitoreo de la Calidad en Cuerpos Naturales de Agua Superficial.
              p Debe ser tomado en cuenta y, además, obligatorio por parte de todas las entidades públicas y privadas de cualquier territorio nacional que realicen cualquier actividad relacionada con el recurso hídrico. 


      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema2/img17.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido
            .p-4
              h4 Decreto 1594 de 1984
              p Menciona el uso de sustancias para la purificación del agua, el ordenamiento del recurso, criterios de calidad, vertimiento de residuos líquidos, entre otros

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.justify-content-center
          img(src='@/assets/curso/tema2/img18.svg' alt='AvatarTop')
          .tarjeta.color-secundario
            .p-4
              h4 Decreto 1575 de 2007
              p Determina un sistema de protección y control de calidad del agua para el consumo doméstico, con el propósito de monitorear, prevenir y controlar los posibles riesgos a la salud de la población; provocados por el consumo de agua que no ha sido tratado correctamente

    p.m-0.mb-5 Ahora, conozcamos un poco sobre la normatividad legal vigente sobre servicios públicos domiciliarios y criterios de calidad del agua potable:

      .titulo-sexto.color-acento-botones
        p <strong> Tabla 1</strong> Normatividad legal vigente sobre servicios públicos domiciliarios y criterios de calidad del agua potable
      .tabla-a.color-acento-contenido.mb-5(data-aos="fade-right")
        table
          caption 
            p <strong>Nota.</strong>  
              span Normatividad legal vigente sobre servicios públicos domiciliarios y criterios de calidad del agua potable. Recuperado de 2016nicolaspaque.pdf (usta.edu.co)
          thead
            tr
              th NORMATIVIDAD
              th TÍTULO
              th DESCRIPCIÓN
          tbody
            tr
              td <strong>Ley No. 0142 del 11 de julio de 1994</strong>
              td Régimen de servicios públicos domiciliarios.
              td Definen las actividades que realizan las personas prestadoras de servicios públicos domiciliarios en el sector rural, las intervenciones en regulación, control y vigilancia del Estado y las competencias de los municipios y departamentos para la prestación de los servicios públicos; al igual define los sistemas de información de las empresas y el régimen tarifario de los servicios públicos, entre otros. 
            tr
              td <strong>Ley No 0286 del 3 de julio de 1996</strong>
              td Modifica parcialmente la Ley 0142 de 1994.
              td Define sobre las entidades descentralizadas, entidades territoriales y aquellas empresas que presten los servicios deberán transformarse en empresas de servicios públicos, a alcanzar progresivamente los límites que define la Ley 0142 de 1994 en factores de contribución, tarifas y subsidios.
            tr
              td <strong>Ley No 0489 del 29 de diciembre de 1998</strong>
              td Se dictan las normas sobre las organizaciones y funcionamiento de las entidades del orden Nacional.
              td Define las sujeciones de las empresas oficiales de servicios públicos domiciliarios a la Ley 0142 de 1994 y a las normas que las complementen, sustituyan o adicionen.
            tr
              td <strong>Ley No. 0505 del 25 de junio de 1999</strong>
              td Se fijan los términos, para la realización, adopción y aplicación de la estratificación contemplada por la Ley 0142 de 1994.
              td Define las obligaciones de los municipios y distritos para adoptar las estratificaciones y las garantías de la expansión de la cobertura de los servicios públicos domiciliarios en las zonas rurales, asumiendo las responsabilidades de los perjuicios que ocasionen a los usuarios por la aplicación indirecta de la adopción de las estratificaciones.
            tr
              td <strong>Ley No. 0632 del 29 de diciembre del 2000</strong>
              td Modifica parcialmente la Ley 0142 de 1994.
              td Define los subsidios y contribuciones para los servicios de acueducto, alcantarillado y aseo, ajustándose al porcentaje necesario, que asegure un monto para que los subsidios se apliquen y se mantengan en equilibrio; destinando dichos recursos para los usuarios atendidos por la entidad.
      .row.justify-content-center.mb-5
        .col-lg-4(data-aos="fade-right")
          img.imgposition(src='@/assets/curso/tema2/img14.png', alt='Texto que describa la imagen')
        .col-lg-8.mar-top(data-aos="fade-left")
          p.mt-4 <strong>Las entidades que pueden estar mayormente involucradas en este proceso son</strong>: los gobiernos o agencias públicas sean estas nacionales, locales, regionales o internacionales, las asociaciones de las mismas entidades prestadoras de servicios como asociaciones de agua potable o agua residual, organismos autónomos que desempeñan funciones de supervisión y finalmente, los usuarios que hacen uso de este recurso hídrico. El propósito de estas entidades es proporcionar a los usuarios un abastecimiento continuo de agua potable, de recolección y tratamiento de agua residual bajo condiciones económicas y sociales que sean óptimas tanto para los usuarios como para las entidades prestadoras del servicio. 
          .bg1
            p.mt-3.py-3.pe-3.mar-left.ps-3.ps-lg-0 Para concluir con este apartado, la protección de la salud pública a través de una buena gestión de las entidades prestadoras de servicios de agua potable y residual, deben ser esenciales para el cuidado del recurso hídrico, pues, dichas instituciones deben aplicar buenas prácticas que contribuyan al desarrollo sostenible, la cohesión social y al desarrollo económico de las comunidades ya que, la calidad y la eficiencia de los servicios de agua potable tienen implicaciones en todas las actividades de la sociedad.
      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
