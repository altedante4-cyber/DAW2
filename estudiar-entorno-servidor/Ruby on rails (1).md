

<!-- Start of picture text -->
de!<br>hal :ei<br>def<br>; qe erent 8<br>| rene! choi<br>W ef ih<br>4<br>use * art<br>n<br>1 pet :apla!<br>RUBY ON RAILS<br>B retae ess<br>24 rene choi<br>7 - at P<br>|<br>Db ef<br>i)<br>1 def at<br>2 quselCe ae {i ail<br>Mariana Diaz y Kerin Aguilera<br>DWES  UD1 – D2<br>9 if rene!cant iso si ;ual<br>uel it<br><!-- End of picture text -->

|Contenido|
|---|
|**INTRODUCCIÓN**............................................................................................................................................................... 2|
|**REQUISITOS PARA EL DESARROLLO**................................................................................................................... 3|
|_Requisitos de Software y Entorno_........................................................................................................................... 3|
|_Requisitos Técnicos y de Conocimientos_............................................................................................................... 3|
|**COMPATIBILIDAD DE RAILS CON SERVIDORES WEB**................................................................................. 4|
|_Características de Rack_.............................................................................................................................................. 4|
|_¿Qué es el Middleware?_............................................................................................................................................... 4|
|_¿Cómo funciona el Middleware?_.............................................................................................................................. 4|
|**IDES UTILIZADOS PARA EL DESARROLLO CON RUBY ON RAILS**.......................................................... 5|
|**RubyMine**.................................................................................................................................................................. 5|
|**Visual Studio Code**............................................................................................................................................... 6|
|**Sublime Text**........................................................................................................................................................... 6|
|**Vim o Neovim**.......................................................................................................................................................... 6|
|**Emacs**.......................................................................................................................................................................... 6|
|**REQUISITOS PARA LA EJECUCIÓN DE LAS PÁGINAS WEB CON RUBY ON RAILS**.......................... 7|
|**PÁGINAS WEB PÚBLICAS REALIZADAS CON ESA TECNOLOGÍA**............................................................ 8|
|_Shopify_.............................................................................................................................................................................. 8|
|_Cookpad_............................................................................................................................................................................ 8|
|_Github_................................................................................................................................................................................ 8|



# **INTRODUCCIÓN** 

El lenguaje Ruby es un lenguaje de programación interpretado reflexivo y orientado a objetos. Fue presentado en el año 1995, combina una sintaxis inspirada en Python y Perl y su implementación oficial es distribuida bajo una licencia de software libre. Se le suele llamar el lenguaje Feliz 

Es un lenguaje de programación paradigma, su enfoque es la orientación a objetos, pero también es posible con él la programación procedimental, funcional y meta programación. 

Tiene tipado dinámico y es que no hace falta tener que declarar lo que es tipo de variable, parecido a Python. 

Y soporte polimorfismo de tipos. También todas sus variables son objetos. 

Ejemplo 

**5** .class esto devuelve un **Integer** 

Y porque se le suele llamar lenguaje feliz y es que Ruby fue diseñado para ser un lenguaje expresivo, entendible y agradable para el programador. 

Pero es importante que hay que saber que Ruby y Ruby on Rails no son lo mismo. Ruby presta el lenguaje como java y Spring Boot. Ruby on Rails tiene modelos, vistas y controladores 

Lo que hablamos antes de la exprisivera de Ruby ayuda mucho con el desarrollo de páginas webs 

Ejemplo de ellos: 

usuarios.where(active: true) 

"usuarios cuyo estado sea activo" 

en ves de realzar lo que se hara en Querys 

SELECT * 

FROM users 

WHERE active = true; 

Rails incorpora un Actived Record que es un ORM y esto que tuve que buscar su significado es que ORM permite representar los datos de una base de datos en objetos de lenguaje de programación en importante recordar Ruby es un lenguaje compilado que parsea su código en una máquina virtual para ejecutarlo 

# **REQUISITOS PARA EL DESARROLLO** 

Los requisitos principales para comenzar el desarrollo con Ruby on Rails incluyen herramientas de software esenciales, conocimientos técnicos y dependencias del sistema. 

## _Requisitos de Software y Entorno_ 

- Sistema Operativo: Entorno basado en Unix como Linux o macOS (en Windows se recomienda usar WSL / Subsistema de Windows para Linux). 

- Lenguaje Ruby: Tener instalado Ruby (se aconseja usar un gestor de versiones como rbenv o RVM). 

- Framework Ruby on Rails: Instalado a través del sistema de paquetes de Ruby con el comando gem install rails. 

- Gestor de dependencias: Bundler, utilizado para gestionar las gemas (librerías) del proyecto mediante el archivo Gemfile. 

- Base de datos: Un sistema gestor como PostgreSQL (el más recomendado), MySQL o SQLite para desarrollo local. 

- Editor de código: Un entorno de desarrollo moderno como Visual Studio Code o RubyMine. 

- Control de versiones: Git para el control de código fuente. 

## _Requisitos Técnicos y de Conocimientos_ 

- Sintaxis de Ruby: Comprensión sólida de la programación orientada a objetos (OOP) y la sintaxis del lenguaje. 

- • Patrón MVC: Entender la arquitectura Modelo-Vista-Controlador y el diseño RESTful que utiliza Rails. 

- ActiveRecord: Manejo del sistema ORM de Rails para interactuar de forma sencilla con las bases de datos. 

- Tecnologías Web básicas: Conocimientos de HTML, CSS, JavaScript y consultas SQL. 

# **COMPATIBILIDAD DE RAILS CON SERVIDORES WEB** 

Es compatible con servidores tradicionales (son basados en hardware físico) y con servidores modernos (los que utilizan la nube y la virtualización) a través de la interfaz RACK. 

RACK es ubn middelware o una interfaz de programación que actúa como un puente entre las aplicaciones web escritas en Ruby y los servidores web 

## _Características de Rack_ 

**Interfaz unificada:** Rack proporciona una interfaz estándar para manejar solicitudes y respuestas, lo que permite que diferentes frameworks y servidores web trabajen juntos sin problemas. 

**Modularidad:** Gracias a su arquitectura basada en middleware, puedes agregar o quitar funcionalidades de tu aplicación de manera sencilla. 

**Flexibilidad:** Rack es compatible con una amplia variedad de servidores web, lo que te permite elegir el que mejor se adapte a tus necesidades (puma o passenger). 

## _¿Qué es el Middleware?_ 

El middleware en Rack es un componente que se encuentra entre el servidor web y la aplicación. Su función principal es interceptar las solicitudes y respuestas, permitiendo realizar acciones adicionales antes de que lleguen a la aplicación o antes de que se envíen al cliente. Esto puede incluir tareas como la autenticación, el registro de solicitudes, la manipulación de datos, entre otros. 

## _¿Cómo funciona el Middleware?_ 

El middleware en Rack se implementa como una clase que debe responder a un método llamado call. Este método recibe un hash que representa la solicitud y devuelve un array con tres elementos: el código de estado HTTP, los encabezados de la respuesta y el cuerpo de la respuesta. 

# **IDES UTILIZADOS PARA EL DESARROLLO CON RUBY ON RAILS** 

¿Qué es un IDE? Es un Integrated Development Environment es decir Entorno de Desarrollo Integrado. 

Realmente para Rails no exige lo que es un IDE obligatorio, Rails funciona desde la terminal puede funcionar hasta un editor de texto relativamente sencillo. 

Pero para una experiencia completa existe varios IDES: 

1. RubMine 

2. Visual Studio Code 

3. Sublime Text 

4. Vim/Neovim 

5. Emacs 

Hablemos un poco de ellos: 

### **RubyMine** 

es un IDE desarrollado por JetBrains los creadores de IntelliJ para lo que programan en java, PyCharm para Python y otros entornos dedicados, está especializado como su nombre indica en desarrollar en Ruby y Ruby on Rails y es probablemente el ejemplo de IDE especializado en Ruby. 

Y es que tiene herramientas para trabajar en proyectos para Rails algunos de ellos son: 

- Autocompletado de Ruby. 

- Navegación entre clases, métodos y archivos. 

- Refactorización. 

- Depuración. 

- Integración con Rails. 

- Integración con Git. 

- Ejecución de tests. 

- Gestión de bases de datos. 

- Terminal integrada. 

- Análisis del código. 

- Soporte para HTML, CSS y JavaScript. 

Este se centró más porque es su IDE más especializado los otros podemos pasar un poco por encima por ejemplo 

### **Visual Studio Code** 

un editor de código extensible hay una extensión para Ruby que es Ruby LSP que se traduce este acrónimo como Language Server Protocol 

### **Sublime Text** 

es un editor ligero y rápido que permite trabajar con Ruby mediante paquetes y extensiones 

### **Vim o Neovim** 

son editores que funcionan para la terminal y que se puede configurar con plug-ins y la puede personalizar y dejarlo a la altura de un IDE personalizado, lo malo, muy tedioso hacer todo eso. 

### **Emacs** 

igual que Vim o Neovim 

# **REQUISITOS PARA LA EJECUCIÓN DE LAS PÁGINAS WEB CON RUBY ON RAILS** 

La idea importante que hay que tener clara que es Ruby on Rails se ejecuta en servidor no en usuario. 

Es un Framework enfocado en la productividad de los desarrolladores y la entrega rápida de sus productos, cuenta con un modelo-vista-controlador (MVC) que separa los datos, la lógica de negocio y la interfaz de usuario en componentes independientes. 

Permite el uso de los estándares de JSON y XML (para la transferencia de datos y también de HTML, CSS y JS para la interfaz de usuario). 

Lo primero que necesitamos es un entorno capaz de ejecutar Ruby también la versión que tengamos de Ruby debe ser compatible con la versión de Rails y con gems utilizadas por la aplicación. 

Pero ¿Que son las gems? Es un concepto interesante de Ruby las funciones adiciones de Ruby suele distribuirse mediante gems, literal un gems es un paquete de código Ruby utilizable. Entre ellas puma, Active Record, Active Storage. 

Bundler esparcido al properties deSpringboot y es que se encarga de Gestionar las dependencias de Ruby de la aplicación. 

Tenemos tambien Puma la menciónada anteriormente y es que aplicación Rails necesita un componente que pueda recibir peticiones HTTP y entregarselas a Rails y pumas es el que actualmente se utiliza y es que esta pensado para usarse en despliegue de producción y que pueda funcionar en un modo de proceso unico como cluster utilizando muchos procesos. 

Aunque opción muchas aplicaciones webs utiliza bases de datos Rails soportas: 

- postgresSQL 

- MySQL y MariaDB 

- SQLite 

# **PÁGINAS WEB PÚBLICAS REALIZADAS CON ESA TECNOLOGÍA** 

Tenemos varios ejemplos de sitios web que utilizan parte de Rails para sostener servicios o la página web entera. 

## _Shopify_ 

Shopify utiliza Rails como parte central de su plataforma de comercio electrónico. Y es que la escalabilidad de Rails lo hace ser una gran herramienta en el Black Friday 2025 llego a soportar 489 millones de consultas por minutos en el Edge y más de 58 millones de consultas de bases de datos por segundos. 

Así sé que ve Rails soporta un gran ecosisitemas, consultas masivas sin colapsar. 

## _Cookpad_ 

Tecnológica centrada en una plataforma para compartir recetas de cocina creadas por la comunidad. Fundada en Japón, se ha convertido en una de las mayores plataformas de recetas generadas por usuarios, con presencia internacional y servicios dirigidos tanto a cocineros aficionados como a quienes buscan inspiración culinaria. 

Lleva usando Ruby on Rails desde 2007 y actualmente sigue siendo la base de su plataforma, sitio web, herramientas internas y API 

## _Github_ 

Aunque no se puede decir que “GitHub esta hecho con Rails” sino ha utilizado y utiliza Rails, sean en otro tipo de servicios, herramientas o scripts 

