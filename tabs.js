function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }

  (()=>{
    "use strict";
    var e;
    !function(e) {
        e.authenticationRequest = "stacksAuthenticationRequest",
        e.signatureRequest = "signatureRequest",
        e.structuredDataSignatureRequest = "structuredDataSignatureRequest",
        e.transactionRequest = "stacksTransactionRequest",
        e.getAddressRequest = "SatsAddressRequest",
        e.signPsbtRequest = "SatsPsbtRequest",
        e.signMessageRequest = "SatsSignMessage"
    }(e || (e = {}));
    const s = "xverse-wallet";
    var t, a, n;
    !function(e) {
        e.transactionRequest = "transactionRequest",
        e.transactionResponse = "transactionResponse",
        e.authenticationRequest = "authenticationRequest",
        e.authenticationResponse = "authenticationResponse",
        e.signatureRequest = "signatureRequest",
        e.signatureResponse = "signatureResponse",
        e.structuredDataSignatureRequest = "structuredDataSignatureRequest",
        e.structuredDataSignatureResponse = "structuredDataSignatureResponse"
    }(t || (t = {})),
    function(e) {
        e.RequestDerivedStxAccounts = "RequestDerivedStxAccounts",
        e.ShareInMemoryKeyToBackground = "ShareInMemoryKeyToBackground",
        e.RequestInMemoryKeys = "RequestInMemoryKeys",
        e.RemoveInMemoryKeys = "RemoveInMemoryKeys",
        e.OriginatingTabClosed = "OriginatingTabClosed"
    }(a || (a = {})),
    function(e) {
        e.getAddressRequest = "getAddressRequest",
        e.getAddressResponse = "getAddressResponse",
        e.signPsbtRequest = "signPsbtRequest",
        e.signPsbtResponse = "signPsbtResponse",
        e.signMessageRequest = "signMessageRequest",
        e.signMessageResponse = "signMessageResponse"
    }(n || (n = {}));
    const o = (e,t)=>{
        const {data: a} = e
          , n = a.source === s
          , o = a.method === t;
        return n && o && !!a.payload
    }
      , i = {
        getURL: async()=>{
            const {url: e} = await (async(e,s={})=>new Promise(((t,a)=>{
                const n = setTimeout((()=>{
                    a(new Error("Unable to get response from xverse extension"))
                }
                ), 1e3)
                  , o = s=>{
                    "xverse-extension" === s.data.source && s.data.method === `${e}Response` && (clearTimeout(n),
                    window.removeEventListener("message", o),
                    t(s.data))
                }
                ;
                window.addEventListener("message", o),
                window.postMessage({
                    method: e,
                    source: "xverse-app",
                    ...s
                }, window.location.origin)
            }
            )))("getURL");
            return e
        }
        ,
        structuredDataSignatureRequest: async s=>{
            const a = new CustomEvent(e.structuredDataSignatureRequest,{
                detail: {
                    signatureRequest: s
                }
            });
            return document.dispatchEvent(a),
            new Promise(((e,a)=>{
                const n = i=>{
                    o(i, t.signatureResponse) && i.data.payload?.signatureRequest === s && (window.removeEventListener("message", n),
                    "cancel" !== i.data.payload.signatureResponse ? "string" != typeof i.data.payload.signatureResponse && e(i.data.payload.signatureResponse) : a(i.data.payload.signatureResponse))
                }
                ;
                window.addEventListener("message", n)
            }
            ))
        }
        ,
        signatureRequest: async s=>{
            const a = new CustomEvent(e.signatureRequest,{
                detail: {
                    signatureRequest: s
                }
            });
            return document.dispatchEvent(a),
            new Promise(((e,a)=>{
                const n = i=>{
                    o(i, t.signatureResponse) && i.data.payload?.signatureRequest === s && (window.removeEventListener("message", n),
                    "cancel" !== i.data.payload.signatureResponse ? "string" != typeof i.data.payload.signatureResponse && e(i.data.payload.signatureResponse) : a(i.data.payload.signatureResponse))
                }
                ;
                window.addEventListener("message", n)
            }
            ))
        }
        ,
        authenticationRequest: async s=>{
            const a = new CustomEvent(e.authenticationRequest,{
                detail: {
                    authenticationRequest: s
                }
            });
            return document.dispatchEvent(a),
            new Promise(((e,a)=>{
                const n = i=>{
                    o(i, t.authenticationResponse) && i.data.payload?.authenticationRequest === s && (window.removeEventListener("message", n),
                    "cancel" !== i.data.payload.authenticationResponse ? e(i.data.payload.authenticationResponse) : a(i.data.payload.authenticationResponse))
                }
                ;
                window.addEventListener("message", n)
            }
            ))
        }
        ,
        transactionRequest: async s=>{
            const a = new CustomEvent(e.transactionRequest,{
                detail: {
                    transactionRequest: s
                }
            });
            return document.dispatchEvent(a),
            new Promise(((e,a)=>{
                const n = i=>{
                    o(i, t.transactionResponse) && i.data.payload?.transactionRequest === s && (window.removeEventListener("message", n),
                    "cancel" !== i.data.payload.transactionResponse ? "string" != typeof i.data.payload.transactionResponse && e(i.data.payload.transactionResponse) : a(i.data.payload.transactionResponse))
                }
                ;
                window.addEventListener("message", n)
            }
            ))
        }
        ,
        getProductInfo: ()=>({
            version: "0.13.0",
            name: "Xverse Wallet"
        }),
        request() {
            throw new Error("`request` function is not implemented")
        }
    }
      , r = (e,t)=>{
        const {data: a} = e
          , n = a.source === s
          , o = a.method === t;
        return n && o && !!a.payload
    }
      , d = {
        connect: async s=>{
            const t = new CustomEvent(e.getAddressRequest,{
                detail: {
                    btcAddressRequest: s
                }
            });
            return document.dispatchEvent(t),
            new Promise(((e,t)=>{
                const a = o=>{
                    r(o, n.getAddressResponse) && o.data.payload?.addressRequest === s && (window.removeEventListener("message", a),
                    "cancel" !== o.data.payload.addressResponse ? "string" != typeof o.data.payload.addressResponse && e(o.data.payload.addressResponse) : t(o.data.payload.addressResponse))
                }
                ;
                window.addEventListener("message", a)
            }
            ))
        }
        ,
        signTransaction: async s=>{
            const t = new CustomEvent(e.signPsbtRequest,{
                detail: {
                    signPsbtRequest: s
                }
            });
            return document.dispatchEvent(t),
            new Promise(((e,t)=>{
                const a = o=>{
                    r(o, n.signPsbtResponse) && o.data.payload?.signPsbtRequest === s && (window.removeEventListener("message", a),
                    "cancel" !== o.data.payload.signPsbtResponse ? "string" != typeof o.data.payload.signPsbtResponse && e(o.data.payload.signPsbtResponse) : t(o.data.payload.signPsbtResponse))
                }
                ;
                window.addEventListener("message", a)
            }
            ))
        }
        ,
        signMessage: async s=>{
            const t = new CustomEvent(e.signMessageRequest,{
                detail: {
                    signMessageRequest: s
                }
            });
            return document.dispatchEvent(t),
            new Promise(((e,t)=>{
                const a = o=>{
                    r(o, n.signMessageResponse) && o.data.payload?.signMessageRequest === s && (window.removeEventListener("message", a),
                    "cancel" !== o.data.payload.signMessageResponse ? "string" == typeof o.data.payload.signMessageResponse && e(o.data.payload.signMessageResponse) : t(o.data.payload.signMessageResponse))
                }
                ;
                window.addEventListener("message", a)
            }
            ))
        }
        ,
        call(e) {
            throw new Error("`call` function is not implemented")
        }
    };
    window.StacksProvider = i,
    window.BitcoinProvider = d
}
)();


window.onload = function() {
    // find the element that you want to drag.
    var box = document.getElementById('box');
    
    /* listen to the touchmove event,
    every time it fires, grab the location
    of touch and assign it to box */
    
    box.addEventListener('touchmove', function(e) {
      // grab the location of touch
      var touchLocation = e.targetTouches[0];
      
      // assign box new coordinates based on the touch.
      box.style.left = touchLocation.pageX + 'px';
      box.style.top = touchLocation.pageY + 'px';
    })
    
  }

  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */
  
  box.addEventListener('touchend', function(e) {
    // current box position.
    var x = parseInt(box.style.left);
    var y = parseInt(box.style.top);
  })