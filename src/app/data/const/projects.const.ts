
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
        imgSrc:"https://ww3.servipag.com/pagoenlinea/wcm/connect/58ccbff6-fa42-490b-9b35-296d9b7917b4/logo+header+170x80px.svg?MOD=AJPERES&CACHEID=58ccbff6-fa42-490b-9b35-296d9b7917b4",
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
        imgSrc:"https://nanobiohealth.cl/assets/images/centro_aleman/logo-centro-aleman.jpg",
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
    }
]