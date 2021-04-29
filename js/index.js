
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
  
const pokemones = [];           //arreglo

const cargartabla =()=>{
  //1.Obtener una referencia a la tabla
  let  tbody = document.querySelector("#tabla-tbody");
  //Eliminar todos los elementos que tenga el tbody
  tbody.innerHTML = "";
  //2. Recorrer la lista de pokemon
  for(let i=0;i<pokemones.length;++i){
    let p = pokemones[i];
    //3. Por cada pokemon generar una fila (tr)
    let tr = document.createElement("tr");
    //4. Por cada atributo(nombre,tipo,desc), generar celdas(td)
    let tdNro = document.createElement("td");
    tdNro.innerText = (i+1);
    let tdNombre = document.createElement("td");
    tdNombre.innerText = p.nombre;
    let tdTipo = document.createElement("td");
    let icono = document.createElement("i");
    if(p.tipo =="fuego"){
      //<i class="fas fa-fire"></i>
      //Agregar clases a un elemento
      icono.classList.add("fas","fa-fire","text-danger","fa-3x");
    }else if(p.tipo =="planta"){
      //<i class="fas fa-leaf"></i>
      icono.classList.add("fas","fa-leaf","text-success","fa-3x");
    }else if(p.tipo =="electrico"){
      //<i class="fas fa-bolt"></i>
      icono.classList.add("fas","fa-bolt","text-warning","fa-3x");
    }else if(p.tipo == "agua"){
      //i class="fas fa-tint"></i>
      icono.classList.add("fas","fa-tint","text-primary","fa-3x");
    }else{
      //<i class="fas fa-star"></i>
      icono.classList.add("fas","fa-star","text-info","fa-3x");
    }
    tdTipo.classList.add("text-center")
    tdTipo.appendChild(icono);
    let tdDescripcion = document.createElement("td");
    tdDescripcion.innerHTML = p.descripcion; //El innerHTML interpreta los <h1> y variantes, escribiendo solo el texto
    let tdAcciones = document.createElement("td");
    //5. Agregar las celdas al tr
    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdTipo);
    tr.appendChild(tdDescripcion);
    tr.appendChild(tdAcciones);
    //6. Agregar el tr a la tabla
    tbody.appendChild(tr);
  }
};

document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    //value es para obtener el valor de los input de txt
    let nombre =  document.querySelector("#nombre-txt").value;
    //para obtener lo escrito en la desc, sacado de tinymce
    let descripcion = tinymce.get("desc-txt").getContent();
    //checked indica si el radiobutton esta seleccionado
    let legendario =  document.querySelector("#legend-si").checked;
    //El tipo se obtiene igual que los input
    let tipo = document.querySelector("#tipo-select").value;
    //Como crear un objeto
    let pokemon = {};
    pokemon.nombre = nombre;
    pokemon.descripcion = descripcion;
    pokemon.legendario = legendario;
    pokemon.tipo = tipo;
    //Como guardar en una lista de elementos
    pokemones.push(pokemon); // como el append de python
    cargartabla();
    //titulo, texto, tipo: success,info,danger,warning,etc
    Swal.fire("Exito!","Pokemon registrado","success")
} );