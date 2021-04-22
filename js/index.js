
tinymce.init({
    selector: '#desc-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });
  
document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de txt
    let nombre =  document.querySelector("#nombre-txt").value;
    //para obtener lo escrito en la desc, sacado de tinymce
    let descripcion = tinymce.get("desc-txt").getContent();
    //checked indica si el radiobutton esta seleccionado
    let legendario =  document.querySelector("#legend-si").checked;
    //El tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;
    console.log("Hola Mundo!" + nombre,descripcion,legendario,tipo);
} );