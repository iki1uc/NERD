function NCEnergie(home, ort, weg) {
    const scan = `SCAN:${home}`;
    const loop = `LOOP:${ort}`;
    const shift = `SHIFT:${weg}`;

    return {
        energie: {
            scan,
            loop,
            shift
        },
        core: `NC-Energie-${home}${ort}${weg}`
    };
}
