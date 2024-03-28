(function() {
  window._satellite = window._satellite || {};
  window._satellite.container = {
  "buildInfo": {
    "buildDate": "2023-12-14T20:43:55Z",
    "turbineBuildDate": "2023-02-22T20:37:26Z",
    "turbineVersion": "27.5.0"
  },
  "environment": {
    "id": "ENbd993aa07d4b4467b8a02336a9fe6f2c",
    "stage": "production"
  },
  "dataElements": {
    "meta DCS.dcsuri": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + meta DCS.dcsuri
var metas = document.getElementsByTagName('meta');
window.mycontent = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCS.dcsuri") {
      window.mycontent =  metas[i].getAttribute("content");
    }
 }


var rmDashChar = window.mycontent;
if (rmDashChar != "-") {
    return rmDashChar.split('/').pop(-1);
}
// - meta DCS.dcsuri
}
      }
    },
    "JKP-LeadGen-attr.data_element": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.attr.data_element"
      }
    },
    "ac:appointmentVideo": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentVideo"
      }
    },
    "global params - region_of_registration": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.region_of_registration"
      }
    },
    "ac:appointmentType": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentType"
      }
    },
    "data-element(div)": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-element",
        "elementSelector": "div"
      }
    },
    "errorName": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.errorName"
      }
    },
    "FireMboxForSPA": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //This DataElemnt is called from FDL on filter change in FDLSearchResult page - SB137 implementation
 _satellite.logger.log("AT:FireExecutePrefetch - Executing Prefetch on FDL Search-result filter change - No Action - Already Handled by MO")
 //_satellite.fireExecutePrefetch();
 



}
      }
    },
    "he:pageTitle": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + Health Encyclopedia Variables
try {
  if(window.digitalData.page.pageInfo.pageName.indexOf("health-encyclopedia")>-1) {  
    var heTitle = document.title.replace(' | Kaiser Permanente','');
    return heTitle;
   }
}
catch (e) {}
// - Health Encyclopedia Variables
}
      }
    },
    "meta DCSExt role_type": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + meta DCSExt role_type
var metas = document.getElementsByTagName('meta');
window.mycontent = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.WT.role_type") {
      window.mycontent =  metas[i].getAttribute("content");
    }
 }

return window.mycontent;
// - meta DCSExt role_type
}
      }
    },
    "fdl:linkType": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.link.type"
      }
    },
    "fdl:searchProviderType": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.providerType"
      }
    },
    "UTM_source": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "utm_source",
        "caseInsensitive": true
      }
    },
    "global params - rel_type": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.rel_type"
      }
    },
    "Sub Section 5": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.subCategory5"
      }
    },
    "otp:errorName": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.errorName"
      }
    },
    "C2C": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "id",
        "elementSelector": ".c2cerror"
      }
    },
    "JKP-LeadGen-track.data_track_event": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.track.data_track_event"
      }
    },
    "digitalData:pcp": {
      "defaultValue": "0",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.pcp"
      }
    },
    "UserProfile - userType": {
      "forceLowerCase": true,
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  return _satellite.getVar('getUserProfileParam').userType;
}catch(e){
  _satellite.logger.log('issue with "UserProfile - userType" data element',e);
}
}
      }
    },
    "pageParamForAllMbox": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var paramForAllMbox = {};
if (typeof window.kpTarget !== "undefined" && typeof window.kpTarget.spaaemtt !== "undefined") {
  var spaAemTT = window.kpTarget.spaaemtt;
  for (var key in spaAemTT) {
    if (spaAemTT.hasOwnProperty(key)) {
      var mboxParamObj = spaAemTT[key];
      if (typeof mboxParamObj !== "undefined") {
        Object.assign(paramForAllMbox, mboxParamObj);
      }
    }
  }
}
var rop = _satellite.getVar("Region of Preference");
var rom = _satellite.getVar("Region of Membership (ROM)");
var isSignedOn = _satellite.getVar("isSignedOn");
var obCookie = _satellite.getVar("OBCookie");
var pageName = _satellite.getVar("Page Name");
var acctroleCookie = _satellite.getVar("AcctRoleCookie");
var region = _satellite.getVar("Region");


var param = {};
param.Seg18v = rop;
param.Seg17v = rom;
param.Seg55v = isSignedOn ? "Logged In" : "Logged Out";
param.Seg181v = obCookie;
param.Seg81v = pageName;
param.Seg114vcookie = acctroleCookie;
param["profile.region"] = region;
param["profile.Seg2"] = _satellite.getVar("all:pznSeed")
param.reEnable = _satellite.getVar("all:reEnabledFence");
param["throttle-area"] = _satellite.getVar("all:throttleArea");
param.at_property = "ed956367-5dd2-f209-cc6b-5afaf77af393";

if(isSignedOn){
  param.mbox3rdPartyId= _satellite.getVar("KP AAM ID")
}
//Read articleID from Meta and set to LocalStorage
//Also, Read from Localstorage and pass to TargetProfile store
_satellite.getVar("AT:articleID");
var articleUUID = localStorage.getItem('uuid-1');
if(articleUUID){
 _satellite.logger.log("AT:PageParamForAllMbox - From Localstorage : ",articleUUID);
  var uuidlist = articleUUID.split("|");
  var uuid = uuidlist[0];
  if(uuid != 'undefined'){
    param["profile.articleId"] = articleUUID;
  }else{
    param["profile.articleId"] = '';
  }
}

var NoArticleReadOnFirstVisitToHealthWelness = localStorage.getItem('Seg27');
if(NoArticleReadOnFirstVisitToHealthWelness){
  param.Seg27 = param["profile.Seg27"]= true;
}

var userProfileParam;
if(isSignedOn == "true" && typeof $kp !== "undefined" && typeof $kp.KPUserProfile !== "undefined" && typeof $kp.KPUserProfile.UserProfileClient !== "undefined" && typeof $kp.KPUserProfile.UserProfileClient.getUser() !== 'undefined'){
  userProfileParam = _satellite.getVar("getUserProfileParam");
}
Object.assign(param, paramForAllMbox, userProfileParam);

return param;





}
      }
    },
    "WT.seg_2_param": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "WT.seg_2",
        "caseInsensitive": true
      }
    },
    "SiteSpect - ssCampaignsCounted": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.ssWattsData.ssVisit.ssCampaignsCounted"
      }
    },
    "ac:clickCallNumber": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.clickCallNumber"
      }
    },
    "providerDetail:ratings": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.ratings"
      }
    },
    "membership Lob Code": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var lobDetails = localStorage.getItem('lobDetails');
var lobJSON = JSON.parse(lobDetails);
return lobJSON.membershipLobCode;
}
      }
    },
    "Internal Search Term QS Param ": {
      "forceLowerCase": true,
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "query",
        "caseInsensitive": true
      }
    },
    "Recs Page URL for Articles Page": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  if(document.location.href.indexOf("/!ut/p/") > -1) {
  return document.location.href;
}
else {
	return "";
}
}
      }
    },
    "AT : Prehidden Pages : PageLoad": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  /*
 This is an array of objects and every object will/can have following properties.
 
 value - This represents pagepath. The page where certain selectors/div will be prehidden. It can have array of value also
 elements - selectors separated by commas
 style - Any custom style for a specific elements. - 
  { 'value' : '/front-door', 'style':'.kp-header__top-header {background-color: yellow !important}', 'elements': '.kp-header-global-menu', 'type':'endsWith'},
  { 'value' : 'global','style':'.welcome-hero__content {background-color: red !important}','elements': '.bulletinAlerts' }
  
 timeout - timeout in ms (Not applicable for global)
 exclude - url to exclude where the elements will not be prehidden.
 type - which operation to do - match, endsWith, startsWith. Default is 'match'
 audience - This is an object having property selector and segments or it can be an array of object having multiple selector and segments. 
            Segments should have condition defined as param.attributename. Please see the example below
            'audience':{'selector':'.rx-holder-column','segment':'param.Seg180v===true'}
            'audience':[{'selector':'#heroimage_img','segment':'param.Seg180v===false && param.Seg7===false'},{'selector':'.alerts-notification-placeholder','segment':'param.Seg180v===true'}]

EX -

return [
{ 'value' : '/secure/profile/', 'elements':'.side-nav.kp-body-component','timeout':''},
{ 'value' : ['/georgia/secure/pharmacy','/es/georgia/secure/pharmacy'],'elements':'.rx-holder-column','audience':{'selector':'.rx-holder-column','segment':'param.Seg180v===true'}},
{ 'value' : ['/northern-california','/georgia','/southern-california','/maryland-virginia-washington-dc','/colorado-denver-boulder-mountain-northern','/southern-colorado','/hawaii','/oregon-washington','/washington'], 'elements':'.hero-full-background-image', 'exclude':['/es'],'timeout':'E3','type':'endsWith'},
{ 'value' : 'global', 'elements':'.banner', 'timeout':'E3'},
{ 'value' : '/shop-plans', 'elements':'main > .kp-body-component > div.heroimage.parbase > picture, #heroimage_img', 'type':'endsWith','audience':[{'selector':'#heroimage_img','segment':'param.Seg180v===false && param.Seg7===false'},{'selector':'.alerts-notification-placeholder','segment':'param.Seg180v===true'}]},
{'value': '/secure/appointments/schedule', 'elements': '#reasonforvisitworkflow', 'exclude': ['/southern-california']},
{ 'value' : 'global', 'elements':'.notificationAlerts > div:first-child > div:first-child'} //P1 Alert - KP.org_Covid19_P1_Alert_XT: Live 12/10/2020
]

If value == global then this will be applicable for all pages apart from exclude url. 
If a page has certain selector to be prehidden then it will be a addition of that page specific selector and global selector.

In the above example, if the cuurent page is '/secure/profile/document-preferences' then selectors which will be prehidden is 
.side-nav.kp-body-component,.hero-full-background-image

Backup for rx-app: { 'value' : '/secure/pharmacy', 'elements':'#rx-list-container'},
{ 'value' : '/secure/pharmacy', 'elements':'.rx-holder-column'},
{ 'value' : '/secure/profile/', 'elements':'.side-nav.kp-body-component','audience':{'selector':'.side-nav.kp-body-component','segment':'param[profile.roleType]=="NMP"'}},
{ 'value' : ['/georgia/secure/pharmacy','/es/georgia/secure/pharmacy'],'elements':'.rx-holder-column','audience':{'selector':'.rx-holder-column','segment':'param.hasDualChoice===true'}},
{ 'value' : '/georgia/secure/inner-door', 'elements':'.aem-Grid.aem-Grid--8.aem-Grid--default--8 > div:nth-child(1) > div > div > div > div > div','audience':{'selector':'.aem-Grid.aem-Grid--8.aem-Grid--default--8 > div:nth-child(1) > div > div > div > div > div','segment':'param.Seg517e===false'}}, 
{ 'value' : '/health-wellness', 'elements':'main > div.kp-body-component > div > div > div > div > div:nth-child(3)', 'type':'endsWith'},
{ 'value' : '/southern-california/secure/inner-door', 'elements': '.yml-thumbstrip', 'type':'endsWith' },
{ 'value' : 'global', 'elements': '#global-paperless-prompt' },
{ 'value' : '/southern-california/secure/appointments', 'type':'endsWith', 'elements': '.appointments-rhs .feed-container-content .pcgHome' }, 
{ 'value' : ['/health-wellness/classes-programs', '/health-wellness/classes-programs/search-results'], 'elements': 'body', 'type':'endsWith' },
{ 'value' : '/health-wellness', 'elements': '.kp-body-component', 'type':'endsWith' },
{ 'value' : '/secure/coverage-costs', 'elements':'#mcc-root-comp', 'type':'endsWith'},
{ 'value' : ['/colorado/secure/appointments/on-demand-care/chat-selection'], 'elements':'[data-analytics-location*="Chat with a clinician"]', 'type':'endsWith'}, 
{ 'value' : '/colorado/secure/appointments/on-demand-care/chat-assessment.mobile.html', 'elements':'body', 'type':'endsWith'}, 
{ 'value' : '/maryland-virginia-washington-dc/secure/appointments/on-demand-care/additional-care-selection', 'elements': '.vuc-radiobutton', 'type':'endsWith' },
*/

return [
    { 'value' : '/secure/profile/', 'elements':'.side-nav.kp-body-component','audience':{'selector':'.side-nav.kp-body-component','segment':'param["profile.Seg56v"]=="NMP"'}}, /* NMP PNP - AEM - Kporg_2020_NMP_PNP: Live 04/01/2021 */
    { 'value' : '/health/mycare/consumer/myprofilehome/myprofile/act-for-family-members', 'elements':'#sideNav, #kp-header-nav, .kp-header-nav-2ry, .disMyProfile', 'type':'startsWith','audience':{'selector':'#sideNav, #kp-header-nav, .kp-header-nav-2ry, .disMyProfile','segment':'param["profile.Seg56v"]=="NMP"'}}, /* NMP PNP - Portal - Kporg_2020_NMP_PNP: Live 04/01/2021*/
    { 'value' : ['/secure/profile','/doctors-locations','/physicians', '/clinicians', '/providers', '/choose-physician', '/secure/guided-member-welcome/task-hub'], 'elements':'main .side-nav, main .title-wrap, footer .kp-footer, #kp_global_menu, #mobile-search-button', 'audience':{'selector':'main .side-nav, main .title-wrap, footer .kp-footer, #kp_global_menu, #mobile-search-button','segment':'param.Seg516e===true && param.Seg55v === "Logged In"'}}, /* GMW2.0 PNP & FDL - Kporg_2021_GMW2.0_PNP_FDL: Live 07/01/2021 */
    { 'value' : '/front-door', 'elements':'main > div > div > div > div > div:nth-child(3)', 'type':'endsWith'}, /* Frontdoor Placecard XF - 78_Frontdoor_Placecard_XF: Live 11/11/2021 */ 
    { 'value' : '/shop-plans/ready-for-medicare', 'elements':'main', 'type':'endsWith'}, /* 122 - Medical Hub ATF - 122_XT_MedicalHub_ATF_Message: Live 07/14/2022 */
    { 'value' : ['/colorado/secure/appointments/on-demand-care/care-options', '/colorado/secure/appointments/on-demand-care/care-options.mobile.html'], 'elements':'.find-care-options-card', 'type':'endsWith'}, /* 207_CO_Disable_Chat: Live 03/16/2023 */
    { 'value' : '/maryland-virginia-washington-dc/secure/appointments', 'elements': 'body > main', 'type':'endsWith' }, /* 138_Enterprise_Booking */
    { 'value' : '/shop-plans/ready-for-medicare/explore-plans', 'elements': '#plan-listing-component', 'type':'endsWith' }, /* 224_Medicare Explore Plans  */
    { 'value' : '/southern-california/health-wellness/classes-programs', 'elements': 'body > main', 'type':'endsWith' }, /* 230_kp.org_BH Classes MVP vs phase 2  */
    { 'value' : '/northern-california/health-wellness/classes-programs', 'elements': 'body > main', 'type':'endsWith' }, /* 230_kp.org_BH Classes MVP vs phase 2  */
    { 'value' : '/maryland-virginia-washington-dc/health-wellness/classes-programs', 'elements': 'body > main', 'type':'endsWith' }, /* 230_kp.org_BH Classes MVP vs phase 2  */
    { 'value' : ['/southern-california/secure/pharmacy/prescription-details', '/georgia/secure/pharmacy/prescription-details', '/hawaii/secure/pharmacy/prescription-details'], 'elements': '[class^=MedicationDetail_RightRail]', 'type':'endsWith' }, /*  210_kp_org_MMP-streamline-prescription-details-checkout:  */
    { 'value' : 'global', 'elements': '#kp-header [id*=-search-button]', 'segment': 'param.Seg55v==="Logged In"' }, /* 236_Search_Field_Exposure_AB  */
    { 'value' : '/search', 'type':'endsWith', 'elements': '#kp-header', 'segment': 'param.Seg55v==="Logged In"' }, /* 236_Search_Field_Exposure_AB  */   
    { 'value' : ['/microsites/bofa','/microsites/jpmc','/microsites/microsoft','/microsites/bofa/plan-details','/microsites/jpmc/plan-details','/microsites/microsoft/plan-details'], 'elements': '.kp-header__account-ctas, .kp-header__cross-site-nav, #kp-header__signin_links, .mobile-signin-button, .peripheral-content, .mobile-search-button, #accessCare, #accessCare_1', 'type':'endsWith' }, /*219_XT_B2B Co_branded_header */
    { 'value' : '/health-wellness/fitness-deals', 'elements': 'body > main', 'type':'endsWith' }, /* 240_kp.org_BH Deals page - cards vs image cut outs  */
    { 'value' : '/health-wellness', 'elements': '.gs-container-core.aem-GridColumn.aem-GridColumn--default--12:eq(2)', 'type':'endsWith' }, /* 250_Health Wellness cards vs accordion cards */
    { 'value' : '/health-wellness/fitness-and-exercise', 'elements': '.hero-banner-section .hero-banner-image', 'type':'endsWith' }, /* 260_kporg_Fitness-Exercise_AB  */
  ]
}
      }
    },
    "Site": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.primaryCategory"
      }
    },
    "acaa:errorNotifications": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  if(window.digitalData && digitalData.errors && digitalData.errors.length){
    var e = digitalData.errors;
    var result = [];
    for(var i=0; i<e.length; i++){
      if(e[i].component == "notifications")
        return e[i].code+":"+e[i].message;
    }
  }
}catch(exp){return "";}
}
      }
    },
    "acaa:notificationsMessages": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  if(window.digitalData && digitalData.notifications && digitalData.notifications.list && digitalData.notifications.list.length){
    var e = digitalData.notifications.list;
    var result = [];
    for(var i=0; i<e.length; i++){
      result.push(e[i].messageType + ":" + e[i].messageDetail)
    }
    return result.join("|");
  }
}catch(exp){return "";}
}
      }
    },
    "kp-visitor-id": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "kp-visitor-id"
      }
    },
    "pp:proxyproxySwitch": {
      "defaultValue": "self",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "session",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.proxySwitch"
      }
    },
    "all:reEnabledFence": {
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "_profile.flags.reEnable"
      }
    },
    "AT:AllProviders": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return [ 
 { 'DL' : 'AT : FDLProvider','sync' : '/doctors-locations', 'only':'true'},
];

// Retired providers
/*
{ 'DL' : 'AT : MmrProvider','sync' : '/secure/medical-record'},
{ 'DL' : 'AT : ValidGroupProvider','sync' : '/shop-plans/ready-for-medicare', 'only':'true'}
*/
}
      }
    },
    "ac:notification": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.notification"
      }
    },
    "spa.termCode": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.spa.termCode"
      }
    },
    "funnel_step": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "fpwdAnalyticsData.funnel.funnel_step"
      }
    },
    "user: login success": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.user.login"
      }
    },
    "ada:type": {
      "storageDuration": "session",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try {
    a =  JSON.parse(sessionStorage.getItem('vucSelections'));
    return a.userFlowFrom;
} catch(e) {
    console.log(e);
}

}
      }
    },
    "OBCookie": {
      "defaultValue": "",
      "forceLowerCase": true,
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "OB"
      }
    },
    "subdomain": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + Subdomain Collection
try {
  var subdomain = window.location.href.split("/")[2].split(".")[0];
	return subdomain;
}
catch(e) {
  _satellite.logger.log('subdomain does not exist');
}
// - Subdomain Collection

}
      }
    },
    "acaa:notificationsDisplayed": {
      "defaultValue": "0",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.notifications.displayed"
      }
    },
    "fdl:searchZipCode": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.zipCode"
      }
    },
    "meta DCSExt region_of_membership": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + meta DCSExt region_of_membership
var metas = document.getElementsByTagName('meta');
window.mycontent = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.region_of_membership") {
      window.mycontent =  metas[i].getAttribute("content");
    }
 }

return window.mycontent;
// - meta DCSExt region_of_membership
}
      }
    },
    "search: search term": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.pageInfo.onsiteSearchTerm"
      }
    },
    "JKP-LeadGen-funnel.data_funnel_step": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.funnel.data_funnel_step"
      }
    },
    "global params - plan_type": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.plan_type"
      }
    },
    "JKP-LeadGen-attr.data_feature": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.attr.data_feature"
      }
    },
    "WT.seg_1_param": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "WT.seg_1",
        "caseInsensitive": true
      }
    },
    "Site Section": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.primaryCategory"
      }
    },
    "AT : FDLProvider": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var dlName = 'AT:FDLDataProvider :- '
var fdlDataProvider = { 
  name: "fdlDataProvider", 
  version: "1.0.0", 
  provider: function(callback) {
      var mboxExecuted = false;
      if (document.location.pathname.match("/doctors-locations")){
       _satellite.logger.log(dlName);
       //Get PCP status value
       if(typeof $kp.FDL != "undefined"){
         var pcpObservable = $kp.FDL.getCurrentMemberPcpStatus();
         //Subscribe to pcpstatus event
         _satellite.logger.log(dlName,'Subscribed to pcpstatus event');
         pcpObservable.subscribe ( function (pcpStatus) {
                if(pcpStatus != 'undefined' && pcpStatus.status != 'N/A' && !mboxExecuted){
                  _satellite.logger.log(dlName,'PCP Status :::',pcpStatus);
                  mboxExecuted=true;
                  callback(null, {Seg528e:pcpStatus.status}); 
                }
                else{
                  _satellite.logger.log(dlName,'Get PCP Status :::',pcpStatus,".Waiting for updated status from API");
                }
          });
       }
       else {
          _satellite.logger.log(dlName,'$kp.FDL not defined');
         mboxExecuted=true;
         callback();
       }
      //Check if callback is triggered for cornercase scenario like PCPstatus is only N/A
      setTimeout(function(){ 
        if(!mboxExecuted){
          _satellite.logger.log(dlName,'In Timeout.callback is not yet executed because didnt get any PCP value apart from N/A.Executing mbox now');
          mboxExecuted = true;
          callback();
        }
      },5000);
     }
    
  } 
}; 
return fdlDataProvider;
}
      }
    },
    "ac:appointmentWebinar": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentWebinar"
      }
    },
    "fdl:searchRegion": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.region"
      }
    },
    "acaa:pcp": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.acaa.pcp"
      }
    },
    "fdl:filterType": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.filter.type"
      }
    },
    "SiteSpect - ssGuid": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.ssWattsData.ssVisit.ssGuid"
      }
    },
    "feature_name": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

if (typeof digitalData != "undefined"&& typeof digitalData.global != "undefined" ){
 return digitalData.global.feature_name;
}
}catch(exp){return "";}
}
      }
    },
    "user: age": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.user.segment.age"
      }
    },
    "providerDetail:specialty": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.specialty"
      }
    },
    "fdl:facility:type": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.facility.type"
      }
    },
    "providerDetail:reviewsNumber": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.reviewsNumber"
      }
    },
    "fdl:linkName": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.link.name"
      }
    },
    "providerDetail:acceptingNew": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.acceptingNew"
      }
    },
    "AT: gmw-info has Open Task": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  let openTask = false;
if (typeof sessionStorage.getItem('gmw-info') !== 'undefined') {
  let gmwinfo = JSON.parse(sessionStorage.getItem('gmw-info'));
  if (gmwinfo&&gmwinfo.totalTasks && gmwinfo.completedTasks && typeof gmwinfo.totalTasks !== 'undefined' && typeof gmwinfo.completedTasks !== 'undefined' && gmwinfo.totalTasks > gmwinfo.completedTasks) {
    openTask = true;
  }
}

return openTask;
}
      }
    },
    "formermemberst": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

//if (_satellite.getVar("formermember") != "undefined" ){
//var flag1 = new Boolean(_satellite.getVar("formermember"););
  
  var bool = _satellite.getVar("formermember");
  var formermemberst = bool.toString()
    
  return formermemberst;

}catch(exp){return "";}



}
      }
    },
    "Session Storage = s_custom_rsid": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/sessionStorage.js",
      "settings": {
        "name": "s_custom_rsid"
      }
    },
    "memberPlan": {
      "defaultValue": "\"\"",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var vucSelections = window.sessionStorage.getItem("vucSelections");
vucSelections = JSON.parse(vucSelections);
var memberPlan = vucSelections && vucSelections.memberPlan ? vucSelections.memberPlan : null;
return memberPlan;
}
      }
    },
    "kp aam id - staging": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  if (_satellite.buildInfo.environment != "production" && _satellite.getVar("all:prodQA") !== true) //changed from _satellite.settings.isStaging
    return _satellite.getVar("KP AAM ID")
    //return _satellite.getVar("KP AAM ID-MOBILE")
}catch(exp){}
}
      }
    },
    "providerDetail:language": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.language"
      }
    },
    "data-feature": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-feature",
        "elementSelector": "input"
      }
    },
    "ac:appointmentPhone": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentPhone"
      }
    },
    "AT:articleID": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  _satellite.logger.log("AT:articleID-Start" );
  var accessDate = new Date();
  var userUUID = '';
  if(location.pathname.includes("/health-wellness/healtharticle")){
    userUUID = $("meta[name='UUID']").attr("content");
  }

  if(userUUID && userUUID != null && userUUID != ''){
    localStorage.setItem("uuid-1", userUUID+"|"+accessDate);
    _satellite.logger.log("AT:articleID - Recs LocalStorage : ",userUUID);
  }
  else if(location.pathname.endsWith("/health-wellness") && !localStorage["uuid-1"]){
    localStorage.setItem("Seg27", true);
  }
  
}
      }
    },
    "hash_clean": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var hash = location.hash;
hash = hash.replace("#", "");
hash = hash.replace("/", "");
return hash;
}
      }
    },
    "uuid": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  if(document.querySelector('meta[name="UUID"]')){
  return document.querySelector('meta[name="UUID"]').content
}else{
  return ''
}
}
      }
    },
    "global params - age": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Pull from data layer (AEM Pages)
if(window.digitalData)
  if(digitalData.global)
    if(digitalData.global.age)
      return digitalData.global.age
      
//Pull from META tag (Portal pages)      
var metas = document.getElementsByTagName('meta');
var value = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.age") {
      value =  metas[i].getAttribute("content");
    }
 }

 if(value != "-")
 return value;
}
      }
    },
    "Page URL ( DOM)": {
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.document.location.href"
      }
    },
    "AT: GMW PNP Flag": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
          var GMW = JSON.parse(sessionStorage.getItem('gmw-tasks'));
        var GMWFlag = false;

        /* Check if GMW object is valid and isGMW is true*/
        if (GMW !== null && GMW.isGMW === true && typeof GMW.tasks !== 'undefined') {
            /* Iterate over array until flag is set to true or array ends */
            GMW.tasks.some(function(task) {
                var taskComplete = task.completionStatus === 'C' || task.completionStatus === 'S';

                /* If current task matches page, set flag value to true, then end loop */
                if (Array.isArray(task.url) ? task.url.some(function(url) { return location.pathname.includes(url) }) : location.pathname.includes(task.url)) {
                    GMWFlag = true;
                    return true;
                /* If task is incomplete, end loop */
                } else if (!taskComplete) {
                    return true;
                }
            });
        } 
        
        return GMWFlag;
}
      }
    },
    "getReionNameFromROM": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
   var regionMapping = {
		"mrn":"northern-california",
		"sca":"southern-california",
		"db":"colorado-denver-boulder-mountain-northern",
		"cs":"southern-colorado",
		"gga":"georgia",
		"haw":"hawaii",
		"mid":"maryland-virginia-washington-dc",
		"knw":"oregon-washington",
		 "wa":"washington" 
};
var romCookie = _satellite.getVar("Region of Membership (ROM)");	
console.log("%%%%%%%%"+romCookie);
console.log("&&&&&&&"+regionMapping[romCookie]);
return regionMapping[romCookie];




}
      }
    },
    "Sub Section 4": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.subCategory4"
      }
    },
    "fdl:facility:owner": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.facility.owner"
      }
    },
    "fdl:mapType": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.map.type"
      }
    },
    "global params - account_role": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.account_role"
      }
    },
    "Region": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "hpRegion"
      }
    },
    "acaa:careTeamHasPhoto": {
      "defaultValue": "0",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.careTeam.hasPhoto"
      }
    },
    "data-element": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-element",
        "elementSelector": "input"
      }
    },
    "providerDetail:gender": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.gender"
      }
    },
    "fdl:searchKeyword": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.keyword"
      }
    },
    "fdl:facility:number": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.facility.number"
      }
    },
    "global params - region_of_preference": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.region_of_preference"
      }
    },
    "WT.mc_id_param": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "WT.mc_id",
        "caseInsensitive": true
      }
    },
    "groupnumber": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  
try{

var group_number =  _satellite.getVar("group_number");  
var grpnumber = "mnet" + ":" + group_number;
if( group_number != "") {
    return grpnumber;
    //s.linkTrackVars= s.linkTrackVars + ",eVar116"; 
} else {
   return "";     
  }}
catch (exp) {
console.log("group_number enrollment data element error");
}

}
      }
    },
    "ac:appointmentOffice": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentOffice"
      }
    },
    "error:html_element": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  var elem = document.querySelector("div[id^='msg_error_code_'],.-validation-error,#businessError");
  if(elem)
    return elem.innerHTML;
}catch(exp){}
}
      }
    },
    "providerDetail:photo": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.photo"
      }
    },
    "all:zipCodeState": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return [
  {
    "ID": "6",
    "State_Name": "Alaska",
    "ST": "AK",
    "Zip_Min": "99501",
    "Zip_Max": "99950"
  },
  {
    "ID": "5",
    "State_Name": "Alabama",
    "ST": "AL",
    "Zip_Min": "35004",
    "Zip_Max": "36925"
  },
  {
    "ID": "69",
    "State_Name": "Arkansas",
    "ST": "AR",
    "Zip_Min": "71601",
    "Zip_Max": "72959"
  },
  {
    "ID": "8",
    "State_Name": "Arkansas (Texarkana)",
    "ST": "AR",
    "Zip_Min": "75502",
    "Zip_Max": "75502"
  },
  {
    "ID": "7",
    "State_Name": "Arizona",
    "ST": "AZ",
    "Zip_Min": "85001",
    "Zip_Max": "86556"
  },
  {
    "ID": "9",
    "State_Name": "California",
    "ST": "CA",
    "Zip_Min": "90001",
    "Zip_Max": "96162"
  },
  {
    "ID": "10",
    "State_Name": "Colorado",
    "ST": "CO",
    "Zip_Min": "80001",
    "Zip_Max": "81658"
  },
  {
    "ID": "11",
    "State_Name": "Connecticut",
    "ST": "CT",
    "Zip_Min": "6001",
    "Zip_Max": "6389"
  },
  {
    "ID": "73",
    "State_Name": "Connecticut",
    "ST": "CT",
    "Zip_Min": "6401",
    "Zip_Max": "6928"
  },
  {
    "ID": "13",
    "State_Name": "Dist of Columbia",
    "ST": "DC",
    "Zip_Min": "20001",
    "Zip_Max": "20039"
  },
  {
    "ID": "74",
    "State_Name": "Dist of Columbia",
    "ST": "DC",
    "Zip_Min": "20042",
    "Zip_Max": "20599"
  },
  {
    "ID": "63",
    "State_Name": "Dist of Columbia",
    "ST": "DC",
    "Zip_Min": "20799",
    "Zip_Max": "20799"
  },
  {
    "ID": "12",
    "State_Name": "Delaware",
    "ST": "DE",
    "Zip_Min": "19701",
    "Zip_Max": "19980"
  },
  {
    "ID": "14",
    "State_Name": "Florida",
    "ST": "FL",
    "Zip_Min": "32004",
    "Zip_Max": "34997"
  },
  {
    "ID": "15",
    "State_Name": "Georgia",
    "ST": "GA",
    "Zip_Min": "30001",
    "Zip_Max": "31999"
  },
  {
    "ID": "65",
    "State_Name": "Georga (Atlanta)",
    "ST": "GA",
    "Zip_Min": "39901",
    "Zip_Max": "39901"
  },
  {
    "ID": "16",
    "State_Name": "Hawaii",
    "ST": "HI",
    "Zip_Min": "96701",
    "Zip_Max": "96898"
  },
  {
    "ID": "20",
    "State_Name": "Iowa",
    "ST": "IA",
    "Zip_Min": "50001",
    "Zip_Max": "52809"
  },
  {
    "ID": "66",
    "State_Name": "Iowa (OMAHA)",
    "ST": "IA",
    "Zip_Min": "68119",
    "Zip_Max": "68120"
  },
  {
    "ID": "17",
    "State_Name": "Idaho",
    "ST": "ID",
    "Zip_Min": "83201",
    "Zip_Max": "83876"
  },
  {
    "ID": "18",
    "State_Name": "Illinois",
    "ST": "IL",
    "Zip_Min": "60001",
    "Zip_Max": "62999"
  },
  {
    "ID": "19",
    "State_Name": "Indiana",
    "ST": "IN",
    "Zip_Min": "46001",
    "Zip_Max": "47997"
  },
  {
    "ID": "21",
    "State_Name": "Kansas",
    "ST": "KS",
    "Zip_Min": "66002",
    "Zip_Max": "67954"
  },
  {
    "ID": "22",
    "State_Name": "Kentucky",
    "ST": "KY",
    "Zip_Min": "40003",
    "Zip_Max": "42788"
  },
  {
    "ID": "68",
    "State_Name": "Louisiana",
    "ST": "LA",
    "Zip_Min": "70001",
    "Zip_Max": "71232"
  },
  {
    "ID": "23",
    "State_Name": "Louisiana",
    "ST": "LA",
    "Zip_Min": "71234",
    "Zip_Max": "71497"
  },
  {
    "ID": "26",
    "State_Name": "Massachusetts",
    "ST": "MA",
    "Zip_Min": "1001",
    "Zip_Max": "2791"
  },
  {
    "ID": "58",
    "State_Name": "Massachusetts (Andover)",
    "ST": "MA",
    "Zip_Min": "5501",
    "Zip_Max": "5544"
  },
  {
    "ID": "77",
    "State_Name": "Maryland",
    "ST": "MD",
    "Zip_Min": "20331",
    "Zip_Max": "20331"
  },
  {
    "ID": "78",
    "State_Name": "Maryland",
    "ST": "MD",
    "Zip_Min": "20335",
    "Zip_Max": "20797"
  },
  {
    "ID": "25",
    "State_Name": "Maryland",
    "ST": "MD",
    "Zip_Min": "20812",
    "Zip_Max": "21930"
  },
  {
    "ID": "24",
    "State_Name": "Maine",
    "ST": "ME",
    "Zip_Min": "3901",
    "Zip_Max": "4992"
  },
  {
    "ID": "27",
    "State_Name": "Michigan",
    "ST": "MI",
    "Zip_Min": "48001",
    "Zip_Max": "49971"
  },
  {
    "ID": "28",
    "State_Name": "Minnesota",
    "ST": "MN",
    "Zip_Min": "55001",
    "Zip_Max": "56763"
  },
  {
    "ID": "57",
    "State_Name": "kc96 DataMO",
    "ST": "MO",
    "Zip_Min": "63001",
    "Zip_Max": "65899"
  },
  {
    "ID": "29",
    "State_Name": "Mississippi",
    "ST": "MS",
    "Zip_Min": "38601",
    "Zip_Max": "39776"
  },
  {
    "ID": "59",
    "State_Name": "Mississippi(Warren)",
    "ST": "MS",
    "Zip_Min": "71233",
    "Zip_Max": "71233"
  },
  {
    "ID": "31",
    "State_Name": "Montana",
    "ST": "MT",
    "Zip_Min": "59001",
    "Zip_Max": "59937"
  },
  {
    "ID": "38",
    "State_Name": "North Carolina",
    "ST": "NC",
    "Zip_Min": "27006",
    "Zip_Max": "28909"
  },
  {
    "ID": "39",
    "State_Name": "North Dakota",
    "ST": "ND",
    "Zip_Min": "58001",
    "Zip_Max": "58856"
  },
  {
    "ID": "67",
    "State_Name": "Nebraska",
    "ST": "NE",
    "Zip_Min": "68001",
    "Zip_Max": "68118"
  },
  {
    "ID": "32",
    "State_Name": "Nebraska",
    "ST": "NE",
    "Zip_Min": "68122",
    "Zip_Max": "69367"
  },
  {
    "ID": "34",
    "State_Name": "New Hampshire",
    "ST": "NH",
    "Zip_Min": "3031",
    "Zip_Max": "3897"
  },
  {
    "ID": "35",
    "State_Name": "New Jersey",
    "ST": "NJ",
    "Zip_Min": "7001",
    "Zip_Max": "8989"
  },
  {
    "ID": "36",
    "State_Name": "New Mexico",
    "ST": "NM",
    "Zip_Min": "87001",
    "Zip_Max": "88441"
  },
  {
    "ID": "33",
    "State_Name": "Nevada",
    "ST": "NV",
    "Zip_Min": "88901",
    "Zip_Max": "89883"
  },
  {
    "ID": "60",
    "State_Name": "New York (Fishers Is)",
    "ST": "NY",
    "Zip_Min": "6390",
    "Zip_Max": "6390"
  },
  {
    "ID": "37",
    "State_Name": "New York",
    "ST": "NY",
    "Zip_Min": "10001",
    "Zip_Max": "14975"
  },
  {
    "ID": "40",
    "State_Name": "Ohio",
    "ST": "OH",
    "Zip_Min": "43001",
    "Zip_Max": "45999"
  },
  {
    "ID": "70",
    "State_Name": "Oklahoma",
    "ST": "OK",
    "Zip_Min": "73001",
    "Zip_Max": "73199"
  },
  {
    "ID": "41",
    "State_Name": "Oklahoma",
    "ST": "OK",
    "Zip_Min": "73401",
    "Zip_Max": "74966"
  },
  {
    "ID": "42",
    "State_Name": "Oregon",
    "ST": "OR",
    "Zip_Min": "97001",
    "Zip_Max": "97920"
  },
  {
    "ID": "43",
    "State_Name": "Pennsylvania",
    "ST": "PA",
    "Zip_Min": "15001",
    "Zip_Max": "19640"
  },
  {
    "ID": "44",
    "State_Name": "Puerto Rico",
    "ST": "PR",
    "Zip_Min": "0",
    "Zip_Max": "0"
  },
  {
    "ID": "45",
    "State_Name": "Rhode Island",
    "ST": "RI",
    "Zip_Min": "2801",
    "Zip_Max": "2940"
  },
  {
    "ID": "46",
    "State_Name": "South Carolina",
    "ST": "SC",
    "Zip_Min": "29001",
    "Zip_Max": "29948"
  },
  {
    "ID": "47",
    "State_Name": "South Dakota",
    "ST": "SD",
    "Zip_Min": "57001",
    "Zip_Max": "57799"
  },
  {
    "ID": "48",
    "State_Name": "Tennessee",
    "ST": "TN",
    "Zip_Min": "37010",
    "Zip_Max": "38589"
  },
  {
    "ID": "49",
    "State_Name": "Texas (Austin)",
    "ST": "TX",
    "Zip_Min": "73301",
    "Zip_Max": "73301"
  },
  {
    "ID": "71",
    "State_Name": "Texas",
    "ST": "TX",
    "Zip_Min": "75001",
    "Zip_Max": "75501"
  },
  {
    "ID": "72",
    "State_Name": "Texas",
    "ST": "TX",
    "Zip_Min": "75503",
    "Zip_Max": "79999"
  },
  {
    "ID": "61",
    "State_Name": "Texas (El Paso)",
    "ST": "TX",
    "Zip_Min": "88510",
    "Zip_Max": "88589"
  },
  {
    "ID": "50",
    "State_Name": "Utah",
    "ST": "UT",
    "Zip_Min": "84001",
    "Zip_Max": "84784"
  },
  {
    "ID": "64",
    "State_Name": "Virginia",
    "ST": "VA",
    "Zip_Min": "20040",
    "Zip_Max": "20041"
  },
  {
    "ID": "75",
    "State_Name": "Virginia",
    "ST": "VA",
    "Zip_Min": "20040",
    "Zip_Max": "20167"
  },
  {
    "ID": "76",
    "State_Name": "Virginia",
    "ST": "VA",
    "Zip_Min": "20042",
    "Zip_Max": "20042"
  },
  {
    "ID": "52",
    "State_Name": "Virginia",
    "ST": "VA",
    "Zip_Min": "22001",
    "Zip_Max": "24658"
  },
  {
    "ID": "51",
    "State_Name": "Vermont",
    "ST": "VT",
    "Zip_Min": "5001",
    "Zip_Max": "5495"
  },
  {
    "ID": "62",
    "State_Name": "Vermont",
    "ST": "VT",
    "Zip_Min": "5601",
    "Zip_Max": "5907"
  },
  {
    "ID": "53",
    "State_Name": "Washington",
    "ST": "WA",
    "Zip_Min": "98001",
    "Zip_Max": "99403"
  },
  {
    "ID": "55",
    "State_Name": "Wisconsin",
    "ST": "WI",
    "Zip_Min": "53001",
    "Zip_Max": "54990"
  },
  {
    "ID": "54",
    "State_Name": "West Virginia",
    "ST": "WV",
    "Zip_Min": "24701",
    "Zip_Max": "26886"
  },
  {
    "ID": "56",
    "State_Name": "Wyoming",
    "ST": "WY",
    "Zip_Min": "82001",
    "Zip_Max": "83128"
  }
];
}
      }
    },
    "fdl:searchCity": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.city"
      }
    },
    "global params - guid": {
      "defaultValue": "",
      "storageDuration": "session",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Pull from data layer (AEM Pages)
if(window.digitalData)
  if(digitalData.global)
    if(digitalData.global.guid)
      return digitalData.global.guid;
      
//Pull from META tag (Portal pages)      
var metas = document.getElementsByTagName('meta');
var value = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.guid") {
      value =  metas[i].getAttribute("content");
    }
 }

 if(value != "-")
 	return value;
}
      }
    },
    "funnel_name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "fpwdAnalyticsData.funnel.funnel_name"
      }
    },
    "gmw:tagType": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.gmw.tagType"
      }
    },
    "JKP-LeadGen-funnel.data_funnel_name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.funnel.data_funnel_name"
      }
    },
    "data-msg-code": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-msg-code",
        "elementSelector": "div"
      }
    },
    "Feature Name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var fn = "";
if ((typeof digitalData !== "undefined") && digitalData && (typeof digitalData.global !== "undefined") && digitalData.global && 
    (typeof digitalData.global.feature_name !== "undefined") && digitalData.global.feature_name) { 
  fn = digitalData.global.feature_name;
}

if(fn == "Secure"){
  var arr = window.location.pathname.split('/');
  var loc = arr.indexOf('secure')+1;
  return arr[loc];
}else{
  return fn;
}
}
      }
    },
    "SiteSpect - ssVars": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.ssWattsData.ssVisit.ssVars"
      }
    },
    "fdl:searchIsland": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.island"
      }
    },
    "all:throttleArea": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var current = ""
var experienceMap = {
  "covid-assessment": document.location.pathname.includes("/health-wellness/coronavirus-information/covid-vaccine/vaccination-eligibility") || document.location.pathname.includes("/front-door/covid-vaccine-appointment"),
  "register": document.location.pathname.includes("/register"),
  "evisits": _satellite.cookie.get("region") === "KNW" ? document.location.pathname.includes("/secure/appointments/schedule") : document.location.pathname.includes("/evisits"),
  "sign-on": document.location.pathname.includes("/sign-on")
}
for (var i in experienceMap) {
  if (experienceMap[i]) {
    current = i
  }
}
return current;



}
      }
    },
    "global params - role_type": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Pull from data layer (AEM Pages)
if(window.digitalData)
  if(digitalData.global)
    if(digitalData.global.role_type)
      return digitalData.global.role_type;
      
//Pull from META tag (Portal pages)      
var metas = document.getElementsByTagName('meta');
var value = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.WT.role_type") {
      value =  metas[i].getAttribute("content");
    }
 }

 if(value != "-")
 return value;
}
      }
    },
    "ac:appointmentTotal": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentTotal"
      }
    },
    "Sub Section 3": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.subCategory3"
      }
    },
    "ac:appointmentSurgicalProcedures": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentSurgicalProcedures"
      }
    },
    "enrollmentPeriod": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

if (typeof digitalData != "undefined" && typeof digitalData.global != "undefined" ){
 return digitalData.global.enrollmentPeriod;
}
}catch(exp){return "";}
}
      }
    },
    "data-track-msg": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-track-msg",
        "elementSelector": "div"
      }
    },
    "Sub Section 2 Split": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var val = digitalData.page.category.subCategory2||"";
var arr = val.split(':');
var len = arr.length-1;

return arr[len];
}
      }
    },
    "registration_data": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  var e = event.detail;
  var reg = e.regRegion||"";
  var age = parseInt(e.regAge)||"";
  var arr = [];

  if(age >= 90){
    age = "90+";
  }

  arr.push(reg);
  arr.push(age);

  return arr.join('|');
}catch(error){
  return "";
}
}
      }
    },
    "AT : MmrProvider": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var mmrProvider = {
    name: "alerts",
    version: "1.0.0",
    timeout: 2000,
    provider: function(callback) {
       _satellite.logger.log('TargetCustomConfig-Dataprovider : loading mmr provider function');
      
      var apiEnvData = getEnvDetails();
      var url = apiEnvData.apidomain+apiEnvData.path;
      
       _satellite.logger.log("api url " +url);

      if("questionnairCount" in sessionStorage) {
        callback(null, {activeQuestionnair: sessionStorage.getItem('questionnairCount')});
      }
      else if(getIndex() == -1){
        $.ajax({
              type: "GET",
              url: url,
              contentType:"application/json",
              xhrFields:{
                withCredentials: true
              },
              headers: {
                    'X-osversion': 'Win',
                    'X-appname':'RWD',
                    'X-useragentcategory':'B',
                    'X-apiKey': apiEnvData.apikey,
                    'X-useragenttype':'Desktop'
              },
              dataType: "json",
              success: function(data) {
                  _satellite.logger.log("Notification alert: Success call");
                 
                if (data.alerts.hasOwnProperty('PREVISIT QUESTIONNAIRES*HEALTH ENGAGEMENT')){
                    sessionStorage.setItem('questionnairCount', data.alerts['PREVISIT QUESTIONNAIRES*HEALTH ENGAGEMENT'].count);
                    var activeQuestionaireCount = sessionStorage.getItem('questionnairCount');
                    if (activeQuestionaireCount > 0){
                      _satellite.track('mmractivequestionaire');
                    }
                    
                }else{
                  //if(location.href.indexOf('/secure/medical-record/questionnaires') == -1){
                    sessionStorage.setItem('questionnairCount', 0);
                  //}       
                  }
               callback(null, {activeQuestionnair: sessionStorage.getItem('questionnairCount')});
              },
              error: function(err) {
                  callback(err);
              }
          });
       }//end of else
    }
};
return mmrProvider;

function getIndex(){
     var urls = ["/secure/my-health","/secure/inner-door","/secure/medical-record/questionnaires"];
     return urls.findIndex(isMyHealthOrInnerDoor);
}
  
  function isMyHealthOrInnerDoor(url){
       return (document.location.pathname.match(url) || document.location.pathname === url);
  }
  
function getEnvDetails(){

var environment = _satellite.buildInfo.environment;

var domain = window.location.hostname;

 _satellite.logger.log("Environment" +environment);
 
  if ((environment  == "development" || environment == "staging")){

    return  {
      "apidomain" :"https://apip-hint1.kaiserpermanente.org",
      "path": "/mycare/acaa/dashboard/v2/event-notification/alerts",
      "apikey" :"007227bc-b9ad-4fac-9adf-15b625fe63a7"

    };

  }else if (environment  == "production"){

      return  {
      "apidomain" :"https://apip.kaiserpermanente.org",
      "path": "/mycare/acaa/dashboard/v2/event-notification/alerts",
      "apikey" :"kpacaacareresp67883262133691457536"

    };

  }else {

      return  {
      "apidomain" :"https://apip-hint1.kaiserpermanente.org",
      "path":"/mycare/acaa/dashboard/v2/event-notification/alerts",
      "apikey" :"007227bc-b9ad-4fac-9adf-15b625fe63a7"

    };

  }
}

}
      }
    },
    "footer - social media icons": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "class",
        "elementSelector": ".kp-footer-social a img"
      }
    },
    "webviewFlag": {
      "defaultValue": "",
      "storageDuration": "session",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //webviewFlag set within the "mobile:native app webview" rule

if(sessionStorage.getItem("webviewFlag")=="true"){
  return "webview";
}
}
      }
    },
    "otp:funnel_name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.spa.funnel_name"
      }
    },
    "fdl:filterName": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.filter.name"
      }
    },
    "group_number": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

if (typeof digitalData != "undefined" && typeof digitalData.global != "undefined" ){
 return digitalData.global.group_number;
}
}catch(exp){return "";}
}
      }
    },
    "KP AAM ID": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "kpaamid"
      }
    },
    "employer": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

if (typeof digitalData != "undefined" && typeof digitalData.global != "undefined" ){
 return digitalData.global.employer;
}
}catch(exp){return "";}
}
      }
    },
    "null": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return "";
}
      }
    },
    "providerDetail:department": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.department"
      }
    },
    "cid_param": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "cid",
        "caseInsensitive": true
      }
    },
    "gmw:planType": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.gmw.planType"
      }
    },
    "ac:appointmentHealthClass": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.appointmentHealthClass"
      }
    },
    "providerDetail:type": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.type"
      }
    },
    "titleChange": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "innerHTML",
        "elementSelector": "title"
      }
    },
    "data-analytics-view": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  if(window.$){
    var views = $("[data-analytics-view]:visible");
    if(views.length == 1)
      return views[0];
  }
}catch(exp){}
}
      }
    },
    "AT:ViewName": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var viewName = window.location.hash;

if(viewName){
_satellite.logger.log("AT:ViewName - From Hash - ",viewName);
sanatizeViewName(viewName);
}
//else{
 // viewName = window.location.pathname;
 // _satellite.logger.log("AT:ViewName - From Pathname - ",viewName);
 // sanatizeViewName(viewName)
//}

_satellite.logger.log("AT:ViewName - Sanitized ViewName - ",viewName);

return viewName;

function sanatizeViewName(name){
  if (name.startsWith('#') || name.startsWith('/')) {
    name = name.substr(1);
  }
  if (name.endsWith('#') || name.endsWith('/')) {
    name = name.substr(0,name.length-1);
  }
  if(name.includes("?")){
    name = name.split("?")[0];
  }
  if(name.startsWith('#') || name.startsWith('/') || name.endsWith('#') || name.endsWith('/') || name.includes("?")){
    sanatizeViewName(name);
  }
  else{
    viewName = name;
  }
}
  
}
      }
    },
    "kp_shortcut_referrer": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "kp_shortcut_referrer",
        "caseInsensitive": true
      }
    },
    "Sub Section 1 Split": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var val = digitalData.page.category.subCategory1||"";
var arr = val.split(':');
var len = arr.length-1;

return arr[len];
}
      }
    },
    "Sub Section 2": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.subCategory2"
      }
    },
    "JKP-LeadGen-track.data_track_link": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.track.data_track_link"
      }
    },
    "otp:funnel_step": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.spa.funnel_step"
      }
    },
    "meta DCSExtgender": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var metas = document.getElementsByTagName('meta');
window.mycontent = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.gender") {
      window.mycontent =  metas[i].getAttribute("content");
    }
 }

return window.mycontent;
}
      }
    },
    "Sub Section 1": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.page.category.subCategory1"
      }
    },
    "fdl:facility:name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.facility.name"
      }
    },
    "kp aam id - prod": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  if (_satellite.buildInfo.environment == "production" || (_satellite.getVar("all:prodQA") === true)) //changed from !_satellite.settings.isStaging
    return _satellite.getVar("KP AAM ID")
}catch(exp){}

}
      }
    },
    "fdl:searchRadius": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.radius"
      }
    },
    "all:customerProfileData": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // all:customerProfileData
/* this encapsulates the BFF API */
var apiName = _satellite.getVar("all:BFFApiSelected"); // 'medicalbills'
window._globalTempEnrichedProfileName = "_enrichedProfile";
window._tempD = null;
window._customData = null;
var c = $kp.KPClientCommons.Communicator
var bffPromise = new Promise(function (resolve, reject) {
    var c = $kp.KPClientCommons.Communicator
    // return the promise block
    c.CHANNEL[c.ENUMS.CHANNEL.GLOBAL].request({topic: c.ENUMS.TOPIC.BFF_API_LOAD})
        .then(function (response) {
            var data = ("data" in response && response.data) ? response.data : null
            if (data && apiName in data && response.data[apiName]) {
                _customData = response.data[apiName]
                resolve(_customData)
            } else {
                reject({state: response._state, result: response._result})
            }
        })
})
bffPromise.then(function (data) {
    window._tempD = (typeof data !== "undefined" && typeof data.value !== "undefined" && data.value) ? data.value : {}
    var $kpProfile = $kp.KPUserProfile.UserProfileClient.getUser()
    if (typeof $kpProfile === "undefined") {
        _satellite.logger.debug("KP Profile could not be found")
        window[_globalTempEnrichedProfileName] = {}
    } else {
        window[_globalTempEnrichedProfileName] = $kpProfile
    }

    if (apiName === "medicalbills") {
        window[_globalTempEnrichedProfileName]["guarantor"] = _tempD
    } else {
        window[_globalTempEnrichedProfileName][apiName] = _tempD
    }
    if (_satellite.kpCustomEvent) {
        _satellite.kpCustomEvent("_enrichedProfileReady", window[_globalTempEnrichedProfileName])
    }
    _satellite.setVar("all:customerProfile", window._tempD)
}, function (error) {
    if (_satellite.logger && _satellite.logger.debug) {
        _satellite.logger.debug("error", error)
    }
    window._tempD = {}
    window[_globalTempEnrichedProfileName] = {}
    if (apiName === "medicalbills") {
        window[_globalTempEnrichedProfileName]["guarantor"] = {}
    }
    if (_satellite.kpCustomEvent) {
        _satellite.kpCustomEvent("_enrichedProfileReady", window[_globalTempEnrichedProfileName])
    }
    _satellite.setVar("all:customerProfile", window._tempD)
    return window._tempD
}).catch(function (data) {
  window._tempD = (typeof data !== "undefined" && typeof data.value !== "undefined" && data.value) ? data.value : {}
  if (typeof data.state !== "undefined") {
    window._tempD._state = data.state
  }
  _satellite.setVar("all:customerProfile", window._tempD)
  return window._tempD
})
return bffPromise


}
      }
    },
    "Sub Section 4 Split": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var val = digitalData.page.category.subCategory4||"";
var arr = val.split(':');
var len = arr.length-1;

return arr[len];
}
      }
    },
    "pp:proxySubjectCount": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  //Done this way so "0" gets passed
  if(window.digitalData && digitalData.global && typeof(digitalData.global.proxySubjectCount) == "number"){
    return digitalData.global.proxySubjectCount.toString();
  }
}catch(exp){}
}
      }
    },
    "AcctRoleCookie": {
      "defaultValue": "",
      "forceLowerCase": true,
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "Acctrole"
      }
    },
    "GUID": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.digitalData.global.guid"
      }
    },
    "global params - actor": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.actor"
      }
    },
    "gmw:memberType": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.gmw.memberType"
      }
    },
    "providerDetail:doctorName": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.doctorName"
      }
    },
    "fdl:searchNewProviderType - ": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.practiceArea"
      }
    },
    "SiteSpect - ssCampaignsApplied": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.ssWattsData.ssVisit.ssCampaignsApplied"
      }
    },
    "all:BFFApiSelected": {
      "modulePath": "core/src/lib/dataElements/constant.js",
      "settings": {
        "value": "medicalbills"
      }
    },
    "UNIX_Timestamp": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var d = new Date();
var n = d.toUTCString();

return n;
}
      }
    },
    "getUserProfileParam": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  window.getProfileAttr = function _getProfileAttr(prp, name) {
  prp = prp || getUserProfile()
  //if (name === "isGuarantor") { _satellite.logger.debug(JSON.stringify(profile)) }
  if (typeof prp !== "undefined" && prp !== "undefined" && prp.hasOwnProperty(name) && (typeof prp[name] !== "undefined") && prp[name]) {
    if (name === "isGuarantor") {
      if (typeof _satellite.getVar("all:customerProfile") === "object") {
        return _satellite.getVar("all:customerProfile").isPatientGuarantor
      }
      else {
        setTimeout(window.getProfileAttr(prp, name), 50)
      }
    }
    else {
      if (name !== "undefined" && prp.hasOwnProperty(name) && prp[name] !== "undefined" && prp[name]) {
        if (typeof _satellite.getVar("all:customerProfile") === "object") {
          var cProfile = _satellite.getVar("all:customerProfile")
          // if we don't have the name in prp but we do have it in the cProfile, we need to look more closely at prp
          // and figure out if we need to refresh it
          if (cProfile && (!(name in prp)) && (name in cProfile)) {
            // prp *should* be the most up-to-date profile when fetching an attribute
            //  In this case, the current profile in prp is different then what we have in cProfile, so log a message
            //  and check profile state ->
            //  in theory there should be a way to check what
            prp = checkProfileFreshness()
          }
        }
        return prp[name]
      }
      else {
        return false
      }
    }
  }
  return false
}

window.getUserProfile = function _getUserProfile(entitlement) {
  // we don't use _satellite.getVar("all:customerProfile") here because only guarantor supports that right now
  if (typeof $kp !== "undefined" && typeof $kp.KPUserProfile !== "undefined" &&
      typeof $kp.KPUserProfile.UserProfileClient !== "undefined") {
    //_satellite.logger.debug("[getUserProfile()] profile is defined")
    if (entitlement && typeof $kp.KPUserProfile.UserProfileClient.getEntitlements() !== "undefined") {
      return $kp.KPUserProfile.UserProfileClient.getEntitlements();
    } else if (typeof $kp.KPUserProfile.UserProfileClient.getUser() !== "undefined") {
      if (window._enrichedFlag !== 1) {
        return enrichUser($kp.KPUserProfile.UserProfileClient.getUser());
      }
      //_satellite.logger.debug("enriched user: " + JSON.stringify(enriched));
      return window._enrichedProfile
    }
  }
  else {
    //_satellite.logger.debug("[getUserProfile()] profile is not defined");
  }
}


var userProfileParam = {}
userProfileParam.Seg180v = getDualChoiceValue();
userProfileParam.Seg4 = getExchangeInfo();
userProfileParam.Seg517e = getGroupIdValue();

  userProfileParam.Seg5 = getProfileAttr(getUserProfile(), "isNewMember")
  userProfileParam.Seg6 = getSelfFunded();  
  userProfileParam.Seg7 = getProfileAttr(getUserProfile(), "isCAFH")
  userProfileParam["profile.Seg2"] = _satellite.getVar("all:pznSeed")
  userProfileParam.Seg8 = getProfileAttr(getUserProfile(), "newMemberEffectiveDate")  
  userProfileParam.Seg440e = isFormerMember();
  userProfileParam["profile.Seg56v"] = getProfileAttr(getUserProfile(), "roleType")
  userProfileParam.Seg9 = getProfileAttr(getUserProfile(), "medicareStatus")
  userProfileParam["profile.Seg10"] = getProfileAttr(getUserProfile(), "medicareStatusCode")  
  userProfileParam.Seg11 = getProfileAttr(getUserProfile(), "medicarePartDStatus")
  userProfileParam.Seg20v = userProfileParam["profile.Seg20v"] = getProfileAttr(getUserProfile(), "guid")
  userProfileParam.Seg114v = getProfileAttr(getUserProfile(), "accountRole")
  userProfileParam["profile.Seg12"] = getProfileAttr(getUserProfile(), "membershipAccountStatus")
  userProfileParam.Seg13 = getProfileAttr(getUserProfile(), "isReturningMember")
  userProfileParam.Seg14  = isFirst90Days();
  userProfileParam.Seg16 = isFirst180Days();
  userProfileParam.Seg19 = getProfileAttr(getUserProfile(), "userType")
  userProfileParam.Seg101v = userProfileParam["profile.Seg101v"] = getProfileAttr(getUserProfile(), "age")
  /* this should be a blank string when the user is not logged in */
  //userProfileParam["profile.LoggedIn"] = _satellite.getVar("isSignedOn") || "false"  
  userProfileParam["profile.Seg15"] = _satellite.getVar("isSignedOn") || "false"
  userProfileParam["profile.Seg106v"] = getProfileAttr(getUserProfile(), "consumerPlanType")  
  userProfileParam["profile.Seg6"] = getProfileAttr(getUserProfile(), "selfFunded")
  /* need a different strategy here because the cookie returns 'undefined' and not false */
  if (_satellite.cookie.get("kpaamid")) {
    userProfileParam["profile.pzn_id"] = _satellite.cookie.get("kpaamid")
}
userProfileParam.mbox3rdPartyId= _satellite.getVar("KP AAM ID")
userProfileParam.Seg516e = _satellite.getVar("AT: GMW PNP Flag")
userProfileParam.Seg126v = isProxy();
userProfileParam.modval = getModValue() == null ? '': getModValue();
userProfileParam.Seg21 = getProfileAttr(getUserProfile(), "groupId");
userProfileParam.Seg22 = getBookmarkURL();
userProfileParam.Seg24 = getProfileAttr(getUserProfile(), "deploymentId");
userProfileParam.Seg25 = _satellite.getVar("AT: gmw-info has Open Task");
userProfileParam.Seg26 = isOneExchange();

userProfileParam["entitlement-446"] = (function() {
  // TODO: figure out this entitlements thing and do not swallow this error
  try {
    return getUserProfile(true) !== "undefined" ? getUserProfile(true)[446] : false;
  }
  catch (e) {
    return false
  }
})();

var isG = getProfileAttr(getUserProfile(), "isGuarantor")
if (isG) {
  userProfileParam["profile.Seg103v"] = true
}else {
  userProfileParam["profile.Seg103v"] = false
}

return userProfileParam;


function getDualChoiceValue () {
  var hasDualChoice = false;
  var profile = null;
  if (typeof $kp !== "undefined" && typeof $kp.KPUserProfile !== "undefined" && typeof $kp.KPUserProfile.UserProfileClient !== "undefined") {
    if (typeof $kp.KPProxyPicker !== "undefined" && typeof $kp.KPProxyPicker.ProxyPickerClient !== "undefined" && $kp.KPProxyPicker.ProxyPickerClient.isProxySelected()) {
      $.each($kp.KPUserProfile.UserProfileClient.getProxies(), function (index, value) {
        if (window.$kp.KPProxyPicker.ProxyPickerClient.getRelationshipId() == value.relationshipID) {
          if ((typeof value !== "undefined") && value && value.hasDualChoicePlan === "Y") { hasDualChoice = true; }
        }
      });
    } else {
      profile = getUserProfile()
      if (typeof profile !== "undefined" && profile && profile.hasOwnProperty("hasDualChoicePlan") && profile.hasDualChoicePlan === "Y") {
        hasDualChoice = true;
      }
    }
  }
  return hasDualChoice;
}

function getExchangeInfo () {
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.hasOwnProperty("healthInsuranceExchangeInfo") && profile.healthInsuranceExchangeInfo !== "undefined") {
    return true;
  }
  return false;
}

function isOneExchange(){
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.hasOwnProperty("healthInsuranceExchangeInfo") && profile.healthInsuranceExchangeInfo !== "undefined" && profile.healthInsuranceExchangeInfo.groupExchangeId && profile.healthInsuranceExchangeInfo.groupExchangeId.length >0) {
    return true;
  }
  return false;
}

function getGroupIdValue () {
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.groupId === 10460) {
    return true;
  }
  return false;
}

function getSelfFunded () {
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.hasOwnProperty("selfFunded") && profile.selfFunded === "true") {
    return true;
  }
  return false;
}

function isFormerMember () {
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.hasOwnProperty("membershipAccountStatus") && profile.membershipAccountStatus === "TERMINATED") {
    return true;
  }
  return false;
}

function isFirst90Days () {
  var is90Days = false;
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.hasOwnProperty("newMemberEffectiveDate") && profile.newMemberEffectiveDate !== "undefined") {
    var effectiveDate = profile.newMemberEffectiveDate;
    var convertedEffectiveDate = new Date(effectiveDate);
    var currentDate = new Date();
    var timeDifference = currentDate.getTime() - convertedEffectiveDate.getTime();
    var noOfDays = timeDifference / (1000 * 3600 * 24);
    is90Days = noOfDays <= 90;
  }
  return is90Days;
}

function isFirst180Days () {
  var is180Days = false;
  var profile = getUserProfile()
  if ((typeof profile !== "undefined") && profile && profile.hasOwnProperty("newMemberEffectiveDate") && profile.newMemberEffectiveDate !== "undefined") {
    var effectiveDate = profile.newMemberEffectiveDate;
    var convertedEffectiveDate = new Date(effectiveDate);
    var currentDate = new Date();
    var timeDifference = currentDate.getTime() - convertedEffectiveDate.getTime();
    var noOfDays = timeDifference / (1000 * 3600 * 24);
    is180Days = noOfDays <= 180;
  }
  return is180Days;
  //return true;
}

function isProxy() {
  if (typeof $kp.KPProxyPicker !== "undefined" && typeof $kp.KPProxyPicker.ProxyPickerClient !== "undefined" && $kp.KPProxyPicker.ProxyPickerClient.isProxySelected()) {
    return true;
  } else {
    return false;
  }
}

function getModValue() {
  var profile = getUserProfile();
  var modval = 0;
  if ((typeof profile !== "undefined") && profile) {
    modval = profile.guid % 10;
    if (modval==null){modval=''}
    return modval;
  }
  
}

function getBookmarkURL(){
  var historyArray = [];
  var historyLastVisit = '';
  var historyLastButOneVisit = '';
  if (sessionStorage.getItem('pageHistoryForBL') !== null && sessionStorage.getItem('pageHistoryForBL') !== '' && sessionStorage.getItem('pageHistoryForBL') !== undefined){
      historyArray = JSON.parse(sessionStorage.getItem('pageHistoryForBL'));
      if(historyArray.length >= 2){
        historyLastVisit = historyArray[historyArray.length - 1];
        historyLastButOneVisit = historyArray[historyArray.length - 2];
      }

      if ("Consumer Sign On" === historyLastButOneVisit.title || "Sign On" === historyLastButOneVisit.title ){
          _satellite.logger.log("Bookmark url is " +historyLastVisit.url);
          return historyLastVisit.url;

      }else{
           _satellite.logger.log("No bookmark url");
          return '';
      }
          
  }else{
       _satellite.logger.log("No bookmark url");
      return '';
  }
}

}
      }
    },
    "Region of Preference": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "ImpSessionRoP"
      }
    },
    "otp:pageName": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.spa.pageName"
      }
    },
    "dnp_param": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "dnp",
        "caseInsensitive": true
      }
    },
    "UTM_campaign": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "utm_campaign",
        "caseInsensitive": true
      }
    },
    "all:pznSeed": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var seed = localStorage.getItem('pzn_audience_seed');
  if (seed) {
    return seed;
  } else {
    // random number 1-100
    var seed = Math.floor(Math.random() * Math.floor(100));
    localStorage.setItem('pzn_audience_seed', seed);
    return seed
  }
}
      }
    },
    "enrollment: form name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.enrollment.formName"
      }
    },
    "contentid_param": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "contentid",
        "caseInsensitive": true
      }
    },
    "AT: Entitlements": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return $kp && $kp.KPUserProfile.UserProfileClient.getEntitlements()

}
      }
    },
    "user: gender": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.user.segment.gender"
      }
    },
    "campaign: internal": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "intcmp",
        "caseInsensitive": true
      }
    },
    "WTdtype_online": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "content",
        "elementSelector": "Meta[name=\"WT.dtype_online\"]"
      }
    },
    "acaa:notificationsTotal": {
      "defaultValue": "0",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.notifications.total"
      }
    },
    "meta DCSExt gender": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + meta DCSExt gender
var metas = document.getElementsByTagName('meta');
window.mycontent = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.gender") {
      window.mycontent =  metas[i].getAttribute("content");
    }
 }

var rmDashChar = window.mycontent;
if (rmDashChar != "-") {
    return rmDashChar;
}
// - meta DCSExt gender
}
      }
    },
    "pp:proxyRelationshipID": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.proxyRelationshipID"
      }
    },
    "Region of Membership (ROM)": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "region"
      }
    },
    "acaa:careTeamTotal": {
      "defaultValue": "0",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.careTeam.total"
      }
    },
    "all:prodQA": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  if (typeof URLSearchParams === "undefined") {
  /** URLSearchParams polyfill */
  /**
   *
   *
   * @author Jerry Bendy <jerry@icewingcc.com>
   * @licence MIT
   *
   */

  (function (self) {
    'use strict';

    var nativeURLSearchParams = (function () {
        // #41 Fix issue in RN
        try {
          if (self.URLSearchParams && (new self.URLSearchParams('foo=bar')).get('foo') === 'bar') {
            return self.URLSearchParams;
          }
        } catch (e) {}
        return null;
      })(),
      isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({a: 1})).toString() === 'a=1',
      // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
      decodesPlusesCorrectly = nativeURLSearchParams && (new nativeURLSearchParams('s=%2B').get('s') === '+'),
      __URLSearchParams__ = "__URLSearchParams__",
      // Fix bug in Edge which cannot encode ' &' correctly
      encodesAmpersandsCorrectly = nativeURLSearchParams ? (function () {
        var ampersandTest = new nativeURLSearchParams();
        ampersandTest.append('s', ' &');
        return ampersandTest.toString() === 's=+%26';
      })() : true,
      prototype = URLSearchParamsPolyfill.prototype,
      iterable = !!(self.Symbol && self.Symbol.iterator);

    if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
      return;
    }

    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */
    function URLSearchParamsPolyfill (search) {
      search = search || "";

      // support construct object with another URLSearchParams instance
      if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
        search = search.toString();
      }
      this [__URLSearchParams__] = parseToDict(search);
    }

    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.append = function (name, value) {
      appendTo(this [__URLSearchParams__], name, value);
    };

    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */
    prototype['delete'] = function (name) {
      delete this [__URLSearchParams__] [name];
    };

    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */
    prototype.get = function (name) {
      var dict = this [__URLSearchParams__];
      return this.has(name) ? dict[name][0] : null;
    };

    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */
    prototype.getAll = function (name) {
      var dict = this [__URLSearchParams__];
      return this.has(name) ? dict [name].slice(0) : [];
    };

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    prototype.has = function (name) {
      return hasOwnProperty(this [__URLSearchParams__], name);
    };

    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.set = function set (name, value) {
      this [__URLSearchParams__][name] = ['' + value];
    };

    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */
    prototype.toString = function () {
      var dict = this[__URLSearchParams__], query = [], i, key, name, value;
      for (key in dict) {
        name = encode(key);
        for (i = 0, value = dict[key]; i < value.length; i++) {
          query.push(name + '=' + encode(value[i]));
        }
      }
      return query.join('&');
    };

    // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
    var forSureUsePolyfill = !decodesPlusesCorrectly;
    var useProxy = (!forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy);
    /*
     * Apply polifill to global object and append other prototype into it
     */
    Object.defineProperty(self, 'URLSearchParams', {
      value: (useProxy ?
        // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
        new Proxy(nativeURLSearchParams, {
          construct: function (target, args) {
            return new target((new URLSearchParamsPolyfill(args[0]).toString()));
          }
        }) :
        URLSearchParamsPolyfill)
    });

    var USPProto = self.URLSearchParams.prototype;

    USPProto.polyfill = true;

    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */
    USPProto.forEach = USPProto.forEach || function (callback, thisArg) {
      var dict = parseToDict(this.toString());
      Object.getOwnPropertyNames(dict).forEach(function (name) {
        dict[name].forEach(function (value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };

    /**
     * Sort all name-value pairs
     */
    USPProto.sort = USPProto.sort || function () {
      var dict = parseToDict(this.toString()), keys = [], k, i, j;
      for (k in dict) {
        keys.push(k);
      }
      keys.sort();

      for (i = 0; i < keys.length; i++) {
        this['delete'](keys[i]);
      }
      for (i = 0; i < keys.length; i++) {
        var key = keys[i], values = dict[key];
        for (j = 0; j < values.length; j++) {
          this.append(key, values[j]);
        }
      }
    };

    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.keys = USPProto.keys || function () {
      var items = [];
      this.forEach(function (item, name) {
        items.push(name);
      });
      return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.values = USPProto.values || function () {
      var items = [];
      this.forEach(function (item) {
        items.push(item);
      });
      return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.entries = USPProto.entries || function () {
      var items = [];
      this.forEach(function (item, name) {
        items.push([name, item]);
      });
      return makeIterator(items);
    };

    if (iterable) {
      USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    }

    function encode (str) {
      var replace = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+',
        '%00': '\x00'
      };
      return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function (match) {
        return replace[match];
      });
    }

    function decode (str) {
      return str
        .replace(/[ +]/g, '%20')
        .replace(/(%[a-f0-9]{2})+/ig, function (match) {
          return decodeURIComponent(match);
        });
    }

    function makeIterator (arr) {
      var iterator = {
        next: function () {
          var value = arr.shift();
          return {done: value === undefined, value: value};
        }
      };

      if (iterable) {
        iterator[self.Symbol.iterator] = function () {
          return iterator;
        };
      }

      return iterator;
    }

    function parseToDict (search) {
      var dict = {};

      if (typeof search === "object") {
        // if `search` is an array, treat it as a sequence
        if (isArray(search)) {
          for (var i = 0; i < search.length; i++) {
            var item = search[i];
            if (isArray(item) && item.length === 2) {
              appendTo(dict, item[0], item[1]);
            } else {
              throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
            }
          }

        } else {
          for (var key in search) {
            if (search.hasOwnProperty(key)) {
              appendTo(dict, key, search[key]);
            }
          }
        }

      } else {
        // remove first '?'
        if (search.indexOf("?") === 0) {
          search = search.slice(1);
        }

        var pairs = search.split("&");
        for (var j = 0; j < pairs.length; j++) {
          var value = pairs [j],
            index = value.indexOf('=');

          if (-1 < index) {
            appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));

          } else {
            if (value) {
              appendTo(dict, decode(value), '');
            }
          }
        }
      }

      return dict;
    }

    function appendTo (dict, name, value) {
      var val = typeof value === 'string' ? value : (
        value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value)
      );

      // #47 Prevent using `hasOwnProperty` as a property name
      if (hasOwnProperty(dict, name)) {
        dict[name].push(val);
      } else {
        dict[name] = [val];
      }
    }

    function isArray (val) {
      return !!val && '[object Array]' === Object.prototype.toString.call(val);
    }

    function hasOwnProperty (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

  })(typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : this));
}
var isProdQaParam = new URLSearchParams(document.location.search).get("prodQA") === "1"
var isProdQaLocalStorage = window.localStorage.getItem("kp.prodQA") === "1"
var allowedProdDomain = ["healthy.kaiserpermanente.org", "kpov.kaiserpermanente.org"].indexOf(document.domain) > -1
return (allowedProdDomain && (isProdQaParam || isProdQaLocalStorage))


}
      }
    },
    "isSignedOn": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "isSignedOn"
      }
    },
    "fdl:mapFacility": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.map.facility"
      }
    },
    "portal:page name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Portal
try {
    var cid = _satellite.getVar("contentid_param");
    if (typeof cid !== 'undefined') {
      cid = cid.replace(/^.*\/(.*)\.html/, "$1").replace(/_/g, "-");
    }

    function cleanStr(str) {
      return str.
      toLowerCase().replace(/\|/g, ":").
      replace(/\: */g, ":").
      trim();
    }

    function getNav(metaName, defValue) {
      var metas = document.getElementsByTagName('meta');
      for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute("name") == metaName) {
          return metas[i].getAttribute("content").replace(/[;|]/g, ":");
        }
      }
      return defValue;
    }

    function removeDup(name) {
      var parts = name.replace(/\|/g, ":").split(":"),
        n = cleanStr(parts[0]);

      for (var i = 1; i < parts.length; i++) {
        parts[i] = cleanStr(parts[i]);
      }

      for (var i = 1; i < parts.length; i++) {
        if (i < parts.length - 1 && parts[i + 1].startsWith(parts[i]) && (parts[i] !== parts[i + 1])) {} else if ((parts[i] !== parts[i - 1]) && (parts[i] !== 'kaiser permanente')) {
          n += ":" + parts[i];
        }
      }
      n = n.replace(/^:*/, "").replace("medicarenet:medicare", "medicare");
      return n;
    }

    var name = getNav("WT.wsp_bc", ""),
      title = document.title.replace(/ -.*/, ""),
      subNav = getNav("WT.si_n", "");

    /* Removes "Consumer" */
    var pageName = name.split(":");
    if (pageName && pageName[0] == "Consumer") {
      pageName.shift();
      name = pageName.join(":");
    }

    /* Merge Various Sources */
    if (subNav != "") {
      name += ":" + subNav.replace(/.*\:/, "");
    } else {
      name += ":" + title;
    }

    /* Fallback if no values returned */
    if (!title && !subNav) {
      var path = location.pathname.split("/");
      path = path.concat(location.hash.split("/"));
      var pathClean = [];
      var maxNumChars = 40;
      path.forEach(function(element) {
        if (element && element != "#" && element.length > 0 && element.length < maxNumChars) {
          pathClean.push(element);
        }
      });
      name = pathClean.join(":");
    }
    /* Content ID */
    if (typeof cid != 'undefined' && cid != "") {
      name += ":" + cid;
    }



    /* Prepend with site name */
    if (document.location.host.startsWith("m.")) {
      name = "mobile:" + name;
    } else if (document.location.host.endsWith("medicare.kaiserpermanente.org")) {
      name = "medicare:" + name;
    } else if (document.location.host.endsWith("kaiserpermanente.org")) {
      name = "kporg:" + name;
    }

    name = removeDup(name);
    name = name.toLowerCase();

    /* Abbreviates Common Terms */
    name = name.replace(/appointment/gi, 'appt'); //appointment -> appt
    name = name.replace(new RegExp("health & wellness", "gi"), "h&w"); //health & wellness -> health

    return name;
} catch (exp) {
  var docTitle = document.title;
  var titleClean = docTitle.replace(/ - Kaiser Permanente/, "");
  return titleClean.toLowerCase();
}
}
      }
    },
    "data-input-checkbox": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-input-checkbox",
        "elementSelector": "input"
      }
    },
    "acaa:errorCareTeam": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  if(window.digitalData && digitalData.errors && digitalData.errors.length){
    var e = digitalData.errors;
    var result = [];
    for(var i=0; i<e.length; i++){
      if(e[i].component == "careTeam")
        return e[i].code+":"+e[i].message;
    }
  }
}catch(exp){return "";}
}
      }
    },
    "all:geoSetup": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var zipMap = _satellite.getVar("all:zipCodeState");
var minZip = null;
var maxZip = null;

window.document.addEventListener('geo_ready', function(e) { 
   for (var a in zipMap) { 
     minZip = parseInt(a.Zip_Min);
     maxZip = parseInt(a.Zip_Max);
     pGeo = parseInt(window._profile.geo.zip);
     if ((pGeo <= minZip) || (pGeo >= maxZip)) { 
       window._profile.inf_state = a.State_Name;
       _satellite.setVar("infRegion", window._profile.inf_state);
     }
   }
})
}
      }
    },
    "Flickerlessly/SCAL Confirmation Page": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //This is for SCAL Appointment KPATH Confirmation page - START HERE
var data = [];

data.push({
  selector: '[data-analytics-meta]',
  action : function(el) {
      if (window.s&&window.s.pageName) {
        if(window.s.pageName=="kporg:secure:appointments:confirmation" || window.s.pageName=="kporg:secure:appointments:confirmation.external" || window.s.pageName=="kporg:secure:appointments:multibooking:confirmation.external" || window.s.pageName=="kporg:secure:appointments:multibooking:confirmation"){
          if (typeof _satellite.analyticsMutationEvent !== "undefined") {
            _satellite.analyticsMutationEvent(el);
          }
        }
      }
	}
});
//This is for SCAL Appointment KPATH Confirmation page - ENDS HERE

// DO NOT EDIT
w = window;

Flickerlessly=window.Flickerlessly||{},!function(t){"use strict";var e=function(t,e,n,o){var a="atNodeInserted"+t,i=[],s=["","-moz-","-webkit-","-ms-","-o-"];s.forEach(function(t,e){i.push("@"+t+"keyframes "+a+" {from {opacity:0.99} to {opacity:1}}")}),i.push(e+"{"),s.forEach(function(t,e){i.push(t+"animation-duration:0.001s;"+t+"animation-name:"+a+";")}),i.push("}");var r=document.getElementsByTagName("head")[0];if(r){var c=document.createElement("style");c.setAttribute("type","text/css"),c.styleSheet?c.styleSheet.cssText=i.join("\n"):c.appendChild(document.createTextNode(i.join("\n"))),r.insertBefore(c,r.firstChild)}var l=function(t){if(t.animationName===a&&"object"==typeof t.target){var i=o===!0||o===!1&&null===t.target.getAttribute("data-flk-success");window.console&&console.info("('"+e+"') ready! Execute: "+i,t.target),"function"==typeof n&&i?(n(t.target),t.target.setAttribute("data-flk-success",a)):window.console&&console.error("Cannot Callback",i,n)}};["animationstart","MSAnimationStart","webkitAnimationStart"].forEach(function(t,e){document.addEventListener(t,l,!1)})},n=Math.floor(1e3*Math.random()+1);t.onReady=function(){for(var t=0;t<arguments.length;t++){var o=arguments[t],a=o.selector,i=o.success||null,s=o.persist||!1;e(n++,a,i,s)}}}(Flickerlessly);
var clickData = [];
for(var i=0; i<data.length; i++){
 var obj = data[i];
 (function(o) {
  clickData.push({selector:o.selector, success:function(el){
   if(typeof o.action==='function') {
    o.action(el);
   } else {
   
    el.onmousedown = function() {
    	//window.console&&console.log('clicked ',o.value,el)
		window.adobe.target.trackEvent({
            "mbox": "mboxClickTrack",
            "params": {
                "clicked" : o.value
                } 
                
            });
    }
  }}});
}(obj));
}

Flickerlessly.onReady.apply(this,clickData);
}
      }
    },
    "providerDetail:pcp": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.providerDetail.pcp"
      }
    },
    "global params - group_id": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Pull from data layer (AEM Pages)
if(window.digitalData)
  if(digitalData.global)
    if(digitalData.global.group_id)
      return digitalData.global.group_id;
      
//Pull from META tag (Portal pages)      
var metas = document.getElementsByTagName('meta');
var value = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.group_id") {
      value =  metas[i].getAttribute("content");
    }
 }

 if(value != "-")
 return value;
}
      }
    },
    "campaign: external": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  function getQueryParam(queryParams,paramName){
    console.log("campeign external getQueryParam", paramName);
    if(queryParams && queryParams[paramName]){
       console.log("campeign external queryParams[paramName]", queryParams[paramName]);
      return queryParams[paramName];
    }else{
      return "";
    }
  }
  
  function cleanURL(uri){
    let decoded = uri;
    try{
    decoded = decodeURIComponent(uri);
    }catch(e){
    }
    return decoded.replace("%","empty");
  }
  
  var currentCleanURI = cleanURL(document.location.href);
  currentCleanURI = currentCleanURI.includes("#") ? currentCleanURI.split('#')[1] : currentCleanURI;
  var queryParams = currentCleanURI.includes("?") ? Object.fromEntries(new URLSearchParams(currentCleanURI.split('?')[1]))  : null;
  console.log("campeign external queryParams", queryParams);
  
  var mcId = _satellite.getVar("WT.mc_id_param") || getQueryParam(queryParams,"WT.mc_id") ;
  if( mcId == null){
    mcId = _satellite.getVar("wt_mc_id") ? _satellite.getVar("wt_mc_id")  : getQueryParam(queryParams,"wt_mc_id") ;
  }
  
  
  var seg1 = _satellite.getVar("WT.seg_1_param") || getQueryParam(queryParams,"WT.seg_1") ;
  if( seg1 == null){
    seg1 = _satellite.getVar("wt_seg_1")  ? _satellite.getVar("wt_seg_1")  : getQueryParam(queryParams,"wt_seg_1") ;
  }
  
  var seg2 = _satellite.getVar("WT.seg_2_param") || getQueryParam(queryParams,"WT.seg_2") ;
  if( seg2 == null){
    seg2 = _satellite.getVar("wt_seg_2")  ? _satellite.getVar("wt_seg_2")  : getQueryParam(queryParams,"wt_seg_2") ;
  }
  
  var tsrc = _satellite.getVar("WT.tsrc_param") || getQueryParam(queryParams,"WT.tsrc") ;
  if( tsrc == null){
    tsrc = _satellite.getVar("wt_tsrc")  ? _satellite.getVar("wt_tsrc") : getQueryParam(queryParams,"wt_tsrc") ;
  }
  
  var cid_param = _satellite.getVar("cid_param")  ? _satellite.getVar("cid_param") : getQueryParam(queryParams,"cid") ;
  
  var UTM_source = _satellite.getVar("UTM_source")  ? _satellite.getVar("UTM_source") : getQueryParam(queryParams,"UTM_source") ;
  
  var UTM_campaign = _satellite.getVar("UTM_campaign")  ? _satellite.getVar("UTM_campaign") : getQueryParam(queryParams,"UTM_campaign") ;
  
  var GCN_param = _satellite.getVar("GCN_param")  ? _satellite.getVar("GCN_param") : getQueryParam(queryParams,"GCN") ;
  
  var cmp = mcId + ":" + seg1 + ":" + seg2 + ":" + tsrc + ":" + cid_param + ":" + UTM_source + ":" + UTM_campaign + ":" + GCN_param;
  
  console.log("campeign external cmp", cmp);

  if(cmp != ":::::::") {
    return cmp;
  }
}catch(exp){
  _satellite.logger.log("campaign: external data element error",exp);
}
}
      }
    },
    "data-input-field": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-input-field",
        "elementSelector": "input"
      }
    },
    "funnel:step": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.funnel.step"
      }
    },
    "LoggedIn": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // Custom code to blank out v55 if user is viewing content through webview through mobile app
if(sessionStorage.getItem("s_custom_rsid")){
 return ""; 
}

if(location.href.indexOf("adobe_mc=") >-1){
 return ""; 
}

// Set value of logged in for AEM users

else{
  return _satellite.getVar("isSignedOn") ? "Logged In" : "Logged Out"
}
}
      }
    },
    "fdl:filterValue": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.filter.value"
      }
    },
    "AT : ValidGroupProvider": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
      let validGroupDataProvider = { 
        name: "ValidGroupDataProvider", 
        version: "1.0.0", 
        provider: function(callback) {
            let isValidGroup = false;
            let groupId = $kp.KPUserProfile.UserProfileClient.getUser().groupId;
            let apiURL = 'https://apims.kaiserpermanente.org/kp/care/kpd/mnet-bff-enrollment/v1/groups?lob=JKP&region=' + $kp.KPUserProfile.UserProfileClient.getUser().region;
            if (groupId != 0) {
                $.ajax({
                    url: apiURL,
                    success: function(data) {
                        let responseData = data.responseData;
                        for (let result in responseData) {
                            if (parseInt(responseData[result].pid) === groupId) {
                                isValidGroup = true;
                                break;
                            }
                        }
                        callback(null, { Seg23: isValidGroup});                   
                    },
                    error: function(jqXHR, status) {
                        console.log('Error fetching valid groups: ' + status);
                        callback(status);                             
                    }
                });
            } else {
                callback(null, { Seg23: isValidGroup});
            }     
        }
    }; 
    
    return validGroupDataProvider;
}
      }
    },
    "ContactInfoStatus": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.contactInfoStatus"
      }
    },
    "ls_wt_mc_id": {
      "modulePath": "core/src/lib/dataElements/localStorage.js",
      "settings": {
        "name": "hs-latest-attribution-params?.wt_mc_id"
      }
    },
    "Page Name (Granular)": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{
  
  var domain = window.location.host;
  console.log("page name domain", domain);
  if(domain === "int-choose.kp.org" || domain === "choose.kaiserpermanente.org"){
    var pathName = window.location.pathname.split("/").filter((pathName)=>pathName!=="").join(":");
    var pageName = "choosekp:" + pathName;
    console.log("page name int-choose", pageName)
    return pageName;
  }else if (window.digitalData) {
    if (digitalData.page) {
      if (digitalData.page.pageInfo) {
        var pageName = "";
        pageName = digitalData.page.pageInfo.pageName;
        return pageName;
      }
    }
  }else{
    //Portal
    return _satellite.getVar("portal:page name");
  }
}catch(exp){
  var docTitle = document.title;
  var titleClean = docTitle.replace(/ - Kaiser Permanente/, "");
  return titleClean.toLowerCase();
}



}
      }
    },
    "Sub Section 3 Split": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var val = digitalData.page.category.subCategory3||"";
var arr = val.split(':');
var len = arr.length-1;

return arr[len];
}
      }
    },
    "Sub Section 5 Split": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var val = digitalData.page.category.subCategory5||"";
var arr = val.split(':');
var len = arr.length-1;

return arr[len];
}
      }
    },
    "Page URL": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/pageInfo.js",
      "settings": {
        "attribute": "url"
      }
    },
    "fdl:filterCount": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.filter.count"
      }
    },
    "acaa:careTeamDisplayed": {
      "defaultValue": "0",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.careTeam.displayed"
      }
    },
    "MemberIDStatusStatus": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.memeberIdStatus"
      }
    },
    "fdl:searchPlanType": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.planType"
      }
    },
    "mcc:planType": {
      "defaultValue": "",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  var pt = "";
if(typeof digitalData.mcc != "undefined")pt = digitalData.mcc.planType;

if(pt){
  var newArr = [];
  var tierArr = pt.split('tier'); // split value at each 'tier' value within string
  tierArr.shift(); // first position is always blank so can be removed

  for(var tier in tierArr){
    var arr = tierArr[tier].split('|'); // split each tier into different values
    var tierNumInit = arr[0].split(']'); // split first value within tier to begin finding the tier number
    var tierNum = tierNumInit[0].replace('[',''); // replace opening bracket to get tier number
    tierArr[tier] = tierArr[tier].replace('[' + tierNum + ']',""); // remove tier value (will be added back in later)

    var tierVals = tierArr[tier].split('_'); // split each tier into the different tier values
    for(var val in tierVals){
      newArr.push("t" + tierNum + "_" + tierVals[val]); // add "tier" + the tier number (found above) to each of the values
    }
  }
  
  for(var num in newArr){
    newArr[num] = newArr[num].replace(/\|/g,'_');
  }

  var newVal = newArr.join('|');

  // shorten values
  newVal = newVal.toLowerCase()
  .replace(/out of pocket/g,'oop')
  .replace(/deductible/g,'ded')
  .replace(/account/g,'acct')
  .replace(/patient/g,'pat')
  .replace(/\.0\|/g,'|')
  .replace(/\.0_/g,'_')
  .replace(/t1/g,'mcc: kp provider')
  .replace(/t2/g,'mcc: participating provider')
  .replace(/t3/g,'mcc: non participating provider');

  if(newVal.slice(-2) == ".0")newVal = newVal.substring(0,newVal.length - 2);
  
  //send data
  return newVal;
}
}
      }
    },
    "GMO (OB)": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "session",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return sessionStorage.getItem('GMO_OB_cookie');
}
      }
    },
    "AT : mboxDisable": {
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "mboxDisable",
        "caseInsensitive": true
      }
    },
    "global params - gender": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Pull from data layer (AEM Pages)
if(window.digitalData)
  if(digitalData.global)
    if(digitalData.global.gender)
      return digitalData.global.gender;
      
//Pull from META tag (Portal pages)      
var metas = document.getElementsByTagName('meta');
var value = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.gender") {
      value =  metas[i].getAttribute("content");
    }
 }

 if(value != "-")
 return value;
}
      }
    },
    "mnet_pageName": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

if (typeof digitalData != "undefined" && typeof digitalData.page != "undefined" && typeof digitalData.page.category != "undefined" ){
 return digitalData.page.category.pageNameGranular;
}
}catch(exp){return "";}
}
      }
    },
    "WT.tsrc_param": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "WT.tsrc",
        "caseInsensitive": true
      }
    },
    "Language": {
      "defaultValue": "",
      "forceLowerCase": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/cookie.js",
      "settings": {
        "name": "kpLanguage"
      }
    },
    "AT:RegisterAAEvent": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return [
    {'identifier':'newMember','segment':'param.Seg5 !== undefined && param.Seg5 === true'},
    {'identifier':'formerMember','segment':'param.Seg440e !== undefined && param.Seg440e === true'},
    {'identifier':'gmw','segment':'param.Seg516e !== undefined && param.Seg516e === true'},
    {'identifier':'projectIron','segment':'param.Seg517e !== undefined && param.Seg517e === true'},
    {'identifier':'pcp-status-no','segment':'param.Seg528e !== undefined && param.Seg528e === "no"'},
    ];
   
}
      }
    },
    "global params - region_of_membership": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  //Pull from data layer (AEM Pages)
if(window.digitalData)
  if(digitalData.global)
    if(digitalData.global.region_of_membership)
      return digitalData.global.region_of_membership;
      
//Pull from META tag (Portal pages)      
var metas = document.getElementsByTagName('meta');
var value = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.region_of_membership") {
      value =  metas[i].getAttribute("content");
    }
 }

 if(value != "-")
 return value;
}
      }
    },
    "SiteSpect - ssCampaignAssigned": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "window.ssWattsData.ssVisit.ssCampaignAssigned"
      }
    },
    "global params - sub_group_id": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.sub_group_id"
      }
    },
    "funnel:name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.funnel.name"
      }
    },
    "s_loggedInStatus": {
      "defaultValue": "false",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/sessionStorage.js",
      "settings": {
        "name": "s_loggedInStatus"
      }
    },
    "advplus": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  try{

if (typeof digitalData != "undefined" && typeof digitalData.global != "undefined" ){
 return digitalData.global.advplus;
}
}catch(exp){return "";}
}
      }
    },
    "data-input-radio": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-input-radio",
        "elementSelector": "input"
      }
    },
    "fdl:searchType": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.search.type"
      }
    },
    "meta DCSExt age": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  // + meta DCSExt age
var metas = document.getElementsByTagName('meta');
window.mycontent = "";
 for (var i=0; i<metas.length; i++) {
    if (metas[i].getAttribute("name") == "DCSExt.age") {
      window.mycontent =  metas[i].getAttribute("content");
    }
 }


var rmDashChar = window.mycontent;
if (rmDashChar != "-") {
    return rmDashChar;
}
// - meta DCSExt age
}
      }
    },
    "ac:clickCall": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.ac.clickCall"
      }
    },
    "data-feature(div)": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "data-feature",
        "elementSelector": "div"
      }
    },
    "Page Name": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
   console.log("page name data element callk")
try{
//AEM
  var domain = window.location.host;
  console.log("page name domain", domain);
  if(domain === "int-choose.kp.org"){
    var pathName = document.title;
    var pageName = "choosekp:" + pathName;
    console.log("page name int-choose", pageName)
    return pageName;
  }else if(domain === "int-ccp.kp.org" || domain === "business.kaiserpermanente.org"){
    var pageName = digitalData.page.pageInfo.pageName;
    console.log("page name int-ccp", pageName)
    return pageName;
  }else if (window.digitalData) {
    console.log("find window digital data in if block", digitalData )
  if (digitalData.page) {
    if (digitalData.page.pageInfo) {
      var pageName = "";
      var primaryCat = "";
      var spliceIndex = 1;
      pageName = digitalData.page.pageInfo.pageName;
      if(digitalData.page.category.primaryCategory !== "kporg"){
        primaryCat = digitalData.page.category.primaryCategory + ':';
        pageName = pageName.replace(primaryCat,'');
        spliceIndex = 0;
      }

      //Remove Language & Region - this is included in Page Name (granular)
      pageName = pageName.split(":");
      if (pageName.length >= 3) {
        pageName.splice(spliceIndex, 2);
        if (pageName.length == 1) {
          pageName.push("home");
        }
        pageName = pageName.join(":");
        if(digitalData.page.category.primaryCategory !== "kporg"){
          pageName = primaryCat + pageName;
        }
        return pageName;
      }
    }
  }
  
}else{
  console.log("can not find window digital data, comes in else block")
  var pageURL = document.URL.split('?')[0];
    console.log("else block pageURL",pageURL);

if (pageURL.indexOf('wa.')>-1){
  pageURL = pageURL.split('wa.')[1];
}
 //if (pageURL.indexOf('wa-')>-1) { 
  //pageURL = pageURL.split('wa-')[1];
//}
 console.log("else block pageURL wa ",pageURL);
pageURL = pageURL.replace("-dev","").replace("-qa","").replace("dev.","").replace("qa.","");
console.log("else block pageURL dev qa ",pageURL);
var pageName = "";//document.title.toLowerCase().replace(" | kaiser permanente washington","").replace("kaiser permanente - ","").replace("&","and");
console.log('pageURL in data element',pageURL);
switch (pageURL.toLowerCase()) {
  case "member2.kaiserpermanente.org/mychart/inside.asp":
    if (pageName == "home") pageName = "mychart:welcome page";
    else pageName = "mychart:" + pageName;
    break;
  case "member.kaiserpermanente.org/home/":
    pageName = "secure member home page";
    break;
  case "kaiserpermanente.org/":
    pageName = "public home page";
    break;
  case "member2.kaiserpermanente.org/mychart/messaging/review":
    pageName = "message center";
    break;
  case "member2.kaiserpermanente.org/mychart/clinical/testresults":
    pageName = "test results";
    break;
  case "member2.kaiserpermanente.org/mychart/visits/visitslist":
    pageName = "appointments and visits";
    break;
  case "member2.kaiserpermanente.org/mychart/clinical/medications/list":
    pageName = "medications";
    break;
  case "member2.kaiserpermanente.org/mychart/visits/visitdetails":
    pageName = "appointment details";
    break;
  case "member.kaiserpermanente.org/home/account/register":
    pageName = "register for personal online services";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/summary":
    pageName = "billing summary";
    break;
  case "member2.kaiserpermanente.org/mychart/scheduling":
    pageName = "schedule an appointment";
    break;
  case "member2.kaiserpermanente.org/mychart/echeckin":
    pageName = "echeck-in";
    break;
  case "member2.kaiserpermanente.org/mychart/symptomchecker/selftriage/load":
    pageName = "e-visit";
    break;
  case "member.kaiserpermanente.org/html/member/secure/eob":
    pageName = "find an explanation of benefits statement";
    break;
  case "member2.kaiserpermanente.org/mychart/questionnaire/mychartquestionnaire/questionnaires/":
    pageName = "questionnaires";
    break;
  case "member2.kaiserpermanente.org/mychart/symptomchecker":
    pageName = "e-visit";
    break;
  case "member.kaiserpermanente.org/html/member/secure/acct-prefs":
    pageName = "account and preferences";
    break;
  case "member2.kaiserpermanente.org/mychart/visits":
    pageName = "appointments and visits";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/payment/makepayment":
    pageName = "account payment";
    break;
  case "member2.kaiserpermanente.org/mychart/healthadvisories/":
    pageName = "routine care reminders";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/details":
    pageName = "billing account details";
    break;
  case "member.kaiserpermanente.org/html/member/secure/apps/coverage-documents":
    pageName = "your health coverage index";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/prevbalpayment/showpaymentresults":
    pageName = "payment processed";
    break;
  case "member.kaiserpermanente.org/html/public/get-care":
    pageName = "get the best care";
    break;
  case "member.kaiserpermanente.org/home/guided-care/category/6":
    pageName = "all care options";
    break;
  case "member2.kaiserpermanente.org/mychart/documents":
    pageName = "document center";
    break;
  case "member.kaiserpermanente.org/html/member/secure/apps/benefit-usage-status":
    pageName = "benefits usage status - search";
    break;
  case "member.kaiserpermanente.org/html/member/secure/messages":
    pageName = "message center";
    break;
  case "member2.kaiserpermanente.org/mychart/clinical/immunizations":
    pageName = "immunizations";
    break;
  case "member2.kaiserpermanente.org/mychart/visits/cancel":
    pageName = "cancel appointment";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/payment":
    pageName = "billing statements and payment";
    break;
  case "member.kaiserpermanente.org/html/member/forms":
    pageName = "email member services";
    break;
  case "member.kaiserpermanente.org/html/member/secure/welcome":
    pageName = "success, you're registered";
    break;
  case "member.kaiserpermanente.org/html/public/pharmacy/mail-order":
    pageName = "mail order pharmacy services";
    break;
  case "member.kaiserpermanente.org/html/public/specialties":
    pageName = "specialists and specialty care";
    break;
  case "member2.kaiserpermanente.org/mychart/clinical/healthissues":
    pageName = "health conditions";
    break;
  case "member.kaiserpermanente.org/home/health-action-plan":
    pageName = "health action plan";
    break;
  case "member.kaiserpermanente.org/home/guided-care/category/8":
    pageName = "access pharmacy services";
    break;
  case "member.kaiserpermanente.org/html/public/pharmacy":
    pageName = "pharmacy services";
    break;
  case "member.kaiserpermanente.org/html/public/member-services":
    pageName = "member services";
    break;
  case "member.kaiserpermanente.org/html/public/locations":
    pageName = "hours and locations";
    break;
  case "member2.kaiserpermanente.org/mychart/documents/downloadmyrecord":
    pageName = "visit records";
    break;
  case "member.kaiserpermanente.org/home/guided-care/category/7":
    pageName = "contact member services";
    break;
  case "member.kaiserpermanente.org/contact-prefs/eob/paperless":
    pageName = "communication preferences for eob";
    break;
  case "member2.kaiserpermanente.org/mychart/preferences":
    pageName = "notification settings";
    break;
  case "member.kaiserpermanente.org/home/guided-care/category/5":
    pageName = "new health concern";
    break;
  case "member2.kaiserpermanente.org/mychart/community/manage":
    pageName = "connect other health records";
    break;
  case "member2.kaiserpermanente.org/mychart/questionnaire/mychartquestionnaire/askfrompatientinitiated":
    pageName = "questionnaire";
    break;
  case "member.kaiserpermanente.org/html/public/cost-estimator":
    pageName = "estimate costs";
    break;
  case "member2.kaiserpermanente.org/mychart/documents/released":
    pageName = "requested records";
    break;
  case "member2.kaiserpermanente.org/mychart/questionnaire/mychartquestionnaire/askfrommessage":
    pageName = "questionnaire";
    break;
  case "member.kaiserpermanente.org/home/guided-care/category/4":
    pageName = "ongoing health concern";
    break;
  case "member.kaiserpermanente.org/html/member/secure/provider-select":
    pageName = "choose doctor";
    break;
  case "member.kaiserpermanente.org/html/public/services":
    pageName = "health care services";
    break;
  case "member2.kaiserpermanente.org/mychart/shareeverywhere/generatecode":
    pageName = "share my health record";
    break;
  case "member.kaiserpermanente.org/html/public/services/parental-access":
    pageName = "parental access to children's online records";
    break;
  case "member.kaiserpermanente.org/html/member/secure/apps/benefit-usage-status/":
    pageName = "benefits usage status - search";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/mental-health/mental-health-wellness":
    pageName = "mental health and wellnes";
    break;
  case "member.kaiserpermanente.org/forms/member/lab-results-option":
    pageName = "lab results option";
    break;
  case "member2.kaiserpermanente.org/mychart/clinical/allergies":
    pageName = "allergies";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/reimburse":
    pageName = "submit claims for reimbursement";
    break;
  case "member.kaiserpermanente.org/html/public/fad":
    pageName = "find a doctor";
    break;
  case "member2.kaiserpermanente.org/mychart/clinical/medications/":
    pageName = "medications";
    break;
  case "member2.kaiserpermanente.org/mychart/symptomchecker/history":
    pageName = "view past e-visits";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/change-status":
    pageName = "changing your status";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/visitpayment/loadpaymentamounts":
    pageName = "payment";
    break;
  case "member.kaiserpermanente.org/html/member/secure/mental-health":
    pageName = "mental health and emotional wellness apps";
    break;
  case "member2.kaiserpermanente.org/mychart/questionnaire/mychartquestionnaire/questionnaires":
    pageName = "questionnaires";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/visitpayment/showpaymentresults":
    pageName = "visit payment";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/forms":
    pageName = "kaiser permanente washington forms";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/appeal":
    pageName = "coverage and claims appeals";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/records":
    pageName = "transfer or get copies of medical records";
    break;
  case "member.kaiserpermanente.org/html/public/pharmacy/drug-formulary":
    pageName = "drug formulary";
    break;
  case "member.kaiserpermanente.org/html/public/services/urgent-care":
    pageName = "emergency and urgent care";
    break;
  case "member.kaiserpermanente.org/html/public/services/consulting-nurse":
    pageName = "consulting nurse service";
    break;
  case "member.kaiserpermanente.org/home/welcome":
    pageName = "success you are registered";
    break;
  case "member.kaiserpermanente.org/html/public/locations/capitol-hill":
    pageName = "capitol hill campus";
    break;
  case "member.kaiserpermanente.org/html/public/member-guide/perks":
    pageName = "healthy discounts and extras";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/mental-health":
    pageName = "mental health";
    break;
  case "member2.kaiserpermanente.org/mychart/billing/prevbalpayment/showpaymenterror":
    pageName = "payment failed";
    break;
  case "member.kaiserpermanente.org/html/public/services/same-day-delivery":
    pageName = "same day delivery faqs";
    break;
  case "member.kaiserpermanente.org/html/member/forms/benefits-coverage":
    pageName = "benefits and coverage";
    break;
  case "member.kaiserpermanente.org/html/public/customer-service/patient-financial-responsibility":
    pageName = "patient financial responsibility";
    break;
  case "member.kaiserpermanente.org/html/member/forms/other-questions":
    pageName = "questions and comments";
    break;
  case "member.kaiserpermanente.org/html/member/forms/billing":
    pageName = "medical and pharmacy bills";
    break;
  case "member.kaiserpermanente.org/html/public/locations/bellevue":
    pageName = "bellevue medical center";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/eye-care":
    pageName = "eye care services";
    break;
  case "member.kaiserpermanente.org/html/member/forms/contact-information-change":
    pageName = "update your contact information";
    break;
  case "member.kaiserpermanente.org/html/public/locations/olympia":
    pageName = "olympia medical center";
    break;
  case "member2.kaiserpermanente.org/mychart/advancedcareplanning/caredecision/index":
    pageName = "life care planning";
    break;
  case "member2.kaiserpermanente.org/mychart/authentication/oauth/review":
    pageName = "manage my linked apps and devices";
    break;
  case "member.kaiserpermanente.org/html/member/secure/choose-healthy":
    pageName = "choosehealthyâ„¢ fitness program";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/dermatology":
    pageName = "dermatology â€“ our services and more ";
    break;
  case "member.kaiserpermanente.org/html/member/forms/other-questions/":
    pageName = "questions and comments";
    break;
  case "member2.kaiserpermanente.org/mychart/visits/cancel/requestcancel":
    pageName = "appointment cancellation request";
    break;
  case "member.kaiserpermanente.org/html/member/forms/appeals":
    pageName = "request a coverage decision appeal";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/women":
    pageName = "womens health";
    break;
  case "member2.kaiserpermanente.org/mychart/documents/":
    pageName = "document center";
    break;
  case "member.kaiserpermanente.org/html/member/forms/benefits-coverage/":
    pageName = "benefits and coverage";
    break;
  case "member.kaiserpermanente.org/html/public/locations/everett":
    pageName = "everett medical center";
    break;
  case "member.kaiserpermanente.org/html/member/forms/contact-information-change/":
    pageName = "update your contact information";
    break;
  case "member.kaiserpermanente.org/html/public/health-plans/hospital-charges":
    pageName = "standard hospital charges in washington";
    break;
  case "member.kaiserpermanente.org/html/member/forms/website-help":
    pageName = "website feedback and support";
    break;
  case "member.kaiserpermanente.org/html/member/forms/website-help/":
    pageName = "website feedback and support";
    break;
  case "member.kaiserpermanente.org/html/public/locations/tacoma":
    pageName = "tacoma medical center";
    break;
  case "member.kaiserpermanente.org/html/member/forms/request-id-cards":
    pageName = "request member id cards";
    break;
  case "member.kaiserpermanente.org/html/public/services/traveling":
    pageName = "care when you're traveling";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/chiropractic":
    pageName = "chiropractic care";
    break;
  case "member.kaiserpermanente.org/html/member/forms/billing/":
    pageName = "medical and pharmacy bills ";
    break;
  case "member.kaiserpermanente.org/html/public/services/online-services":
    pageName = "personal online services";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/dermatology/locations":
    pageName = "dermatology locations";
    break;
  case "member.kaiserpermanente.org/html/public/member-guide/appointments":
    pageName = "making appointments";
    break;
  case "member.kaiserpermanente.org/html/public/classes/silver-and-fit":
    pageName = "silver and fit program";
    break;
  case "member.kaiserpermanente.org/html/public/locations/mammograms":
    pageName = "washington mammogram locations";
    break;
  case "member.kaiserpermanente.org/html/public/services/fitness":
    pageName = "choosehealthy fitness program discounts ";
    break;
  case "member.kaiserpermanente.org/html/public/locations/northgate":
    pageName = "northgate medical center";
    break;
  case "member.kaiserpermanente.org/html/public/member-guide/documents":
    pageName = "important member information";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/mental-health/information":
    pageName = "important mental health treatment information";
    break;
  case "member.kaiserpermanente.org/html/member/forms/request-referral":
    pageName = "referral or authorization questions";
    break;
  case "member.kaiserpermanente.org/html/public/locations/lynnwood":
    pageName = "lynnwood medical center";
    break;
  case "member.kaiserpermanente.org/html/public/specialties/dermatology/care-team":
    pageName = "dermatologist care team";
    break;
  case "member.kaiserpermanente.org/html/member/secure/site-map":
    pageName = "member secure site map";
    break;
  case "member.kaiserpermanente.org/home/guided-care/category/10":
    pageName = "covid-19";
    break;
  case "member.kaiserpermanente.org/html/public/services/audiology":
    pageName = "audiology/hear centers";
    break;
  }
  console.log("else block pageName ",pageName);

  if(pageName !== ""){
    return "kpwa:" + pageName;
  }else{
    //Portal
     console.log("else block portal pageName ",_satellite.getVar("portal:page name"));
  return _satellite.getVar("portal:page name");
  }
}
  
}catch(exp){
  var docTitle = document.title;
  var titleClean = docTitle.replace(/ - Kaiser Permanente/, "");
  return titleClean.toLowerCase();
}
}
      }
    },
    "spa.pageName": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.spa.pageName"
      }
    },
    "Healthwise Entity": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  if (typeof org !== "undefined"){
  if(org.healthwise.document.id) {
    try {
      var healthwise = org.healthwise.document.id+"_"+org.healthwise.config.locale;
      return healthwise;
    }catch (e) {}
  }
}else{
 return null; 
}
}
      }
    },
    "GCN_param": {
      "defaultValue": "",
      "cleanText": true,
      "modulePath": "core/src/lib/dataElements/queryStringParameter.js",
      "settings": {
        "name": "gcn",
        "caseInsensitive": true
      }
    },
    "global params - language": {
      "defaultValue": "",
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.global.language"
      }
    },
    "planYear": {
      "defaultValue": "",
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  
try{

if (typeof digitalData != "undefined" && typeof digitalData.global != "undefined" ){
 return digitalData.global.planYear;
}
}catch(exp){return "";}
}
      }
    },
    "fdl:mapName": {
      "defaultValue": "no input",
      "forceLowerCase": true,
      "cleanText": true,
      "storageDuration": "pageview",
      "modulePath": "core/src/lib/dataElements/javascriptVariable.js",
      "settings": {
        "path": "digitalData.fdl.map.name"
      }
    },
    "search-results-pattern": {
      "modulePath": "core/src/lib/dataElements/domAttribute.js",
      "settings": {
        "elementProperty": "innerHTML",
        "elementSelector": "div#searchResults"
      }
    },
    "Product Type": {
      "modulePath": "core/src/lib/dataElements/customCode.js",
      "settings": {
        "source": function(event) {
  return $kp.KPUserProfile.UserProfileClient.getUser().productType;

}
      }
    }
  },
  "extensions": {
    "qualtrics-website-feedback": {
      "displayName": "Qualtrics Website Feedback",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP3037080b2f514c82a49a8eab77b5a00e/",
      "modules": {
        "qualtrics-website-feedback/src/lib/actions/loadProject.js": {
          "name": "load-project",
          "displayName": "Load Project",
          "script": function(module, exports, require, turbine) {
'use strict';

module.exports = function(settings) {
    try {

        var brandID = settings.brandID;
        var projectID = settings.projectID;
        var strippedProjectID = projectID.replace("_", "").toLowerCase();

        var appendDiv = function() {
            var projectDiv = document.createElement('div');
            projectDiv.id = projectID;
            document.body.appendChild(projectDiv);
        }

        if ("undefined"===typeof window.QSI) {
            window.QSI= {
                clientTypeVariant: 'AdobeLaunch'
            };
        }

        var runCode = function() {
            (function(){
                var CodeInserter = function(rate, type, cookieName, url){
                    this.get = function (name)
                    {
                        var e = name + '=';
                        var ca = document.cookie.split(';');
                        for (var i = 0, ilen = ca.length; i < ilen; i++)
                        {
                            var c = ca[i];
                            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                            if (c.indexOf(e) == 0) {
                                return c.substring(e.length, c.length);
                            }
                        }
                        return null;
                    };
                    this.set = function (name, value)
                    {
                        var expiresString = '', expiresTime;
                        expiresTime = new Date();
                        expiresTime.setTime(expiresTime.getTime() + (7 * 86400000));
                        expiresString = '; expires=' + expiresTime.toGMTString();
                        document.cookie = name + '=' + value + expiresString + '; path=/; ';
                    };      
                    this.check = function ()
                    {
                        var cookieValue = this.get(cookieName);
                        if (!cookieValue)
                        {
                            cookieValue = [type, rate, 0];
                            if (rate != 100)
                            {
                                if (type == 'v') {
                                    rate = (Math.random() >= rate / 100) ? 0 : 100;
                                }
                                cookieValue = [type, rate, 0];
                                this.set(cookieName, cookieValue.join(':'));
                            }
                            else
                                return true;
                        }
                        else
                        {
                            cookieValue = cookieValue.split(':');
                        }
                        var percentage = cookieValue[1];
                        if (percentage == 100) {
                            return true;
                        }
                        switch (cookieValue[0])
                        {
                            case 'v':
                                return false;
                                break;
                            case 'r':
                                var chk = cookieValue[2] % Math.floor(100 / percentage);
                                cookieValue[2]++;
                                this.set(cookieName, cookieValue.join(':'));
                                return !chk;
                                break;
                        }
                        return true;
                    };
                    this.go = function ()
                    {
                        if (!this.check()) {
                            return;
                        }
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.src = url;
                        if (document.body) {
                            document.body.appendChild(script);
                        }
                    };
                };
                try {
                    var codeInserter = new CodeInserter(100, "r", "QSI_S_" + projectID, "https://" + strippedProjectID + "-" + brandID + ".siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=" + projectID);
                    codeInserter.go()
                } catch (e) {}
            })();
        }

        if (brandID && projectID &&strippedProjectID) {
            appendDiv();
            runCode();
            
            turbine.logger.log("Loaded Site Intercept Project: " + projectID);
        }
    } catch (e) {
        turbine.logger.error("Could not load Intercept Project: " + e);
    }
};
          }

        }
      }
    },
    "core": {
      "displayName": "Core",
      "hostedLibFilesBaseUrl": "https://assets.adobedtm.com/extensions/EP1fdd2a6ec2ae468fb1d2cac08df65f83/",
      "modules": {
        "core/src/lib/dataElements/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * The custom data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.source The function that should be called which will return a value.
 * @param {string} event The event (if any) that triggered the evaluation of the data element.
 * @returns {string}
 */
module.exports = function (settings, event) {
  return settings.source(event);
};

          }

        },
        "core/src/lib/dataElements/javascriptVariable.js": {
          "name": "javascript-variable",
          "displayName": "JavaScript Variable",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';
var getObjectProperty = require('../helpers/getObjectProperty.js');

/**
 * The variable data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.path The global path to the variable holding the data element value.
 * @returns {string}
 */
module.exports = function (settings) {
  return getObjectProperty(window, settings.path);
};

          }

        },
        "core/src/lib/dataElements/domAttribute.js": {
          "name": "dom-attribute",
          "displayName": "DOM Attribute",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * The dom data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.elementSelector The CSS selector for a DOM element.
 * @param {string} settings.elementProperty The name of the property or attribute of the DOM
 * element.
 * @returns {string}
 */
module.exports = function (settings) {
  var element = document.querySelector(settings.elementSelector);

  if (element) {
    var property = settings.elementProperty;

    if (property === 'text') {
      return element.innerText || element.textContent;
    } else if (property in element) {
      return element[property];
    } else {
      return element.getAttribute ? element.getAttribute(property) : undefined;
    }
  }
};

          }

        },
        "core/src/lib/dataElements/queryStringParameter.js": {
          "name": "query-string-parameter",
          "displayName": "Query String Parameter",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');
var queryString = require('@adobe/reactor-query-string');

/**
 * The query string parameter data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.name The query string parameter name.
 * @param {string} [settings.caseInsensitive] Whether casing should be ignored.
 * @returns {string}
 */
module.exports = function (settings) {
  var queryParams = queryString.parse(window.location.search);

  if (settings.caseInsensitive) {
    var lowerCaseName = settings.name.toLowerCase();
    var keys = Object.keys(queryParams);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (key.toLowerCase() === lowerCaseName) {
        return queryParams[key];
      }
    }
  } else {
    return queryParams[settings.name];
  }
};

          }

        },
        "core/src/lib/dataElements/cookie.js": {
          "name": "cookie",
          "displayName": "Cookie",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var cookie = require('@adobe/reactor-cookie');

/**
 * The cookie data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.name The name of the cookie for which a value should be retrieved.
 * @returns {string}
 */
module.exports = function (settings) {
  return cookie.get(settings.name);
};

          }

        },
        "core/src/lib/dataElements/sessionStorage.js": {
          "name": "session-storage",
          "displayName": "Session Storage",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');

/**
 * The session storage data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.name The name of the session storage item for which a value should be
 * retrieved.
 * @returns {string}
 */
module.exports = function (settings) {
  // When session storage is disabled on Safari, the mere act of referencing window.sessionStorage
  // throws an error. For this reason, referencing window.sessionStorage without being inside
  // a try-catch should be avoided.
  try {
    return window.sessionStorage.getItem(settings.name);
  } catch (e) {
    return null;
  }
};

          }

        },
        "core/src/lib/dataElements/constant.js": {
          "name": "constant",
          "displayName": "Constant",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * The cookie data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.value The constant value that should be returned.
 * @returns {string}
 */

module.exports = function (settings) {
  return settings.value;
};

          }

        },
        "core/src/lib/dataElements/localStorage.js": {
          "name": "local-storage",
          "displayName": "Local Storage",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var window = require('@adobe/reactor-window');

/**
 * The local storage data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.name The name of the local storage item for which a value should be
 * retrieved.
 * @returns {string}
 */
module.exports = function (settings) {
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try {
    return window.localStorage.getItem(settings.name);
  } catch (e) {
    return null;
  }
};

          }

        },
        "core/src/lib/dataElements/pageInfo.js": {
          "name": "page-info",
          "displayName": "Page Info",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');

/**
 * The page info data element.
 * @param {Object} settings The data element settings object.
 * @param {string} settings.attribute The attribute that should be returned.
 * @returns {string}
 */
module.exports = function (settings) {
  switch (settings.attribute) {
    case 'url':
      return document.location.href;
    case 'hostname':
      return document.location.hostname;
    case 'pathname':
      return document.location.pathname;
    case 'protocol':
      return document.location.protocol;
    case 'referrer':
      return document.referrer;
    case 'title':
      return document.title;
  }
};

          }

        },
        "core/src/lib/events/pageBottom.js": {
          "name": "page-bottom",
          "displayName": "Page Bottom",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

/**
 * Page bottom event. This event occurs as soon as the user calls _satellite.pageBottom() (which is
 * supposed to be at the bottom of the page).
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  pageLifecycleEvents.registerPageBottomTrigger(trigger);
};

          }

        },
        "core/src/lib/conditions/valueComparison.js": {
          "name": "value-comparison",
          "displayName": "Value Comparison",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * (c) 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

/*eslint eqeqeq:0*/
'use strict';

var isString = require('../helpers/stringAndNumberUtils').isString;
var isNumber = require('../helpers/stringAndNumberUtils').isNumber;
var castToStringIfNumber =
  require('../helpers/stringAndNumberUtils').castToStringIfNumber;
var castToNumberIfString =
  require('../helpers/stringAndNumberUtils').castToNumberIfString;

var updateCase = function (operand, caseInsensitive) {
  return caseInsensitive && isString(operand) ? operand.toLowerCase() : operand;
};

var guardStringCompare = function (compare) {
  return function (leftOperand, rightOperand, caseInsensitive) {
    leftOperand = castToStringIfNumber(leftOperand);
    rightOperand = castToStringIfNumber(rightOperand);

    return (
      isString(leftOperand) &&
      isString(rightOperand) &&
      compare(leftOperand, rightOperand, caseInsensitive)
    );
  };
};

var guardNumberCompare = function (compare) {
  return function (leftOperand, rightOperand) {
    leftOperand = castToNumberIfString(leftOperand);
    rightOperand = castToNumberIfString(rightOperand);

    return (
      isNumber(leftOperand) &&
      isNumber(rightOperand) &&
      compare(leftOperand, rightOperand)
    );
  };
};

var guardCaseSensitivity = function (compare) {
  return function (leftOperand, rightOperand, caseInsensitive) {
    return compare(
      updateCase(leftOperand, caseInsensitive),
      updateCase(rightOperand, caseInsensitive)
    );
  };
};

var conditions = {
  equals: guardCaseSensitivity(function (leftOperand, rightOperand) {
    return leftOperand == rightOperand;
  }),
  doesNotEqual: function () {
    return !conditions.equals.apply(null, arguments);
  },
  contains: guardStringCompare(
    guardCaseSensitivity(function (leftOperand, rightOperand) {
      return leftOperand.indexOf(rightOperand) !== -1;
    })
  ),
  doesNotContain: function () {
    return !conditions.contains.apply(null, arguments);
  },
  startsWith: guardStringCompare(
    guardCaseSensitivity(function (leftOperand, rightOperand) {
      return leftOperand.indexOf(rightOperand) === 0;
    })
  ),
  doesNotStartWith: function () {
    return !conditions.startsWith.apply(null, arguments);
  },
  endsWith: guardStringCompare(
    guardCaseSensitivity(function (leftOperand, rightOperand) {
      return (
        leftOperand.substring(
          leftOperand.length - rightOperand.length,
          leftOperand.length
        ) === rightOperand
      );
    })
  ),
  doesNotEndWith: function () {
    return !conditions.endsWith.apply(null, arguments);
  },
  matchesRegex: guardStringCompare(function (
    leftOperand,
    rightOperand,
    caseInsensitive
  ) {
    // Doing something like new RegExp(/ab+c/, 'i') throws an error in some browsers (e.g., IE11),
    // so we don't want to instantiate the regex until we know we're working with a string.
    return new RegExp(rightOperand, caseInsensitive ? 'i' : '').test(
      leftOperand
    );
  }),
  doesNotMatchRegex: function () {
    return !conditions.matchesRegex.apply(null, arguments);
  },
  lessThan: guardNumberCompare(function (leftOperand, rightOperand) {
    return leftOperand < rightOperand;
  }),
  lessThanOrEqual: guardNumberCompare(function (leftOperand, rightOperand) {
    return leftOperand <= rightOperand;
  }),
  greaterThan: guardNumberCompare(function (leftOperand, rightOperand) {
    return leftOperand > rightOperand;
  }),
  greaterThanOrEqual: guardNumberCompare(function (leftOperand, rightOperand) {
    return leftOperand >= rightOperand;
  }),
  isTrue: function (leftOperand) {
    return leftOperand === true;
  },
  isTruthy: function (leftOperand) {
    return Boolean(leftOperand);
  },
  isFalse: function (leftOperand) {
    return leftOperand === false;
  },
  isFalsy: function (leftOperand) {
    return !leftOperand;
  }
};

module.exports = function (settings) {
  return conditions[settings.comparison.operator](
    settings.leftOperand,
    settings.rightOperand,
    Boolean(settings.comparison.caseInsensitive)
  );
};

          }

        },
        "core/src/lib/actions/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');
var Promise = require('@adobe/reactor-promise');
var decorateCode = require('./helpers/decorateCode');
var loadCodeSequentially = require('./helpers/loadCodeSequentially');
var postscribe = require('../../../node_modules/postscribe/dist/postscribe');
var unescapeHTMLEntities = require('./helpers/unescapeHtmlCode');
var getTurbineScript = require('../helpers/findPageScript').getTurbine;

var cspNonce;

var postscribeWrite = (function () {
  var write = function (source) {
    postscribe(document.body, source, {
      beforeWriteToken: function (token) {
        var tagName = token.tagName && token.tagName.toLowerCase();

        if (cspNonce && tagName === 'script') {
          token.attrs.nonce = cspNonce;
        }

        // There is an issue in Postscribe where script and style attributes
        // are not unescaped. That causes problems when loading scripts from external
        // sources. See https://jira.corp.adobe.com/browse/DTM-15058.
        if (tagName === 'script' || tagName === 'style') {
          Object.keys(token.attrs || {}).forEach(function (key) {
            token.attrs[key] = unescapeHTMLEntities(token.attrs[key]);
          });

          if (token.src) {
            token.src = unescapeHTMLEntities(token.src);
          }
        }

        return token;
      },
      error: function (error) {
        turbine.logger.error(error.msg);
      }
    });
  };

  var queue = [];

  // If the Launch library is loaded asynchronously, it may finish loading before document.body
  // is available. This means the custom code action may be running before document.body is
  // available, in which case can't write the custom code to document.body. We could, in this
  // case, write it to document.head since it will for sure be available, but the user's custom
  // code may have something like an img tag for sending a beacon (this use case was seen in DTM).
  // Adding display elements like an img tag to document.head is against HTML spec, though it
  // does seem like an image request is still made. We opted instead to ensure we comply with
  // HTML spec and wait until we see that document.body is available before writing.
  var flushQueue = function () {
    if (document.body) {
      while (queue.length) {
        write(queue.shift());
      }
    } else {
      // 20 is an arbitrarily small amount of time but not too aggressive.
      setTimeout(flushQueue, 20);
    }
  };

  return function (source) {
    queue.push(source);
    flushQueue();
  };
})();

var libraryWasLoadedAsynchronously = (function () {
  // document.currentScript is not supported by IE
  if (document.currentScript) {
    return document.currentScript.async;
  } else {
    var script = getTurbineScript();
    if (script) {
      return script.async;
    }
    // We couldn't find the Launch script, so we'll assume it was loaded asynchronously. This
    // is the safer assumption.
    return true;
  }
})();

/**
 * The custom code action. This loads and executes custom JavaScript or HTML provided by the user.
 * @param {Object} settings Action settings.
 * @params {boolean} settings.isExternal When true, <code>settings.source</code> contains the
 * code itself. When false, <code>settings.source</code> contains a relative path to the file
 * containing the user's code.
 * @param {string} settings.source If <code>settings.external</code> is <code>false</code>,
 * this will be the user's code. Otherwise, it will be a relative path to the file containing
 * the user's code.
 * @param {string} settings.language The language of the user's code. Must be either javascript or
 * html.
 * @param {Object} event The underlying event object that triggered the rule.
 * @param {Object} event.element The element that the rule was targeting.
 * @param {Object} event.target The element on which the event occurred.
 * <code>javascript</code> or <code>html</code>.
 */
module.exports = function (settings, event) {
  // ensure the nonce is up-to-date when the function is used
  cspNonce = turbine.getExtensionSettings().cspNonce;

  var decoratedResult;

  var action = {
    settings: settings,
    event: event
  };

  var source = action.settings.source;
  if (!source) {
    return;
  }

  if (action.settings.isExternal) {
    return loadCodeSequentially(source).then(function (source) {
      if (source) {
        decoratedResult = decorateCode(action, source);
        postscribeWrite(decoratedResult.code);
        return decoratedResult.promise;
      }

      return Promise.resolve();
    });
  } else {
    decoratedResult = decorateCode(action, source);

    // This area has been modified several times, so here are some helpful details:
    // 1. Custom code will be included into the main launch library if it's for a rule that uses the
    //    Library Loaded or Page Bottom event. isExternal will be false. However, keep in mind that
    //    the same rule may have other events that are not Library Loaded or Page Bottom. This means
    //    we could see isExternal = false on the action when the event that fired the rule is
    //    a click, for example.
    // 2. When users load a library synchronously which has a rule using the Library Loaded
    //    or Page Bottom event with a Custom Code action, they expect the custom code to be written
    //    to the document in a blocking fashion (prevent the parser from continuing until their
    //    custom code is executed). In other words, they expect document.write to be used. When
    //    the library is loaded asynchronously, they do not have this expectation. However, note
    //    that if the Library Loaded event is used and the website does not call
    //    _satellite.pageBottom(), page bottom rules will be run when the DOMContentLoaded event
    //    is fired (at which point we can't use document.write or it will wipe out website content).
    // 3. Calls to document.write will be ignored by the browser if the Launch library is loaded
    //    asynchronously, even if the calls are made before DOMContentLoaded.
    // 4. There's a bug in IE 10 where readyState is sometimes set to "interactive" too
    //    early (before DOMContentLoaded has fired). https://bugs.jquery.com/ticket/12282
    //    This may cause Postscribe to be used sometimes when document.write() could have been
    //    used instead, but we have concluded that IE 10 usage is low enough and the risk small
    //    enough that this behavior is tolerable.
    if (!libraryWasLoadedAsynchronously && document.readyState === 'loading') {
      // Document object in XML files is different from the ones in HTML files. Documents served
      // with the `application/xhtml+xml` MIME type don't have the `document.write` method.
      // More info:
      // https://www.w3.org/MarkUp/2004/xhtml-faq#docwrite
      // https://developer.mozilla.org/en-US/docs/Archive/Web/Writing_JavaScript_for_HTML
      // Also, when rule component sequencing is enabled, there is an issue in Edge Legacy
      // where the whole page gets erased: https://jira.corp.adobe.com/browse/DTM-13527.
      // We decided to not use document.write at all when rule component sequencing is enabled.
      if (
        document.write &&
        turbine.propertySettings.ruleComponentSequencingEnabled === false
      ) {
        document.write(decoratedResult.code);
      } else {
        postscribeWrite(decoratedResult.code);
      }
    } else {
      postscribeWrite(decoratedResult.code);
    }

    return decoratedResult.promise;
  }
};

          }

        },
        "core/src/lib/conditions/path.js": {
          "name": "path",
          "displayName": "Path Without Query String",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');
var textMatch = require('../helpers/textMatch');

/**
 * Path condition. Determines if the actual path matches at least one acceptable path.
 * @param {Object} settings Condition settings.
 * @param {Object[]} settings.paths Acceptable paths.
 * @param {string} settings.paths[].value An acceptable path value.
 * @param {boolean} [settings.paths[].valueIsRegex=false] Whether <code>value</code> on the object
 * instance is intended to be a regular expression.
 * @returns {boolean}
 */
module.exports = function (settings) {
  var path = document.location.pathname;
  return settings.paths.some(function (acceptablePath) {
    var acceptableValue = acceptablePath.valueIsRegex
      ? new RegExp(acceptablePath.value, 'i')
      : acceptablePath.value;
    return textMatch(path, acceptableValue);
  });
};

          }

        },
        "core/src/lib/events/windowLoaded.js": {
          "name": "window-loaded",
          "displayName": "Window Loaded",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

/**
 * Window loaded event. This event occurs at the end of the document loading process. At this point,
 * all of the objects in the document are loaded in the DOM, and all images, scripts, links,
 * and sub-frames have finished loading.
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  pageLifecycleEvents.registerWindowLoadedTrigger(trigger);
};

          }

        },
        "core/src/lib/conditions/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Custom code condition. This executes condition code provided by the user.
 * @param {Object} settings Condition settings.
 * @param {Function} settings.source The custom script function.
 * @param {Object} event The underlying event object that triggered the rule.
 * @param {Object} event.element The element that the rule was targeting.
 * @param {Object} event.target The element on which the event occurred.
 * @returns {boolean}
 */
module.exports = function (settings, event) {
  // `this` and `target` are provided separately from event for backward-compatibility.
  return settings.source.call(event.element, event, event.target);
};

          }

        },
        "core/src/lib/conditions/cookie.js": {
          "name": "cookie",
          "displayName": "Cookie",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var cookie = require('@adobe/reactor-cookie');
var textMatch = require('../helpers/textMatch');

/**
 * Cookie condition. Determines if a particular cookie's actual value matches an acceptable value.
 * @param {Object} settings Condition settings.
 * @param {string} settings.name The name of the cookie.
 * @param {Object[]} settings.cookieValues Acceptable cookie values to match.
 * @param {string} settings.cookieValues[].value An acceptable cookie value.
 * @param {string} [settings.cookieValues[].valueIsRegex=false] Is the cookie
 * value a Regular Expression?
 * DEPRECATED @param {string=} settings.value An acceptable cookie value.
 * DEPRECATED @param {boolean=} [settings.valueIsRegex=false] Whether <code>settings.value</code>
 * is intended to be a regular expression.
 * @returns {boolean}
 */
module.exports = function (settings) {
  // empty strings aren't allowed because a cookieValue is required in the UI.
  var storedCookie = cookie.get(settings.name);
  if (!storedCookie) {
    return false;
  }

  var cookieValues;
  if (!Array.isArray(settings.cookieValues)) {
    // legacy support
    cookieValues = [
      { value: settings.value, valueIsRegex: Boolean(settings.valueIsRegex) }
    ];
  } else {
    cookieValues = settings.cookieValues;
  }

  return cookieValues.some(function (acceptableCookieValue) {
    var acceptableValue = acceptableCookieValue.valueIsRegex
      ? new RegExp(acceptableCookieValue.value, 'i')
      : acceptableCookieValue.value;

    return textMatch(storedCookie, acceptableValue);
  });
};

          }

        },
        "core/src/lib/events/libraryLoaded.js": {
          "name": "library-loaded",
          "displayName": "Library Loaded (Page Top)",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var pageLifecycleEvents = require('./helpers/pageLifecycleEvents');

/**
 * Library loaded event. This event occurs as soon as the runtime library is loaded.
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  pageLifecycleEvents.registerLibraryLoadedTrigger(trigger);
};

          }

        },
        "core/src/lib/conditions/hash.js": {
          "name": "hash",
          "displayName": "Hash",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var textMatch = require('../helpers/textMatch');

/**
 * Hash condition. Determines if the actual hash (URL fragment identifier) matches at least one
 * acceptable hash.
 * @param {Object} settings Condition settings.
 * @param {Object[]} settings.hashes Acceptable hashes.
 * @param {string} settings.hashes[].value An acceptable hash value
 * @param {boolean} [settings.hashes[].valueIsRegex=false] Whether <code>value</code> on the object
 * instance is intended to be a regular expression.
 * @returns {boolean}
 */
module.exports = function (settings) {
  var hash = document.location.hash;
  return settings.hashes.some(function (acceptableHash) {
    var acceptableValue = acceptableHash.valueIsRegex
      ? new RegExp(acceptableHash.value, 'i')
      : acceptableHash.value;
    return textMatch(hash, acceptableValue);
  });
};

          }

        },
        "core/src/lib/events/historyChange.js": {
          "name": "history-change",
          "displayName": "History Change",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var debounce = require('./helpers/debounce');
var once = require('./helpers/once');

var history = window.history;
var lastURI = window.location.href;
var triggers = [];

/**
 * Replaces a method on an object with a proxy method only calls the original method but also
 * another explicitly defined function.
 * @param {Object} object The object containing the method to replace.
 * @param {String} methodName The name of the method to replace with the proxy method.
 * @param {Function} fn A function that should be called after the original method is called.
 */
var callThrough = function (object, methodName, fn) {
  var original = object[methodName];
  object[methodName] = function () {
    var returnValue = original.apply(object, arguments);
    fn.apply(null, arguments);
    return returnValue;
  };
};

/**
 * Calls all the trigger methods if the URI has changed.
 */
var callTriggersIfURIChanged = debounce(function () {
  var uri = window.location.href;
  if (lastURI !== uri) {
    triggers.forEach(function (trigger) {
      trigger();
    });

    lastURI = uri;
  }
}, 0);

/**
 * Starts watching for history changes.
 */
var watchForHistoryChange = once(function () {
  if (history) {
    if (history.pushState) {
      callThrough(history, 'pushState', callTriggersIfURIChanged);
    }

    if (history.replaceState) {
      callThrough(history, 'replaceState', callTriggersIfURIChanged);
    }
  }

  window.addEventListener('popstate', callTriggersIfURIChanged);
  window.addEventListener('hashchange', callTriggersIfURIChanged);
});

/**
 * History change event. This event occurs when the URL hash is changed or the URL is changed
 * through the <code>history</code> API.
 * @param {Object} settings The event settings object.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  watchForHistoryChange();
  triggers.push(trigger);
};

          }

        },
        "core/src/lib/events/customCode.js": {
          "name": "custom-code",
          "displayName": "Custom Code",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Custom code event. This executes event code provided by the user. The user's code will call
 * <code>trigger</code> when the rule should fire.
 * @param {Object} settings The event settings object.
 * @param {Function} settings.source The custom script function.
 */
module.exports = function (settings, trigger) {
  settings.source(trigger);
};

          }

        },
        "core/src/lib/events/elementExists.js": {
          "name": "element-exists",
          "displayName": "Element Exists",
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var POLL_INTERVAL = 3000;

var WeakMap = require('./helpers/weakMap');
var seenElements = new WeakMap();
var matchesProperties = require('./helpers/matchesProperties');

var listenersBySelector = {};

setInterval(function () {
  Object.keys(listenersBySelector).forEach(function (selector) {
    var listeners = listenersBySelector[selector];
    var elements = document.querySelectorAll(selector);

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];

      if (!seenElements.has(element)) {
        seenElements.set(element, true);

        // We want to try to execute the rules in the order they were in the turbine container.
        // This is why we try to loop from 0 to N. We do k-- in order to not mess up looping
        // as we splice items from the array.
        for (var k = 0; k < listeners.length; k++) {
          var listener = listeners[k];
          if (matchesProperties(element, listener.settings.elementProperties)) {
            listener.trigger({
              element: element,
              target: element
            });
            listeners.splice(k, 1);
            k--;
          }
        }
      }

      // Listeners are removed from the array as their respective rules are fired.
      // Once we have no more rules corresponding to the selector there is no need to
      // continue scanning elements with the selector.
      if (!listeners.length) {
        delete listenersBySelector[selector];
        break;
      }
    }
  });
}, POLL_INTERVAL);

/**
 * Element exists event. This event occurs when an element has been added to the DOM. The rule
 * should run no more than once.
 * @param {Object} settings The event settings object.
 * @param {string} settings.elementSelector The CSS selector the element must match in order for
 * the rule to fire.
 * @param {Object[]} [settings.elementProperties] Property values the element must have in order
 * for the rule to fire.
 * @param {string} settings.elementProperties[].name The property name.
 * @param {string} settings.elementProperties[].value The property value.
 * @param {boolean} [settings.elementProperties[].valueIsRegex=false] Whether <code>value</code>
 * on the object instance is intended to be a regular expression.
 * @param {ruleTrigger} trigger The trigger callback.
 */
module.exports = function (settings, trigger) {
  var listeners = listenersBySelector[settings.elementSelector];

  if (!listeners) {
    listeners = listenersBySelector[settings.elementSelector] = [];
  }

  listeners.push({
    settings: settings,
    trigger: trigger
  });
};

          }

        },
        "core/src/lib/helpers/getObjectProperty.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Returns the deep property value of an object.
 * @param obj The object where the property will be searched.
 * @param property The property name to be returned. It can contain dots. (eg. prop.subprop1)
 * @returns {*}
 */
module.exports = function (obj, property) {
  var propertyChain = property.split('.');
  var currentValue = obj;

  for (var i = 0, len = propertyChain.length; i < len; i++) {
    if (currentValue == null) {
      return undefined;
    }

    currentValue = currentValue[propertyChain[i]];
  }

  return currentValue;
};

          }

        },
        "core/src/lib/events/helpers/pageLifecycleEvents.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * (c) 2018 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

// We need to be able to fire the rules in a specific order, no matter if the library is loaded
// sync or async. The rules are fired in the following order:
// Library loaded rules -> Page bottom rules -> Dom Ready rules -> Window load rules.

var window = require('@adobe/reactor-window');
var document = require('@adobe/reactor-document');

var isIE10 = window.navigator.appVersion.indexOf('MSIE 10') !== -1;
var WINDOW_LOADED = 'WINDOW_LOADED';
var DOM_READY = 'DOM_READY';
var PAGE_BOTTOM = 'PAGE_BOTTOM';

var lifecycleEventsOrder = [PAGE_BOTTOM, DOM_READY, WINDOW_LOADED];

var createSyntheticEvent = function (element, nativeEvent) {
  return {
    element: element,
    target: element,
    nativeEvent: nativeEvent
  };
};

var registry = {};
lifecycleEventsOrder.forEach(function (event) {
  registry[event] = [];
});

var processRegistry = function (lifecycleEvent, nativeEvent) {
  lifecycleEventsOrder
    .slice(0, getLifecycleEventIndex(lifecycleEvent) + 1)
    .forEach(function (lifecycleEvent) {
      processTriggers(nativeEvent, lifecycleEvent);
    });
};

var detectLifecycleEvent = function () {
  if (document.readyState === 'complete') {
    return WINDOW_LOADED;
  } else if (document.readyState === 'interactive') {
    return !isIE10 ? DOM_READY : null;
  }
};

var getLifecycleEventIndex = function (event) {
  return lifecycleEventsOrder.indexOf(event);
};

var processTriggers = function (nativeEvent, lifecycleEvent) {
  registry[lifecycleEvent].forEach(function (triggerData) {
    processTrigger(nativeEvent, triggerData);
  });
  registry[lifecycleEvent] = [];
};

var processTrigger = function (nativeEvent, triggerData) {
  var trigger = triggerData.trigger;
  var syntheticEventFn = triggerData.syntheticEventFn;

  trigger(syntheticEventFn ? syntheticEventFn(nativeEvent) : null);
};

window._satellite = window._satellite || {};
window._satellite.pageBottom = processRegistry.bind(null, PAGE_BOTTOM);

document.addEventListener(
  'DOMContentLoaded',
  processRegistry.bind(null, DOM_READY),
  true
);
window.addEventListener(
  'load',
  processRegistry.bind(null, WINDOW_LOADED),
  true
);

// Depending on the way the Launch library was loaded, none of the registered listeners that
// execute `processRegistry` may fire . We need to execute the `processRegistry` method at
// least once. If this timeout fires before any of the registered listeners, we auto-detect the
// current lifecycle event and fire all the registered triggers in order. We don't care if the
// `processRegistry` is called multiple times for the same lifecycle event. We fire the registered
// triggers for a lifecycle event only once. We used a `setTimeout` here to make sure all the rules
// using Library Loaded are registered and executed synchronously and before rules using any of the
// other lifecycle event types.
window.setTimeout(function () {
  var lifecycleEvent = detectLifecycleEvent();
  if (lifecycleEvent) {
    processRegistry(lifecycleEvent);
  }
}, 0);

module.exports = {
  registerLibraryLoadedTrigger: function (trigger) {
    trigger();
  },
  registerPageBottomTrigger: function (trigger) {
    registry[PAGE_BOTTOM].push({
      trigger: trigger
    });
  },
  registerDomReadyTrigger: function (trigger) {
    registry[DOM_READY].push({
      trigger: trigger,
      syntheticEventFn: createSyntheticEvent.bind(null, document)
    });
  },
  registerWindowLoadedTrigger: function (trigger) {
    registry[WINDOW_LOADED].push({
      trigger: trigger,
      syntheticEventFn: createSyntheticEvent.bind(null, window)
    });
  }
};

          }

        },
        "core/src/lib/helpers/stringAndNumberUtils.js": {
          "script": function(module, exports, require, turbine) {
'use strict';

var isNumber = function (value) {
  return typeof value === 'number' && isFinite(value); // isFinite weeds out NaNs.
};

var isString = function (value) {
  return typeof value === 'string' || value instanceof String;
};

var castToStringIfNumber = function (value) {
  return isNumber(value) ? String(value) : value;
};

var castToNumberIfString = function (value) {
  return isString(value) ? Number(value) : value;
};

module.exports = {
  isNumber: isNumber,
  isString: isString,
  castToStringIfNumber: castToStringIfNumber,
  castToNumberIfString: castToNumberIfString
};

          }

        },
        "core/src/lib/actions/helpers/decorateCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var decorateGlobalJavaScriptCode = require('./decorators/decorateGlobalJavaScriptCode');
var decorateNonGlobalJavaScriptCode = require('./decorators/decorateNonGlobalJavaScriptCode');
var decorateHtmlCode = require('./decorators/decorateHtmlCode');

var decorators = {
  javascript: function (action, source) {
    return action.settings.global
      ? decorateGlobalJavaScriptCode(action, source)
      : decorateNonGlobalJavaScriptCode(action, source);
  },
  html: decorateHtmlCode
};

module.exports = function (action, source) {
  return decorators[action.settings.language](action, source);
};

          }

        },
        "core/src/lib/actions/helpers/loadCodeSequentially.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var Promise = require('@adobe/reactor-promise');
var getSourceByUrl = require('./getSourceByUrl');

var previousExecuteCodePromise = Promise.resolve();

module.exports = function (sourceUrl) {
  var sequentiallyLoadCodePromise = new Promise(function (resolve) {
    var loadCodePromise = getSourceByUrl(sourceUrl);

    Promise.all([loadCodePromise, previousExecuteCodePromise]).then(function (
      values
    ) {
      var source = values[0];
      resolve(source);
    });
  });

  previousExecuteCodePromise = sequentiallyLoadCodePromise;
  return sequentiallyLoadCodePromise;
};

          }

        },
        "core/node_modules/postscribe/dist/postscribe.js": {
          "script": function(module, exports, require, turbine) {
/**
 * @file postscribe
 * @description Asynchronously write javascript, even with document.write.
 * @version v2.0.8
 * @see {@link https://krux.github.io/postscribe}
 * @license MIT
 * @author Derek Brans
 * @copyright 2016 Krux Digital, Inc
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["postscribe"] = factory();
	else
		root["postscribe"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _postscribe = __webpack_require__(1);
	
	var _postscribe2 = _interopRequireDefault(_postscribe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	module.exports = _postscribe2['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports['default'] = postscribe;
	
	var _writeStream = __webpack_require__(2);
	
	var _writeStream2 = _interopRequireDefault(_writeStream);
	
	var _utils = __webpack_require__(4);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	 * A function that intentionally does nothing.
	 */
	function doNothing() {}
	
	/**
	 * Available options and defaults.
	 *
	 * @type {Object}
	 */
	var OPTIONS = {
	  /**
	   * Called when an async script has loaded.
	   */
	  afterAsync: doNothing,
	
	  /**
	   * Called immediately before removing from the write queue.
	   */
	  afterDequeue: doNothing,
	
	  /**
	   * Called sync after a stream's first thread release.
	   */
	  afterStreamStart: doNothing,
	
	  /**
	   * Called after writing buffered document.write calls.
	   */
	  afterWrite: doNothing,
	
	  /**
	   * Allows disabling the autoFix feature of prescribe
	   */
	  autoFix: true,
	
	  /**
	   * Called immediately before adding to the write queue.
	   */
	  beforeEnqueue: doNothing,
	
	  /**
	   * Called before writing a token.
	   *
	   * @param {Object} tok The token
	   */
	  beforeWriteToken: function beforeWriteToken(tok) {
	    return tok;
	  },
	
	  /**
	   * Called before writing buffered document.write calls.
	   *
	   * @param {String} str The string
	   */
	  beforeWrite: function beforeWrite(str) {
	    return str;
	  },
	
	  /**
	   * Called when evaluation is finished.
	   */
	  done: doNothing,
	
	  /**
	   * Called when a write results in an error.
	   *
	   * @param {Error} e The error
	   */
	  error: function error(e) {
	    throw new Error(e.msg);
	  },
	
	
	  /**
	   * Whether to let scripts w/ async attribute set fall out of the queue.
	   */
	  releaseAsync: false
	};
	
	var nextId = 0;
	var queue = [];
	var active = null;
	
	function nextStream() {
	  var args = queue.shift();
	  if (args) {
	    var options = utils.last(args);
	
	    options.afterDequeue();
	    args.stream = runStream.apply(undefined, args);
	    options.afterStreamStart();
	  }
	}
	
	function runStream(el, html, options) {
	  active = new _writeStream2['default'](el, options);
	
	  // Identify this stream.
	  active.id = nextId++;
	  active.name = options.name || active.id;
	  postscribe.streams[active.name] = active;
	
	  // Override document.write.
	  var doc = el.ownerDocument;
	
	  var stash = {
	    close: doc.close,
	    open: doc.open,
	    write: doc.write,
	    writeln: doc.writeln
	  };
	
	  function _write(str) {
	    str = options.beforeWrite(str);
	    active.write(str);
	    options.afterWrite(str);
	  }
	
	  _extends(doc, {
	    close: doNothing,
	    open: doNothing,
	    write: function write() {
	      for (var _len = arguments.length, str = Array(_len), _key = 0; _key < _len; _key++) {
	        str[_key] = arguments[_key];
	      }
	
	      return _write(str.join(''));
	    },
	    writeln: function writeln() {
	      for (var _len2 = arguments.length, str = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        str[_key2] = arguments[_key2];
	      }
	
	      return _write(str.join('') + '\n');
	    }
	  });
	
	  // Override window.onerror
	  var oldOnError = active.win.onerror || doNothing;
	
	  // This works together with the try/catch around WriteStream::insertScript
	  // In modern browsers, exceptions in tag scripts go directly to top level
	  active.win.onerror = function (msg, url, line) {
	    options.error({ msg: msg + ' - ' + url + ': ' + line });
	    oldOnError.apply(active.win, [msg, url, line]);
	  };
	
	  // Write to the stream
	  active.write(html, function () {
	    // restore document.write
	    _extends(doc, stash);
	
	    // restore window.onerror
	    active.win.onerror = oldOnError;
	
	    options.done();
	    active = null;
	    nextStream();
	  });
	
	  return active;
	}
	
	function postscribe(el, html, options) {
	  if (utils.isFunction(options)) {
	    options = { done: options };
	  } else if (options === 'clear') {
	    queue = [];
	    active = null;
	    nextId = 0;
	    return;
	  }
	
	  options = utils.defaults(options, OPTIONS);
	
	  // id selector
	  if (/^#/.test(el)) {
	    el = window.document.getElementById(el.substr(1));
	  } else {
	    el = el.jquery ? el[0] : el;
	  }
	
	  var args = [el, html, options];
	
	  el.postscribe = {
	    cancel: function cancel() {
	      if (args.stream) {
	        args.stream.abort();
	      } else {
	        args[1] = doNothing;
	      }
	    }
	  };
	
	  options.beforeEnqueue(args);
	  queue.push(args);
	
	  if (!active) {
	    nextStream();
	  }
	
	  return el.postscribe;
	}
	
	_extends(postscribe, {
	  // Streams by name.
	  streams: {},
	  // Queue of streams.
	  queue: queue,
	  // Expose internal classes.
	  WriteStream: _writeStream2['default']
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _prescribe = __webpack_require__(3);
	
	var _prescribe2 = _interopRequireDefault(_prescribe);
	
	var _utils = __webpack_require__(4);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Turn on to debug how each chunk affected the DOM.
	 * @type {boolean}
	 */
	var DEBUG_CHUNK = false;
	
	/**
	 * Prefix for data attributes on DOM elements.
	 * @type {string}
	 */
	var BASEATTR = 'data-ps-';
	
	/**
	 * ID for the style proxy
	 * @type {string}
	 */
	var PROXY_STYLE = 'ps-style';
	
	/**
	 * ID for the script proxy
	 * @type {string}
	 */
	var PROXY_SCRIPT = 'ps-script';
	
	/**
	 * Get data attributes
	 *
	 * @param {Object} el The DOM element.
	 * @param {String} name The attribute name.
	 * @returns {String}
	 */
	function getData(el, name) {
	  var attr = BASEATTR + name;
	
	  var val = el.getAttribute(attr);
	
	  // IE 8 returns a number if it's a number
	  return !utils.existy(val) ? val : String(val);
	}
	
	/**
	 * Set data attributes
	 *
	 * @param {Object} el The DOM element.
	 * @param {String} name The attribute name.
	 * @param {null|*} value The attribute value.
	 */
	function setData(el, name) {
	  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
	  var attr = BASEATTR + name;
	
	  if (utils.existy(value) && value !== '') {
	    el.setAttribute(attr, value);
	  } else {
	    el.removeAttribute(attr);
	  }
	}
	
	/**
	 * Stream static html to an element, where "static html" denotes "html
	 * without scripts".
	 *
	 * This class maintains a *history of writes devoid of any attributes* or
	 * "proxy history".
	 *
	 * Injecting the proxy history into a temporary div has no side-effects,
	 * other than to create proxy elements for previously written elements.
	 *
	 * Given the `staticHtml` of a new write, a `tempDiv`'s innerHTML is set to
	 * `proxy_history + staticHtml`.
	 * The *structure* of `tempDiv`'s contents, (i.e., the placement of new nodes
	 * beside or inside of proxy elements), reflects the DOM structure that would
	 * have resulted if all writes had been squashed into a single write.
	 *
	 * For each descendent `node` of `tempDiv` whose parentNode is a *proxy*,
	 * `node` is appended to the corresponding *real* element within the DOM.
	 *
	 * Proxy elements are mapped to *actual* elements in the DOM by injecting a
	 * `data-id` attribute into each start tag in `staticHtml`.
	 *
	 */
	
	var WriteStream = function () {
	  /**
	   * Constructor.
	   *
	   * @param {Object} root The root element
	   * @param {?Object} options The options
	   */
	  function WriteStream(root) {
	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    _classCallCheck(this, WriteStream);
	
	    this.root = root;
	    this.options = options;
	    this.doc = root.ownerDocument;
	    this.win = this.doc.defaultView || this.doc.parentWindow;
	    this.parser = new _prescribe2['default']('', { autoFix: options.autoFix });
	
	    // Actual elements by id.
	    this.actuals = [root];
	
	    // Embodies the "structure" of what's been written so far,
	    // devoid of attributes.
	    this.proxyHistory = '';
	
	    // Create a proxy of the root element.
	    this.proxyRoot = this.doc.createElement(root.nodeName);
	
	    this.scriptStack = [];
	    this.writeQueue = [];
	
	    setData(this.proxyRoot, 'proxyof', 0);
	  }
	
	  /**
	   * Writes the given strings.
	   *
	   * @param {...String} str The strings to write
	   */
	
	
	  WriteStream.prototype.write = function write() {
	    var _writeQueue;
	
	    (_writeQueue = this.writeQueue).push.apply(_writeQueue, arguments);
	
	    // Process writes
	    // When new script gets pushed or pending this will stop
	    // because new writeQueue gets pushed
	    while (!this.deferredRemote && this.writeQueue.length) {
	      var arg = this.writeQueue.shift();
	
	      if (utils.isFunction(arg)) {
	        this._callFunction(arg);
	      } else {
	        this._writeImpl(arg);
	      }
	    }
	  };
	
	  /**
	   * Calls the given function.
	   *
	   * @param {Function} fn The function to call
	   * @private
	   */
	
	
	  WriteStream.prototype._callFunction = function _callFunction(fn) {
	    var tok = { type: 'function', value: fn.name || fn.toString() };
	    this._onScriptStart(tok);
	    fn.call(this.win, this.doc);
	    this._onScriptDone(tok);
	  };
	
	  /**
	   * The write implementation
	   *
	   * @param {String} html The HTML to write.
	   * @private
	   */
	
	
	  WriteStream.prototype._writeImpl = function _writeImpl(html) {
	    this.parser.append(html);
	
	    var tok = void 0;
	    var script = void 0;
	    var style = void 0;
	    var tokens = [];
	
	    // stop if we see a script token
	    while ((tok = this.parser.readToken()) && !(script = utils.isScript(tok)) && !(style = utils.isStyle(tok))) {
	      tok = this.options.beforeWriteToken(tok);
	
	      if (tok) {
	        tokens.push(tok);
	      }
	    }
	
	    if (tokens.length > 0) {
	      this._writeStaticTokens(tokens);
	    }
	
	    if (script) {
	      this._handleScriptToken(tok);
	    }
	
	    if (style) {
	      this._handleStyleToken(tok);
	    }
	  };
	
	  /**
	   * Write contiguous non-script tokens (a chunk)
	   *
	   * @param {Array<Object>} tokens The tokens
	   * @returns {{tokens, raw, actual, proxy}|null}
	   * @private
	   */
	
	
	  WriteStream.prototype._writeStaticTokens = function _writeStaticTokens(tokens) {
	    var chunk = this._buildChunk(tokens);
	
	    if (!chunk.actual) {
	      // e.g., no tokens, or a noscript that got ignored
	      return null;
	    }
	
	    chunk.html = this.proxyHistory + chunk.actual;
	    this.proxyHistory += chunk.proxy;
	    this.proxyRoot.innerHTML = chunk.html;
	
	    if (DEBUG_CHUNK) {
	      chunk.proxyInnerHTML = this.proxyRoot.innerHTML;
	    }
	
	    this._walkChunk();
	
	    if (DEBUG_CHUNK) {
	      chunk.actualInnerHTML = this.root.innerHTML;
	    }
	
	    return chunk;
	  };
	
	  /**
	   * Build a chunk.
	   *
	   * @param {Array<Object>} tokens The tokens to use.
	   * @returns {{tokens: *, raw: string, actual: string, proxy: string}}
	   * @private
	   */
	
	
	  WriteStream.prototype._buildChunk = function _buildChunk(tokens) {
	    var nextId = this.actuals.length;
	
	    // The raw html of this chunk.
	    var raw = [];
	
	    // The html to create the nodes in the tokens (with id's injected).
	    var actual = [];
	
	    // Html that can later be used to proxy the nodes in the tokens.
	    var proxy = [];
	
	    var len = tokens.length;
	    for (var i = 0; i < len; i++) {
	      var tok = tokens[i];
	      var tokenRaw = tok.toString();
	
	      raw.push(tokenRaw);
	
	      if (tok.attrs) {
	        // tok.attrs <==> startTag or atomicTag or cursor
	        // Ignore noscript tags. They are atomic, so we don't have to worry about children.
	        if (!/^noscript$/i.test(tok.tagName)) {
	          var id = nextId++;
	
	          // Actual: inject id attribute: replace '>' at end of start tag with id attribute + '>'
	          actual.push(tokenRaw.replace(/(\/?>)/, ' ' + BASEATTR + 'id=' + id + ' $1'));
	
	          // Don't proxy scripts: they have no bearing on DOM structure.
	          if (tok.attrs.id !== PROXY_SCRIPT && tok.attrs.id !== PROXY_STYLE) {
	            // Proxy: strip all attributes and inject proxyof attribute
	            proxy.push(
	            // ignore atomic tags (e.g., style): they have no "structural" effect
	            tok.type === 'atomicTag' ? '' : '<' + tok.tagName + ' ' + BASEATTR + 'proxyof=' + id + (tok.unary ? ' />' : '>'));
	          }
	        }
	      } else {
	        // Visit any other type of token
	        // Actual: append.
	        actual.push(tokenRaw);
	
	        // Proxy: append endTags. Ignore everything else.
	        proxy.push(tok.type === 'endTag' ? tokenRaw : '');
	      }
	    }
	
	    return {
	      tokens: tokens,
	      raw: raw.join(''),
	      actual: actual.join(''),
	      proxy: proxy.join('')
	    };
	  };
	
	  /**
	   * Walk the chunks.
	   *
	   * @private
	   */
	
	
	  WriteStream.prototype._walkChunk = function _walkChunk() {
	    var node = void 0;
	    var stack = [this.proxyRoot];
	
	    // use shift/unshift so that children are walked in document order
	    while (utils.existy(node = stack.shift())) {
	      var isElement = node.nodeType === 1;
	      var isProxy = isElement && getData(node, 'proxyof');
	
	      // Ignore proxies
	      if (!isProxy) {
	        if (isElement) {
	          // New actual element: register it and remove the the id attr.
	          this.actuals[getData(node, 'id')] = node;
	          setData(node, 'id');
	        }
	
	        // Is node's parent a proxy?
	        var parentIsProxyOf = node.parentNode && getData(node.parentNode, 'proxyof');
	        if (parentIsProxyOf) {
	          // Move node under actual parent.
	          this.actuals[parentIsProxyOf].appendChild(node);
	        }
	      }
	
	      // prepend childNodes to stack
	      stack.unshift.apply(stack, utils.toArray(node.childNodes));
	    }
	  };
	
	  /**
	   * Handles Script tokens
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._handleScriptToken = function _handleScriptToken(tok) {
	    var _this = this;
	
	    var remainder = this.parser.clear();
	
	    if (remainder) {
	      // Write remainder immediately behind this script.
	      this.writeQueue.unshift(remainder);
	    }
	
	    tok.src = tok.attrs.src || tok.attrs.SRC;
	
	    tok = this.options.beforeWriteToken(tok);
	    if (!tok) {
	      // User has removed this token
	      return;
	    }
	
	    if (tok.src && this.scriptStack.length) {
	      // Defer this script until scriptStack is empty.
	      // Assumption 1: This script will not start executing until
	      // scriptStack is empty.
	      this.deferredRemote = tok;
	    } else {
	      this._onScriptStart(tok);
	    }
	
	    // Put the script node in the DOM.
	    this._writeScriptToken(tok, function () {
	      _this._onScriptDone(tok);
	    });
	  };
	
	  /**
	   * Handles style tokens
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._handleStyleToken = function _handleStyleToken(tok) {
	    var remainder = this.parser.clear();
	
	    if (remainder) {
	      // Write remainder immediately behind this style.
	      this.writeQueue.unshift(remainder);
	    }
	
	    tok.type = tok.attrs.type || tok.attrs.TYPE || 'text/css';
	
	    tok = this.options.beforeWriteToken(tok);
	
	    if (tok) {
	      // Put the style node in the DOM.
	      this._writeStyleToken(tok);
	    }
	
	    if (remainder) {
	      this.write();
	    }
	  };
	
	  /**
	   * Build a style and insert it into the DOM.
	   *
	   * @param {Object} tok The token
	   */
	
	
	  WriteStream.prototype._writeStyleToken = function _writeStyleToken(tok) {
	    var el = this._buildStyle(tok);
	
	    this._insertCursor(el, PROXY_STYLE);
	
	    // Set content
	    if (tok.content) {
	      if (el.styleSheet && !el.sheet) {
	        el.styleSheet.cssText = tok.content;
	      } else {
	        el.appendChild(this.doc.createTextNode(tok.content));
	      }
	    }
	  };
	
	  /**
	   * Build a style element from an atomic style token.
	   *
	   * @param {Object} tok The token
	   * @returns {Element}
	   */
	
	
	  WriteStream.prototype._buildStyle = function _buildStyle(tok) {
	    var el = this.doc.createElement(tok.tagName);
	
	    el.setAttribute('type', tok.type);
	
	    // Set attributes
	    utils.eachKey(tok.attrs, function (name, value) {
	      el.setAttribute(name, value);
	    });
	
	    return el;
	  };
	
	  /**
	   * Append a span to the stream. That span will act as a cursor
	   * (i.e. insertion point) for the element.
	   *
	   * @param {Object} el The element
	   * @param {string} which The type of proxy element
	   */
	
	
	  WriteStream.prototype._insertCursor = function _insertCursor(el, which) {
	    this._writeImpl('<span id="' + which + '"/>');
	
	    var cursor = this.doc.getElementById(which);
	
	    if (cursor) {
	      cursor.parentNode.replaceChild(el, cursor);
	    }
	  };
	
	  /**
	   * Called when a script is started.
	   *
	   * @param {Object} tok The token
	   * @private
	   */
	
	
	  WriteStream.prototype._onScriptStart = function _onScriptStart(tok) {
	    tok.outerWrites = this.writeQueue;
	    this.writeQueue = [];
	    this.scriptStack.unshift(tok);
	  };
	
	  /**
	   * Called when a script is done.
	   *
	   * @param {Object} tok The token
	   * @private
	   */
	
	
	  WriteStream.prototype._onScriptDone = function _onScriptDone(tok) {
	    // Pop script and check nesting.
	    if (tok !== this.scriptStack[0]) {
	      this.options.error({ msg: 'Bad script nesting or script finished twice' });
	      return;
	    }
	
	    this.scriptStack.shift();
	
	    // Append outer writes to queue and process them.
	    this.write.apply(this, tok.outerWrites);
	
	    // Check for pending remote
	
	    // Assumption 2: if remote_script1 writes remote_script2 then
	    // the we notice remote_script1 finishes before remote_script2 starts.
	    // I think this is equivalent to assumption 1
	    if (!this.scriptStack.length && this.deferredRemote) {
	      this._onScriptStart(this.deferredRemote);
	      this.deferredRemote = null;
	    }
	  };
	
	  /**
	   * Build a script and insert it into the DOM.
	   * Done is called once script has executed.
	   *
	   * @param {Object} tok The token
	   * @param {Function} done The callback when complete
	   */
	
	
	  WriteStream.prototype._writeScriptToken = function _writeScriptToken(tok, done) {
	    var el = this._buildScript(tok);
	    var asyncRelease = this._shouldRelease(el);
	    var afterAsync = this.options.afterAsync;
	
	    if (tok.src) {
	      // Fix for attribute "SRC" (capitalized). IE does not recognize it.
	      el.src = tok.src;
	      this._scriptLoadHandler(el, !asyncRelease ? function () {
	        done();
	        afterAsync();
	      } : afterAsync);
	    }
	
	    try {
	      this._insertCursor(el, PROXY_SCRIPT);
	      if (!el.src || asyncRelease) {
	        done();
	      }
	    } catch (e) {
	      this.options.error(e);
	      done();
	    }
	  };
	
	  /**
	   * Build a script element from an atomic script token.
	   *
	   * @param {Object} tok The token
	   * @returns {Element}
	   */
	
	
	  WriteStream.prototype._buildScript = function _buildScript(tok) {
	    var el = this.doc.createElement(tok.tagName);
	
	    // Set attributes
	    utils.eachKey(tok.attrs, function (name, value) {
	      el.setAttribute(name, value);
	    });
	
	    // Set content
	    if (tok.content) {
	      el.text = tok.content;
	    }
	
	    return el;
	  };
	
	  /**
	   * Setup the script load handler on an element.
	   *
	   * @param {Object} el The element
	   * @param {Function} done The callback
	   * @private
	   */
	
	
	  WriteStream.prototype._scriptLoadHandler = function _scriptLoadHandler(el, done) {
	    function cleanup() {
	      el = el.onload = el.onreadystatechange = el.onerror = null;
	    }
	
	    var error = this.options.error;
	
	    function success() {
	      cleanup();
	      if (done != null) {
	        done();
	      }
	      done = null;
	    }
	
	    function failure(err) {
	      cleanup();
	      error(err);
	      if (done != null) {
	        done();
	      }
	      done = null;
	    }
	
	    function reattachEventListener(el, evt) {
	      var handler = el['on' + evt];
	      if (handler != null) {
	        el['_on' + evt] = handler;
	      }
	    }
	
	    reattachEventListener(el, 'load');
	    reattachEventListener(el, 'error');
	
	    _extends(el, {
	      onload: function onload() {
	        if (el._onload) {
	          try {
	            el._onload.apply(this, Array.prototype.slice.call(arguments, 0));
	          } catch (err) {
	            failure({ msg: 'onload handler failed ' + err + ' @ ' + el.src });
	          }
	        }
	        success();
	      },
	      onerror: function onerror() {
	        if (el._onerror) {
	          try {
	            el._onerror.apply(this, Array.prototype.slice.call(arguments, 0));
	          } catch (err) {
	            failure({ msg: 'onerror handler failed ' + err + ' @ ' + el.src });
	            return;
	          }
	        }
	        failure({ msg: 'remote script failed ' + el.src });
	      },
	      onreadystatechange: function onreadystatechange() {
	        if (/^(loaded|complete)$/.test(el.readyState)) {
	          success();
	        }
	      }
	    });
	  };
	
	  /**
	   * Determines whether to release.
	   *
	   * @param {Object} el The element
	   * @returns {boolean}
	   * @private
	   */
	
	
	  WriteStream.prototype._shouldRelease = function _shouldRelease(el) {
	    var isScript = /^script$/i.test(el.nodeName);
	    return !isScript || !!(this.options.releaseAsync && el.src && el.hasAttribute('async'));
	  };
	
	  return WriteStream;
	}();
	
	exports['default'] = WriteStream;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @file prescribe
	 * @description Tiny, forgiving HTML parser
	 * @version vundefined
	 * @see {@link https://github.com/krux/prescribe/}
	 * @license MIT
	 * @author Derek Brans
	 * @copyright 2016 Krux Digital, Inc
	 */
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["Prescribe"] = factory();
		else
			root["Prescribe"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	
	
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		var _HtmlParser = __webpack_require__(1);
	
		var _HtmlParser2 = _interopRequireDefault(_HtmlParser);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		module.exports = _HtmlParser2['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _supports = __webpack_require__(2);
	
		var supports = _interopRequireWildcard(_supports);
	
		var _streamReaders = __webpack_require__(3);
	
		var streamReaders = _interopRequireWildcard(_streamReaders);
	
		var _fixedReadTokenFactory = __webpack_require__(6);
	
		var _fixedReadTokenFactory2 = _interopRequireDefault(_fixedReadTokenFactory);
	
		var _utils = __webpack_require__(5);
	
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/**
		 * Detection regular expressions.
		 *
		 * Order of detection matters: detection of one can only
		 * succeed if detection of previous didn't
	
		 * @type {Object}
		 */
		var detect = {
		  comment: /^<!--/,
		  endTag: /^<\//,
		  atomicTag: /^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,
		  startTag: /^</,
		  chars: /^[^<]/
		};
	
		/**
		 * HtmlParser provides the capability to parse HTML and return tokens
		 * representing the tags and content.
		 */
	
		var HtmlParser = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} stream The initial parse stream contents.
		   * @param {Object} options The options
		   * @param {boolean} options.autoFix Set to true to automatically fix errors
		   */
		  function HtmlParser() {
		    var _this = this;
	
		    var stream = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
		    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
		    _classCallCheck(this, HtmlParser);
	
		    this.stream = stream;
	
		    var fix = false;
		    var fixedTokenOptions = {};
	
		    for (var key in supports) {
		      if (supports.hasOwnProperty(key)) {
		        if (options.autoFix) {
		          fixedTokenOptions[key + 'Fix'] = true; // !supports[key];
		        }
		        fix = fix || fixedTokenOptions[key + 'Fix'];
		      }
		    }
	
		    if (fix) {
		      this._readToken = (0, _fixedReadTokenFactory2['default'])(this, fixedTokenOptions, function () {
		        return _this._readTokenImpl();
		      });
		      this._peekToken = (0, _fixedReadTokenFactory2['default'])(this, fixedTokenOptions, function () {
		        return _this._peekTokenImpl();
		      });
		    } else {
		      this._readToken = this._readTokenImpl;
		      this._peekToken = this._peekTokenImpl;
		    }
		  }
	
		  /**
		   * Appends the given string to the parse stream.
		   *
		   * @param {string} str The string to append
		   */
	
	
		  HtmlParser.prototype.append = function append(str) {
		    this.stream += str;
		  };
	
		  /**
		   * Prepends the given string to the parse stream.
		   *
		   * @param {string} str The string to prepend
		   */
	
	
		  HtmlParser.prototype.prepend = function prepend(str) {
		    this.stream = str + this.stream;
		  };
	
		  /**
		   * The implementation of the token reading.
		   *
		   * @private
		   * @returns {?Token}
		   */
	
	
		  HtmlParser.prototype._readTokenImpl = function _readTokenImpl() {
		    var token = this._peekTokenImpl();
		    if (token) {
		      this.stream = this.stream.slice(token.length);
		      return token;
		    }
		  };
	
		  /**
		   * The implementation of token peeking.
		   *
		   * @returns {?Token}
		   */
	
	
		  HtmlParser.prototype._peekTokenImpl = function _peekTokenImpl() {
		    for (var type in detect) {
		      if (detect.hasOwnProperty(type)) {
		        if (detect[type].test(this.stream)) {
		          var token = streamReaders[type](this.stream);
	
		          if (token) {
		            if (token.type === 'startTag' && /script|style/i.test(token.tagName)) {
		              return null;
		            } else {
		              token.text = this.stream.substr(0, token.length);
		              return token;
		            }
		          }
		        }
		      }
		    }
		  };
	
		  /**
		   * The public token peeking interface.  Delegates to the basic token peeking
		   * or a version that performs fixups depending on the `autoFix` setting in
		   * options.
		   *
		   * @returns {object}
		   */
	
	
		  HtmlParser.prototype.peekToken = function peekToken() {
		    return this._peekToken();
		  };
	
		  /**
		   * The public token reading interface.  Delegates to the basic token reading
		   * or a version that performs fixups depending on the `autoFix` setting in
		   * options.
		   *
		   * @returns {object}
		   */
	
	
		  HtmlParser.prototype.readToken = function readToken() {
		    return this._readToken();
		  };
	
		  /**
		   * Read tokens and hand to the given handlers.
		   *
		   * @param {Object} handlers The handlers to use for the different tokens.
		   */
	
	
		  HtmlParser.prototype.readTokens = function readTokens(handlers) {
		    var tok = void 0;
		    while (tok = this.readToken()) {
		      // continue until we get an explicit "false" return
		      if (handlers[tok.type] && handlers[tok.type](tok) === false) {
		        return;
		      }
		    }
		  };
	
		  /**
		   * Clears the parse stream.
		   *
		   * @returns {string} The contents of the parse stream before clearing.
		   */
	
	
		  HtmlParser.prototype.clear = function clear() {
		    var rest = this.stream;
		    this.stream = '';
		    return rest;
		  };
	
		  /**
		   * Returns the rest of the parse stream.
		   *
		   * @returns {string} The contents of the parse stream.
		   */
	
	
		  HtmlParser.prototype.rest = function rest() {
		    return this.stream;
		  };
	
		  return HtmlParser;
		}();
	
		exports['default'] = HtmlParser;
	
	
		HtmlParser.tokenToString = function (tok) {
		  return tok.toString();
		};
	
		HtmlParser.escapeAttributes = function (attrs) {
		  var escapedAttrs = {};
	
		  for (var name in attrs) {
		    if (attrs.hasOwnProperty(name)) {
		      escapedAttrs[name] = (0, _utils.escapeQuotes)(attrs[name], null);
		    }
		  }
	
		  return escapedAttrs;
		};
	
		HtmlParser.supports = supports;
	
		for (var key in supports) {
		  if (supports.hasOwnProperty(key)) {
		    HtmlParser.browserHasFlaw = HtmlParser.browserHasFlaw || !supports[key] && key;
		  }
		}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		var tagSoup = false;
		var selfClose = false;
	
		var work = window.document.createElement('div');
	
		try {
		  var html = '<P><I></P></I>';
		  work.innerHTML = html;
		  exports.tagSoup = tagSoup = work.innerHTML !== html;
		} catch (e) {
		  exports.tagSoup = tagSoup = false;
		}
	
		try {
		  work.innerHTML = '<P><i><P></P></i></P>';
		  exports.selfClose = selfClose = work.childNodes.length === 2;
		} catch (e) {
		  exports.selfClose = selfClose = false;
		}
	
		work = null;
	
		exports.tagSoup = tagSoup;
		exports.selfClose = selfClose;
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
	
		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
		exports.comment = comment;
		exports.chars = chars;
		exports.startTag = startTag;
		exports.atomicTag = atomicTag;
		exports.endTag = endTag;
	
		var _tokens = __webpack_require__(4);
	
		/**
		 * Regular Expressions for parsing tags and attributes
		 *
		 * @type {Object}
		 */
		var REGEXES = {
		  startTag: /^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
		  endTag: /^<\/([\-A-Za-z0-9_]+)[^>]*>/,
		  attr: /(?:([\-A-Za-z0-9_]+)\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))|(?:([\-A-Za-z0-9_]+)(\s|$)+)/g,
		  fillAttr: /^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i
		};
	
		/**
		 * Reads a comment token
		 *
		 * @param {string} stream The input stream
		 * @returns {CommentToken}
		 */
		function comment(stream) {
		  var index = stream.indexOf('-->');
		  if (index >= 0) {
		    return new _tokens.CommentToken(stream.substr(4, index - 1), index + 3);
		  }
		}
	
		/**
		 * Reads non-tag characters.
		 *
		 * @param {string} stream The input stream
		 * @returns {CharsToken}
		 */
		function chars(stream) {
		  var index = stream.indexOf('<');
		  return new _tokens.CharsToken(index >= 0 ? index : stream.length);
		}
	
		/**
		 * Reads start tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {StartTagToken}
		 */
		function startTag(stream) {
		  var endTagIndex = stream.indexOf('>');
		  if (endTagIndex !== -1) {
		    var match = stream.match(REGEXES.startTag);
		    if (match) {
		      var _ret = function () {
		        var attrs = {};
		        var booleanAttrs = {};
		        var rest = match[2];
	
		        match[2].replace(REGEXES.attr, function (match, name) {
		          if (!(arguments[2] || arguments[3] || arguments[4] || arguments[5])) {
		            attrs[name] = '';
		          } else if (arguments[5]) {
		            attrs[arguments[5]] = '';
		            booleanAttrs[arguments[5]] = true;
		          } else {
		            attrs[name] = arguments[2] || arguments[3] || arguments[4] || REGEXES.fillAttr.test(name) && name || '';
		          }
	
		          rest = rest.replace(match, '');
		        });
	
		        return {
		          v: new _tokens.StartTagToken(match[1], match[0].length, attrs, booleanAttrs, !!match[3], rest.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
		        };
		      }();
	
		      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
		    }
		  }
		}
	
		/**
		 * Reads atomic tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {AtomicTagToken}
		 */
		function atomicTag(stream) {
		  var start = startTag(stream);
		  if (start) {
		    var rest = stream.slice(start.length);
		    // for optimization, we check first just for the end tag
		    if (rest.match(new RegExp('<\/\\s*' + start.tagName + '\\s*>', 'i'))) {
		      // capturing the content is inefficient, so we do it inside the if
		      var match = rest.match(new RegExp('([\\s\\S]*?)<\/\\s*' + start.tagName + '\\s*>', 'i'));
		      if (match) {
		        return new _tokens.AtomicTagToken(start.tagName, match[0].length + start.length, start.attrs, start.booleanAttrs, match[1]);
		      }
		    }
		  }
		}
	
		/**
		 * Reads an end tag token.
		 *
		 * @param {string} stream The input stream
		 * @returns {EndTagToken}
		 */
		function endTag(stream) {
		  var match = stream.match(REGEXES.endTag);
		  if (match) {
		    return new _tokens.EndTagToken(match[1], match[0].length);
		  }
		}
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.EndTagToken = exports.AtomicTagToken = exports.StartTagToken = exports.TagToken = exports.CharsToken = exports.CommentToken = exports.Token = undefined;
	
		var _utils = __webpack_require__(5);
	
		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
		/**
		 * Token is a base class for all token types parsed.  Note we don't actually
		 * use intheritance due to IE8's non-existent ES5 support.
		 */
		var Token =
		/**
		 * Constructor.
		 *
		 * @param {string} type The type of the Token.
		 * @param {Number} length The length of the Token text.
		 */
		exports.Token = function Token(type, length) {
		  _classCallCheck(this, Token);
	
		  this.type = type;
		  this.length = length;
		  this.text = '';
		};
	
		/**
		 * CommentToken represents comment tags.
		 */
	
	
		var CommentToken = exports.CommentToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} content The content of the comment
		   * @param {Number} length The length of the Token text.
		   */
		  function CommentToken(content, length) {
		    _classCallCheck(this, CommentToken);
	
		    this.type = 'comment';
		    this.length = length || (content ? content.length : 0);
		    this.text = '';
		    this.content = content;
		  }
	
		  CommentToken.prototype.toString = function toString() {
		    return '<!--' + this.content;
		  };
	
		  return CommentToken;
		}();
	
		/**
		 * CharsToken represents non-tag characters.
		 */
	
	
		var CharsToken = exports.CharsToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {Number} length The length of the Token text.
		   */
		  function CharsToken(length) {
		    _classCallCheck(this, CharsToken);
	
		    this.type = 'chars';
		    this.length = length;
		    this.text = '';
		  }
	
		  CharsToken.prototype.toString = function toString() {
		    return this.text;
		  };
	
		  return CharsToken;
		}();
	
		/**
		 * TagToken is a base class for all tag-based Tokens.
		 */
	
	
		var TagToken = exports.TagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} type The type of the token.
		   * @param {string} tagName The tag name.
		   * @param {Number} length The length of the Token text.
		   * @param {Object} attrs The dictionary of attributes and values
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   */
		  function TagToken(type, tagName, length, attrs, booleanAttrs) {
		    _classCallCheck(this, TagToken);
	
		    this.type = type;
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.unary = false;
		    this.html5Unary = false;
		  }
	
		  /**
		   * Formats the given token tag.
		   *
		   * @param {TagToken} tok The TagToken to format.
		   * @param {?string} [content=null] The content of the token.
		   * @returns {string} The formatted tag.
		   */
	
	
		  TagToken.formatTag = function formatTag(tok) {
		    var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	
		    var str = '<' + tok.tagName;
		    for (var key in tok.attrs) {
		      if (tok.attrs.hasOwnProperty(key)) {
		        str += ' ' + key;
	
		        var val = tok.attrs[key];
		        if (typeof tok.booleanAttrs === 'undefined' || typeof tok.booleanAttrs[key] === 'undefined') {
		          str += '="' + (0, _utils.escapeQuotes)(val) + '"';
		        }
		      }
		    }
	
		    if (tok.rest) {
		      str += ' ' + tok.rest;
		    }
	
		    if (tok.unary && !tok.html5Unary) {
		      str += '/>';
		    } else {
		      str += '>';
		    }
	
		    if (content !== undefined && content !== null) {
		      str += content + '</' + tok.tagName + '>';
		    }
	
		    return str;
		  };
	
		  return TagToken;
		}();
	
		/**
		 * StartTagToken represents a start token.
		 */
	
	
		var StartTagToken = exports.StartTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The tag name.
		   * @param {Number} length The length of the Token text
		   * @param {Object} attrs The dictionary of attributes and values
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   * @param {boolean} unary True if the tag is a unary tag
		   * @param {string} rest The rest of the content.
		   */
		  function StartTagToken(tagName, length, attrs, booleanAttrs, unary, rest) {
		    _classCallCheck(this, StartTagToken);
	
		    this.type = 'startTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.html5Unary = false;
		    this.unary = unary;
		    this.rest = rest;
		  }
	
		  StartTagToken.prototype.toString = function toString() {
		    return TagToken.formatTag(this);
		  };
	
		  return StartTagToken;
		}();
	
		/**
		 * AtomicTagToken represents an atomic tag.
		 */
	
	
		var AtomicTagToken = exports.AtomicTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The name of the tag.
		   * @param {Number} length The length of the tag text.
		   * @param {Object} attrs The attributes.
		   * @param {Object} booleanAttrs If an entry has 'true' then the attribute
		   *                              is a boolean attribute
		   * @param {string} content The content of the tag.
		   */
		  function AtomicTagToken(tagName, length, attrs, booleanAttrs, content) {
		    _classCallCheck(this, AtomicTagToken);
	
		    this.type = 'atomicTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		    this.attrs = attrs;
		    this.booleanAttrs = booleanAttrs;
		    this.unary = false;
		    this.html5Unary = false;
		    this.content = content;
		  }
	
		  AtomicTagToken.prototype.toString = function toString() {
		    return TagToken.formatTag(this, this.content);
		  };
	
		  return AtomicTagToken;
		}();
	
		/**
		 * EndTagToken represents an end tag.
		 */
	
	
		var EndTagToken = exports.EndTagToken = function () {
		  /**
		   * Constructor.
		   *
		   * @param {string} tagName The name of the tag.
		   * @param {Number} length The length of the tag text.
		   */
		  function EndTagToken(tagName, length) {
		    _classCallCheck(this, EndTagToken);
	
		    this.type = 'endTag';
		    this.length = length;
		    this.text = '';
		    this.tagName = tagName;
		  }
	
		  EndTagToken.prototype.toString = function toString() {
		    return '</' + this.tagName + '>';
		  };
	
		  return EndTagToken;
		}();
	
	/***/ },
	/* 5 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports.escapeQuotes = escapeQuotes;
	
		/**
		 * Escape quotes in the given value.
		 *
		 * @param {string} value The value to escape.
		 * @param {string} [defaultValue=''] The default value to return if value is falsy.
		 * @returns {string}
		 */
		function escapeQuotes(value) {
		  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
	
		  // There's no lookback in JS, so /(^|[^\\])"/ only matches the first of two `"`s.
		  // Instead, just match anything before a double-quote and escape if it's not already escaped.
		  return !value ? defaultValue : value.replace(/([^"]*)"/g, function (_, prefix) {
		    return (/\\/.test(prefix) ? prefix + '"' : prefix + '\\"'
		    );
		  });
		}
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
	
		exports.__esModule = true;
		exports['default'] = fixedReadTokenFactory;
		/**
		 * Empty Elements - HTML 4.01
		 *
		 * @type {RegExp}
		 */
		var EMPTY = /^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i;
	
		/**
		 * Elements that you can intentionally leave open (and which close themselves)
		 *
		 * @type {RegExp}
		 */
		var CLOSESELF = /^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i;
	
		/**
		 * Corrects a token.
		 *
		 * @param {Token} tok The token to correct
		 * @returns {Token} The corrected token
		 */
		function correct(tok) {
		  if (tok && tok.type === 'startTag') {
		    tok.unary = EMPTY.test(tok.tagName) || tok.unary;
		    tok.html5Unary = !/\/>$/.test(tok.text);
		  }
		  return tok;
		}
	
		/**
		 * Peeks at the next token in the parser.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Function} readTokenImpl The underlying readToken implementation
		 * @returns {Token} The next token
		 */
		function peekToken(parser, readTokenImpl) {
		  var tmp = parser.stream;
		  var tok = correct(readTokenImpl());
		  parser.stream = tmp;
		  return tok;
		}
	
		/**
		 * Closes the last token.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Array<Token>} stack The stack
		 */
		function closeLast(parser, stack) {
		  var tok = stack.pop();
	
		  // prepend close tag to stream.
		  parser.prepend('</' + tok.tagName + '>');
		}
	
		/**
		 * Create a new token stack.
		 *
		 * @returns {Array<Token>}
		 */
		function newStack() {
		  var stack = [];
	
		  stack.last = function () {
		    return this[this.length - 1];
		  };
	
		  stack.lastTagNameEq = function (tagName) {
		    var last = this.last();
		    return last && last.tagName && last.tagName.toUpperCase() === tagName.toUpperCase();
		  };
	
		  stack.containsTagName = function (tagName) {
		    for (var i = 0, tok; tok = this[i]; i++) {
		      if (tok.tagName === tagName) {
		        return true;
		      }
		    }
		    return false;
		  };
	
		  return stack;
		}
	
		/**
		 * Return a readToken implementation that fixes input.
		 *
		 * @param {HtmlParser} parser The parser
		 * @param {Object} options Options for fixing
		 * @param {boolean} options.tagSoupFix True to fix tag soup scenarios
		 * @param {boolean} options.selfCloseFix True to fix self-closing tags
		 * @param {Function} readTokenImpl The underlying readToken implementation
		 * @returns {Function}
		 */
		function fixedReadTokenFactory(parser, options, readTokenImpl) {
		  var stack = newStack();
	
		  var handlers = {
		    startTag: function startTag(tok) {
		      var tagName = tok.tagName;
	
		      if (tagName.toUpperCase() === 'TR' && stack.lastTagNameEq('TABLE')) {
		        parser.prepend('<TBODY>');
		        prepareNextToken();
		      } else if (options.selfCloseFix && CLOSESELF.test(tagName) && stack.containsTagName(tagName)) {
		        if (stack.lastTagNameEq(tagName)) {
		          closeLast(parser, stack);
		        } else {
		          parser.prepend('</' + tok.tagName + '>');
		          prepareNextToken();
		        }
		      } else if (!tok.unary) {
		        stack.push(tok);
		      }
		    },
		    endTag: function endTag(tok) {
		      var last = stack.last();
		      if (last) {
		        if (options.tagSoupFix && !stack.lastTagNameEq(tok.tagName)) {
		          // cleanup tag soup
		          closeLast(parser, stack);
		        } else {
		          stack.pop();
		        }
		      } else if (options.tagSoupFix) {
		        // cleanup tag soup part 2: skip this token
		        readTokenImpl();
		        prepareNextToken();
		      }
		    }
		  };
	
		  function prepareNextToken() {
		    var tok = peekToken(parser, readTokenImpl);
		    if (tok && handlers[tok.type]) {
		      handlers[tok.type](tok);
		    }
		  }
	
		  return function fixedReadToken() {
		    prepareNextToken();
		    return correct(readTokenImpl());
		  };
		}
	
	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.existy = existy;
	exports.isFunction = isFunction;
	exports.each = each;
	exports.eachKey = eachKey;
	exports.defaults = defaults;
	exports.toArray = toArray;
	exports.last = last;
	exports.isTag = isTag;
	exports.isScript = isScript;
	exports.isStyle = isStyle;
	/**
	 * Determine if the thing is not undefined and not null.
	 *
	 * @param {*} thing The thing to test
	 * @returns {boolean} True if the thing is not undefined and not null.
	 */
	function existy(thing) {
	  return thing !== void 0 && thing !== null;
	}
	
	/**
	 * Is this a function?
	 *
	 * @param {*} x The variable to test
	 * @returns {boolean} True if the variable is a function
	 */
	function isFunction(x) {
	  return 'function' === typeof x;
	}
	
	/**
	 * Loop over each item in an array-like value.
	 *
	 * @param {Array<*>} arr The array to loop over
	 * @param {Function} fn The function to call
	 * @param {?Object} target The object to bind to the function
	 */
	function each(arr, fn, target) {
	  var i = void 0;
	  var len = arr && arr.length || 0;
	  for (i = 0; i < len; i++) {
	    fn.call(target, arr[i], i);
	  }
	}
	
	/**
	 * Loop over each key/value pair in a hash.
	 *
	 * @param {Object} obj The object
	 * @param {Function} fn The function to call
	 * @param {?Object} target The object to bind to the function
	 */
	function eachKey(obj, fn, target) {
	  for (var key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      fn.call(target, key, obj[key]);
	    }
	  }
	}
	
	/**
	 * Set default options where some option was not specified.
	 *
	 * @param {Object} options The destination
	 * @param {Object} _defaults The defaults
	 * @returns {Object}
	 */
	function defaults(options, _defaults) {
	  options = options || {};
	  eachKey(_defaults, function (key, val) {
	    if (!existy(options[key])) {
	      options[key] = val;
	    }
	  });
	  return options;
	}
	
	/**
	 * Convert value (e.g., a NodeList) to an array.
	 *
	 * @param {*} obj The object
	 * @returns {Array<*>}
	 */
	function toArray(obj) {
	  try {
	    return Array.prototype.slice.call(obj);
	  } catch (e) {
	    var _ret = function () {
	      var ret = [];
	      each(obj, function (val) {
	        ret.push(val);
	      });
	      return {
	        v: ret
	      };
	    }();
	
	    if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
	  }
	}
	
	/**
	 * Get the last item in an array
	 *
	 * @param {Array<*>} array The array
	 * @returns {*} The last item in the array
	 */
	function last(array) {
	  return array[array.length - 1];
	}
	
	/**
	 * Test if token is a script tag.
	 *
	 * @param {Object} tok The token
	 * @param {String} tag The tag name
	 * @returns {boolean} True if the token is a script tag
	 */
	function isTag(tok, tag) {
	  return !tok || !(tok.type === 'startTag' || tok.type === 'atomicTag') || !('tagName' in tok) ? !1 : !!~tok.tagName.toLowerCase().indexOf(tag);
	}
	
	/**
	 * Test if token is a script tag.
	 *
	 * @param {Object} tok The token
	 * @returns {boolean} True if the token is a script tag
	 */
	function isScript(tok) {
	  return isTag(tok, 'script');
	}
	
	/**
	 * Test if token is a style tag.
	 *
	 * @param {Object} tok The token
	 * @returns {boolean} True if the token is a style tag
	 */
	function isStyle(tok) {
	  return isTag(tok, 'style');
	}

/***/ }
/******/ ])
});
;
//# sourceMappingURL=postscribe.js.map
          }

        },
        "core/src/lib/actions/helpers/unescapeHtmlCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

'use strict';

var document = require('@adobe/reactor-document');
var el = document.createElement('div');

module.exports = function (html) {
  el.innerHTML = html;

  // IE and Firefox differ.
  return el.textContent || el.innerText || html;
};

          }

        },
        "core/src/lib/helpers/findPageScript.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var document = require('@adobe/reactor-document');

var byRegexPattern = function (regexScriptSrcPattern) {
  var scripts = document.querySelectorAll('script');

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    // Find the script that loaded our library. Take into account embed scripts migrated
    // from DTM. We'll also consider that they may have added a querystring for cache-busting
    // or whatever.
    if (regexScriptSrcPattern.test(script.src)) {
      return script;
    }
  }
};

var getTurbine = function () {
  return byRegexPattern(new RegExp(/(launch|satelliteLib)-[^\/]+.js(\?.*)?$/));
};

module.exports = {
  getTurbine: getTurbine,
  byRegexPattern: byRegexPattern
};

          }

        },
        "core/src/lib/actions/helpers/decorators/decorateGlobalJavaScriptCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
'use strict';

var Promise = require('@adobe/reactor-promise');

module.exports = function (_, source) {
  // The line break after the source is important in case their last line of code is a comment.
  return {
    code: '<scr' + 'ipt>\n' + source + '\n</scr' + 'ipt>',
    promise: Promise.resolve()
  };
};

          }

        },
        "core/src/lib/actions/helpers/decorators/decorateNonGlobalJavaScriptCode.js": {
          "script": function(module, exports, require, turbine) {
/*
Copyright 2020 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
'use strict';

var Promise = require('@adobe/reactor-promise');
var id = 0;

module.exports = function (action, source) {
  var runScriptFnName = '_runScript' + ++id;

  var promise = new Promise(function (resolve, reject) {
    _satellite[runScriptFnName] = function (fn) {
      delete _satellite[runScriptFnName];

      // Use Promise constructor instead of Promise.resolve() so we can
      // catch errors from custom code.
      new Promise(function (_resolve) {
        _resolve(
          fn.call(
            action.event.element,
            action.event,
            action.event.target,
            Promise
          )
        );
      }).then(resolve, reject);
    };
  });

  // The line break after the source is important in case their last line of code is a comment.
  var code =
    '<scr' +
    'ipt>_satellite["' +
    runScriptFnName +
    '"](function(event, target, Promise) {\n' +
    source +
    '\n});</scr' +
    'ipt>';

  return {
    code: code,
    promise: promise
  };
};

          }

        },
        "core/src/lib/actions/helpers/decorators/decorateHtmlCode.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var Promise = require('@adobe/reactor-promise');

var callbackId = 0;
var htmlCodePromises = {};

window._satellite = window._satellite || {};

/**
 * Public function intended to be called by the user.
 * @param {number} callbackId The identifier passed to _satellite._onCustomCodeSuccess().
 */
window._satellite._onCustomCodeSuccess = function (callbackId) {
  var promiseHandlers = htmlCodePromises[callbackId];
  if (!promiseHandlers) {
    return;
  }

  delete htmlCodePromises[callbackId];
  promiseHandlers.resolve();
};

/**
 * Public function intended to be called by the user.
 * @param {number} callbackId The identifier passed to _satellite._onCustomCodeSuccess().
 */
window._satellite._onCustomCodeFailure = function (callbackId) {
  var promiseHandlers = htmlCodePromises[callbackId];
  if (!promiseHandlers) {
    return;
  }

  delete htmlCodePromises[callbackId];
  promiseHandlers.reject();
};

var reactorCallbackIdShouldBeReplaced = function (source) {
  return source.indexOf('${reactorCallbackId}') !== -1;
};

var replaceCallbacksIds = function (source, callbackId) {
  return source.replace(/\${reactorCallbackId}/g, callbackId);
};

var isSourceLoadedFromFile = function (action) {
  return action.settings.isExternal;
};

module.exports = function (action, source) {
  // We need to replace tokens only for sources loaded from external files. The sources from
  // inside the container are automatically taken care by Turbine.
  if (isSourceLoadedFromFile(action)) {
    source = turbine.replaceTokens(source, action.event);
  }

  var promise;

  if (reactorCallbackIdShouldBeReplaced(source)) {
    promise = new Promise(function (resolve, reject) {
      htmlCodePromises[String(callbackId)] = {
        resolve: resolve,
        reject: reject
      };
    });

    source = replaceCallbacksIds(source, callbackId);
    callbackId += 1;
  } else {
    promise = Promise.resolve();
  }

  return {
    code: source,
    promise: promise
  };
};

          }

        },
        "core/src/lib/actions/helpers/getSourceByUrl.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';
var loadScript = require('@adobe/reactor-load-script');
var Promise = require('@adobe/reactor-promise');
var findScriptByRegexPattern =
  require('../../helpers/findPageScript').byRegexPattern;

var codeBySourceUrl = {};
var scriptStore = {};

var loadScriptOnlyOnce = function (url) {
  if (!scriptStore[url]) {
    scriptStore[url] = loadScript(url);
  }

  return scriptStore[url];
};

_satellite.__registerScript = function (scriptGuid, code) {
  var scriptUrl;
  if (document.currentScript) {
    // use getAttribute in case it's a relative url
    scriptUrl = document.currentScript.getAttribute('src');
  } else {
    var pattern = new RegExp('.*' + scriptGuid + '.*');
    // use getAttribute in case it's a relative url
    scriptUrl = findScriptByRegexPattern(pattern).getAttribute('src');
  }
  codeBySourceUrl[scriptUrl] = code;
};

module.exports = function (sourceUrl) {
  if (codeBySourceUrl[sourceUrl]) {
    return Promise.resolve(codeBySourceUrl[sourceUrl]);
  } else {
    return new Promise(function (resolve) {
      loadScriptOnlyOnce(sourceUrl).then(
        function () {
          resolve(codeBySourceUrl[sourceUrl]);
        },
        function () {
          resolve();
        }
      );
    });
  }
};

          }

        },
        "core/src/lib/helpers/textMatch.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Performs a string match based on another string or a regex.
 * @param {string} str The string to be evaluate.
 * @param {string|RegExp} pattern The pattern to match against.
 * @returns {boolean} Whether the string matches the pattern.
 */
module.exports = function (str, pattern) {
  if (pattern == null) {
    throw new Error('Illegal Argument: Pattern is not present');
  }
  if (str == null) {
    return false;
  }
  if (typeof pattern === 'string') {
    return str === pattern;
  } else if (pattern instanceof RegExp) {
    return pattern.test(str);
  } else {
    return false;
  }
};

          }

        },
        "core/src/lib/events/helpers/debounce.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

/**
 * Debounce function. Returns a proxy function that, when called multiple times, will only execute
 * the target function after a certain delay has passed without the proxy function being called
 * again.
 * @param {Function} fn The target function to call once the delay period has passed.
 * @param {number} delay The number of milliseconds that must pass before the target function is
 * called.
 * @param {Object} [context] The context in which to call the target function.
 * @returns {Function}
 */
module.exports = function (fn, delay, context) {
  var timeoutId = null;
  return function () {
    var ctx = context || this;
    var args = arguments;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      fn.apply(ctx, args);
    }, delay);
  };
};

          }

        },
        "core/src/lib/events/helpers/once.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/
'use strict';

/**
 * Returns a proxy function that, when call the first time, will call a target function.
 * Subsequent calls will not call the target function.
 * @param {Function} fn That target function to call a single time.
 * @param {Object} [context] The context in which to call the target function.
 * @returns {Function}
 */
module.exports = function (fn, context) {
  var result;

  return function () {
    if (fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
};

          }

        },
        "core/src/lib/events/helpers/weakMap.js": {
          "script": function(module, exports, require, turbine) {
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// This is copied from
// https://github.com/webcomponents/webcomponentsjs/blob/7dc6731eb9c9f9c3fea4419c50c6ee3ca0367544/src/WeakMap/WeakMap.js
// because there's not an npm package that makes it easy to import only WeakMap. We've also
// modified it slightly so that it doesn't ever set window.WeakMap.

'use strict';

var window = require('@adobe/reactor-window');
var WeakMap = window.WeakMap;

if (typeof WeakMap === 'undefined') {
  var defineProperty = Object.defineProperty;
  var counter = Date.now() % 1e9;

  WeakMap = function () {
    this.name = '__st' + ((Math.random() * 1e9) >>> 0) + (counter++ + '__');
  };

  WeakMap.prototype = {
    set: function (key, value) {
      var entry = key[this.name];
      if (entry && entry[0] === key) entry[1] = value;
      else
        defineProperty(key, this.name, { value: [key, value], writable: true });
      return this;
    },
    get: function (key) {
      var entry;
      return (entry = key[this.name]) && entry[0] === key
        ? entry[1]
        : undefined;
    },
    delete: function (key) {
      var entry = key[this.name];
      if (!entry || entry[0] !== key) return false;
      entry[0] = entry[1] = undefined;
      return true;
    },
    has: function (key) {
      var entry = key[this.name];
      if (!entry) return false;
      return entry[0] === key;
    }
  };
}

module.exports = WeakMap;

          }

        },
        "core/src/lib/events/helpers/matchesProperties.js": {
          "script": function(module, exports, require, turbine) {
/***************************************************************************************
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 ****************************************************************************************/

'use strict';

var textMatch = require('./../../helpers/textMatch');

var getElementProperty = function (element, property) {
  if (property === '@text' || property === 'innerText') {
    return element.textContent || element.innerText;
  } else if (property in element) {
    return element[property];
  } else if (element.getAttribute) {
    return element.getAttribute(property);
  }
};

/**
 * Determines whether an element's properties and their values match a set of properties and values.
 * If the element doesn't have the property, the element's attribute with the same name will be
 * evaluated if it exists.
 * @param {HTMLElement} element The element to match against.
 * @param {Object[]} properties The criteria of properties to match again.
 * @param {string} properties.name The property name.
 * @param {string} properties.value The property value.
 * @param {boolean} [properties.valueIsRegex=false] Whether <code>value</code> on the
 * object instance is intended to be a regular expression.
 * @returns {boolean} Whether the element matches the criteria.
 */
module.exports = function (element, properties) {
  if (properties) {
    return properties.every(function (property) {
      var actualValue = getElementProperty(element, property.name);
      var criterionValue = property.valueIsRegex
        ? new RegExp(property.value, 'i')
        : property.value;
      return textMatch(actualValue, criterionValue);
    });
  }
  return true;
};

          }

        }
      }
    }
  },
  "company": {
    "orgId": "9644AD4E5628B1ED7F000101@AdobeOrg",
    "dynamicCdnEnabled": false
  },
  "property": {
    "name": "kp - Healthy KP.org",
    "settings": {
      "domains": [
        "kp.org",
        "kaiserpermanente.org"
      ],
      "undefinedVarsReturnEmpty": true,
      "ruleComponentSequencingEnabled": false
    },
    "id": "PR626b896ff398411eae3f404e880eb199"
  },
  "rules": [
    {
      "id": "RL07c045c79bd447d898e27ff20bd3c696",
      "name": "Dynatrace_prod",
      "events": [
        {
          "modulePath": "core/src/lib/events/pageBottom.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/valueComparison.js",
          "settings": {
            "comparison": {
              "operator": "matchesRegex"
            },
            "leftOperand": "%subdomain%",
            "rightOperand": "^(healthy|espanol)$"
          }
        },
        {
          "modulePath": "core/src/lib/conditions/path.js",
          "settings": {
            "paths": [
              {
                "value": ".*\\/(payment-profile|managecreditcard).*",
                "valueIsRegex": true
              }
            ]
          },
          "negate": true
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "try{\n  var u = document.URL;\n  var src;\n  var page;\n\n  var test = [\n    {\n      page: \"healthy.kaiserpermanente.org\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/2244804940fc3be6_complete.js\"\n    },{\n      page: \"espanol.kaiserpermanente.org\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/2244804940fc3be6_complete.js\"\n    },{\n      page: \"/secure/appointments\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/29faaf0babaddab6_complete.js\"\n    },{\n      page: \"/appointments/e-visits\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/dc47bf49108c983e_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/appointment-center-new\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/dc47bf49108c983e_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/my-plan-and-coverage\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/875abb30997caafd_complete.js\"\n    },{\n      page: \"/secure/coverage-costs\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/875abb30997caafd_complete.js\"\n    },{\n      page: \"/secure/my-documents\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/6b01da4a6c07a309_complete.js\"\n    },{\n      page: \"doctors-locations\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/9998adb6b210c2b7_complete.js\"\n    },{\n      page: \"/health-wellness/drug-encyclopedia\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/b892935a0354adb7_complete.js\"\n    },{\n      page: \"/health-wellness/health-encyclopedia\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/98c2f3ef80457732_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/message-center\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/a75bb6683c6d908f_complete.js\"\n    },{\n      page: \"/secure/messages\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/857a1840d4000774_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/pharmacy\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/f49b11013259167b_complete.js\"\n    },{\n      page: \"/secure/pharmacy\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/f2975776fceed4f0_complete.js\"\n    },{\n      page: \"/register/member-registration\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/b086ca23639195a3_complete.js\"\n    },{\n      page: \"/shop-plans\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/1d04556e8a19d8a1_complete.js\"\n    }\n  ]\n\n  for(var i=0; i<test.length; i++){\n    if(u.indexOf(test[i].page) > -1){\n      src = test[i].src;\n      page = test[i].page;\n    }\n  }\n\n  _satellite.logger.log('dynatrace source:',src);\n  _satellite.logger.log('dynatrace page:',page);\n\n  if(src != undefined){\n    var head = document.getElementsByTagName('head').item(0);\n    var script = document.createElement('script');\n    script.setAttribute('type', 'text/javascript');\n    script.setAttribute('src', src);\n    script.setAttribute('crossorigin', \"anonymous\");\n    head.appendChild(script);\n  }\n}catch(e){\n  _satellite.logger.log('issue with dynatrace',e);\n}",
            "language": "javascript"
          }
        }
      ]
    },
    {
      "id": "RL0904ee7e604245aeb5ef6ede22d76e0a",
      "name": "Qualtrics Dev",
      "events": [
        {
          "modulePath": "core/src/lib/events/windowLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var subdomain =  window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;
console.log("qualtrics subdomain",subdomain)
if(subdomain === "healthy" || subdomain === "espanol" || subdomain === "wa-member-qa" || subdomain === "wa-member" || subdomain === "wa-member2" || subdomain === "wa-member2-qa" || subdomain === "wa-member2-dev" || subdomain === "wa-member-dev" || subdomain === "wa-momentum" || subdomain === "wa-momentum-qa" || subdomain === "wa-momentum-dev"){
  return false;
}else{
  return true;
}
}
          }
        },
        {
          "modulePath": "core/src/lib/conditions/path.js",
          "settings": {
            "paths": [
              {
                "value": ".*expresscheckin.*",
                "valueIsRegex": true
              }
            ]
          },
          "negate": true
        }
      ],
      "actions": [
        {
          "modulePath": "qualtrics-website-feedback/src/lib/actions/loadProject.js",
          "settings": {
            "brandID": "kp",
            "projectID": "ZN_5A9Y5rNOtTreJfM"
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "global": true,
            "source": 'https://assets.adobedtm.com/dca8f73c45d4/3a5f7a2d196e/364e8900c69f/RC5b79a6f722564094893f31cd23e9c0d9-source.js',
            "language": "javascript",
            "isExternal": true
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/dca8f73c45d4/3a5f7a2d196e/364e8900c69f/RC1a28e3ed51574ebbb272ec786ffa172c-source.js',
            "language": "html",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RL5e47831820134694889739df72501840",
      "name": "Dynatrace (dev)",
      "events": [
        {
          "modulePath": "core/src/lib/events/pageBottom.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/valueComparison.js",
          "settings": {
            "comparison": {
              "operator": "matchesRegex"
            },
            "leftOperand": "%subdomain%",
            "rightOperand": "^(hpp(|b)|kpos|kpoi1).*$"
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "try{\n  var u = document.URL;\n  var src;\n  var page;\n\n  var test = [\n    {\n      page: \".kaiserpermanente.org\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/114cf834d5fbf36b_complete.js\"\n    },{\n      page: \"/secure/appointments\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/eea9676b943f1f27_complete.js\"\n    },{\n      page: \"/appointments/e-visits\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/21d462df955e887b_complete.js\"\n    },{\n      page: \"/appointments/e-visits/\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/8c78f110b39aeb14_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/appointment-center-new\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/21d462df955e887b_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/my-plan-and-coverage\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/6d0e12989aa91a11_complete.js\"\n    },{\n      page: \"/secure/coverage-costs\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/6d0e12989aa91a11_complete.js\"\n    },{\n      page: \"/secure/my-documents\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/96450e994396cb50_complete.js\"\n    },{\n      page: \"doctors-locations\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/5fc0c3b30a74b393_complete.js\"\n    },{\n      page: \"/health-wellness/drug-encyclopedia\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/6c9d1b654bcbcc6c_complete.js\"\n    },{\n      page: \"/health-wellness/health-encyclopedia\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/fbbf865de01064e2_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/message-center\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/d7fcb33ff339e9c0_complete.js\"\n    },{\n      page: \"/secure/messages\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/2ceaafe2b5338858_complete.js\"\n    },{\n      page: \"/health/mycare/consumer/my-health-manager/pharmacy\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/470bd2f9c3268f24_complete.js\"\n    },{\n      page: \"/secure/pharmacy\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/82fafa4e5e1c1c57_complete.js\"\n    },{\n      page: \"/register/member-registration\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/81541022c70b7a07_complete.js\"\n    },{\n      page: \"/shop-plans\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/ea96fd35-4a91-4571-9999-391fba61c917/1d04556e8a19d8a1_complete.js\"\n    }\n  ]\n\n  for(var i=0; i<test.length; i++){\n    if(u.indexOf(test[i].page) > -1){\n      src = test[i].src;\n      page = test[i].page;\n    }\n  }\n\n  _satellite.logger.log('dynatrace source:',src);\n  _satellite.logger.log('dynatrace page:',page);\n\n  if(src != undefined){\n    var head = document.getElementsByTagName('head').item(0);\n    var script = document.createElement('script');\n    script.setAttribute('type', 'text/javascript');\n    script.setAttribute('src', src);\n    script.setAttribute('crossorigin', \"anonymous\");\n    head.appendChild(script);\n  }\n}catch(e){\n  _satellite.logger.log('issue with dynatrace',e);\n}",
            "language": "javascript"
          }
        }
      ]
    },
    {
      "id": "RL6a68ba73c05145f0baf1d00292620a61",
      "name": "Pre-EffecttiveRedirect",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/cookie.js",
          "settings": {
            "name": "OB",
            "value": "^[4-7]$",
            "valueIsRegex": true
          }
        },
        {
          "modulePath": "core/src/lib/conditions/cookie.js",
          "settings": {
            "name": "isSignedOn",
            "value": "true"
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "var pagePath = location.pathname;\nvar host = location.host;\nvar redirectSecureUrl = \"/secure/new-members/pre-effective/s-whoops\";\nvar redirectNonSecureUrl = \"/secure/new-members/pre-effective/ns-whoops\";\nvar redirectUrl = \"\";\nvar isRedirect = true;\nvar regionName = _satellite.getVar(\"getReionNameFromROM\");\nvar allowedRegions = [\"/colorado\",\"/oregon-washington\",\"southern-california\",\"hawaii\",\"georgia\"];\nvar allowedUrls = [\"/secure/new-members/pre-effective/get-started\",\"/secure/profile/personal-info\", \n                   \"/secure/new-members/pre-effective/ns-whoops\",\"/secure/new-members/pre-effective/s-whoops\",\n                   \"/health/mycare/consumer/myprofilehome/myprofile/personal-information\",\"/secure/profile/member-info\",\n                   \"/secure/guided-member-welcome/task-hub\",\"/secure/guided-member-welcome/blank-page-for-iframe-listener.html\",\n                   \"/secure/medical-record\",\"/secure/appointments/past-visits\",\"/secure/benefits/benefit-summary\", \n                   \"/secure/coverage-costs/how-your-plan-works\",\"/secure-experience-fragments/prompts/consents/terms-conditions/gc.mobile.html\",\n                   \"/secure/shop-plans/senior-advantage-choice-ppo\",\"/secure/shop-plans/choice-ppo-plan\"];\n\nfor (i = 0; i < allowedRegions.length; i++) {\n    if (pagePath.includes(allowedRegions[i])){\n        allowedUrls = [\"/secure/new-members/pre-effective/get-started\",\"/secure/profile/personal-info\", \n                   \"/secure/new-members/pre-effective/ns-whoops\",\"/secure/new-members/pre-effective/s-whoops\",\n                   \"/health/mycare/consumer/myprofilehome/myprofile/personal-information\",\"/secure/profile/member-info\",\n                   \"/secure/guided-member-welcome/task-hub\",\"/doctors-locations\",\"/physicians\",\"/clinicians\",\"/providers\",\"/provider\",\n                   \"/choose-physician\",\"/secure/guided-member-welcome/blank-page-for-iframe-listener.html\",\"/secure/medical-record\",\n                   \"/secure/appointments/past-visits\",\"/secure/benefits/benefit-summary\", \"/secure/coverage-costs/how-your-plan-works\",\n                   \"/secure-experience-fragments/prompts/consents/terms-conditions/gc.mobile.html\",\n                   \"/secure/shop-plans/senior-advantage-choice-ppo\",\"/secure/shop-plans/choice-ppo-plan\"];\n    }\n}\n\nfor (i = 0; i < allowedUrls.length; i++) {\n    if (pagePath.includes(allowedUrls[i]))\n        isRedirect = false;\n}\n_satellite.logger.log(\"Rule - Pre-Effective Redirect - \",\"Should Redirect? = \",isRedirect);\nif (isRedirect) {\n    var language = _satellite.getVar(\"Language\").split(\"-\")[0];\n    var region = _satellite.getVar(\"getReionNameFromROM\");\n   _satellite.logger.log(\"Rule - Pre-Effective Redirect - \",\"Language = \",language);\n   _satellite.logger.log(\"Rule - Pre-Effective Redirect - \",\"Region = \",region);\n   if (location.pathname.indexOf(\"secure\") > 0 || location.pathname.indexOf(\"health/mycare\") > 0) {\n        redirectUrl = redirectSecureUrl;\n    } else {\n        redirectUrl = redirectNonSecureUrl;\n    }\n\n    if (language == \"en\"){\n        redirectUrl = location.origin + \"/\" + region + redirectUrl;\n    }\n    else{\n        redirectUrl = location.origin + \"/\" + language + \"/\" + region + redirectUrl;\n    }\n    _satellite.logger.log(\"Rule - Pre-Effective Redirect - \",\"Redirect URL = \",redirectUrl);\n  \n    window.location.replace(redirectUrl);\n}\n_satellite.logger.log(\"Rule - Pre-Effective Redirect - \",\"Redirect#####\",redirectUrl);",
            "language": "javascript"
          }
        }
      ]
    },
    {
      "id": "RL6ebdb83b660d409ebdefa34e3006975b",
      "name": "Blue Triangle (prod)",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/valueComparison.js",
          "settings": {
            "comparison": {
              "operator": "matchesRegex"
            },
            "leftOperand": "%subdomain%",
            "rightOperand": "^(healthy|espanol|kpov|wa|wa-member|wa-member(2|3))$"
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "<script async=\"true\" type=\"text/javascript\" src=\"//kaiserpermanente19051z.btttag.com/btt.js\"></script>",
            "language": "html"
          }
        }
      ]
    },
    {
      "id": "RL74495073560245adbcd9456125519f80",
      "name": "Qualtrics - Find a Doctor Locations - StickyFeedback",
      "events": [
        {
          "modulePath": "core/src/lib/events/historyChange.js",
          "settings": {
          },
          "ruleOrder": 50.0
        },
        {
          "modulePath": "core/src/lib/events/windowLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/path.js",
          "settings": {
            "paths": [
              {
                "value": "/doctors-locations",
                "valueIsRegex": true
              }
            ]
          }
        },
        {
          "modulePath": "core/src/lib/conditions/hash.js",
          "settings": {
            "hashes": [
              {
                "value": "/search-form",
                "valueIsRegex": true
              }
            ]
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "global": true,
            "source": 'https://assets.adobedtm.com/dca8f73c45d4/3a5f7a2d196e/364e8900c69f/RCf6f26b3506034779b238ed89685161f0-source.js',
            "language": "javascript",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RL92b0106146104b2899e7fbea4f643087",
      "name": "Pre-EffectiveMMR",
      "events": [
        {
          "modulePath": "core/src/lib/events/customCode.js",
          "settings": {
            "source": function(trigger) {
  var waitForJQuery = setInterval(function () {
    if (typeof jQuery == "function") {
        _satellite.logger.log("AT:Pre-EffectiveMMR - Triggering the Rule");
        trigger();
        clearInterval(waitForJQuery);
    }
}, 10);
}
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/cookie.js",
          "settings": {
            "name": "OB",
            "value": "^[4-6]$",
            "valueIsRegex": true
          }
        },
        {
          "modulePath": "core/src/lib/conditions/cookie.js",
          "settings": {
            "name": "isSignedOn",
            "value": "true"
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/dca8f73c45d4/3a5f7a2d196e/364e8900c69f/RCae6e61cc0bb746e0b1d82d3aa8d44e9c-source.js',
            "language": "javascript",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RLa1e825230b2d43a4acf8bd609b6e0d08",
      "name": "test kpCustomEvent ss009",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "_satellite.kpCustomEvent = function(name, data) {console.log('kpCustomEvent called: ' + name)}",
            "language": "javascript"
          }
        }
      ]
    },
    {
      "id": "RLd72bc190e9b24eeebcffb7f3f648814d",
      "name": "Qualtrics Prod",
      "events": [
        {
          "modulePath": "core/src/lib/events/pageBottom.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var subdomain =  window.location.host.split('.')[1] ? window.location.host.split('.')[0] : false;
console.log("qualtrics subdomain",subdomain)
if(subdomain === "healthy"|| subdomain === "espanol"){
  return true;
}else{
  return false;
}
}
          }
        },
        {
          "modulePath": "core/src/lib/conditions/path.js",
          "settings": {
            "paths": [
              {
                "value": ".*expresscheckin.*",
                "valueIsRegex": true
              }
            ]
          },
          "negate": true
        }
      ],
      "actions": [
        {
          "modulePath": "qualtrics-website-feedback/src/lib/actions/loadProject.js",
          "settings": {
            "brandID": "kp",
            "projectID": "ZN_a4M7d69TmslUjze"
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "global": true,
            "source": "window.addEventListener(\"qsi_js_loaded\", function() {\n  \n  loadQualtricsWidget(\"Custom qualtrics qsi_js_loaded event\");\n}, false);\n\n document.addEventListener(\"at-request-failed\", function(event) { \n    loadQualtricsWidget(\"Custom qualtrics at-request-failed event\");\n });\n \n document.addEventListener(\"at-content-rendering-failed\", function(event) { \n   loadQualtricsWidget(\"Custom qualtrics at-content-rendering-failed event\");\n });\ndocument.addEventListener(\"at-request-succeeded\", function(event) { \n   loadQualtricsWidget(\"Custom qualtrics at-request-succeeded event\");\n });\n\n\nfunction loadQualtricsWidget(log){\n  if (typeof document.querySelector(\"#QSIFeedbackButton-btn\") === \"undefined\" || document.querySelector(\"#QSIFeedbackButton-btn\") === null) { \n   console.log(log);\n   QSI.API.unload();\n   QSI.API.load().then(QSI.API.run());\n  }\n }",
            "language": "javascript"
          }
        },
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "<!--\n  #QSIFeedbackButton-pullup-container {\n      top: 10% !important;\n      height: 85% !important;\n  }  \n-->\n\n<style>  \n  #QSIFeedbackButton-overlay-container {\n      width: 70% !important;\n      height: 85% !important;\n  }\n</style>",
            "language": "html"
          }
        }
      ]
    },
    {
      "id": "RLd927b5036a6349dbab6a7aabe6781a2a",
      "name": "Dynatrace - Epic",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  return window.location.host === "fs070.kaiserpermanente.org";
}
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "<script type=\"text/javascript\" src=\"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/172395d2a946b29a_complete.js\" crossorigin=\"anonymous\"></script>",
            "language": "html"
          }
        }
      ]
    },
    {
      "id": "RLdc7975fa2c75464b9c49c37a5fc8fd13",
      "name": "Blue Triangle (dev)",
      "events": [
        {
          "modulePath": "core/src/lib/events/libraryLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/valueComparison.js",
          "settings": {
            "comparison": {
              "operator": "matchesRegex"
            },
            "leftOperand": "%subdomain%",
            "rightOperand": "^(wppdev(3|4)|hint1|hpp(|b)|hqab|hreg(1|2)|hprev|wa-qa|fs070|wa-member-qa|wa-member(2|3)-qa|kpo(d1|i[1-2]|s(|[2-4])))$"
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "<script async=\"true\" type=\"text/javascript\" src=\"//kaiserpreprod500z.btttag.com/btt.js\"></script>",
            "language": "html"
          }
        }
      ]
    },
    {
      "id": "RLde95062caa364fe197c9ceb94cf9eef9",
      "name": "Dynatrace (dev - hreg1 & hreg2)",
      "events": [
        {
          "modulePath": "core/src/lib/events/pageBottom.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/valueComparison.js",
          "settings": {
            "comparison": {
              "operator": "matchesRegex"
            },
            "leftOperand": "%subdomain%",
            "rightOperand": "^(hreg1|hreg2)$"
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": "try{\n  var u = document.URL;\n  var src;\n  var page;\n\n  var test = [\n    {\n      page: \"hreg1.kaiserpermanente.org\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/1474449316eba36d_complete.js\"\n    },\n    {\n      page: \"hreg2.kaiserpermanente.org\",\n      src: \"https://dynatrace-ag1.kp.org/jstag/managed/183e7a38-c2ef-43c6-a918-3f496f52472b/ab4bd83f3e47d434_complete.js\"\n    }\n  ]\n\n  for(var i=0; i<test.length; i++){\n    if(u.indexOf(test[i].page) > -1){\n      src = test[i].src;\n      page = test[i].page;\n    }\n  }\n\n  _satellite.logger.log('dynatrace source:',src);\n  _satellite.logger.log('dynatrace page:',page);\n\n  if(src != undefined){\n    var head = document.getElementsByTagName('head').item(0);\n    var script = document.createElement('script');\n    script.setAttribute('type', 'text/javascript');\n    script.setAttribute('src', src);\n    script.setAttribute('crossorigin', \"anonymous\");\n    head.appendChild(script);\n  }\n}catch(e){\n  _satellite.logger.log('issue with dynatrace',e);\n}",
            "language": "javascript"
          }
        }
      ]
    },
    {
      "id": "RLe5f74b79838248b7ab12862649b497ac",
      "name": "Qualtrics Delete QSI_History",
      "events": [
        {
          "modulePath": "core/src/lib/events/windowLoaded.js",
          "settings": {
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [

      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "source": 'https://assets.adobedtm.com/dca8f73c45d4/3a5f7a2d196e/364e8900c69f/RCa6a9d1966e6e485c8341ba7f7e254e07-source.js',
            "language": "javascript",
            "isExternal": true
          }
        }
      ]
    },
    {
      "id": "RLf92d5f0cb86c4a4e9a23857e564f6a9b",
      "name": "Dynatrace Remove wa-member",
      "events": [
        {
          "modulePath": "core/src/lib/events/elementExists.js",
          "settings": {
            "elementSelector": "script[src*=\"js-cdn.dynatrace.com\"]"
          },
          "ruleOrder": 50.0
        }
      ],
      "conditions": [
        {
          "modulePath": "core/src/lib/conditions/customCode.js",
          "settings": {
            "source": function(event, target) {
  var hostname = window.location.host;
var userAgent = window.navigator.userAgent;
console.log("dynatrace hostname", hostname);
console.log("dynatrace userAgent", userAgent);
if(hostname.indexOf("wa-member") > -1){
  console.log("dynatrace wa-member included");
  if(userAgent.indexOf("BTTAgent") > -1  || userAgent.indexOf("RuxitSynthetic") > -1 ){
    console.log("dynatrace useragent included");
    return true;
  }else{
    return false;
  }
}else{
  return false;
}
}
          }
        }
      ],
      "actions": [
        {
          "modulePath": "core/src/lib/actions/customCode.js",
          "settings": {
            "global": true,
            "source": 'https://assets.adobedtm.com/dca8f73c45d4/3a5f7a2d196e/364e8900c69f/RCd289d0f640c846b486ada519589e8451-source.js',
            "language": "javascript",
            "isExternal": true
          }
        }
      ]
    }
  ]
}
})();

var _satellite = (function () {
	'use strict';

	if (!window.atob) { console.warn('Adobe Launch is unsupported in IE 9 and below.'); return; }

	var reactorDocument = document;

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty$1.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};

	var reactorObjectAssign = objectAssign;

	var reactorWindow = window;

	/***************************************************************************************
	 * (c) 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createDynamicHostResolver = function (
	  turbineEmbedCode,
	  dynamicCdnEnabled,
	  cdnAllowList,
	  debugController
	) {
	  // A missing list means that we are not trying to dynamic replace (archives,
	  // sftp, no premium CDN option enabled on the company).
	  // even an empty list is flagging to us that we're trying to enforce dynamic
	  var isDynamicEnforced = Boolean(
	    dynamicCdnEnabled && Array.isArray(cdnAllowList)
	  );
	  var shouldAugment = Boolean(isDynamicEnforced && turbineEmbedCode);

	  // using document.createElement('a') because IE10/11 doesn't support new URL()
	  var turbineUrl = document.createElement('a');
	  if (isDynamicEnforced) {
	    var throwUnavailableEmbedCode = function () {
	      var missingEmbedCodeError = new Error(
	        'Unable to find the Library Embed Code for Dynamic Host Resolution.'
	      );
	      missingEmbedCodeError.code = 'dynamic_host_resolver_constructor_error';
	      throw missingEmbedCodeError;
	    };
	    if (turbineEmbedCode) {
	      if (!/^((https?:)?\/\/).+/.test(turbineEmbedCode)) {
	        throwUnavailableEmbedCode();
	      }
	      if (/^\/\/.+/.test(turbineEmbedCode)) {
	        // for IE 10, you must throw on the protocol
	        turbineUrl.href = reactorWindow.location.protocol + turbineEmbedCode;
	      } else {
	        turbineUrl.href = turbineEmbedCode;
	      }
	    }

	    // check URL construction
	    if (!turbineUrl.hostname) {
	      throwUnavailableEmbedCode();
	    }
	    // is this within the allowed list of hosts?
	    if (cdnAllowList.indexOf(turbineUrl.hostname) === -1) {
	      var dynamicDeniedError = new Error(
	        'This library is not authorized for this domain. ' +
	          'Please contact your CSM for more information.'
	      );
	      dynamicDeniedError.code = 'dynamic_host_not_allowed';
	      throw dynamicDeniedError;
	    }
	  }

	  /**
	   * Returns the host of the Turbine embed code, or an empty string if Dynamic Host
	   * is not enabled.
	   * @returns {string}
	   */
	  var memoizedHostResult;
	  var getTurbineHost = function () {
	    if (memoizedHostResult != null) {
	      return memoizedHostResult;
	    }

	    if (shouldAugment) {
	      // be sure we always force https to Adobe managed domains.
	      // IE 10/11 returns the :443 protocol when modern browsers don't, so this replacement
	      // is bringing every browser in line with the same return value
	      var sanitizedHost = turbineUrl.host;
	      if (/:80$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':80', '');
	      } else if (/:80\/$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':80/', '');
	      } else if (/:443$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':443', '');
	      } else if (/:443\/$/.test(sanitizedHost)) {
	        sanitizedHost = sanitizedHost.replace(':443/', '');
	      }

	      memoizedHostResult = turbineUrl.protocol + '//' + sanitizedHost;
	    } else {
	      memoizedHostResult = '';
	    }

	    return memoizedHostResult;
	  };

	  /**
	   * Returns a url decorated with the host of the Turbine embed code. If Dynamic host
	   * is disabled, the original sourceUrl is returned unmodified.
	   * @param sourceUrl
	   * @returns {string|*}
	   */
	  var decorateWithDynamicHost = function (sourceUrl) {
	    if (shouldAugment && typeof sourceUrl === 'string') {
	      var urlParts = [
	        getTurbineHost(),
	        sourceUrl.charAt(0) === '/' ? sourceUrl.slice(1) : sourceUrl
	      ];

	      return urlParts.join('/');
	    }

	    return sourceUrl;
	  };

	  var dynamicHostResolver = {
	    getTurbineHost: getTurbineHost,
	    decorateWithDynamicHost: decorateWithDynamicHost,
	    get isDynamicEnforced() {
	      return isDynamicEnforced;
	    }
	  };

	  if (reactorWindow) {
	    debugController.onDebugChanged(function (isEnabled) {
	      if (isEnabled) {
	        reactorWindow.dynamicHostResolver = dynamicHostResolver;
	      } else {
	        delete reactorWindow.dynamicHostResolver;
	      }
	    });
	  }

	  return dynamicHostResolver;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Rules can be ordered by users at the event type level. For example, assume both Rule A and Rule B
	 * use the Library Loaded and Window Loaded event types. Rule A can be ordered to come before Rule B
	 * on Library Loaded but after Rule B on Window Loaded.
	 *
	 * Order values are integers and act more as a priority. In other words, multiple rules can have the
	 * same order value. If they have the same order value, their order of execution should be
	 * considered nondetermistic.
	 *
	 * @param {Array} rules
	 * @returns {Array} An ordered array of rule-event pair objects.
	 */
	var buildRuleExecutionOrder = function (rules) {
	  var ruleEventPairs = [];

	  rules.forEach(function (rule) {
	    if (rule.events) {
	      rule.events.forEach(function (event) {
	        ruleEventPairs.push({
	          rule: rule,
	          event: event
	        });
	      });
	    }
	  });

	  return ruleEventPairs.sort(function (ruleEventPairA, ruleEventPairB) {
	    return ruleEventPairA.event.ruleOrder - ruleEventPairB.event.ruleOrder;
	  });
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var DEBUG_LOCAL_STORAGE_NAME = 'debug';

	var createDebugController = function (localStorage, logger) {
	  var getPersistedDebugEnabled = function () {
	    return localStorage.getItem(DEBUG_LOCAL_STORAGE_NAME) === 'true';
	  };

	  var setPersistedDebugEnabled = function (enabled) {
	    localStorage.setItem(DEBUG_LOCAL_STORAGE_NAME, enabled);
	  };

	  var debugChangedCallbacks = [];
	  var onDebugChanged = function (callback) {
	    debugChangedCallbacks.push(callback);
	  };

	  logger.outputEnabled = getPersistedDebugEnabled();

	  return {
	    onDebugChanged: onDebugChanged,
	    getDebugEnabled: getPersistedDebugEnabled,
	    setDebugEnabled: function (enabled) {
	      if (getPersistedDebugEnabled() !== enabled) {
	        setPersistedDebugEnabled(enabled);
	        logger.outputEnabled = enabled;
	        debugChangedCallbacks.forEach(function (callback) {
	          callback(enabled);
	        });
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2018 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var MODULE_NOT_FUNCTION_ERROR = 'Module did not export a function.';

	var createExecuteDelegateModule = function (
	  moduleProvider,
	  replaceTokens,
	  settingsFileTransformer
	) {
	  return function (moduleDescriptor, syntheticEvent, moduleCallParameters) {
	    moduleCallParameters = moduleCallParameters || [];
	    var moduleExports = moduleProvider.getModuleExports(
	      moduleDescriptor.modulePath
	    );

	    if (typeof moduleExports !== 'function') {
	      throw new Error(MODULE_NOT_FUNCTION_ERROR);
	    }

	    // dynamically replace the host on the module settings
	    var moduleDefinition = moduleProvider.getModuleDefinition(
	      moduleDescriptor.modulePath
	    );

	    // We're transforming URLs in-place to ensure that the developer's settings object reference
	    // is the same object reference as moduleDescriptor.settings. Therefore, we must only transform
	    // the settings one time and save a reference saying that we've done that. We're saving this in
	    // the module descriptor of each event, condition, and action so that we aren't modifying the
	    // settings object.
	    var moduleSettings = moduleDescriptor.settings || {};
	    if (
	      !moduleDescriptor.hasTransformedFilePaths &&
	      moduleDefinition.filePaths
	    ) {
	      settingsFileTransformer(
	        moduleSettings,
	        moduleDefinition.filePaths,
	        moduleDescriptor.modulePath
	      );
	      moduleDescriptor.hasTransformedFilePaths = true;
	    }

	    // replace tokens
	    var moduleDescriptorSettings = replaceTokens(
	      moduleSettings,
	      syntheticEvent
	    );
	    return moduleExports
	      .bind(null, moduleDescriptorSettings)
	      .apply(null, moduleCallParameters);
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * "Cleans" text by trimming the string and removing spaces and newlines.
	 * @param {string} str The string to clean.
	 * @returns {string}
	 */
	var cleanText = function (str) {
	  return typeof str === 'string' ? str.replace(/\s+/g, ' ').trim() : str;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Log levels.
	 * @readonly
	 * @enum {string}
	 * @private
	 */
	var levels = {
	  LOG: 'log',
	  INFO: 'info',
	  DEBUG: 'debug',
	  WARN: 'warn',
	  ERROR: 'error'
	};

	/**
	 * Rocket unicode surrogate pair.
	 * @type {string}
	 */
	var ROCKET = '\uD83D\uDE80';

	/**
	 * The user's internet explorer version. If they're not running internet explorer, then it should
	 * be NaN.
	 * @type {Number}
	 */
	var ieVersion = parseInt(
	  (/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]
	);

	/**
	 * Prefix to use on all messages. The rocket unicode doesn't work on IE 10.
	 * @type {string}
	 */
	var launchPrefix = ieVersion === 10 ? '[Launch]' : ROCKET;

	/**
	 * Whether logged messages should be output to the console.
	 * @type {boolean}
	 */
	var outputEnabled = false;

	/**
	 * Processes a log message.
	 * @param {string} level The level of message to log.
	 * @param {...*} arg Any argument to be logged.
	 * @private
	 */
	var process = function (level) {
	  if (outputEnabled && window.console) {
	    var logArguments = Array.prototype.slice.call(arguments, 1);
	    logArguments.unshift(launchPrefix);
	    // window.debug is unsupported in IE 10
	    if (level === levels.DEBUG && !window.console[level]) {
	      level = levels.INFO;
	    }
	    window.console[level].apply(window.console, logArguments);
	  }
	};

	/**
	 * Outputs a message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var log = process.bind(null, levels.LOG);

	/**
	 * Outputs informational message to the web console. In some browsers a small "i" icon is
	 * displayed next to these items in the web console's log.
	 * @param {...*} arg Any argument to be logged.
	 */
	var info = process.bind(null, levels.INFO);

	/**
	 * Outputs debug message to the web console. In browsers that do not support
	 * console.debug, console.info is used instead.
	 * @param {...*} arg Any argument to be logged.
	 */
	var debug = process.bind(null, levels.DEBUG);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var warn = process.bind(null, levels.WARN);

	/**
	 * Outputs an error message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var error = process.bind(null, levels.ERROR);

	/**
	 * Outputs a warning message to the web console.
	 * @param {...*} arg Any argument to be logged.
	 */
	var logDeprecation = function () {
	  var wasEnabled = outputEnabled;
	  outputEnabled = true;

	  process.apply(
	    null,
	    Array.prototype.concat(levels.WARN, Array.prototype.slice.call(arguments))
	  );

	  if (!wasEnabled) {
	    outputEnabled = false;
	  }
	};

	var logger = {
	  log: log,
	  info: info,
	  debug: debug,
	  warn: warn,
	  error: error,
	  deprecation: logDeprecation,
	  /**
	   * Whether logged messages should be output to the console.
	   * @type {boolean}
	   */
	  get outputEnabled() {
	    return outputEnabled;
	  },
	  set outputEnabled(value) {
	    outputEnabled = value;
	  },
	  /**
	   * Creates a logging utility that only exposes logging functionality and prefixes all messages
	   * with an identifier.
	   */
	  createPrefixedLogger: function (identifier) {
	    var loggerSpecificPrefix = '[' + identifier + ']';

	    return {
	      log: log.bind(null, loggerSpecificPrefix),
	      info: info.bind(null, loggerSpecificPrefix),
	      debug: debug.bind(null, loggerSpecificPrefix),
	      warn: warn.bind(null, loggerSpecificPrefix),
	      error: error.bind(null, loggerSpecificPrefix)
	    };
	  }
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var NAMESPACE = 'com.adobe.reactor.';

	var getNamespacedStorage = function (storageType, additionalNamespace) {
	  var finalNamespace = NAMESPACE + (additionalNamespace || '');

	  // When storage is disabled on Safari, the mere act of referencing window.localStorage
	  // or window.sessionStorage throws an error. For this reason, we wrap in a try-catch.
	  return {
	    /**
	     * Reads a value from storage.
	     * @param {string} name The name of the item to be read.
	     * @returns {string}
	     */
	    getItem: function (name) {
	      try {
	        return reactorWindow[storageType].getItem(finalNamespace + name);
	      } catch (e) {
	        return null;
	      }
	    },
	    /**
	     * Saves a value to storage.
	     * @param {string} name The name of the item to be saved.
	     * @param {string} value The value of the item to be saved.
	     * @returns {boolean} Whether the item was successfully saved to storage.
	     */
	    setItem: function (name, value) {
	      try {
	        reactorWindow[storageType].setItem(finalNamespace + name, value);
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var DATA_ELEMENTS_NAMESPACE = 'dataElements.';

	var dataElementSessionStorage = getNamespacedStorage(
	  'sessionStorage',
	  DATA_ELEMENTS_NAMESPACE
	);
	var dataElementLocalStorage = getNamespacedStorage(
	  'localStorage',
	  DATA_ELEMENTS_NAMESPACE
	);

	var storageDurations = {
	  PAGEVIEW: 'pageview',
	  SESSION: 'session',
	  VISITOR: 'visitor'
	};

	var pageviewCache = {};

	var serialize = function (value) {
	  var serialized;

	  try {
	    // On some browsers, with some objects, errors will be thrown during serialization. For example,
	    // in Chrome with the window object, it will throw "TypeError: Converting circular structure
	    // to JSON"
	    serialized = JSON.stringify(value);
	    // eslint-disable-next-line no-empty
	  } catch (e) {}

	  return serialized;
	};

	var setValue = function (key, storageDuration, value) {
	  var serializedValue;

	  switch (storageDuration) {
	    case storageDurations.PAGEVIEW:
	      pageviewCache[key] = value;
	      return;
	    case storageDurations.SESSION:
	      serializedValue = serialize(value);
	      if (serializedValue) {
	        dataElementSessionStorage.setItem(key, serializedValue);
	      }
	      return;
	    case storageDurations.VISITOR:
	      serializedValue = serialize(value);
	      if (serializedValue) {
	        dataElementLocalStorage.setItem(key, serializedValue);
	      }
	      return;
	  }
	};

	var getValue = function (key, storageDuration) {
	  var value;

	  // It should consistently return the same value if no stored item was found. We chose null,
	  // though undefined could be a reasonable value as well.
	  switch (storageDuration) {
	    case storageDurations.PAGEVIEW:
	      return pageviewCache.hasOwnProperty(key) ? pageviewCache[key] : null;
	    case storageDurations.SESSION:
	      value = dataElementSessionStorage.getItem(key);
	      return value === null ? value : JSON.parse(value);
	    case storageDurations.VISITOR:
	      value = dataElementLocalStorage.getItem(key);
	      return value === null ? value : JSON.parse(value);
	  }
	};

	var dataElementSafe = {
	  setValue: setValue,
	  getValue: getValue
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var getErrorMessage = function (
	  dataDef,
	  dataElementName,
	  errorMessage,
	  errorStack
	) {
	  return (
	    'Failed to execute data element module ' +
	    dataDef.modulePath +
	    ' for data element ' +
	    dataElementName +
	    '. ' +
	    errorMessage +
	    (errorStack ? '\n' + errorStack : '')
	  );
	};

	var createGetDataElementValue = function (
	  moduleProvider,
	  getDataElementDefinition,
	  replaceTokens,
	  undefinedVarsReturnEmpty,
	  settingsFileTransformer
	) {
	  return function (name, syntheticEvent) {
	    var dataDef = getDataElementDefinition(name);

	    if (!dataDef) {
	      return undefinedVarsReturnEmpty ? '' : undefined;
	    }

	    var storageDuration = dataDef.storageDuration;
	    var moduleExports;
	    var moduleDefinition;

	    try {
	      moduleExports = moduleProvider.getModuleExports(dataDef.modulePath);
	      moduleDefinition = moduleProvider.getModuleDefinition(dataDef.modulePath);
	    } catch (e) {
	      logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
	      return;
	    }

	    if (typeof moduleExports !== 'function') {
	      logger.error(
	        getErrorMessage(dataDef, name, 'Module did not export a function.')
	      );
	      return;
	    }

	    var value;

	    var dataElementSettings = dataDef.settings || {};
	    if (!dataDef.hasTransformedFilePaths && moduleDefinition.filePaths) {
	      settingsFileTransformer(
	        dataElementSettings,
	        moduleDefinition.filePaths,
	        dataDef.modulePath
	      );
	      dataDef.hasTransformedFilePaths = true;
	    }

	    try {
	      value = moduleExports(
	        replaceTokens(dataElementSettings, syntheticEvent),
	        syntheticEvent
	      );
	    } catch (e) {
	      logger.error(getErrorMessage(dataDef, name, e.message, e.stack));
	      return;
	    }

	    if (storageDuration) {
	      if (value != null) {
	        dataElementSafe.setValue(name, storageDuration, value);
	      } else {
	        value = dataElementSafe.getValue(name, storageDuration);
	      }
	    }

	    if (value == null && dataDef.defaultValue != null) {
	      value = dataDef.defaultValue;
	    }

	    if (typeof value === 'string') {
	      if (dataDef.cleanText) {
	        value = cleanText(value);
	      }

	      if (dataDef.forceLowerCase) {
	        value = value.toLowerCase();
	      }
	    }

	    return value;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var specialPropertyAccessors = {
	  text: function (obj) {
	    return obj.textContent;
	  },
	  cleanText: function (obj) {
	    return cleanText(obj.textContent);
	  }
	};

	/**
	 * This returns the value of a property at a given path. For example, a <code>path<code> of
	 * <code>foo.bar</code> will return the value of <code>obj.foo.bar</code>.
	 *
	 * In addition, if <code>path</code> is <code>foo.bar.getAttribute(unicorn)</code> and
	 * <code>obj.foo.bar</code> has a method named <code>getAttribute</code>, the method will be
	 * called with a value of <code>"unicorn"</code> and the value will be returned.
	 *
	 * Also, if <code>path</code> is <code>foo.bar.@text</code> or other supported properties
	 * beginning with <code>@</code>, a special accessor will be used.
	 *
	 * @param host
	 * @param path
	 * @param supportSpecial
	 * @returns {*}
	 */
	var getObjectProperty = function (host, propChain, supportSpecial) {
	  var value = host;
	  var attrMatch;
	  for (var i = 0, len = propChain.length; i < len; i++) {
	    if (value == null) {
	      return undefined;
	    }
	    var prop = propChain[i];
	    if (supportSpecial && prop.charAt(0) === '@') {
	      var specialProp = prop.slice(1);
	      value = specialPropertyAccessors[specialProp](value);
	      continue;
	    }
	    if (
	      value.getAttribute &&
	      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))
	    ) {
	      var attr = attrMatch[1];
	      value = value.getAttribute(attr);
	      continue;
	    }
	    value = value[prop];
	  }
	  return value;
	};

	/**
	 * Returns the value of a variable.
	 * @param {string} variable
	 * @param {Object} [syntheticEvent] A synthetic event. Only required when using %event... %this...
	 * or %target...
	 * @returns {*}
	 */
	var createGetVar = function (
	  customVars,
	  getDataElementDefinition,
	  getDataElementValue
	) {
	  return function (variable, syntheticEvent) {
	    var value;

	    if (getDataElementDefinition(variable)) {
	      // Accessing nested properties of a data element using dot-notation is unsupported because
	      // users can currently create data elements with periods in the name.
	      value = getDataElementValue(variable, syntheticEvent);
	    } else {
	      var propChain = variable.split('.');
	      var variableHostName = propChain.shift();

	      if (variableHostName === 'this') {
	        if (syntheticEvent) {
	          // I don't know why this is the only one that supports special properties, but that's the
	          // way it was in Satellite.
	          value = getObjectProperty(syntheticEvent.element, propChain, true);
	        }
	      } else if (variableHostName === 'event') {
	        if (syntheticEvent) {
	          value = getObjectProperty(syntheticEvent, propChain);
	        }
	      } else if (variableHostName === 'target') {
	        if (syntheticEvent) {
	          value = getObjectProperty(syntheticEvent.target, propChain);
	        }
	      } else {
	        value = getObjectProperty(customVars[variableHostName], propChain);
	      }
	    }

	    return value;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Determines if the provided name is a valid variable, where the variable
	 * can be a data element, element, event, target, or custom var.
	 * @param variableName
	 * @returns {boolean}
	 */
	var createIsVar = function (customVars, getDataElementDefinition) {
	  return function (variableName) {
	    var nameBeforeDot = variableName.split('.')[0];

	    return Boolean(
	      getDataElementDefinition(variableName) ||
	        nameBeforeDot === 'this' ||
	        nameBeforeDot === 'event' ||
	        nameBeforeDot === 'target' ||
	        customVars.hasOwnProperty(nameBeforeDot)
	    );
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var extractModuleExports = function (script, require, turbine) {
	  var module = {
	    exports: {}
	  };

	  script.call(module.exports, module, module.exports, require, turbine);

	  return module.exports;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var createModuleProvider = function () {
	  var moduleByReferencePath = {};

	  var getModule = function (referencePath) {
	    var module = moduleByReferencePath[referencePath];

	    if (!module) {
	      throw new Error('Module ' + referencePath + ' not found.');
	    }

	    return module;
	  };

	  var registerModule = function (
	    referencePath,
	    moduleDefinition,
	    extensionName,
	    require,
	    turbine
	  ) {
	    var module = {
	      definition: moduleDefinition,
	      extensionName: extensionName,
	      require: require,
	      turbine: turbine
	    };
	    module.require = require;
	    moduleByReferencePath[referencePath] = module;
	  };

	  var hydrateCache = function () {
	    Object.keys(moduleByReferencePath).forEach(function (referencePath) {
	      try {
	        getModuleExports(referencePath);
	      } catch (e) {
	        var errorMessage =
	          'Error initializing module ' +
	          referencePath +
	          '. ' +
	          e.message +
	          (e.stack ? '\n' + e.stack : '');
	        logger.error(errorMessage);
	      }
	    });
	  };

	  var getModuleExports = function (referencePath) {
	    var module = getModule(referencePath);

	    // Using hasOwnProperty instead of a falsey check because the module could export undefined
	    // in which case we don't want to execute the module each time the exports is requested.
	    if (!module.hasOwnProperty('exports')) {
	      module.exports = extractModuleExports(
	        module.definition.script,
	        module.require,
	        module.turbine
	      );
	    }

	    return module.exports;
	  };

	  var getModuleDefinition = function (referencePath) {
	    return getModule(referencePath).definition;
	  };

	  var getModuleExtensionName = function (referencePath) {
	    return getModule(referencePath).extensionName;
	  };

	  return {
	    registerModule: registerModule,
	    hydrateCache: hydrateCache,
	    getModuleExports: getModuleExports,
	    getModuleDefinition: getModuleDefinition,
	    getModuleExtensionName: getModuleExtensionName
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var warningLogged = false;

	var createNotifyMonitors = function (_satellite) {
	  return function (type, event) {
	    var monitors = _satellite._monitors;

	    if (monitors) {
	      if (!warningLogged) {
	        logger.warn(
	          'The _satellite._monitors API may change at any time and should only ' +
	            'be used for debugging.'
	        );
	        warningLogged = true;
	      }

	      monitors.forEach(function (monitor) {
	        if (monitor[type]) {
	          monitor[type](event);
	        }
	      });
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Replacing any variable tokens (%myDataElement%, %this.foo%, etc.) with their associated values.
	 * A new string, object, or array will be created; the thing being processed will never be
	 * modified.
	 * @param {*} thing Thing potentially containing variable tokens. Objects and arrays will be
	 * deeply processed.
	 * @param {HTMLElement} [element] Associated HTML element. Used for special tokens
	 * (%this.something%).
	 * @param {Object} [event] Associated event. Used for special tokens (%event.something%,
	 * %target.something%)
	 * @returns {*} A processed value.
	 */
	var createReplaceTokens = function (isVar, getVar, undefinedVarsReturnEmpty) {
	  var replaceTokensInString;
	  var replaceTokensInObject;
	  var replaceTokensInArray;
	  var replaceTokens;
	  var variablesBeingRetrieved = [];

	  var getVarValue = function (token, variableName, syntheticEvent) {
	    if (!isVar(variableName)) {
	      return token;
	    }

	    variablesBeingRetrieved.push(variableName);
	    var val = getVar(variableName, syntheticEvent);
	    variablesBeingRetrieved.pop();
	    return val == null && undefinedVarsReturnEmpty ? '' : val;
	  };

	  /**
	   * Perform variable substitutions to a string where tokens are specified in the form %foo%.
	   * If the only content of the string is a single data element token, then the raw data element
	   * value will be returned instead.
	   *
	   * @param str {string} The string potentially containing data element tokens.
	   * @param element {HTMLElement} The element to use for tokens in the form of %this.property%.
	   * @param event {Object} The event object to use for tokens in the form of %target.property%.
	   * @returns {*}
	   */
	  replaceTokensInString = function (str, syntheticEvent) {
	    // Is the string a single data element token and nothing else?
	    var result = /^%([^%]+)%$/.exec(str);

	    if (result) {
	      return getVarValue(str, result[1], syntheticEvent);
	    } else {
	      return str.replace(/%(.+?)%/g, function (token, variableName) {
	        return getVarValue(token, variableName, syntheticEvent);
	      });
	    }
	  };

	  replaceTokensInObject = function (obj, syntheticEvent) {
	    var ret = {};
	    var keys = Object.keys(obj);
	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];
	      var value = obj[key];
	      ret[key] = replaceTokens(value, syntheticEvent);
	    }
	    return ret;
	  };

	  replaceTokensInArray = function (arr, syntheticEvent) {
	    var ret = [];
	    for (var i = 0, len = arr.length; i < len; i++) {
	      ret.push(replaceTokens(arr[i], syntheticEvent));
	    }
	    return ret;
	  };

	  replaceTokens = function (thing, syntheticEvent) {
	    if (typeof thing === 'string') {
	      return replaceTokensInString(thing, syntheticEvent);
	    } else if (Array.isArray(thing)) {
	      return replaceTokensInArray(thing, syntheticEvent);
	    } else if (typeof thing === 'object' && thing !== null) {
	      return replaceTokensInObject(thing, syntheticEvent);
	    }

	    return thing;
	  };

	  return function (thing, syntheticEvent) {
	    // It's possible for a data element to reference another data element. Because of this,
	    // we need to prevent circular dependencies from causing an infinite loop.
	    if (variablesBeingRetrieved.length > 10) {
	      logger.error(
	        'Data element circular reference detected: ' +
	          variablesBeingRetrieved.join(' -> ')
	      );
	      return thing;
	    }

	    return replaceTokens(thing, syntheticEvent);
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var createSetCustomVar = function (customVars) {
	  return function () {
	    if (typeof arguments[0] === 'string') {
	      customVars[arguments[0]] = arguments[1];
	    } else if (arguments[0]) {
	      // assume an object literal
	      var mapping = arguments[0];
	      for (var key in mapping) {
	        customVars[key] = mapping[key];
	      }
	    }
	  };
	};

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	function createCommonjsModule(fn) {
	  var module = { exports: {} };
		return fn(module, module.exports), module.exports;
	}

	/**
	 * @this {Promise}
	 */
	function finallyConstructor(callback) {
	  var constructor = this.constructor;
	  return this.then(
	    function(value) {
	      // @ts-ignore
	      return constructor.resolve(callback()).then(function() {
	        return value;
	      });
	    },
	    function(reason) {
	      // @ts-ignore
	      return constructor.resolve(callback()).then(function() {
	        // @ts-ignore
	        return constructor.reject(reason);
	      });
	    }
	  );
	}

	// Store setTimeout reference so promise-polyfill will be unaffected by
	// other code modifying setTimeout (like sinon.useFakeTimers())
	var setTimeoutFunc = setTimeout;

	function isArray(x) {
	  return Boolean(x && typeof x.length !== 'undefined');
	}

	function noop() {}

	// Polyfill for Function.prototype.bind
	function bind(fn, thisArg) {
	  return function() {
	    fn.apply(thisArg, arguments);
	  };
	}

	/**
	 * @constructor
	 * @param {Function} fn
	 */
	function Promise$1(fn) {
	  if (!(this instanceof Promise$1))
	    throw new TypeError('Promises must be constructed via new');
	  if (typeof fn !== 'function') throw new TypeError('not a function');
	  /** @type {!number} */
	  this._state = 0;
	  /** @type {!boolean} */
	  this._handled = false;
	  /** @type {Promise|undefined} */
	  this._value = undefined;
	  /** @type {!Array<!Function>} */
	  this._deferreds = [];

	  doResolve(fn, this);
	}

	function handle(self, deferred) {
	  while (self._state === 3) {
	    self = self._value;
	  }
	  if (self._state === 0) {
	    self._deferreds.push(deferred);
	    return;
	  }
	  self._handled = true;
	  Promise$1._immediateFn(function() {
	    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
	    if (cb === null) {
	      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
	      return;
	    }
	    var ret;
	    try {
	      ret = cb(self._value);
	    } catch (e) {
	      reject(deferred.promise, e);
	      return;
	    }
	    resolve(deferred.promise, ret);
	  });
	}

	function resolve(self, newValue) {
	  try {
	    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
	    if (newValue === self)
	      throw new TypeError('A promise cannot be resolved with itself.');
	    if (
	      newValue &&
	      (typeof newValue === 'object' || typeof newValue === 'function')
	    ) {
	      var then = newValue.then;
	      if (newValue instanceof Promise$1) {
	        self._state = 3;
	        self._value = newValue;
	        finale(self);
	        return;
	      } else if (typeof then === 'function') {
	        doResolve(bind(then, newValue), self);
	        return;
	      }
	    }
	    self._state = 1;
	    self._value = newValue;
	    finale(self);
	  } catch (e) {
	    reject(self, e);
	  }
	}

	function reject(self, newValue) {
	  self._state = 2;
	  self._value = newValue;
	  finale(self);
	}

	function finale(self) {
	  if (self._state === 2 && self._deferreds.length === 0) {
	    Promise$1._immediateFn(function() {
	      if (!self._handled) {
	        Promise$1._unhandledRejectionFn(self._value);
	      }
	    });
	  }

	  for (var i = 0, len = self._deferreds.length; i < len; i++) {
	    handle(self, self._deferreds[i]);
	  }
	  self._deferreds = null;
	}

	/**
	 * @constructor
	 */
	function Handler(onFulfilled, onRejected, promise) {
	  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
	  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
	  this.promise = promise;
	}

	/**
	 * Take a potentially misbehaving resolver function and make sure
	 * onFulfilled and onRejected are only called once.
	 *
	 * Makes no guarantees about asynchrony.
	 */
	function doResolve(fn, self) {
	  var done = false;
	  try {
	    fn(
	      function(value) {
	        if (done) return;
	        done = true;
	        resolve(self, value);
	      },
	      function(reason) {
	        if (done) return;
	        done = true;
	        reject(self, reason);
	      }
	    );
	  } catch (ex) {
	    if (done) return;
	    done = true;
	    reject(self, ex);
	  }
	}

	Promise$1.prototype['catch'] = function(onRejected) {
	  return this.then(null, onRejected);
	};

	Promise$1.prototype.then = function(onFulfilled, onRejected) {
	  // @ts-ignore
	  var prom = new this.constructor(noop);

	  handle(this, new Handler(onFulfilled, onRejected, prom));
	  return prom;
	};

	Promise$1.prototype['finally'] = finallyConstructor;

	Promise$1.all = function(arr) {
	  return new Promise$1(function(resolve, reject) {
	    if (!isArray(arr)) {
	      return reject(new TypeError('Promise.all accepts an array'));
	    }

	    var args = Array.prototype.slice.call(arr);
	    if (args.length === 0) return resolve([]);
	    var remaining = args.length;

	    function res(i, val) {
	      try {
	        if (val && (typeof val === 'object' || typeof val === 'function')) {
	          var then = val.then;
	          if (typeof then === 'function') {
	            then.call(
	              val,
	              function(val) {
	                res(i, val);
	              },
	              reject
	            );
	            return;
	          }
	        }
	        args[i] = val;
	        if (--remaining === 0) {
	          resolve(args);
	        }
	      } catch (ex) {
	        reject(ex);
	      }
	    }

	    for (var i = 0; i < args.length; i++) {
	      res(i, args[i]);
	    }
	  });
	};

	Promise$1.resolve = function(value) {
	  if (value && typeof value === 'object' && value.constructor === Promise$1) {
	    return value;
	  }

	  return new Promise$1(function(resolve) {
	    resolve(value);
	  });
	};

	Promise$1.reject = function(value) {
	  return new Promise$1(function(resolve, reject) {
	    reject(value);
	  });
	};

	Promise$1.race = function(arr) {
	  return new Promise$1(function(resolve, reject) {
	    if (!isArray(arr)) {
	      return reject(new TypeError('Promise.race accepts an array'));
	    }

	    for (var i = 0, len = arr.length; i < len; i++) {
	      Promise$1.resolve(arr[i]).then(resolve, reject);
	    }
	  });
	};

	// Use polyfill for setImmediate for performance gains
	Promise$1._immediateFn =
	  // @ts-ignore
	  (typeof setImmediate === 'function' &&
	    function(fn) {
	      // @ts-ignore
	      setImmediate(fn);
	    }) ||
	  function(fn) {
	    setTimeoutFunc(fn, 0);
	  };

	Promise$1._unhandledRejectionFn = function _unhandledRejectionFn(err) {
	  if (typeof console !== 'undefined' && console) {
	    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
	  }
	};

	var src$1 = /*#__PURE__*/Object.freeze({
		__proto__: null,
		'default': Promise$1
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(src$1);

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	// For building Turbine we are using Rollup. For running the turbine tests we are using
	// Karma + Webpack. You need to specify the default import when using promise-polyfill`
	// with Webpack 2+. We need `require('promise-polyfill').default` for running the tests
	// and `require('promise-polyfill')` for building Turbine.
	var reactorPromise =
	  (typeof window !== 'undefined' && window.Promise) ||
	  (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Promise) ||
	  require$$0.default ||
	  require$$0;

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createAddActionToQueue = function (
	  executeDelegateModule,
	  normalizeRuleComponentError,
	  logActionError
	) {
	  return function (action, rule, syntheticEvent, lastPromiseInQueue) {
	    return lastPromiseInQueue.then(function () {
	      // This module is used when ruleComponentSequencing is enabled.
	      // action.timeout is always supplied to this module as >= 0 when delayNext is true.

	      var delayNextAction = action.delayNext;
	      var actionTimeoutId;

	      return new reactorPromise(function (resolve, reject) {
	        var moduleResult = executeDelegateModule(action, syntheticEvent, [
	          syntheticEvent
	        ]);

	        if (!delayNextAction) {
	          return resolve();
	        }

	        var promiseTimeoutMs = action.timeout;
	        var timeoutPromise = new reactorPromise(function (resolve, reject) {
	          actionTimeoutId = setTimeout(function () {
	            reject(
	              new Error(
	                'A timeout occurred because the action took longer than ' +
	                  promiseTimeoutMs / 1000 +
	                  ' seconds to complete. '
	              )
	            );
	          }, promiseTimeoutMs);
	        });

	        reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
	      })
	        .catch(function (e) {
	          clearTimeout(actionTimeoutId);
	          e = normalizeRuleComponentError(e);
	          logActionError(action, rule, e);
	          return reactorPromise.reject(e);
	        })
	        .then(function () {
	          clearTimeout(actionTimeoutId);
	        });
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createAddConditionToQueue = function (
	  executeDelegateModule,
	  normalizeRuleComponentError,
	  isConditionMet,
	  logConditionError,
	  logConditionNotMet
	) {
	  return function (condition, rule, syntheticEvent, lastPromiseInQueue) {
	    return lastPromiseInQueue.then(function () {
	      // This module is used when ruleComponentSequencing is enabled.
	      // condition.timeout is always supplied to this module as >= 0.
	      // Conditions always assume delayNext = true because we have to know the
	      // condition result before moving on.
	      var conditionTimeoutId;

	      return new reactorPromise(function (resolve, reject) {
	        var moduleResult = executeDelegateModule(condition, syntheticEvent, [
	          syntheticEvent
	        ]);

	        var promiseTimeoutMs = condition.timeout;
	        var timeoutPromise = new reactorPromise(function (resolve, reject) {
	          conditionTimeoutId = setTimeout(function () {
	            reject(
	              new Error(
	                'A timeout occurred because the condition took longer than ' +
	                  promiseTimeoutMs / 1000 +
	                  ' seconds to complete. '
	              )
	            );
	          }, promiseTimeoutMs);
	        });

	        reactorPromise.race([moduleResult, timeoutPromise]).then(resolve, reject);
	      })
	        .catch(function (e) {
	          clearTimeout(conditionTimeoutId);
	          e = normalizeRuleComponentError(e);
	          logConditionError(condition, rule, e);
	          return reactorPromise.reject(e);
	        })
	        .then(function (result) {
	          clearTimeout(conditionTimeoutId);
	          if (!isConditionMet(condition, result)) {
	            logConditionNotMet(condition, rule);
	            return reactorPromise.reject();
	          }
	        });
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var lastPromiseInQueue = reactorPromise.resolve();

	var createAddRuleToQueue = function (
	  addConditionToQueue,
	  addActionToQueue,
	  logRuleCompleted
	) {
	  return function (rule, syntheticEvent) {
	    if (rule.conditions) {
	      rule.conditions.forEach(function (condition) {
	        lastPromiseInQueue = addConditionToQueue(
	          condition,
	          rule,
	          syntheticEvent,
	          lastPromiseInQueue
	        );
	      });
	    }

	    if (rule.actions) {
	      rule.actions.forEach(function (action) {
	        lastPromiseInQueue = addActionToQueue(
	          action,
	          rule,
	          syntheticEvent,
	          lastPromiseInQueue
	        );
	      });
	    }

	    lastPromiseInQueue = lastPromiseInQueue.then(function () {
	      logRuleCompleted(rule);
	    });

	    // Allows later rules to keep running when an error occurs within this rule.
	    lastPromiseInQueue = lastPromiseInQueue.catch(function () {});

	    return lastPromiseInQueue;
	  };
	};

	var isPromiseLike = function (value) {
	  return Boolean(
	    value && typeof value === 'object' && typeof value.then === 'function'
	  );
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/

	var createEvaluateConditions = function (
	  executeDelegateModule,
	  isConditionMet,
	  logConditionNotMet,
	  logConditionError
	) {
	  return function (rule, syntheticEvent) {
	    var condition;

	    if (rule.conditions) {
	      for (var i = 0; i < rule.conditions.length; i++) {
	        condition = rule.conditions[i];

	        try {
	          var result = executeDelegateModule(condition, syntheticEvent, [
	            syntheticEvent
	          ]);

	          // If the result is promise-like, the extension needs to do something asynchronously,
	          // but the customer does not have rule component sequencing enabled on the property.
	          // If we didn't do this, the condition would always pass because the promise is
	          // considered "truthy".
	          if (isPromiseLike(result)) {
	            throw new Error(
	              'Rule component sequencing must be enabled on the property ' +
	                'for this condition to function properly.'
	            );
	          }

	          if (!isConditionMet(condition, result)) {
	            logConditionNotMet(condition, rule);
	            return false;
	          }
	        } catch (e) {
	          logConditionError(condition, rule, e);
	          return false;
	        }
	      }
	    }

	    return true;
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createExecuteRule = function (evaluateConditions, runActions) {
	  return function (rule, normalizedSyntheticEvent) {
	    if (evaluateConditions(rule, normalizedSyntheticEvent)) {
	      runActions(rule, normalizedSyntheticEvent);
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createGetModuleDisplayNameByRuleComponent = function (moduleProvider) {
	  return function (ruleComponent) {
	    var moduleDefinition = moduleProvider.getModuleDefinition(
	      ruleComponent.modulePath
	    );
	    return (
	      (moduleDefinition && moduleDefinition.displayName) ||
	      ruleComponent.modulePath
	    );
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createGetSyntheticEventMeta = function (moduleProvider) {
	  return function (ruleEventPair) {
	    var rule = ruleEventPair.rule;
	    var event = ruleEventPair.event;

	    var moduleName = moduleProvider.getModuleDefinition(event.modulePath).name;
	    var extensionName = moduleProvider.getModuleExtensionName(event.modulePath);

	    return {
	      $type: extensionName + '.' + moduleName,
	      $rule: {
	        id: rule.id,
	        name: rule.name
	      }
	    };
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createInitEventModule = function (
	  triggerRule,
	  executeDelegateModule,
	  normalizeSyntheticEvent,
	  getErrorMessage,
	  getSyntheticEventMeta,
	  logger
	) {
	  return function (guardUntilAllInitialized, ruleEventPair) {
	    var rule = ruleEventPair.rule;
	    var event = ruleEventPair.event;
	    event.settings = event.settings || {};

	    try {
	      var syntheticEventMeta = getSyntheticEventMeta(ruleEventPair);

	      executeDelegateModule(event, null, [
	        /**
	         * This is the callback that executes a particular rule when an event has occurred.
	         * @param {Object} [syntheticEvent] An object that contains detail regarding the event
	         * that occurred.
	         */
	        function trigger(syntheticEvent) {
	          // DTM-11871
	          // If we're still in the process of initializing event modules,
	          // we need to queue up any calls to trigger, otherwise if the triggered
	          // rule does something that triggers a different rule whose event module
	          // has not been initialized, that secondary rule will never get executed.
	          // This can be removed if we decide to always use the rule queue, since
	          // conditions and actions will be processed asynchronously, which
	          // would give time for all event modules to be initialized.

	          var normalizedSyntheticEvent = normalizeSyntheticEvent(
	            syntheticEventMeta,
	            syntheticEvent
	          );

	          guardUntilAllInitialized(function () {
	            triggerRule(normalizedSyntheticEvent, rule);
	          });
	        }
	      ]);
	    } catch (e) {
	      logger.error(getErrorMessage(event, rule, e));
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogActionError = function (
	  getRuleComponentErrorMessage,
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (action, rule, e) {
	    var actionDisplayName = getModuleDisplayNameByRuleComponent(action);

	    logger.error(getRuleComponentErrorMessage(actionDisplayName, rule.name, e));

	    notifyMonitors('ruleActionFailed', {
	      rule: rule,
	      action: action
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogConditionError = function (
	  getRuleComponentErrorMessage,
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (condition, rule, e) {
	    var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

	    logger.error(
	      getRuleComponentErrorMessage(conditionDisplayName, rule.name, e)
	    );

	    notifyMonitors('ruleConditionFailed', {
	      rule: rule,
	      condition: condition
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogConditionNotMet = function (
	  getModuleDisplayNameByRuleComponent,
	  logger,
	  notifyMonitors
	) {
	  return function (condition, rule) {
	    var conditionDisplayName = getModuleDisplayNameByRuleComponent(condition);

	    logger.log(
	      'Condition "' +
	        conditionDisplayName +
	        '" for rule "' +
	        rule.name +
	        '" was not met.'
	    );

	    notifyMonitors('ruleConditionFailed', {
	      rule: rule,
	      condition: condition
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createLogRuleCompleted = function (logger, notifyMonitors) {
	  return function (rule) {
	    logger.log('Rule "' + rule.name + '" fired.');
	    notifyMonitors('ruleCompleted', {
	      rule: rule
	    });
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createRunActions = function (
	  executeDelegateModule,
	  logActionError,
	  logRuleCompleted
	) {
	  return function (rule, syntheticEvent) {
	    var action;

	    if (rule.actions) {
	      for (var i = 0; i < rule.actions.length; i++) {
	        action = rule.actions[i];
	        try {
	          executeDelegateModule(action, syntheticEvent, [syntheticEvent]);
	        } catch (e) {
	          logActionError(action, rule, e);
	          return;
	        }
	      }
	    }

	    logRuleCompleted(rule);
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var createTriggerRule = function (
	  ruleComponentSequencingEnabled,
	  executeRule,
	  addRuleToQueue,
	  notifyMonitors
	) {
	  return function (normalizedSyntheticEvent, rule) {
	    notifyMonitors('ruleTriggered', {
	      rule: rule
	    });

	    if (ruleComponentSequencingEnabled) {
	      addRuleToQueue(rule, normalizedSyntheticEvent);
	    } else {
	      executeRule(rule, normalizedSyntheticEvent);
	    }
	  };
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var getRuleComponentErrorMessage = function (ruleComponentName, ruleName, error) {
	  return (
	    'Failed to execute "' +
	    ruleComponentName +
	    '" for "' +
	    ruleName +
	    '" rule. ' +
	    error.message +
	    (error.stack ? '\n' + error.stack : '')
	  );
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var isConditionMet = function (condition, result) {
	  return (result && !condition.negate) || (!result && condition.negate);
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var triggerCallQueue = [];
	var eventModulesInitialized = false;

	var guardUntilAllInitialized = function (callback) {
	  if (!eventModulesInitialized) {
	    triggerCallQueue.push(callback);
	  } else {
	    callback();
	  }
	};

	var initRules = function (buildRuleExecutionOrder, rules, initEventModule) {
	  buildRuleExecutionOrder(rules).forEach(function (ruleEventPair) {
	    initEventModule(guardUntilAllInitialized, ruleEventPair);
	  });

	  eventModulesInitialized = true;
	  triggerCallQueue.forEach(function (triggerCall) {
	    triggerCall();
	  });

	  triggerCallQueue = [];
	};

	/*
	Copyright 2020 Adobe. All rights reserved.
	This file is licensed to you under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License. You may obtain a copy
	of the License at http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software distributed under
	the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	OF ANY KIND, either express or implied. See the License for the specific language
	governing permissions and limitations under the License.
	*/
	var normalizeRuleComponentError = function (e) {
	  if (!e) {
	    e = new Error(
	      'The extension triggered an error, but no error information was provided.'
	    );
	  }

	  if (!(e instanceof Error)) {
	    var stringifiedError =
	      typeof e === 'object' ? JSON.stringify(e) : String(e);
	    e = new Error(stringifiedError);
	  }

	  return e;
	};

	/*!
	 * isobject <https://github.com/jonschlinkert/isobject>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */

	var isobject = function isObject(val) {
	  return val != null && typeof val === 'object' && Array.isArray(val) === false;
	};

	/*!
	 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
	 *
	 * Copyright (c) 2014-2017, Jon Schlinkert.
	 * Released under the MIT License.
	 */



	function isObjectObject(o) {
	  return isobject(o) === true
	    && Object.prototype.toString.call(o) === '[object Object]';
	}

	var isPlainObject = function isPlainObject(o) {
	  var ctor,prot;

	  if (isObjectObject(o) === false) return false;

	  // If has modified constructor
	  ctor = o.constructor;
	  if (typeof ctor !== 'function') return false;

	  // If has modified prototype
	  prot = ctor.prototype;
	  if (isObjectObject(prot) === false) return false;

	  // If constructor does not have an Object-specific method
	  if (prot.hasOwnProperty('isPrototypeOf') === false) {
	    return false;
	  }

	  // Most likely a plain Object
	  return true;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	/**
	 * Normalizes a synthetic event so that it exists and has at least meta.
	 * @param {Object} syntheticEventMeta
	 * @param {Object} [syntheticEvent]
	 * @returns {Object}
	 */
	var normalizeSyntheticEvent = function (syntheticEventMeta, syntheticEvent) {
	  syntheticEvent = syntheticEvent || {};

	  // This ensures that as the user hands us a synthetic event for multiple rules,
	  // we aren't overwriting a new meta into the same object reference.
	  if (isPlainObject(syntheticEvent)) {
	    syntheticEvent = reactorObjectAssign({}, syntheticEvent, syntheticEventMeta);
	  } else {
	    // When syntheticEvent is not an object, there's nothing we can guarantee
	    // about the ability to "copy". Leave it alone.
	    reactorObjectAssign(syntheticEvent, syntheticEventMeta);
	  }

	  // Remove after some arbitrary time period when we think users have had sufficient chance
	  // to move away from event.type
	  if (!syntheticEvent.hasOwnProperty('type')) {
	    Object.defineProperty(syntheticEvent, 'type', {
	      get: function () {
	        logger.deprecation(
	          'Accessing event.type in Adobe Launch has been deprecated and will be ' +
	            'removed soon. Please use event.$type instead.'
	        );
	        return syntheticEvent.$type;
	      }
	    });
	  }

	  return syntheticEvent;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called with an extension name and module name, will return the
	 * exports of the respective shared module.
	 *
	 * @param {Object} extensions
	 * @param {Object} moduleProvider
	 * @returns {Function}
	 */
	var createGetSharedModuleExports = function (extensions, moduleProvider) {
	  return function (extensionName, moduleName) {
	    var extension = extensions[extensionName];

	    if (extension) {
	      var modules = extension.modules;
	      if (modules) {
	        var referencePaths = Object.keys(modules);
	        for (var i = 0; i < referencePaths.length; i++) {
	          var referencePath = referencePaths[i];
	          var module = modules[referencePath];
	          if (module.shared && module.name === moduleName) {
	            return moduleProvider.getModuleExports(referencePath);
	          }
	        }
	      }
	    }
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called, will return a configuration object with data element
	 * tokens replaced.
	 *
	 * @param {Object} settings
	 * @returns {Function}
	 */
	var createGetExtensionSettings = function (replaceTokens, settings) {
	  return function () {
	    return settings ? replaceTokens(settings) : {};
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	/**
	 * Creates a function that, when called, will return the full hosted lib file URL.
	 *
	 * @param {string} hostedLibFilesBaseUrl
	 * @returns {Function}
	 */

	var createGetHostedLibFileUrl = function (
	  decorateWithDynamicHost,
	  hostedLibFilesBaseUrl,
	  minified
	) {
	  return function (file) {
	    if (minified) {
	      var fileParts = file.split('.');
	      fileParts.splice(fileParts.length - 1 || 1, 0, 'min');
	      file = fileParts.join('.');
	    }

	    return decorateWithDynamicHost(hostedLibFilesBaseUrl) + file;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/
	var JS_EXTENSION = '.js';

	/**
	 * @private
	 * Returns the directory of a path. A limited version of path.dirname in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * path has a least one slash
	 * path does not end with a slash
	 * path does not have empty segments (e.g., /src/lib//foo.bar)
	 *
	 * @param {string} path
	 * @returns {string}
	 */
	var dirname = function (path) {
	  return path.substr(0, path.lastIndexOf('/'));
	};

	/**
	 * Determines if a string ends with a certain string.
	 * @param {string} str The string to test.
	 * @param {string} suffix The suffix to look for at the end of str.
	 * @returns {boolean} Whether str ends in suffix.
	 */
	var endsWith = function (str, suffix) {
	  return str.indexOf(suffix, str.length - suffix.length) !== -1;
	};

	/**
	 * Given a starting path and a path relative to the starting path, returns the final path. A
	 * limited version of path.resolve in nodejs.
	 *
	 * To keep it simple, it makes the following assumptions:
	 * fromPath has at least one slash
	 * fromPath does not end with a slash.
	 * fromPath does not have empty segments (e.g., /src/lib//foo.bar)
	 * relativePath starts with ./ or ../
	 *
	 * @param {string} fromPath
	 * @param {string} relativePath
	 * @returns {string}
	 */
	var resolveRelativePath = function (fromPath, relativePath) {
	  // Handle the case where the relative path does not end in the .js extension. We auto-append it.
	  if (!endsWith(relativePath, JS_EXTENSION)) {
	    relativePath = relativePath + JS_EXTENSION;
	  }

	  var relativePathSegments = relativePath.split('/');
	  var resolvedPathSegments = dirname(fromPath).split('/');

	  relativePathSegments.forEach(function (relativePathSegment) {
	    if (!relativePathSegment || relativePathSegment === '.') {
	      return;
	    } else if (relativePathSegment === '..') {
	      if (resolvedPathSegments.length) {
	        resolvedPathSegments.pop();
	      }
	    } else {
	      resolvedPathSegments.push(relativePathSegment);
	    }
	  });

	  return resolvedPathSegments.join('/');
	};

	/*!
	 * JavaScript Cookie v2.2.1
	 * https://github.com/js-cookie/js-cookie
	 *
	 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
	 * Released under the MIT license
	 */

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader;
		{
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function decode (s) {
			return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
		}

		function init (converter) {
			function api() {}

			function set (key, value, attributes) {
				if (typeof document === 'undefined') {
					return;
				}

				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					var result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}

					// Considers RFC 6265 section 5.2:
					// ...
					// 3.  If the remaining unparsed-attributes contains a %x3B (";")
					//     character:
					// Consume the characters of the unparsed-attributes up to,
					// not including, the first %x3B (";") character.
					// ...
					stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
				}

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			function get (key, json) {
				if (typeof document === 'undefined') {
					return;
				}

				var jar = {};
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all.
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (!json && cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = decode(parts[0]);
						cookie = (converter.read || converter)(cookie, name) ||
							decode(cookie);

						if (json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						jar[name] = cookie;

						if (key === name) {
							break;
						}
					} catch (e) {}
				}

				return key ? jar[key] : jar;
			}

			api.set = set;
			api.get = function (key) {
				return get(key, false /* read as raw */);
			};
			api.getJSON = function (key) {
				return get(key, true /* read as json */);
			};
			api.remove = function (key, attributes) {
				set(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.defaults = {};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	// js-cookie has other methods that we haven't exposed here. By limiting the exposed API,
	// we have a little more flexibility to change the underlying implementation later. If clear
	// use cases come up for needing the other methods js-cookie exposes, we can re-evaluate whether
	// we want to expose them here.
	var reactorCookie = {
	  get: js_cookie.get,
	  set: js_cookie.set,
	  remove: js_cookie.remove
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	var getPromise = function(url, script) {
	  return new reactorPromise(function(resolve, reject) {
	    script.onload = function() {
	      resolve(script);
	    };

	    script.onerror = function() {
	      reject(new Error('Failed to load script ' + url));
	    };
	  });
	};

	var reactorLoadScript = function(url) {
	  var script = document.createElement('script');
	  script.src = url;
	  script.async = true;

	  var promise = getPromise(url, script);

	  document.getElementsByTagName('head')[0].appendChild(script);
	  return promise;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	// If obj.hasOwnProperty has been overridden, then calling
	// obj.hasOwnProperty(prop) will break.
	// See: https://github.com/joyent/node/issues/1707
	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	var decode = function(qs, sep, eq, options) {
	  sep = sep || '&';
	  eq = eq || '=';
	  var obj = {};

	  if (typeof qs !== 'string' || qs.length === 0) {
	    return obj;
	  }

	  var regexp = /\+/g;
	  qs = qs.split(sep);

	  var maxKeys = 1000;
	  if (options && typeof options.maxKeys === 'number') {
	    maxKeys = options.maxKeys;
	  }

	  var len = qs.length;
	  // maxKeys <= 0 means that we should not limit keys count
	  if (maxKeys > 0 && len > maxKeys) {
	    len = maxKeys;
	  }

	  for (var i = 0; i < len; ++i) {
	    var x = qs[i].replace(regexp, '%20'),
	        idx = x.indexOf(eq),
	        kstr, vstr, k, v;

	    if (idx >= 0) {
	      kstr = x.substr(0, idx);
	      vstr = x.substr(idx + 1);
	    } else {
	      kstr = x;
	      vstr = '';
	    }

	    k = decodeURIComponent(kstr);
	    v = decodeURIComponent(vstr);

	    if (!hasOwnProperty(obj, k)) {
	      obj[k] = v;
	    } else if (Array.isArray(obj[k])) {
	      obj[k].push(v);
	    } else {
	      obj[k] = [obj[k], v];
	    }
	  }

	  return obj;
	};

	// Copyright Joyent, Inc. and other Node contributors.

	var stringifyPrimitive = function(v) {
	  switch (typeof v) {
	    case 'string':
	      return v;

	    case 'boolean':
	      return v ? 'true' : 'false';

	    case 'number':
	      return isFinite(v) ? v : '';

	    default:
	      return '';
	  }
	};

	var encode = function(obj, sep, eq, name) {
	  sep = sep || '&';
	  eq = eq || '=';
	  if (obj === null) {
	    obj = undefined;
	  }

	  if (typeof obj === 'object') {
	    return Object.keys(obj).map(function(k) {
	      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
	      if (Array.isArray(obj[k])) {
	        return obj[k].map(function(v) {
	          return ks + encodeURIComponent(stringifyPrimitive(v));
	        }).join(sep);
	      } else {
	        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
	      }
	    }).join(sep);

	  }

	  if (!name) return '';
	  return encodeURIComponent(stringifyPrimitive(name)) + eq +
	         encodeURIComponent(stringifyPrimitive(obj));
	};

	var querystring = createCommonjsModule(function (module, exports) {

	exports.decode = exports.parse = decode;
	exports.encode = exports.stringify = encode;
	});

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/



	// We proxy the underlying querystring module so we can limit the API we expose.
	// This allows us to more easily make changes to the underlying implementation later without
	// having to worry about breaking extensions. If extensions demand additional functionality, we
	// can make adjustments as needed.
	var reactorQueryString = {
	  parse: function(string) {
	    //
	    if (typeof string === 'string') {
	      // Remove leading ?, #, & for some leniency so you can pass in location.search or
	      // location.hash directly.
	      string = string.trim().replace(/^[?#&]/, '');
	    }
	    return querystring.parse(string);
	  },
	  stringify: function(object) {
	    return querystring.stringify(object);
	  }
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var CORE_MODULE_PREFIX = '@adobe/reactor-';

	var modules = {
	  cookie: reactorCookie,
	  document: reactorDocument,
	  'load-script': reactorLoadScript,
	  'object-assign': reactorObjectAssign,
	  promise: reactorPromise,
	  'query-string': reactorQueryString,
	  window: reactorWindow
	};

	/**
	 * Creates a function which can be passed as a "require" function to extension modules.
	 *
	 * @param {Function} getModuleExportsByRelativePath
	 * @returns {Function}
	 */
	var createPublicRequire = function (getModuleExportsByRelativePath) {
	  return function (key) {
	    if (key.indexOf(CORE_MODULE_PREFIX) === 0) {
	      var keyWithoutScope = key.substr(CORE_MODULE_PREFIX.length);
	      var module = modules[keyWithoutScope];

	      if (module) {
	        return module;
	      }
	    }

	    if (key.indexOf('./') === 0 || key.indexOf('../') === 0) {
	      return getModuleExportsByRelativePath(key);
	    }

	    throw new Error('Cannot resolve module "' + key + '".');
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateModuleProvider = function (
	  container,
	  moduleProvider,
	  debugController,
	  replaceTokens,
	  getDataElementValue,
	  settingsFileTransformer,
	  decorateWithDynamicHost
	) {
	  var extensions = container.extensions;
	  var buildInfo = container.buildInfo;
	  var environment = container.environment;
	  var propertySettings = container.property.settings;

	  if (extensions) {
	    var getSharedModuleExports = createGetSharedModuleExports(
	      extensions,
	      moduleProvider
	    );

	    Object.keys(extensions).forEach(function (extensionName) {
	      var extension = extensions[extensionName];
	      var extensionSettings = extension.settings;
	      if (Array.isArray(extension.filePaths)) {
	        extensionSettings = settingsFileTransformer(
	          extensionSettings,
	          extension.filePaths
	        );
	      }
	      var getExtensionSettings = createGetExtensionSettings(
	        replaceTokens,
	        extensionSettings
	      );

	      if (extension.modules) {
	        var prefixedLogger = logger.createPrefixedLogger(extension.displayName);
	        var getHostedLibFileUrl = createGetHostedLibFileUrl(
	          decorateWithDynamicHost,
	          extension.hostedLibFilesBaseUrl,
	          buildInfo.minified
	        );
	        var turbine = {
	          buildInfo: buildInfo,
	          environment: environment,
	          property: {
	            name: container.property.name,
	            id: container.property.id
	          },
	          getDataElementValue: getDataElementValue,
	          getExtensionSettings: getExtensionSettings,
	          getHostedLibFileUrl: getHostedLibFileUrl,
	          getSharedModule: getSharedModuleExports,
	          logger: prefixedLogger,
	          propertySettings: propertySettings,
	          replaceTokens: replaceTokens,
	          onDebugChanged: debugController.onDebugChanged,
	          get debugEnabled() {
	            return debugController.getDebugEnabled();
	          }
	        };

	        Object.keys(extension.modules).forEach(function (referencePath) {
	          var module = extension.modules[referencePath];
	          var getModuleExportsByRelativePath = function (relativePath) {
	            var resolvedReferencePath = resolveRelativePath(
	              referencePath,
	              relativePath
	            );
	            return moduleProvider.getModuleExports(resolvedReferencePath);
	          };
	          var publicRequire = createPublicRequire(
	            getModuleExportsByRelativePath
	          );

	          moduleProvider.registerModule(
	            referencePath,
	            module,
	            extensionName,
	            publicRequire,
	            turbine
	          );
	        });
	      }
	    });

	    // We want to extract the module exports immediately to allow the modules
	    // to run some logic immediately.
	    // We need to do the extraction here in order for the moduleProvider to
	    // have all the modules previously registered. (eg. when moduleA needs moduleB, both modules
	    // must exist inside moduleProvider).
	    moduleProvider.hydrateCache();
	  }
	  return moduleProvider;
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	var hydrateSatelliteObject = function (
	  _satellite,
	  container,
	  setDebugEnabled,
	  getVar,
	  setCustomVar
	) {
	  var customScriptPrefixedLogger = logger.createPrefixedLogger('Custom Script');

	  // Will get replaced by the directCall event delegate from the Core extension. Exists here in
	  // case there are no direct call rules (and therefore the directCall event delegate won't get
	  // included) and our customers are still calling the method. In this case, we don't want an error
	  // to be thrown. This method existed before Reactor.
	  _satellite.track = function (identifier) {
	    logger.log(
	      '"' + identifier + '" does not match any direct call identifiers.'
	    );
	  };

	  // Will get replaced by the Marketing Cloud ID extension if installed. Exists here in case
	  // the extension is not installed and our customers are still calling the method. In this case,
	  // we don't want an error to be thrown. This method existed before Reactor.
	  _satellite.getVisitorId = function () {
	    return null;
	  };

	  // container.property also has property settings, but it shouldn't concern the user.
	  // By limiting our API exposure to necessities, we provide more flexibility in the future.
	  _satellite.property = {
	    name: container.property.name,
	    id: container.property.id
	  };

	  _satellite.company = container.company;

	  _satellite.buildInfo = container.buildInfo;

	  _satellite.environment = container.environment;

	  _satellite.logger = customScriptPrefixedLogger;

	  /**
	   * Log a message. We keep this due to legacy baggage.
	   * @param {string} message The message to log.
	   * @param {number} [level] A number that represents the level of logging.
	   * 3=info, 4=warn, 5=error, anything else=log
	   */
	  _satellite.notify = function (message, level) {
	    logger.deprecation(
	      '_satellite.notify is deprecated. Please use the `_satellite.logger` API.'
	    );

	    switch (level) {
	      case 3:
	        customScriptPrefixedLogger.info(message);
	        break;
	      case 4:
	        customScriptPrefixedLogger.warn(message);
	        break;
	      case 5:
	        customScriptPrefixedLogger.error(message);
	        break;
	      default:
	        customScriptPrefixedLogger.log(message);
	    }
	  };

	  _satellite.getVar = getVar;
	  _satellite.setVar = setCustomVar;

	  /**
	   * Writes a cookie.
	   * @param {string} name The name of the cookie to save.
	   * @param {string} value The value of the cookie to save.
	   * @param {number} [days] The number of days to store the cookie. If not specified, the cookie
	   * will be stored for the session only.
	   */
	  _satellite.setCookie = function (name, value, days) {
	    var optionsStr = '';
	    var options = {};

	    if (days) {
	      optionsStr = ', { expires: ' + days + ' }';
	      options.expires = days;
	    }

	    var msg =
	      '_satellite.setCookie is deprecated. Please use ' +
	      '_satellite.cookie.set("' +
	      name +
	      '", "' +
	      value +
	      '"' +
	      optionsStr +
	      ').';

	    logger.deprecation(msg);
	    reactorCookie.set(name, value, options);
	  };

	  /**
	   * Reads a cookie value.
	   * @param {string} name The name of the cookie to read.
	   * @returns {string}
	   */
	  _satellite.readCookie = function (name) {
	    logger.deprecation(
	      '_satellite.readCookie is deprecated. ' +
	        'Please use _satellite.cookie.get("' +
	        name +
	        '").'
	    );
	    return reactorCookie.get(name);
	  };

	  /**
	   * Removes a cookie value.
	   * @param name
	   */
	  _satellite.removeCookie = function (name) {
	    logger.deprecation(
	      '_satellite.removeCookie is deprecated. ' +
	        'Please use _satellite.cookie.remove("' +
	        name +
	        '").'
	    );
	    reactorCookie.remove(name);
	  };

	  _satellite.cookie = reactorCookie;

	  // Will get replaced by the pageBottom event delegate from the Core extension. Exists here in
	  // case the customers are not using core (and therefore the pageBottom event delegate won't get
	  // included) and they are still calling the method. In this case, we don't want an error
	  // to be thrown. This method existed before Reactor.
	  _satellite.pageBottom = function () {};

	  _satellite.setDebug = setDebugEnabled;

	  var warningLogged = false;

	  Object.defineProperty(_satellite, '_container', {
	    get: function () {
	      if (!warningLogged) {
	        logger.warn(
	          '_satellite._container may change at any time and should only ' +
	            'be used for debugging.'
	        );
	        warningLogged = true;
	      }

	      return container;
	    }
	  });
	};

	/***************************************************************************************
	 * (c) 2021 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	function isArrayReference(str) {
	  return (
	    typeof str === 'string' &&
	    str.indexOf('[') !== -1 &&
	    str.indexOf(']') !== -1
	  );
	}
	function sanitizeArrayKey(pathStrSegment) {
	  return pathStrSegment.substr(
	    0,
	    // the name goes up to the start of the array bracket: 'someArrayName[]'
	    pathStrSegment.indexOf('[')
	  );
	}

	/**
	 * Recursive function to loop through settings and look for the setting to transform,
	 * which is the final entry within the pathSegments array. Alters settings in-place.
	 * @param {Array} pathSegments
	 * @param {Object} settings
	 * @param {Function} decorateWithDynamicHost
	 */
	function traverseIntoSettings(pathSegments, settings, decorateWithDynamicHost) {
	  // nothing to do
	  if (!pathSegments.length || !isPlainObject(settings)) {
	    return;
	  }

	  var currentKey = pathSegments[0];

	  // base case
	  if (pathSegments.length === 1) {
	    if (
	      settings.hasOwnProperty(currentKey) &&
	      typeof settings[currentKey] === 'string'
	    ) {
	      settings[currentKey] = decorateWithDynamicHost(settings[currentKey]);
	    }
	    return;
	  }

	  // still more work to do
	  var remainingPathSegments = pathSegments.slice(1);
	  if (isArrayReference(currentKey)) {
	    // 'someArrayReference[]' --> 'someArrayReference'
	    currentKey = sanitizeArrayKey(currentKey);
	    var settingsValue = settings[currentKey];
	    if (Array.isArray(settingsValue)) {
	      settingsValue.forEach(function (arrayEntryObject) {
	        return traverseIntoSettings(
	          remainingPathSegments,
	          arrayEntryObject,
	          decorateWithDynamicHost
	        );
	      });
	    }
	  } else {
	    // object case
	    return traverseIntoSettings(
	      remainingPathSegments,
	      settings[currentKey],
	      decorateWithDynamicHost
	    );
	  }
	}

	/**
	 * Returns a function that when called will attempt to traverse the passed in
	 * settings object to each file path and transform a relative URL to an absolute
	 * URL.
	 *
	 * @param isDynamicEnforced
	 * @param decorateWithDynamicHost
	 * @returns {(function(*=, *=, *=): (*))|*}
	 */
	var createSettingsFileTransformer = function (isDynamicEnforced, decorateWithDynamicHost) {
	  return function (settings, filePaths, moduleReferencePath) {
	    if (
	      !isDynamicEnforced ||
	      !isPlainObject(settings) ||
	      !Object.keys(settings).length ||
	      !Array.isArray(filePaths) ||
	      !filePaths.length
	    ) {
	      return settings;
	    }

	    // pull out the file paths by the module's reference path and loop over each urlPath
	    filePaths.forEach(function (filePathString) {
	      // The custom code action provides the ability to have the source code in the 'source'
	      // variable or to have an external file. Therefore, this module has 2 behaviors.
	      // It also does not provide a value of false for isExternal just as all other extensions
	      // that use fileTransform do not provide an isExternal variable check. Therefore, we need
	      // to treat Adobe's custom code action special, and don't augment the 'source' variable
	      // if isExternal is not also present.
	      var isAdobeCustomCodeAction = Boolean(
	        moduleReferencePath != null &&
	          /^core\/.*actions.*\/customCode\.js$/.test(moduleReferencePath)
	      );
	      if (
	        isAdobeCustomCodeAction &&
	        filePathString === 'source' &&
	        !settings.isExternal
	      ) {
	        return;
	      }

	      // modify the object in place
	      traverseIntoSettings(
	        filePathString.split('.'),
	        settings,
	        decorateWithDynamicHost
	      );
	    });

	    return settings;
	  };
	};

	/***************************************************************************************
	 * (c) 2017 Adobe. All rights reserved.
	 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License. You may obtain a copy
	 * of the License at http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software distributed under
	 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
	 * OF ANY KIND, either express or implied. See the License for the specific language
	 * governing permissions and limitations under the License.
	 ****************************************************************************************/

	// DYNAMIC URL













































	var _satellite = window._satellite;

	if (_satellite && !window.__satelliteLoaded) {
	  // If a consumer loads the library multiple times, make sure only the first time is effective.
	  window.__satelliteLoaded = true;

	  var container = _satellite.container;

	  // Remove container in public scope ASAP so it can't be manipulated by extension or user code.
	  delete _satellite.container;

	  /*
	    get rid of container.buildInfo decoration once deprecation is finished of
	    buildInfo.environment string
	   */
	  var buildInfo = reactorObjectAssign({}, container.buildInfo);
	  Object.defineProperty(buildInfo, 'environment', {
	    get: function () {
	      logger.deprecation(
	        'container.buildInfo.environment is deprecated.' +
	          'Please use `container.environment.stage` instead'
	      );
	      return container.environment.stage;
	    }
	  });
	  container.buildInfo = buildInfo;

	  var localStorage = getNamespacedStorage('localStorage');
	  var debugController = createDebugController(localStorage, logger);

	  var currentScriptSource = '';
	  if (reactorDocument.currentScript && reactorDocument.currentScript.getAttribute('src')) {
	    currentScriptSource = reactorDocument.currentScript.getAttribute('src');
	  }
	  var dynamicHostResolver;
	  try {
	    dynamicHostResolver = createDynamicHostResolver(
	      currentScriptSource,
	      Boolean(container.company.dynamicCdnEnabled),
	      container.company.cdnAllowList,
	      debugController
	    );
	  } catch (e) {
	    logger.warn('Please review the following error:');
	    throw e; // We don't want to continue allowing Turbine to start up if we detect an error in here
	  }

	  var settingsFileTransformer = createSettingsFileTransformer(
	    dynamicHostResolver.isDynamicEnforced,
	    dynamicHostResolver.decorateWithDynamicHost
	  );

	  var moduleProvider = createModuleProvider();

	  var replaceTokens;

	  var undefinedVarsReturnEmpty =
	    container.property.settings.undefinedVarsReturnEmpty;
	  var ruleComponentSequencingEnabled =
	    container.property.settings.ruleComponentSequencingEnabled;

	  var dataElements = container.dataElements || {};

	  var getDataElementDefinition = function (name) {
	    return dataElements[name];
	  };

	  // We support data elements referencing other data elements. In order to be able to retrieve a
	  // data element value, we need to be able to replace data element tokens inside its settings
	  // object (which is what replaceTokens is for). In order to be able to replace data element
	  // tokens inside a settings object, we need to be able to retrieve data element
	  // values (which is what getDataElementValue is for). This proxy replaceTokens function solves the
	  // chicken-or-the-egg problem by allowing us to provide a replaceTokens function to
	  // getDataElementValue that will stand in place of the real replaceTokens function until it
	  // can be created. This also means that createDataElementValue should not call the proxy
	  // replaceTokens function until after the real replaceTokens has been created.
	  var proxyReplaceTokens = function () {
	    return replaceTokens.apply(null, arguments);
	  };

	  var getDataElementValue = createGetDataElementValue(
	    moduleProvider,
	    getDataElementDefinition,
	    proxyReplaceTokens,
	    undefinedVarsReturnEmpty,
	    settingsFileTransformer
	  );

	  var customVars = {};
	  var setCustomVar = createSetCustomVar(customVars);

	  var isVar = createIsVar(customVars, getDataElementDefinition);

	  var getVar = createGetVar(
	    customVars,
	    getDataElementDefinition,
	    getDataElementValue
	  );

	  replaceTokens = createReplaceTokens(isVar, getVar, undefinedVarsReturnEmpty);

	  // Important to hydrate satellite object before we hydrate the module provider or init rules.
	  // When we hydrate module provider, we also execute extension code which may be
	  // accessing _satellite.
	  hydrateSatelliteObject(
	    _satellite,
	    container,
	    debugController.setDebugEnabled,
	    getVar,
	    setCustomVar
	  );

	  hydrateModuleProvider(
	    container,
	    moduleProvider,
	    debugController,
	    replaceTokens,
	    getDataElementValue,
	    settingsFileTransformer,
	    dynamicHostResolver.decorateWithDynamicHost
	  );

	  var notifyMonitors = createNotifyMonitors(_satellite);
	  var executeDelegateModule = createExecuteDelegateModule(
	    moduleProvider,
	    replaceTokens,
	    settingsFileTransformer
	  );

	  var getModuleDisplayNameByRuleComponent =
	    createGetModuleDisplayNameByRuleComponent(moduleProvider);
	  var logConditionNotMet = createLogConditionNotMet(
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logConditionError = createLogConditionError(
	    getRuleComponentErrorMessage,
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logActionError = createLogActionError(
	    getRuleComponentErrorMessage,
	    getModuleDisplayNameByRuleComponent,
	    logger,
	    notifyMonitors
	  );
	  var logRuleCompleted = createLogRuleCompleted(logger, notifyMonitors);

	  var evaluateConditions = createEvaluateConditions(
	    executeDelegateModule,
	    isConditionMet,
	    logConditionNotMet,
	    logConditionError
	  );
	  var runActions = createRunActions(
	    executeDelegateModule,
	    logActionError,
	    logRuleCompleted
	  );
	  var executeRule = createExecuteRule(evaluateConditions, runActions);

	  var addConditionToQueue = createAddConditionToQueue(
	    executeDelegateModule,
	    normalizeRuleComponentError,
	    isConditionMet,
	    logConditionError,
	    logConditionNotMet
	  );
	  var addActionToQueue = createAddActionToQueue(
	    executeDelegateModule,
	    normalizeRuleComponentError,
	    logActionError
	  );
	  var addRuleToQueue = createAddRuleToQueue(
	    addConditionToQueue,
	    addActionToQueue,
	    logRuleCompleted
	  );

	  var triggerRule = createTriggerRule(
	    ruleComponentSequencingEnabled,
	    executeRule,
	    addRuleToQueue,
	    notifyMonitors
	  );

	  var getSyntheticEventMeta = createGetSyntheticEventMeta(moduleProvider);

	  var initEventModule = createInitEventModule(
	    triggerRule,
	    executeDelegateModule,
	    normalizeSyntheticEvent,
	    getRuleComponentErrorMessage,
	    getSyntheticEventMeta,
	    logger
	  );

	  initRules(buildRuleExecutionOrder, container.rules || [], initEventModule);
	}

	// Rollup's iife option always sets a global with whatever is exported, so we'll set the
	// _satellite global with the same object it already is (we've only modified it).
	var src = _satellite;

	return src;

})();

