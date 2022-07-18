const root = new Vue({
    el:'#root',
    data: {
        currentIndex: 0,
        newMessage: '',
        answerMessage: '',
        user: {
            name: 'Nome Utente',
            avatar: '_io'
          },
        contacts: [
            {
              name: 'Michele',
              avatar: '_1',
              visible: true,
              messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent'
              },
              {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Fabio',
              avatar: '_2',
              visible: true,
              messages: [{
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent'
              },
              {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'received'
              }
              ],
            },
            {
              name: 'Samuele',
              avatar: '_3',
              visible: true,
              messages: [{
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received'
              }
              ],
            },
            {
              name: 'Luisa',
              avatar: '_4',
              visible: true,
              messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
              ],
            },
          ]
    },
    methods: {
        hasBeenSelected(who, index) {
            this.currentIndex = index;
        },
        getAnswer() {
            setTimeout((currentIndex) => {
                const answerMessage = {date: dayjs().format('DD/MM/YYYY HH:MM:ss'), text: 'ok', status: 'received'};
                this.contacts[this.currentIndex].messages.push(answerMessage);
            },1000)
        },
        sendMessage(i) {
            const newMessage = {date: dayjs().format('DD/MM/YYYY HH:MM:ss'), text: this.newMessage, status: 'sent'}
            this.contacts[i].messages.push(newMessage);
            this.newMessage = '';

            this.getAnswer()
        },
        getContact(event){
          const value = event.target.value.toLowerCase()
          console.log(value)

          this.contacts.forEach((contact, i) => {
            const cName = contact.name.toLowerCase()
            if(!(cName.includes(value))) this.contacts.splice(i, 1)
          })}
    }
})
