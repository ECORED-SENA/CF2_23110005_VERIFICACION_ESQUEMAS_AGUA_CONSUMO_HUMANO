<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de sistemas de agua para consumo humano 
    .row.justify-content-center(data-aos="zoom-in-left")
      .col-lg-4
        img.imgposition(src='@/assets/curso/tema1/img01.png', alt='Texto que describa la imagen')
      .col-lg-8
        p.mt-4 El tratamiento de aguas, es una alternativa a la escasez no solo del recurso como tal, sino de la conservación de todos los recursos naturales. Por ello, se deben realizar procesos y/o tratamientos de agua que garanticen el acceso a este líquido valioso, evitando la contaminación de ríos, mares y diferentes ecosistemas, a través de tratamientos de aguas con operaciones físico, químicas o biológicas, que tengan como objetivo minimizar su contaminación y tener acceso al recurso con características adecuadas para ser usada y consumida. 
      
    .row.lag
      .col-lg-3
      .col-lg-9.bg1
        p.mt-3.maq Actualmente, debido al aumento del cambio climático y otros factores externos, ha aumentado también la necesidad de procedimientos operativos para el tratamiento de aguas y ha instaurado qué, legislación no permita que las aguas de uso doméstico, industrial, agrícola, entre otros, sean depuradas a otras partes sin un tratamiento previo, en su defecto, este vertimiento debe presentarse en las mejores condiciones posibles para ser reutilizada en usos de riego, agrícolas, urbanos, entre otros.   
    
    p.m-0.mt-5.pt-5 Teniendo este punto de partida, podremos pasar al siguiente apartado temático donde se evidencian algunos tipos y técnicas más comunes de potabilización del agua:
      
      
    separador
  
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in-up")
      h2 1.1 Tipos y técnicas de potabilización de agua
    p Las técnicas de potabilización del agua permiten eliminar los microorganismos que se encuentran contenidos en el agua sin un tratamiento previo y, que pueden ser dañinos para la salud de la población como ya se mencionó con anterioridad. Veamos cuales son, de acuerdo a (EMDUPAR, 2011)
    p.mb-4 Existen diferentes tipos de redes de saneamiento las cuales se dividen en las siguientes categorías:

    .row.mb-5
      .col-lg-12(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Pretratamiento")
            .col-lg-6.p-4.ps-5
              p El cual está encargado de la retención y remoción de cualquier material sólido por medio de rejillas, desarenadores o barrido superficial que puedan llegar a contener las aguas residuales.
            .col-lg-5.col-md-6.col-6.p-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img02.png')
          .row(titulo="Redes separativas")
            .col-6.p-4.ps-5
              p Son aquellas que cuentan con dos conductos separados independientemente, una para aguas residuales de uso doméstico y otra para aguas industriales y aguas lluvias.
            .col-lg-5.col-md-6.col-6.p-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img03.png')
          .row(titulo="Redes pseudo - separativas")
            .col-6.p-4.ps-5
              p Son las intermedias entre las unitarias y separativas y tienen canalizaciones separadas para aislar las aguas lluvias y residuales en la calle, pero no en los domicilios y empresas
            .col-lg-5.col-md-6.col-6.p-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img04.svg')
          .row(titulo="Redes doblemente separativas")
            .col-6.p-4.ps-5 
              p Las cuales consta de dos canalizaciones que son independientes, una para la red de alcantarillado sanitario y otra para las aguas residuales domésticas, transportándose a un receptor que puede ser un río, una laguna o el mar.
            .col-lg-5.col-md-6.col-6.p-0(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img05.png')
    .row.justify-content-center.mt-4(data-aos="zoom-in-up")
      p Por ejemplo, el tratamiento realizado para las aguas superficiales para el uso doméstico puede contener coagulación, floculación o sedimentación; por el contrario, las aguas subterráneas tienen otro tipo de tratamientos debido a que cuentan con menos sedimentación y están menos expuestas a la contaminación, sin embargo, estas aguas son más propensas a contener sólidos disueltos, hierro y magnesio y necesitan procesos como de ablandamiento, oxidación o desalinización.
      p Ahora bien, en cuanto a los tipos de tratamiento, tenemos:       
    
    .row.justify-content-center.bg05(data-aos="zoom-out")
      .col-lg-8

        LineaTiempoD.color-primario
          .row(numero="1" titulo="Pretratamiento")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Está encargado de la retención y remoción de cualquier material sólido por medio de rejillas, desarenadores o barrido superficial que puedan llegar a contener las aguas residuales.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img06.png', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Tratamiento primario")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p En el cual se elimina la materia decantable orgánica e inorgánica realizada a través de la decantación
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img07.png', alt='Texto que describa la imagen')
          .row(numero="3" titulo="Tratamiento secundario")
            .col-md-4.mb-4.mb-md-0.mt-2.izz  
              p Se da la eliminación de materia orgánica biodegradable tanto disuelta como sólida convertida en un biológico sedimentable y sólidos inorgánicos que podrían ser removidos mediante la sedimentación. 
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img08.png', alt='Texto que describa la imagen')
          .row(numero="4" titulo="Tratamiento avanzado o específico")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Por medio del cual se realiza una eliminación de los componentes no eliminados en el tratamiento secundario, se obtiene agua residual sin nitrógeno, fósforo, materia en suspensión no decantada, materia orgánica no biodegradable, metales pesados o materia disuelta.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img09.png', alt='Texto que describa la imagen')
  
    p.m-0.mt-5.pt-5 Tomando en cuenta lo anterior, la obtención de agua totalmente potable que cumpla con la máxima garantía de salubridad requiere la implementación del siguiente proceso, donde:

    .row.justify-content-center.mb-5
      .col-md-4.col-6.mb-5.mb-lg-0.p-3
        .tarjeta--boton.color-secundario.text-white--hover.p-5
          .row.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img10.svg', alt='Texto que describa la imagen')
          
          p.m-0.text-small <strong>Primero,</strong> se debe realizar una coagulación o floculación, en donde se agrega un químico que logra neutralizar las cargas negativas del agua y logra unir las partículas para obtener unas más grandes y facilitar su eliminación.

      .col-md-4.col-6.mb-5.mb-lg-0.p-3
        .tarjeta--boton.color-secundario.text-white--hover.p-5
          .row.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img11.svg', alt='Texto que describa la imagen')

          p.m-0.text-small <strong>En segundo lugar,</strong> está la filtración, encargada de separar y eliminar las partículas sólidas, componentes como el hierro, magnesio, e incluso características de color, sabor y olor, este tipo de filtración puede darse por arena, filtración rápida, filtración por membranas, entre otras. 

      .col-md-4.col-6.mb-5.mb-lg-0.p-3
        .tarjeta--boton.color-secundario.text-white--hover.p-5
          .row.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img12.svg', alt='Texto que describa la imagen')

          p.m-0.text-small <strong>En tercer lugar,</strong> está la sedimentación, encargada de eliminar los sólidos suspendidos y disminuir la velocidad del agua, con el fin de que se depositen por gravedad; consiguiente están los procesos biológicos, que pueden ser por lodos activados, filtros percoladores y biorreactores de membrana, en estos procesos se usan bacterias para degradar la materia orgánica del agua. 
      
      .col-md-4.col-6.mb-5.mb-lg-0.p-3
        .tarjeta--boton.color-secundario.text-white--hover.p-5
          .row.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')

          p.m-0.text-small <strong>Por otro lado,</strong> tenemos la desinfección, proceso encargado de inactivar los microorganismos como hongos, bacterias o virus presentes en el agua, realizando desinfecciones químicas con cloro, dióxido de cloro u ozono, desinfección de luz ultravioleta o desinfección térmica. 

      .col-md-4.col-6.mb-5.mb-lg-0.p-3  
        .tarjeta--boton.color-secundario.text-white--hover.p-5
          .row.mb-3
            .col-4
              figure
                img(src='@/assets/curso/tema1/img14.svg', alt='Texto que describa la imagen')

          p.m-0.text-small <strong>Por último,</strong> está la desalinización, tratamiento encargado de la eliminación de sales disueltas del agua por medio de ósmosis inversa, intercambio iónico, destilación, entre otros (BBVA, 2021)
    p.m-0.mt-5.mb-5 A continuación, se mostrarán las fases de la potabilización del agua:
       .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
        h5 Figura 1
        span  Proceso de potabilización del agua
    .row.justify-content-center.bg4(data-aos="zoom-out")
      .col-lg-6
        img(src='@/assets/curso/tema1/img15.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-right")
      figcaption <strong>Nota.</strong> Microbiología UMH. Recuperado de animapura.gif (750x415) (educacion.es)
    
    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="zoom-out-left")
      h2 1.2. Técnicas de depuración de aguas residuales

    p.mb-5 Para conocer la temática al respecto, es importante primero que todo saber cuáles son los tipos de depuración de aguas residuales:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/tema1/img16.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Procesos Físicos
            p Son aquellos que suceden en la planta de depuración de agua residual y se implementan fenómenos físicos como fuerza centrífuga, fuerza de retención, fuerza gravitatoria y fuerza de cohesión.

      .col-lg-4.mb-3
        .tarjetas-up
          img(src='@/assets/curso/tema1/img17.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Procesos químicos
            p Son aquellos que hacen uso de reactivos químicos para provocar reacciones que favorezcan la eliminación de los agentes contaminantes, estos pueden ser la floculación, neutralización, oxidación, intercambio iónico, desinfección.

      .col-lg-4.mb-3
        .tarjetas-up
          img(src='@/assets/curso/tema1/img18.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0 Procesos químicos
            p Este es el más influyente en la eliminación de contaminantes en el tratamiento de aguas residuales, ya que este proceso favorece el proceso biológico de algunos microorganismos que se alimentan de sustancias orgánicas biodegradables. 
      img(src='@/assets/curso/tema1/img19.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-right")
    .row.mb-5.justify-content-center(data-aos="zoom-out-right")
        .col-lg-5
          img.imgposition(src='@/assets/curso/tema1/img20.png', alt='Texto que describa la imagen')
        .col-lg-7.mt-4
          p.mt-4 La depuración de aguas residuales son aquellas instalaciones industriales que están destinadas a la eliminación de los agentes contaminantes del agua. Asimismo, la composición química del agua puede tener una alteración en sus propiedades originales que generan nuevos daños ambientales en ríos, imposibilitando su uso para otro tipo de actividades como usos agrícolas o de jardines. Dicho lo anterior, el objetivo principal de las técnicas de depuración de aguas residuales se basa en eliminar la mayor cantidad posible de sólidos en el agua, antes de que estos vuelvan de nuevo al cauce; por tanto, descontaminar el agua en estos procesos es indispensable para restaurar sus propiedades y retornarlas al medio ambiente en las condiciones más favorables para los ríos y mares.
      
    .titulo-sexto.color-acento-contenido(data-aos="zoom-in-right")
      h5 Figura 2
      span  Esquema de una depuradora de aguas residuales
    .row.justify-content-center(data-aos="zoom-out")
      .col-lg-12
        img(src='@/assets/curso/tema1/img21.svg', alt='Texto que describa la imagen')(data-aos="zoom-in-right")
        figcaption <strong>Nota.</strong> Microbiología UMH. Recuperado de animapura.gif (750x415) (educacion.es)

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-left")
      h2 1.3. Tipos de sustancias químicas a utilizar

    p.mb-5 La calidad del agua depende de procesos de purificación, destinados a mejorar sus características y por tanto, su seguridad y calidad. El desempeño eficiente de estos procesos requiere de la aplicación de químicos profesionales, específicamente en la etapa de purificación que modifiquen el Ph del agua y prevengan la liberación de contaminantes, como metales pesados, compuestos orgánicos volátiles, plaguicidas, entre otros. Ahora bien, las principales sustancias que se emplean en la potabilización del agua para el consumo humano son:

    .row.mb-5.justify-content-center.bg05(data-aos="zoom-out")
      .col-lg-8

        LineaTiempoD.color-primario
          .row(numero="1" titulo="Coagulantes")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Son productos químicos a base de aluminio o hierro que realizan alteraciones de la carga magnética de las partículas en el agua logrando así atraerlas para desatarlas o filtrarlas en cuerpos más grandes.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img22.png', alt='Texto que describa la imagen')
          .row(numero="2" titulo="Floculantes")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Estas son sustancias químicas que incluyen tres tipos de categorías, las naturales, químicas e injertados junto con el proceso de agitación, logran que las partículas contaminantes se transformen en grumos en suspensión en el agua, provocando su precipitación aclaración, eliminación de turbiedades y minerales no beneficiosos para el consumo humano.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img23.png', alt='Texto que describa la imagen')
          .row(numero="3" titulo="Antiespumantes")
            .col-md-4.mb-4.mb-md-0.mt-2.izz  
              p Estos sirven para controlar y reducir el nivel del aire y espuma que quedan durante el proceso de tratamiento de aguas residuales ayudando a disminuir un desbordamiento.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img24.png', alt='Texto que describa la imagen')
          .row(numero="4" titulo="Polímeros orgánicos")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Se utilizan para atraer partículas y hacer una filtración mucho más fácil durante el proceso.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img25.png', alt='Texto que describa la imagen')
          .row(numero="5" titulo="Agentes reductores")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Son agentes antioxidantes, incluyendo el bisulfito de sodio, el hidrosulfito de sodio y el sulfato ferroso que se utilizan para eliminar sustancias como el ozono, el peróxido de hidrógeno, el cloro y contaminantes biológicos que se contengan en el agua y, que junto con la aireación puedan ser correctamente floculados y filtrados. 
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img26.png', alt='Texto que describa la imagen')
          .row(numero="6" titulo="Acondicionamiento de lodos")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Es un tratamiento al que se somete el fluido que viene del proceso de purificación del agua y permite una mayor filtrabilidad del lodo generando mayor eficiencia en el tratamiento de extracción de lodos.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img27.png', alt='Texto que describa la imagen')
          .row(numero="7" titulo="Limpiadores y desengrasantes")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Estos se encargan de eliminar las obstrucciones y los abridores de drenaje que disuelven la grasa y el aceite usando químicos solventes para descomponer la grasa y facilitar su remoción. 
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img28.png', alt='Texto que describa la imagen')
          .row(numero="8" titulo="Limpiadores de membranas y antiincrustantes")
            .col-md-4.mb-4.mb-md-0.mt-2.izz
              p Estos se inyectan en las aguas residuales antes del tratamiento para evitar que las sales minerales disueltas se fusionen en las membranas de filtración.
            .col-md-7
              figure
                img(src='@/assets/curso/tema1/img29.png', alt='Texto que describa la imagen')

    p.mb-5 Respecto a lo mencionado anteriormente, es fundamental tener en cuenta que existen diferentes sustancias que contaminan el agua y que deben saberse tratar con las sustancias adecuadas. Hay gran variedad de contaminantes, como, por ejemplo:
    .row.mb-2.bg04.justify-content-center.p-3
      .col-lg-1
        img(src='@/assets/curso/tema1/img30.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mt-3 Los <strong>compuestos químicos orgánicos</strong> que pueden tener incluido plástico, gasolina, petróleo, detergentes, insecticidas, entre otros componentes que tardan gran cantidad de tiempo en su descomposición. 
      .row.mb-2
      .col-lg-1
        img(src='@/assets/curso/tema1/img31.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mt-3 	Asimismo, están los <strong>desechos orgánicos,</strong> que son aquellos residuos producidos por seres vivos, específicamente los humanos; desechos que pueden lograr afectar en gran medida la calidad del agua. 
      .row.mb-2
      .col-lg-1
        img(src='@/assets/curso/tema1/img32.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mt-3 También, existe la <strong>contaminación patógena</strong> como virus, bacterias, parásitos y otros microorganismos capaces de producir enfermedades y patologías en humanos, plantas y animales. 
      .row.mb-2
      .col-lg-1
        img(src='@/assets/curso/tema1/img33.svg', alt='Texto que describa la imagen')
      .col-lg-10
        p.mt-3 Por último, tenemos los <strong>compuestos químicos inorgánicos</strong> constituidos por sales, metales como el plomo o el mercurio que son letales para cualquier forma de vida y tipos de producción. 

    p.m-0.mt-5.mb-5 Ahora bien, basados en lo anterior, el tratamiento del agua debe ser indispensable en todos los lugares donde se haga uso de este recurso, además los procedimientos y sustancias a utilizar para su potabilización deben ser responsables, conscientes y adecuados. Las aguas que no sean pasadas por este tipo de procedimientos pueden conducir a consecuencias negativas en la salud de la población, en la vida de los ecosistemas tanto acuáticos como terrestres, incluso puede llegar a afectar el sector productivo y por tanto los servicios de agua potable para las comunidades más vulnerables.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
