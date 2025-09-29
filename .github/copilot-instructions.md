# GitHub Copilot Instructions

Esta guía proporciona directrices para GitHub Copilot y otros agentes de IA que trabajen en este repositorio de contenido educativo de DevSecOps.

## Arquitectura del Proyecto

Este es un sitio **Docusaurus v3** con:
- **Build automatizado**: `npm run prebuild` genera el grafo de contenido antes de cada build
- **Búsqueda**: Utiliza `docusaurus-lunr-search` para indexación
- **Mermaid**: Soporte para diagramas mediante `@docusaurus/theme-mermaid`
- **Grafo de contenido**: React Force Graph 2D para visualización de relaciones

## Estructura de Contenido

### Blog Posts (`/blog/`)
**Organización por años**: `blog/2025/mi_articulo/mi_articulo.md`
- Usar archivo `.md` con nombre del artículo (NO `index.md`)
- Incluir metadatos con `slug`, `authors: pabpereza`, `tags`, `keywords`
- Imágenes en la misma carpeta que el artículo
- **Ejemplo de frontmatter**:
```yaml
---
slug: ruta_devsecops_recomendaciones_2025 
title: Ruta DevSecOps, recomendaciones para empezar en 2025 
tags: [devsecops, seguridad, devops]
keywords: [devsecops, seguridad, devops, recomendaciones, 2025]
authors: pabpereza
date: 2025-06-05
---
```

### Documentación de Cursos (`/docs/cursos/`)
**Sistema de numeración específico**: `101.Introduccion.md`, `102.Instalacion.md`, `201.Limites_recursos.md`
- Series 100: Contenido básico
- Series 200+: Contenido avanzado
- Usar `sidebar_label` en frontmatter para navegación
- Incluir `README.md` como índice principal de cada curso

## Workflow de Desarrollo

### Build System
- **Prebuild automático**: Ejecuta `generate-graph-data.js` antes de cada build
- **Comando principal**: `npm run build` (incluye prebuild automático)
- **Desarrollo local**: `npm start` para servidor de desarrollo
- **Grafo de contenido**: Se genera automáticamente desde frontmatter

### Scripts críticos
```bash
npm run generate-graph    # Genera grafo de relaciones de contenido
npm run prebuild         # Se ejecuta automáticamente antes del build
npm start               # Servidor desarrollo con hot reload
```

## Estilo de Redacción

### Principios de Escritura
- Usa un tono conversacional pero profesional
- Explica acrónimos y términos técnicos en su primera aparición
- Incluye analogías para conceptos complejos
- Estructura el contenido con subtítulos claros
- Usa listas y bullets para información concisa

### Progresión Pedagógica
- Comienza con conceptos básicos antes de avanzar
- Incluye ejemplos prácticos después de cada concepto
- Proporciona ejercicios o retos cuando sea apropiado
- Resume puntos clave al final de cada sección

## Formato Markdown

### Estructura de Documentos
```markdown
# Título Principal

## Introducción
Breve descripción del tema y objetivos de aprendizaje.

## Conceptos Fundamentales
### Subtema 1
Explicación clara con ejemplos.

### Subtema 2
Continuación lógica del tema anterior.

## Ejemplos Prácticos
Casos de uso reales y código cuando sea aplicable.

## Conclusiones
Resumen de puntos clave y próximos pasos.

## Recursos Adicionales
Enlaces y referencias para profundizar.
```

### Uso de Elementos Markdown
- **Énfasis**: Usa `**negrita**` para conceptos importantes
- **Código**: Usa `código inline` para comandos y `bloques de código` para ejemplos
- **Citas**: Usa `>` para destacar definiciones o puntos importantes
- **Listas**: Prefiere listas numeradas para pasos secuenciales
- **Enlaces**: Usa texto descriptivo para enlaces, evita "clic aquí"

## Convenciones para Imágenes

### Nomenclatura
- Usa nombres descriptivos: `docker-architecture-diagram.png`
- Incluye alt text descriptivo para accesibilidad
- Organiza en carpetas por tema dentro de `assets/`

### Formato y Calidad
- Prefiere formato PNG para diagramas y capturas
- Usa JPG para fotografías
- Optimiza el tamaño sin perder calidad
- Incluye imágenes en alta resolución cuando sea necesario

## Contexto DevSecOps

### Enfoque de Contenido
- **Contenido educativo**: Cursos progresivos desde nivel básico a avanzado
- **Público objetivo**: Desarrolladores, administradores de sistemas, y profesionales DevOps
- **Metodología**: Learning by doing con ejemplos prácticos y casos reales
- **Temas principales**: Docker, Kubernetes, Seguridad, DevOps, CI/CD

### Terminología Específica
- **DevSecOps**: Integración de seguridad en el ciclo DevOps
- **Contenedores**: Docker, Podman, seguridad de contenedores
- **Orquestación**: Kubernetes, Docker Swarm
- **CI/CD**: Integración y despliegue continuo
- **Monitorización**: Observabilidad y logging

## Ejemplos de Contenido de Calidad

### Curso Técnico (Estructura Real)
```markdown
---
title: Curso de Docker desde cero
sidebar_label: Introducción
slug: curso_de_docker_desde_cero
tags: [docker, devops, contenedores]
---

# Introducción a Docker

Bienvenido al curso de Docker donde aprenderás desde la instalación hasta la implementación en producción.

## ¿Qué aprenderás?
- Conceptos fundamentales de contenedores
- Gestión de imágenes y contenedores
- Docker Compose para aplicaciones multi-contenedor
- Mejores prácticas de seguridad

## Tu primer contenedor
```bash
docker run hello-world
```

Este comando descarga y ejecuta tu primer contenedor...
```

## Recursos Adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Clean Code Principles](https://github.com/ryanmcdermott/clean-code-javascript)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

> **Nota**: Estas instrucciones deben evolucionar con el proyecto. Actualiza este archivo según las necesidades del equipo y las lecciones aprendidas.
