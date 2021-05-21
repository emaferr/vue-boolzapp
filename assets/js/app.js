// Milestone 1:
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) 
// e dall’interlocutore (bianco) assegnando due classi CSS diverse

// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, 
// visualizzare nome e immagine di ogni contatto

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

            {
                nome: 'Enea',
                immagine: '_5',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Ma che fine hai fatto?',
                        stato: 'inviato'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        testo: 'Sono fuori per lavoro!',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:55:55',
                        testo: 'Ok!',
                        stato: 'inviato'
                    },
                    {
                        data: '10/01/2020 16:10:00',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'ricevuto'
                    },
                ],

            },

            {
                nome: 'Ludovica',
                immagine: '_6',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'inviato'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        testo: 'Sono fuori per lavoro!',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Come stai?',
                        stato: 'inviato'
                    },
                    {
                        data: '20/03/2020 16:30:55',
                        testo: 'Bene grazie! Stasera ci vediamo?',
                        stato: 'ricevuto'
                    },

                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Va benissimo',
                        stato: 'inviato'
                    },
                    
                    {
                        data: '10/01/2020 16:10:00',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'ricevuto'
                    },
                ],

            },

            {
                nome: 'Enzo',
                immagine: '_7',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        testo: 'Sono fuori per lavoro!',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Come stai?',
                        stato: 'inviato'
                    },
                    {
                        data: '20/03/2020 16:30:55',
                        testo: 'Bene grazie! Stasera ci vediamo?',
                        stato: 'ricevuto'
                    },

                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Va benissimo',
                        stato: 'inviato'
                    },
                    
                    {
                        data: '10/01/2020 16:10:00',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'inviato'
                    },
                ],

            },
            {
                nome: 'Benedetto',
                immagine: '_9',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        testo: 'Si, ma preferirei andare al cinema',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:30:55',
                        testo: 'Va benissimo',
                        stato: 'inviato'
                    },
                    
                    {
                        data: '10/01/2020 16:10:00',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'inviato'
                    },
                ],

            },

        ],

        // Creo variabili vuote per elaborare dati successivamente

        immagineAttiva : '',

        utenteAttivo : '',

        conversazione : '',

        nuovoMessaggio : '',

        contattiFiltrati: '',

        ricercaContatto:''

    },

    methods: {

        


        selezioneContatto(index){

            const immagine = this.contatti[index].immagine;

            this.immagineAttiva = `./assets/img/avatar${immagine}.jpg`

            this.utenteAttivo = this.contatti[index];

            this.conversazione = this.contatti[index].messaggi;

        },

        // utilizzo day.js per stampare la data in messaggio inviato e di risposta
        getCurrentTime(){
            const currentTime = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return currentTime
        },

        addMessaggio(){  
        
            this.utenteAttivo.messaggi.push(
                {
                    data:  this.getCurrentTime() ,
                    testo: this.nuovoMessaggio,
                    stato: 'inviato'
                },
            )

            this.nuovoMessaggio= '';
            
            // Dopo averla settata ottengo la risposta al messaggio inviato
            this.rispostaMessaggio();
            
        },

        rispostaMessaggio(){

            setTimeout(function(){

                app.utenteAttivo.messaggi.push(
                    {
                        data:  app.getCurrentTime() ,
                        testo: 'Finalmente ci hai messo un eternità!',
                        stato: 'ricevuto'
                    }
                );

            }, 2000);
        },

        // Effettuo la ricerca cominciando da una variabile vuota dichiarata in precedenza
        // Quella variabile adesso saranno i miei contatti che contengono i caratteri inseriti

        // Grazie CodePen!!!!!

        ricerca(){
            this.contattiFiltrati = this.contatti.filter(contatto => {
                return contatto.nome.toLowerCase().includes(this.ricercaContatto.toLowerCase())
            });
        },
  
    }, 

    // Dopo praticamente un ora capisco come mostrare la lista contatti prima della ricerca
    mounted() {

        this.contattiFiltrati = this.contatti
        
    },

  
    
});











