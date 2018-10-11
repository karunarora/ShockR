  function onDeviceReady(){
 
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-8445604951136736/2322173835',
        interstitial: 'ca-app-pub-8445604951136736/4170442124'
    };
} 

if(AdMob) AdMob.createBanner( {
    
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
// Note that autoShow is true
if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:true} );
if(window.AdMob) AdMob.showInterstitial();




  }

 document.addEventListener("deviceready", onDeviceReady, false);


