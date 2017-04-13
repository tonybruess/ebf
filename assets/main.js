var user;

function updateEnergy() {
    num = pad(user.energy, 3);
    $("#energy").attr("src", "/assets/energy/energy." + num + ".jpeg");
    if (user.energy >= 23 && !window.location.href.includes('too_')) {
        window.location.href = '/game/too_tired'
    }
}

function updateTurnt() {
    num = pad(user.turnt, 3);
    $("#turnt").attr("src", "/assets/turnt/turnt." + num + ".jpeg");
    if (user.turnt >= 23 && !window.location.href.includes('too_')) {
        window.location.href = '/game/too_turnt';
    }
}

function save() {
    localStorage.user = JSON.stringify(user);
}

$(document).ready(function() {
    // load state
    user = JSON.parse(localStorage.user || '{"energy": 1, "turnt": 1}');

    // save state
    $(window).unload(function() {
        localStorage.user = JSON.stringify(user);
    });

    updateEnergy();
    updateTurnt();

    $('.energy').click(function () {
        user.energy += 1;
        updateEnergy();
    });

    $('.turnt').click(function () {
        user.turnt += 1;
        updateTurnt();
    });

    $('.water').click(function () {
        if (user.turnt > 0) {
            user.turnt -= 1;
            updateTurnt();
        }
    });

    $('.reset').click(function () {
        user.turnt = 1;
        user.energy = 1;
    });

});

function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}
