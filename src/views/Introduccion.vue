<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 
          i.fas.fa-info
          
      h1 Introducción
    p(data-aos="fade-right") Bienvenidos a este componente formativo, donde como primera instancia, vamos a ver el siguiente video que nos dará una introducción general a la temática a tratar, para luego empezar a desarrollar cada uno de los contenidos:
    .bgvideos.py-5.px-5.px-md-0
      .row.justify-center
        .col-md-10
          figure
            .video
              iframe(width="560" height="215" src="https://www.youtube.com/embed/_xdcnVR-mc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
