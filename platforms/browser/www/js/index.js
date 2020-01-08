/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);

    },
    
    onDeviceReady: function() {
       // app.receivedEvent('deviceready');
        //Log.initialize(app.displayLogLine);
        /*alert("onDeviceReady");
        cordova.plugins.IMEI(function (err, imei) {
          alert('imei :'+ imei);
          //alert('error :'+err); 
        });*/
        
    },

    getImei: function(){
        cordova.plugins.sim.getSimInfo(successCallback, errorCallback);
    }, 
    scan: function () {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                alert("Barcode/QR code data\n" + "Result: " + result.text + "\n" + "Format: " + result.format + "\n" + "Cancelled: " + result.cancelled);
                //$("#barcode_result").html("Format "+result.format+"\n"+"Result: " + result.text);
            },
            function (error) {
                alert("Scanning failed: " + error);
                //$("#barcode_result").html("Scanning failed: " + error);
            },
            {
              preferFrontCamera : false, // iOS and Android
              //showFlipCameraButton : true, // iOS and Android
              //showTorchButton : true, // iOS and Android
              //torchOn: true, // Android, launch with the torch switched on (if available)
              saveHistory: true, // Android, save scan history (default false)
              prompt : "Place a barcode inside the scan area", // Android
              resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
              formats : "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
              orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
              disableAnimations : true, // iOS
              disableSuccessBeep: false // iOS and Android
            }
        ); 
    },
    // Update DOM on a Received Event
    /*receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');      
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};
function successCallback(result) {
        /*alert("success");
        alert(result);
        alert(result.carrierName);
        alert(result.countryCode);
        alert(result.mcc);
        alert(result.mnc);
        alert(result.phoneNumber);
        alert(result.cards[0].phoneNumber);
        alert(result.cards[1].phoneNumber);*/
        alert("IMEI 1 : "+result.cards[0].deviceId);
        alert("IMEI 2 : "+result.cards[1].deviceId);
    }

    function errorCallback(error) {
        alert("error");
        console.log(error);
        alert(error);
    }