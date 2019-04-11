"use strict";

for (var i = 1; i < 50; i++) {
    if (i % 2 === 1)
    console.log(i);
    if (i === 27) {
        console.log('We have reached the stopping point: break!');
    }
}
