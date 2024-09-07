// ==UserScript==
// @name         Key Event Blocker with Back Button Protection
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Block key events and prevent interference with back button
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Block scripts from breaking keyboard shortcuts 
    document.addEventListener('keydown', function(e) {
        const targetKeys = [
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'l', 'f', 'g', 'p', 'o', '=', '-', 'i', 's',
            'j', 'd', 'c', 'v', 'x', 'z', 'a', 'u', 'y', 'b',
            'ArrowLeft', 'ArrowRight',
        ];

        if ((e.ctrlKey || e.metaKey) && targetKeys.includes(e.key)) {
            console.log('Blocked key:', e.key);
            e.stopPropagation();
            e.preventDefault();
        }
    }, true);

    // Prevent interference with back button
    let isBackButtonClicked = false;

    window.addEventListener('popstate', function(event) {
        if (!isBackButtonClicked) {
            window.history.pushState(null, null, window.location.href);
        }
        isBackButtonClicked = false;
    });

    history.pushState(null, null, window.location.href);
    window.addEventListener('popstate', function() {
        isBackButtonClicked = true;
        history.back();
    });

})();