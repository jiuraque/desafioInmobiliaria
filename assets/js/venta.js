const propiedades_venta = [
  {
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    nombre: "Apartamento de lujo en zona exclusiva",
    descripcion:
      "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    baños: 4,
    costo: 5.000,
    smoke: false,
    pets: false,
  },
  {
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    nombre: "Apartamento acogedor en la montaña",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    baños: 1,
    costo: 1.200,
    smoke: true,
    pets: true,
  },
  {
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    nombre: "Penthouse de lujo con terraza panorámica",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4.500,
    smoke: false,
    pets: true,
  },
];

const ventaSection = document.getElementById("venta");

for (let propiedad of propiedades_venta) {
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
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString("es-ES", { minimumFractionDigits: 3, maximumFractionDigits: 3 })}</p>
                ${propiedad.smoke ? 
                  `<p class="text-success">
                    <i class="fas fa-smoking">
                    </i> Permitido fumar
                  </p>`
                    : `<p class="text-danger">
                    <i class="fas fa-smoking-ban"
                    ></i> No se permite fumar
                  </p>`
                }
                  ${propiedad.pets ?
                  `<p class="text-success">
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
  ventaSection.innerHTML += cardTemplate;
}
