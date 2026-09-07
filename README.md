# Sito di Silvia Zucchinetti Maggioni

Sito statico (HTML/CSS/JS, nessun framework) dedicato alla pittrice Silvia Zucchinetti Maggioni (1898–1983).

## Struttura

```
index.html        Home
biografia.html     Biografia, mostre (1947–1982) e antologia critica
opere.html         Galleria opere con lightbox
contatti.html      Contatti e diritti
css/style.css       Foglio di stile unico
js/main.js          Menu mobile + lightbox
images/opere/        Opere in versione web (max 1600px)
images/opere/thumbs/ Miniature per la griglia (max 700px)
images/profilo-silvia.jpg  Ritratto dell'artista (1927)
IMG/, Testi/         Materiali originali (foto non ottimizzate, testi in .doc) — archivio, non usati dal sito
index.htm             Vecchio sito (2006) — mantenuto come riferimento storico
```

## Pubblicare su GitHub Pages

1. Fai push del repository su GitHub.
2. Impostazioni repo → Pages → Source: branch `main`, cartella `/ (root)`.
3. Il sito sarà raggiungibile su `https://<utente>.github.io/<repo>/`.

## Aggiornare i contenuti

- **Aggiungere un'opera**: metti l'immagine originale in `images/opere/` (nome file senza spazi, es. `titolo-anno.jpg`), crea una miniatura in `images/opere/thumbs/` (consigliato: max 700px di lato lungo), poi aggiungi un blocco `<button class="gallery-item">` in `opere.html` seguendo lo schema delle opere esistenti.
- **Modificare i testi**: biografia, mostre e citazioni critiche sono testo semplice dentro `biografia.html`.
- **Contatti**: indirizzo email e dicitura dei diritti in `contatti.html`.

## Ottimizzazione immagini

Le immagini in `images/` sono già state ridimensionate (max 1600px, miniature 700px) e compresse con `jpegoptim`. Se aggiungi nuove foto ad alta risoluzione, ripeti lo stesso procedimento prima di caricarle, per mantenere il sito veloce.
