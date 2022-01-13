
export const projects: any[] = [
    {
        id : "1",
        nombreProyecto: "BankApp",
        imgSrc: "https://img.freepik.com/vector-gratis/edificio-banco-blanco-columnas-bandera-techo-aislado-ilustracion-plana_124715-389.jpg?size=626&ext=jpg",
        url:'https://bank-app-1ec4a.web.app/',
        intro:'Aplicación web que simula una agenda bancaria',
        images:['https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg','https://victorroblesweb.es/wp-content/uploads/2018/01/nodejs-victorroblesweb.png','https://victorroblesweb.es/wp-content/uploads/2018/01/bootstrap-victorroblesweb.png','https://blog.auriboxtraining.com/wp-content/uploads/2018/07/firebase-logo.png'],
        desc:'Proyecto web desarrollado usando Angular 11 que cumple la función de simular una agenda bancaria. Se pueden agregar usuarios'+
            ' a la agenda y solo los usuarios ingresados pueden recibir transferencias. Este proyecto fue desarrollado para un taller de prueba'+
            ' de reclutamiento de desarrolladores web',
        dev: "Este software fue desarrollado con el framework Angular 11. El lenguaje utilizado para la base de datos fue MySql, el cual "+
            "almacenado en un servicio Cloud en Heroku. Para la manipulación de la base de datos se utilizó el software MysqlWorkbench. El "+
            "diseño de la api fue elaborado con nodejs y el framework express. Las rutas de este backend fueron testeadas con el software Postman. "+
            " El front-end fue levantado con el servicio cloud de google llamado firestore."           
    },
    {
        id:"2",
        nombreProyecto:"Servipag App",
        imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Logo_Servipag.svg/600px-Logo_Servipag.svg.png",
        url:'https://servipagangular.web.app/',
        intro:'Aplicación web que simula pago de servicios online',
        images:['https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg','https://desarrolloweb.com/storage/tag_images/actual/sT1RLpDHzInATuKnDUkwXhKoaIOrtS97gBtgiQ6M.png','https://victorroblesweb.es/wp-content/uploads/2018/01/bootstrap-victorroblesweb.png','https://blog.auriboxtraining.com/wp-content/uploads/2018/07/firebase-logo.png'],
        desc:'Proyecto web desarrollado con el framework Angular 11 que emula el funcionamiento del sistema de pagos online de Servipag. Este '+
            ' proyecto fue desarrollado de forma autonoma solo con fines didacticos.',
        dev:'El desarrollo del software fue implementado con Angular 11 para la parte front. Se ocuparon técnicas de css, javascript. Con respecto al diseño '+
            "se utilizó la libreria de Bootstrap. Cabe mencionar que no se utilizo de un back-end, ya que la información desplegada en la aplicación "+
            "esta almacenada variables constantes, por lo que su información de mantiene."
    },
    {
        id:"3",
        nombreProyecto:"NanoBioHealth",
        imgSrc:"data:image/jpeg;base64,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BCZOBI2QGKtNPcGn9l7m1t8Cd681g90meTbX12T2/pHMPedXQN8NlYqSlR6aLfLBE5+A5+gDb9G5pPxOmvySQSSaGmLRpcHFxc0jbwbRvdS1JSs8CsEFFFL2Pu5iokFuvU0tAJ61d38KX23FkY8yBuunO7tiyHBveBO193xU1SUny8dnfHHoCFlxpHa5NFEmOo9Q1EMNmyDV7+axS4r9T36JTr3pkwZpNVTu9Xh1FqfSlHy8fMEPiwPhJ0xlzXBuweCWkCqJcRY+KzRQPLpHFoGqMCrvfvbX6qSpKVlhXn+gohcSGSHfsy+2NB0uaC0tFV3iBXj6rGeGSEUQBYeaBsAueHBvy2+pU8lKvy8WqYIiaOSbS10ZjDTZcS0/skU2j8eq0sjKJibEGNPeY0PEjSDTh0H2r26VsrJSwNxIw7WGNDvvBov8VEsN8P39gRUsMzSdIdpL3kiMsDtyNJt+1Lb4NC9kdPBDi5zqJBO5sWRtakaRXjhUZdVsHqIi2AREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAf/2Q==",
        url:'https://nanobiohealth.cl/',
        intro:'Landing Page para una clínica de tratamiento del cancer',
        images:['https://www.manejandodatos.es/wp-content/uploads/2013/07/html5_logo.png','https://victorroblesweb.es/wp-content/uploads/2018/01/bootstrap-victorroblesweb.png','http://javadesde0.com/wp-content/uploads/sass-1.jpg'],
        desc:'Esta es un sitio web desarrollado con HTML5, SCSS, Javascript, entre otras tecnologías. Fue implementada para la Clínica Alemana '+
            ' que se preocupa del tratamiento del Cancer. Se ocupo la libreria de bootstrap para complementar el diseño del sitio web. ',
        dev:'Landing page que utiliza una plantilla de bootstrap que viene con gran parte del diseño del sitio. Se complementa con ciertas funcionalidades '+
            'usando tecnicas de javascript y a su vez librerias tambien de javascript como Jquery.'
    },
    {
        id:"4",
        nombreProyecto:"Api Rest",
        imgSrc:"https://www.oscarlijo.com/blog/wp-content/uploads/2015/04/json-logo.png",
        url:'https://app-bank-ripley.herokuapp.com',
        intro:'Aplicación web back-end para complementar a Bank-app',
        images:['https://victorroblesweb.es/wp-content/uploads/2018/01/nodejs-victorroblesweb.png','https://miro.medium.com/max/365/1*Jr3NFSKTfQWRUyjblBSKeg.png','https://camo.githubusercontent.com/58e35d08b53ec029f0e3e587a28a6f65777d352f797add843d153a0db60b9d7d/68747470733a2f2f692e696d6775722e636f6d2f79764559686e5a2e706e67','https://media-exp3.licdn.com/dms/image/C4E0BAQGmNZMDOpmMQg/company-logo_200_200/0/1519905610801?e=2159024400&v=beta&t=D5lu9rTbQ_aW1ubme8GIq_QhKIm8WTiXTtoBlEHPcA8'],
        desc:'Proyecto complementario al de Banco Ripley desarrollado con NodeJs y express. El desarrollo de este proyecto fue necesario para suministrar '+
            'información hacia el front-end, donde se aplicaron técnicas de desarrollo de software. La aplicación actualmente funciona con el servicio cloud de Heroku.',
        dev:"El desarrollo de esta aplicación de back-end se programó con NodeJs y el framework express. Para simplificar y acelerar el desarrollo de la aplicación se utilizó el ORM de Sequelize, esto permite trabajar la base de datos "+
        "sobre una estructura logica de entidades. Con Heroku se nos permite subir la aplicación back-end a un servidor remoto donde se nos entregan credenciales para acceder a una base de datos "+
        "que será utilizada en el front-end y dentro de la cual estarán almacenadas nuestras rutas programadas con express.",
    },
    {
        id:"5",
        nombreProyecto:"Master en CSS",
        imgSrc:"https://mariogl.com/wp-content/uploads/2012/08/css-html-parte-2.png",
        url:'http://misitiopirata.000webhostapp.com/',
        intro:'Sitio web desarrollado usando Css y Html5',
        images:[],
        desc:'Proyecto de fines didácticos desarrollado con Html5 y Css. Su función era la de probar funcionalidades de '+
        'y efectos de CSS. ',
        dev:'Se aplicaron tecnicas de transformación de textos, reposicionamiento de elementos, entre otras. Ademas del modelo responsive '+
        ', siempre orientado tambien al software movil.'
    },
    {
        id:"6",
        nombreProyecto:"PanchoRepuestos",
        imgSrc:"http://panchorepuestos.cl/storage/imagenes/logo_pos.png",
        url:'http://panchorepuestos.cl/login',
        intro:'Aplicación web desarrollada con PHP y su framework Laravel 7',
        images:[],
        desc:'Aplicación web destinada a la administración de un negocio de ventas de repuestos para vehiculos. ',
        dev:'Toco implementar el servicio de login de Laravel, la administración de la base de datos en SQL, la edición de estilos usando CSS y algunas clases de bootstrap.'
    }
]