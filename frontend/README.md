# Frontend E-commerce Project

Este es el proyecto frontend de una aplicación de comercio electrónico construida con React y TypeScript.

## Estructura del Proyecto

```
frontend/
├── public/
│   └── index.html          # HTML base de la aplicación
├── src/
│   ├── components/         # Componentes reutilizables
│   │   └── ProductCard.jsx # Componente que muestra la información de un producto
│   ├── pages/              # Páginas de la aplicación
│   │   └── HomePage.jsx    # Vista principal de la aplicación
│   ├── services/           # Servicios para realizar solicitudes HTTP
│   │   └── api.js          # Funciones para realizar solicitudes HTTP utilizando Axios
│   ├── store/              # Estado global de la aplicación
│   │   └── cart.slice.js    # Slice de Redux para manejar el estado del carrito de compras
│   ├── utils/              # Funciones utilitarias
│   │   └── validators.js    # Funciones de validación y helpers
│   ├── App.jsx             # Componente raíz de la aplicación
│   ├── index.jsx           # Punto de entrada de la aplicación React
│   └── tests/              # Pruebas de componentes
├── .env.example             # Ejemplo de variables de entorno
├── package.json             # Configuración de npm y dependencias
├── tsconfig.json           # Configuración de TypeScript
└── README.md               # Documentación del frontend
```

## Instalación

Para instalar las dependencias del proyecto, navega a la carpeta `frontend` y ejecuta:

```
npm install
```

## Scripts

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm test`: Ejecuta las pruebas de la aplicación.

## Contribución

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. Asegúrate de seguir las mejores prácticas de codificación y de incluir pruebas para cualquier nueva funcionalidad.

## Licencia

Este proyecto está bajo la Licencia MIT.