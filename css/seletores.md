# SELETORES

## Universal

``` * ```

Aplica estilo em todos os elementos do body:

```css
* {
    background-color: #fff; 
}
```

**Todas as tags são afetadas pelo código acima**

## Texto

``` h1, p, span ```... e etc

Aplica estilo em todos os elementos com o mesmo nome:

```css
h1 {
    color: #000; 
}
```

Tags afetadas pelo código acima:

```html
<h1>Oloco bicho</h1>
```

Pode-se usar o mesmo estilo para mais de uma tag usando virgula:

```css
    h1, h2 {
        color: #000;
    }
```

## Classe

``` .classe ``` ou ``` p.classe ```

Aplica estilo em todos os elementos com a classe.

```css
.classe {
    color: #000; 
}
```

Tags afetadas pelo código acima:

```html
<div class="classe">Oloco bicho</div>
```

Quando se usa alguma tag antes do nome da classe, serão selecionados apenas os elementos citados, que contém a classe:

```css
div.classe {
    color: #000; 
}
```

Tags afetadas pelo código acima:

```html
<div class="classe">Oloco bicho</div>
```

Tags **NÃO** afetadas pelo código acima:

```html
<span class="classe">Oloco bicho</span>
```

## ID

``` #id ```

Possui o mesmo funcionamento da classe, porém se usa #:

```css
#texto {
    color: #000; 
}
```

Tags afetadas pelo código acima:

```html
<div id="texto">Oloco bicho</div>
```

## Filho

``` div > .texto ```

Seleciona os elementos que estão diretamente dentro de um determinado elemento:

```css
div > .texto {
    color: #000;
}
```

Tags afetadas pelo código acima:

```html
<div>
    <p class="texto">Oloco bicho</p>
</div>
```

Tags **NÃO** afetadas pelo código acima:

```html
<p class="classe">Oloco bicho</p>
```

```html
<div>
    <span>
        <p class="texto">Oloco bicho</p>
    </span>
</div>
```

### Descendente

``` div .texto ```

Diferentemente do filho, esse seletor seleciona **TODAS** os elementos que insidem dentro de determinado elemento:

```css
div .texto {
    color: #000;
}
```

Tags afetadas pelo código acima:

```html
<div>
    <p class="texto">Oloco bicho</p>
</div>
```

```html
<div>
    <span>
        <p class="texto">Oloco bicho</p>
    </span>
</div>
```

Nesse caso, ele seleciona todos os elementos que estão dentro de uma div.

## Irmão Adjacente

``` h1+p ```

Seleciona o próximo elemento descrito na página:

```css
div+p {
    color: #000; 
}
```

Tags afetadas pelo código acima:

```html
<p>Aqui não funciona</p>
<div>Aqui não funciona</div>
<p>O estilo vai funcionar aqui</p>
<p>Porém aqui não</p>
```

## Irmão Geral

``` h1~p ```

Seleciona todos os próximos elementos (não considera elementos filhos):

```css
div+p {
    color: #000; 
}
```

Tags afetadas pelo código acima:

```html
<p>Aqui não funciona</p>
<div>Aqui não funciona</div>
<p>O estilo vai funcionar aqui</p>
<p>O estilo vai funcionar aqui também</p>
```

## Por atributo

``` [type="text"] ```

**DISCLAIMER: Pode não ter suporte para navegadores mais antigos, para maior compatibilidade use class's ou id's**

Seleciona todos os elementos que possuem um determinado atributo com um determindado valor:

```css
input[type="text"] {
    color: #000;
}
```

Tags afetadas pelo código acima:

```html
<input type="text"> <!-- Aqui vai funcionar -->
<input type="radio"> <!-- Aqui NÃO vai funcionar -->
```
