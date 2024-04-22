
const productos = [
    {
      id: "ASC001",
      nombre: "iPhone 15 Pro Max",
      descripcion: "1TB 5G | 8GB RAM | Pantalla 6.1 pulgadas | Chip A17 Pro | Carga Tipo C | Dynamic Island | Cámara 48MP",
      imagen: "../../public/imagenes/Iphone_15_pro_max.png",
      precio: "$4'799.000 COP",
      stock: 5,
      categoria: "iPhone"
    }, 
    {
      id: "ASC002",
      nombre: "iPhone 15",
      descripcion: "256GB 5G | 6GB RAM | Pantalla 6.1 pulgadas | Chip A16 Bionic | Carga Tipo C | Dynamic Island | Cámara 48MP",
      imagen: "../../public/imagenes/Iphone_15.png",
      precio: "$3'299.000 COP",
      stock: 5,
      categoria: "iPhone"
    },
    {
      id: "ASC003",
      nombre: "iPhone 13",
      descripcion: "128 GB 5G | 4GB RAM | Pantalla 6.1 Pulgadas | Chip A15 Bionic",
      imagen: "../../public/imagenes/Iphone_13.png",
      precio: "$2'099.000 COP",
      stock: 5,
      categoria: "iPhone"
    },
    {
      id: "ASC004",
      nombre: "Apple Watch Series 9",
      descripcion: "Medianoche 45mm Correa Medianoche Talla S/M",
      imagen: "../../public/imagenes/SERIES 9.png",
      precio: "$2'399.000 COP",
      stock: 5,
      categoria: "AppleWatch"
    },
    {
      id: "ASC005",
      nombre: "Apple Watch Series 8",
      descripcion: "GPS - Caja de Aluminio 41 mm - Correa Talla Única",
      imagen: "../../public/imagenes/SERIES 8.png",
      precio: "$1'899.000 COP",
      stock: 5,
      categoria: "AppleWatch"
    },
    {
      id: "ASC006",
      nombre: "Apple Watch Ultra",
      descripcion:"GPS + Celular + Caja de titanio 49mm Correa Talla S/M",
      imagen: "../../public/imagenes/ULTRA.png",
      precio: "$3'799.000 COP",
      stock: 5,
      categoria: "AppleWatch"
    },
    {
      id: "ASC007",
      nombre: "AirPods 2da Generación",
      descripcion:"Dispositivo bluetooth, pausa y reproduce a un toque",
      imagen: "../../public/imagenes/AIRPODS_2.png",
      precio: "$699.000 COP",
      stock: 5,
      categoria: "airpods"
    },
    {
      id: "ASC008",
      nombre: "AirPods 3ra Generación",
      descripcion:"Resistente al Agua y al sudor IPX4, sonido envolvente 3D, pausa, reproduce y recibe llamadas a un toque",
      imagen: "../../public/imagenes/AIRPODS_3.png",
      precio: "$1'100.000 COP",
      stock: 5,
      categoria: "airpods"
    }
  ]
  
  const getProducts = new Promise ( (resolve, reject) => {
    setTimeout(()=>{
        resolve(productos); 
    }, 3000);
  });

  export default getProducts
