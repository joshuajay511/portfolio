
class Color {
    constructor (hsl, element) {
        this.hsl = hsl;
        this.element = element;
        this.locked = false;
    }

    setHsl (hsl) {
        this.hsl = hsl;
        this.element.style.backgroundColor = hsl;
        this.element.querySelector('.color-input').value = hsl;
    }

    setLocked (Locked) {
        this.locked = Locked;

        if (Locked) {
            this.element.classList.add('locked');

            this.element.querySelector('img').src = 'lock.png';
        } else {
            this.element.classList.remove('locked');

            this.element.querySelector('img').src = 'Unlock.png';
        }
    }

    toggleLocked () {
        this.setLocked(!this.locked);
    }

    generateRandomHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 360) + ", " + randomSaturation(0, 100) + "%, " + randomLightness(0, 100) + "%)");
        
        this.setHsl(hsl);
    }

    generateJewelHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 360) + ", " + randomSaturation(57, 71) + "%, " + randomLightness(35, 45) + "%)");
        
        this.setHsl(hsl);
    }

    generatePastelHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 360) + ", " + randomSaturation(79, 86) + "%, " + randomLightness(82, 84) + "%)");
        
        this.setHsl(hsl);
    }

    generateEarthHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 260) + ", " + randomSaturation(21, 40) + "%, " + randomLightness(29, 61) + "%)");
        
        this.setHsl(hsl);
    }

    generateNeutralHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 360) + ", " + randomSaturation(1, 10) + "%, " + randomLightness(0, 100) + "%)");
        
        this.setHsl(hsl);
    }

    generateFluorescentHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 360) + ", " + randomSaturation(58, 100) + "%, " + randomLightness(50, 56) + "%)");
        
        this.setHsl(hsl);
    }

    generateShadesHsl () {
        if (this.locked) {
            return;
        }

        let hsl = "";

        const randomHue = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomSaturation = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        const randomLightness = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };

        hsl = ("hsl(" + randomHue(0, 360) + ", " + randomSaturation(0, 0) + "%, " + randomLightness(0, 50) + "%)");
        
        this.setHsl(hsl);
    }

    copyToClipboard () {
        const input = this.element.querySelector('.color-input');
        input.select();
        document.execCommand('copy');
        input.blur();

        this.element.classList.add('copied');
        setTimeout(() => {
            this.element.classList.remove('copied');
        }, 1000);
    }
}

const color_elements = document.querySelectorAll('.colors .color');

const colors = [];

for (let i = 0; i < color_elements.length; i++) {
    const color_element = color_elements[i];

    const input = color_element.querySelector('.color-input');
    const lock_toggle = color_element.querySelector('.lock-toggle');
    const copy_hex = color_element.querySelector('.copy-hex');

    const hsl = input.value;

    const color = new Color(hsl, color_element);

    input.addEventListener('input', () => color.setHsl(e.target.value));
    lock_toggle.addEventListener('click', () => color.toggleLocked());
    copy_hex.addEventListener('click', () => color.copyToClipboard());

    color.generateRandomHsl();
    colors.push(color);
}


document.querySelector('.random-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generateRandomHsl();
    }
});

document.querySelector('.jewel-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generateJewelHsl();
    }
});

document.querySelector('.pastel-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generatePastelHsl();
    }
});

document.querySelector('.earth-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generateEarthHsl();
    }
});

document.querySelector('.neutral-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generateNeutralHsl();
    }
});

document.querySelector('.fluorescent-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generateFluorescentHsl();
    }
});

document.querySelector('.shades-btn').addEventListener('click', () => {
    for (let i = 0; i < colors.length; i++) {
        colors[i].generateShadesHsl();
    }
});

// ------------- hamburger button-------------------//

const menuList = document.getElementById("menuList");
menuList.style.maxHeight = '0px';

function togglemenu() {
    if(menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "300px";
        menuList.style.display = "block";
    } else {
        menuList.style.maxHeight = "0px";
        menuList.style.display = "none";
    }
}
