const resultToTitle = (result: string) => {
    switch (result) {
        case "white":
            return "Victòria ◻️";
        case "dark":
            return "Victòria ◼️";
        case "draw":
            return "Empat";
        default:
            return "";
    }
}
export const Match = {
    title: "Partit",
    name: "match",
    type: "document",
    description:
        "A match played between two sets of players, with a result and a date.",
    fields: [
        {
            type: "date",
            name: "date",
            title: "Data",
            description: "Data del partit",
            validation: Rule => Rule.required(),
        },
        {
            name : "localTeam",
            title : "Equip ◻️",
            type : "array",
            of : [{ type : "reference", to : [{ type : "player" }] }],
            validation: Rule => Rule.required(),
        },
        {
            name : "awayTeam",
            title : "Equip ◼️",
            type : "array",
            of : [{ type : "reference", to : [{ type : "player" }] }],
            validation: Rule => Rule.required(),
        },
        {
            name: 'result',
            title: 'Resultat',
            type: 'string',
            description: "Guanyador",
            options: {
              list: [
                { title: 'Equip ◻️', value: 'white' },
                { title: 'Equip ◼️', value: 'dark' },
                { title: 'Empat', value: 'draw' }
              ],
              layout: 'radio' 
            }
          }
    ],

    preview: {
        // date + result + localTeam + awayTeam
        select: {
            date: "date",
            result: "result",
        },
        prepare({ date, result }) {
            return {
                title: `${date} - ${resultToTitle(result)}`,
            };
        },
    },
};
