const Webamp = window.Webamp;
        const webamp = new Webamp({
             initialTracks: [{
        metaData: {
            artist: "DJ Mike Llama",
            title: "Llama Whippin' Intro",
          
        },
        url: "https://cdn.rawgit.com/captbaritone/webamp/43434d82/mp3/llama-2.91.mp3",
        duration: 5.322286,
    },
 //TRACK-2   
    {            metaData: {
                artist: "Aphex Twin",
                title: "Donkey Rhubarb Remix-188204946"
                },
                url: "https://archive.org/download/user48736353001/11%20Donkey%20Rhubarb%20Remix-188204946.mp3",
                duration: 255  },               
//TRACK-3                              
  {            metaData: {
                artist: "Aphex Twin",
                title: "nocares-188213155"
                },
                url: "https://archive.org/download/user48736353001/1%20nocares-188213155.mp3",
                duration: 150  },                     
                   
//TRACK-4                              
  {            metaData: {
                artist: "Merzbow, Masonna, Incapacitants, Hijokaidan, MSBR, Aube, Government Alpha, Guilty Connector, Contagious Orgasm, C.C.C.C - узкоглазые хуесосы",
                title: "Chuck Schuldiner is Gay - Anti Noise (2010)"
                },
                url: "https://ia800503.us.archive.org/27/items/POPSAKAL134/3_-_Merzbow_Masonna_Incapacitants_Hijokaidan_MSBR_Aube_Government_Alpha_Guilty_Connector_Contagious_Orgasm_C.C.C.C_are_narrow-eyed_cocksuckers.mp3",
                duration: 56  }],
  
    initialSkin: {
        url: "https://cdn.webampskins.org/skins/137eebfe958c9034356e6fd912c4052e.wsz"
 },
})

        // Returns a promise indicating when it's done loading.
        webamp.renderWhenReady(document.getElementById('app'));

new fairyDustCursor({colors: ["#11C1BC", "#F482EC", "#2662EA", "#D7F460"]}); 

// emojiCursor({emoji: ["🔥", "🐬", "🦆"]});
