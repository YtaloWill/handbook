# Protocolos

Quando um navegador recebe a instrução de acessar um site, a URL do site tem a estrutura `protocolo://www.site.com`

Caso o protocolo não seja especificado, por padrão o navegador usa o protocolo HTTP, procurando pelo Header **HSTS**, que significa Strict Transport Security. Esse Header (que pode ser visto na aba de Network do navegador) normalmente a seguinte estrutura: 

- `Strict-Transport-Security: max-age=3156000`

Ele é usado para dizer ao navegador que ele deve usar uma conexão HTTPS, que é mais segura. O parâmetro max-age diz por quanto tempo ele deve usar esse protocolo até que o expire.
