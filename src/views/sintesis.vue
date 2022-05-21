<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.m-0 Este documento contiene toda la Identificación de recursos para procedimientos operativos en tratamiento de aguas, con el fin de que el estudiante pueda identificar la capacidad y condiciones de aprovechamiento del recurso hídrico, analizar y apropiarse de los procedimientos, técnicas existentes para la potabilización y procesos llevados a cabo para la depuración del agua. Además, expone las sustancias químicas que se emplean para los procedimientos de tratamiento de aguas y analiza algunos elementos y normatividad que hacen parte de la operación, de tal manera que se pueda generar conciencia desde cada uno de nosotros, sea como individuo, empresa o ente gubernamental y entender que realizar buenas prácticas en todo el proceso, permite minimizar los riesgos que pueden darse por desinformación o mala implementación de los procesos. 
  
    .col-lg-12.bg04.mt-3
      p.p-5.mb-5 El objetivo principal de este componente es que el aprendiz pueda identificar cuáles son los procedimientos operativos para el tratamiento de agua potable, cuáles y que son sus diferentes fases, que técnicas se usan y cómo se emplean en el proceso, que sustancias se utilizan para su desinfección y cómo todo esto articulado óptimamente aporta a una mejor calidad de vida de la población, además de entender que en un ambiente laboral existen riesgos de seguridad y salud que deben abordarse y comunicarse con cada trabajador interno y externo de la organización.
      
    p.mb-0.mb-5 Veamos relacionado lo anterior, a través de un esquema:
    .row.mb-5.justify-content-center
      .col-lg-12
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")

    .row.justify-content-center 
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
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
