# Star Wars App 🚀

Una aplicación web interactiva que te permite explorar el universo de Star Wars, específicamente enfocada en las naves espaciales de la saga.

## Características ✨

- 🎬 Animación de introducción estilo Star Wars
- 🚀 Lista completa de naves espaciales
- 🔍 Detalles detallados de cada nave
- 🎨 Diseño moderno y responsivo
- 🌙 Tema oscuro inspirado en Star Wars

## Tecnologías Utilizadas 🛠

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- Redux Toolkit
- Firebase
- Vitest (Testing)

## Requisitos Previos 📋

- Node.js (versión 18 o superior)
- npm o yarn
- Cuenta de Firebase

## Variables de Entorno 🔑

Para que la aplicación funcione correctamente, necesitas configurar las siguientes variables de entorno. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_auth_domain
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_messaging_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

Puedes obtener estas credenciales desde la consola de Firebase:
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/)
2. Selecciona tu proyecto
3. Ve a Configuración del Proyecto (⚙️)
4. En la sección "Tus apps", selecciona la app web
5. Copia las credenciales de configuración

## Instalación 🚀

1. Clona el repositorio:
```bash
git clone https://github.com/DaniloEspinosa/s7.starwars-react.git
```

2. Navega al directorio del proyecto:
```bash
cd s7-star-wars-react
```

3. Instala las dependencias:
```bash
npm install
```

4. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Copia las variables de entorno necesarias (ver sección anterior)

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Scripts Disponibles 📜

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción
- `npm test` - Ejecuta los tests
- `npm run lint` - Ejecuta el linter

## Estructura del Proyecto 📁

```
src/
├── presentation/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   └── styles/        # Estilos CSS
├── domain/            # Lógica de negocio
├── infrastructure/    # Servicios y APIs
└── test/             # Configuración de tests
```

## Testing 🧪

El proyecto utiliza Vitest para testing. Los tests cubren:
- Componentes UI
- Navegación
- Lógica de negocio
- Integración con APIs

Para ejecutar los tests:
```bash
npm test
```

## Contribución 🤝

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia 📄

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE.md](LICENSE.md) para más detalles.

## Contacto 📧

Danilo Espinosa - danilopespinosa@gmail.com

Link del proyecto: [https://github.com/DaniloEspinosa/s7.starwars-react.git](https://github.com/DaniloEspinosa/s7.starwars-react.git)