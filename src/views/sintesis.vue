<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span S
      h1 Síntesis
    p Este documento contiene toda la Identificación de recursos para procedimientos operativos en tratamiento de aguas, con el fin de que el estudiante pueda identificar la capacidad y condiciones de aprovechamiento del recurso hídrico, analizar y apropiarse de los procedimientos, técnicas existentes para la potabilización y procesos llevados a cabo para la depuración del agua. Además, expone las sustancias químicas que se emplean para los procedimientos de tratamiento de aguas y analiza algunos elementos y normatividad que hacen parte de la operación, de tal manera que se pueda generar conciencia desde cada uno de nosotros, sea como individuo, empresa o ente gubernamental y entender que realizar buenas prácticas en todo el proceso, permite minimizar los riesgos que pueden darse por desinformación o mala implementación de los procesos. 

    .row
      .col-lg-12.bg04
        p.m-0 El objetivo principal de este componente es que el aprendiz pueda identificar los sistemas de agua para el consumo humano y compruebe el funcionamiento de estos de acuerdo con normas técnicas vigentes que deben adoptarse por todos los usuarios de dicho recurso hídrico, asimismo, es fundamental entender el papel que juega la política pública para el control de los riesgos que puede causar un funcionamiento inadecuado de estos sistemas de agua, estas entidades gubernamentales, deben adoptar lineamientos y planes de emergencia para el manejo de desastres asociados a la prestación de este servicio público domiciliario de acueducto, alcantarillado y aseo. 
    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/png.png", alt="alt")


</template>

<script>
export default {
  name: 'Sintesis',
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
