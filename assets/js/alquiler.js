const propiedades_alquiler = [
  {
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    nombre: "Apartamento en el centro de la ciudad",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.0,
    smoke: false,
    pets: true,
  },

  {
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    nombre: "Apartamento luminoso con vista al mar",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2.5,
    smoke: true,
    pets: true,
  },

  {
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    nombre: "Condominio moderno en zona residencial",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: false,
    pets: false,
  },
];

const alquilerSection = document.getElementById("alquiler");

for (let propiedad of propiedades_alquiler) {
  const cardTemplate = `<div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                ${propiedad.nombre}
                </h5>
                <p class="card-text">
                ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${
                    propiedad.habitaciones
                  } <span>Habitaciones</span> <span>|</span>
                  <i class="fas fa-bath"></i> ${
                    propiedad.baños
                  } <span>Baños</span>
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString(
                  "es-ES",
                  { minimumFractionDigits: 3, maximumFractionDigits: 3 }
                )}</p>
                ${
                  propiedad.smoke
                    ? `<p class="text-success">
                    <i class="fas fa-smoking">
                    </i> Permitido fumar
                  </p>`
                    : `<p class="text-danger">
                    <i class="fas fa-smoking-ban"
                    ></i> No se permite fumar
                  </p>`
                }
                  ${
                    propiedad.pets
                      ? `<p class="text-success">
                    <i class="fas fa-paw">
                    </i> Mascotas permitidas
                  </p>`
                      : `<p class="text-danger">
                    <i class="fas fa-ban">
                    </i> No se permiten mascotas
                  </p>`
                  }
                </p>
              </div>`;
  alquilerSection.innerHTML += cardTemplate;
}
