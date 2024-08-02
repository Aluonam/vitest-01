# React + Vite

Una vez realizado el componente:

Paso 1: Planificar las Pruebas
Escenarios de Prueba
Caso de Éxito: La API devuelve datos correctamente, y los datos se muestran en el componente.
Caso de Error: La API devuelve un error, y el componente muestra un mensaje de error.

Paso 2: Configurar el Entorno de Pruebas
Mock de fetch
Antes de escribir las pruebas, es crucial que podamos simular las respuestas de la API. Para esto, usaremos un mock de fetch.

Paso 3: Escribir las Pruebas
Vamos a escribir las pruebas para los escenarios planificados.

src/components/DataFetcher.test.tsx

Mock de fetch: Utilizamos vi.fn() para crear un mock de la función global fetch. Esto nos permite simular diferentes respuestas de la API sin hacer realmente la solicitud.

**Prueba de Caso de éxito**

Configuramos el mock de fetch para devolver una respuesta exitosa.
Usamos *waitFor* para esperar hasta que los datos se rendericen en el DOM.
Verificamos que los elementos esperados estén en el documento.

**Prueba de Caso de Error:**

Configuramos el mock de fetch para simular un error en la respuesta.
Usamos waitFor para esperar hasta que el mensaje de error se muestre en el DOM.
Verificamos que el mensaje de error esperado esté presente.