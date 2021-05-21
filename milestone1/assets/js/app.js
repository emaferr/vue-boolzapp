// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
// e dall’interlocutore (bianco) assegnando due classi CSS diverse

// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
// visualizzare nome e immagine di ogni contatto

Vue.component('mio-componente', {
    template: '#mio-componente-template'
  });


const app = new Vue ({

    el:'#app',

    data:{

        contatti: [
            
            {
                nome: 'Michele',
                immagine: '_1',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Hai portato a spasso il cane?',
                        stato: 'inviato'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        testo: 'Ricordati di dargli da mangiare',
                        stato: 'inviato'
                    },
                    {
                        data: '10/01/2020 16:15:22',
                        testo: 'Tutto fatto!',
                        stato: 'ricevuto'
                    }
                ],
            },

            {
                nome: 'Fabio',
                immagine: '_2',
                visibile: true,
                messaggi: [
                    {
                        data: '20/03/2020 16:30:00',
                        testo: 'Ciao come stai?',
                        stato: 'inviato'
                    },
                    {
                        data: '20/03/2020 16:30:55',
                        testo: 'Bene grazie! Stasera ci vediamo?',
                        stato: 'ricevuto'
                    },
                    {
                        data: '20/03/2020 16:35:00',
                        testo: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        stato: 'inviato'
                    }
                ],
            },
        
            {
                nome: 'Samuele',
                immagine: '_3',
                visibile: true,
                messaggi: [
                    {
                        data: '28/03/2020 10:10:40',
                        testo: 'La Marianna va in campagna',
                        stato: 'ricevuto'
                    },
                    {
                        data: '28/03/2020 10:20:10',
                        testo: 'Sicuro di non aver sbagliato chat?',
                        stato: 'inviato'
                    },
                    {
                        data: '28/03/2020 16:15:22',
                        testo: 'Ah scusa!',
                        stato: 'ricevuto'
                    }
                ],
            },

            {
                nome: 'Luisa',
                immagine: '_4',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'inviato'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        testo: 'Si, ma preferirei andare al cinema',
                        stato: 'ricevuto'
                    }
                ],

            },

        ]

    },

    methods: {


        selezionaContatto(index){


            let nomeAttivo = document.getElementById("prova");

            nomeAttivo.innerHTML = this.contatti[index].nome;

            console.log(this.contatti[index].nome);
                
            this.contatti[0].immagine = this.contatti[index].immagine
                
        

           
            
        },

    }, 

})

