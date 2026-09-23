**_Álvaro González, Sara Liñán y Eva Del Barco_** 

# INVESTIGACION SOBRE HERRAMIENTAS DE DESARROLLO WEB 

GENERADORES DE PAGINAS ESTATICAS 

Geb 

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

## <mark>INVESTIGACIÓN SOBRE HERRAMIENTAS DE DESARROLLO WEB EN ENTORNO SERVIDOR</mark> 

### <u>GENERADORES DE PÁGINAS ESTÁTICAS A PARTIR DE PLANTILLAS</u> 

¿QUÉ SON? 

Los **generadores de páginas estáticas a partir de plantillas** son herramientas utilizadas para **crear sitios web de forma automática** a partir de diferentes elementos, como **contenido** , **plantillas** , **estilos** y **archivos de configuración** . 



<!-- Start of picture text -->
WEBS ESTATICAS<br><!-- End of picture text -->



<!-- Start of picture text -->
fam]<br>——4<br>WEBS DINAMICAS<br><!-- End of picture text -->

A diferencia de una **aplicación web dinámica tradicional** , donde el servidor puede generar una página cada vez que un usuario la solicita, un generador de sitios estáticos **crea las páginas HTML previamente** . El resultado final está 

formado principalmente por archivos **HTML** , **CSS** , **JavaScript** , **imágenes** y **otros recursos** . 

- =~\7 Ejemplospaginaszoe de generadoresestaticasyar de +N= 

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

### LENGUAJE DE PROGRAMACIÓN QUE SE USA 

En los **Generadores de páginas web Estáticas (SSG)** no existe un único lenguaje de programación. El lenguaje depende del generador utilizado. 

- **Lenguaje del motor:** cada generador está desarrollado en un lenguaje diferente. Por ejemplo, **Jekyll utiliza Ruby** , **Hugo utiliza Go** , **Eleventy utiliza JavaScript/Node.js** y **Pelican utiliza Python** . 

- **Lenguajes de plantillas:** permiten crear plantillas reutilizables para las páginas. Algunos ejemplos son **Liquid** en Jekyll y **Nunjucks** en Eleventy. 

- **Formatos de contenido:** normalmente se utiliza **Markdown** , aunque también pueden utilizarse HTML y otros formatos. 

- **Frontend:** las páginas generadas utilizan las tecnologías habituales de la web: **HTML, CSS y JavaScript** . 



<!-- Start of picture text -->
DE SITIOS ESTATICOS<br>oe \Vae NUXT Ga {~*~<br>JavaScript tei a Rus!<br><!-- End of picture text -->

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

### REQUISITOS PARA EL DESARROLLO 

Para construir sitios web con **generadores de páginas estáticas (SSG)** , el entorno local de desarrollo requiere las siguientes herramientas y componentes: 

- **Contenido estructurado:** Archivos de contenido en formatos como **Markdown** , **YAML** o **JSON** , que permiten organizar la información de la página. 

- **Motor de plantillas:** Sistema que permite crear estructuras reutilizables, como **cabeceras, menús y pies de página** , sin tener que repetir el mismo código. 

- **Entorno de ejecución:** Instalación de las herramientas necesarias para utilizar el generador, como **Node.js, Ruby o Go** , dependiendo del SSG utilizado. 

- **Gestor de paquetes:** Herramientas como **npm, pnpm, yarn o gem** para instalar y gestionar las librerías y dependencias necesarias para el proyecto. 

- **Control de versiones:** Uso de **Git** para guardar y controlar los cambios realizados en el código y en el contenido del proyecto. 

- **Editor de código:** Un programa como **Visual Studio Code** para crear y modificar los archivos del proyecto. 

- **Dependencias y plugins:** Instalación de las **librerías, temas o plugins** necesarios para añadir funcionalidades al generador de páginas estáticas. 

- **Alojamiento estático:** Uso de un servidor web o servicios como **GitHub Pages** para publicar las páginas estáticas generadas. 



<!-- Start of picture text -->
REQUISITOS PARA EL DESARROLLO<br>DE SITIOS WEB ESTATICOS LE<br>o c Og Ps 9, o<br>i : Ee<br>ee iz &, $f =<br>CONTENIDO MOTORDE ENTORNODE GESTORDE CONTROLDE  EDITORDE  ALOJAMIENTO<br>ESTRUCTURADO PLANTILLAS EJECUCION PAQUETES VERSIONS ~——«CODIGO ESTATICO<br>iSS<br><!-- End of picture text -->

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

### REQUISITOS PARA LA EJECUCIÓN 

Una vez compilado el sitio web, los requerimientos para su puesta en marcha y visualización en producción son mínimos y altamente eficientes: 

- **Servidor básico:** No requiere motores de ejecución dinámicos en producción, como **PHP** o **Node.js** , ni bases de datos para mostrar el contenido de las páginas. 

- **Consumo reducido:** El consumo de memoria **RAM** y **CPU** suele ser reducido, ya que el servidor principalmente se encarga de entregar archivos estáticos como **HTML** , **CSS** , **JavaScript** e **imágenes** . 

- **Alojamiento estático:** Las páginas generadas pueden alojarse en un servidor web básico o en plataformas de alojamiento estático como **GitHub Pages** , **Netlify** o **Vercel** . 

- **Navegador web del cliente:** El usuario solo necesita un navegador web para acceder al sitio y visualizar las páginas generadas. Si la página utiliza JavaScript, el navegador también se encarga de ejecutar la lógica necesaria. 

- **Seguridad:** Al no necesitar bases de datos ni procesos dinámicos en el servidor para generar las páginas, se reduce la superficie de ataque y determinados riesgos, como las **inyecciones SQL** . 

Accesoa la(s) pagina(s) web 

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

### COMPATIBILIDAD CON SERVIDORES WEB 



Uno de los ejemplos más conocidos es **Jekyll** , que permite crear sitios web a partir de contenido, plantillas y archivos de configuración. Transforma estos elementos 

en archivos estáticos, principalmente **HTML** , **CSS** , **JavaScript** e **imágenes** , que posteriormente pueden ser publicados en un servidor web. 

Una de las principales características de este tipo de herramientas es que **el servidor web no necesita ejecutar Jekyll cada vez que un usuario visita la página** . El sitio se genera previamente y el resultado final son archivos estáticos que el servidor simplemente entrega al navegador. 

La **compatibilidad** se debe a que **Jekyll** realiza el proceso de generación antes de que la página sea publicada. Una vez terminado este proceso, se obtienen archivos estáticos que no necesitan que el servidor ejecute **Ruby** , **Jekyll** u **otro lenguaje de programación** para mostrarlos. 

Por ejemplo, si **Jekyll** genera un archivo _index.html_ , un servidor como **Apache** o **Nginx** simplemente recibe la petición del usuario y devuelve ese archivo al navegador. 

El proceso se puede representar de la siguiente manera: 



<!-- Start of picture text -->
N [#)IN +<br>HTML I css<br>Contenido (yPlantillasconfiguracién)<br>HTML Ca)css (ic)[4s [earec! artsHTML, CSS, JS...<br>Servidor web<br>(Apache, Nginx, IIS, etc.)<br>=<br>Van Navegador<br>7 “N<br><!-- End of picture text -->

**_Álvaro González, Sara Liñán y Eva Del Barco_** 







Entre los servidores web compatibles se encuentran **Apache, Nginx y Microsoft IIS** . Además, este tipo de sitios puede publicarse en plataformas de alojamiento de páginas estáticas como **GitHub Pages, Netlify o Vercel** . 



<!-- Start of picture text -->
AVercel<br><!-- End of picture text -->



<!-- Start of picture text -->
C)<br>GitHub Pages<br><!-- End of picture text -->



<!-- Start of picture text -->
—netlify—clo<br><!-- End of picture text -->

IDES USADOS PARA EL DESARROLLO CON LA TECNOLOGÍA ELEGIDA 

Los **Generadores de Sitios Estáticos (SSG)** no requieren un IDE específico. Se pueden desarrollar utilizando diferentes editores de código y entornos de desarrollo: 

- **Visual Studio Code (VS Code):** es una de las opciones más utilizadas. Permite trabajar con HTML, CSS, JavaScript, Markdown y diferentes lenguajes de programación. Además, incluye terminal integrada y herramientas para Git. 

- **WebStorm:** IDE de JetBrains orientado principalmente al desarrollo web y especialmente adecuado para tecnologías basadas en JavaScript 

- **Sublime Text:** editor de código ligero que permite trabajar con los diferentes archivos de un proyecto SSG 

- **Otros IDEs y editores:** también pueden utilizarse IntelliJ IDEA, Vim, Neovim, etc., dependiendo del generador y del lenguaje utilizado 

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

##### **Ejemplo: Sublime Text** 



<!-- Start of picture text -->
= Sublime Test<br>FOLDER 4h casettce<br>cammites * data, rer, * dst,<br>base64 charset variant<br>RiL_SAFE_CHARSET<br>hairs dst[dst_idx + @] = charset[(s@ & @xfc) >> 2];<br>WORKSPACE<br>qlte dst[dst_idxt+] = charset{(s@ & oxfc) :<br>shell dst[dst_idxt+](sre_idx + 2 =< charset{((s@(len) & (s2 & >> 4)]5<br>dst[dst_idx) = ‘amm';<br><!-- End of picture text -->

### EJEMPLOS DE CÓMO SON LAS PÁGINAS O PROGRAMAS 

Para mostrar de forma práctica el funcionamiento de un Generador de Sitios Estáticos, hemos realizado un ejemplo utilizando **Jekyll** , creando 

una página web para una cafetería ficticia llamada **Café Aurora** 

En la primera captura se muestra el **código utilizado para crear la página** 

#### **web** 

index 

capture de pantalla 

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

En la segunda captura se muestra el **resultado final de la página web en el navegador Firefox** . 



<!-- Start of picture text -->
e>6 © intp1/127002:4000 ony Leven © 4 =<br>Café Aurora<br>Un rincén para disfrutar Q<br>Bienvenidos a Café Aurora @<br>Disfruta de nuestros cafés y productos artesanales.<br>Nuestra carta<br>+ © Espresso<br>+ © Capuchin<br>* % Chocolate caliente<br>* © Croissant<br>Horario<br>Lunes<br>a viernes: 08:00 - 20:00<br><!-- End of picture text -->

PÁGINAS WEB PÚBLICAS REALIZADAS CON ESA TECNOLOGÍA 

**Jekyll** no se utiliza únicamente para **crear blogs o páginas personales** . También se utiliza en **sitios web públicos de empresas, proyectos tecnológicos, documentación y organismos públicos** . La propia página oficial de **Jekyll** dispone de un apartado llamado **Showcase** , donde recoge diferentes páginas web creadas utilizando esta tecnología. 



<!-- Start of picture text -->
= eas Tablade ejemplos° ~<<br>7 \ 3 Paginas web publicas realizadas con Jekyll “s<br>(:23) Pagina web r Tipo de pagina Pe] Uso de Jekyll<br>MaisPm Ruby .creeails, cmb  tecnoldgicoProyecto Ei webGeneracién oficial del sitio<br>Spotify for <I> Documentacién e@e = Portal para<br>Developers técnica (@)  desarrolladores<br>TwitchDocumentati Devel o pern =) técnicaDocumentacién || Guipar a sdesarrolladores y recursos<br>dispositivos<br>\\ Netflix Devices CI Sitio tecnolégico @ Iniauisaoe sae<br>:<br>és ] Lo gin .g}.gov it ServicioipublicaRASS f=) SitioFae web estatico<br><!-- End of picture text -->

**_Álvaro González, Sara Liñán y Eva Del Barco_** 

Todos estos ejemplos aparecen en el **showcase oficial de Jekyll** , que recoge sitios web públicos realizados con esta tecnología. 

Estos ejemplos permiten observar que **Jekyll** puede utilizarse en diferentes tipos de proyectos: **páginas corporativas, documentación técnica, sitios tecnológicos y servicios públicos** . Por tanto, su uso no está limitado a blogs o páginas personales. 

### CONCLUSIÓN 



<!-- Start of picture text -->
==<br>-<br>| ORES.<br>C) Hugo<br>|<br>A Pelican<br><!-- End of picture text -->

**Los generadores de páginas estáticas** , como **Jekyll** , permiten **crear sitios web de forma sencilla y organizada** a partir de contenido, plantillas y archivos de configuración. Una vez generadas las páginas, estas pueden ser **publicadas en diferentes servidores web y plataformas sin necesidad de utilizar procesos dinámicos** . 

A lo largo del trabajo hemos visto los **lenguajes** y **herramientas** que pueden utilizarse, los requisitos necesarios para desarrollar y ejecutar estos proyectos y algunos ejemplos prácticos y reales. También hemos comprobado que esta tecnología puede utilizarse en diferentes tipos de páginas, desde **proyectos tecnológicos y documentación hasta sitios web públicos** . 

En conclusión, los **generadores de sitios estáticos** son una alternativa eficiente para **crear y publicar páginas web** , especialmente cuando no se necesitan funcionalidades dinámicas complejas. 

