// ==UserScript==
// @name         Key Event Blocker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block key event
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('keydown', function(e) {

        const targetKeys = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'l', 'f', 'g', 'p', 'o', '=', '-', 'i', 's',
            'j', 'd', 'c', 'v', 'x', 'z', 'a', 'u', 'y', 'b',
            'ArrowLeft', 'ArrowRight',
        ];

      if ((e.ctrlKey || e.metaKey)
        && targetKeys.includes(e.key)) {
            console.log(e.key);
            e.stopPropagation();
        }
    }, true);
})();
