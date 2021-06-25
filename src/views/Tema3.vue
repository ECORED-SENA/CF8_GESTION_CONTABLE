<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Activos Mantenidos para la Venta
    p Los activos no corrientes mantenidos para la venta serán clasificados por la entidad, si su importe en libros se recuperará fundamentalmente a través de una transacción de venta a diferencia de activos que tienen uso continuado los cuales tienen otra finalidad. 
    p.mb-5 Para efectuar la clasificación anterior, el activo debe estar a disposición y en condiciones actuales para su venta inmediata sujeto a los términos usuales y habituales para la venta y negociado razonablemente; este debe ser vendido en menos de un año.
    .col-lg-9.mx-auto.mb-5
      img(src='@/assets/curso/t3/f1.svg',alt='Trabajador en obra')
    Separador
    #t_3_1.titulo-segundo
      h2 3.1 Política contable
    p.mb-5 La Política contable de cualquier activo establece las características de reconocimiento, medición inicial y posterior, presentación y revelación de la información contable y financiera de los activos que posee la entidad al cierre del periodo contable. Además, debe cumplir los requerimientos para ser clasificación, según la NIIF 5 “activos no corrientes mantenidos para la venta” se debe reconocer si el valor de esos activos se recupera por medio de ventas y no por uso de este. Igualmente, se debe determinar el criterio de medición establecido en la norma.
    .col-lg-5.mx-auto.mb-5
      img(src='@/assets/curso/t3/f2.svg',alt='Mujer con documentos')
    Separador
    #t_3_2.titulo-segundo
      h2 3.2 Reconocimiento, medición, presentación y revelación
    h4 Reconocimiento
    p Los activos fijos disponibles para la venta se reconocen en el momento de su clasificación, después de haber cumplido con los requisitos del literal 8 de la NIIF 5, y su valor contable se recuperará, a través de la venta. 
    p Los activos que se encuentran mantenidos para la venta NO serán objeto de depreciación, mientras el mismo esté clasificado con esas características.
    h4 Medición
    p Una entidad medirá sus activos no corrientes mantenidos para la venta, al menor valor entre su valor en libros y su valor razonable, menos los gastos para ser vendidos. Es decir, se debe reclasificar al menor valor, además, los activos se deben presentar de manera separada en los estados financieros. Por último, es importante conocer que este tipo de activos el valor se recupera con la venta y no con su uso. 
    h4 Ejemplo:
      p.mb-5 La empresa ABC Ltda. responsable de IVA Compra una máquina en el exterior para uso de la empresa por valor de USD 5.000, en la fecha de la compra la tasa de cambio es de $3.500, pero el pago de la máquina se hace cuando se reciba en Colombia y esté dispuesta para ser usada, en ese momento el valor del dólar es $3.750.
      .row.align-items-center
        .col-lg-7.tablap
          .cajon.color-primario.fcp.p-5.mb-5
            p.mb-4 Se compra una casa por valor de $100.000.000, para venderla posteriormente
            table.fblanco.mb-4
              tbody
                tr
                  th 151601
                  td casa para venta
                  td.text-right $ 110.000.000
                  td.text-right 
                tr
                  th 233205
                  td 
                  td.text-right 
                  td.text-right $ 110.000.000
        .col-lg-3.mx-auto
          img(src="@/assets/curso/t3/f3.svg",alt="Imagen de agente de bienes raíces")
    h4 Operaciones Discontinuadas
    p Son flujos u operaciones que se pueden distinguir claramente de otros flujos u operaciones, si estos se clasifican como mantenidos para la venta y se manejan como operaciones discontinuadas, es decir, aquellos activos de la entidad que han sido clasificados como mantenidos para la venta.
    h4 Ejemplo:
    .row.align-items-center.mb-5
      .col-lg-4.mx-auto
        img(src="@/assets/curso/t3/f4.svg",alt="Mujer viendo vitrina")
      .col-lg-6.mx-auto
        .cajon.color-primario.fcp.p-5
          p Se tiene un número de tiendas de ropa, pero se decide cerrar una de ellas, todos los activos que están relacionados con esa tienda los podemos clasificar como mantenidos para la venta y los flujos de efectivo y operaciones que sigan teniendo esa tienda se continúan manejando como operaciones discontinuadas.
          p.mb-0 Se catalogan operaciones discontinuadas porque, se espera que en el corto plazo ya no se siguen presentando.
      h4 Información a Revelar 
      p Una entidad presentará y revelará información que permita a los usuarios de los estados financieros evaluar los efectos financieros de las operaciones discontinuadas y las disposiciones de los activos no corrientes. (CTCP, 2016b)
      p Igualmente, una empresa presentará en sus estados de situación financiera un activo no corriente de manera separada como mantenidos para la venta, al igual que los pasivos involucrados por este concepto. 
      p Además, la empresa revelará el resultado después de impuestos de las operaciones discontinuadas, las ganancias o pérdidas derivadas de la diferencia entre el valor razonable menos costos de ventas, suministrando una descripción de la venta ocurrida. 
    p.mb-5 Consulte la Norma Internacional de Contabilidad número cinco, activos mantenidos para la venta.
    .tarjeta.g1.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/documento.svg",alt='documento')
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1.texto-blanco Norma internacional de Contabilidad número cinco
              p.texto-blanco.mb-0 Activos mantenidos para la venta.
            .col-sm-auto
              a.boton.color-acento-botones(href="http://www.aplicaciones-mcit.gov.co/adjuntos/niif/50%20ES_RedBV2016_IFRS05_PartA.pdf" target="_blank" type="application/pdf")
                span Ver
                i.fas.fa-file-download
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
