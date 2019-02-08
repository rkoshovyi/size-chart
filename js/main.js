$(document).ready(function () {
    var widthSelect = $('#width'),
        heightSelect = $('#height'),
        selectedWidth = parseInt(widthSelect.val()),
        selectedHeight = parseInt(heightSelect.val()),
        mirror = $('#mirror'),
        maxSize = $('#container').width() - 100;

    function setRules() {
        var horizontalLinesCount = selectedWidth + 1,
            verticalLinesCount = selectedHeight + 1,
            horizontalNumbersCount = selectedWidth / 10,
            verticalNumbersCount = selectedHeight / 10;

        $('.separator, .rule-number').remove();
        
        for (var i = 0; i < horizontalLinesCount; i++) {
            $('.rule.horizontal').append('<div class="horizontal-separator separator" />');
        }        
        for (var i = 0; i < verticalLinesCount; i++) {
            $('.rule.vertical').append('<div class="vertical-separator separator" />');
        }
        for (var i = 0; i <= horizontalNumbersCount; i++) {
            $('.rule-numbers.horizontal').append('<span class="rule-number">' + i * 10 + '</span>');
        }
        for (var i = 0; i <= verticalNumbersCount; i++) {
            $('.rule-numbers.vertical').append('<span class="rule-number">' + i * 10 + '</span>');
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

                mirror.css({
                    width: maxSize + 'px',
                    height: calculatingSize + 'px'
                })
            } else if (selectedWidth < selectedHeight) {
                ratio = selectedWidth / selectedHeight;
                calculatingSize = maxSize * ratio;

                mirror.css({
                    width: calculatingSize + 'px',
                    height: maxSize + 'px'
                })
            } else {
                mirror.css({
                    height: maxSize + 'px',
                    width: maxSize + 'px'
                })
            }
        })();
    };

    widthSelect.on('change', function () {
        selectedWidth = parseInt(widthSelect.val());
        setSizes($(this).attr('id'));
    });

    heightSelect.on('change', function () {
        selectedHeight = parseInt(heightSelect.val());
        setSizes($(this).attr('id'));
    });
});