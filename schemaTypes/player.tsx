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
            validation: Rule => Rule.required(),
        },
        {
            type: "number",
            name: "defense",
            title: "Defensa",
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
