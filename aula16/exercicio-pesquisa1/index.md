1) parent.firstChild é uma propriedade do DOM,Ele é usado para acessar o primeiro nó filho de um elemento pai no DOM. Parent: refere-se ao elemento pai, ou seja, um nó do DOM que contém outros nós (filhos). FirstChild: retorna o primeiro nó filho desse elemento pai.


2) -->A propriedade lastChild é usada no DOM,em JavaScript para acessar o último nó filho de um elemento pai. lastChild é útil quando você quer:Acessar o último nó filho de um elemento pai.Realizar manipulações ou interações no último filho do elemento, como modificar seu conteúdo ou estilos.


3) -->childNodes:é usada para obter uma lista de todos os nós filhos de um elemento ou nó pai. Essa lista inclui:
Nós de elemento HTML (tags como <div>, <p>, etc.).
Nós de texto (incluindo espaços em branco, quebras de linha ou texto visível).
Comentários (nós de comentário HTML).


3) -->nextSibling: é usada para acessar o próximo nó irmão (sibling) de um nó no DOM. Esse próximo irmão pode ser:
Um nó de elemento (como <div>, <p>, etc.).
Um nó de texto (como espaços em branco ou quebras de linha).
Um nó de comentário (se houver).


4) -->previousSibling: é usada para acessar o nó irmão anterior (sibling) de um nó específico. Assim como nextSibling, esse nó anterior pode ser:
Um nó de elemento HTML (como <div>, <p>, etc.).
Um nó de texto (incluindo espaços em branco ou quebras de linha).
Um nó de comentário (se houver). 


5) -->parentNode: é usada para acessar o nó pai de um elemento ou nó específico. Esse nó pai pode ser qualquer tipo de nó válido no DOM, como:
Um elemento HTML (como <div>, <body>, etc.).
O próprio documento (caso o elemento esteja no topo do DOM).


6) -->firstElementChild: é usada para acessar o primeiro nó filho do tipo elemento de um elemento pai.
Acessar o primeiro filho que seja um elemento HTML, ignorando outros tipos de nós (como nós de texto, comentários, etc.).
Navegar no DOM de forma mais precisa, sem se preocupar com espaços em branco ou quebras de linha que poderiam ser interpretados como nós de texto.
Realizar manipulações no primeiro elemento filho de um contêiner. 


7) -->lastElementChild: é usada para acessar o último nó filho do tipo elemento de um elemento pai.
Acessar o último filho que seja um elemento HTML, ignorando nós de texto, comentários ou outros tipos de nós.
Facilitar a navegação no DOM de forma específica e precisa.
Realizar manipulações no último elemento filho de um contêiner.

