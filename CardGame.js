var deckPrime = ['2C','2D','2H','2S','3C','3D','3H','3S','4C','4D','4H','4S','5C','5D','5H','5S',
'6C','6D','6H','6S','7C','7D','7H','7S','8C','8D','8H','8S','9C','9D','9H','9S',
'10C','10D','10H','10S','JC','JD','JH','JS','QC','QD','QH','QS','KC','KD','KH','KS','AC','AD','AH','AS'];
var deck1 = [];
var deck2 = [];
var cardNum;
var flipped1 = false;
var flipped2 = false;
var card1;
var card2;
var run = false;
var gameWin = true;
for(i = 2; i < 53; i++){
    $('#diff').append('<option value=' + i + '>' + i + '</option>');
}
$('.btn').click(function(){
    cardNum = $('#diff').val();
    if(cardNum != 0){
        deck1 = [];
        deck2 = [];
        $('#hold1').html('');
        $('#hold2').html('');
        $('.matchedCards').html('');
        for(i = 0; i < cardNum; i++){
            var primeCard = deckPrime[Math.floor(Math.random()*52)];
            while(deck1.indexOf(primeCard) != -1){
                primeCard = deckPrime[Math.floor(Math.random()*52)];
            }
            deck1.push(primeCard);
            $('#hold1').append('<img src=img/blue_back.png value=' + primeCard + ' class="cards1" flip="false">');
        }
        for(i = 0; i < cardNum; i++){
            var copyCard = deck1[Math.floor(Math.random()*cardNum)];
            while(deck2.indexOf(copyCard) != -1){
                copyCard = deck1[Math.floor(Math.random()*cardNum)];
            }
            deck2.push(copyCard);
            $('#hold2').append('<img src=img/red_back.png value=' + copyCard + ' class="cards2" flip="false">');
        }
    }
    $('.cards1').click(function(){
        gameWin = true;
        if(!flipped1 && $(this).attr('flip') == 'false' && !run){
            card1 = $(this).attr('value');
            flipped1 = true;
            $(this).attr('src', 'img/' + card1 + '.png');
            $(this).attr('flip','true');
        }
        if(flipped1 && flipped2){
            flipped1 = false;
            flipped2 = false;
            if(card1 == card2){
                $('.matchedCards').append('<img src=img/' + card1 + '.png>');
                $('img[flip="true"]').attr('flip','match');
            } else {
                run = true;
                setTimeout(function(){
                    $('img[flip="true"]').attr('flip','false');
                    $('img.cards1[flip="false"]').attr('src','img/blue_back.png');
                    $('img.cards2[flip="false"]').attr('src','img/red_back.png');
                    run = false;
                },600);
            }
            card1 = '';
            card2 = '';
        }
        $('.deckholder img').each(function(){
            if($(this).attr('flip') != 'match'){
                gameWin = false;
                console.log('test');
            }
        })
    
        if(gameWin){
            alert('Congratulations!');
        }
    })

    $('.cards2').click(function(){
        gameWin = true;
        if(!flipped2 && $(this).attr('flip') == 'false' && !run){
            card2 = $(this).attr('value');
            flipped2 = true;
            $(this).attr('src', 'img/' + card2 + '.png');
            $(this).attr('flip','true');
        }
        if(flipped1 && flipped2){
            flipped1 = false;
            flipped2 = false;
            if(card1 == card2){
                $('.matchedCards').append('<img src=img/' + card1 + '.png>');
                $('img[flip="true"]').attr('flip','match');
            } else {
                run = true;
                setTimeout(function(){
                    $('img[flip="true"]').attr('flip','false');
                    $('img.cards1[flip="false"]').attr('src','img/blue_back.png');
                    $('img.cards2[flip="false"]').attr('src','img/red_back.png');
                    run = false;
                },600);
            }
            card1 = '';
            card2 = '';
        }
        $('.deckholder img').each(function(){
            if($(this).attr('flip') != 'match'){
                gameWin = false;
                console.log('test');
            }
        })
    
        if(gameWin){
            alert('Congratulations!');
        }
    })


})

