const root = new Vue({
    el:'#root',
    data: {
        user: {
            firstName: 'Chiara',
            lastName: 'Mameli',
            profilePic: 'img/avatar_io.jpg'
        },
        contacts: [
            {
                name:'Marco',
                profilePic: 'img/avatar_1.jpg',
            },
            {
                name:'Giovanni',
                profilePic: 'img/avatar_2.jpg',
            },
            {
                name:'Papà',
                profilePic: 'img/avatar_3.jpg',
            },
            {
                name:'Proprietario Casa',
                profilePic: 'img/avatar_4.jpg',
            },
            {
                name:'Fabio',
                profilePic: 'img/avatar_5.jpg',
            },
            
            {
                name:'Stefania',
                profilePic: 'img/avatar_6.jpg',
            },
            
            {
                name:'Michele',
                profilePic: 'img/avatar_7.jpg',
            },
            
            {
                name:'Luciano',
                profilePic: 'img/avatar_8.jpg',
            }
        ]
    }
})