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
            name: "rythm",
            title: "Ritme",
            description: "Velocitat, acceleració i agilitat",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "shooting",
            title: "Xut",
            description: "Remat a porta, xut de llarga distància, remat de cap",
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "passing",
            title: "Passada",
            description: "Passades curtes, llargues, centrades, visió de joc",
            validation: Rule => Rule.required(),
        },

        {
            type: "number",
            name: "dribbling",
            title: "Regat",
            description: "Driblatge, control de pilota, conducció",
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
            description: "Resistència, força, salt, equilibri",
            validation: Rule => Rule.required(),
        },

    ],

    preview: {
        // Name + average of the attributes
        select: {
            title: "name",
            attack: "attack",
            defense: "defense",
            physical: "physical",
            vision: "vision",
        },
        prepare({ title, attack, defense, physical, vision }) {
            const average = (attack + defense + physical + vision) / 4;
            return {
                title: title,
                subtitle: `(${average})`,
            };
        },

    },
};
