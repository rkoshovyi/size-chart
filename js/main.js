document.addEventListener("DOMContentLoaded", function() {
    var widthSelect = document.getElementById('width'),
        heightSelect = document.getElementById('height'),
        selectedWidth = parseInt(widthSelect.value),
        selectedHeight = parseInt(heightSelect.value),
        mirror = document.getElementById('mirror'),
        maxSize = document.getElementById('container').offsetWidth - 100;

    function setRules() {
        var horizontalLinesCount = selectedWidth + 1,
            verticalLinesCount = selectedHeight + 1,
            horizontalNumbersCount = selectedWidth / 10,
            verticalNumbersCount = selectedHeight / 10,
            rule = document.getElementsByClassName('rule'),
            ruleNumber = document.getElementsByClassName('rule-numbers');

        for (var i = 0; i < rule.length; i++) {
            rule[i].innerHTML = '';            
        }
        
        for (var i = 0; i < ruleNumber.length; i++) {
            ruleNumber[i].innerHTML = '';            
        }

        var ruleHorizontal = document.getElementsByClassName('rule horizontal');
        for (var i = 0; i < horizontalLinesCount; i++) {
            for (var j = 0; j < ruleHorizontal.length; j++) {
                ruleHorizontal[j].insertAdjacentHTML('beforeEnd', '<div class="horizontal-separator separator" />');
            }        
        }

        var ruleVertical = document.getElementsByClassName('rule vertical');
        for (var i = 0; i < verticalLinesCount; i++) {
            for (var j = 0; j < ruleVertical.length; j++) {
                ruleVertical[j].insertAdjacentHTML('beforeEnd', '<div class="vertical-separator separator" />');
            }        
        }

        var ruleNumbersHorizontal = document.getElementsByClassName('rule-numbers horizontal');
        for (var i = 0; i <= horizontalNumbersCount; i++) {
            for (var j = 0; j < ruleNumbersHorizontal.length; j++) {
                ruleNumbersHorizontal[j].insertAdjacentHTML('beforeEnd', '<span class="rule-number">' + i * 10 + '</span>');
            }        
        }        

        var ruleNumbersVertical = document.getElementsByClassName('rule-numbers vertical');
        for (var i = 0; i <= verticalNumbersCount; i++) {
            for (var j = 0; j < ruleNumbersVertical.length; j++) {
                ruleNumbersVertical[j].insertAdjacentHTML('beforeEnd', '<span class="rule-number">' + i * 10 + '</span>');
            }        
        }
    };

    setRules();

    function setSizes(selectId) {
        var calculatingSize,
            calculatedWidth,
            calculatedHeight,
            ratio;

        setRules();

        (function () {
            if (selectId == 'width') {
                calculatingSize = calculatedWidth;

            } else if (selectId == 'height') {
                calculatingSize = calculatedHeight;
            }

            if (selectedWidth > selectedHeight) {
                ratio = selectedHeight / selectedWidth;
                calculatingSize = maxSize * ratio;
                    
                mirror.style.width = maxSize + 'px';
                mirror.style.height = calculatingSize + 'px';

            } else if (selectedWidth < selectedHeight) {
                ratio = selectedWidth / selectedHeight;
                calculatingSize = maxSize * ratio;
                
                mirror.style.width = calculatingSize + 'px';
                mirror.style.height = maxSize + 'px';

            } else {
                mirror.style.width = maxSize + 'px';
                mirror.style.height = maxSize + 'px';
            }
        })();
    };

    widthSelect.onchange = function () {
        selectedWidth = parseInt(widthSelect.value);
        setSizes(this.getAttribute('id'));
    };

    heightSelect.onchange = function () {
        selectedHeight = parseInt(heightSelect.value);
        setSizes(this.getAttribute('id'));
    };
});

// jquery

//$(document).ready(function () {
//    var widthSelect = $('#width'),
//        heightSelect = $('#height'),
//        selectedWidth = parseInt(widthSelect.val()),
//        selectedHeight = parseInt(heightSelect.val()),
//        mirror = $('#mirror'),
//        maxSize = $('#container').width() - 100;
//
//    function setRules() {
//        var horizontalLinesCount = selectedWidth + 1,
//            verticalLinesCount = selectedHeight + 1,
//            horizontalNumbersCount = selectedWidth / 10,
//            verticalNumbersCount = selectedHeight / 10;
//
//        $('.separator, .rule-number').remove();
//        
//        for (var i = 0; i < horizontalLinesCount; i++) {
//            $('.rule.horizontal').append('<div class="horizontal-separator separator" />');
//        }        
//        for (var i = 0; i < verticalLinesCount; i++) {
//            $('.rule.vertical').append('<div class="vertical-separator separator" />');
//        }
//        for (var i = 0; i <= horizontalNumbersCount; i++) {
//            $('.rule-numbers.horizontal').append('<span class="rule-number">' + i * 10 + '</span>');
//        }
//        for (var i = 0; i <= verticalNumbersCount; i++) {
//            $('.rule-numbers.vertical').append('<span class="rule-number">' + i * 10 + '</span>');
//        }
//    };
//
//    setRules();
//
//    function setSizes(selectId) {
//        var calculatingSize,
//            calculatedWidth,
//            calculatedHeight,
//            ratio;
//
//        setRules();
//
//        (function () {
//            if (selectId == 'width') {
//                calculatingSize = calculatedWidth;
//
//            } else if (selectId == 'height') {
//                calculatingSize = calculatedHeight;
//            }
//
//            if (selectedWidth > selectedHeight) {
//                ratio = selectedHeight / selectedWidth;
//                calculatingSize = maxSize * ratio;
//
//                mirror.css({
//                    width: maxSize + 'px',
//                    height: calculatingSize + 'px'
//                })
//            } else if (selectedWidth < selectedHeight) {
//                ratio = selectedWidth / selectedHeight;
//                calculatingSize = maxSize * ratio;
//
//                mirror.css({
//                    width: calculatingSize + 'px',
//                    height: maxSize + 'px'
//                })
//            } else {
//                mirror.css({
//                    height: maxSize + 'px',
//                    width: maxSize + 'px'
//                })
//            }
//        })();
//    };
//
//    widthSelect.on('change', function () {
//        selectedWidth = parseInt(widthSelect.val());
//        setSizes($(this).attr('id'));
//    });
//
//    heightSelect.on('change', function () {
//        selectedHeight = parseInt(heightSelect.val());
//        setSizes($(this).attr('id'));
//    });
//});