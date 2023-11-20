# CAMPO MINATO DOM

#### CONSEGNA DELL'ESERCIZIO 

```
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto.

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe.

BONUS 1:
Trasformare la stringa foto in una immagine effettiva.

BONUS 2:
Organizzare i singoli membri in card/schede.
```

---

#### SVOLGIMENTO

MILESTONE 0

- Partiamo con la dichiarazione di un array contenente degli oggetti che descriveranno il nostro organico. L'array sarà composto da 6 oggetti, i quali avranno 3 key e le rispettive value all'interno (nome, ruolo e foto). Ad esempio:

```JS
const arrayTeam = [{
    nome: "Pinco Pallino",
    posizione: "Presidente",
    foto: "fototessera1.jpg"
}, {
    nome: "Tizio Caio",
    posizione: "Manager",
    foto: "fototessera2.jpg"
}, {
    nome: "Bud Spencer",
    posizione: "Direttore",
    foto: "fototessera3.jpg"
}]
```

---

MILESTONE 1

- Inizializziamo un ciclo for che scorre la lunghezza dell'array, e stampa il key e il value di riferimento. Ad esempio

```JS
for (let i = 0; i < arrayTeam.length; i++) {
    console.log(`Membro ${i+1}`)
    for (let key in arrayTeam[i]) {
        console.log(`${key}: ${arrayTeam[i][key]}`);
    }
}
```
---

MILESTONE 2

- Dichiariamo fuori dal ciclo un fragment. Successivamente con .createElement, andiamo a creare dei div, ai quali appendiamo quello che la console log avrebbe stampato. Una volta ottenuti tutti i div, appendiamo il fragment al nostro contenitore.

---

BONUS 1

- Inseriamo dentro il ciclo di generazione degli elementi una condizione secondo la quale, se la key è foto, non andrà ad appenderla allo span con classe ".foto", ma andrà a generare un element img, sul quale andremo ad usare il metodo .src, per includergli la source dell'immagine. In questo caso sarà `elemento.src("img\${array[i][key]}")`.

BONUS 2

- Andiamo a stilizzare tutto con CSS.



