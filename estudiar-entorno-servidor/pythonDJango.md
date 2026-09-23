# **Desarrollo Web en Entorno Servidor con Django** 

**¿Qué es Django?** Es un _framework_ (entorno de trabajo) de Python que permite construir aplicaciones web de forma rápida y segura. Destaca por traer herramientas listas para usar (conexión a bases de datos, panel de administración, seguridad) para que no tengas que programar todo desde cero. 

**¿Para qué se usa habitualmente?** Para construir el **backend** (la lógica del servidor) de aplicaciones complejas, seguras o que manejan grandes volúmenes de datos. Sus usos más típicos son: 

- **Redes sociales** (como Instagram). 

- **Portales de contenido** y noticias. 

- **Tiendas online** (e-commerce). 

- **Sistemas de gestión interna** (CRMs o paneles de administración para empresas). 

## **Lenguaje de programación que se usa** 

Django está escrito íntegramente en **Python** . 

- Es un lenguaje de alto nivel, de propósito general y fuertemente orientado a objetos. 

- Destaca por su sintaxis limpia y legible, lo que acelera el desarrollo. 

- Se basa en la filosofía "Batteries Included" (pilas incluidas), ofreciendo una biblioteca estándar muy extensa que Django amplía para el desarrollo web (ORM, autenticación, panel de administración integrado). 

## **Requisitos para el desarrollo** 

Para comenzar a programar con Django en un entorno local, el equipo de desarrollo necesita: 

- **Intérprete de Python:** Descargado e instalado en el sistema operativo (Windows, macOS o Linux). 

- **Gestor de paquetes (pip):** Para descargar dependencias. 

- **Entorno virtual (venv o virtualenv):** Práctica recomendada para aislar las dependencias del proyecto y no interferir con otros proyectos del sistema. 

- **Instalación del framework:** Ejecutando pip install django dentro del entorno virtual. 

- **Base de datos local:** Por defecto, Django configura y utiliza **SQLite** , que no requiere instalación de servidor adicional y guarda los datos en un simple archivo local, aunque se puede configurar fácilmente con MySQL o PostgreSQL. 



<!-- Start of picture text -->
“Using cached mysqlclient-2.3,0.tar.gz (102 KB)<br>DownLoading django-6.1.1-py3-none-any wht (8.MB)<br><!-- End of picture text -->

## **Requisitos para la ejecución de las páginas (Producción)** 

Para que la aplicación Django esté disponible públicamente y sea capaz de manejar tráfico real, los requisitos cambian: 

- **Servidor de aplicaciones (WSGI / ASGI):** Django no expone sus páginas directamente al exterior. Necesita un servidor que traduzca las peticiones web a código Python. Los más habituales son **Gunicorn** o **uWSGI** . 

- **Base de datos robusta:** SQLite no es adecuado para producción. Se requiere un motor de base de datos completo y en ejecución, como **PostgreSQL** (el más recomendado para Django), **MySQL** o MariaDB. 

- **Gestión de archivos estáticos:** Un sistema para servir imágenes, CSS y JavaScript (generalmente gestionado a través de utilidades como _WhiteNoise_ o directamente desde el servidor web frontal). Es un software o servicio diseñado específicamente para almacenar y entregar a los usuarios archivos que no cambian en tiempo de ejecución. 

## **Compatibilidad con servidores web** 

Django es altamente compatible con los servidores web de producción más populares de la industria. Su arquitectura se basa en colocar el servidor web como un "proxy inverso" que recibe las peticiones y las reenvía al servidor WSGI (Gunicorn). 

- **Nginx:** Es la opción más popular y recomendada para aplicaciones Django por su alto rendimiento sirviendo archivos estáticos y gestionando múltiples conexiones. 

- **Apache HTTP Server:** Totalmente compatible utilizando el módulo mod_wsgi , que permite ejecutar código Python directamente dentro de Apache. 

## **IDEs usados para el desarrollo** 

Cualquier editor de texto sirve, pero para maximizar la productividad y aprovechar el autocompletado, la depuración y la integración con entornos virtuales, los más utilizados son: 

- **Visual Studio Code (VS Code):** Muy ligero y gratuito. Mediante extensiones oficiales de Python y Django, ofrece una experiencia completa. 

- **PyCharm (Professional / Community):** El IDE por excelencia para Python. Su versión Professional incluye soporte nativo y herramientas específicas muy avanzadas para Django. 

- **IntelliJ IDEA:** Con el plugin de Python instalado, ofrece capacidades similares a PyCharm. 

En funcionamiento: 

(venv) B k $ python manage.py runserver Watching for file changes with StatReloader Performing system checks... System check identified no issues (® silenced). September 21, 2026 - 01:05:23 Django version 5.1.15, using settings 'proyecto.settings' Starting development server at http://127.0.0.1:8000/ Quit the server with CONTROL-C. [21/Sep/2026 01:05:26] "GET / HTTP/1.1" 200 35 

€ © 127.2001:8000 88 | He Bookmarks £0 Matches -Leetif Float - Buy& Sell... J Portal Ciudadsno )Miscursos| AulaVic. WB CSRoi C) GitHub ll Becasy ayude: 

### Mis Tareas 

