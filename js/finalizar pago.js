const comprar = document.querySelector('.comprar')

function datosTarjeta(){
    Swal.fire({
        icon: 'success',
        title: 'COMPRA FINALIZADA',
        text: '',
        footer:'Gracias por elegirnos'
      })

    

} comprar.addEventListener('click', datosTarjeta)