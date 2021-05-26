const app = new Vue ({

    el:'#app',

    data:{

        nightmode: false,

        show: false,

        contatti: [
            
            {
                nome: 'Matteo',
                immagine: '_1',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Hai portato a spasso il cane?',
                        stato: 'inviato',                    },
                    {
                        data: '10/01/2020 15:50:00',
                        ora:   '15:50',
                        testo: 'Ricordati di dargli da mangiare',
                        stato: 'inviato',                    },
                    {
                        data: '10/01/2020 16:15:22',
                        ora:   '16:15',
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
                        ora:   '16:30',
                        testo: 'Ciao come stai?',
                        stato: 'inviato',                    },
                    {
                        data: '20/03/2020 16:30:55',
                        ora:   '16:30',
                        testo: 'Bene grazie! Stasera ci vediamo?',
                        stato: 'ricevuto'
                    },
                    {
                        data: '20/03/2020 16:35:00',
                        ora:   '16:35',
                        testo: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        stato: 'inviato',                    }
                ],
            },
        
            {
                nome: 'Valerio',
                immagine: '_3',
                visibile: true,
                messaggi: [
                    {
                        data: '28/03/2020 10:10:40',
                        ora:   '10:10',
                        testo: 'La Marianna va in campagna',
                        stato: 'ricevuto'
                    },
                    {
                        data: '28/03/2020 10:20:10',
                        ora:   '10:20',
                        testo: 'Sicuro di non aver sbagliato chat?',
                        stato: 'inviato',                    },
                    {
                        data: '28/03/2020 16:15:22',
                        ora:   '16:15',
                        testo: 'Ah scusa!',
                        stato: 'ricevuto'
                    }
                ],
            },

            {
                nome: 'Anita',
                immagine: '_4',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'inviato',                    },
                    {
                        data: '10/01/2020 15:50:00',
                        ora:   '15:50',
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
                        ora:   '15:30',
                        testo: 'Ma che fine hai fatto?',
                        stato: 'inviato',                    },
                    {
                        data: '10/01/2020 15:50:00',
                        ora:   '15:50',
                        testo: 'Sono fuori per lavoro!',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:55:55',
                        ora:   '15:55',
                        testo: 'Ok!',
                        stato: 'inviato',                    },
                    {
                        data: '10/01/2020 16:10:00',
                        ora:   '16:10',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'ricevuto'
                    },
                ],

            },

            {
                nome: 'Martina',
                immagine: '_6',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'inviato',                    },
                    {
                        data: '10/01/2020 15:50:00',
                        ora:   '15:50',
                        testo: 'Sono fuori per lavoro!',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Come stai?',
                        stato: 'inviato',                    },
                    {
                        data: '20/03/2020 16:30:55',
                        ora:   '16:30',
                        testo: 'Bene grazie! Stasera ci vediamo?',
                        stato: 'ricevuto'
                    },

                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Va benissimo',
                        stato: 'inviato',                    },
                    
                    {
                        data: '10/01/2020 16:10:00',
                        ora:   '16:10',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'ricevuto'
                    },
                ],

            },

            {
                nome: 'Roberto',
                immagine: '_7',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        ora:   '15:50',
                        testo: 'Sono fuori per lavoro!',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Come stai?',
                        stato: 'inviato',                    },
                    {
                        data: '20/03/2020 16:30:55',
                        ora:   '16:30',
                        testo: 'Bene grazie! Stasera ci vediamo?',
                        stato: 'ricevuto'
                    },

                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Va benissimo',
                        stato: 'inviato',
                    },
                    
                    {
                        data: '10/01/2020 16:10:00',
                        ora:   '16:10',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'inviato',
                    },
                ],

            },
            {
                nome: 'Michele',
                immagine: '_9',
                visibile: true,
                messaggi: [
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Lo sai che ha aperto una nuova pizzeria?',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:50:00',
                        ora:   '15:50',
                        testo: 'Si, ma preferirei andare al cinema',
                        stato: 'ricevuto'
                    },
                    {
                        data: '10/01/2020 15:30:55',
                        ora:   '15:30',
                        testo: 'Va benissimo',
                        stato: 'inviato',
                    },
                    
                    {
                        data: '10/01/2020 16:10:00',
                        ora:   '16:10',
                        testo: 'Ci vediamo appena rientro!',
                        stato: 'inviato',
                    },
                ],

            },

        ],


        // Creo variabili vuote per elaborare dati successivamente

        immagineAttiva : '',

        utenteAttivo : '',

        conversazione : '',

        nuovoMessaggio : '',

        messaggiEliminati : '',

        contattiFiltrati: '',

        ricercaContatto:'',

        messaggioAttivo: "",

    },


    methods: {

        toggle: function(index){
            if( this.isOpenIndex !== null ){
               this.isOpenIndex = ( this.isOpenIndex == index ) ? null : index;
            } else {
               this.isOpenIndex = index;
            }
        },

        // Impostazioni tema dark
        theme() {
            let a = document.querySelector("body");
            a.classList.toggle("dark");
            this.dark = !this.dark;
          },


        selezioneContatto(index){

            const immagine = this.contatti[index].immagine;

            this.immagineAttiva = `./assets/img/avatar${immagine}.jpg`

            this.utenteAttivo = this.contatti[index];

            this.conversazione = this.contatti[index].messaggi;

            this.messaggiEliminati = [];

        },

        // utilizzo day.js per stampare la data in messaggio inviato e di risposta
        getCurrentTime(){
            const currentTime = dayjs().format('DD/MM/YYYY HH:mm:ss');
            return currentTime
        },

        getCurrentTime2(){
            const currentTime = dayjs().format('HH:mm');
            return currentTime
        },

        addMessaggio(){  
        
            this.conversazione.push(
                {
                    ora:  this.getCurrentTime2() ,
                    testo: this.nuovoMessaggio,
                    stato: 'inviato',
                },
            )

            this.nuovoMessaggio= '';
            
            // Dopo averla settata ottengo la risposta al messaggio inviato
            this.rispostaMessaggio();
            
        },



        // Elimino il messaggio al click ma mi attengo alle politiche mondiali 
        // e conservo comunque il messaggio :) in un array 
        deleteMessaggio(index){
            const eliminazioneDefinitiva = confirm("Elininare messagio?");
            if(eliminazioneDefinitiva == true){
                this.messaggiEliminati.push(this.conversazione[index])
                this.conversazione.splice(index,1);
                // Chiudo dropdown
                this.show = null;
            }
        },

        

        rispostaMessaggio(){

            setTimeout(function(){

                app.utenteAttivo.messaggi.push(
                    {
                        ora:  app.getCurrentTime2() ,
                        testo: 'Finalmente ci hai messo un eternità!',
                        stato: 'ricevuto',
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
        
        document.addEventListener('click', function() {
           
            if(app.show != false || app.show === 0 ){

                document.addEventListener('click', function() {

           
                    console.log(app.show);
                         
                })

            }
            
        })
       
    },

});