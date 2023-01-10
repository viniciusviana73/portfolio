const linguagem = document.querySelector('.linguagem'),
      aboutLanguage = document.querySelector('#sobreLinguagem')

function onEnterCard() {
    aboutLanguage.style.opacity = '1'
    aboutLanguage.style.visibility = 'visible'
}

function onLeaveCard() {
    aboutLanguage.style.visibility = 'hidden'
    aboutLanguage.style.opacity = '0'
    setTimeout(() => {
        if (aboutLanguage.style.visibility == 'hidden')
            aboutLanguage.innerHTML = ""
    }, 600)
}

java.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>Java é uma linguagem multiplataforma, orientada a objetos e centrada em rede que pode ser usada como uma plataforma em si. É uma linguagem de programação rápida, segura e confiável para codificar tudo, desde aplicações móveis e software empresarial até aplicações de big data e tecnologias do servidor.</p>'
}

java.onmouseleave = () => {
    onLeaveCard()
}

js.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>JavaScript é uma linguagem leve, interpretada e baseada em objetos com funções de primeira classe, mais conhecida como a linguagem de script para páginas Web, porém é usada também em vários outros ambientes sem browser, tais como node.js, Apache CouchDB e Adobe Acrobat. O JavaScript é uma linguagem baseada em protótipos, multi-paradigma e dinâmica, suportando estilos de orientação a objetos, imperativos e declarativos (como por exemplo a programação funcional).</p>'
}

js.onmouseleave = () => {
    onLeaveCard()
}

node.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>Node.js é um ambiente de execução para JavaScript no lado do servidor, de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web (server-side). A principal característica do Node.js é sua arquitetura assíncrona e orientada por eventos.</p>'
}

node.onmouseleave = () => {
    onLeaveCard()
}

html.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>HTML (Linguagem de Marcação de HiperTexto) é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores. O HTML é o bloco de construção mais básico da web. Define o significado (semântico) e a estrutura do conteúdo da web.</p>'
}

html.onmouseleave = () => {
    onLeaveCard()
}

css.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>As CSS (Cascading Style Sheets, ou folhas de estilo) são um mecanismo para adicionar estilos a uma página web, podendo ser aplicadas diretamente nas tags HTML ou ficando contidas dentro das tags &lt;style&gt;.</p>'
}

css.onmouseleave = () => {
    onLeaveCard()
}

mongodb.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>MongoDB é um software de banco de dados orientado a documentos, de código aberto e multiplataforma. Classificado como um SGBD NoSQL, o MongoDB utiliza documentos semelhantes a JSON (JavaScript Object Notation) com esquemas. Suas características permitem com que as aplicações modelem informações de modo muito mais natural, pois os dados podem ser aninhados em hierarquias complexas e continuar a ser indexáveis e fáceis de buscar.</p>'
}

mongodb.onmouseleave = () => {
    onLeaveCard()
}

pgadmin.onmouseenter = () => {
    onEnterCard()
    aboutLanguage.innerHTML = '<h3>Sobre esta tecnologia</h3> <p>O PostgreSQL é um sistema de gerenciamento de bancos de dados relacional. Seu foco é permitir implementação da linguagem SQL em estruturas, garantindo um trabalho com os padrões desse tipo de ordenação dos dados. O Postgres é um dos mais avançados sistemas de banco de dados de código aberto. O PostgreSQL foi desenvolvido com base no POSTGRES 4.2 do Berkeley Computer Science Department, da Universidade da Califórnia.</p>'
}

pgadmin.onmouseleave = () => {
    onLeaveCard()
}