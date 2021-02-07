const Webamp = window.Webamp;
        const webamp = new Webamp({
             initialTracks: [{
        metaData: {
            artist: "PrismCorp Virtual Enterprises",
            title: "Home",
          
        },
        url: "prismcorp.mp3",
    },
//  //TRACK-2   
//     {            metaData: {
//                 artist: "Aphex Twin",
//                 title: "Donkey Rhubarb Remix-188204946"
//                 },
//                 url: "https://archive.org/download/user48736353001/11%20Donkey%20Rhubarb%20Remix-188204946.mp3",
//                 duration: 255  },               
// //TRACK-3                              
//   {            metaData: {
//                 artist: "PrismCorp",
//                 title: "test"
//                 },
//                 url: "prismcorp.mp3",
//                 duration: 150  },                     
                   
// //TRACK-4                              
//   {            metaData: {
//                 artist: "Merzbow, Masonna, Incapacitants, Hijokaidan, MSBR, Aube, Government Alpha, Guilty Connector, Contagious Orgasm, C.C.C.C - узкоглазые хуесосы",
//                 title: "Chuck Schuldiner is Gay - Anti Noise (2010)"
//                 },
//                 url: "https://ia800503.us.archive.org/27/items/POPSAKAL134/3_-_Merzbow_Masonna_Incapacitants_Hijokaidan_MSBR_Aube_Government_Alpha_Guilty_Connector_Contagious_Orgasm_C.C.C.C_are_narrow-eyed_cocksuckers.mp3",
//                 duration: 56  }
                ],
  
    initialSkin: {
        // winsows XP wallpaper
        // url: "https://cdn.webampskins.org/skins/137eebfe958c9034356e6fd912c4052e.wsz"
        // skyamp cornflower blue
        url: "https://cdn.webampskins.org/skins/a9674ec42c37fb74e331c97ea8a47162.wsz"
 },
})

        // Returns a promise indicating when it's done loading.
        webamp.renderWhenReady(document.getElementById('app'));

// new fairyDustCursor({colors: ["#D7F460"]}); 
// new fairyDustCursor({colors: ["#11C1BC", "#F482EC", "#2662EA", "#D7F460"]}); 

emojiCursor({emoji: ["🐬", "🌀", "🌴", "🐠", "✈️"]});

// emojiCursor({emoji: ["🧼"]});

new ghostCursor();
