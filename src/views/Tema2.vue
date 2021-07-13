<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Propiedades de Inversión
    p.mb-5 Son activos de los cuales se espera obtener rendimientos a futuro, generando ingresos no operacionales para la empresa, como son el arriendo de los terrenos, edificios, casas, locales, entre otros. De estos, se obtiene una contraprestación en dinero que incrementa la economía de los propietarios, además, el terreno se valoriza. Por ende, a largo plazo, se obtiene una utilidad cuando el activo es vendido. Por esto, la importancia que revisten las inversiones no solo en las empresas, sino también, en las personas naturales, que, para muchos es su actividad diaria, igualmente, algunas personas piensan que invertir es un riesgo, aunque en realidad es una oportunidad para crecer financieramente.
    .col-lg-5.mx-auto.mb-5
      img(src="@/assets/curso/t2/f1.svg",alt="imagen de arrendamiento")
    Separador
    #t_2_1.titulo-segundo
      h2 2.1 Política contable
    p Las políticas contables deben ser coherentes, claras y legibles; por ello, se debe tener en cuenta la Norma Internacional de Contabilidad (NIC) 8 para NIIF plenas y Norma NIIF para Pymes en la sección 10 “Políticas, Estimaciones Y Errores Contables” de acuerdo con el tipo de empresa y grupo de presentación de información financiera.
    p Para la elaboración de las políticas contables de las propiedades de inversión es importante tener en cuenta los criterios de reconocimiento, medición, presentación y revelación, establecidos en la Norma Internacional de Contabilidad (NIC) 40.
    .row.alig-items-start.mb-5
      .col-lg-6
       p La medición inicial se realiza aplicando el modelo del costo y en la medición posterior se efectúa a valor razonable, con cambios en el resultado, que afectan la utilidad del ejercicio. Sin embargo, en las propiedades de inversión se puede establecer en la política contable, el criterio de medición al costo en casos específicos donde sea imposible medir a valor razonable. Es importante hacer referencia a que la norma solicita que todas las entidades midan a valor razonable, sin embargo, esto no es una obligación, pero si se debe tener presente el mejor criterio que beneficie a la entidad. Por último, se debe tener en cuenta que, al momento de vender una propiedad de inversión, se reconoce a valor razonable, sin importar el criterio de medición establecido para la empresa.
      .col-lg-3.mx-auto
        img(src="@/assets/curso/t2/f2.svg",alt="Persona al lado de documento de política contable")
    h3 Deterioro de propiedad de inversión
    .container.fondo-azul-clarito.p-md-5.mb-5
      .row.align-items-center
        .col-lg-3.mx-auto
          img(src="@/assets/curso/t1/f3.svg",alt="Persona viendo documentos")      
        .col-lg-6.mx-auto
          p.mb-4 El deterioro de valor de una propiedad de inversión hace referencia a la pérdida de dinero que puede presentar el bien por eventos imprevistos, disminuyendo el valor de este en la contabilidad.
          a.boton.me-3.indicador__container(
            :href="obtenerLink('/downloads/deterioroPPYE2.pdf')"
            target="_blank"
            type="application/pdf"
            @mouseover="mostrarIndicador = false"
          )
            span Descargar
            i.fas.fa-file-download
            .indicador--click(v-if="mostrarIndicador")
    //figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video    
    h4 Ejemplo:
    .cajon.color-primario.fcp.p-4.mb-5
      p.mb-5 La empresa X adquiere un local para inversión por valor de $50.000.000, el 10% corresponde a terrenos, y el resto es construcción, se estima un desmantelamiento de $5.000.000 a una tasa del 6% E.A. al finalizar su vida útil de 20 años.
      .row.align-items-start
          .col-lg-5
            .tabla-b.color-acento-botones.mb-5 
              h6.p-3._100pc.text-center.fac.mb-0 RECONOCIMIENTO
              table.fblanco
                tbody
                  tr
                    td.text-center Construcción
                    td.text-right $ 45.000.000
                  tr
                    td.text-center Terreno
                    td.text-right $ 5.000.000
                  tr
              h6.p-3._100pc.text-center.fac.mb-0 Desmantelamiento
              table.fblanco
                tbody
                  tr
                    td.text-center Vp= VF/(1+ti)^n
                    td.text-right $ 1.559.024
          .col-lg-7.tablap
            .tabla-b.color-acento-botones.mb-5
              h6.p-2._100pc.text-center.fg63.mb-0 MEDICIÓN INICIAL
              table.fblanco
                thead.text-center.fac
                  tr
                    th.text-center CÓDIGO
                    th.text-center CUENTA
                    th.text-center DEBE
                    th.text-center HABER
                tbody
                  tr
                    td 150405
                    td Terrenos urbanos
                    td.text-right $ 5.000.000
                    td
                  tr
                    td 151610
                    td Bodega
                    td.text-right $ 46.559.024 
                    td.text-right 
                  tr 
                    td 299501
                    td Prov. desmantelamiento
                    td 
                    td.text-right $ 1.559.024 
                  tr 
                    td 233505
                    td Costos y gastos por pagar
                    td 
                    td.text-right $ 50.000.000
    p Pasado un año la bodega sufre un deterioro por inseguridad en el sector y pierde valor por $5.000.000. Se solicita realizar la medición posterior del activo.
    .row.align-items-center.mb-5
      .col-lg-4.mx-auto
        .cajon.color-primario.fondo-azul-clarito.p-4
          p <b>Valor inicial de la bodega</b> $ 46.559.024
          p <b>Depreciación anual</b> $ 2.327.951
          p <b>Deterioro:</b> $ 5.000.000
          p.mb-5 <b>Valor actual:</b> $ 39.321.073
          p <b>159901 Deterioro Bodega</b> $ 5.000.000
          p.mb-0 <b>519801 Deterioro</b> $ 5.000.000 
      .col-lg-4.mx-auto
        img(src="@/assets/curso/t2/f3.svg",alt="Trabajador")
    Separador
    #t_2_2.titulo-segundo
      h2 2.2 Reconocimiento, medición, presentación y revelación
    p <b>Reconocimiento:</b> la propiedad de inversión se reconoce cuando genere beneficios económicos en el futuro y el costo de esa propiedad de inversión sea confiable. Cabe resaltar, que los costos adicionales en que se incurran son reconocidos como mayor valor del bien, excepto los mantenimientos de estas propiedades que no son reconocidos en el activo, sino en el gasto. 
    p <b>Medición inicial:</b> las propiedades de inversión se miden al costo, teniendo en cuenta los valores adicionales como mayor valor del bien, entre los que se pueden encontrar: comisiones, impuestos y demás costos en los que se incurra para poder adquirir el activo.
    h4 Ejemplo:
    .cajon.color-primario.fcp.p-4.mb-5
      p.mb-5 La empresa X adquiere un local para inversión por valor de $50.000.000, el 10% corresponde a terrenos, y el resto es construcción, tener en cuenta los criterios de medición.
      .row.align-items-start
        .col-lg-5
          .tabla-b.color-acento-botones.mb-5 
            h6.p-3._100pc.text-center.fac.mb-0 RECONOCIMIENTO
            table.fblanco
              tbody
                tr
                  td.text-center Construcción
                  td.text-right $ 45.000.000
                tr
                  td.text-center Terreno
                  td.text-right $ 5.000.000
                tr
            h6.p-3._100pc.text-center.fac.mb-0 Desmantelamiento
            table.fblanco
              tbody
                tr
                  td.text-center Vp= VF/(1+ti)^n
                  td.text-right $ 1.559.024
        .col-lg-7.tablap
          .tabla-b.color-acento-botones.mb-5
            h6.p-2._100pc.text-center.fg63.mb-0 MEDICIÓN INICIAL
            table.fblanco
              thead.text-center.fac
                tr
                  th.text-center CÓDIGO
                  th.text-center CUENTA
                  th.text-center DEBE
                  th.text-center HABER
              tbody
                tr
                  td 150405
                  td Terrenos urbanos
                  td.text-right $ 5.000.000
                  td
                tr
                  td 151601
                  td Bodega de inversión
                  td.text-right $ 45.000.000
                  td.text-right 
                tr 
                  td 233505
                  td Costos y gastos por pagar
                  td 
                  td.text-right $ 50.000.000
    p <b>Medición posterior:</b> las empresas pueden medir al costo o valor razonable las propiedades de inversión, pero debe estar debidamente explícito en la política contable. Sin embargo, aunque la norma no obliga a que debe ser a valor razonable se enfoca en este tipo de criterio de medición, independientemente, si se tiene experiencia con la propiedad de inversión o si es nuevo para la empresa.
    p <b>Presentación y revelación:</b> la propiedad de inversión se presenta y se revela teniendo en cuenta el criterio de medición inicialmente estipulados en la política contable. Si es a valor razonable, se debe tener en cuenta que al cierre del periodo se debe hacer el ajuste de acuerdo con el valor del mercado, así mismo, se debe revelar los ingresos obtenidos y los gastos incurridos en esa inversión.
    p.mb-5 Consulte la Norma Internacional de Contabilidad número cuarenta, propiedad de inversión.
    .tarjeta.g1.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/documento.svg",alt='documento')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.texto-blanco Norma internacional de Contabilidad número cuarenta
              p.texto-blanco.mb-0 Propiedad de inversión.
            .col-sm-auto
              a.boton.color-acento-botones(href="http://www.aplicaciones-mcit.gov.co/adjuntos/niif/31%20ES_RedBV2016_IAS40_PartA.pdf" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass" scoped></style>
