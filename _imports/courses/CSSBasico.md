# CSS Básico

<aside>
🖊️ **Temas:**

**Selectores**

**Especificidad** 

**Unidades de medida**

**Propiedades de los textos**

**Modelo de caja** 

**Display**

</aside>

### Instrucciones

1. Cada pagina tiene que tener la estructura básica de HTML.
2. Se le debe agregar un título a la página.
3. Agregar icono a la página.
4. Hacer uso de clases y darles nombres adecuados al tema.
5. Los tamaños son a consideración, tratando de hacer que se vea similar a los ejercicios.
6. Se recomienda hacer agregados a los ejercicios creados o hacerlos de diferentes maneras cada uno.
7. Ver el vídeo recomendado para poder realizar los ejercicios y revisar documentaciones en Internet. 
8. No usar **flex** ni **grid** para realizar los ejercicios. 

## Selectores

---

En CSS los **selectores** se utilizan para delimitar los elementos HTML de nuestra página web a los que queremos aplicar estilo. Hay una amplia variedad de selectores CSS, lo que permite una gran precisión a la hora de seleccionar elementos a los que aplicar estilo

### Universal

```css
* { }
```

### Tipo

```css
h1 { }
```

### Atributo

```css
a[href="https://example.com"] { }
input[type="text"] { }
input[type="submit"] { }
input[required] { }
```

### Pseudoclases

```css
a: hover {}
a: active {}
a: focus {}
```

### Clase

```css
.title { }
```

### Id

```css
#title { }
```

### Combinadores

```css
article p { } // Descendientes
article > p { } // Hijo
h1 + p { } // Hermanos adyacentes 
h1 ~ p {} // Hermanos Generales 
```

### Pseudoelementos

```css
p::first-line { }
a::first-letter { }
a::after { }
```

## **Especificidad**

---

La **especificidad** es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento y, por lo tanto, serán aplicados. La especificidad está basada en las reglas de coincidencia que están compuestas por diferentes tipos de selectores CSS.

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled.png)

## Unidades de medida

---

Las medidas en CSS se emplean, entre otras, para definir la altura, anchura y márgenes de los elementos y para establecer el tamaño de letra del texto. Todas las medidas se indican como un valor numérico entero o decimal seguido de una unidad de medida (sin ningún espacio en blanco entre el número y la unidad de medida).

CSS divide las unidades de medida en dos grupos:

### Absolutas

| Unidad | Nombre |
| --- | --- |
| cm | Centímetros |
| mm | Milímetros |
| Q | Cuartos de milímetros |
| in | Pulgadas |
| pc | Picas |
| pt | Puntos |
| px | Píxeles |

### Relativas

| Unidad | Nombre |
| --- | --- |
| em | Tamaño de letra del elemento padre, en el caso de propiedades tipográficas como font-size, y tamaño de la fuente del propio elemento en el caso de otras propiedades, como width. |
| ex | Altura x de la fuente del elemento. |
| ch | La medida de avance (ancho) del glifo "0" de la letra del elemento. |
| rem | Tamaño de la letra del elemento raíz. |
| lh | Altura de la línea del elemento. |
| vw | 1% del ancho de la ventana gráfica. |
| vh | 1% de la altura de la ventana gráfica. |
| vmin | 1% de la dimensión más pequeña de la ventana gráfica. |
| vmax | 1% de la dimensión más grande de la ventana gráfica. |

## Propiedades de los textos

---

<aside>
🖊️ **Propiedades de los textos**

**- Familia de fuente**

**- Estilos de fuente**

**- Ancho de fuente**

**- Tamaños** 

**- Alineamiento**

**- Decoración**

**- Espacio entre letras**

**- Espacio entre palabras**

**- Transformación de texto**

**- Espacio entre lineas**

**- Alineamiento vertical**

**- Estilos de lista**

**- Color**

</aside>

### Ejercicios

---

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%201.png)

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%202.png)

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%203.png)

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%204.png)

## Propiedades de las cajas

---

<aside>
🖊️ **Algunas propiedades de las cajas**

- **Width**

- **Height**

- **Background**

- **Borde**

- **Borde redondo** 

- **Padding**

- **Margin**

- **Sombras** 

- **Outline**  

</aside>

## Display

---

Establece los tipos de visualización interna y externa de un elemento, ya sea en elemento, bloque o combinados, también existe el display flex y grid, pero esos no serán tomados en cuenta para esta sección.

<aside>
🖊️ **Temas:**

- **Bloque**

- **Línea** 

- **Bloque en línea** 

</aside>

<aside>
📒 **Elemento en bloque:
div
section
main
aside
article**

</aside>

<aside>
📒 **Elementos en linea: 
p
h1
span
a**

</aside>

### Ejercicios

---

### Botones

**Requisitos** 

1. Dar estilo a botones como se ve en la imagen.
2. Al hacer hover en los botones con borde, hacer que el background se
ponga del color del borde y el texto blanco.
3. Al hacer hover en los botones rellenos, agregar una opacidad.

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%205.png)

### Backgrounds

**Requisitos** 

1. Agregar los distintos tipos de fondos a las cajas.
2. Usar los de tu preferencia.

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%206.png)

### Formulario

**Requisitos** 

1. Al hacer hover en el input, que el color del borde cambie a azul.
2. El color del texto de los inputs será negro.
3. Olvide contraseña será un link.

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%207.png)

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%208.png)

### Card

**Requisitos** 

1. Agregar sombra a la card.

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%209.png)

![2022-10-10_14h25_20.png](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/2022-10-10_14h25_20.png)

### Web page

**Requisitos** 

1. Centrar el contenido sin usar flex o grid.

![Untitled](CSS%20Ba%CC%81sico%20662ca6b0d0f648fbab4410ab6134de8b/Untitled%2010.png)

<aside>
💡 **Recursos 
- Vídeo de guía:** [https://www.youtube.com/watch?v=OWKXEJN67FE](https://www.youtube.com/watch?v=OWKXEJN67FE)
**- Pagina de guía:** [https://www.w3schools.com/css/](https://www.w3schools.com/css/)

</aside>

```
CSSBasico/
├── propiedadesTextos/
│   ├── index.html
│   ├── styles.css
├── propiedadesCajas/
│   ├── index.html
│   ├── styles.css
├── botones/
│   ├── index.html
│   ├── styles.css
├── backgrounds/
│   ├── index.html
│   ├── styles.css
│   ├── assets
│   │   ├── background.jpg
├── formulario/
│   ├── index.html
│   ├── styles.css
├── card/
│   ├── index.html
│   ├── styles.css
│   ├── assets
│   │   ├── background.jpg
├── webPage/
│   ├── index.html
│   ├── styles.css
│   ├── assets
│   │   ├── image1.jpg
│   │   ├── image2.jpg
│   │   ├── image3.jpg
```