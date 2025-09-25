# 🚀 Wake App Mobile

[![Ionic](https://img.shields.io/badge/Ionic-%E2%89%A58.0.0-3880FF?logo=ionic&logoColor=white)](https://ionicframework.com/)
[![Angular](https://img.shields.io/badge/Angular-%E2%89%A520.0.0-DD0031?logo=angular&logoColor=white)](https://angular.io/)
[![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A514.0.0-339933?logo=node.js&logoColor=white)](https://nodejs.org/)


Aplicación móvil desarrollada con Ionic y Angular para el seguimiento de hábitos de sueño y despertar.

## Tecnologías Utilizadas

- **Ionic Framework**: ^8.0.0 [Instalar Ionic CLI:](https://ionicframework.com/docs/intro/cli)
```bash
npm install -g @ionic/cli
```
- **Angular**: ^20.0.0 [Instalar Angular CLI:](https://angular.io/cli)
```bash
npm install -g @angular/cli
```
- **Capacitor**: 7.4.3
```bash
npm install -g @capacitor/cli
```
- **TypeScript**: ^5.9.2
```bash
npm install -g typescript
```
- **RxJS**: ~7.8.0
```bash
npm install -g rxjs
```

## Instrucciones de Instalación y Ejecución

### Importante: Esta aplicación puede ser visualizada en versión móvil o web. Sin embargo, fue pensada y diseñada para que sea vista en un dispositivo móvil, por lo que se recomienda visualizarla con las dimensiones de un dispositivo móvil.

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   ionic serve
   ```
o también se puede ejecutar con:
```bash
ng serve
```

La aplicación estará disponible en `http://localhost:4200/`.

## Instrucciones de Construcción para Docker

1. Construir la imagen de Docker:
   ```bash
   docker build -t wake-app-mobile .
   ```

2. Ejecutar el contenedor:
   ```bash
   docker run -p 8100:8100 wake-app-mobile
   ```

La aplicación estará disponible en `http://localhost:8100/`.
