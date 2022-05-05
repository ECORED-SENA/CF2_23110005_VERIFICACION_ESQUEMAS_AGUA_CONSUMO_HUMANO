<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Identificación de elementos que hacen parte de la operación
    .row.justify-content-center(data-aos="zoom-out-left")
       p(data-aos="zoom-out-left") Las plantas encargadas del tratamiento de las aguas residuales permiten contener el agua contaminada, con el fin de llevarlas a un proceso que haga posible su reutilización en varios campos, algunos de estos elementos dentro del proceso de operación son:
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-acento-botones.p-4
        .row.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 Sistema de rejas
        p El cual es el medio por el que el cual el agua residual ingresa con algunos elementos pesados como arena, piedras, grasa, sólidos, entre otros, con este sistema se instalan una serie de rejillas dentro del canal de tal forma que estos obstáculos más grandes queden atrapados en la primera etapa. 

      .tarjeta.color-acento-botones.p-4
        .row.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 Los desarenadores y desengrasadores
        p Los cuales son tanques de flujo continuo que separa la arena del líquido sin separar los sólidos orgánicos, usualmente este proceso puede ser usado también como desengrasador de manera moderada para lograr una mayor purificación del agua.
      .tarjeta.color-acento-botones.p-4
        .row.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El decantador
        p Es otro elemento de este proceso y se encarga de separar diferentes componentes líquidos por densidad. Este proceso se realiza a través de la fuerza de gravedad haciendo que estos líquidos más densos vayan al fondo del decantador.
      .tarjeta.color-acento-botones.p-4
        .row.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El reactor biológico
        p Usado para la asimilación de la materia orgánica y los nutrientes disueltos en el agua residual.
      .tarjeta.color-acento-botones.p-4
        .row.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El tanque para el tratamiento físico químico
        p Que permite alterar el estado físico de componentes en el agua como el aluminio, hidróxido o hierro y, que logran eliminar el 80 y 90% de dicha materia suspendida.
      .tarjeta.color-acento-botones.p-4
        .row.mb-3
          .col-8
            img(src='@/assets/curso/tema2/img01.svg' alt='AvatarTop')
        h2 El sistema de deshidratación de lodos y secado de lodos
        p Permitiendo reducir el peso de este componente por medio de radiación solar o calentamiento con elementos infrarrojos. 

    Separador   
    #t_2_1.titulo-segundo.color-acento-contenido.mt-4(data-aos="zoom-out-left")
      h2 2.1. Puesta en marcha del sistema 
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img02.png')})`}"
            )
          .bloque-texto-g__texto.p-4
            p.mb-0 Para establecer un sistema que ponga en marcha todo el proceso de tratamiento de aguas residuales para el consumo potable, es necesario establecer un sistema de captaciones, líneas de conducción, planta de tratamiento, reservorio, redes de distribución y conexiones domiciliarias y/o públicas.
    
    p.m-0 Siendo así, a continuación, podrán observar el proceso de tratamiento de aguas residuales para el consumo potable:

      TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Captaciones" :icono="require('@/assets/curso/tema2/img03.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Captaciones
            p Son estructuras que se construyen para la recepción del agua y que serán trasladadas a la planta de tratamiento de agua potable, se deben diseñar cercos perimétricos para asegurar que dichas estructuras sean construidas correctamente. 
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img08.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Conducciones" :icono="require('@/assets/curso/tema2/img03.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Conducciones
            p Se diseñan con el fin de ajustar la presión en un punto neutro para conseguir una regulación del caudal mediante una válvula flotadora, en esta se debe colocar la caja principal de concreto en el lugar preciso, ajustar la calcula flotadora para que se cierre la compuerta a la altura indicada. 
          .col-md-4
            figure
              img(src='@/assets/curso/tema2/img09.png', alt='Texto que describa la imagen')
      
    #t_2_2.titulo-segundo.color-acento-contenido.mt-4(data-aos="zoom-in-left")
      h2 2.2. Saneamiento básico 
    
    
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
