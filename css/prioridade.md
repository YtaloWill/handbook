# Priodidade

- Seletores com ``` !important ``` tem prioridade de execução. Não é uma boa prática usar muitos ``` !important ```.

- Quando se tem seletores iguais, o último escrito é considerado.

- Seletores específicos tem prioridade. Neste exemplo, o que utiliza classe será aplicado.

```css
h1 {
    color: #000;
}

h1.classe {
    color: #f00;
}
```

- ID tem prioridade sobre classe