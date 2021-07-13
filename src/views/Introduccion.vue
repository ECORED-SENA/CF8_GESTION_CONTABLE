<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .col-lg-8.mx-auto.mb-5
      img(src="@/assets/curso/i1.svg",alt="Personas con mercancía")
    p El presente componente aborda el concepto, importancia, clasificación, normativa y tratamiento contable de la propiedad, planta y equipo, un rubro importante dentro de los elementos que conforman los estados financieros. A continuación, encontrará el desarrollo de cada uno de los temas para mayor comprensión.
    p <b>Nota aclaratoria:</b> las tablas que se toman como referencia en los ejemplos de cada uno de los temas desarrollados, elaboradas mediante el programa Excel son derivadas de estos ejercicios, la elaboración es propia del autor del presente componente, por lo tanto, no se numeran y no se establece un nombre específico.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
