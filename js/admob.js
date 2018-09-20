  function onDeviceReady(){
 
var admobid = {};
// select the right Ad Id according to platform
if( /(android)/i.test(navigator.userAgent) ) { 
    admobid = { // for Android
        banner: 'ca-app-pub-3940256099942544/6300978111',
        interstitial: 'ca-app-pub-3940256099942544/1033173712'
    };
} 

if(AdMob) AdMob.createBanner( {
    isTesting:true, //Remove this Before publishing your app
    adId:admobid.banner, 
    position:AdMob.AD_POSITION.BOTTOM_CENTER, 
    autoShow:true} );
// Note that autoShow is true
if(window.AdMob) AdMob.prepareInterstitial( {adId:admobid.interstitial, autoShow:false} );
if(window.AdMob) AdMob.showInterstitial();




  }

 document.addEventListener("deviceready", onDeviceReady, false);


