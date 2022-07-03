# Premium-Minds-Challenge

# Challenge 

> O Ash está a apanhar pokémons num mundo que consiste numa grelha bidimensional infinita de casas.
> Em cada casa há exatamente um pokémon.
> O Ash começa por apanhar o pokémon que está na casa onde começa. A seguir, move-se para a casa
> imediatamente a norte, sul, este ou oeste de onde se encontra e apanha o pokémon que aí se encontrar,
> e assim sucessivamente. Atenção: se ele passar numa casa onde já passou (e, portanto, onde já apanhou
> um pokémon), já lá não está um pokémon para ele apanhar!
> O que queremos saber é: começando com um mundo cheio de pokémons (um em cada casa!), quantos
> pokémons o Ash apanha para uma dada sequência de movimentos?

## Formato do input
>O programa deve ler uma linha do stdin, que contém uma sequência de movimentos. Cada movimento é
>descrito por uma letra N, S, E ou O(respetivamente: norte, sul, este, oeste).
## Formato do output
>O programa deve escrever uma linha para o stdout, apenas com um número: quantos pokémons o Ash
>apanhou?


# Introduction
This challenge was completed using NodeJS with the following libraries
```
readline-sync : to read a prompt input
jest : to test the code
```


## The following files need NodeJS to be installed and ready to be used.
```
npm install
```

![npm Install](https://raw.githubusercontent.com/fabio-r-almeida/Premium-Minds-Challenge/main/Images/npm_install.png?token=GHSAT0AAAAAABWBIQAVFAWQEYILR3GIKWQYYWBU3KQ)

## To run the code and use custom inputs
``` 
node index.js 
NNSEOSE
```


![User Output](https://raw.githubusercontent.com/fabio-r-almeida/Premium-Minds-Challenge/main/Images/Output%20User.png?token=GHSAT0AAAAAABWBIQAV5UQU2B6NMMCBDRPEYWBUXKQ)


## To run the test
``` 
npm test
```

![Test output](https://raw.githubusercontent.com/fabio-r-almeida/Premium-Minds-Challenge/main/Images/Test%20output.png?token=GHSAT0AAAAAABWBIQAUX6ZQ7XPO7HSMEAIWYWBU4CA)
