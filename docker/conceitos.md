# Conceitos

## Docker

Ambiente de execução usando containeres usando um runtime.

## Máquina Virtual

Basicamente são máquinas dentro de máquinas.

Elas surgiram para acabar com a necessidade de se ter vários servidores, cada um rodando um serviço. Todos precisavam da própria máquina física.

Com elas, pode se dividir os recursos de uma máquina, em máquinas menores dentro dela, utilizando hypervisor.

Um problema que esse tipo de solução causava era que se tinham que ter muitos sistemas operacionais, que também gastavam recursos, e podiam ter custos por licenças, etc.

## Container

Similar a uma máquina virtual (ambiente para se executar aplicações), porém mais leve.

Containeres utilizam recursos compartilhados entre o sistema (kernel do linux, motivo pelo qual não tem uma integração tão boa com windows). Cada container possui sua própria, árvore de arquivos, processos e rede.

Isso tudo é feito pelos kernel namespaces e cgroup, são eles que modularizam os recursos e restrições de acesso e sistema.

Também usa os Capabilities, que organizam as restrições que serão dadas de acesso ao sistema (root/default user)