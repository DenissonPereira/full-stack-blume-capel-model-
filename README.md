![Web 1](./public/banner.png) 

<p align="center">
  <a href="https://github.com/DenissonPereira/full-stack-blume-capel-model-"><img src="https://img.shields.io/github/languages/top/DenissonPereira/full-stack-blume-capel-model-" alt="Primary Language"></a>
  <a href="https://github.com/DenissonPereira/full-stack-blume-capel-model-/issues"><img src="https://img.shields.io/github/issues-raw/DenissonPereira/full-stack-blume-capel-model-" alt="Open Issues"></a>
  <a href="https://github.com/DenissonPereira/full-stack-blume-capel-model-/graphs/contributors"><img src="https://img.shields.io/github/contributors/DenissonPereira/full-stack-blume-capel-model-" alt="Contributors"></a>
  <a href="https://github.com/DenissonPereira/full-stack-blume-capel-model-/commits/main"><img src="https://img.shields.io/github/last-commit/DenissonPereira/full-stack-blume-capel-model-" alt="Last Commit"></a>
  <a href="https://github.com/DenissonPereira/full-stack-blume-capel-model-/stargazers"><img src="https://img.shields.io/github/stars/DenissonPereira/full-stack-blume-capel-model-" alt="Stars"></a>
</p>





# 📑 Sobre o projeto 


Dentro da teoria do campo médio, o **modelo de Blume-Capel** destaca-se no estudo de sistemas de spins mistos. No entanto, sua solução não é trivial, pois envolve sistemas de equações hiperbólicas autoconsistentes. A expressão para o Hamiltoniano do modelo é

![Web 1](./public/equat.png) 

Nessa perspectiva, o presente projeto propõe um conjunto de *softwares* para auxiliar pesquisadores da área com as soluções das equações e outros dados importantes. Com o objetivo de alcançar esse intento, o projeto é composto por três partes fundamentais: **backend**, **web** e **mobile**. O **backend**, desenvolvido em **Java**, oferece uma **API** com dados persistentes do banco, permitindo aos usuários consumi-los sem a necessidade de resolver equações, proporcionando assim a continuidade de suas pesquisas de forma eficiente. A parte **web**, criada com **React**, disponibiliza uma plataforma que consome a **API** e também permite a modificação dos dados, especialmente quando o usuário possui privilégios de administrador. Já a parte **mobile**, elaborada com **React Native**, oferece uma interface elegante e de fácil uso, possibilitando um acesso rápido e intuitivo aos dados necessários.


## 📚 Stack Tecnológica

<img src="./public/menina.gif" min-width="100px" max-width="100px" width="300px" align="right" alt="Computador iuriCode">

### • Design

![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%23051D34?style=for-the-badge&logo=adobe%20photoshop&logoColor=%233CA3F7)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### • Backend

[![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
[![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

### • Web

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![Axios](https://img.shields.io/badge/Axios-%237261DF?style=for-the-badge&logo=axios&logoColor=white)
![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-green?style=for-the-badge&logo=vitest&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

### • Mobile

![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![Axios](https://img.shields.io/badge/Axios-%237261DF?style=for-the-badge&logo=axios&logoColor=white)
![Kotlin](https://img.shields.io/badge/kotlin-%237F52FF.svg?style=for-the-badge&logo=kotlin&logoColor=white)
![Ruby](https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&logo=ruby&logoColor=white)

# ⚙ Pré-requisitos

## Certifique-se de ter o Node.js instalado

Antes de mais nada, verifique se você tem o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js:

[![NPM](https://img.shields.io/npm/v/npm.svg?logo=npm)](https://nodejs.org/en) 

## Instale o Expo CLI globalmente

Abra o terminal ou prompt de comando e execute o seguinte comando para instalar o Expo CLI globalmente em sua máquina:

```
npm install -g expo-cli
```

# 🚀 Como executar o projeto 🚀

## ⬇️ Clonar repositório git

```
git clone https://github.com/DenissonPereira/full-stack-blume-capel-model-
```

## 🏧 Backend

Após clonar o repositório, para acessar o backend, basta digitar o seguinte comando no terminal:

```
cd backend
```

Lembre-se de que os dados estão localizados, a partir da raiz do projeto, em database/Dump20240319.sql

## 🌐 Web

Para acessar a interface web, na pasta raiz do projeto, basta digitar:

```
cd web
```

Após entrar na pasta, instale as dependências do projeto com o seguinte comando:

```
npm install 
```


Assim, para iniciar a aplicação, digite o seguinte comando no terminal:

```
npm run dev
```

Por fim, você pode acessar a aplicação em seu navegador de preferência utilizando o seguinte endereço: http://localhost:3000/

## 📱 Mobile

Para acessar a pasta do projeto, digite no terminal o seguinte comando:

```
cd mobile
```

Após entrar na pasta, instale as dependências do projeto com o seguinte comando:

```
npm install 
```

Tudo pronto! para visualizar o projeto, digite:

```
npx expo
```


# 📸 Visuals and Screenshots

Dê uma espiada no nosso projeto em funcionamento e esclareça todas as suas dúvidas sobre como executá-lo!

## 🌐 Web

### Versão web

![Web 1](./public/web.gif) 

## 📱 Responsividade e Mobile

![Web 2](./public/resp.jpeg) ![Mob 1](./public/mob.gif) 

## 📺 Editor de código

Neste projeto, foi utilizado o Visual Studio Code como editor de código.

[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)



# 🚨 Aguarde! Ainda não terminou!

>Este projeto está atualmente em desenvolvimento, e está sujeito a futuras atualizações e melhorias conforme evolui. Estamos trabalhando para torná-lo ainda mais robusto e funcional ao longo do tempo. Agradecemos sua paciência e interesse nesta fase inicial.

>Além disso, gostaríamos de ressaltar que este projeto é aberto a contribuições de qualquer pessoa interessada em colaborar. Se você tem ideias, sugestões ou melhorias para oferecer, sinta-se à vontade para participar do desenvolvimento do projeto. Juntos, podemos criar algo incrível e beneficiar a comunidade de forma colaborativa.

## 📜 Licença

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/DenissonPereira/full-stack-blume-capel-model-/blob/main/LICENSE) 

## ✏️ Autor 

Denisson Pereira Santos

<div align='center'> 
<a href="https://www.linkedin.com/in/denisson-pereira" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"  target="_blank"></a> 
<a href="https://denissonpereira.com" target="_blank"><img src="https://img.shields.io/badge/Meu%20Site-%2333cc33?style=for-the-badge&logo=fontawesome&logoColor=white&logoWidth=15&labelColor=black"  target="_blank"></a> 
<a href="https://github.com/DenissonPereira" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white&logoWidth=15&labelColor=black"  target="_blank"></a> 
<a href="https://www.instagram.com/denisson_pereira1?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>&nbsp;&nbsp;