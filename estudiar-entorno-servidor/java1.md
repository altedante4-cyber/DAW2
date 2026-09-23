## Tecnologías de

## Java para el

## desarrollo web

## en el lado

## servidor

Hilary Galarraga, Natalia Cruz, Yara Bayas y

Rachel Gibert


##### Java Servlet y JSP (Jakarta Server Pages)


##### Lenguaje de programación

```
Java Servlets
```
```
● Java
● HttpServlet
● Peticiones HTTP
● Procesamiento y lógica
```
```
JSP
```
```
● HTML + contenido dinámico
● Expression Language (EL)
● Presentación de información
● Transformación a Servlet
```

##### Requisitos de desarrollo

● JDK

● Java / Jakarta EE

● APIs de Servlets y JSP

● Gestor de dependencias

● jakarta.* / javax.*


##### Requisitos de ejecución

```
● Servidor o contenedor
```

##### Compatibilidad con los servidores web


##### IDEs utilizados


##### Ejemplos de aplicación

```
@WebServlet("/hola")
public class HolaServlet extends HttpServlet {
protected void doGet(HttpServletRequest request,
HttpServletResponse response)
throws IOException {
response.setContentType("text/html");
response.getWriter().println(
"<html>" +
"<body>" +
"<h1>Hola mundo</h1>" +
"</body>" +
"</html>"
);
}
}
```
```
<!DOCTYPE html>
<html>
<head>
<title>Ejemplo JSP</title>
</head>
<body>
<h1>Mi página JSP</h1>
<p>Hola ${nombre}</p>
</body>
</html>
```

##### Páginas web públicas realizadas con esta

### tecnología

Instituto Nacional de la

Seguridad Social de Italia

```
Superintendencia Nacional de Aduanas y de
Administración Tributaria de Perú
```
```
Organización del Fondo de
Previsión de los Empleados
de la India
```

```
Jakarta Server Faces (JSF)
```
● Framework de Jakarta Enterprise Edition para desarrollar interfaces de usuario
web.
● Utiliza un modelo basado en componentes reutilizables.
● Permite crear:
○ Formularios
○ Botones
○ Campos de texto
○ Tablas
○ Mensajes
● Gestiona el estado de la interfaz.
● Permite validar y convertir datos.
● Gestiona eventos y navegación entre páginas.
● Sigue el patrón MVC.


###### Lenguaje de programación

● **Java** → lenguaje principal de Jakarta Faces.
● **Facelets** → creación de las vistas mediante XHTML.
● **HTML y CSS** → estructura y diseño.
● **JavaScript** → funcionalidades adicionales.
● **Expression Language (EL)** → conecta la interfaz con las
clases Java.


###### Requisitos

```
Requisitos para desarrollar: Requisitos para ejecutar:
```
● **JDK 17 o superior**
● **IDE** compatible con Java y Jakarta EE
● **Apache Maven** u otra herramienta de
construcción
● Dependencias de **Jakarta Faces**
● Servidor o **runtime compatible con
Jakarta EE**

```
● Servidor compatible con Jakarta EE
● Java SE 17 o superior para Jakarta Faces 4.
● Las páginas XHTML no se ejecutan directamente en el
navegador.
● El servidor procesa las peticiones y genera el HTML que
recibe el usuario.
```

```
Compatibilidad e IDEs
```
Compatibilidad con servidores Web

Jakarta Faces está pensado para ejecutarse dentro del
ecosistema **Jakarta EE**.

Algunos servidores compatibles:

```
● Eclipse GlassFish
● Payara
● Open Liberty
● WildFly
```
```
Jakarta Faces es el framework ; el servidor
proporciona el entorno necesario para ejecutarlo.
```

###### Ejemplo

```
<h:form>
<h:inputText value="#{usuario.nombre}" />
<h:commandButton
value="Saludar"
action="#{usuario.saludar}" />
</h:form>
```
```
● h:inputText → permite introducir el nombre.
● #{usuario.nombre} → conecta el campo con una propiedad
Java.
● h:commandButton → crea el botón.
● #{usuario.saludar} → ejecuta un método Java al pulsarlo.
```

###### Webs

**OmniFaces Showcase**

```
● Muestra diferentes componentes y funcionalidades de Jakarta Faces.
● Utiliza Mojarra 4.1.5.
```
**Guess Number**

```
● Ejemplo oficial de Jakarta EE.
● Utiliza Jakarta Faces para crear un juego de adivinar un número.
```
**Contratación del Estado (España)**

```
● Portal web de servicios de contratación pública.
● Ha sido identificado como un sitio que utiliza JSF.
```
**Junta de Andalucía**

```
● Portal web de servicios y trámites públicos.
● Algunas de sus aplicaciones han sido identificadas como usuarias de JSF.
```

##### J2EE (Jakarta Enterprise Edition)

**No es un Lenguaje**

Es el estándar completo de Java para desarrollo
web backend.

**Coordinación Multicapa**

Define la interacción entre capa web,
lógica y base de datos.


##### Requisitos para el Desarrollo

**JDK Necesario**

Versiones compatibles: JDK
11, 17 o 21. bien establecidos.

```
Gestor de Proyectos
Apache Maven (pom.xml) o
Gradle (build.gradle).
```
```
Variables de Entorno
Variable JAVA_HOME
configurada hacia el JDK.
```

##### Requisitos para Ejecución

**1. JRE / JDK Runtime**

Entorno de ejecución Java en
el servidor objetivo.

**2. Servidor de Aplicaciones**

```
Contenedor Servlet como Apache
Tomcat o WildFly.
```
**3. Base de Datos RDBMS**

```
MySQL, PostgreSQL o Oracle
gestionados con JPA.
```

##### Compatibilidad con Servidores Web

**Nginx & Apache HTTP**

Compatibilidad directa mediante protocolos
estándar HTTP/HTTPS.

**Proxy Inverso & Seguridad**

Gestión de SSL/TLS, compresión y redirección al
puerto 8080 del backend.


##### IDEs utilizados

```
IntelliJ IDEA
Soporte nativo avanzado y
despliegue directo en
servidores.
```
**Apache NetBeans**

Integración inmediata con
proyectos web Java locales.

```
VS Code
Extensión Java Extension
Pack y utilidades Jakarta.
```
```
Eclipse IDE
Herramienta tradicional
gratuita de código abierto.
```

##### Ejemplo de aplicación


##### Páginas web públicas realizadas con esta

##### tecnología

```
● Sedes Electrónicas de la Agencia Tributaria
```
```
● Grandes Entidades (BBVA, Santander,
CaixaBank)
```
```
● Plataformas de Reservas de vuelo
(Amadeus)
```

##### EJB (Enterprise Java Beans)

Modelo de componentes del lado
servidor
+
Especificación de Jakarta EE
+
Gestiona lógica de negocio, seguridad
y transacciones


##### Requisitos para el Desarrollo Entorno de Software

(^)
**IDE Compatible**^
**Servidor de aplicaciones** (^) **Herramientas
JDK 8 o superior**


##### Requisitos para el Desarrollo Componentes y Código

(^)
**Librerías de la API
+
Anotaciones clave**
(@Stateful, @Stateless o @Singleton)
**+
Empaquetar en archivos .jar o .ear**


##### Requisitos de Ejecución

(^)


##### Compatibilidad con Servidores Web

**No se puede ejecutar en:**

Servidores web básicos o servlets ligeros.

**¿Qué se necesita?**

Servidor de aplicaciones compatible con Jakarta
EE con un contenedor EJB.


#### IDEs utilizados


##### Ejemplos de aplicación

**import jakarta.ejb.Stateful;**

**@Statefu** l //Guarda las interacciones de un usuario.

**public class Pagina {**

```
private int visitas = 0 ;
public int visitasTotales() {
visitas++;
return visitas;
}
```
**}**


##### Ejemplos de aplicación

```
import jakarta.inject.Inject;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
@WebServlet("/contador")
public class ContadorServlet extends HttpServlet {
@Inject
private ContadorBean contador; // Inyecta el EJB
```
```
protected void doGet(HttpServletRequest request,
HttpServletResponse response)
throws IOException {
response.setContentType("text/html");
PrintWriter out = response.getWriter();
int total = contador.visitasTotales();
out.println("<html><body>");
out.println("<h1>Ejemplo sencillo de EJB</h1>");
out.println("<p>Has visitado esta página: <b>" + total
+ "</b> veces.</p>");
out.println("</body></html>");
}
}
```

##### Páginas web públicas realizadas con esta

##### tecnología

```
● Sedes Electrónicas y Administraciones
Públicas (Gobierno de España)
```
```
● Grandes Corporaciones (Staples o
Automatic Data Processing)
```
```
● Plataformas de banca y reserva en línea
(InterContinental Hotels Group)
```

# Fin!
