**Herramientas de Desarrollo Web en Entorno Servidor: C# y .NET**

**Desarrollo Web en entorno servidor**

**AUTORES / EQUIPO**

**Alejandro Crisostomo**

**Julian Alexander Cuevas**

**FECHA / CURSO**

**Curso 2026 - 2027**

image.png

image.png

**ESTRUCTURA DEL TRABAJO**

**Índice de Contenidos**

[**01.**](#slide-3)[**Lenguaje de programación que se usa.**](#slide-3)

[**02.** ](#slide-4)[**Requisitos de desarrollo**](#slide-4)

[**03.** ](#slide-5)[**Requisitos de ejecución de las páginas**](#slide-5)

[**04.** ](#slide-6)[**Compatibilidad con servidores web**](#slide-6)

[**05.**](#slide-7)[**IDEs y herramientas**](#slide-7)

[**06.** ](#slide-8)[**Evolución y Open Source**](#slide-8)

[**07.**](#slide-9)[**Versatilidad del ecosistema**](#slide-9)

[**08.** ](#slide-10)[**Ejemplos de programas o** ](#slide-10)[**páginas**](#slide-10)

[**09.**](#slide-11)[**Casos de éxito y páginas web públicas**](#slide-11)

<a id="slide-3"></a>

image.png

image.png

**PUNTO 01**

**Lenguaje de Programación Utilizado (C#)**

**Características de C#**

*-Lenguaje principal .*

*- Tipado fuerte orientado a objetos.*

*- Sintaxis moderna y seguridad*

*- Forma parte de la plataforma .NET.*

**Framework ASP.NET Core**

- *Multiplataforma de alto rendimiento*
- *Gestiona peticiones y respuestas HTTP*
- *proporciona herramientas para crear APis y páginas web*

<a id="slide-4"></a>

image.png

image.png

image.png

image.png

image.png

image.png

**PUNTO 02**

**Requisitos para el Desarrollo**

**.NET SDK**

- *Desarrollar aplicaciones .NET y* [*ASP.NET*](http://asp.net) *Core.*

- *Su version mas reciente: NET SKD 10.0.401*

- *Herramientas:*

  - *.NET CLI.*
  - *Compilador de C#.*
  - *MSBuild.*
  - *Herramientas de publicación.*

**Sistema Operativo**

- *Multiplataforma.*
- *Compatibilidad con windows, macOS y Linux.*

1. *Windows:*

   - *Visual Studio*
   - *Visual Studio Code*

2. *macOS:*

   - *Visual Studio Code*
   - *Rider*

3. *Linux:*

   - *Visual Studio Code*
   - *Rider*

**Herramientas CLI / Gestores**

- *.NET CLI:*

  - *dotnet new -> crear.*
  - *dotnet build -> compilar.*
  - *dotnet run -> ejecutar.*
  - *dotnet publish ->preparar.*

- *NuGet:*

  - *Permite añadir bibliotecas y dependencias.*
  - *Facil instalacion y actualizacion de paquetes.*
  - *Integra con proyectos* [*ASP.NET*](http://asp.net) *Core.*

<a id="slide-5"></a>

image.png

**PUNTO 03**

**Requisitos para la Ejecución**

**Entorno de Runtime (.NET Runtime)**

- *Servidor:*

  - *Ejecutar aplicacion* [*ASP.NET*](http://asp.net) *core.*
  - *Pagina/aplicación preparada para ejecutarse.*
  - *Lestrel, IIS, Nginx o Apache.*
  - *Windows, Linux o macOS.*

- *Usuario:*

  - *Chrome, Edge, Firefox.*
  - *Conexion al servidor .*

**💡 Dato clave para la presentación:**

- *AOT: compila la aplicación a codigo antes de ejecutarla.*
- *Docker: permite empaquetar con lo necesario para ejecutarla en un contenedor.*

<a id="slide-6"></a>

image.png

image.png

image.png

image.png

**PUNTO 04**

**Compatibilidad con Servidores Web**

**Kestrel Web Server**

- *Servidor HTTP integrado.*
- *Multiplataforma y de alto rendimiento.*

**Nginx / Apache**

- *Proxy inverso.*
- *Habitual en servidores Linux.*

**IIS (Internet Information Services)**

- *Microsoft.*
- *Intermediario entre Internet y kestrel.*

**Docker & Contenedores Nube**

- *Puede ejecutar contenedores Docker.*
- *Pueden gestionarse con kubernetes.*

<a id="slide-7"></a>

image.png

image.png

image.png

image.png

image.png

image.png

**PUNTO 05**

**IDEs y Entornos de Desarrollo**

**Visual Studio**

- *Entorno de desarrollo insignia de microsoft , ofreciendo una experiencia mas completa y optimizada para programar en C# , a diferencia de VS Code esta pensada para construir , depurar y desplegar aplicaciones de cualquier escala*

*Funciones avanzadas:*

1. *IntelliCode & IA integrada*
2. *Depuracion avanzada*
3. *Refactorizacion y analisis estatico con Roslyn*
4. *Hot Reload*
5. *Pruebas unitarias y Live Unit Testing*
6. *Diseñadores visuales y herramientas de arquitectura*

**JetBrains Rider**

- *IDE multiplataforma rápido, potente y enfocado en la productividad, desarrollado sobre el motor del famoso analizador de código ReSharper y la plataforma IntelliJ*

*Funciones avanzadas:*

1. *Análisis estático en tiempo real con ReSharper*
2. *Refactorizaciones globales ultra-precisas*
3. *Motor de búsqueda y navegación instantánea*
4. *Soporte de primera clase para Unity y Unreal*
5. *Depuración avanzada y descompilación integrada*
6. *Herramientas de diagnóstico de memoria y rendimiento*

**VS Code + C# Dev Kit**

*Solución más ligera modular y multiplataforma para desarrolladores en busca de velocidad y menores consumos de recurso en un entorno más personalizable. Lo que lo convierte en completo mediante el uso de una arquitectura LSP (Lenguage server Protocol) y compilado con el motor de Visual Studio*

*Funciones avanzadas:*

1. *Explorador de Soluciones (.NET Solution Explorer)*
2. *IntelliCode impulsado por IA*
3. *Depuración avanzada y pruebas con Test Explorer*
4. *Soporte nativo para proyectos multi-proyecto y Roslyn*
5. *Integración nativa con Azure y Docker*
6. *Rendimiento ligero y multiplataforma*

<a id="slide-8"></a>

image.png

image.png

**PUNTO 06**

**Evolución: De .NET Framework a Open Source**

**ETAPA 1**

**ETAPA 2**

**ACTUALIDAD**

**.NET Framework**

*La primera era de la plataforma, iniciada con el lanzamiento de .NET Framework 1.0 en 2002 por parte de Microsoft, se caracterizó por ser un ecosistema cerrado y fuertemente ligado al sistema operativo Windows*

- *Código fuente propietario y cerrado*
- *Dependencia absoluta de Windows*
- *Modelo de distribución acoplado al S.O*
- *Ecosistema centralizado*

**.NET Core**

*La llegada de .NET Core en 2016 supuso el mayor punto de inflexión en la historia de Microsoft respecto a sus tecnologías de desarrollo, reescribiendo la plataforma desde cero para adaptarla al desarrollo web moderno.*

- *Apertura del código fuente (Open Source) y gobernanza*
- *Soporte multiplataforma nativo (Linux y macOS)*
- *Rediseño modular e independiente*
- *Servidores web ligeros y rendimiento de alto nivel*
- *Optimizado para contenedores y la Nube (Docker & Cloud-Native)*

**.NET Unificado (.NET 8/9)**

*Pasadas estas dos epocas se consiguio una convergencia total de este ecosistema eliminando distincion entre ramas antiguas y modernas consolidandose como una unica plataforma unificada , rapida y con capacidad para construir todo tipo de aplicaciones*

- *Unificación total del ecosistema*
- *Rendimiento de vanguardia (High-Performance)*
- *Compilación AOT Nativa (Native Ahead-Of-Time)*
- *Ciclo de lanzamientos predecible y soporte LTS*
- *Desarrollo Cloud-Native e integración moderna*

<a id="slide-9"></a>

image.png

**PUNTO 07**

**Versatilidad y Alcance del Ecosistema**

**ASP.NET Web APIs**

*Es un framework de .NET diseñado para construir servicios HTTP RESTful que sirven de backend a cualquier cliente.*

**Blazor**

*Permite construir interfaces de usuario interactivas utilizando C# y sustituyendo a  HTML  , JavaScript.*

**.NET MAUI**

*Es el framework multiplataforma de Microsoft para construir aplicaciones nativas para iOS, Android, macOS y Windows desde una única base de código*

**Unity Engine**

*Sirve para la creacion de videojuegos lider en la industria que utiliza C# para crear programacion de videojuegos en 2D , 3D , VR y AR*

<a id="slide-10"></a>

**PUNTO 08**

**Ejemplos de Código y Estructura**

var builder = WebApplication.CreateBuilder(args);

var app = builder.Build();

app.MapGet("/api/datos", () => new { Mensaje = "Servidor funcionando" });

app.Run();

**Minimal APIs / Estructura**

*La variable builder inicializa un constructor preparando la configuracion de la aplicacion web (variables de entorno , servicios y dependencias )*

*La variable app construye la instancia*

*app.mapGet define un endpoint HTTP de tipo get en la ruta /api/datos para que cuando un cliente haga una peticion a esa ruta la api responde con un objeto JSON contiendo un {“mensaje” : “servidor encontrado” }*

*app.run(): inicia la aplicaion y empieza a escuchar peticiones http en el puerto configurado*

// Ejemplo de código C#

<a id="slide-11"></a>

**PUNTO 09**

**Páginas Web Públicas**

[**Stack Overflow**](https://stackoverflow.com/questions)

*Esta hecha para preguntas y respuestas de los programadores mas grandes del mundo procesando un gran volumen de trafico con servidores muy eficientes*

[**Microsoft.com**](http://microsoft.com)

*Pagina oficial del creador de C# y .NET incluyendo servicios en la nube , tiendas y documentacion comercial*

[**MarketWatch**](http://marketwatch)

*Un portal de noticias financieras y de bolsa de valores de gran tráfico*

[**GoDaddy**](https://www.godaddy.com/es-es/offers/godaddy?isc=sem3year&countryview=1&currencyType=EUR&cdtl=c_17614377586.g_188509398713.k_kwd-88659201.a_779383514871.d_c.ctv_g&bnb=b&gad_source=1&gad_campaignid=17614377586&gclid=CjwKCAjwwrPVBhA1EiwAv_YO-YntdSxnq8PBRIw1m1f71kcyNQGwkyD-w9otrCMlqdtYhqRTeg3w2RoCQxwQAvD_BwE)

*Registradores de dominios y proveedores de alojamientos web mas grandes en gran parte de su arquitectura e interfaz publica para gestionar usuarios y dominios*

image.png

image.png

**Conclusiones y Preguntas**

**¡MUCHAS GRACIAS POR SU ATENCIÓN!**