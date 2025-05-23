## CALCULADORA DE HIDRATACIÓN PEDIÁTRICA v5.2.1

## 🩺 Descripción:
Esta aplicación web permite calcular de manera precisa los requerimientos de hidratación, electrolitos y soluciones intravenosas para pacientes pediátricos. Considera múltiples variables como peso, edad, grado de deshidratación y condiciones clínicas específicas.

## ✨ Características principales:
- Cálculo de mantenimiento, déficit y flujo horario según peso y grado de deshidratación.
- Ajustes inteligentes según condiciones clínicas como hiponatremia, hipernatremia, oliguria, fiebre, etc.
- Recomendación automática de solución intravenosa óptima.
- Comparación de soluciones alternativas.
- Indicaciones completas para enfermería con instrucciones de preparación.
- Exportación de resultados como imagen, impresión o copiar al portapapeles.
- Interfaz adaptativa y moderna con Tailwind CSS.
- Compatible con instalación como Aplicación Web Progresiva (PWA).

## 🛠️ Tecnologías utilizadas:
- 🧾 HTML5
- 🎨 Tailwind CSS
- 🧠 JavaScript Vanilla
- 🌟 Font Awesome
- 🖼️ html2canvas (exportar resultados)
- 📲 PWA con manifest.json y sw.js

📁 Archivos esperados en el mismo directorio:
- 📄 index.html (este archivo)
- 🔧 sw.js (Service Worker para funcionalidad offline)
- 📝 manifest.json (para instalación como app)
- 🖼️ Íconos opcionales para PWA (icon-192.png, icon-512.png, etc.)

## 🧪 Instrucciones de uso:
1- Abrir index.html en un navegador moderno (preferentemente Chrome o Firefox).
2- Ingresar peso (en gramos) y edad (en años).
3- Seleccionar grado de deshidratación y condiciones clínicas presentes.
4- (Opcional) Ingresar electrolitos basales para mayor precisión.
5- Presionar "Calcular Hidratación".
6- Revisar resultados, solución recomendada, fórmulas y notas clínicas.
7- Usar los botones para copiar indicaciones, exportar o imprimir.

## 🧪 Requisitos

- Navegador compatible con PWA (Chrome, Edge, Safari).
- Permitir permisos de almacenamiento local.

## 👩‍⚕️ Uso Clínico

Esta herramienta está orientada al **uso médico profesional**. Las fórmulas aplicadas siguen los principios de Holliday-Segar y estándares de manejo hidroelectrolítico pediátrico.
- El código está optimizado para uso clínico, pero no reemplaza el juicio médico.
- Las advertencias clínicas se generan automáticamente si hay desviaciones significativas en sodio o condiciones críticas presentes.
- Todos los cálculos están basados en la fórmula de Holliday-Segar y guías clínicas pediátricas actualizadas.

## 📄 Licencia

Uso clínico libre. Si reutilizas este código, se agradece atribución al autor original.
