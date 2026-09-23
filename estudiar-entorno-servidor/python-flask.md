Tomas Galdeano Williams 

# Flask 

## **1. Lenguaje:** 

Python. Basado en Werkzeug (WSGI) y Jinja2 (plantillas). 

## **2. Requisitos para el desarrollo:** 

Python 3.9+, Flask entorno virtual (venv), conocimientos de HTML/CSS/python,  y opcionalmente extensiones como SQLAlchemy o Flask-Login. 

## **3. Requisitos para la ejecución:** 

Python instalado en el servidor, dependencias del proyecto, un servidor WSGI de producción (Gunicorn o uWSGI), ya que el servidor integrado de Flask no sirve para producción, y bases de datos si la app almacena datos. 

## **4. Compatibilidad con servidores web:** 

Al usar el estándar WSGI, funciona con cualquier servidor compatible. 

   - Configuraciones típicas: Nginx + Gunicorn, Apache + mod_wsgi 

   - Despliegue en la nube (AWS, Google Cloud, Azure, PythonAnywhere) 

   - Contenedores Docker. 

**5. IDEs:** Visual Studio Code,  PyCharm. 

## **6. Ejemplos de páginas o programas:** 

blogs personales, APIs REST, sitios de pequeñas empresas, demos de machine learning, paneles de administración y proyectos educativos. 

He creado páginas web que están accesibles en internet con Flask alojadas en pythonanywhere. por ejemplo tomgaldeano.com y <u>www.breadtombakery.com ambas</u> estan en proceso de mejora ahora mismo 

## **7. Páginas públicas hechas con Flask:** 

Netflix, Pinterest, Reddit, LinkedIn, Lyft y Mozilla usan Flask en parte de su infraestructura. 

Tomas Galdeano Williams 

## **8. funcionamiento:** 

Funciona con carpetas predefinidas donde albergar plantillas y elementos de estilo y contenido no html. Los controladores de las páginas web son funciones de python decoradas y una función que controla la operatividad de la página creada generalmente al inicio de la página 

