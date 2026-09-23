



<!-- Start of picture text -->
@ FastAPI<br><!-- End of picture text -->

# **Investigación sobre herramientas de desarrollo web en entorno servidor** 

CARLOS MARTÍN CODINA 2º DAW 

Para esta tarea se ha elegido FastAPI, que es un framework de Python. 

¿Qué es FastAPI? 

- Es un framework de Python que sirve principalmente para crear APIs y aplicaciones web. 

- Está basado en Starlette (kit de herramientas, diseñado para construir servicios y aplicaciones web asíncronas) y Pydantic (librería de validación de datos) 

- Genera documentación automática. 

Requisitos para el desarrollo y ejecución de las páginas web: 

- Se requiere Python 3.8 o superior. 

- Tener instalado FastAPI (obviamente) 

- Un entorno virtual de Python 

- Uvicorn, que actúa como un servidor ASGI (Asynchronous Server Gateway Interface), que permite ejecutar aplicaciones FastAPI y recibir peticiones HTTP 

- Editor o IDE 

Se instala poniendo en la terminal del entorno **pip install "fastapi[standard]"** . 

La app se ejecuta poniendo en la terminal del entorno uvicorn main:app --reload y luego en local escucha desde el puerto 8000 

Compatibilidad con los servidores web 

FastAPI utiliza el estándar ASGI, por lo que necesita un servidor compatible como Uvicorn. Puede ejecutarse detrás de los servidores web de Nginx o Apache y es compatible con Docker y los servicios de alojamiento en la nube. Funciona en Windows, macOS y Linux. 

### ¿Qué IDEs se usan con FastAPI? 

Se usa Visual Studio Code, ya que es ligero y con muy buen soporte para Python y también se usa PyCharm por su entorno profesional. 

Ejemplos de páginas o programas realizados con FastAPI 

Se utiliza principalmente para crear APIs y aplicaciones web. Algunos ejemplos son: 

- APIs REST para aplicaciones móviles o páginas web (REST es el conjunto de reglas/conceptos para diseñar APIs utilizando HTTP (GET,POST,PUT,DELETE) 

- Sistemas de gestión de usuarios, productos o pedidos. 

- Aplicaciones web con HTML, CSS y JavaScript 

- Servicios de IA y machine learning que ofrecen modelos mediante una API. 

- Backends para apps que necesitan comunicarse con una base de datos. 

Algunos ejemplos reales que usan FastAPI son Netflix, para proyectos relacionados con sus servicios internos, también Uber para proyectos de machine learning como servicios para realizar predicciones. 

CARLOS MARTÍN CODINA 2º DAW 

## **Diferencias de otros frameworks** 

FastAPI está pensado para realizar el backend y las APIs de forma rápida con validación de datos y documentación automática, mientras otros como Flask son más minimalistas y tu puedes elegir que tipo de componentes quieres, Django es mucho más completo ya que proporciona muchas cosas ya preparadas como administración, autenticación y estructura del proyecto. Saliendo de Python, frameworks como <u>Node.js permiten crear servidores y</u> APIs utilizando JavaScript, una opción buena cuando se quiere utilizar JavaScript tanto en Frontend como en Backend. 

## **Prueba de Concepto** 

Hemos definido el siguiente código en main.py 



<!-- Start of picture text -->
fastapi FastAPL<br>tener_usvario(nombre<br>nombre,<br>tener_hoLaquetal()<br>nain()<br><!-- End of picture text -->

Vemos que se ejecuta correctamente y atiende a las peticiones: 



<!-- Start of picture text -->
INFO 127.0.0.1:51599 - "GET /usvario/Carlos HTTP/1.1" 200 OK<br><!-- End of picture text -->



<!-- Start of picture text -->
@ 127.0.0.1:8000 x +<br>< © Q @ 127.0.0.1:8000<br>88 WhatsApp XX Home/X » YouTube > Google Gemini<br>Dar formato al texto<br>K"mensaje":"API funcionando correctamente”<br><!-- End of picture text -->

CARLOS MARTÍN CODINA 2º DAW 

