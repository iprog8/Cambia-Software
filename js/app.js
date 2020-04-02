
var appHeader = new Vue({
    el: '#header',
    data: {
        visible: true,
        name1: 'Cambia',
        name2: 'Software',
        home: 'Cambia software',
        howWorks: 'Cum lucram?',
        mobileReady: 'Mobile ready',
        features: 'Functionalitati',
        screenshots: 'Galerie',
        screenshotsVisibility: true,
        team: 'Echipa',
        pricing: 'Preturi',
        blog: 'Blog',
        contact: 'Contacteaza-ne'
    },
    methods: {
        endPromotion: function () {
            debugger
            var date = new Date()
            //lunile sunt de la 0 la 11
            if (date.getFullYear() > 2020 || date.getMonth() > 1) {
                this.screenshotsVisibility = false
            }
        },
        //aici trebuia apelata end promotion
        created: function () {
            this.endPromotion()
        }
    }
});

var appLanding = new Vue({
    el: '#landingArea',
    data: {
        visible: true,
        welcome: 'Bine ai venit la Cambia Software',
        motto: 'Aplicatiile noastre iti schimba business-ul in bine',
        readMore: 'Cum lucram?'
    },
    methods: {
    }
});

var appGetStarted = new Vue({
    el: '#get-started',
    data: {
        visible: true,
        title: 'Implementare in pasi simpli',
        subtitle: 'Pasii nu sunt batuti in cuie dar am observat ca acestia functioneaza',
        steps: [
            {
                image: 'img/svg/cloud.svg',
                title: '1. Dorinte',
                altImage: 'Dorintele tale referitoare la site',
                text: 'Tu ne spui ce iti doresti de la site si noi iti dam o estimare la ceea ce iti doresti',
                readMore: 'Detalii',
                readMoreLink: 'dorinte.html',
                addRow: 0
            },
            {
                image: 'img/svg/planet.svg',
                title: '2. Identitatea ta',
                altImage: 'Identitatea ta vizuala pe care o vom integra in site',
                text: 'Vii cu identitatea ta (textele pentru site) dar care poate include poze, culori si logo',
                readMore: 'Detalii',
                readMoreLink: 'identitatea-ta.html',
                addRow: 0
            },
            {
                image: 'img/svg/paint-palette.svg',
                title: '3. Aspect site',
                altImage: 'Stabilim cum vrei sa arate site-ul tau',
                text: 'Alegi layout-ul si paleta de culori din cele 3 propuse de noi \n',
                readMore: 'Detalii',
                readMoreLink: 'aspect-site.html',
                addRow: 1
            },
            {
                image: 'img/svg/design-tool.svg',
                title: '4. Finisaje',
                altImage: 'Ajustam acolo unde nu am inteles corect cum arata site-ul tau',
                text: 'Dupa ce iti livram site-ul facem mici ajustari pentru a-l face sa arate asa cum iti doresti',
                readMore: 'Detalii',
                readMoreLink: 'finisaje.html',
                addRow: 0
            },
        ]
    },
    methods: {
    }
});

var appMobileReady = new Vue({
    el: '#mobile-ready',
    data: {
        visible: true,
        title1: 'Site-urile',
        title2: 'Cambia Software',
        title3: 'sunt mobile ready',
        alt: 'Site-urile realizate de Cambia Software sunt mobile ready.',
        description: `Pentru ca in ziua de azi peste 50% din vizitatorii unui site vin de pe telefoane mobile 
        este impetuos necesar ca orice site creat sa se vada bine pe aceste device-uri si sa aiba scurtaturile necesare 
        pentru a putea fi usor de contactat via Email, Telefon si WhatsApp`
    },
    methods: {

    }
})

var appFeatures = new Vue({
    el: '#features',
    data: {
        visible: true,
        title: 'Functionalitati Incluse',
        subtitle: 'Site-urile facute de noi includ urmatoarele functionalitati',
        features: [
            {
                image: 'img/svg/paint-palette.svg',
                title: 'Design creativ',
                alt: 'Site-ul va avea un design creativ',
                text: 'Site-ul va avea un design creativ care se integreza cu identitatea vizuala a companiei tale',
                addRow: 0
            },
            {
                image: 'img/svg/planet.svg',
                title: 'Viteza la incarcare',
                alt: 'Site-ul se va incarca in maxim 2 secunde',
                text: 'Vom optimiza site-ul si contentul lui astfel incat sa se incarce in maxim 2 secunde*',
                addRow: 0
            },
            {
                image: 'img/svg/design-tool.svg',
                title: 'Colaboram si Validam',
                alt: 'Site-ul il vom valida la finaul fiecarui pas',
                text: 'La finalul fiecarui pas validam ca ceea ce facem noi coincide cu ceea ce iti doresti tu',
                addRow: 0
            },
            {
                image: 'img/svg/vector.svg',
                title: 'Fara costuri ascunse',
                alt: 'Pretul stabilit este cel final fara costuri ascunse',
                text: 'Pretul site-ului tau pe care l-am stabilit la inceput este cel final fara costuri ascunse**',
                addRow: 0
            },
            {
                image: 'img/svg/code.svg',
                title: 'Clean code',
                alt: 'Site-ul tau va avea cod scris curat si lizibil',
                text: 'Cod scris curat si lizibil pentru a putea fi executat rapid dar si usor de modificat',
                addRow: 0
            },
            {
                image: 'img/svg/cloud-computing.svg',
                title: 'Totul este al tau',
                alt: 'Ai drepturi depline asupra site-ului',
                text: 'La final ai drepturi depline asupra site-ului si asupra codului scris pentru tine',
                addRow: 0
            },
        ]
    },
    methods: {
    }
});

var appScreenshots = new Vue({
    el: '#screenshots',
    data: {
        visible: true,
        title: 'Galeria de site-uri',
        subtitle: 'Acestea sunt alte site-uri facute de noi',
        screenshots: [
            {
                image: 'img/screen/1.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/2.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/3.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/4.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/1.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/2.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/3.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
            {
                image: 'img/screen/4.png',
                title: 'Invatam Programare',
                alt: 'Invatam Programare',
            },
        ]
    },
    methods: {
    }
});

var appVideo = new Vue({
    el: '#video',
    data: {
        visible: false,
        title: 'Video TBD',
        subtitle: 'Video TBD',
    },
    methods: {
    }
});

var appTeam = new Vue({
    el: '#team',
    data: {
        visible: true,
        title: 'Echipa noastra',
        subtitle: 'Impreuna facem site-urile sa functioneze',
        team: [
            {
                image: 'img/team/4.jpg',
                title: 'Developer',
                name: 'Letitia P.',
                facebook: '',
                twitter: '',
                linkedin: ''
            },
            {
                image: 'img/team/2.jpg',
                title: 'Developer',
                name: 'Soso S.',
                facebook: '',
                twitter: '',
                linkedin: ''
            },
            {
                image: 'img/team/3.jpg',
                title: 'Developer',
                name: 'Cristi A.',
                facebook: '',
                twitter: '',
                linkedin: ''
            },
            {
                image: 'img/team/1.jpg',
                title: 'Developer',
                name: 'Bogdan G.',
                facebook: '',
                twitter: '',
                linkedin: ''
            },
        ]
    },
    methods: {
    }
});

var appTestimonials = new Vue({
    el: '#testimonials',
    data: {
        visible: false,
        title: 'Echipa noastra',
        subtitle: 'Impreuna facem site-urile sa functioneze',
        testimonials: [
            {
                title: 'Developer',
                text: 'zzz.',
                name: '',
                position: ''
            },
        ]
    },
    methods: {
    }
});

var appPricing = new Vue({
    el: '#pricing',
    data: {
        visible: true,
        title: 'Preturi pachete',
        subtitle: 'Pachete de site-uri in functie de nevoile voastre',
        prices: [
            {
                title: 'Basic',
                pricing: '700 RON',
                buyNow: 'Cumpara',
                deliverables: [
                    {
                        text1: '3',
                        text2: 'layout-uri'
                    },
                    {
                        text1: '5-6',
                        text2: 'pagini web'
                    },
                    {
                        text1: '2',
                        text2: 'runde de finisaje'
                    },
                    {
                        text1: '',
                        text2: 'Toate materiale site-ului'
                    },
                    {
                        text1: '',
                        text2: 'Incarcarea site-ului pe hosting-ul clientul'
                    },
                    {
                        text1: '',
                        text2: 'Setarea domeniului'
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                ]
            },
            {
                title: 'Basic + Suport',
                pricing: '1000 RON',
                buyNow: 'Cumpara',
                deliverables: [
                    {
                        text1: '3',
                        text2: 'layout-uri'
                    },
                    {
                        text1: '5-6',
                        text2: 'pagini web'
                    },
                    {
                        text1: '2',
                        text2: 'runde de finisaje'
                    },
                    {
                        text1: '',
                        text2: 'Toate materiale site-ului'
                    },
                    {
                        text1: '',
                        text2: 'Incarcarea site-ului pe hosting-ul clientul'
                    },
                    {
                        text1: '',
                        text2: 'Setarea domeniului'
                    },
                    {
                        text1: '1',
                        text2: 'an de suport'
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                    {
                        text1: '-',
                        text2: ''
                    },
                ]
            },
            {
                title: 'All inclusive',
                pricing: '1400 RON',
                buyNow: 'Cumpara',
                deliverables: [
                    {
                        text1: '3',
                        text2: 'layout-uri'
                    },
                    {
                        text1: '5-6',
                        text2: 'pagini web'
                    },
                    {
                        text1: '2',
                        text2: 'runde de finisaje'
                    },
                    {
                        text1: '',
                        text2: 'Toate materiale site-ului'
                    },
                    {
                        text1: '',
                        text2: 'Incarcarea site-ului pe hosting',
                        addRow: true
                    },
                    {
                        text1: '',
                        text2: 'Setarea domeniului'
                    },
                    {
                        text1: '1',
                        text2: 'an de suport'
                    },
                    {
                        text1: '',
                        text2: 'Achizitionarea domeniului'
                    },
                    {
                        text1: '',
                        text2: 'Achizitionarea hostingului'
                    },
                    {
                        text1: '1',
                        text2: 'IP dedicat'
                    },

                ]
            },
        ]
    },
    methods: {
    }
});

var appBlog = new Vue({
    el: '#blog',
    data: {
        visible: true,
        title: 'Articole recente',
        subtitle: 'Sfaturi utile pe care e bine sa le stiti inainte de a va face site-ul',
        articles: [
            {
                image: 'img/blog/blog-image-1.jpg',
                title: 'Cum iti alegi numele site-ului si unde e bine sa il hostezi',
                date: '3 aprilie 2020',
                readMore: 'Articol complet',
                link: ''
            },
            {
                image: 'img/blog/blog-image-2.jpg',
                title: 'Ce trebuie sa ai pregatit inainte de a incepe sa-ti faci un site',
                date: '5 aprilie 2020',
                readMore: 'Articol complet',
                link: ''
            },
            {
                image: 'img/blog/blog-image-1.jpg',
                title: 'Ce trebuie sa intrebi la discutia initiala cu dezvoltatorul web',
                date: '7 aprilie 2020',
                readMore: 'Articol complet',
                link: ''
            },
        ]
    },
    methods: {
    }
});

var appNewsletter = new Vue({
    el: '#newsletter',
    data: {
        visible: false,
        title: 'Newsletter',
        subtitle: 'Sfaturi utile pe care e bine sa le stiti inainte de a va face site-ul',

    },
    methods: {
    }
});

var appContact = new Vue({
    el: '#contact',
    data: {
        visible: true,
        title: 'Contact',
        subtitle: 'Nu ai gasit ce cautai? Vrei sa ne intrebi ceva? Scrie-ne un mesaj.',
        city: 'Bucuresti,',
        country: 'Romania',
        email: 'office@cambia.ro',
        phone: '0720645507',
        confirm: 'Mesajul a fost trimis!',

    },
    methods: {
    }
});

var appFooter = new Vue({
    el: '#footer',
    data: {
        visible: true,
        title: 'Cambia Software',
        subtitle: 'Aplicatiile noastre iti schimba business-ul in bine',
        city: 'Bucuresti,',
        country: 'Romania',
        email: 'office@cambia.ro',
        phone: '0720645507',
        confirm: 'Mesajul a fost trimis!',

    },
    methods: {
    }
});

var appCopyrights = new Vue({
    el: '#copyrights',
    data: {
        visible: true,
        title: 'Copyrights Cambia Software. All rights reserved.',
        rights: 'All rights reserved.',
        city: 'Bucuresti,',
        country: 'Romania',
        email: 'office@cambia.ro',
        phone: '0720645507',
        confirm: 'Mesajul a fost trimis!',

    },
    methods: {
    }
});
