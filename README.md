# 🚀 Senior Professional Portfolio | Software Architecture

Este repositorio contiene mi portafolio profesional, diseñado bajo principios de ingeniería de software de alto nivel. No es solo una landing page; es un sistema construido para demostrar capacidades en **Arquitectura Limpia (Clean Architecture)**, **Automatización (CI/CD)** y **Optimización de Performance**.

[![Deployment Pipeline](https://github.com/drusystem/drusystem.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/drusystem/drusystem.github.io/actions/workflows/deploy.yml)
[![Performance Lighthouse](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen)](https://drusystem.github.io)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)

## 🏗️ System Architecture

El proyecto implementa una versión pragmática de **Clean Architecture** adaptada al ecosistema Frontend moderno, garantizando la separación de intereses y la facilidad de mantenimiento.

### Capas del Proyecto (Layered Pattern):

1.  **Core (Domain Layer):** El "corazón" de la aplicación. Contiene las entidades de negocio (`Portfolio`, `Project`, `Skill`), Enums y las interfaces de repositorio (contratos). Es 100% agnóstico a frameworks.
2.  **Infrastructure Layer:** Implementación de los contratos del dominio. Actualmente gestiona el origen de datos mediante el `StaticPortfolioRepository`, desacoplando la persistencia de la interfaz de usuario.
3.  **Presentation Layer:** Construida con **React** y **Tailwind CSS v4**. Utiliza el patrón de "Sections" y "Atomic Components" para una UI modular.
4.  **App Layer (Framework):** Entry points de Next.js (App Router) que orquestan la inyección de dependencias y el renderizado en el servidor.

## 🛠️ Stack Tecnológico

-   **Framework:** Next.js 15 (App Router) + TypeScript.
-   **Estilos:** Tailwind CSS v4 (Engine de alto rendimiento).
-   **Arquitectura:** Clean Architecture + Repository Pattern + SOLID Principles.
-   **Despliegue:** GitHub Actions (Pipeline automatizado de CI/CD).
-   **SEO:** Open Graph Protocol & JSON-LD dinámico.

## 📈 Engineering Best Practices & SEO

-   **Core Web Vitals:** Optimización agresiva de imágenes y fuentes para lograr un LCP (Largest Contentful Paint) mínimo.
-   **SEO Senior:** Implementación de metadatos dinámicos y Open Graph cards personalizadas para asegurar impacto visual en LinkedIn y Twitter.
-   **Type Safety:** Tipado estricto en todas las capas para garantizar la integridad de los datos desde el repositorio hasta el componente.
-   **Accessibility (A11y):** Uso de marcado semántico HTML5 y cumplimiento de estándares de accesibilidad para lectores de pantalla.

## ⚙️ DevOps & CI/CD Pipeline

El flujo de entrega continua está totalmente automatizado:
1.  **Integración:** Cada `push` a la rama `main` dispara un workflow de validación.
2.  **Build:** GitHub Actions levanta un entorno virtual (Ubuntu), instala dependencias y ejecuta `next build` con exportación estática (SSG).
3.  **Deployment:** Publicación atómica y automática en **GitHub Pages**.

## 👨‍💻 Instalación y Desarrollo

```bash
# 1. Clonar el repositorio
git clone [https://github.com/drusystem/drusystem.github.io.git](https://github.com/drusystem/drusystem.github.io.git)

# 2. Instalar dependencias
npm install

# 3. Levantar entorno de desarrollo
npm run dev

# 4. Validar build de producción
npm run build