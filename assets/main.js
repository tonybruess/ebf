var user;

function useEnergy() {
    user.energy += 1;
    displayEnergy();
}

function getTurnt() {
    user.turnt += 1;
    displayTurnt();
}

function displayEnergy() {
    num = pad(user.energy, 3);
    $("#energy").attr("src", "/assets/energy/energy." + num + ".jpeg");
}

function displayTurnt() {
    num = pad(user.turnt, 3);
    $("#turnt").attr("src", "/assets/turnt/turnt." + num + ".jpeg");
}

$(document).ready(function() {
    // load state
    user = JSON.parse(localStorage.user || '{"energy": 1, "turnt": 1}');

    // save state
    $(window).unload(function() {
        localStorage.user = JSON.stringify(user);
    });

    displayEnergy();
    displayTurnt();

    // main page
    $('#enter').click(function() {
        if (($('#code').val() - 125) % 12523 == 0) {
            window.location.href = '/game/';
        } else {
            $('#wrong').html('Wrong!');
        }
    });

});

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
