export const Player = {
    title: "Jugador",
    name: "player",
    type: "document",
    description:
        "Un jugador amb els seus atributs.",
    fields: [
        {
            type: "string",
            name: "name",
            title: "Nom",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "attack",
            title: "Atac",
            description: "Remat, posicionament ofensio, presa de decisions en atac",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "defense",
            title: "Defensa",
            description: "Marcatge, posicionament defensiu, robar, baixar a defensar",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "physical",
            title: "Físic",
            description: "Velocitat i resistència",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "vision",
            title: "Visió",
            description: "Visió de joc, passada, decisions amb pilota",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "technique",
            title: "Tècnica",
            description: "Control de pilota, driblatge, primer toc",
            validation: Rule => Rule.required(),
        },
    ],

    preview: {
        // Name + average of the attributes
        select: {
            title: "name",
            rythm: "rythm",
            shooting: "shooting",
            passing: "passing",
            dribbling: "dribbling",
            defense: "defense",
            physical: "physical",
        },
        prepare({ title, rythm, shooting, passing, dribbling, defense, physical }) {
            const average = (rythm + shooting + passing + dribbling + defense + physical) / 6
            return {
                title: title,
                subtitle: `(${average.toFixed(2)})`,
            };
        },

    },
};
